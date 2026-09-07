"use client";

import { useSearchParams } from 'next/navigation';
import SinglePageForm from '@/components/ui/SinglePageForm';
import { featuredDestinations, popularJourneys } from '@/lib/data';

export default function FormWrapper() {
  const searchParams = useSearchParams();
  const journeySlug = searchParams.get('journey');
  const destinationSlug = searchParams.get('destination');
  
  let initialDestination = '';
  
  if (journeySlug) {
    const journey = popularJourneys.find(j => j.slug === journeySlug);
    if (journey) {
      initialDestination = journey.destination;
    }
  } else if (destinationSlug) {
    const cleanSlug = destinationSlug.trim().toLowerCase().replace(/[\-_]/g, ' ');
    if (cleanSlug.includes('rajasthan')) {
      initialDestination = "Rajasthan";
    } else if (cleanSlug.includes('shimla') || cleanSlug.includes('manali')) {
      initialDestination = "Shimla & Manali";
    } else if (cleanSlug.includes('kerala')) {
      initialDestination = "Kerala";
    } else if (cleanSlug.includes('andaman')) {
      initialDestination = "Andaman";
    } else if (cleanSlug.includes('dubai') || cleanSlug.includes('uae')) {
      initialDestination = "Dubai";
    } else if (cleanSlug.includes('singapore')) {
      initialDestination = "Singapore";
    } else if (cleanSlug.includes('bali')) {
      initialDestination = "Bali";
    } else if (cleanSlug.includes('maldives')) {
      initialDestination = "Maldives";
    } else {
      const destination = featuredDestinations.find(
        d => d.slug.toLowerCase() === destinationSlug.toLowerCase() || 
             d.name.toLowerCase() === destinationSlug.toLowerCase()
      );
      if (destination) {
        initialDestination = destination.name;
      } else {
        initialDestination = destinationSlug;
      }
    }
  }

  return (
    <SinglePageForm 
      initialDestination={initialDestination} 
    />
  );
}
