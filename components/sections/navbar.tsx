import Image from "next/image";
import Link from "next/link";

import { siteContent } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-burgundy/10 bg-brand-ivory/60 backdrop-blur-xl">
      <div className="nav-shell flex min-h-[4.5rem] items-center justify-between py-2.5">
        {/* Brand — left edge */}
        <Link href="#top" className="group flex items-center gap-3">
          <div className="rounded-full border border-brand-gold/55 bg-white/90 p-1.5 transition duration-300 group-hover:scale-105 group-hover:shadow-premium">
            <Image src="/logo.png" alt={siteContent.company.name} width={40} height={40} className="h-9 w-9 rounded-full" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold tracking-[0.22em] text-brand-burgundy">{siteContent.company.name}</p>
            <p className="text-[11px] tracking-[0.06em] text-brand-burgundy/70">{siteContent.company.subtitle}</p>
          </div>
        </Link>

        {/* Nav links — right edge, spread out */}
        <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
          {siteContent.nav.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative text-[13px] font-medium uppercase tracking-[0.08em] text-brand-burgundy/90 transition duration-300 hover:text-brand-burgundy"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 rounded-full bg-brand-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
