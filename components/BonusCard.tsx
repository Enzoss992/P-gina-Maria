import React from 'react';

interface BonusCardProps {
  id: number;
  title: string;
  description: string;
  value: string;
  imageUrl: string;
}

const BonusCard: React.FC<BonusCardProps> = ({ id, title, description, value, imageUrl }) => {
  return (
    <div className="bg-[#000000] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col border border-white/10 transition-transform hover:scale-[1.01] group">
      {/* Imagem do Bônus com Badge Amarelo Estilo "Adesivo" */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          loading="lazy"
        />
        {/* Badge Amarelo BÔNUS #X - Idêntico ao da imagem */}
        <div className="absolute top-4 right-4 bg-[#facc15] text-black font-black px-5 py-2 rounded-xl text-sm md:text-base shadow-xl transform rotate-3 border-2 border-black/10">
          BÔNUS #{id}
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-10 flex flex-col flex-grow text-left bg-[#080808]">
        <h3 className="text-2xl md:text-3xl font-black text-white mb-5 uppercase leading-none tracking-tight">
          {title}
        </h3>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 flex-grow font-normal opacity-70">
          {description}
        </p>

        {/* Footer de Valor - Cópia Fiel da imagem */}
        <div className="bg-[#1a1a1a] border border-[#ff3b3b]/60 rounded-2xl py-4 px-6 flex justify-center items-center gap-2 shadow-xl">
          <span className="text-white text-base md:text-lg font-bold">Valor:</span>
          <span className="text-[#ff3b3b] font-bold text-base md:text-lg line-through decoration-2">
            {value}
          </span>
          <span className="text-white font-black text-xl md:text-2xl uppercase tracking-tighter ml-1">
            GRÁTIS
          </span>
        </div>
      </div>
    </div>
  );
};

export default BonusCard;