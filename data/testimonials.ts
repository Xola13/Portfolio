// Real testimonials from colleagues, collaborators, and mentors.

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Seth Kleynhans",
    role: "Fullstack Developer",
    company: "LC Studio",
    quote:
      "Xola is a hard-working individual who is always on time and eager to work and learn. Working alongside him on client web projects at LC Studio, I saw how confident and friendly he was with the whole team — he'd jump into unfamiliar parts of the codebase without hesitation, ask the right questions, and pick up new tools quickly without needing much hand-holding. He was always someone the team could rely on to get things done.",
  },
  {
    id: "2",
    name: "Bulela Gomoshe",
    role: "Backend Developer",
    company: "WeThinkCode",
    quote:
      "Xola is a problem solver at heart — he doesn't just look for a quick fix, he digs into the root of an issue until it's properly resolved, even if it means stepping back and rethinking the approach. I've seen him talk through tricky bugs calmly and walk less experienced developers through his reasoning instead of just handing them an answer. From how he works with others, I believe he has what it takes to grow into a strong leader.",
  },
  {
    id: "3",
    name: "Nomvuyiseko Mpofu",
    role: "Business Analyst",
    company: "GOTO Group SA",
    quote:
      "Xola is cordial with everyone he works with, no matter their role or seniority. Even when we were on different sides of a design handoff, he stayed easy to approach, listened well to feedback, and always made time to walk me through something technical when it wasn't clear from my side.",
  },
  {
    id: "4",
    name: "Jude Julius",
    role: "Fullstack Developer",
    company: "Sharenet",
    quote:
      "Xola has a uniqueness that makes him the easiest person to reach out to — whenever I needed an update or had a question, he'd respond honestly about where things actually stood rather than just telling me what I wanted to hear. That transparency, combined with how dedicated he is to seeing his work through properly even when it takes longer than expected, is what made working with him easy.",
  },
  {
    id: "5",
    name: "Kagiso Mphayi",
    role: "Software Developer",
    company: "CiMSO Group",
    quote:
      "Mr Magatya is an inquisitive and attentive person who pays close attention to detail, often catching small inconsistencies before they became bigger issues. He has a knack for mediating potential problems before they escalate, staying level-headed when priorities clashed, which made him easy to collaborate with on shared work.",
  },
  {
    id: "6",
    name: "Godwin Dzvapatsva",
    role: "Lecturer in Computing",
    company: "University of Suffolk",
    quote:
      "Xola is a very consistent student who shows up and puts in the work, week after week. He grasps new concepts quickly, and what stood out most over the course of the programme was how openly he accepted constructive criticism and instruction on his projects — he'd take feedback, revise his work, and come back with a noticeably better version rather than getting defensive about it.",
  },
];
