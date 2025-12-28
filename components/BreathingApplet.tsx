import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, ArrowDown, ArrowUp, Circle, Award, CheckCircle, Users, TrendingUp, Pause, Info } from 'lucide-react';

const PHASES = [
  { label: 'Inhale', icon: <ArrowDown size={20} />, color: 'bg-teal' },
  { label: 'Hold', icon: <Circle size={10} fill="currentColor" />, color: 'bg-gold' },
  { label: 'Exhale', icon: <ArrowUp size={20} />, color: 'bg-teal-light' },
  { label: 'Hold', icon: <Circle size={10} fill="currentColor" />, color: 'bg-gold-dark' }
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
    <div id="breathing-applet" className="py-32 bg-cream-light/50 border-y border-cream scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Mindfulness Tool</span>
            <h2 className="font-heading text-5xl md:text-7xl font-bold text-teal mb-6">Box Breathing</h2>
            <p className="font-body text-xl text-slate-800/60 max-w-xl mx-auto leading-relaxed">
              A powerful technique used by professionals to regulate the nervous system and clear mental fog in seconds.
            </p>
          </div>

          {/* Step-by-Step Instructions */}
          <div className="bg-white/80 backdrop-blur-sm border border-gold/20 rounded-3xl p-8 mb-16 shadow-soft max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-6 text-teal font-bold uppercase tracking-widest text-sm">
              <Info size={18} className="text-gold" />
              <span>How to Perform Box Breathing</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`flex items-center gap-4 p-3 rounded-xl transition-colors duration-500 ${phaseIndex === 0 && isActive ? 'bg-teal/10 border border-teal/20' : 'bg-transparent'}`}>
                <span className="w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center font-bold text-sm">1</span>
                <p className="font-body text-slate-800 text-sm"><strong>Inhale</strong> slowly for 4 seconds</p>
              </div>
              <div className={`flex items-center gap-4 p-3 rounded-xl transition-colors duration-500 ${phaseIndex === 1 && isActive ? 'bg-gold/10 border border-gold/20' : 'bg-transparent'}`}>
                <span className="w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center font-bold text-sm">2</span>
                <p className="font-body text-slate-800 text-sm"><strong>Hold</strong> your breath for 4 seconds</p>
              </div>
              <div className={`flex items-center gap-4 p-3 rounded-xl transition-colors duration-500 ${phaseIndex === 2 && isActive ? 'bg-teal-light/10 border border-teal-light/20' : 'bg-transparent'}`}>
                <span className="w-8 h-8 rounded-full bg-teal-light text-white flex items-center justify-center font-bold text-sm">3</span>
                <p className="font-body text-slate-800 text-sm"><strong>Exhale</strong> slowly for 4 seconds</p>
              </div>
              <div className={`flex items-center gap-4 p-3 rounded-xl transition-colors duration-500 ${phaseIndex === 3 && isActive ? 'bg-gold-dark/10 border border-gold-dark/20' : 'bg-transparent'}`}>
                <span className="w-8 h-8 rounded-full bg-gold-dark text-white flex items-center justify-center font-bold text-sm">4</span>
                <p className="font-body text-slate-800 text-sm"><strong>Hold</strong> empty for 4 seconds</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            {/* Immersive Breathing Circle */}
            <div className="relative w-96 h-96 flex items-center justify-center">
              {/* Pulsing Aura */}
              <div className={`absolute inset-0 rounded-full transition-all duration-[4000ms] ${
                isActive ? 'opacity-20 scale-125' : 'opacity-0 scale-100'
              } ${currentPhase.color}`}></div>
              
              <div className="absolute inset-0 rounded-full bg-white shadow-premium opacity-50"></div>
              
              <div className="absolute inset-6 rounded-full border border-teal/5"></div>
              <div className="absolute inset-12 rounded-full border border-teal/5"></div>
              
              <svg className="absolute inset-0 w-full h-full -rotate-90 scale-[0.85]">
                <circle
                  cx="192"
                  cy="192"
                  r="160"
                  fill="transparent"
                  stroke="#E5E7EB"
                  strokeWidth="1"
                  className="opacity-40"
                />
                <circle
                  cx="192"
                  cy="192"
                  r="160"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                  className={`${isActive ? 'transition-all duration-1000 linear' : 'transition-none'} ${phaseIndex % 2 === 0 ? 'text-teal' : 'text-gold'}`}
                  style={{
                    strokeDasharray: '1005',
                    strokeDashoffset: isActive ? 1005 - (1005 * (4 - secondsLeft + 1) / 4) : 1005,
                  }}
                />
              </svg>

              <div className={`w-72 h-72 rounded-full shadow-2xl flex flex-col items-center justify-center text-white transition-all duration-[1000ms] ease-in-out ${
                isActive ? (phaseIndex === 0 ? 'scale-110 shadow-teal/30' : phaseIndex === 2 ? 'scale-90 shadow-slate-900/10' : 'scale-100') : 'scale-100'
              } ${currentPhase.color}`}>
                <div className="relative">
                   <span className="text-8xl font-heading font-bold mb-1 tracking-tighter tabular-nums drop-shadow-lg">{secondsLeft}</span>
                   {isActive && (
                     <div className="absolute -top-4 -right-4 w-6 h-6 bg-white/20 rounded-full animate-ping"></div>
                   )}
                </div>
                <span className="text-2xl font-body uppercase tracking-[0.3em] font-light opacity-90 drop-shadow-md">{currentPhase.label}</span>
              </div>
            </div>

            <div className="flex gap-6 mt-20 items-center">
              {PHASES.map((p, i) => (
                <div 
                  key={i} 
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 border-2 ${
                    phaseIndex === i 
                    ? `${p.color} text-white scale-110 shadow-xl border-white/20` 
                    : 'bg-white text-slate-800/20 border-transparent'
                  }`}
                >
                  {p.icon}
                </div>
              ))}
            </div>

            <p className="mt-10 font-body text-slate-800/40 font-bold uppercase tracking-widest text-sm">
              <span className="text-teal">{cycles}</span> Completed Cycles
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-16">
              <button
                onClick={handleStart}
                className={`font-bold py-5 px-12 rounded-2xl shadow-xl transition-all flex items-center gap-3 transform hover:-translate-y-1 active:scale-95 ${
                  isActive ? 'bg-slate-800 text-white hover:bg-slate-900' : 'bg-teal text-white hover:bg-teal-dark'
                }`}
              >
                {isActive ? 'Pause Session' : 'Start Session'}
                {isActive ? <Pause size={20} /> : <Play size={20} fill="currentColor" />}
              </button>
              <button
                onClick={handleReset}
                className="bg-white hover:bg-cream border border-cream-dark text-slate-800 font-bold py-5 px-12 rounded-2xl transition-all flex items-center gap-3 active:scale-95"
              >
                Reset
                <RotateCcw size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 mt-40">
          {[
            { label: "Clinical Expert", sub: "Accredited by IA Hypnotherapists", icon: <Award className="text-gold" size={32} /> },
            { label: "Personalised", sub: "Tailored to your subconscious needs", icon: <CheckCircle className="text-gold" size={32} /> },
            { label: "Community", sub: "500+ Lives transformed in Derry", icon: <Users className="text-gold" size={32} /> },
            { label: "Proven", sub: "95% Satisfaction and success rate", icon: <TrendingUp className="text-gold" size={32} /> }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-cream rounded-3xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-teal group-hover:text-white group-hover:-translate-y-2 group-hover:shadow-xl">
                {stat.icon}
              </div>
              <h3 className="font-heading font-bold text-slate-800 mb-3 text-xl">{stat.label}</h3>
              <p className="font-body text-sm text-slate-800/50 leading-relaxed font-medium uppercase tracking-tight">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreathingApplet;