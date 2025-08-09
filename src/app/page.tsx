
"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cog, Cpu, Layers, CheckIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";

const slideshowImages = [
  { src: "/hero-1.png", alt: "Workshop" },
  { src: "/hero-2.png", alt: "Engineer working on a lathe" },
  { src: "/hero-3.png", alt: "Industrial machinery" },
  { src: "/hero-4.png", alt: "Industrial machinery" },
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Cog className="w-12 h-12 text-primary" />,
      title: "Heavy Duty Cylindrical Grinding",
      description: "High-precision grinding services for heavy-duty components, ensuring perfect dimensions and surface finish.",
    },
    {
      icon: <Layers className="w-12 h-12 text-primary" />,
      title: "Lathe Machine Work",
      description: "Expert lathe work for creating cylindrical parts with unparalleled accuracy and consistency.",
    },
    {
      icon: <Cpu className="w-12 h-12 text-primary" />,
      title: "Precision Machining",
      description: "Advanced machining solutions to produce complex parts that meet the most stringent specifications.",
    },
  ];

  return (
    <div className="flex flex-col">
      <Head>
        {slideshowImages.map((image, index) => (
          <link
            key={`preload-${index}`}
            rel="preload"
            href={image.src}
            as="image"
          />
        ))}
      </Head>
       <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-center text-white">
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 -z-10"
          >
            <Image
              src={slideshowImages[currentImageIndex].src}
              alt={slideshowImages[currentImageIndex].alt}
              fill
              className="object-cover"
              priority={true}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/60 -z-10" />
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              SP Engineering
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Manufacturing & Machining Excellence
            </p>
            <p className="max-w-xl mx-auto text-primary-foreground/80">
              Delivering superior quality and precision in every component. Your trusted partner for heavy-duty grinding and lathe work.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" className="font-bold">
                <Link href="/services">Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">Our Core Services</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
              We specialize in a range of services designed to meet your manufacturing needs with precision and reliability.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="bg-card hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="items-center">
                  {service.icon}
                  <CardTitle className="font-headline mt-4 text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">Why Choose SP Engineering?</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                With decades of combined experience, state-of-the-art machinery, and a commitment to quality, we are equipped to handle your most demanding projects.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span>Uncompromising Quality Control</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span>On-Time Delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span>Competitive Pricing</span>
                </li>
              </ul>
              <Button asChild size="lg" className="font-bold mt-4">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
            <div>
              <Image
                src="/hero-3.png"
                alt="Workshop"
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-background">
        <div className="container text-center px-4 md:px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">Ready to Start Your Project?</h2>
          <p className="max-w-xl mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
            Let's discuss how we can bring our precision and expertise to your manufacturing needs.
          </p>
          <Button asChild size="lg" className="font-bold mt-8">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
