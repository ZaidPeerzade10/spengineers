
import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'View our gallery of precision-engineered parts, advanced machinery, and our state-of-the-art workshop at SP Engineering.',
};

const galleryItems = [
    { type: 'video', src: "/gal8.mp4", alt: "Machine in action" },
    { type: 'video', src: "/gal7.mp4", alt: "Industrial process" },
    { type: 'image', src: "/gal2.png", alt: "Precision machined component" },
    { type: 'image', src: "/gal3.png", alt: "Workshop machinery" },
    { type: 'image', src: "/gal4.png", alt: "Finished metal parts" },
    { type: 'image', src: "/gal5.png", alt: "Finished metal parts" },
    { type: 'image', src: "/gal6.png", alt: "Engineer at work" },
    { type: 'image', src: "/gal1.png", alt: "CNC machine operation" },
  ];
  

export default function GalleryPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-center text-white">
        <Image
          src="/gallery-hero.jpg"
          alt="Collection of machined parts"
          fill
          className="object-cover -z-10"
        />
        <div className="absolute inset-0 bg-primary/70 -z-10" />
        <div className="container px-4 md:px-6">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter" style={{ color: '#206097' }}>
            Our Gallery
          </h1>
          <p className="mt-2 text-lg md:text-xl text-primary-foreground/90" style={{ color: '#206097' }}>A Glimpse into Our World of Precision</p>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">Our Work & Workshop</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground md:text-lg">
              Browse through images of our machinery, work samples, and the environment where precision engineering comes to life.
            </p>
          </div>

          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg aspect-w-1 aspect-h-1">
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    loop
                    muted
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="md:hidden">
            <Carousel className="w-full max-w-xs mx-auto" opts={{ loop: true }}>
              <CarouselContent>
                {galleryItems.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden rounded-lg">
                          {item.type === 'video' ? (
                            <video
                                src={item.src}
                                loop
                                muted
                                autoPlay
                                playsInline
                                className="w-full h-full object-cover"
                            />
                            ) : (
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={400}
                                height={400}
                                className="w-full h-full object-cover"
                            />
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
