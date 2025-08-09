
import type { Metadata } from 'next';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with SP Engineering. Find our contact details, address, and use the contact form for any inquiries.',
};

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-center text-white">
        <Image
          src="/contact.jpg"
          alt="Contact SP Engineering"
          fill
          className="object-cover -z-10"
        />
        <div className="absolute inset-0 bg-primary/70 -z-10" />
        <div className="container px-4 md:px-6">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter" style={{ color: '#206097' }}>
            Contact Us
          </h1>
          <p className="mt-2 text-lg md:text-xl text-primary-foreground/90" style={{ color: '#206097' }}>We're here to help. Reach out to us anytime.</p>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="font-headline text-3xl font-bold tracking-tighter">Get in Touch</h2>
                <p className="mt-2 text-muted-foreground">Fill out the form and our team will get back to you within 24 hours.</p>
              </div>
              <ContactForm />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-headline text-2xl font-bold">Our Office</h3>
                <address className="not-italic mt-4 space-y-4 text-muted-foreground">
                  <p className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 mt-1 shrink-0 text-primary" />
                    <a href="https://maps.app.goo.gl/MMSgNwq1mK2wpsZ46?g_st=ac" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      Nai Tapa School, Bhosari, Pune - 411026
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-primary" />
                    <span>
                      <a href="tel:+918007512591" className="hover:text-primary transition-colors">+91 8007512591</a>, <a href="tel:+918830142730" className="hover:text-primary transition-colors">+91 8830142730</a>
                    </span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-primary" />
                    <a href="mailto:spengineering2025@gmail.com" className="hover:text-primary transition-colors">spengineering2025@gmail.com</a>
                  </p>
                </address>
              </div>
              <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.7525297022344!2d73.84263609999999!3d18.6301974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7005dfbc133%3A0x73065698ca84d01a!2sS%20P%20Engineering%20(Cylindrical%20%26%20Lathe%20machine%20work)!5e0!3m2!1sen!2sin!4v1754738182790!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SP Engineering Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
