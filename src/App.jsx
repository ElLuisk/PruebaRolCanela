import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaFacebook, FaArrowDown, FaSearchPlus } from 'react-icons/fa';
import { FaCookieBite } from 'react-icons/fa6';
import { GiChocolateBar, GiStrawberry } from 'react-icons/gi';
import { BsNutFill } from 'react-icons/bs';

// --- TUS IMÁGENES ---
// Asumo que están en la carpeta `src/assets`.
import Rol1 from './assets/rol_1.jpg';
import Rol2 from './assets/rol_2.jpg';
import Rol3 from './assets/rol_3.jpg';
import FondoRol from './assets/rol_canela_animado.jpg';

// Asignamos las imágenes a las variables que usaremos
const heroImage = FondoRol;
const passionImage = Rol1; // Usaremos la mejor foto aquí
const galleryImages = [Rol1, Rol2, Rol3];

// --- DATOS DE TU NEGOCIO ---
const businessData = {
  name: "Anea Bakery",
  tagline: "Horneamos pequeños momentos de felicidad.",
  phone: "521234567890",
  instagram: "https://instagram.com/aneabakery",
  facebook: "https://facebook.com/aneabakery",
};

// --- PRODUCTOS Y TOPPINGS ---
// Añadimos una propiedad 'image' a cada producto
const products = [
  { name: "Rol Chico", price: 30, description: "El antojo perfecto para uno.", image: Rol3 },
  { name: "Rol Mediano", price: 45, description: "Ideal para compartir... o no.", image: Rol2 },
  { name: "Rol Grande", price: 50, description: "El rey de la casa, para toda la familia.", image: Rol1 },
];

const toppings = [
  { name: "Nutella", icon: <GiChocolateBar size={30} /> },
  { name: "Fresa Fresca", icon: <GiStrawberry size={30} /> },
  { name: "Oreo Triturada", icon: <FaCookieBite size={30} /> },
  { name: "Nuez Pecana", icon: <BsNutFill size={30} /> },
];

// --- VARIANTES DE ANIMACIÓN PARA FRAMER MOTION ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

// --- COMPONENTES REUTILIZABLES MEJORADOS ---
const SectionTitle = ({ children }) => (
  <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
    <h2 className="font-display text-4xl md:text-6xl font-bold text-brand-brown-dark">{children}</h2>
    <div className="w-24 h-1 bg-gradient-to-r from-brand-brown-light to-brand-brown mx-auto mt-4 rounded-full"></div>
  </motion.div>
);

const FloatingCTAButton = ({ url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 transform hover:scale-110 transition-transform duration-300"
    aria-label="Contactar por WhatsApp"
  >
    <FaWhatsapp size={30} />
  </a>
);

export default function App() {
  const whatsappMessage = `¡Hola ${businessData.name}! Me encantaría hacer un pedido.`;
  const whatsappUrl = `https://wa.me/${businessData.phone}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-gradient-to-br from-brand-cream-light to-brand-cream-DEFAULT font-body text-brand-brown-dark antialiased">
      <FloatingCTAButton url={whatsappUrl} />

      {/* --- SECCIÓN HERO MEJORADA --- */}
      <header className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden p-4">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: 'linear' }}
        ></motion.div>
        
        <div className="relative z-20 flex flex-col items-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, type: 'spring' }}
            className="font-display text-5xl md:text-8xl lg:text-9xl drop-shadow-xl tracking-wider"
          >
            {businessData.name}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-4 text-lg md:text-2xl font-light text-brand-cream-light drop-shadow-lg max-w-xl"
          >
            {businessData.tagline}
          </motion.p>
        </div>
        <motion.div 
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 z-20"
        >
          <FaArrowDown className="text-white text-3xl animate-bounce-slow" />
        </motion.div>
      </header>
      
      <main className="overflow-hidden">
        {/* --- NUEVA SECCIÓN: NUESTRA PASIÓN --- */}
        <motion.section 
          className="py-20 md:py-32 container mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="rounded-2xl overflow-hidden shadow-2xl shadow-brand-brown/20">
              <img src={passionImage} alt="Rol de canela de cerca" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-brown-dark mb-4">Nuestra Pasión</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                En <strong>{businessData.name}</strong>, cada rol de canela es una obra de arte. Usamos ingredientes de la más alta calidad y una receta familiar perfeccionada a lo largo de los años para crear un postre que no solo deleita el paladar, sino que también reconforta el alma.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* --- SECCIÓN MENÚ REDISEÑADA --- */}
        <motion.section 
          className="py-20 md:py-24 bg-brand-cream-dark"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="container mx-auto px-6">
            <SectionTitle>Elige tu Momento</SectionTitle>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {products.map((product) => (
                <motion.div
                  key={product.name}
                  variants={itemVariants}
                  className="bg-brand-cream-light rounded-2xl shadow-lg overflow-hidden flex flex-col group transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="overflow-hidden h-64">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-8 text-center flex-grow flex flex-col">
                    <h3 className="font-display text-3xl text-brand-brown-dark">{product.name}</h3>
                    <p className="text-gray-600 mt-2 mb-4 flex-grow">{product.description}</p>
                    <p className="text-4xl font-bold text-brand-brown">${product.price}<span className="text-2xl font-normal"> MXN</span></p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-6 w-full bg-brand-brown text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 hover:bg-brand-brown-dark">
                      Ordenar
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        
        {/* --- SECCIÓN TOPPINGS REDISEÑADA --- */}
        <motion.section 
          className="py-20 md:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="container mx-auto px-6">
            <SectionTitle>Añade tu Toque Mágico</SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {toppings.map((topping) => (
                <motion.div
                  key={topping.name}
                  variants={itemVariants}
                  className="bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl p-6 text-center flex flex-col items-center justify-center transform transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="text-brand-brown-light text-4xl mb-3">
                    {topping.icon}
                  </div>
                  <p className="font-semibold text-lg text-brand-brown-dark">{topping.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* --- SECCIÓN GALERÍA REDISEÑADA --- */}
        <motion.section 
          className="py-20 md:py-24 bg-brand-cream-dark"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="container mx-auto px-6">
            <SectionTitle>Amor a Primera Vista</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((img, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative overflow-hidden rounded-xl shadow-lg group"
                >
                  <img src={img} alt={`Rol de canela ${index + 1}`} className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaSearchPlus className="text-white text-4xl" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
      
      {/* --- FOOTER REDISEÑADO --- */}
      <footer className="bg-brand-brown-dark text-brand-cream-light">
        <div className="container mx-auto px-6 py-16 text-center">
          <h3 className="font-display text-4xl md:text-5xl">{businessData.name}</h3>
          <p className="mt-2 text-brand-cream-DEFAULT">Horneando felicidad, un rol a la vez.</p>
          
          <div className="flex justify-center gap-8 mt-10">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="transform transition-transform hover:scale-125 hover:text-white"><FaWhatsapp size={30} /></a>
            <a href={businessData.instagram} target="_blank" rel="noopener noreferrer" className="transform transition-transform hover:scale-125 hover:text-white"><FaInstagram size={30} /></a>
            <a href={businessData.facebook} target="_blank" rel="noopener noreferrer" className="transform transition-transform hover:scale-125 hover:text-white"><FaFacebook size={30} /></a>
          </div>

          <div className="mt-12 border-t border-brand-brown-light/20 pt-8 text-sm text-brand-cream-DEFAULT">
            <p>© {new Date().getFullYear()} {businessData.name}. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}