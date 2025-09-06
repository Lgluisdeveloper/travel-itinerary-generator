import React from 'react';
import HeroForm from './HeroForm'; // Importa el nuevo componente

// Define la interfaz para las props del componente.
interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  // Esta función se pasa al componente hijo.
  const handleFormSubmit = (data: { firstName: string; lastName: string; email: string }) => {
    console.log('Datos recibidos en el componente padre:', data);
    alert(`Formulario enviado con éxito.
    Nombre: ${data.firstName} ${data.lastName}
    Correo: ${data.email}`);
  };

  return (
    <header className=" min-h-screen  flex items-center justify-center ">
      <div className="flex flex-col md:flex-row justify-center gap-5">
        {/* Sección de texto */}
        <div className="md:w-1/2 max-w-md flex flex-col justify-center">
          <div className="md:text-4xl text-xl font-black uppercase">
            {title}
          </div>
          <div className="text-xl mt-4">
            {subtitle}
          </div>
        </div>

        {/* Sección del formulario (ahora es el nuevo componente) */}
        <div className="md:w-1/2 flex justify-start mt-5 md:justify-end w-full  ">
          <HeroForm onFormSubmit={handleFormSubmit} />
        </div>
      </div>
    </header>
  );
};

export default Hero;