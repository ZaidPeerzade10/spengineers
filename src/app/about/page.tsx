
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about SP Engineering\'s story, expertise, vision, mission, and philosophy.',
};

const aboutPoints = [
  'Provide a great work environment and treat each other with respect and dignity',
  'Make each customer habitual of our parts and services with help of highest degree of flexibility.',
  'Contribute prosperity and positivity to our employee and communities.',
  'Believe on doing things religiously.',
];

const visionPoints = [
  'Our vision is to reliable long term manufacturing partner of modern industrial companies in India & contribute substantially to the development of innovative & high added value industries.',
  'To be the preferred partner, sharing expertise & delivering value on-time always. We nurture a performance culture & develop our people. We innovate to grow & diversify our business.',
  'To become most admirable and respected organization in the field of precision part manufacturing with the help of continuous growth and ethical work cultural.',
];

const missionPoints = [
  'To achieve sustainable growth by using the better technology in product development & manufacturing & better process driven methodologies offering value added services to our customers.',
  'To be and remain the customer’s first choice.',
  'Adapt advance and latest technology.',
  'Cultivate lean and flexible manufacturing culture.',
  'Delight our customers with continual improvement in Quality, cost and service.',
];

const philosophyPoints = [
  'Hire high quality motivated people.',
  'Give our people high quality equipments & tools to work with.',
  'Provide a clean & safe working environment.',
  'Provide opportunities & encourage personal growth.',
  'Offer training & guidance where needed.',
  'Allow people to make decisions within their area of responsibility.',
  'Get out of their way & let them do their jobs.',
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-center text-white">
        <Image
          src="/hero-1.png"
          alt="Workshop panoramic view"
          fill
          className="object-cover -z-10"
        />
        <div className="absolute inset-0 bg-primary/70 -z-10" />
        <div className="container px-4 md:px-6">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter" style={{ color: '#206097' }}>
            About SP Engineering
          </h1>
          <p className="mt-2 text-lg md:text-xl text-primary-foreground/90" style={{ color: '#206097' }}>Precision. Experience. Dedication.</p>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6 space-y-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">About Us</h2>
              <ul className="space-y-4">
                {aboutPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground md:text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-20">
              <Image
                src="/hero-3.png"
                alt="SP Engineering workshop"
                width={600}
                height={450}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-center">Our Vision</h2>
            <ul className="space-y-4 max-w-4xl mx-auto">
              {visionPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <span className="text-muted-foreground md:text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-24 bg-secondary/50">
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">Our Mission</h2>
                <ul className="space-y-4">
                {missionPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground md:text-lg">{point}</span>
                    </li>
                ))}
                </ul>
            </div>
            <div className="space-y-6">
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">Our Philosophy</h2>
                <ul className="space-y-4">
                {philosophyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground md:text-lg">{point}</span>
                    </li>
                ))}
                </ul>
            </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container text-center px-4 md:px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">Explore Our Work</h2>
          <p className="max-w-xl mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
            See the quality and precision of our work for yourself.
          </p>
          <Button asChild size="lg" className="font-bold mt-8">
            <Link href="/gallery">View Gallery</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
