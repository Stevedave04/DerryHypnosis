
import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, ArrowDown, ArrowUp, Circle, Award, CheckCircle, Users, TrendingUp, Pause, Info, Wind, Brain, Activity, Shield, Sparkles } from 'lucide-react';

const PHASES = [
  { 
    label: 'Inhale', 
    icon: <ArrowDown size={20} />, 
    color: 'bg-teal', 
    glow: 'shadow-[0_0_60px_rgba(44,95,93,0.4)]', 
    instruction: 'Fill your lungs deeply through the nose.',
    text: 'Breathe In'
  },
  { 
    label: 'Hold', 
    icon: <Circle size={10} fill="currentColor" />, 
    color: 'bg-gold', 
    glow: 'shadow-[0_0_60px_rgba(212,165,116,0.4)]', 
    instruction: 'Keep the air in, suspended and calm.',
    text: 'Hold'
  },
  { 
    label: 'Exhale', 
    icon: <ArrowUp size={20} />, 
    color: 'bg-teal-light', 
    glow: 'shadow-[0_0_60px_rgba(74,124,122,0.4)]', 
    instruction: 'Release slowly through your mouth.',
    text: 'Release'
  },
  { 
    label: 'Hold', 
    icon: <Circle size={10} fill="currentColor" />, 
    color: 'bg-gold-dark', 
    glow: 'shadow-[0_0_60px_rgba(184,138,88,0.4)]', 
    instruction: 'Rest in the stillness before the next breath.',
    text: 'Stillness'
  }
];

const BreathingApplet: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(4);
  const [cycles, setCycles] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isActive) {
      timerRef.current = window.setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            setPhaseIndex((currentPhase) => {
              const nextPhase = (currentPhase + 1) % 4;
              if (nextPhase === 0) {
                setCycles((c) => c + 1);
              }
              return nextPhase;
            });
            return 4;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive]);

  const handleStart = () => setIsActive(!isActive);
  const handleReset = () => {
    setIsActive(false);
    setPhaseIndex(0);
    setSecondsLeft(4);
    setCycles(0);
  };

  const currentPhase = PHASES[phaseIndex];

  return (
    <div id="breathing-applet" className="py-24 md:py-32 bg-cream-light/40 border-y border-cream relative overflow-hidden scroll-mt-24">
      {/* Dynamic Background Ambiance */}
      <div className={`absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-all duration-[3000ms] ${isActive ? 'bg-teal/10 opacity-100' : 'bg-teal/5 opacity-50'}`}></div>
      <div className={`absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-all duration-[3000ms] ${isActive ? 'bg-gold/10 opacity-100' : 'bg-gold/5 opacity-50'}`} style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Superior Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full text-gold font-bold text-xs uppercase tracking-[0.2em] mb-8 animate-reveal">
            <Sparkles size={14} />
            Clinical Breathing Tool
          </div>
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-teal mb-8 leading-tight">
            Master Your Focus with <br />
            <span className="italic font-medium text-teal-light">Tactical Box Breathing.</span>
          </h2>
          <p className="font-body text-xl text-slate-800/60 leading-relaxed">
            A high-performance technique to recalibrate your nervous system. Used by clinical practitioners and elite teams to achieve instant clarity and calm.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center gap-16 xl:gap-24 max-w-7xl mx-auto">
          
          {/* LEFT PANEL: The Science */}
          <div className="hidden xl:flex flex-col gap-8 w-80 animate-reveal stagger-1">
            <div className="bg-white p-8 rounded-3xl border border-cream shadow-soft hover:shadow-premium transition-all group">
              <div className="w-12 h-12 bg-teal/5 rounded-2xl flex items-center justify-center text-teal mb-6 group-hover:bg-teal group-hover:text-white transition-all">
                <Brain size={24} />
              </div>
              <h4 className="font-heading font-bold text-teal text-xl mb-3">Neural Reset</h4>
              <p className="text-sm text-slate-800/60 leading-relaxed font-body">
                By equalising the rhythm of your breath, you manually override the stress center of your brain, inducing a physiological state of calm.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-cream shadow-soft hover:shadow-premium transition-all group">
              <div className="w-12 h-12 bg-gold/5 rounded-lg flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-all">
                <Shield size={24} />
              </div>
              <h4 className="font-heading font-bold text-teal text-xl mb-3">Safe Haven</h4>
              <p className="text-sm text-slate-800/60 leading-relaxed font-body">
                Consistent practice strengthens your emotional resilience, making it easier to return to this center during times of high stress.
              </p>
            </div>
          </div>

          {/* CENTER PANEL: The Breathing Core */}
          <div className="flex flex-col items-center flex-1 w-full max-w-3xl">
            {/* Phase Visualiser */}
            <div className="w-full bg-white/80 backdrop-blur-md rounded-[2.5rem] p-4 md:p-6 mb-16 shadow-premium border border-cream/50 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal/20 via-gold/20 to-teal/20 opacity-30"></div>
               <div className="grid grid-cols-4 gap-3 md:gap-4 relative z-10">
                {PHASES.map((p, i) => (
                  <div key={i} className={`relative p-3 md:p-5 rounded-2xl transition-all duration-700 border ${
                    phaseIndex === i && isActive 
                      ? 'bg-cream-light border-gold/30 shadow-sm scale-[1.02]' 
                      : 'border-transparent opacity-40 grayscale-[0.5]'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 text-white shadow-lg transition-transform duration-500 ${phaseIndex === i && isActive ? 'scale-110' : 'scale-90'} ${p.color}`}>
                       {p.icon}
                    </div>
                    <p className={`font-body text-[10px] font-bold uppercase tracking-[0.2em] ${phaseIndex === i && isActive ? 'text-teal' : 'text-slate-400'}`}>
                      {p.label}
                    </p>
                    {phaseIndex === i && isActive && (
                       <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gold rounded-full shadow-[0_0_10px_#D4A574]"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* The Sphere */}
            <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] flex items-center justify-center">
              {/* Outer Energy Pulse */}
              <div className={`absolute inset-0 rounded-full transition-all duration-[4000ms] ${
                isActive ? 'opacity-20 scale-[1.3]' : 'opacity-0 scale-100'
              } ${currentPhase.color}`}></div>
              <div className={`absolute inset-0 rounded-full border border-teal/5 transition-all duration-[4000ms] ${
                isActive ? 'scale-[1.15]' : 'scale-100'
              }`}></div>
              
              {/* Main Progress Track */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 scale-[0.96]">
                <circle
                  cx="50%"
                  cy="50%"
                  r="46%"
                  fill="none"
                  stroke="#EDE7D9"
                  strokeWidth="2"
                  strokeDasharray="4 8"
                  opacity="0.4"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="46%"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                  className={`transition-all duration-1000 linear ${phaseIndex % 2 === 0 ? 'text-teal' : 'text-gold'}`}
                  style={{
                    strokeDasharray: '289%', 
                    strokeDashoffset: isActive ? 289 - (289 * (4 - secondsLeft + 1) / 4) : 289,
                  }}
                />
              </svg>

              {/* The Central Breathing Sphere */}
              <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center text-white transition-all duration-[1000ms] ease-in-out z-10 overflow-hidden ${
                isActive ? `${currentPhase.glow} ${phaseIndex === 0 ? 'scale-110' : phaseIndex === 2 ? 'scale-90' : 'scale-100'}` : 'scale-100 bg-teal'
              } ${isActive ? currentPhase.color : 'bg-teal'}`}>
                {/* Visual Depth Gradients */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-white/10 opacity-40"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent)]"></div>
                
                <div className="relative z-20 flex flex-col items-center">
                   <div className="font-heading text-8xl md:text-[9rem] font-bold tracking-tighter tabular-nums leading-none">
                     {secondsLeft}
                   </div>
                   <div className="h-px w-12 bg-white/30 my-4 md:my-6"></div>
                   <div className="text-sm md:text-lg font-body uppercase tracking-[0.5em] font-medium text-white/90">
                     {currentPhase.text}
                   </div>
                </div>
              </div>

              {/* Instruction Banner - Context Sensitive */}
              <div className={`absolute -bottom-2 md:-bottom-8 left-1/2 -translate-x-1/2 w-full text-center transition-all duration-700 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <p className="font-body text-teal font-bold text-lg md:text-xl italic">
                  "{currentPhase.instruction}"
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="mt-24 md:mt-32 flex flex-col items-center w-full">
              <div className="flex items-center gap-4 px-8 py-3 bg-white rounded-2xl border border-cream shadow-soft mb-12">
                 <div className="flex -space-x-1">
                    {[...Array(Math.min(cycles, 5))].map((_, i) => (
                      <div key={i} className="w-2.5 h-2.5 rounded-full bg-gold border border-white"></div>
                    ))}
                 </div>
                 <span className="text-xs text-slate-800/40 font-bold uppercase tracking-[0.2em]">
                  <span className="text-teal text-base mr-2">{cycles}</span> 
                  Cycles Mastered
                </span>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                <button
                  onClick={handleStart}
                  className={`min-w-[220px] font-bold py-6 px-12 rounded-full shadow-premium transition-all flex items-center justify-center gap-4 transform hover:-translate-y-1 active:scale-95 text-lg ${
                    isActive ? 'bg-slate-900 text-white' : 'bg-teal text-white hover:bg-teal-dark'
                  }`}
                >
                  {isActive ? 'Pause Flow' : 'Begin Flow'}
                  {isActive ? <Pause size={24} /> : <Play size={24} fill="currentColor" />}
                </button>
                <button
                  onClick={handleReset}
                  className="bg-white hover:bg-cream-light border-2 border-cream text-slate-800 font-bold py-6 px-12 rounded-full transition-all flex items-center justify-center gap-4 active:scale-95 text-lg group"
                >
                  Reset
                  <RotateCcw size={22} className="group-hover:rotate-[-45deg] transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Expert Tips */}
          <div className="hidden xl:flex flex-col gap-8 w-80 animate-reveal stagger-2">
             <div className="bg-white p-8 rounded-3xl border border-cream shadow-soft hover:shadow-premium transition-all group">
              <div className="w-12 h-12 bg-teal/5 rounded-lg flex items-center justify-center text-teal mb-6 group-hover:bg-teal group-hover:text-white transition-all">
                <Wind size={24} />
              </div>
              <h4 className="font-heading font-bold text-teal text-xl mb-3">Airflow Path</h4>
              <p className="text-sm text-slate-800/60 leading-relaxed font-body">
                Visualise the air as a cool, clear stream entering your body, and a warm, weighted mist leaving it.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-cream shadow-soft hover:shadow-premium transition-all group">
              <div className="w-12 h-12 bg-gold/5 rounded-lg flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-all">
                <Info size={24} />
              </div>
              <h4 className="font-heading font-bold text-teal text-xl mb-3">Quiet Eyes</h4>
              <p className="text-sm text-slate-800/60 leading-relaxed font-body">
                Maintain a "soft focus" or close your eyes. Reducing external visual data allows the brain to process internal changes more effectively.
              </p>
            </div>
          </div>
        </div>

        {/* Tactical Proof Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-32 md:mt-48">
          {[
            { label: "Elite Performance", sub: "Tactical Roots", icon: <Award className="text-gold" size={28} /> },
            { label: "Neural Symmetry", sub: "Balanced Rhythms", icon: <CheckCircle className="text-gold" size={28} /> },
            { label: "Subconscious Gate", sub: "Deep Receptivity", icon: <Users className="text-gold" size={28} /> },
            { label: "Instant Recalibration", sub: "Rapid Impact", icon: <TrendingUp className="text-gold" size={28} /> }
          ].map((stat, i) => (
            <div key={i} className="text-center group bg-white p-10 rounded-[2.5rem] border border-cream-dark/10 hover:border-gold/30 transition-all duration-500 shadow-soft hover:shadow-premium">
              <div className="w-16 h-16 bg-cream-light rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-soft group-hover:bg-teal group-hover:text-white transition-all duration-700">
                {stat.icon}
              </div>
              <h3 className="font-heading font-bold text-teal mb-3 text-lg leading-tight">{stat.label}</h3>
              <p className="font-body text-[10px] text-slate-800/40 font-bold uppercase tracking-[0.25em]">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreathingApplet;
