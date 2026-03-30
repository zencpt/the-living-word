import { motion } from "motion/react";
import { ChevronDown, HelpCircle, MessageSquare, Quote, Sparkles, BookOpen, Info } from "lucide-react";
import { useState, ReactNode } from "react";

const Section = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <section className={`py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto ${className}`}>
    {children}
  </section>
);

const Heading = ({ children, level = 2, className = "" }: { children: ReactNode; level?: 1 | 2 | 3; className?: string }) => {
  const Tag = `h${level}` as any;
  const sizes = {
    1: "text-5xl md:text-7xl mb-8 leading-tight",
    2: "text-3xl md:text-4xl mb-12 leading-snug",
    3: "text-xl md:text-2xl mb-6",
  };
  return (
    <Tag className={`${sizes[level as keyof typeof sizes]} font-serif text-brand-navy ${className}`}>
      {children}
    </Tag>
  );
};

const Paragraph = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <p className={`text-lg md:text-xl leading-relaxed mb-6 text-brand-text/90 max-w-3xl ${className}`}>
    {children}
  </p>
);

const FAQItem = ({ question, answer }: { question: string; answer: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-brand-navy/10 py-6">
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
        <div className="pt-4 pb-2 text-lg leading-relaxed text-brand-text/80">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-rust/20">
      {/* 1. Opening Conversation */}
      <header className="min-h-screen flex flex-col justify-center bg-brand-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#1F3D2B_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        
        <Section className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8 text-brand-rust font-medium tracking-widest uppercase text-sm">
              <MessageSquare size={18} />
              <span>Opening Conversation</span>
            </div>
            <Heading level={1}>The Living Word</Heading>
            <div className="space-y-2">
              <Paragraph>Most people don’t spend their days thinking about God, eternity, or truth.</Paragraph>
              <Paragraph>Life is busy. Responsibilities pile up. Questions get pushed aside.</Paragraph>
              <Paragraph>But every now and then, a thought refuses to go away.</Paragraph>
            </div>

            <div className="mt-16 space-y-4 border-l-2 border-brand-rust/30 pl-8 py-4 italic font-serif text-2xl md:text-3xl text-brand-navy/80">
              <p>Why am I here?</p>
              <p>Is there such a thing as my truth — or only the truth?</p>
              <p>What happens when life ends?</p>
              <p>Does Jesus actually matter?</p>
            </div>

            <div className="mt-16 space-y-6">
              <Paragraph>This site exists to explore those questions honestly — without pressure, without manipulation, and without assuming what you already believe.</Paragraph>
              <Paragraph>You’re free to read, question, disagree, or simply think.</Paragraph>
              <Paragraph>Truth doesn’t need urgency. It needs clarity.</Paragraph>
              <Paragraph className="font-medium text-brand-navy">Nothing here requires a decision.</Paragraph>
            </div>
          </motion.div>
        </Section>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-brand-navy/30">
          <ChevronDown size={32} />
        </div>
      </header>

      {/* 2. The Questions People Carry */}
      <div className="bg-white/50">
        <Section>
          <div className="flex items-center gap-3 mb-8 text-brand-green font-medium tracking-widest uppercase text-sm">
            <HelpCircle size={18} />
            <span>The Questions People Carry</span>
          </div>
          <Heading>Most people don’t reject God because they’ve carefully examined the evidence.</Heading>
          <Paragraph>They move on because the questions feel complicated, uncomfortable, or unresolved.</Paragraph>
          <Paragraph>You may not talk about these questions out loud.</Paragraph>
          <Paragraph>Most people don’t.</Paragraph>
          <Paragraph className="mb-12">But they tend to surface at certain moments — in loss, in silence, in reflection.</Paragraph>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              "Does God exist — or is belief just psychological comfort?",
              "Why does a good God allow suffering and evil?",
              "If Jesus existed, why does it still matter now?",
              "Can the Bible be trusted, or has it been changed over time?"
            ].map((q, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 bg-brand-bg rounded-2xl border border-brand-navy/5 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-brand-navy/10 flex items-center justify-center text-brand-navy mb-4 font-serif italic text-sm">
                  {i + 1}
                </div>
                <p className="text-xl font-serif text-brand-navy leading-snug">{q}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-brand-navy/10">
            <Paragraph className="font-medium">These are not small questions.</Paragraph>
            <Paragraph>Ignoring them doesn’t make them disappear — it just leaves them unanswered.</Paragraph>
          </div>
        </Section>
      </div>

      {/* 3. What Christians Claim About Jesus */}
      <Section>
        <div className="flex items-center gap-3 mb-8 text-brand-navy font-medium tracking-widest uppercase text-sm">
          <Sparkles size={18} />
          <span>What Christians Claim About Jesus</span>
        </div>
        <div className="space-y-12">
          <div>
            <Paragraph>Christians claim that Jesus Christ is not merely a religious teacher or moral example, but the eternal Son of God — fully divine, and yet truly human. They believe He existed before His earthly life, was born of a virgin, lived without moral failure, and performed miracles that pointed beyond Himself to God.</Paragraph>
          </div>
          
          <div className="bg-brand-green text-white p-12 rounded-3xl shadow-xl">
            <Paragraph className="text-white/90">They also claim that Jesus’ crucifixion, death, and resurrection were not unexpected turns of history. According to the Bible, these events were foretold centuries earlier — most notably in the writings attributed to David and Isaiah, written roughly 700–800 years before Jesus’ birth.</Paragraph>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Paragraph>Christians further claim that Jesus willingly died on the cross as a sacrifice for humanity’s sin and rose from the dead on the third day — not symbolically, but physically.</Paragraph>
            </div>
            <div>
              <Paragraph>Finally, Christians claim that Jesus ascended to heaven, offers reconciliation with God the Father, and will one day return to judge the world and establish His eternal kingdom.</Paragraph>
            </div>
          </div>

          <div className="text-center pt-12">
            <p className="font-serif text-3xl text-brand-rust italic mb-4">These claims are either true or they are not.</p>
            <p className="text-xl font-medium text-brand-navy uppercase tracking-widest">Christianity stands or falls on the person of Jesus.</p>
          </div>
        </div>
      </Section>

      {/* 4. Why These Claims Matter */}
      <div className="bg-brand-navy text-white">
        <Section>
          <div className="flex items-center gap-3 mb-8 text-brand-rust font-medium tracking-widest uppercase text-sm">
            <Info size={18} />
            <span>Why These Claims Matter</span>
          </div>
          <Heading className="text-white">Beliefs shape how people live, whether they realise it or not.</Heading>
          
          <div className="space-y-8 max-w-3xl">
            <div className="flex gap-6">
              <div className="w-1 bg-brand-rust/50 shrink-0" />
              <Paragraph className="text-white/80 mb-0">If the claims about Jesus are true, then life is not accidental, and meaning is not self-assigned.</Paragraph>
            </div>
            <div className="flex gap-6">
              <div className="w-1 bg-brand-rust/50 shrink-0" />
              <Paragraph className="text-white/80 mb-0">It would mean that good and evil are more than opinions, and that justice and mercy are not illusions.</Paragraph>
            </div>
            <div className="flex gap-6">
              <div className="w-1 bg-brand-rust/50 shrink-0" />
              <Paragraph className="text-white/80 mb-0">It would also mean that guilt is not something to suppress or redefine, but something that can be addressed — and that hope is grounded in more than optimism.</Paragraph>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-white/10">
            <Paragraph className="text-white/90">This doesn’t demand agreement.</Paragraph>
            <Paragraph className="text-white/90">But it does mean these claims deserve to be examined seriously, because they speak to questions every person already lives with.</Paragraph>
          </div>
        </Section>
      </div>

      {/* 5. Invitation to Reflect */}
      <Section>
        <div className="flex items-center gap-3 mb-8 text-brand-rust font-medium tracking-widest uppercase text-sm">
          <BookOpen size={18} />
          <span>Invitation to Reflect</span>
        </div>
        <div className="space-y-6">
          <Paragraph>You don’t need to agree with everything you’ve read here.</Paragraph>
          <Paragraph>You don’t need to reach a conclusion today.</Paragraph>
          <Paragraph>But if these ideas have stirred questions — or challenged assumptions you’ve carried — it may be worth taking a moment to reflect honestly.</Paragraph>
          <Paragraph>Christianity teaches that God is not distant, impersonal, or unreachable.</Paragraph>
          <Paragraph>It claims that God is attentive to sincere seeking, even when it is quiet, uncertain, or unfinished.</Paragraph>
        </div>

        <div className="mt-16 p-12 bg-white rounded-3xl border border-brand-navy/5 shadow-sm relative">
          <Quote className="absolute top-8 left-8 text-brand-rust/10" size={64} />
          <div className="relative z-10">
            <Paragraph className="italic text-brand-navy/70 mb-8">If you want to speak to God privately, you can do so in your own way. Honesty matters more than polished words.</Paragraph>
            <div className="space-y-4 font-serif text-2xl text-brand-navy pl-8 border-l-2 border-brand-rust">
              <p>“God, if You exist, I want to know what is true.</p>
              <p>If Jesus really is who Christians claim He is, help me understand.</p>
              <p>I don’t have everything figured out, but I’m open to truth — wherever it leads.”</p>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-4">
          <Paragraph>There is no script you must follow.</Paragraph>
          <Paragraph>There is no moment you need to manufacture.</Paragraph>
          <Paragraph>You are free to keep thinking, questioning, and examining the claims carefully.</Paragraph>
          <Paragraph className="font-medium text-brand-rust">Truth does not disappear when it is approached slowly.</Paragraph>
        </div>
      </Section>

      {/* 6. Common Objections */}
      <div className="bg-brand-bg/50 border-t border-brand-navy/5">
        <Section>
          <div className="flex items-center gap-3 mb-8 text-brand-navy font-medium tracking-widest uppercase text-sm">
            <HelpCircle size={18} />
            <span>Common Objections</span>
          </div>
          <Heading>Understanding the Challenges</Heading>
          
          <div className="space-y-4">
            <FAQItem 
              question="Did Jesus really rise from the dead?"
              answer={
                <p>Christianity presents the resurrection as a historical claim, not a spiritual metaphor. Even many skeptical scholars agree on key points: Jesus was executed by crucifixion, His tomb was later found empty, and His earliest followers genuinely believed they encountered Him alive again. The question is not whether the claim is extraordinary, but whether any alternative explanation accounts for the historical evidence more convincingly.</p>
              }
            />
            <FAQItem 
              question="Hasn’t the Bible been changed or corrupted over time?"
              answer={
                <div className="space-y-4">
                  <p>Although the original manuscripts no longer exist, the Bible is considered remarkably well preserved. Thousands of ancient copies allow scholars to compare texts across centuries, revealing that over 99% of the wording is undisputed, with remaining variations involving minor differences such as spelling or word order — not core teachings. Discoveries like the Dead Sea Scrolls confirm that the biblical text has been transmitted with greater accuracy than any other ancient document.</p>
                  <div className="flex gap-8 text-sm font-medium text-brand-navy/60 uppercase tracking-widest pt-2">
                    <span>Old Testament: 1400 BC – 400 BC</span>
                    <span>New Testament: AD 40 – AD 90</span>
                  </div>
                </div>
              }
            />
            <FAQItem 
              question="If God is good, why is there so much suffering?"
              answer={
                <p>Christianity does not deny suffering or offer easy answers. It claims that evil entered the world through moral rebellion and that God did not remain distant from human pain. In Jesus, God entered into suffering, injustice, and death — and through the resurrection, Christianity claims that suffering is not permanent, but will one day be brought to an end.</p>
              }
            />
            <FAQItem 
              question="Are there many paths to God?"
              answer={
                <p>Christianity does not claim Jesus is one option among many. It claims He presented Himself as the way to God. While many belief systems make sincere but conflicting claims, contradictory truths cannot all be correct at the same time. The question is not whether exclusive truth claims feel uncomfortable, but whether they are true.</p>
              }
            />
            <FAQItem 
              question="How is Jesus different from other religious leaders?"
              answer={
                <p>Christianity is inseparable from the person of Jesus Himself. Other religious leaders offered teachings or paths to follow; Jesus claimed to accomplish something on humanity’s behalf. Christianity openly states that if Jesus did not rise from the dead, the faith collapses entirely. If He did, then He stands alone as a unique figure whose life, death, and resurrection define the faith that bears His name.</p>
              }
            />
          </div>
        </Section>
      </div>

      <footer className="py-12 px-6 border-t border-brand-navy/5 text-center bg-brand-bg">
        <p className="font-serif text-xl text-brand-navy mb-2">The Living Word</p>
        <p className="text-sm text-brand-text/50 uppercase tracking-widest">Reflective Apologetics & Honest Inquiry</p>
      </footer>
    </div>
  );
}
