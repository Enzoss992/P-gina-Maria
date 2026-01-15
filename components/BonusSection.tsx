import React from 'react';
import BonusCard from './BonusCard';

const BONUSES = [
  {
    title: "Exército de São Miguel",
    description: "Consagre-se ao Príncipe da Milícia Celeste e receba proteção espiritual diária contra as ciladas do inimigo.",
    value: "R$ 67",
    imageUrl: "https://i.imgur.com/wT16jfn.png"
  },
  {
    title: "Guia do Santo Rosário",
    description: "Aprenda a meditar os mistérios da vida de Cristo através das mãos de Maria com profundidade espiritual.",
    value: "R$ 47",
    imageUrl: "https://i.imgur.com/AEutsjb.png"
  },
  {
    title: "Novena da Fé e Confiança",
    description: "Um guia de 9 dias para fortalecer sua esperança e confiança inabalável na Providência Divina.",
    value: "R$ 37",
    imageUrl: "https://i.imgur.com/JUwB5OW.png"
  },
  {
    title: "Plano Bíblico 2026",
    description: "Cronograma completo para ler a Bíblia inteira em um ano, com foco nos ensinamentos marianos.",
    value: "R$ 27",
    imageUrl: "https://i.imgur.com/wC8nK91.png"
  },
  {
    title: "Diário Espiritual Digital",
    description: "Template organizado para você anotar suas luzes, graças e propósitos colhidos em sua oração.",
    value: "R$ 37",
    imageUrl: "https://i.imgur.com/LDbd4di.png"
  },
  {
    title: "Virtudes de Maria",
    description: "Um estudo aprofundado sobre as 10 virtudes evangélicas de Nossa Senhora para aplicar no seu dia.",
    value: "R$ 47",
    imageUrl: "https://i.imgur.com/18Z4DXE.png"
  }
];

const BonusSection: React.FC = () => {
  return (
    <div className="w-full bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* CABEÇALHO REESTILIZADO (FIDELIDADE TOTAL À IMAGEM) */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter mb-8 uppercase">
            E NÃO PARA POR AÍ... <br className="hidden md:block" /> TEM MAIS!
          </h2>
          
          <p className="text-2xl md:text-5xl text-white font-normal italic mb-10 opacity-90">
            Você também vai receber...
          </p>

          {/* Badge Vermelho Vibrante com Glow */}
          <div className="bg-[#ff3b3b] text-white px-10 py-4 rounded-full shadow-[0_0_40px_rgba(255,59,59,0.35)] flex items-center gap-3 border border-white/10 mb-10">
            <span className="text-2xl">🔥</span>
            <span className="text-lg md:text-2xl font-black uppercase tracking-tight">
              6 BÔNUS EXCLUSIVOS
            </span>
          </div>
        </div>

        {/* Grid de Bônus */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {BONUSES.map((bonus, idx) => (
            <BonusCard key={idx} id={idx + 1} {...bonus} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BonusSection;