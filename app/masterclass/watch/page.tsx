import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Watch the Masterclass | PA Mentor Studio",
  description:
    "What Admissions Committees Really Look For — insights from reviewing 3,000+ PA school applications.",
  robots: { index: false, follow: false },
};

export default function MasterclassWatchPage() {
  return (
    <>
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

          {/* Video embed — replace src with actual embed URL when ready */}
          <div className="aspect-video w-full rounded border border-border bg-muted overflow-hidden">
            {/* Uncomment and replace with your embed URL when the video is ready:
            <iframe
              src="https://player.vimeo.com/video/YOUR_VIDEO_ID?autoplay=0"
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="What Admissions Committees Really Look For"
            />
            */}
            <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-8 text-center">
              <div className="w-20 h-20 rounded-full border-2 border-border bg-card flex items-center justify-center">
                <div
                  className="ml-1.5 w-0 h-0"
                  style={{
                    borderTop: "12px solid transparent",
                    borderBottom: "12px solid transparent",
                    borderLeft: "20px solid var(--foreground)",
                  }}
                />
              </div>
              <div>
                <p className="font-heading text-xl font-semibold text-foreground mb-2">
                  Training Video Coming Soon
                </p>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                  Your spot is reserved. You will receive an email when the
                  training is available.
                </p>
              </div>
            </div>
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
            directly to build your application with purpose and strategy — guided
            by someone who has reviewed more than 3,000 applications and sat on
            the other side of the table.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold rounded hover:bg-primary/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
          >
            Apply for Mentorship
          </Link>
          <p className="text-xs text-muted-foreground mt-5">
            Applications are reviewed individually. Enrollment is limited by
            design.
          </p>
        </div>
      </section>
    </>
  );
}
