import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore the expert services offered by SP Engineering, including heavy-duty cylindrical grinding, lathe machine work, and precision machining.',
};

const services = [
  {
    title: 'Heavy Duty Cylindrical Grinding',
    description: 'Our heavy-duty cylindrical grinding service is perfect for large components that require exceptional precision and a superior surface finish. We utilize advanced grinding machines capable of handling a wide range of materials and dimensions. Our process guarantees tight tolerances and perfect concentricity, making it ideal for industries like automotive, aerospace, and heavy machinery.',
    image: {
      src: '/cyli.png',
      alt: 'Cylindrical grinding machine in operation'
    }
  },
  {
    title: 'Lathe Machine Work',
    description: 'SP Engineering provides expert lathe machine services for turning, facing, threading, and drilling. Our skilled machinists operate both manual and CNC lathes to produce high-quality cylindrical parts, from simple shafts to complex components with intricate features. We work with a variety of metals to create parts that perfectly match your designs and specifications.',
    image: {
      src: '/lath.png',
      alt: 'Lathe machine shaping a metal component'
    }
  },
  {
    title: 'Precision Machining',
    description: 'Our precision machining capabilities allow us to produce complex parts with the tightest tolerances. Using state-of-the-art CNC milling and turning centers, we can manufacture components from various materials, including steel, aluminum, and exotic alloys. From prototype to production, we deliver parts that meet the most demanding requirements of modern industry.',
    image: {
      src: '/prec.png',
      alt: 'A finished precision-machined metal part'
    }
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-center text-white">
        <Image
          src="/services-hero.jpg"
          alt="Close-up of industrial machinery"
          fill
          className="object-cover -z-10"
        />
        <div className="absolute inset-0 bg-primary/70 -z-10" />
        <div className="container px-4 md:px-6">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter" style={{ color: '#206097' }}>
            Our Expert Services
          </h1>
          <p className="mt-2 text-lg md:text-xl text-primary-foreground/90" style={{ color: '#206097' }}>Engineered for Precision and Performance</p>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6 space-y-16">
          {services.map((service, index) => (
            <div key={service.title} className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">{service.title}</h2>
                <p className="text-muted-foreground md:text-lg">
                  {service.description}
                </p>
              </div>
              <div>
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-24 bg-secondary/50">
        <div className="container text-center px-4 md:px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">Have a Project in Mind?</h2>
          <p className="max-w-xl mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
            We're ready to provide the precision solutions you need. Contact us today to discuss your requirements and get a free quote.
          </p>
          <Button asChild size="lg" className="font-bold mt-8">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
