import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export const Contact = () => (
  <section id="contact" className="py-20 lg:py-28 bg-light-gray">
    <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="text-[11px] uppercase tracking-[0.3em] text-accent-red font-bold mb-4">
          — Your personal contact
        </div>
        <h2 className="font-display uppercase text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
          Do you have questions?
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-lg">
          Would you like professional advice? Simply contact our VTECH
          specialists — we respond within one business day.
        </p>
        <a
          href="mailto:vignesh@vtechindustries.co.in"
          className="mt-8 inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red-hover text-white px-8 py-4 font-display uppercase tracking-wider font-bold text-sm transition-colors"
        >
          Contact us <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="bg-white p-8 lg:p-10 border-t-4 border-accent-red shadow-[var(--shadow-card)] space-y-6">
        <div className="flex gap-4">
          <div className="w-11 h-11 flex items-center justify-center bg-navy text-white shrink-0">
            <Phone className="w-5 h-5" strokeWidth={1.5} />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              Phone
            </div>
            <a href="tel:+917845922919" className="block text-navy font-semibold hover:text-accent-red">
              +91 78459 22919
            </a>
            <a href="tel:+919840890919" className="block text-navy font-semibold hover:text-accent-red">
              +91 98408 90919
            </a>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-11 h-11 flex items-center justify-center bg-navy text-white shrink-0">
            <Mail className="w-5 h-5" strokeWidth={1.5} />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              Email
            </div>
            <a
              href="mailto:vignesh@vtechindustries.co.in"
              className="text-navy font-semibold hover:text-accent-red break-all"
            >
              vignesh@vtechindustries.co.in
            </a>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-11 h-11 flex items-center justify-center bg-navy text-white shrink-0">
            <MapPin className="w-5 h-5" strokeWidth={1.5} />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              Factory
            </div>
            <p className="text-navy font-semibold leading-snug">
              62/1, Mettuthangal, Thirumazhisai,<br />
              Chennai – 600124, Tamil Nadu, India
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
