import { Fragment, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const areas = [
  { name: 'Dirección de Asistencia Jurídica'}, 
  { name: 'Dirección de DIF Municipales'}, 
  { name: 'Dirección de Integración y Bienestar Social'}, 
  { name: 'Dirección de Procuradurías'}, 
  { name: 'Dirección de Servicios Médicos'}, 
  { name: 'Subdirección de Asistencia Alimentaria'}, 
  { name: 'Subdirección de Desarrollo Comunitario'}, 
]

const programasPorArea = [
  [0],
  [1, 2],
  [3],
  [4],
  [5],
  [6],
  [7],
];

const programas = [
  { name: 'Dirección de asistencia juridica'}, // juridica
  { name: 'Apoyo en especie a grupos prioritarios'}, //integracion
  { name: 'Casa de día Rosita Salas'}, 
  { name: 'CDC Acapulco'}, 
  { name: 'Impulsores de la transformación'}, //procu
  { name: 'Aparatos auditivos'}, // serv. med
  { name: 'Programa de alimentación escolar'}, //asis. alim
  { name: 'Huertos familiares y escolares'}, // comunitario
]

const Municipios = [
 {name:'Acapulco de Juarez'},
 {name:'Acatepec'},
 {name:'Ahuacuotzingo'},
 {name:'Ajuchitlan del progreso'},
 {name:'Alcozauca de Guerrero'},
 {name:'Alpoyeca'},
 {name:'Apaxtla'},
 {name:'Arcelia'},
 {name:'Atenango del rio'},
 {name:'Atlamajalcingo del monte'},
 {name:'Atlixtac'},
 {name:'Atoyac de alvarez'},
];

const Apoyos = [
  {name:'Apoyo dirección juridica'},
  {name:'Apoyo grupos prioritarios'},
  {name:'Apoyo bienestar'},
  {name:'Apoyo asistencia'},
  {name:'Apoyo desarrollo'},
]

// Función para generar valores aleatorios que sumen 100%
const generateRandomData = () => {
  const data = [];
  let remainingPercentage = 100;

  Apoyos.forEach((apoyo, index) => {
    const maxPercentage = remainingPercentage - (Apoyos.length - index - 1); // Para asegurar que la suma total no exceda 100%
    const percentage = Math.floor(Math.random() * maxPercentage) + 1; // Generar un valor aleatorio entre 1 y maxPercentage
    remainingPercentage -= percentage;

    data.push({
      name: apoyo.name,
      value: percentage,
    });
  });

  return data;
}

export default function Dashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedArea, setSelectedArea] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedMunicipio, setSelectedMunicipio] = useState(null)
  const [selectedApoyo, setSelectedApoyo] = useState(null)
  const [apoyoData, setApoyoData] = useState(generateRandomData());

  const handleAreaChange = (e) => {
    setSelectedArea(e.target.value);
    setSelectedProduct(null); // Reset selected product when area changes
    setApoyoData(generateRandomData()); // Regenerate random data when area changes
  }

  const handleProductChange = (e) => {
    setSelectedProduct(e.target.value);
  }

  return (
    <header className="bg-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Menú</span>
            <svg className="h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative">
            <select
              value={selectedArea}
              onChange={handleAreaChange}
              className="block py-2 pl-3 pr-10 text-base font-semibold leading-7 text-gray-900 bg-white border border-gray-300 rounded-lg hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Seleccione un área</option>
              {areas.map((item, index) => (
                <option key={item.name} value={index}>{item.name}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <select
              value={selectedProduct}
              onChange={handleProductChange}
              className="block py-2 pl-3 pr-10 text-base font-semibold leading-7 text-gray-900 bg-white border border-gray-300 rounded-lg hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Seleccione un programa</option>
              {programasPorArea[selectedArea]?.map((index) => (
                <option key={programas[index].name} value={index}>{programas[index].name}</option>
              ))}
            </select>
          </div>
          
          <div className="relative">
            <select
              value={selectedMunicipio}
              onChange={(e) => setSelectedMunicipio(e.target.value)}
              className="block py-2 pl-3 pr-10 text-base font-semibold leading-7 text-gray-900 bg-white border border-gray-300 rounded-lg hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Seleccione un Municipio</option>
              {Municipios.map((item) => (
                <option key={item.name} value={item.name}>{item.name}</option>
              ))}
            </select>
          </div>
          
          <div className="relative">
            <select
              value={selectedApoyo}
              onChange={(e) => setSelectedApoyo(e.target.value)}
              className="block py-2 pl-3 pr-10 text-base font-semibold leading-7 text-gray-900 bg-white border border-gray-300 rounded-lg hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Seleccione un Apoyo</option>
              {Apoyos.map((item) => (
                <option key={item.name} value={item.name}>{item.name}</option>
              ))}
            </select>
          </div>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {areas.map((item) => (
                  <a
                    key={item.name}
                    href="#"
                    className="block py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
                {programas.map((item) => (
                  <a
                    key={item.name}
                    href="#"
                    className="block py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#"
                  className="block py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="block py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="block py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Distribución de Apoyos</h2>
        <BarChart width={600} height={400} data={apoyoData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>
    </header>
  )
}
