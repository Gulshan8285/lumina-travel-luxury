'use client';

import React, { useState } from 'react';
import styles from './RannFaqAccordion.module.css';

export interface FaqItem {
  q: string;
  a: string;
  hasLink?: boolean;
}

interface RannFaqAccordionProps {
  faqs: FaqItem[];
  defaultOpenIndex?: number | null;
  enquireAnchor?: string;
}

export default function RannFaqAccordion({
  faqs,
  defaultOpenIndex = null, // Hidden by default as requested!
  enquireAnchor = '#enquire-form'
}: RannFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleFaq = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className={styles.faqContainer}>
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        const buttonId = `rann-faq-btn-${idx}`;
        const panelId = `rann-faq-panel-${idx}`;

        return (
          <div
            key={idx}
            className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
          >
            <button
              type="button"
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className={styles.faqQuestionBtn}
              onClick={() => toggleFaq(idx)}
            >
              <span className={styles.faqQuestionText}>{faq.q}</span>
              <span
                className={`${styles.faqIconBox} ${isOpen ? styles.faqIconRotated : ''}`}
                aria-hidden="true"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`${styles.faqAnswerPanel} ${isOpen ? styles.faqAnswerVisible : ''}`}
            >
              <div className={styles.faqAnswerInner}>
                {faq.hasLink ? (
                  <p>
                    <a href={enquireAnchor} className={styles.faqInlineLink}>
                      Share your travel details with us
                    </a>
                    . Our Kutch specialists will check live tent availability, dates, and customize the best itinerary for you.
                  </p>
                ) : (
                  <p>{faq.a}</p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
