import { motion } from "motion/react";
import { ChevronDown, Quote } from "lucide-react";
import { useState, ReactNode } from "react";
import logo from "./assets/living_word_logo_transparent.png";

const Section = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <section className={`py-32 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto ${className}`}>
    {children}
  </section>
);

const Heading = ({ children, level = 2, className = "" }: { children: ReactNode; level?: 1 | 2 | 3; className?: string }) => {
  const Tag = `h${level}` as any;
  const sizes = {
    1: "text-4xl md:text-5xl mb-12 tracking-tight",
    2: "text-3xl md:text-4xl mb-12",
    3: "text-xl md:text-2xl mb-6",
  };
  return (
    <Tag className={`${sizes[level as keyof typeof sizes]} font-serif text-brand-navy ${className}`}>
      {children}
    </Tag>
  );
};

const Paragraph = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <p className={`text-lg md:text-xl leading-relaxed mb-8 text-brand-text/90 ${className}`}>
    {children}
  </p>
);

const FAQItem = ({ question, answer }: { question: string; answer: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-brand-navy/10 py-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left group"
      >
        <h3 className="text-xl font-serif text-brand-navy group-hover:text-brand-rust transition-colors pr-8">
          {question}
        </h3>
        <ChevronDown className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="pt-6 pb-2 text-lg leading-relaxed text-brand-text/80 whitespace-pre-wrap">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-rust/20 bg-brand-bg text-brand-text font-sans antialiased">
      {/* 1. Logo / Hero Identity */}
      <header className="pt-48 pb-24 flex flex-col items-center justify-center text-center">
        <div className="w-full max-w-[400px] px-6 flex flex-col items-center">
          <div className="w-full min-h-[150px] flex items-center justify-center">
            <img 
              src={logo} 
              alt="The Living Word Logo" 
              className="w-full h-auto block mx-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 className="mt-8 text-4xl md:text-5xl font-serif text-brand-navy tracking-tight">
            The Living Word
          </h1>
        </div>
      </header>

      {/* 2. Opening Conversation */}
      <Section className="pt-0">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="space-y-0">
            <Paragraph>Most people don’t spend their days thinking about God, eternity, or truth.</Paragraph>
            <Paragraph>Life is busy. Responsibilities pile up. Questions get pushed aside.</Paragraph>
            <Paragraph>But every now and then, a thought refuses to go away.</Paragraph>
            
            <div className="my-20 space-y-6 font-serif text-2xl md:text-3xl text-brand-navy/80 italic border-l-2 border-brand-rust/20 pl-8">
              <p>Why am I here?</p>
              <p>Is there such a thing as my truth — or only the truth?</p>
              <p>What happens when life ends?</p>
              <p>Does Jesus actually matter?</p>
            </div>

            <Paragraph>This site exists to explore those questions honestly — without pressure, without manipulation, and without assuming what you already believe.</Paragraph>
            <Paragraph>You’re free to read, question, disagree, or simply think.</Paragraph>
            <Paragraph>Truth doesn’t need urgency. It needs clarity.</Paragraph>
            <Paragraph>Nothing here requires a decision.</Paragraph>
          </div>
        </motion.div>
      </Section>

      {/* 3. The Questions People Carry */}
      <div className="bg-white/30">
        <Section>
          <Heading>THE QUESTIONS PEOPLE CARRY</Heading>
          <Paragraph>Most people don’t reject God because they’ve carefully examined the evidence.</Paragraph>
          <Paragraph>They move on because the questions feel complicated, uncomfortable, or unresolved.</Paragraph>
          <Paragraph>You may not talk about these questions out loud.</Paragraph>
          <Paragraph>Most people don’t.</Paragraph>
          <Paragraph>But they tend to surface at certain moments — in loss, in silence, in reflection.</Paragraph>
          
          <ul className="space-y-6 my-16 list-none">
            {[
              "Does God exist — or is belief just psychological comfort?",
              "Why does a good God allow suffering and evil?",
              "If Jesus existed, why does it still matter now?",
              "Can the Bible be trusted, or has it been changed over time?"
            ].map((q, i) => (
              <li key={i} className="flex items-start gap-4 text-xl md:text-2xl font-serif text-brand-navy/90">
                <span className="text-brand-rust mt-1">•</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>

          <Paragraph>These are not small questions.</Paragraph>
          <Paragraph>Ignoring them doesn’t make them disappear — it just leaves them unanswered.</Paragraph>
        </Section>
      </div>

      {/* 4. What Christians Claim About Jesus */}
      <Section>
        <Heading>WHAT CHRISTIANS CLAIM ABOUT JESUS</Heading>
        <div className="space-y-12">
          <div className="bg-brand-green/5 p-10 md:p-16 rounded-2xl border border-brand-green/10">
            <Paragraph>Christians claim that Jesus Christ is not merely a religious teacher or moral example, but the eternal Son of God — fully divine, and yet truly human. They believe He existed before His earthly life, was born of a virgin, lived without moral failure, and performed miracles that pointed beyond Himself to God.</Paragraph>
          </div>
          
          <Paragraph>They also claim that Jesus’ crucifixion, death, and resurrection were not unexpected turns of history. According to the Bible, these events were foretold centuries earlier — most notably in the writings attributed to David and Isaiah, written roughly 700–800 years before Jesus’ birth.</Paragraph>
          
          <Paragraph>Christians further claim that Jesus willingly died on the cross as a sacrifice for humanity’s sin and rose from the dead on the third day — not symbolically, but physically.</Paragraph>
          
          <Paragraph>Finally, Christians claim that Jesus ascended to heaven, offers reconciliation with God the Father, and will one day return to judge the world and establish His eternal kingdom.</Paragraph>
          
          <div className="pt-8 border-t border-brand-navy/10">
            <Paragraph className="font-serif text-2xl italic text-brand-rust">These claims are either true or they are not.</Paragraph>
            <Paragraph className="font-medium uppercase tracking-widest text-brand-navy text-sm">Christianity stands or falls on the person of Jesus.</Paragraph>
          </div>
        </div>
      </Section>

      {/* 5. Why These Claims Matter */}
      <div className="bg-brand-navy text-white">
        <Section>
          <Heading className="text-white">WHY THESE CLAIMS MATTER</Heading>
          <div className="space-y-0">
            <Paragraph className="text-white/90">Beliefs shape how people live, whether they realise it or not.</Paragraph>
            <Paragraph className="text-white/90">If the claims about Jesus are true, then life is not accidental, and meaning is not self-assigned.</Paragraph>
            <Paragraph className="text-white/90">It would mean that good and evil are more than opinions, and that justice and mercy are not illusions.</Paragraph>
            <Paragraph className="text-white/90">It would also mean that guilt is not something to suppress or redefine, but something that can be addressed — and that hope is grounded in more than optimism.</Paragraph>
            
            <div className="pt-12 mt-12 border-t border-white/10">
              <Paragraph className="text-white/80">This doesn’t demand agreement.</Paragraph>
              <Paragraph className="text-white/80">But it does mean these claims deserve to be examined seriously, because they speak to questions every person already lives with.</Paragraph>
            </div>
          </div>
        </Section>
      </div>

      {/* 6. Invitation to Reflect */}
      <Section>
        <Heading>INVITATION TO REFLECT</Heading>
        <div className="space-y-0">
          <Paragraph>You don’t need to agree with everything you’ve read here.</Paragraph>
          <Paragraph>You don’t need to reach a conclusion today.</Paragraph>
          <Paragraph>But if these ideas have stirred questions — or challenged assumptions you’ve carried — it may be worth taking a moment to reflect honestly.</Paragraph>
          <Paragraph>Christianity teaches that God is not distant, impersonal, or unreachable.</Paragraph>
          <Paragraph>It claims that God is attentive to sincere seeking, even when it is quiet, uncertain, or unfinished.</Paragraph>
          
          <div className="my-20 p-12 bg-white rounded-2xl border border-brand-navy/5 shadow-sm relative">
            <Quote className="absolute top-8 left-8 text-brand-rust/5" size={64} />
            <div className="relative z-10">
              <Paragraph className="italic text-brand-text/60 mb-12">If you want to speak to God privately, you can do so in your own way. Honesty matters more than polished words.</Paragraph>
              <div className="space-y-4 font-serif text-2xl text-brand-navy/90 border-l-2 border-brand-rust/30 pl-8">
                <p>“God, if You exist, I want to know what is true.</p>
                <p>If Jesus really is who Christians claim He is, help me understand.</p>
                <p>I don’t have everything figured out, but I’m open to truth — wherever it leads.”</p>
              </div>
            </div>
          </div>

          <Paragraph>There is no script you must follow.</Paragraph>
          <Paragraph>There is no moment you need to manufacture.</Paragraph>
          <Paragraph>You are free to keep thinking, questioning, and examining the claims carefully.</Paragraph>
          <Paragraph className="text-brand-rust font-medium">Truth does not disappear when it is approached slowly.</Paragraph>
        </div>
      </Section>

      {/* 7. Common Objections */}
      <div className="bg-white/30 border-t border-brand-navy/5">
        <Section>
          <Heading>COMMON OBJECTIONS</Heading>
          <div className="space-y-2">
            <FAQItem 
              question="Did Jesus really rise from the dead?"
              answer="Christianity presents the resurrection as a historical claim, not a spiritual metaphor. Even many skeptical scholars agree on key points: Jesus was executed by crucifixion, His tomb was later found empty, and His earliest followers genuinely believed they encountered Him alive again. The question is not whether the claim is extraordinary, but whether any alternative explanation accounts for the historical evidence more convincingly."
            />
            <FAQItem 
              question="Hasn’t the Bible been changed or corrupted over time?"
              answer={
                <div className="space-y-6">
                  <p>Although the original manuscripts no longer exist, the Bible is considered remarkably well preserved. Thousands of ancient copies allow scholars to compare texts across centuries, revealing that over 99% of the wording is undisputed, with remaining variations involving minor differences such as spelling or word order — not core teachings. Discoveries like the Dead Sea Scrolls confirm that the biblical text has been transmitted with greater accuracy than any other ancient document.</p>
                  <p className="text-sm font-medium tracking-widest text-brand-navy/60 uppercase">
                    Old Testament: written between 1400 BC and 400 BC.<br />
                    New Testament: written between AD 40 and AD 90.
                  </p>
                </div>
              }
            />
            <FAQItem 
              question="If God is good, why is there so much suffering?"
              answer="Christianity does not deny suffering or offer easy answers. It claims that evil entered the world through moral rebellion and that God did not remain distant from human pain. In Jesus, God entered into suffering, injustice, and death — and through the resurrection, Christianity claims that suffering is not permanent, but will one day be brought to an end."
            />
            <FAQItem 
              question="Are there many paths to God?"
              answer="Christianity does not claim Jesus is one option among many. It claims He presented Himself as the way to God. While many belief systems make sincere but conflicting claims, contradictory truths cannot all be correct at the same time. The question is not whether exclusive truth claims feel uncomfortable, but whether they are true."
            />
            <FAQItem 
              question="How is Jesus different from other religious leaders?"
              answer="Christianity is inseparable from the person of Jesus Himself. Other religious leaders offered teachings or paths to follow; Jesus claimed to accomplish something on humanity’s behalf. Christianity openly states that if Jesus did not rise from the dead, the faith collapses entirely. If He did, then He stands alone as a unique figure whose life, death, and resurrection define the faith that bears His name."
            />
          </div>
        </Section>
      </div>

      {/* Footer */}
      <footer className="py-20 px-6 text-center border-t border-brand-navy/5 bg-brand-bg">
        <div className="max-w-4xl mx-auto">
          <p className="font-serif text-2xl text-brand-navy mb-2">The Living Word</p>
          <p className="text-sm uppercase tracking-[0.2em] text-brand-text/40">Reflective Apologetics & Honest Inquiry</p>
        </div>
      </footer>
    </div>
  );
}
