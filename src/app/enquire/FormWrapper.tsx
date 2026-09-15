"use client";

import { useSearchParams } from 'next/navigation';
import SinglePageForm from '@/components/ui/SinglePageForm';
import { featuredDestinations, popularJourneys } from '@/lib/data';

export default function FormWrapper() {
  const searchParams = useSearchParams();
  const journeySlug = searchParams.get('journey');
  const destinationSlug = searchParams.get('destination');
  const serviceParam = searchParams.get('service');
  
  let initialDestination = '';
  let initialService = '';

  if (serviceParam) {
    const lower = serviceParam.toLowerCase();
    if (lower.includes('visa')) initialService = "Visa Services";
    else if (lower.includes('flight')) initialService = "Flight Booking";
    else if (lower.includes('hotel')) initialService = "Hotel Booking";
    else if (lower.includes('honeymoon')) initialService = "Honeymoon Package";
    else if (lower.includes('group')) initialService = "Group Tour";
    else if (lower.includes('corp')) initialService = "Corporate Travel";
    else if (lower.includes('cruise')) initialService = "Cruise";
    else initialService = serviceParam;
  }
  
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
      initialService={initialService}
    />
  );
}
