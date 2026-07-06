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
    category: "Getting Started",
    question:
      "I am a freshman with no healthcare experience or prerequisites completed. Where do I even start?",
    paragraphs: [
      "Start with one concrete step in each direction: one prerequisite course and one clinical setting. Everything else builds from there.",
      "Being a freshman with no prerequisites completed and no clinical hours is not a disadvantage. It is exactly where you are supposed to be. The applicants who struggle are the ones who reach their junior year having done neither. You have time to do this well, which is a genuine advantage over students who begin thinking about their application at the last minute.",
      "On the academic side, begin with whichever prerequisite fits naturally into your first semester schedule. Biology and Chemistry are typically the foundation everything else builds on. Focus on earning strong grades rather than moving quickly. A well-paced science sequence with consistent performance will serve you far better than rushing through prerequisites and earning mediocre grades.",
      "On the clinical side, identify one way to get into patient contact this semester, even if it is only a few hours a week. A CNA certification program is an excellent option if your schedule allows it. If not, a hospital volunteer role with direct patient contact, an EMT course, or a medical assistant position can all open doors. The goal is to get into a clinical setting early so that by the time you apply, you have years of experience rather than months.",
      "Beyond those two priorities: introduce yourself to your pre-health advisor if your institution has one. Find out whether there is a pre-PA club or student organization. Begin building relationships with faculty in your science courses. These connections, built early, often produce letters of recommendation, research opportunities, and guidance that students who start late simply do not have access to.",
    ],
    takeaway:
      "You have more time than you think. Use it with intention, not urgency.",
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
    category: "Healthcare Experience",
    question: "Does volunteering count as patient care experience?",
    paragraphs: [
      "It depends entirely on what you are doing, not what it is called.",
      "CASPA categorizes experience as either direct patient care or healthcare experience, and that distinction matters. The determining factor is direct, hands-on contact where you are providing care or assisting with care. You are touching patients, helping with physical needs, monitoring vitals, supporting clinical tasks. That is patient care experience.",
      "Greeting patients at a reception desk, delivering items, directing visitors, or sitting with patients for companionship without any clinical component is healthcare experience or volunteer service. It has value, but it does not carry the same weight as direct care, and programs evaluate the two categories differently.",
      "I have seen applicants categorize hospital volunteer hours as patient care experience when the role did not involve direct care. That discrepancy can create problems if it becomes apparent during an application review or interview. Be accurate when logging your hours in CASPA. The short-term benefit of inflating a category is not worth the risk to your credibility.",
      "If your volunteering involves hands-on patient contact, such as a hospice volunteer role where you assist with personal care, a clinical setting where you support nurses with direct tasks, or a ride-along program where you are actively participating, then yes, that belongs in the patient care category.",
      "When in doubt, ask yourself: was I providing care to a patient, or was I supporting the environment around that patient? The answer to that question determines the category.",
    ],
    takeaway:
      "Accuracy in how you represent your experience is part of demonstrating professional integrity before you ever set foot in a PA program.",
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
    category: "Shadowing",
    question: "How many shadowing hours do I actually need?",
    paragraphs: [
      "Enough to have observed a PA practicing independently across more than one clinical context, and enough to speak to that experience with genuine depth.",
      "Published minimums vary widely across programs, with many listing 40 to 100 hours as a requirement. But the question of how many hours you need is not the same as the question of how many hours you should have. A student who has shadowed for 40 hours and can speak thoughtfully about what they observed is better positioned than one who logged 200 hours while disengaged.",
      "A practical target for most applicants is 100 or more hours, spread across at least two different PAs or clinical settings if possible. Seeing the PA role in a surgical specialty is a different experience from seeing it in primary care or urgent care. That range strengthens both your understanding of the profession and your ability to discuss it in your personal statement and interview.",
      "Pay attention to program-specific requirements before you finalize your application list. Some programs require shadowing to be with a PA specifically, not a physician or other provider. If you have accumulated significant hours shadowing physicians, that experience is valuable, but it may not satisfy a PA-specific shadowing requirement. Check each program's criteria carefully.",
      "The most important thing is that your shadowing was genuine. That you asked questions, paid attention, and came away with a clearer picture of what PAs actually do in practice, not just a box checked on a requirements list. Interviewers ask about shadowing experiences specifically because your answers reveal whether the observation was passive or purposeful.",
    ],
    takeaway: "Shadow enough to know what you are committing to. That certainty will show.",
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
    category: "Prerequisites",
    question:
      "Does it matter whether I complete my prerequisite courses at a community college versus a four-year university?",
    paragraphs: [
      "For most programs, the institution matters less than your performance in the course.",
      "Regional accreditation is the baseline requirement. As long as the institution is regionally accredited and the course transfers correctly, the majority of PA programs will accept that credit. A well-earned A in Anatomy at a community college is not inherently less credible than the same grade at a flagship university.",
      "That said, nuance exists. Some programs note in their materials that they prefer or require upper-level science coursework to be completed at a four-year institution. A small number of programs do weigh the academic rigor of the institution when evaluating applicants, particularly when comparing otherwise similar files. Review the stated preferences of programs you are targeting before assuming all institutions are treated equally.",
      "The more common issue is not the prestige of the institution but how the credit transfers. A course completed at a community college that arrives on your transcript as an introductory elective, rather than the specific prerequisite a program requires, creates a problem regardless of your grade. Verify the transfer before you enroll.",
      "A practical approach: if community college is the right financial or logistical choice for foundational prerequisites, use it. If you have a concern about how a specific program views community college coursework, consider completing your upper-level sciences, such as Biochemistry, Genetics, or Pathophysiology, at a four-year institution. That combination addresses most concerns without requiring you to pay four-year tuition for every prerequisite.",
    ],
    takeaway:
      "The grade on your transcript matters far more than the name of the institution that issued it.",
  },
  {
    category: "GPA & Academics",
    question:
      "My GPA is lower than most PA programs recommend. Should I even apply?",
    paragraphs: [
      "A low GPA does not automatically close the door, but it does change your strategy.",
      "When I review applications, GPA is never just a number. I am looking at your science GPA separately from your overall GPA, whether your grades improved over time, and how recently the coursework was completed. An upward trend, especially in science prerequisites, tells me something meaningful about your growth and persistence. A stagnant or declining trajectory tells a different story.",
      "That said, some programs publish minimum GPA cutoffs that function as hard stops, and no amount of strong clinical experience will move your file past a system filter set at 3.0 or 3.2. Before you spend money applying, identify which programs have non-negotiable minimums and whether you meet them.",
      "For programs without hard floors, context matters. Strong clinical experience, compelling letters of recommendation, and a personal statement that shows genuine growth can offset a lower GPA, especially when paired with an upward grade trend. A 2.8 GPA with strong junior and senior year science grades and 3,000 hours of direct patient care is a very different file than a 2.8 with no clinical depth and no evidence of improvement.",
      "Here is the most practical step: research each program's published statistics before you apply. Look at their average accepted GPA, not just their minimum. If your GPA is significantly below their average accepted range, applying there is a long shot, and you should know that going in rather than finding out after the application fee.",
    ],
    takeaway: "A low GPA narrows the path. It does not close it.",
  },
  {
    category: "GPA & Academics",
    question: "Should I retake a course where I earned a C to improve my GPA?",
    paragraphs: [
      "It depends on the course and what you plan to do with the retake.",
      "Here is something many students do not realize until after they submit: CASPA calculates your GPA using every attempt at a course, not just the most recent one. A C followed by an A will raise your GPA, but both grades remain part of the calculation. You cannot erase the original grade by retaking the course.",
      "So why retake at all? Because demonstrating competency matters, especially in core science prerequisites. If you earned a C in Anatomy and Physiology, Biochemistry, or Microbiology, a strong retake sends a clear message: you understand the material now, and you took responsibility for improving. Admissions committees notice that.",
      "What I would caution against is retaking a course purely as a GPA management strategy with no real academic purpose. If you earned a C in a general education elective, retaking it does very little for your application and takes time you could spend strengthening other areas.",
      "Before retaking anything, check whether programs you plan to apply to have minimum grade requirements for specific prerequisites. Some explicitly require a B or better in courses like Anatomy, Physiology, or Chemistry. If you earned a C in one of those, a retake is not optional. It is necessary.",
      "Retake the courses that matter most to your clinical preparation and that programs may flag as inadequate. Earn a strong grade, not just a passing one. Do not spread yourself thin retaking low-stakes coursework when your time is better spent building clinical hours or preparing for the application itself.",
    ],
    takeaway: "Retaking a course is a statement. Make sure the statement is worth making.",
  },
  {
    category: "Application Strategy",
    question: "How many PA programs should I apply to?",
    paragraphs: [
      "Enough to give yourself a genuine chance, not so many that you cannot do each application justice.",
      "There is no universal right number, but I can tell you what I see in practice. Students who apply to thirty programs often submit weaker supplemental materials because they are spread too thin. Students who apply to five programs often do not have enough geographic or competitiveness range to absorb a difficult cycle. Somewhere between eight and fifteen programs is a reasonable target for most applicants, with the exact number shaped by your individual profile and your flexibility around location.",
      "What matters more than the number is the composition. Your list should include programs where your GPA, science GPA, and clinical hours meet or exceed their published averages; programs where you are at or near the average; and a few programs that are a stretch by the numbers but where other elements of your application may resonate. That range gives you options without setting you up to spend significant money and time on applications where you have very little chance.",
      "Supplemental applications, which many programs require, take real time and effort to complete well. A rushed secondary essay is often obvious to reviewers. If applying to twenty programs means fifteen of them receive generic responses, your list is too long.",
      "Before you finalize your list, research each program's mission, patient population focus, and clinical training structure. Programs are not interchangeable. The ones that align with your interests and background are the ones where your application will feel most authentic, and that shows.",
    ],
    takeaway: "Apply strategically, not defensively.",
  },
  {
    category: "Application Strategy",
    question: "When is the best time to submit my CASPA application?",
    paragraphs: [
      "As early in the cycle as possible. Rolling admissions is not a metaphor. It is a real and significant advantage.",
      "CASPA opens in late April each year. Most programs begin reviewing applications as soon as they are verified and complete, which means interview slots at rolling admissions programs start filling in June and July. An applicant who submits in September is not just later. They are often competing for the remaining seats, not the full class.",
      "I have seen strong applicants who waited until fall miss interviews entirely at programs that would have interviewed them had they applied in June. The application itself did not change. The timing did.",
      "Here is the practical implication: your application materials should be substantially ready before CASPA opens, not after. That means your personal statement should be in strong draft form by April, your letters of recommendation should be requested well in advance with clear deadlines communicated, and your experience hours should be finalized or very close to it. Do not wait to request transcripts. Transcript processing adds time you cannot afford to lose.",
      "If you need one more month to significantly improve a weak area of your application, that delay may be worth it. But if you are waiting simply because you feel unready or because you are still deciding which programs to apply to, push yourself to commit. The cost of submitting in June instead of August is almost always worth paying.",
    ],
    takeaway: "Timing is part of strategy. Treat it that way.",
  },
  {
    category: "Personal Statement",
    question: "How do I know which experiences to write about in my personal statement?",
    paragraphs: [
      "Write about the experience that changed how you think, not the one that looks most impressive on paper.",
      "After reading thousands of personal statements, I can tell you that the ones I remember are not the ones with the most impressive credentials. They are the ones where I can feel a specific moment of genuine insight. The applicant who noticed something in a clinical encounter that reframed everything they thought they understood about patient care. The one who made a mistake, sat with it, and came out the other side with a clearer sense of purpose. Those statements stay with you.",
      "What does not stay with you is a well-organized tour of every meaningful experience the applicant has ever had. Long lists of experiences, even impressive ones, read like a resume. A personal statement is not a resume. It is an argument for why you specifically are ready for this specific profession.",
      "To find the right experience, ask yourself: which moment made me more certain that PA was the right path? Which clinical encounter, conversation, or challenge revealed something about the work that I could not have learned any other way? Which experience would be genuinely difficult to replicate, not because of where it happened, but because of what I learned from being there?",
      "One focused experience, explored with honesty and specificity, almost always serves an applicant better than three experiences described at the surface level. You can reference other experiences briefly to provide context, but let one thread carry the weight of the narrative.",
    ],
    takeaway:
      "Write about the moment that made you more sure. If you cannot identify one, that is worth reflecting on before you apply.",
  },
  {
    category: "Personal Statement",
    question:
      "Should I address a low GPA or a failed course in my personal statement?",
    paragraphs: [
      "Only if the explanation adds context that the numbers alone cannot provide, and only if you can be brief, honest, and forward-looking.",
      "Admissions committees notice low GPAs and grade anomalies on their own. You do not need to point to them. What you do need to decide is whether explaining them would help your application or simply draw more attention to a weak point.",
      "If there was a significant external circumstance, a serious illness, a family crisis, a mental health episode that you have since addressed, briefly acknowledging it can provide context that humanizes the data. Keep it to two or three sentences. State what happened, how you responded, and what has changed. Then move forward. The purpose is context, not sympathy.",
      "What I would strongly caution against is using the personal statement to rationalize or excuse poor academic performance without evidence of genuine growth. Committees read those statements carefully. If the narrative reads like an explanation without accountability, it raises more concerns than it resolves.",
      "If you failed a course and retook it, that action already speaks. You do not necessarily need to narrate it at length. What the statement should convey is this: you understand what the work of a PA requires, and you are prepared for it now.",
      "If the academic record you are describing is genuinely the strongest argument against your candidacy, the personal statement may not be the right place to defend it. A well-structured application with strong clinical experience and compelling letters of recommendation can often make that case more convincingly than self-advocacy in the personal statement.",
    ],
    takeaway: "Address it briefly if you must, then move forward.",
  },
  {
    category: "Letters of Recommendation",
    question: "Who should I ask for letters of recommendation?",
    paragraphs: [
      "Ask people who know your work well and can speak to it specifically, not people who have an impressive title.",
      "This is one of the most common mistakes I see in applications: an applicant collects letters from physicians, professors, or community leaders they barely know, and the resulting letters are polite but generic. 'I had the pleasure of knowing this student' tells a committee almost nothing. A letter that describes a specific clinical moment, a particular academic strength, or a pattern of professional behavior over time, that letter does real work.",
      "Most PA programs require at least one letter from a PA who has supervised or observed you directly. If you have shadowed or worked alongside a PA, that relationship is worth cultivating long before you need a letter. Providers who have seen you handle patients, communicate with families, or navigate a difficult situation can write the kind of letter that actually differentiates an application.",
      "For academic letters, choose a faculty member in a science course who knows your work and your character. A professor who taught 400-person lecture courses and barely knows your name is a weaker choice than an instructor from a smaller course where you were engaged, asked good questions, and produced strong work.",
      "For clinical letters, your direct supervisor, the person who has observed your patient care over time, is almost always the right choice over a clinician who happens to have a more recognizable credential.",
      "Before you ask anyone, give them enough to work with: a current resume, a brief summary of your goals, and specific clinical or academic moments you hope they will reference. A writer who has context writes a better letter.",
    ],
    takeaway:
      "A strong letter from someone who knows you well beats a polished letter from someone who does not.",
  },
  {
    category: "Letters of Recommendation",
    question:
      "How do I ask a PA I barely know to write me a letter of recommendation?",
    paragraphs: [
      "Give them a reason to say yes, and enough material to write something meaningful.",
      "The first step is honest self-assessment. If you have shadowed someone for ten hours and had minimal direct interaction, think carefully about whether they are the right person to ask, not just the most convenient one. A PA who has observed you closely over time will write a stronger letter than one who is technically willing but has limited material to draw from.",
      "If the PA you are considering is genuinely your best option, here is how to make the ask work. Request a brief meeting in person or by phone rather than sending a cold email request. Introduce yourself clearly, remind them of the context in which they know you, and explain honestly where you are in the process. Then ask directly: 'Would you be able to write me a strong letter of recommendation?'",
      "That word strong matters. It gives them an easy, honest exit if they do not feel they can speak to your abilities with confidence. A lukewarm or generic letter can actually hurt an application. You want someone who will say yes enthusiastically, not out of obligation.",
      "Once they agree, send a follow-up email that includes your current resume, a brief summary of your goals and why you are pursuing PA, any specific moments from your time together that you hope they might reference, and the program deadlines. Make it easy for them to write something specific.",
      "Give at least four to six weeks of lead time. Follow up once, politely, a week before the deadline if you have not received confirmation.",
    ],
    takeaway:
      "A well-prepared ask produces a well-written letter. Do not leave your recommenders guessing.",
  },
  {
    category: "Interview",
    question:
      'How should I answer the interview question, "Tell me about yourself?" I was planning to talk about enjoying science in high school and working as a PCA during college.',
    paragraphs: [
      '"Tell me about yourself" is an invitation, not a biography request. Skip the life timeline.',
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
    category: "Interview",
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
  {
    category: "Waitlist",
    question: "I have been placed on a waitlist. What, if anything, should I do?",
    paragraphs: [
      "Send a letter of continued interest, then be patient and professional.",
      "Being waitlisted is not a rejection. It means the program considered you qualified and is holding a place for you in the event that the class does not fill from the accepted pool. Movement happens at most programs, sometimes significantly, as accepted applicants commit elsewhere and seats open.",
      "A letter of continued interest is appropriate and, at many programs, expected. It should be brief, one page or less, and it should do two things: reaffirm your genuine interest in that specific program and update the committee on any meaningful developments since your application or interview. A new clinical role, a completed prerequisite, a promotion, an award. If nothing significant has changed, a sincere and specific statement of continued interest is sufficient on its own.",
      "What you should not do is contact the program repeatedly or ask admissions staff to assess your position on the waitlist. Programs rarely disclose rankings, and frequent contact does not improve your standing. It signals anxiety rather than confidence.",
      "In the meantime, continue your clinical work, keep your other applications active if you have them, and consider whether there are programs still accepting applications for the current cycle. Sitting and waiting without continuing to build your candidacy is the one thing that definitely does not help.",
      "Waitlists resolve on their own timeline, not yours. The most productive thing you can do is demonstrate continued momentum and let the process complete.",
    ],
    takeaway:
      "Do what you can, then let the outcome develop without trying to force it.",
  },
  {
    category: "Reapplication",
    question:
      "I was not accepted this cycle. How do I strengthen my application before reapplying?",
    paragraphs: [
      "Before you change anything, identify what actually cost you. Guessing without data is how applicants repeat the same cycle twice.",
      "Rejection without reflection produces a repeat rejection. The most common mistake reapplicants make is adding more of what they already had, more hours, more programs, a slightly edited personal statement, without addressing the root issue.",
      "Start by requesting feedback from programs that interviewed you but did not extend an offer. Not every program will respond, but some will, and even a brief response can point you toward something useful. If you were screened out before the interview stage consistently, the issue likely lives in the objective parts of your application: GPA, science GPA, clinical hours, or how your CASPA application was completed.",
      "If you received interviews but no offers, the problem is almost certainly the interview itself. That is fixable, but it requires honest practice, not just more preparation. Work with someone who can give you candid feedback on how you present, not just what you say.",
      "The strongest reapplicant files I have reviewed share a common quality: something genuinely changed. Not cosmetically, not in volume, but in substance. A meaningful new clinical role. A retaken prerequisite with a strong grade. A personal statement that reflects a clearer, more developed sense of purpose. Evidence that the applicant used the time between cycles intentionally rather than simply waiting.",
      "Give yourself enough time to make a real change. If the cycle opens in April and you were just rejected in March, rushing a reapplication to submit in June may not serve you. A well-prepared application submitted later in the cycle often outperforms a hurried one submitted immediately.",
    ],
    takeaway: "Use the time. Make it count.",
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
