import React from 'react';

const ITEMS = [
  "Fortalecer sua fé desde o início, mesmo que hoje não tenha uma rotina espiritual",
  "Viver uma espiritualidade mais profunda, sem depender de conteúdos confusos ou complicados",
  "Crescer espiritualmente dia após dia, com um devocional simples e organizado",
  "Rezar com confiança, sabendo exatamente o que meditar e praticar todos os dias",
  "Sair da frieza espiritual e viver uma caminhada real e constante com Cristo, guiado por Maria"
];

const IdealForSection: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-[#fffcfc] relative">
      <div className="max-w-5xl mx-auto">
        {/* Título com fonte maior */}
        <h2 className="text-4xl md:text-6xl font-black text-center mb-16 text-[#1a1a1a] leading-[1.05] tracking-tighter">
          Ideal para você <span className="text-red-600 block">que deseja:</span>
        </h2>
        
        <div className="grid gap-8 max-w-3xl mx-auto">
          {ITEMS.map((text, idx) => (
            <div 
              key={idx} 
              className="bg-[#f1faf3] p-10 md:p-12 rounded-[2.5rem] border border-[#d8e9dc] shadow-sm flex flex-col items-center text-center transition-all hover:shadow-lg hover:scale-[1.01]"
            >
              {/* Ícone de check maior */}
              <div className="w-16 h-16 bg-[#22c55e] rounded-full flex items-center justify-center mb-8 shadow-md">
                <i className="fa-solid fa-check text-white text-2xl"></i>
              </div>
              
              {/* Texto com fonte significativamente maior conforme solicitado */}
              <p className="text-[#1a1a1a] font-normal text-xl md:text-2xl lg:text-3xl leading-snug tracking-tight">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdealForSection;