import { PrismaClient } from '@prisma/client';
import path from 'path';
import fs from 'fs';

const getPrismaClient = () => {
  if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME) {
    try {
      const tmpDbPath = '/tmp/dev.db';
      const sourceDb = path.join(process.cwd(), 'prisma', 'dev.db');
      if (!fs.existsSync(tmpDbPath)) {
        if (fs.existsSync(sourceDb)) {
          fs.copyFileSync(sourceDb, tmpDbPath);
        } else {
          fs.writeFileSync(tmpDbPath, '');
        }
      }
      return new PrismaClient({
        datasources: {
          db: {
            url: `file:${tmpDbPath}`
          }
        }
      });
    } catch (e) {
      console.warn('Prisma tmp setup note:', e);
    }
  }

  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: PrismaClient;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? getPrismaClient();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;
