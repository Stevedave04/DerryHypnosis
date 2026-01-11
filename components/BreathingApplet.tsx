
import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, ArrowDown, ArrowUp, Circle, Award, CheckCircle, Users, TrendingUp, Pause, Info, Wind, Brain, Activity, Shield } from 'lucide-react';

const PHASES = [
  { label: 'Inhale', icon: <ArrowDown size={20} />, color: 'bg-teal', glow: 'shadow-[0_0_40px_rgba(44,95,93,0.3)]', instruction: 'Breathe in through your nose.' },
  { label: 'Hold', icon: <Circle size={10} fill="currentColor" />, color: 'bg-gold', glow: 'shadow-[0_0_40px_rgba(212,165,116,0.3)]', instruction: 'Keep the air in your lungs.' },
  { label: 'Exhale', icon: <ArrowUp size={20} />, color: 'bg-teal-light', glow: 'shadow-[0_0_40px_rgba(74,124,122,0.3)]', instruction: 'Breathe out slowly through the mouth.' },
  { label: 'Hold', icon: <Circle size={10} fill="currentColor" />, color: 'bg-gold-dark', glow: 'shadow-[0_0_40px_rgba(184,138,88,0.3)]', instruction: 'Wait before the next breath.' }
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
    <div id="breathing-applet" className="py-16 md:py-20 bg-cream-light/30 border-y border-cream relative overflow-hidden scroll-mt-24">
      {/* Decorative background elements to fill space */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal/5 rounded-full blur-[120px] pointer-events-none animate-float"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-4 block animate-reveal">The Art of Self-Regulation</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-teal mb-6">Box Breathing</h2>
          <p className="font-body text-lg text-slate-800/60 max-w-xl mx-auto leading-relaxed">
            Harness the clinical technique used by elite performers to silence stress and regain focus in seconds.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-12 xl:gap-20 max-w-[1400px] mx-auto">
          
          {/* LEFT COLUMN: Clinical Insights */}
          <div className="hidden xl:flex flex-col gap-6 w-80 animate-reveal stagger-1">
            <div className="bg-white p-6 rounded-2xl border border-cream shadow-soft hover:shadow-premium transition-all">
              <div className="w-10 h-10 bg-teal/5 rounded-lg flex items-center justify-center text-teal mb-4">
                <Brain size={20} />
              </div>
              <h4 className="font-heading font-bold text-teal text-lg mb-2">The Vagus Nerve</h4>
              <p className="text-sm text-slate-800/60 leading-relaxed font-body">
                Box breathing stimulates the vagus nerve, which signals your brain to transition from "fight-or-flight" to "rest-and-digest" mode.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-cream shadow-soft hover:shadow-premium transition-all">
              <div className="w-10 h-10 bg-gold/5 rounded-lg flex items-center justify-center text-gold mb-4">
                <Shield size={20} />
              </div>
              <h4 className="font-heading font-bold text-teal text-lg mb-2">Tactical Use</h4>
              <p className="text-sm text-slate-800/60 leading-relaxed font-body">
                Also known as "Tactical Breathing," it is a staple training for Navy SEALs to maintain calm and peak cognitive performance under pressure.
              </p>
            </div>
          </div>

          {/* CENTER COLUMN: The Breathing Applet */}
          <div className="flex flex-col items-center flex-1 max-w-2xl w-full">
            {/* Step Indicators - Now Interactive */}
            <div className="bg-white rounded-3xl p-6 md:p-8 mb-12 shadow-premium border border-cream w-full">
              <div className="flex items-center gap-3 mb-6 text-teal font-bold uppercase tracking-widest text-[9px]">
                <Activity size={12} className="text-gold" />
                <span>Active Phase Guidance</span>
              </div>
              <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
                {PHASES.map((p, i) => (
                  <div key={i} className={`p-3 md:p-4 rounded-xl transition-all duration-500 border ${
                    phaseIndex === i && isActive 
                      ? `${p.color} bg-opacity-10 border-gold shadow-sm scale-105` 
                      : 'border-transparent bg-cream-light opacity-30 scale-95'
                  }`}>
                    <span className={`w-6 h-6 rounded-full ${p.color} text-white flex items-center justify-center font-bold text-[10px] mx-auto mb-2 shadow-sm`}>{i + 1}</span>
                    <p className={`font-body text-[9px] font-bold uppercase tracking-widest ${phaseIndex === i && isActive ? 'text-teal' : 'text-slate-800'}`}>
                      {p.label}
                    </p>
                  </div>
                ))}
              </div>
              {isActive && (
                <p className="mt-4 text-center text-xs text-gold font-bold italic animate-pulse">
                  {currentPhase.instruction}
                </p>
              )}
            </div>

            <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
              {/* Outer pulse effect */}
              <div className={`absolute inset-0 rounded-full transition-all duration-[4000ms] ${
                isActive ? 'opacity-10 scale-125' : 'opacity-0 scale-100'
              } ${currentPhase.color}`}></div>
              
              <div className="absolute inset-4 rounded-full border border-cream/50"></div>
              
              {/* Progress Circle SVG */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 scale-[0.92]">
                <circle
                  cx="50%"
                  cy="50%"
                  r="44%"
                  fill="transparent"
                  stroke="#EDE7D9"
                  strokeWidth="1"
                  opacity="0.3"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="44%"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className={`transition-all duration-1000 linear ${phaseIndex % 2 === 0 ? 'text-teal' : 'text-gold'}`}
                  style={{
                    strokeDasharray: '276%', 
                    strokeDashoffset: isActive ? 276 - (276 * (4 - secondsLeft + 1) / 4) : 276,
                  }}
                />
              </svg>

              {/* Central Core */}
              <div className={`w-56 h-56 md:w-72 md:h-72 rounded-full shadow-premium flex flex-col items-center justify-center text-white transition-all duration-[1000ms] ease-in-out ${
                isActive ? `${currentPhase.glow} ${phaseIndex === 0 ? 'scale-110' : phaseIndex === 2 ? 'scale-90' : 'scale-100'}` : 'scale-100 bg-teal'
              } ${isActive ? currentPhase.color : 'bg-teal'}`}>
                <div className="relative">
                   <span className="text-7xl md:text-9xl font-heading font-bold mb-1 tracking-tighter tabular-nums">{secondsLeft}</span>
                </div>
                <span className="text-sm md:text-xl font-body uppercase tracking-[0.4em] font-light opacity-90">{currentPhase.label}</span>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center">
              <div className="flex items-center gap-3 px-6 py-2 bg-white rounded-full border border-cream shadow-sm mb-8">
                <span className="font-body text-teal font-bold text-sm">{cycles}</span>
                <span className="text-[10px] text-slate-800/40 font-bold uppercase tracking-widest">Completed Cycles</span>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleStart}
                  className={`font-bold py-4 px-10 rounded-full shadow-premium transition-all flex items-center gap-3 transform hover:-translate-y-1 active:scale-95 text-sm ${
                    isActive ? 'bg-slate-900 text-white' : 'bg-teal text-white hover:bg-teal-dark'
                  }`}
                >
                  {isActive ? 'Pause Session' : 'Start Session'}
                  {isActive ? <Pause size={18} /> : <Play size={18} fill="currentColor" />}
                </button>
                <button
                  onClick={handleReset}
                  className="bg-white hover:bg-cream border border-cream-dark text-slate-800 font-bold py-4 px-10 rounded-full transition-all flex items-center gap-3 active:scale-95 text-sm"
                >
                  Reset
                  <RotateCcw size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Practice Tips */}
          <div className="hidden xl:flex flex-col gap-6 w-80 animate-reveal stagger-2">
             <div className="bg-white p-6 rounded-2xl border border-cream shadow-soft hover:shadow-premium transition-all">
              <div className="w-10 h-10 bg-teal/5 rounded-lg flex items-center justify-center text-teal mb-4">
                <Wind size={20} />
              </div>
              <h4 className="font-heading font-bold text-teal text-lg mb-2">Posture Tip</h4>
              <p className="text-sm text-slate-800/60 leading-relaxed font-body">
                Sit upright with your feet flat. This allows for unrestricted diaphragm movement, increasing oxygen intake and grounding the body.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-cream shadow-soft hover:shadow-premium transition-all">
              <div className="w-10 h-10 bg-gold/5 rounded-lg flex items-center justify-center text-gold mb-4">
                <Info size={20} />
              </div>
              <h4 className="font-heading font-bold text-teal text-lg mb-2">Eye Position</h4>
              <p className="text-sm text-slate-800/60 leading-relaxed font-body">
                Gently close your eyes or fix your gaze on the central circle. Reducing visual stimuli helps the mind enter a meditative state faster.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid - Now fills the bottom space nicely */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mt-24 md:mt-32">
          {[
            { label: "Clinical Expert", sub: "Fully Accredited", icon: <Award className="text-gold" size={24} /> },
            { label: "Personalised", sub: "Subconscious Alignment", icon: <CheckCircle className="text-gold" size={24} /> },
            { label: "Community", sub: "Derry & Letterkenny", icon: <Users className="text-gold" size={24} /> },
            { label: "Proven", sub: "Rapid Results", icon: <TrendingUp className="text-gold" size={24} /> }
          ].map((stat, i) => (
            <div key={i} className="text-center group bg-white/40 backdrop-blur-sm p-8 rounded-3xl border border-white/50 hover:bg-white hover:border-cream transition-all duration-500 shadow-soft">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 shadow-soft group-hover:bg-teal group-hover:text-white transition-all duration-500">
                {stat.icon}
              </div>
              <h3 className="font-heading font-bold text-slate-800 mb-2 text-base">{stat.label}</h3>
              <p className="font-body text-[10px] text-slate-800/40 font-bold uppercase tracking-widest">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreathingApplet;
