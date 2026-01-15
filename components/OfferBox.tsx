import React, { useState } from 'react';
import { BASIC_BENEFITS, PREMIUM_BENEFITS } from '../constants';

const CHECKOUT_LINKS = {
  BASIC: 'https://pay.lowify.com.br/checkout?product_id=hu348o',
  UPSELL: 'https://pay.lowify.com.br/checkout.php?product_id=Tzz2Vj&offer_slug=yc1atph',
  PREMIUM: 'https://pay.lowify.com.br/checkout?product_id=Tzz2Vj'
};

const OfferBox: React.FC = () => {
  const [showUpsell, setShowUpsell] = useState(false);

  const getUrlWithParams = (baseUrl: string) => {
    const params = window.location.search;
    if (!params) return baseUrl;
    const cleanParams = params.startsWith('?') ? params.substring(1) : params;
    return baseUrl.includes('?') ? `${baseUrl}&${cleanParams}` : `${baseUrl}?${cleanParams}`;
  };

  const handleBasicClick = () => {
    setShowUpsell(true);
  };

  const closeUpsell = () => {
    setShowUpsell(false);
  };

  const goToCheckout = (url: string) => {
    window.location.href = getUrlWithParams(url);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-10 max-w-6xl mx-auto px-4 relative py-10">
      
      {/* Plano Básico */}
      <div className="w-full max-w-md flex flex-col bg-white rounded-[2rem] border border-gray-300 shadow-lg text-slate-900 overflow-hidden">
        <div className="pt-8 pb-4">
          <h3 className="text-3xl font-bold text-center text-slate-800">Plano básico</h3>
        </div>

        {/* Mockup Container - BORDA REMOVIDA */}
        <div className="px-6 mb-6">
          <div className="bg-[#f3f0eb] rounded-3xl p-6 flex items-center justify-center aspect-square overflow-hidden">
            <img 
              src="https://i.imgur.com/dwKB9hu.png" 
              alt="Mockup Plano Básico" 
              className="w-full h-auto object-contain drop-shadow-xl"
              loading="lazy"
            />
          </div>
        </div>

        {/* Benefits List */}
        <div className="px-8 space-y-3 mb-8 flex-grow">
          {BASIC_BENEFITS.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 border-b border-gray-100 last:border-0 pb-2">
              {item.strikethrough ? (
                <i className="fa-solid fa-circle-exclamation text-red-400 mt-1 text-[10px]"></i>
              ) : (
                <i className="fa-solid fa-check text-[#37c87c] mt-1 text-xs"></i>
              )}
              <p className={`text-[13px] font-bold text-left leading-tight ${item.strikethrough ? 'text-gray-400 opacity-60 line-through' : 'text-slate-700'}`}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="text-center mb-6">
          <p className="text-red-600 text-xs font-bold line-through mb-1">de R$ 49,90 por:</p>
          <div className="flex justify-center items-center">
             <span className="text-5xl font-bold text-[#37c87c] tracking-tighter">R$9,90</span>
          </div>
          <p className="text-[#37c87c] text-xs font-bold mt-2">
            • Você economiza R$ 40,00
          </p>
        </div>

        <div className="px-6 pb-6">
          <button 
            onClick={handleBasicClick}
            className="w-full bg-[#37c87c] hover:bg-[#2fa869] text-white font-bold py-5 px-4 rounded-xl shadow-lg transition-all text-sm md:text-base leading-tight uppercase tracking-tight mb-6"
          >
            GARANTIR MINHA EDIÇÃO 2026
          </button>

          {/* Box de Nudge Social */}
          <div className="bg-[#fff9c4] border border-[#fdd835] rounded-2xl p-5 flex flex-col items-center justify-center gap-3">
            <p className="text-slate-800 font-bold text-sm md:text-base text-center leading-tight">
              92% das pessoas aproveitam a oferta abaixo:
            </p>
            <div className="w-10 h-10 bg-[#00c853] rounded-full flex items-center justify-center shadow-sm">
              <i className="fa-solid fa-arrow-down text-white text-base"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Plano Premium */}
      <div className="w-full max-w-md flex flex-col bg-white rounded-[2rem] border-2 border-gray-300 shadow-2xl text-slate-900 overflow-visible relative">
        {/* Mais Vendido Floating Badge */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#37c87c] text-white px-5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg z-50 whitespace-nowrap border-2 border-white">
          <i className="fa-solid fa-bolt text-xs"></i>
          <span className="text-[11px] font-bold uppercase tracking-wider">MAIS VENDIDO</span>
        </div>

        {/* Última Chance Header */}
        <div className="mt-6 px-6">
           <div className="bg-[#ff3b3b] text-white py-1.5 rounded-full flex items-center justify-center gap-2 mb-4">
              <i className="fa-solid fa-clock text-xs"></i>
              <span className="text-[10px] font-bold uppercase tracking-widest">ÚLTIMA CHANCE — OFERTA TERMINA HOJE</span>
           </div>
           <p className="text-[#37c87c] text-[11px] font-bold uppercase tracking-widest mb-2 text-center">Todos os bônus inclusos</p>
           <h3 className="text-3xl font-bold text-center text-slate-800 leading-tight mb-4">Plano Premium 🌹</h3>
        </div>

        {/* Mockup Container Premium - BORDA REMOVIDA */}
        <div className="px-6 mb-4">
          <div className="bg-[#f3f0eb] rounded-3xl p-6 flex items-center justify-center aspect-square overflow-hidden relative">
            <img 
              src="https://i.imgur.com/SwfYG1i.png" 
              alt="Mockup Plano Premium" 
              className="w-full h-auto object-contain drop-shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>

        {/* Banner de Destaque Premium */}
        <div className="px-6 mb-6">
           <div className="bg-white border border-[#37c87c] text-[#37c87c] py-2 rounded-xl flex items-center justify-center gap-2">
              <i className="fa-solid fa-bolt-lightning text-xs"></i>
              <span className="text-[11px] font-bold uppercase tracking-widest">Acesso Vitalício + Todos os Bônus</span>
           </div>
        </div>

        {/* Benefits List Premium */}
        <div className="px-8 space-y-3 mb-8 flex-grow">
          {PREMIUM_BENEFITS.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 border-b border-gray-100 last:border-0 pb-2">
              <i className="fa-solid fa-check text-[#37c87c] mt-1 text-xs"></i>
              <p className="text-[13px] font-bold text-left leading-tight text-slate-700">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing Premium */}
        <div className="text-center mb-6">
          <p className="text-red-600 text-xs font-bold line-through mb-1">de R$ 149,90 por:</p>
          <div className="flex justify-center items-center">
             <span className="text-6xl font-bold text-[#37c87c] tracking-tighter">R$17,90</span>
          </div>
          <p className="text-[#37c87c] text-xs font-bold mt-2">
            • Você economiza R$ 132,00
          </p>
        </div>

        {/* CTA Premium */}
        <div className="px-6 pb-6">
          <button 
            onClick={() => goToCheckout(CHECKOUT_LINKS.PREMIUM)}
            className="w-full bg-[#37c87c] hover:bg-[#2fa869] text-white font-bold py-5 px-4 rounded-xl shadow-lg transition-all text-sm md:text-base leading-tight animate-pulse-button uppercase tracking-tight"
          >
            GARANTIR MINHA EDIÇÃO PREMIUM
          </button>
        </div>

        {/* Trust Badges bottom of card */}
        <div className="border-t border-gray-100 pt-4 pb-6 flex justify-center items-center gap-4 opacity-40">
           <i className="fa-brands fa-cc-visa text-xl"></i>
           <i className="fa-brands fa-cc-mastercard text-xl"></i>
           <i className="fa-solid fa-barcode text-xl"></i>
           <i className="fa-solid fa-pix text-xl"></i>
        </div>
      </div>

      {/* Upsell Modal */}
      {showUpsell && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeUpsell}></div>
          <div className="bg-white w-full max-w-md rounded-[2.5rem] p-8 shadow-2xl relative z-[1001] animate-[scaleIn_0.3s_ease-out] text-center">
            
            <h2 className="text-[#f39c12] text-2xl font-bold leading-tight mb-4">
              ESPERE! VOCÊ PODE TER TUDO!
            </h2>
            
            <p className="text-slate-700 font-bold text-base leading-relaxed mb-6">
              Por apenas <span className="text-[#37c87c]">R$5,00 a mais</span>, leve o <span className="font-bold italic">Pacote Premium</span> com todos os bônus e acesso vitalício.
            </p>

            <div className="bg-[#f4fcf6] rounded-3xl py-6 px-4 mb-8">
              <p className="text-[#27ae60] text-sm font-bold mb-1">
                Oferta Exclusiva Agora:
              </p>
              <div className="text-[#37c87c] text-6xl font-bold tracking-tighter">
                R$14,90
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button 
                onClick={() => goToCheckout(CHECKOUT_LINKS.UPSELL)}
                className="w-full bg-[#37c87c] text-white font-bold py-5 rounded-xl shadow-lg transition-all text-xl animate-pulse-button uppercase tracking-tight"
              >
                QUERO O PACOTE PREMIUM
              </button>
              
              <button 
                onClick={() => goToCheckout(CHECKOUT_LINKS.BASIC)}
                className="w-full text-red-500 font-bold py-2 text-xs transition-colors hover:underline"
              >
                Não, quero apenas o plano básico (perder bônus)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfferBox;