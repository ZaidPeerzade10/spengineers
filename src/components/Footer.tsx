import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

function SpLogo() {
    return (
        <Image src="/logo.png" alt="SP Engineering Logo" width={64} height={64} />
    )
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-6 py-12">
        <div className="flex flex-col space-y-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="font-headline text-2xl font-bold text-primary-foreground">SP Engineering</span>
          </Link>
          <p className="text-muted-foreground">Manufacturing & Machining</p>
        </div>

        <div className="md:col-span-1">
          <h3 className="font-headline text-lg font-semibold mb-4 text-primary-foreground">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-primary-foreground/80 transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-primary-foreground/80 transition-colors">Services</Link></li>
            <li><Link href="/gallery" className="hover:text-primary-foreground/80 transition-colors">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-primary-foreground/80 transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div className="md:col-span-2">
          <h3 className="font-headline text-lg font-semibold mb-4 text-primary-foreground">Contact Us</h3>
          <address className="not-italic space-y-4 text-muted-foreground">
            <p className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-1 shrink-0" />
              <a href="https://maps.app.goo.gl/MMSgNwq1mK2wpsZ46?g_st=ac" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80 transition-colors">
                Nai Tapa School, Bhosari, Pune - 411026
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0" />
              <span>
                <a href="tel:+918007512591" className="hover:text-primary-foreground/80 transition-colors">+91 8007512591</a>, <a href="tel:+918830142730" className="hover:text-primary-foreground/80 transition-colors">+91 8830142730</a>
              </span>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0" />
              <a href="mailto:spengineering2025@gmail.com" className="hover:text-primary-foreground/80 transition-colors">spengineering2025@gmail.com</a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-border/20 py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SP Engineering. All Rights Reserved.</p>
          <p>Designed by a helpful AI assistant.</p>
        </div>
      </div>
    </footer>
  );
}
