import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ContentSection } from "@/components/sections/content-section";
import { CtaSection } from "@/components/sections/cta-section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Student Q&A",
  description:
    "Admissions advice from an experienced PA school admissions committee chair. Real answers to the questions pre-PA students ask most.",
  path: "/student-qa",
});

interface QaItem {
  category: string;
  question: string;
  paragraphs: string[];
  takeaway: string;
}

const qaItems: QaItem[] = [
  {
    category: "Interview",
    question:
      'How should I answer the interview question, "Tell me about yourself?" I was planning to talk about enjoying science in high school and working as a PCA during college.',
    paragraphs: [
      'Skip the life timeline. "Tell me about yourself" is an invitation, not a biography request.',
      'I have heard thousands of answers to this question, and the majority sound almost identical: "I grew up loving science, I started volunteering in a hospital in high school, and then I worked as a PCA in college." That answer is not wrong. It is just forgettable. When a committee member can predict your next sentence before you say it, you have already lost the room.',
      "What the committee is actually asking is: who are you, and why should we remember you? This is your chance to set the tone for the entire interview. Do not waste it summarizing your resume. They already have it.",
      "Instead, pick one theme that genuinely defines you. Not your whole story, just one thread. Maybe it is the way a specific clinical experience completely changed how you thought about patient care. Maybe it is a challenge you overcame that shaped your resilience. Maybe it is a perspective most applicants in that room simply do not have.",
      "Here is how to find it: before your interview, write down three things you are genuinely proud of and three things that make your path to PA different from most. Then pick the one that feels most authentically yours and build your answer around it. Keep it to two or three minutes, and leave some threads loose. You want the interviewers curious enough to ask follow-up questions.",
      "Strong interviews feel like conversations, not performances. When you open with something specific and real, you invite dialogue. When you recite a memorized timeline, you shut it down.",
    ],
    takeaway:
      "The committee wants to get to know you. Give them something worth knowing.",
  },
  {
    category: "Shadowing",
    question: "How do I find shadowing opportunities?",
    paragraphs: [
      "Start by looking for what already exists.",
      "Most students assume finding shadowing requires knowing the right person or having a personal connection to a PA. That is not true. Many hospital systems, including large academic medical centers, have formal student shadowing programs already in place. These programs exist specifically for students like you and are often underutilized simply because applicants do not know to ask.",
      "Start by calling the hospital directly and asking to speak with Human Resources or the Student Programs Coordinator. These offices typically maintain lists of providers who have already agreed to host students. The process is usually far more straightforward than students expect, often a short application, a background check, and you are on the schedule.",
      "If the hospital route does not pan out, broaden your search to outpatient clinics and private practices. Urgent care centers, orthopedic offices, dermatology practices, and primary care clinics all regularly work with PAs, and many are open to hosting motivated students. In these settings, a professional email or phone call directly to the practice manager can open doors that never get listed anywhere online.",
      "When you reach out, be specific. Explain who you are, why you are pursuing PA, and what you hope to learn. Keep it brief. Follow up if you do not hear back within a week. Persistence, delivered politely, signals exactly the kind of professionalism providers respect.",
      "One more thing: once you are in, treat every hour like it matters, because it does. The PAs you shadow are often the same ones who write your letters of recommendation or speak to colleagues on your behalf. Engage thoughtfully, ask good questions, and show genuine curiosity about the work.",
    ],
    takeaway:
      "Show up like the future clinician you intend to become, and the right doors will keep opening.",
  },
  {
    category: "Healthcare Experience",
    question: "Should I start working as a CNA during my freshman year of college?",
    paragraphs: [
      "Yes. Start as early as you possibly can.",
      "Here is something most pre-PA students do not realize until it is too late: the CASPA application cycle opens in late April of the year you plan to apply. If you are planning to apply the summer after your junior year, that deadline is much closer than it feels when you are a freshman. Every semester you wait is a semester you do not have.",
      "Starting your healthcare experience early does not just mean accumulating hours. It means building depth. An applicant who has worked consistently as a CNA for two and a half years has something to say that hours alone can never manufacture: perspective. You have seen patients decline, navigated difficult family dynamics, worked alongside clinical teams, and come to understand what each person on that team actually contributes. That kind of experience shows in your personal statement, in your essays, and in the way you answer clinical questions during your interview.",
      "If you have the option, choose a clinical area you are genuinely interested in, whether that is oncology, pediatrics, neurology, or general med-surg. Work you care about is infinitely easier to write about. When your personal statement draws on real moments that moved you, interviewers feel that authenticity immediately.",
      "What I would caution against is constantly switching jobs in search of more impressive titles or new settings. Depth matters far more than variety in the early stages. One well-developed clinical role where you have grown in responsibility and reflection will serve your application better than five positions you held for a semester each.",
      "Your freshman year is a genuine advantage. You have time to build something meaningful rather than scrambling to check boxes before your deadline.",
    ],
    takeaway: "Start now, invest fully, and let the experience shape your story.",
  },
  {
    category: "Prerequisites",
    question:
      "Can I complete prerequisite courses online through a less expensive college?",
    paragraphs: [
      "Yes, with one important step first.",
      "Taking prerequisites at a community college or a more affordable institution is a legitimate strategy, and I encourage students to explore it. Cost is real, and there is no reason to overpay for coursework that meets the same academic standard. But before you register for a single class, there are two things you must verify. Skipping either one can cost you far more than you ever saved on tuition.",
      "First, confirm the institution is regionally accredited. Accreditation from organizations like the Higher Learning Commission or SACSCOC signals that the institution meets recognized academic standards. Many PA programs explicitly state they will not accept coursework from nationally accredited or unaccredited institutions. No tuition savings is worth earning credits a program will not count.",
      'Second, and this is where students most often get caught, verify that each specific course transfers exactly as required. Not all science courses transfer equally. A course that satisfies a biology requirement at one institution may arrive on your transcript only as a general elective or an introductory course at another. If a PA program requires Anatomy and Physiology I and II as specific prerequisites, you need those credits to appear that way, not as "Life Science 101."',
      "The safest approach: identify the programs you plan to apply to, review their prerequisite requirements carefully, and contact their admissions offices directly before you enroll anywhere. Ask specifically whether the course and the institution are acceptable. Get the confirmation in writing if you can.",
    ],
    takeaway:
      "Taking thirty minutes to verify upfront protects every dollar and every hour you invest in your education.",
  },
  {
    category: "Interviews",
    question:
      "Should I just prepare answers to common interview questions, or should I do mock interviews?",
    paragraphs: [
      "Preparing answers and practicing delivery are not the same skill. And the difference is immediately visible to anyone sitting across the table.",
      "After years on admissions committees, I can tell you that rehearsed applicants are recognizable almost instantly. There is a specific quality to an answer that has been written, memorized, and recited. It is polished in the wrong way. It sounds like a presentation rather than a conversation. Even genuinely strong answers, delivered flatly or at a sprint, can quietly undermine what should be a compelling application.",
      "Here is what preparing answers alone does not do: it does not train you to think under pressure. It does not help you when an interviewer asks a follow-up you did not anticipate. It does not prepare you for the physical reality of nerves, the dry mouth, the faster heartbeat, the way a blank mind feels nothing like a prepared one. And it does not show you the habits you do not know you have, like speaking too quickly, trailing off at the end of sentences, over-qualifying every answer, or avoiding eye contact when you are trying to remember a line.",
      "Mock interviews do all of that. When you practice speaking your answers aloud, ideally with someone who will give you honest, direct feedback, you develop fluency. You stop searching for words and start communicating. Your answers begin to feel like your own thoughts rather than sentences you are trying to retrieve.",
      "If you can work with someone who has real admissions experience, that feedback is invaluable. At minimum, record yourself and watch it back. It is uncomfortable, but it is one of the most honest mirrors available to you.",
      "Interview performance has absolutely been the deciding factor for qualified applicants. I have seen strong applications undone by poor interview execution, and I have seen an outstanding interview elevate someone above candidates with more hours on paper.",
    ],
    takeaway: "Your interview is not a formality. Treat it like the opportunity it is.",
  },
];

export default function StudentQaPage() {
  return (
    <>
      <PageHeader
        label="Student Q&A"
        title="Admissions advice from someone who has reviewed more than 3,000 applications."
        description="Real answers to the questions pre-PA students ask most, answered directly by an experienced admissions committee chair."
      />

      <ContentSection narrow>
        <div className="space-y-16">
          {qaItems.map((item, index) => (
            <article key={index}>
              <div className="space-y-3 mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {item.category}
                </span>
                <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground leading-snug">
                  {item.question}
                </h2>
              </div>

              <div className="space-y-4 mb-6">
                {item.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-base text-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <p className="text-base font-medium text-foreground border-l-2 border-primary pl-4 italic leading-relaxed">
                {item.takeaway}
              </p>

              {index < qaItems.length - 1 && (
                <hr className="border-border mt-14" />
              )}
            </article>
          ))}
        </div>
      </ContentSection>

      <CtaSection
        heading="Ready for guidance that goes deeper than Q&A?"
        body="PA Mentor Studio offers longitudinal mentorship for serious applicants at every stage of the pre-PA journey."
        variant="muted"
      />
    </>
  );
}
