
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Flame, 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  Crown, 
  MessageCircle,
  ChevronDown,
  XCircle,
  Gem, 
  Target,
  ShieldAlert,
  Map,
  BookOpen,
  Users2,
  Sparkles,
  Smartphone,
  Layout,
  MousePointer2,
  ShoppingCart
} from 'lucide-react';

// Enlace de pago Hotmart
const CHECKOUT_URL = "https://pay.hotmart.com/J103850155N?bid=1768335256036";

// Componente de Portada de Ebook Diseñado con mejor responsividad
const EbookCover = ({ className = "" }: { className?: string }) => (
  <div className={`relative group perspective-1000 ${className}`}>
    <div className="relative w-56 h-[340px] xs:w-64 xs:h-[400px] md:w-80 md:h-[480px] transition-all duration-700 transform hover:rotate-y-12 hover:scale-105 shadow-[15px_15px_40px_rgba(0,0,0,0.8)] rounded-r-lg overflow-hidden border-y border-r border-white/10 mx-auto">
      {/* Lomo del libro */}
      <div className="absolute left-0 top-0 bottom-0 w-3 md:w-4 bg-gradient-to-r from-black via-[#1a1a1a] to-black z-20 border-r border-white/5" />
      
      {/* Fondo de la portada */}
      <div className="absolute inset-0 bg-[#050505] z-10 flex flex-col items-center justify-between p-6 md:p-10 text-center">
        {/* Patrón de fondo sutil */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#D4AF37 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />
        
        <div className="relative z-20">
          <div className="w-8 md:w-12 h-1 bg-gold-gradient mb-4 md:mb-8 mx-auto" />
          <span className="font-header text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] text-[#D4AF37] uppercase font-bold mb-2 md:mb-4 block leading-tight">Sistemas de Influencia Orgánica</span>
          <h2 className="font-header text-4xl md:text-6xl font-black text-gold-gradient leading-none tracking-tighter">EL<br/>CÓDIGO</h2>
          <div className="mt-2 md:mt-4 text-[7px] md:text-[9px] text-white/40 tracking-[0.2em] md:tracking-[0.3em] uppercase italic">Arquitectura de la Atracción Primaria</div>
        </div>

        <div className="relative z-20 w-full">
          <div className="flex justify-center gap-2 mb-4 md:mb-6">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-[#D4AF37]/30 flex items-center justify-center">
              <Crown className="w-3 h-3 md:w-4 md:h-4 text-[#D4AF37]" />
            </div>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mb-3 md:mb-4" />
          <p className="text-[8px] md:text-[10px] font-header text-white/30 tracking-widest uppercase">Elite Intelligence Group</p>
        </div>
      </div>
      
      {/* Brillo de papel satinado */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-30 pointer-events-none" />
    </div>
  </div>
);

const PrimaryCTA = ({ text, subtext, onClick }: { text: string; subtext?: string; onClick?: () => void }) => (
  <button 
    onClick={onClick || (() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' }))}
    className="gold-btn group relative flex flex-col items-center justify-center py-5 px-8 md:py-8 md:px-14 rounded-full transition-all active:scale-95 w-full md:w-auto"
  >
    <span className="font-header text-black text-base md:text-2xl font-black tracking-[0.15em] md:tracking-[0.2em] flex items-center gap-3 md:gap-4 leading-tight">
      {text} <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 md:group-hover:translate-x-3 transition-transform shrink-0" />
    </span>
    {subtext && <span className="text-black/70 text-[8px] md:text-[10px] uppercase font-black tracking-[0.3em] md:tracking-[0.4em] mt-1 md:mt-2 italic">{subtext}</span>}
  </button>
);

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ min: 9, sec: 51 });
  const [showFixedButton, setShowFixedButton] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.sec > 0) return { ...prev, sec: prev.sec - 1 };
        if (prev.min > 0) return { min: prev.min - 1, sec: 59 };
        return prev;
      });
    }, 1000);

    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowFixedButton(true);
      } else {
        setShowFixedButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCheckout = () => {
    window.location.href = CHECKOUT_URL;
  };

  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-[#D4AF37] selection:text-black antialiased">
      
      {/* Botón Fixed "Comprar" - Ajustado para no molestar en mobile */}
      <div className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[110] transition-all duration-500 transform ${showFixedButton ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        <button 
          onClick={handleCheckout}
          className="gold-btn flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full shadow-[0_10px_40px_rgba(212,175,55,0.4)] active:scale-95 transition-all group"
        >
          <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 text-black" />
          <span className="font-header text-black font-black tracking-[0.15em] text-[12px] md:text-base">ADQUIRIR</span>
        </button>
      </div>

      {/* ⚠️ ADVERTENCIA */}
      <div className="bg-[#660000] text-white py-2.5 md:py-3 px-4 md:px-6 text-center text-[8px] md:text-xs font-black tracking-[0.3em] md:tracking-[0.5em] uppercase sticky top-0 w-full z-[100] border-b border-white/10 flex justify-center items-center gap-2 md:gap-4">
        <ShieldAlert className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#D4AF37] animate-pulse" />
        ⚠️ PROTOCOLO ACTIVADO: EL CÓDIGO
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex flex-col items-center justify-center px-4 md:px-6 text-center overflow-hidden py-16 md:pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=2400" 
            className="w-full h-full object-cover opacity-10 scale-110 saturate-0" 
            alt="Elegancia"
          />
          <div className="absolute inset-0 seduction-overlay" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-6xl lg:text-[6.5rem] mb-6 md:mb-8 leading-[1.1] md:leading-[0.9] tracking-tighter text-balance">
            “DOMINA EL ARTE <br className="hidden md:block" /> 
            <span className="text-gold-gradient italic">DE SER DESEADO</span> <br className="hidden md:block" /> 
            SIN PERDER TU ESENCIA”
          </h1>

          <p className="text-white/60 text-base md:text-2xl max-w-3xl mx-auto mb-8 md:mb-12 font-light leading-relaxed px-2 md:px-0">
            ¿Has sentido alguna vez esa <span className="text-white font-bold italic underline decoration-[#D4AF37]">barrera invisible</span> que te impide conectar genuinamente con la persona que acapara tus pensamientos?
          </p>

          <p className="text-[#D4AF37] text-sm md:text-xl font-bold mb-10 md:mb-16 italic tracking-[0.1em] md:tracking-widest uppercase">
            Sincroniza tu Proyección con el Instinto Primario de Atracción.
          </p>

          <div className="flex flex-col items-center gap-8 md:gap-12 mb-10 md:mb-20">
            <EbookCover />
            <div className="mt-4 md:mt-8 w-full md:w-auto">
              <PrimaryCTA text="¡QUIERO EL PROTOCOLO!" onClick={handleCheckout} />
              <p className="text-white/20 text-[9px] md:text-xs mt-4 md:mt-6 tracking-[0.2em] md:tracking-[0.3em] uppercase font-black italic">Habilitación de descarga inmediata</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🤔¿Te identificas con esto? */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-[#030303]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:20 reveal-on-scroll">
            <h2 className="font-display text-3xl md:text-6xl mb-4 md:mb-6 italic">🤔 Sincérate con tu realidad</h2>
            <p className="text-white/40 uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-bold">Análisis de Posicionamiento Social:</p>
          </div>

          <div className="space-y-4 md:space-y-6 mb-12 md:mb-16">
            {[
              "¿Experimentas bloqueos al intentar establecer una dinámica fluida con alguien que te cautiva?",
              "¿Notas que tus interacciones digitales carecen de chispa y caen en la monotonía?",
              "¿Deseas poseer la lucidez mental para saber cómo proyectar valor en cada gesto?",
              "¿Te gustaría que el interés fluyera desde la otra parte hacia ti de forma orgánica?"
            ].map((q, i) => (
              <div key={i} className="glass-card p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] flex items-start md:items-center gap-4 md:gap-6 group hover:border-[#D4AF37]/40 transition-all reveal-on-scroll">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] group-hover:text-black transition-all mt-1 md:mt-0">
                  <span className="font-bold text-xs md:text-sm">!</span>
                </div>
                <p className="text-base md:text-xl font-light text-white/60 italic leading-relaxed">"{q}"</p>
              </div>
            ))}
          </div>

          <div className="p-8 md:p-12 glass-card rounded-[2rem] md:rounded-[3.5rem] border-2 border-[#D4AF37]/20 text-center red-glow reveal-on-scroll">
            <h3 className="text-xl md:text-4xl font-display italic mb-4 md:mb-6">Si te viste reflejado en estos puntos...</h3>
            <p className="text-lg md:text-xl text-white/40 leading-relaxed font-light">
              <span className="text-white font-bold">El Código</span> es el sistema necesario para transformar tu imperceptibilidad en una presencia inevitable y magnética.
            </p>
          </div>
        </div>
      </section>

      {/* 🔥¿QUÉ VAS A LOGRAR? */}
      <section className="py-20 md:py-32 px-4 md:px-6 relative bg-black">
        <div className="max-w-7xl mx-auto text-center reveal-on-scroll mb-16 md:mb-24">
          <h2 className="font-display text-4xl md:text-8xl mb-4 md:mb-6 italic">🔥 RESULTADOS <br className="md:hidden" /><span className="text-gold-gradient italic font-black">ESTRATÉGICOS</span></h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-12">
          {[
            { icon: Sparkles, t: "Magnetismo Orgánico", d: "Proyecta una autoridad natural y segura, eliminando la necesidad de recurrir a comportamientos impostados." },
            { icon: MessageCircle, t: "Dialéctica Digital", d: "Domina la comunicación textual mediante estructuras diseñadas para mantener la tensión y el misterio." },
            { icon: Flame, t: "Tensión Involuntaria", d: "Activa los disparadores biológicos de interés mucho antes de iniciar cualquier conversación física." },
            { icon: Gem, t: "Estatus de Prestigio", d: "Reubica tu valor percibido en el mercado social, pasando de ser quien busca a ser el objetivo buscado." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-6 md:gap-8 group reveal-on-scroll bg-white/[0.02] p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-white/5 hover:border-[#D4AF37]/20 transition-all">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] transition-all">
                <item.icon className="w-6 h-6 md:w-8 md:h-8 text-[#D4AF37] group-hover:text-black" />
              </div>
              <div className="text-left">
                <h4 className="font-header text-lg md:text-xl text-white mb-2 md:mb-3 font-bold">{item.t}</h4>
                <p className="text-white/40 text-base md:text-lg leading-relaxed">{item.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 max-w-4xl mx-auto p-8 md:p-10 bg-[#660000]/10 border border-[#660000]/30 rounded-[2rem] md:rounded-[3rem] flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-center reveal-on-scroll text-center md:text-left">
          <Zap className="w-10 h-10 md:w-12 md:h-12 text-[#D4AF37] animate-bounce shrink-0" />
          <p className="text-lg md:text-3xl font-display font-black italic leading-tight">
            🚀 Evolución en <span className="text-white underline decoration-[#D4AF37]">una semana</span>. <br />
            <span className="text-[#D4AF37] text-base md:text-lg uppercase tracking-wider md:tracking-widest">Efectos palpables tras las primeras 48 horas.</span>
          </p>
        </div>
      </section>

      {/* ¿PARA QUIÉN ES EL CÓDIGO? */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-[#030303]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-6xl mb-16 md:mb-24 text-center reveal-on-scroll italic">¿A quién va dirigido <span className="text-[#D4AF37]">El Código</span>?</h2>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div className="glass-card p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] border-green-500/20 reveal-on-scroll">
              <h3 className="font-header text-green-500 text-xl md:text-2xl mb-8 md:mb-10 flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 shrink-0" /> ESTE SISTEMA ES PARA TI SI...
              </h3>
              <ul className="space-y-4 md:space-y-6 text-base md:text-lg text-white/60 font-light italic">
                <li className="flex gap-4"><ArrowRight className="text-green-500 shrink-0 w-4 h-4 md:w-5 md:h-5 mt-1" /> Buscas romper el ciclo de la amistad platónica y ser visto como un igual deseable.</li>
                <li className="flex gap-4"><ArrowRight className="text-green-500 shrink-0 w-4 h-4 md:w-5 md:h-5 mt-1" /> Exiges una ventaja competitiva y psicológica en tus relaciones interpersonales.</li>
                <li className="flex gap-4"><ArrowRight className="text-green-500 shrink-0 w-4 h-4 md:w-5 md:h-5 mt-1" /> Entiendes que la dinámica social es un juego de percepciones y estatus.</li>
                <li className="flex gap-4"><ArrowRight className="text-green-500 shrink-0 w-4 h-4 md:w-5 md:h-5 mt-1" /> Estás listo para dejar atrás la invisibilidad y tomar el mando de tu presencia.</li>
              </ul>
            </div>
            
            <div className="glass-card p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] border-red-500/20 opacity-50 reveal-on-scroll">
              <h3 className="font-header text-red-500 text-xl md:text-2xl mb-8 md:mb-10 flex items-center gap-4">
                <XCircle className="w-6 h-6 md:w-8 md:h-8 shrink-0" /> NO TE UNAS SI...
              </h3>
              <ul className="space-y-4 md:space-y-6 text-base md:text-lg text-white/30 font-light italic">
                <li className="flex gap-4"><XCircle className="text-red-500 shrink-0 w-4 h-4 md:w-5 md:h-5 mt-1" /> Confías en que el azar o la suerte solucionarán tu estancamiento social.</li>
                <li className="flex gap-4"><XCircle className="text-red-500 shrink-0 w-4 h-4 md:w-5 md:h-5 mt-1" /> Consideras que la inversión en ti mismo no es tu máxima prioridad actual.</li>
                <li className="flex gap-4"><XCircle className="text-red-500 shrink-0 w-4 h-4 md:w-5 md:h-5 mt-1" /> Careces del respeto necesario por la psicología y la integridad de los demás.</li>
                <li className="flex gap-4"><XCircle className="text-red-500 shrink-0 w-4 h-4 md:w-5 md:h-5 mt-1" /> Te conformas con ser un espectador en la vida de los que realmente admiras.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24 reveal-on-scroll">
            <h2 className="font-display text-3xl md:text-7xl mb-4 md:mb-6 italic tracking-tight">💭 Experiencias de Usuarios</h2>
            <p className="text-white/20 uppercase tracking-[0.2em] md:tracking-[0.4em] text-[9px] md:text-[10px] font-black italic">Comunidad de más de 5,000 integrantes activos.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { n: "Eduardo B.", c: "🇵🇪", t: "Lo que más me impactó fue la sección de dialéctica digital. Mensajes que antes eran ignorados, ahora generan conversaciones profundas." },
              { n: "Nicolás S.", c: "🇦🇷", t: "Es un enfoque refrescante. No se trata de trucos baratos, sino de entender la arquitectura del interés humano." },
              { n: "Sergio G.", c: "🇪🇸", t: "He recuperado mi equilibrio interno. Saber proyectar valor ha cambiado incluso mi desempeño profesional." },
              { n: "Carlos M.", c: "🇲🇽", t: "La técnica de comunicación no verbal es un antes y un después. La gente reacciona a mi presencia de forma distinta." },
              { n: "Javier R.", c: "🇨🇴", t: "La mejor decisión estratégica que he tomado. Resultados prácticos en tiempo récord." },
              { n: "Andrés T.", c: "🇨🇱", t: "Directo, crudo y sumamente efectivo. Si buscas resultados sin rodeos, este es tu sitio." }
            ].map((test, i) => (
              <div key={i} className="glass-card p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-white/5 reveal-on-scroll hover:border-[#D4AF37]/30 transition-all flex flex-col h-full">
                <div className="flex justify-between items-center mb-6 md:mb-8">
                  <span className="text-xl md:text-2xl grayscale opacity-50">{test.c}</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-2.5 h-2.5 md:w-3 md:h-3 fill-[#D4AF37] text-[#D4AF37]" />)}
                  </div>
                </div>
                <p className="text-white/50 italic text-base md:text-lg mb-6 md:mb-8 leading-relaxed font-light">"{test.t}"</p>
                <div className="mt-auto border-t border-white/5 pt-4 md:pt-6">
                  <h4 className="font-header text-[#D4AF37] text-[10px] md:text-sm font-bold uppercase tracking-[0.15em] md:tracking-widest">{test.n}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎁REGALOS ÉLITE */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-[#030303]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24 reveal-on-scroll">
            <h2 className="font-display text-4xl md:text-[8rem] mb-4 md:mb-6 italic font-black text-gold-gradient leading-none uppercase">Complementos</h2>
            <p className="text-white/30 text-lg md:text-xl font-light italic">Arsenal táctico incluido en tu acceso hoy:</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 reveal-on-scroll">
            {[
              { t: "Arsenal de Mensajes de Impacto", b: "Bono #1", icon: Smartphone },
              { t: "Hoja de Ruta de la Cita Perfecta", b: "Bono #2", icon: Map },
              { t: "100 Temas de Alta Conexión", b: "Bono #3", icon: BookOpen },
              { t: "Anatomía del Lenguaje No Verbal", b: "Bono #4", icon: Target },
              { t: "Membresía en la Logia VIP", b: "Bono #5", icon: Users2 },
              { t: "Soporte y Actualizaciones", b: "Bono #6", icon: Gem }
            ].map((b, i) => (
              <div key={i} className="glass-card p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-white/10 hover:border-[#D4AF37]/50 transition-all flex flex-col items-center text-center group bg-gradient-to-br from-white/[0.02] to-transparent">
                <div className="bg-[#D4AF37]/10 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                  <b.icon className="text-[#D4AF37] w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-[8px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.5em] text-[#D4AF37] mb-2 md:mb-3 uppercase italic">{b.b}</span>
                <h4 className="font-header text-lg md:text-xl text-white mb-2 leading-tight font-bold">{b.t}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee de Feedback */}
      <div className="py-12 md:py-20 bg-[#020202] border-y border-white/5 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          {[
            { a: "@lorenzo_x", m: "Resultados inmediatos. 🤯" },
            { a: "@marcos_pro", m: "El bono de estatus es vital. 🔥" },
            { a: "@juan_perez", m: "Confianza restablecida. 💪" },
            { a: "@chris_m", m: "Simplemente funciona. 📈" },
            { a: "@david_s", m: "Inversión inteligente. 💸" },
            { a: "@rober_top", m: "Evolución real. 😶" }
          ].concat([
            { a: "@lorenzo_x", m: "Resultados inmediatos. 🤯" },
            { a: "@marcos_pro", m: "El bono de estatus es vital. 🔥" },
            { a: "@juan_perez", m: "Confianza restablecida. 💪" }
          ]).map((msg, i) => (
            <div key={i} className="inline-flex items-center gap-3 md:gap-4 mx-4 md:mx-8 glass-card px-4 py-2.5 md:px-8 md:py-4 rounded-full border-white/10">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center font-bold text-[10px] md:text-xs uppercase text-[#D4AF37]">{msg.a[1]}</div>
              <span className="font-bold text-white/80 text-[11px] md:text-sm">{msg.a}</span>
              <span className="text-white/40 text-[11px] md:text-sm italic">"{msg.m}"</span>
            </div>
          ))}
        </div>
      </div>

      {/* Garantía */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-black">
        <div className="max-w-5xl mx-auto glass-card rounded-[2.5rem] md:rounded-[5rem] p-10 md:p-24 text-center border-2 border-[#D4AF37]/30 relative overflow-hidden reveal-on-scroll shadow-[0_0_100px_rgba(212,175,55,0.05)]">
          <div className="absolute top-0 left-0 w-full h-1.5 md:h-2 gold-gradient" />
          <ShieldCheck className="w-16 h-16 md:w-32 md:h-32 text-[#D4AF37] mx-auto mb-8 md:mb-12" />
          <h2 className="font-display text-3xl md:text-7xl mb-6 md:mb-10 font-bold italic underline decoration-[#D4AF37]/30">Promesa de Excelencia</h2>
          <p className="text-lg md:text-2xl text-white/50 mb-10 md:mb-16 italic leading-relaxed max-w-3xl mx-auto font-light">
            Somete <span className="text-white font-bold italic">"El Código"</span> a prueba durante una semana completa. Si no experimentas un cambio radical en la forma en que tu entorno interactúa contigo, solicitamos que pidas el reintegro total. <span className="text-white font-bold">Nuestra prioridad es tu transformación.</span>
          </p>
          <div className="font-header text-[#D4AF37] text-lg md:text-3xl tracking-[0.2em] md:tracking-[0.4em] font-black uppercase">COMPROMISO TOTAL</div>
        </div>
      </section>

      {/* 💸 OFERTA FINAL */}
      <section id="offer" className="py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-black to-[#050505]">
        <div className="max-w-4xl mx-auto reveal-on-scroll">
          <div className="glass-card rounded-[2.5rem] md:rounded-[5rem] p-8 md:p-24 relative shadow-[0_50px_100px_rgba(0,0,0,1)] border-2 border-[#D4AF37]/60 overflow-hidden">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#660000] text-white px-6 md:px-10 py-2 md:py-3 rounded-full text-[7px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.5em] uppercase border border-white/20 whitespace-nowrap">Oportunidad Limitada por Alta Demanda</div>
            
            <div className="space-y-4 md:space-y-6 mb-12 md:mb-16">
              {[
                { n: "Protocolo Principal: El Código", p: "$37 USD" },
                { n: "Set de 6 Archivos de Inteligencia", p: "$40 USD" },
                { n: "Acceso a la Comunidad de Élite", p: "$20 USD" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-white/40 text-sm md:text-xl italic font-light">
                  <span className="flex items-center gap-3 md:gap-4"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37] shrink-0" /> {item.n}</span>
                  <span className="line-through shrink-0 ml-2">{item.p}</span>
                </div>
              ))}
              <div className="h-px bg-white/10 my-6 md:my-8" />
              <div className="flex justify-between items-center text-white font-black text-xl md:text-3xl tracking-tighter uppercase italic">
                <span>VALOR MERCADO</span>
                <span className="text-white/20 line-through ml-2">$97 USD</span>
              </div>
            </div>

            <div className="text-center mb-10 md:mb-16">
              <div className="flex items-center justify-center gap-1 md:gap-2 mb-4 relative max-w-full overflow-hidden">
                <span className="text-2xl md:text-4xl self-center mb-8 md:mb-14 text-[#D4AF37] font-black">$</span>
                <span className="text-7xl sm:text-9xl md:text-[12rem] font-display font-black leading-none text-gold-gradient italic tracking-tighter shadow-text">14.99</span>
                <span className="text-base md:text-3xl self-center mb-4 md:mb-24 text-white/20 font-black tracking-wider md:tracking-widest uppercase italic">USD</span>
              </div>
              <div className="bg-[#D4AF37] text-black inline-block px-6 py-2 md:px-10 md:py-3 rounded-full font-black text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.4em] uppercase mb-6 md:mb-8 shadow-lg shadow-[#D4AF37]/20">¡BENEFICIO DEL 85% HOY!</div>
              <p className="text-white/40 text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] italic">Transacción única. Acceso permanente.</p>
            </div>

            <div className="w-full md:max-w-md mx-auto">
              <PrimaryCTA 
                text="¡DESCIFRAR EL CÓDIGO!" 
                subtext="Habilitación digital inmediata" 
                onClick={handleCheckout}
              />
            </div>
            
            {/* Countdown */}
            <div className="mt-12 md:mt-16 text-center">
              <p className="text-[#660000] font-black text-[9px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] mb-4 md:mb-6 uppercase animate-pulse">🚨 ¡VENTANA DE ACCESO CERRÁNDOSE! 🚨</p>
              <div className="flex justify-center gap-4 md:gap-8 items-center font-display text-4xl md:text-7xl font-black italic">
                <div className="flex flex-col"><span className="text-gold-gradient">0{timeLeft.min}</span><span className="text-[8px] md:text-[10px] uppercase font-black tracking-widest text-white/20 mt-1 md:mt-2">Minutos</span></div>
                <span className="text-white/20">:</span>
                <div className="flex flex-col"><span className="text-gold-gradient">{timeLeft.sec < 10 ? `0${timeLeft.sec}` : timeLeft.sec}</span><span className="text-[8px] md:text-[10px] uppercase font-black tracking-widest text-white/20 mt-1 md:mt-2">Segundos</span></div>
              </div>
            </div>

            <div className="mt-12 md:mt-16 flex justify-center gap-6 md:gap-10 opacity-30 grayscale hover:grayscale-0 transition-all">
              <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" />
              <Smartphone className="w-8 h-8 md:w-10 md:h-10" />
              <Users2 className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <p className="text-center text-[8px] md:text-[10px] font-black text-white/20 uppercase tracking-[0.3em] md:tracking-[0.5em] mt-8 md:mt-10 italic px-4">Seguridad de Grado Bancario Encriptada</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-24 px-6 md:px-10 border-t border-white/5 bg-black text-center">
        <div className="font-header text-xl md:text-3xl tracking-tighter mb-8 md:mb-10">
          EL <span className="text-gold-gradient font-black">CÓDIGO</span>
        </div>
        <p className="text-white/40 text-xs md:text-sm italic mb-10 md:mb-12 font-light px-4">Refina tu impacto. Domina tu realidad social.</p>
      

        <p className="text-[8px] md:text-[9px] text-white/10 uppercase tracking-[0.15em] md:tracking-[0.2em] leading-relaxed max-w-2xl mx-auto italic px-4">
          © {new Date().getFullYear()} El Código. Todos los derechos reservados. <br className="hidden md:block" />
          Elite Intelligence Group Limited.
        </p>
      </footer>
    </div>
  );
};

export default App;
