import React, { useState, type FormEvent } from 'react';

// Interfaz para los datos del formulario de itinerario.
interface ItineraryFormData {
  destination: string;
  startDate: string;
  endDate: string;
  interests: string[];
  budget: 'Bajo' | 'Medio' | 'Alto';
  people: number;
}

// Interfaz para las props del componente.
interface HeroFormProps {
  onFormSubmit: (data: ItineraryFormData) => void;
}

const HeroForm: React.FC<HeroFormProps> = ({ onFormSubmit }) => {
  const [destination, setDestination] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [interests, setInterests] = useState<string[]>([]);
  const [budget, setBudget] = useState<'Bajo' | 'Medio' | 'Alto'>('Medio');
  const [people, setPeople] = useState<number>(1);

  // Define las opciones para los intereses y el presupuesto.
  const interestOptions = ['Aventura', 'Cultura', 'Comida', 'Relajación'];
  const budgetOptions = ['Bajo', 'Medio', 'Alto'];

  // Manejador para la selección de intereses.
  const handleInterestChange = (interest: string) => {
    setInterests((prevInterests) =>
      prevInterests.includes(interest)
        ? prevInterests.filter((i) => i !== interest)
        : [...prevInterests, interest]
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onFormSubmit({
      destination,
      startDate,
      endDate,
      interests,
      budget,
      people,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="shadow-lg p-8 bg-white rounded-lg space-y-4">
      {/* Campo Destino */}
      <div>
        <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Destino</label>
        <input
          type="text"
          id="destination"
          placeholder="Ej. París"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 p-1.5 focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      {/* Campos de Fechas */}
      <div className="flex flex-col  md:flex-row justify-between gap-x-3.5 gap-y-5">
        <div className='w-full md:w-2/4 '>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Fecha de inicio</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-1.5"
            required
          />
        </div>
        <div className='w-full md:w-2/4 '>
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">Fecha de fin</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-1.5"
            required
          />
        </div>
      </div>

      {/* Selección de Intereses */}
      <div>
        <span className="block text-sm font-medium text-gray-700">Intereses</span>
        <div className="mt-2 flex flex-wrap gap-2">
          {interestOptions.map((interest) => (
            <button
              key={interest}
              type="button"
              onClick={() => handleInterestChange(interest)}
              className={`
                px-4 py-2 rounded-full border text-sm font-medium transition-colors duration-200
                ${interests.includes(interest) ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}
              `}
            >
              {interest}
            </button>
          ))}
        </div>
      </div>

      {/* Selección de Presupuesto */}
      <div>
        <span className="block text-sm font-medium text-gray-700">Presupuesto</span>
        <div className="mt-2 flex justify-around space-x-2">
          {budgetOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setBudget(option as 'Bajo' | 'Medio' | 'Alto')}
              className={`
                px-4 py-2 rounded-full border text-sm font-medium transition-colors duration-200
                ${budget === option ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}
              `}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Número de personas */}
      <div>
        <label htmlFor="people" className="block text-sm font-medium text-gray-700">Número de personas</label>
        <input
          type="number"
          id="people"
          value={people}
          min="1"
          onChange={(e) => setPeople(Number(e.target.value))}
          className="mt-1 block w-full rounded-md border border-gray-300 p-1.5 focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      {/* Botón de envío */}
      <div className="pt-4">
        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition-colors duration-200"
        >
          Generar Itinerario
        </button>
      </div>
    </form>
  );
};

export default HeroForm;
