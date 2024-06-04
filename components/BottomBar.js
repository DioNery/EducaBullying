import React from "react";

export default function BottomBar() {
  return (
    <div className="fixed bottom-0 w-full h-16 bg-orange-800 border-t border-gray-300 flex justify-between items-center text-white">
      {/* Seção da esquerda */}
      <div className="pl-4 md:pl-16">
        <div>Quer falar com a gente?</div>
        <div>Email: contato@placamae.org </div>
      </div>
      <div className="pl-4 md:pl-16">
      <div>Para consultoria, palestra e cursos sobre a temática:</div>
      <div>Email: paloma@placamae.org</div>
      </div>

{/* Seção do meio com imagens de redes sociais */}
{/* Seção do meio com imagens de redes sociais */}
<div className="flex flex-col items-center space-x-4 ml-[-8px]">
  <div className="flex items-center">
    <a href="https://www.facebook.com/placamae.org/" target="_blank" rel="noopener noreferrer">
      <img
        src="/facebook .png"
        alt="Instagram"
        className="h-6 w-6 mr-4"
      />
    </a>
    <a href="https://instagram.com/placamae.org_?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noopener noreferrer">
      <img
        src="/instagram.png"
        alt="Instagram"
        className="h-6 w-6 mr-4"
      />
    </a>
    <a href="https://www.linkedin.com/company/placam%C3%A3e-org/" target="_blank" rel="noopener noreferrer">
      <img
        src="/linkedin.png"
        alt="Linkedin"
        className="h-6 w-6 mr-4"
      />
    </a>
    {/* Adicione mais links de redes sociais conforme necessário */}
  </div>
  
  
</div>



      {/* Seção da direita com a logo X */}
      <div className="pr-4 md:pr-16">
        <img
            className="h-12 w-12" 
            src="/logo.png"
            alt="logo placa mae"
          />
      </div>
    </div>
  );
}
