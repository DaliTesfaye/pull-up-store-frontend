import Link from "next/link";
import { Container } from "./container";
import { Separator } from "./ui/separator";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  const footerLinks = {
    shop: [
      { label: "Collections", href: "/collections" },
      { label: "New Arrivals", href: "/shop/new-arrivals" },
      { label: "Best Sellers", href: "/shop/best-sellers" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Return Policy", href: "/return-policy" },
    ],
  };
  return (
    <footer className="border-t bg-muted/30 mt-24">
      <Container>
        <div className="py-16">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {/* Brand Section */}
            <div className="col-span-2 lg:col-span-1">
              <Link
                href="/"
                className="font-serif text-2xl font-semibold tracking-tight"
              >
                PULL UP STORE
              </Link>
              <p className="mt-4 text-sm text-muted-foreground max-w-xs">
                Premium streetwear for the modern fashion enthusiast.
              </p>
            </div>

            {/* Shop Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Shop
              </h3>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Separator Line */}
          <Separator className="my-8" />

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Pull Up Store. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>

              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
