import type { Metadata } from 'next';
import OMIAServicesLandingPage from '@/Landing/OMIAServicesLandingPage';
import { servicesMetadata } from '@Landing/data/servicesPage';

export const metadata: Metadata = {
  title: servicesMetadata.title,
  description: servicesMetadata.description,
};

export default function ServicesPage() {
  return <OMIAServicesLandingPage />;
}
