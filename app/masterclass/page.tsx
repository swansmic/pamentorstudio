import type { Metadata } from "next";
import { RegisterForm } from "./register-form";

export const metadata: Metadata = {
  title: "What Admissions Committees Really Look For | Free Masterclass",
  description:
    "Discover the seven mistakes that cause qualified PA applicants to get overlooked. Free masterclass from Michelle Strange, DMSc, PA-C, RDCS — admissions chair and reviewer of 3,000+ PA applications.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "What Admissions Committees Really Look For | Free Masterclass",
    description:
      "Discover the seven mistakes that cause qualified PA applicants to get overlooked. Free masterclass presented by Michelle Strange, DMSc, PA-C, RDCS.",
    type: "website",
  },
};

const learnItems = [
  {
    number: "01",
    heading: "What Admissions Committees Actually Evaluate",
    body: "The criteria programs use to assess candidates are not always what applicants assume. This training reveals what reviewers are actually looking for — and how those criteria are applied.",
  },
  {
    number: "02",
    heading: "The Biggest Admissions Myths",
    body: "Several widely accepted beliefs about PA admissions are incorrect — and acting on them can quietly weaken an otherwise strong application.",
  },
  {
    number: "03",
    heading: "The Seven Mistakes Hurting Qualified Applicants",
    body: "These specific patterns consistently separate candidates who receive interviews from those who do not, regardless of grades or clinical hours.",
  },
  {
    number: "04",
    heading: "The Competitive Applicant Blueprint",
    body: "A strategic framework for building an application that communicates not just what you have done, but who you are and why you belong in this profession.",
  },
  {
    number: "05",
    heading: "How Successful Applicants Differentiate Themselves",
    body: "What separates applicants who stand out from those who blend in — and how to build genuine distinction before you ever write a word of your application.",
  },
  {
    number: "06",
    heading: "Long-Term Admissions Strategy",
    body: "How to approach your application journey with intention, starting earlier than most students realize, to strengthen every element of your candidacy over time.",
  },
];

const mistakes = [
  {
    number: "01",
    title: "Chasing Hours Instead of Purpose",
    teaser:
      "Logging hours is not the same as building a clinical story. Admissions committees are not counting — they are reading for depth, intention, and genuine engagement with patient care. High hour counts without meaningful reflection rarely stand out.",
  },
  {
    number: "02",
    title: "Treating Experiences Like Checkboxes",
    teaser:
      "Many applicants list experiences as credentials rather than as evidence of growth. How you reflect on what you have done — and what it taught you — matters more than the experiences themselves.",
  },
  {
    number: "03",
    title: "Weak Personal Statements",
    teaser:
      "The personal statement is not a resume summary. Most applicants underuse this space — producing a narrative that is technically complete but strategically flat, missing the opportunity to make a lasting impression.",
  },
  {
    number: "04",
    title: "Applying Without a Strategy",
    teaser:
      "Program selection, application timing, and the sequencing of your experiences are decisions that compound over time. Approached casually, they quietly cost applicants interviews at programs that could have been a strong fit.",
  },
  {
    number: "05",
    title: "Ignoring Program Mission Fit",
    teaser:
      "Programs have identities and values. Applicants who demonstrate genuine alignment with a program's mission are more compelling than well-qualified generalists who apply identically to every school.",
  },
  {
    number: "06",
    title: "Generic Interview Preparation",
    teaser:
      "Most interview prep focuses on memorizing answers. Strong candidates understand the conversation committees are actually trying to have — and show up differently because of it.",
  },
  {
    number: "07",
    title: "Trying To Figure Everything Out Alone",
    teaser:
      "The information freely available online is incomplete, often contradictory, and rarely reflects what programs actually value. Navigating this process without expert guidance is the most common — and most costly — mistake.",
  },
];

const faqItems = [
  {
    question: "How long is the training?",
    answer: "Approximately 35–45 minutes.",
  },
  {
    question: "Is this training free?",
    answer: "Yes. There is no cost and no credit card required.",
  },
  {
    question: "Will this help if I'm not applying this year?",
    answer:
      "Yes. The earlier you understand how the admissions process works, the more strategically you can build your application. Much of what is covered applies to students who are one to three years away from applying — and some of it is most valuable when applied early.",
  },
  {
    question: "Does this guarantee admission?",
    answer:
      "No. Nothing can guarantee admission to PA school. This training is designed to help you understand the process more clearly, make better decisions, and build an application with purpose — which meaningfully improves your candidacy.",
  },
];

function RegistrationCard({ id }: { id: string }) {
  return (
    <div className="bg-card border border-border rounded p-8 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
        Free Masterclass
      </p>
      <p className="font-heading text-xl font-semibold text-foreground leading-snug mb-6">
        Watch the Training Now
      </p>
      <RegisterForm id={id} />
    </div>
  );
}

export default function MasterclassPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                Free Masterclass
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-foreground leading-tight mb-6">
                What Admissions Committees Really Look For
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                Discover the seven mistakes that cause qualified PA applicants to
                get overlooked — and learn what admissions committees actually
                evaluate when making interview and admission decisions.
              </p>
              <div className="border-l-2 border-accent pl-5">
                <p className="font-medium text-foreground text-sm">
                  Michelle Strange, DMSc, PA-C, RDCS
                </p>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  PA Educator &middot; Admissions Chair &middot; Reviewer of
                  3,000+ PA Applications
                </p>
              </div>
            </div>

            <div className="lg:sticky lg:top-8">
              <RegistrationCard id="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section className="py-20 md:py-28 border-b border-border bg-muted/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
            The Problem
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-10">
            Most PA Applicants Focus on the Wrong Things
          </h2>

          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed mb-12">
            <p>
              Every year, thousands of qualified students apply to PA programs.
            </p>
            <p>
              Many have strong grades. Many have healthcare experience. Many work
              incredibly hard.
            </p>
            <p>Yet many never receive an interview.</p>
            <p className="text-foreground font-medium">
              The difference is often not intelligence.
            </p>
            <p className="text-foreground font-semibold text-xl">
              It is strategy.
            </p>
          </div>

          <div className="border border-border rounded bg-card p-8">
            <p className="font-heading text-xl md:text-2xl text-foreground italic leading-relaxed">
              &ldquo;A high GPA may get you noticed. A compelling application
              gets you admitted.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHAT YOU'LL LEARN ─── */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Masterclass Content
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground leading-tight max-w-xl">
              Inside This Free Masterclass
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learnItems.map((item) => (
              <div
                key={item.number}
                className="border border-border rounded bg-card p-7"
              >
                <p className="text-xs font-semibold tracking-widest text-muted-foreground mb-4 font-sans">
                  {item.number}
                </p>
                <h3 className="font-heading text-lg font-semibold text-foreground leading-snug mb-3">
                  {item.heading}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SEVEN MISTAKES ─── */}
      <section className="py-20 md:py-28 border-b border-border bg-muted/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              The Seven Mistakes
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground leading-tight max-w-2xl">
              Why Qualified Applicants Get Passed Over
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
              These patterns appear repeatedly across applications. Recognizing
              them — and understanding why they matter — is the first step to
              avoiding them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {mistakes.map((m) => (
              <div
                key={m.number}
                className="border border-border rounded bg-card p-7 flex gap-5"
              >
                <div className="flex-shrink-0 pt-0.5">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted border border-border text-xs font-semibold text-muted-foreground font-sans">
                    {m.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {m.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {m.teaser}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mid-page CTA nudge */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto leading-relaxed">
              The full training walks through each of these mistakes in detail —
              and what to do instead.
            </p>
            <a
              href="#final-cta"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded hover:bg-primary/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
            >
              Watch the Free Training
            </a>
          </div>
        </div>
      </section>

      {/* ─── ABOUT MICHELLE ─── */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12 items-start">
            {/* Headshot placeholder */}
            <div className="max-w-[240px]">
              <div className="aspect-[3/4] w-full rounded border border-border bg-muted flex flex-col items-center justify-end overflow-hidden">
                <div className="bg-secondary/70 w-full py-4 px-3 text-center border-t border-border">
                  <p className="text-xs text-muted-foreground font-medium leading-snug">
                    Professional headshot
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
                Meet Your Instructor
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-1">
                Michelle Strange
              </h2>
              <p className="text-muted-foreground text-sm mb-8">
                DMSc, PA-C, RDCS
              </p>

              <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
                <p>
                  PA educator, admissions chair, and founder of PA Mentor Studio.
                </p>
                <p>
                  After reviewing more than 3,000 PA school applications and
                  participating in admissions decisions, Michelle has seen
                  firsthand why some applicants stand out while others are
                  overlooked — and it rarely comes down to what most students
                  assume.
                </p>
                <p>
                  She created this training to help aspiring PA students better
                  understand the admissions process and build applications with
                  purpose and strategy, grounded in what committees are actually
                  looking for.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    stat: "3,000+",
                    label: "PA school applications reviewed as admissions chair",
                  },
                  {
                    stat: "Longitudinal",
                    label: "Mentorship structures built for the full admissions journey",
                  },
                ].map((item) => (
                  <div key={item.stat} className="border-l-2 border-accent pl-5">
                    <p className="font-heading text-xl font-semibold text-foreground mb-1">
                      {item.stat}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO IT'S FOR ─── */}
      <section className="py-20 md:py-28 border-b border-border bg-muted/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
                Is This for You?
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-6">
                Who This Training Is For
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This masterclass is designed for students who are serious about
                the admissions process and want to understand it from the inside
                — not just collect generic advice from forums and Reddit threads.
              </p>
            </div>

            <ul className="space-y-5">
              {[
                {
                  label: "Future PA applicants",
                  desc: "Students in the early stages of their pre-PA path who want to build intentionally from the start — before habits form.",
                },
                {
                  label: "Current applicants",
                  desc: "Students actively preparing or applying who want to ensure they are positioning themselves effectively before submitting.",
                },
                {
                  label: "Reapplicants",
                  desc: "Students who have applied before and want to understand what may have missed the mark — and how to approach the next cycle differently.",
                },
                {
                  label: "Career changers",
                  desc: "Professionals transitioning to the PA profession who want to understand how their background translates — and where the gaps are.",
                },
                {
                  label: "Students seeking insider perspective",
                  desc: "Anyone who wants admissions guidance from someone who has actually participated in the decisions — not someone who has only applied themselves.",
                },
              ].map((item) => (
                <li key={item.label} className="flex gap-4 items-start">
                  <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full border border-accent flex items-center justify-center">
                    <span className="block w-1.5 h-1.5 rounded-full bg-accent" />
                  </span>
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      {item.label}
                    </p>
                    <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section id="final-cta" className="py-20 md:py-28 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-6">
                Don&rsquo;t Spend Years Building an Application Based on
                Guesswork
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Learn what admissions committees actually look for — and how
                successful applicants position themselves for success.
              </p>
              <ul className="space-y-3">
                {[
                  "Free masterclass. No credit card required.",
                  "Approximately 35–45 minutes.",
                  "Taught by an admissions chair and reviewer of 3,000+ applications.",
                  "Applicable whether you are 1 year or 4 years from applying.",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{point}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <RegistrationCard id="final" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
            Questions
          </p>
          <h2 className="font-heading text-3xl font-semibold text-foreground mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="border-b border-border pb-8 last:border-b-0 last:pb-0"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                  {item.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
