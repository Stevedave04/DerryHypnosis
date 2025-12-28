
import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, ArrowDown, ArrowUp, Circle, Award, CheckCircle, Users, TrendingUp, Pause, Info } from 'lucide-react';

const PHASES = [
  { label: 'Inhale', icon: <ArrowDown size={20} />, color: 'bg-teal', glow: 'shadow-[0_0_40px_rgba(44,95,93,0.3)]' },
  { label: 'Hold', icon: <Circle size={10} fill="currentColor" />, color: 'bg-gold', glow: 'shadow-[0_0_40px_rgba(212,165,116,0.3)]' },
  { label: 'Exhale', icon: <ArrowUp size={20} />, color: 'bg-teal-light', glow: 'shadow-[0_0_40px_rgba(74,124,122,0.3)]' },
  { label: 'Hold', icon: <Circle size={10} fill="currentColor" />, color: 'bg-gold-dark', glow: 'shadow-[0_0_40px_rgba(184,138,88,0.3)]' }
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
    <div id="breathing-applet" className="py-24 bg-cream-light/50 border-y border-cream scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Mindfulness Tool</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-teal mb-6">Box Breathing</h2>
            <p className="font-body text-lg text-slate-800/60 max-w-xl mx-auto leading-relaxed">
              A rhythmic technique to regulate your nervous system and find mental clarity in seconds.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-10 mb-16 shadow-soft max-w-2xl mx-auto border border-cream/50">
            <div className="flex items-center gap-3 mb-8 text-teal font-bold uppercase tracking-widest text-[10px]">
              <Info size={14} className="text-gold" />
              <span>Step-by-step Guide</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {PHASES.map((p, i) => (
                <div key={i} className={`p-4 rounded-xl transition-all duration-300 ${phaseIndex === i && isActive ? 'bg-cream-light border border-gold/20' : 'opacity-40'}`}>
                  <span className={`w-6 h-6 rounded-full ${p.color} text-white flex items-center justify-center font-bold text-[10px] mx-auto mb-3`}>{i + 1}</span>
                  <p className="font-body text-slate-800 text-[10px] font-bold uppercase tracking-widest">{p.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
              {/* Pulse effect */}
              <div className={`absolute inset-0 rounded-full transition-all duration-[4000ms] ${
                isActive ? 'opacity-10 scale-125' : 'opacity-0 scale-100'
              } ${currentPhase.color}`}></div>
              
              <div className="absolute inset-4 rounded-full border border-cream"></div>
              
              <svg className="absolute inset-0 w-full h-full -rotate-90 scale-[0.9]">
                <circle
                  cx="50%"
                  cy="50%"
                  r="44%"
                  fill="transparent"
                  stroke="#EDE7D9"
                  strokeWidth="1"
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
                    strokeDasharray: '276%', // Approx for circle math
                    strokeDashoffset: isActive ? 276 - (276 * (4 - secondsLeft + 1) / 4) : 276,
                  }}
                />
              </svg>

              <div className={`w-64 h-64 md:w-72 md:h-72 rounded-full shadow-2xl flex flex-col items-center justify-center text-white transition-all duration-[1000ms] ease-in-out ${
                isActive ? `${currentPhase.glow} ${phaseIndex === 0 ? 'scale-110' : phaseIndex === 2 ? 'scale-90' : 'scale-100'}` : 'scale-100 bg-teal'
              } ${isActive ? currentPhase.color : 'bg-teal'}`}>
                <div className="relative">
                   <span className="text-7xl md:text-8xl font-heading font-bold mb-1 tracking-tighter tabular-nums">{secondsLeft}</span>
                </div>
                <span className="text-lg md:text-xl font-body uppercase tracking-[0.3em] font-light opacity-90">{currentPhase.label}</span>
              </div>
            </div>

            <p className="mt-16 font-body text-slate-800/40 font-bold uppercase tracking-widest text-[10px]">
              <span className="text-teal">{cycles}</span> Completed Cycles
            </p>

            <div className="flex gap-4 mt-12">
              <button
                onClick={handleStart}
                className={`font-bold py-4 px-10 rounded-full shadow-lg transition-all flex items-center gap-3 transform hover:-translate-y-1 active:scale-95 text-sm ${
                  isActive ? 'bg-slate-800 text-white' : 'bg-teal text-white hover:bg-teal-dark'
                }`}
              >
                {isActive ? 'Pause' : 'Start'}
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-32">
          {[
            { label: "Clinical Expert", sub: "Fully Accredited", icon: <Award className="text-gold" size={24} /> },
            { label: "Personalised", sub: "Subconscious Alignment", icon: <CheckCircle className="text-gold" size={24} /> },
            { label: "Community", sub: "Derry & Letterkenny", icon: <Users className="text-gold" size={24} /> },
            { label: "Proven", sub: "Rapid Results", icon: <TrendingUp className="text-gold" size={24} /> }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
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
