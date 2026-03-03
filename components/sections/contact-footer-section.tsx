import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/lib/constants";

export function ContactFooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative overflow-hidden bg-brand-burgundy py-16 text-white">
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-gold/15 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="section-shell space-y-10">
        <Reveal className="luxury-outline relative rounded-[1.5rem] border border-brand-gold/30 bg-white/5 p-6 md:p-9">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div className="space-y-4 md:pr-3">
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt={siteContent.company.name} width={62} height={62} className="float-soft h-14 w-14 rounded-full border border-brand-gold/70 bg-white p-1" />
              <div>
                <h2 className="text-2xl font-bold tracking-[0.12em]">{siteContent.company.name}</h2>
                <p className="text-sm text-white/90">{siteContent.company.subtitle}</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-brand-gold">{siteContent.contact.heading}</h3>
            <div className="space-y-2 text-white/95">
              {siteContent.contact.details.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </div>
          </div>

          <div className="grid w-full gap-6 sm:grid-cols-2">
            {siteContent.contact.founders.map((founder) => (
              <div key={founder.email} className="interactive-card min-w-0 rounded-[1rem] border border-brand-gold/35 bg-white/10 p-[1.45rem] backdrop-blur-sm hover:border-brand-gold/60">
                <p className="text-[1.07rem] font-semibold text-brand-gold">{founder.name}</p>
                <p className="mt-2 text-[1.02rem] text-white/95">{founder.phone}</p>
                <p className="text-[1.02rem] text-white/95">{founder.email}</p>
              </div>
            ))}
          </div>
        </div>
        </Reveal>

        <div className="space-y-2 border-t border-white/20 pt-6 text-sm text-white/90">
          <p>© {currentYear} Aurum Arena. All rights reserved.</p>
          <p>{siteContent.company.repeatingLine}</p>
        </div>
      </div>
    </footer>
  );
}
