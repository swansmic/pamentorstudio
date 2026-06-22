import type { Metadata } from "next";
import { WatchPageEvents, ApplyButton } from "./watch-client";

export const metadata: Metadata = {
  title: "Watch the Masterclass | PA Mentor Studio",
  description:
    "What Admissions Committees Really Look For: insights from reviewing 3,000+ PA school applications.",
  robots: { index: false, follow: false },
};

export default function MasterclassWatchPage() {
  return (
    <>
      <WatchPageEvents />

      {/* ─── VIDEO ─── */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            Free Masterclass
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-4">
            What Admissions Committees Really Look For
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            Insights From Reviewing 3,000+ PA School Applications
          </p>

          <div className="aspect-video w-full rounded border border-border bg-black overflow-hidden">
            <video
              className="w-full h-full"
              controls
              preload="metadata"
              title="What Admissions Committees Really Look For"
            >
              <source src="/PA Admissions Training Slide Deck 2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <p className="text-sm text-muted-foreground mt-6 text-center">
            Presented by Michelle Strange, DMSc, PA-C, RDCS &middot; PA
            Educator &middot; Admissions Chair
          </p>
        </div>
      </section>

      {/* ─── NEXT STEP CTA ─── */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
            Ready for More
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            Applications for PA Mentor Studio are now open. Work with Michelle
            directly to build your application with purpose and strategy, guided
            by someone who has reviewed more than 3,000 applications and sat on
            the other side of the table.
          </p>
          <ApplyButton />
          <p className="text-xs text-muted-foreground mt-5">
            Applications are reviewed individually. Enrollment is limited by
            design.
          </p>
        </div>
      </section>
    </>
  );
}
