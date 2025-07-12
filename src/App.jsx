import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaCookieBite } from 'react-icons/fa6';
import { GiChocolateBar, GiStrawberry } from 'react-icons/gi';
// --- CORRECCIÓN FINAL ---
// Importamos un ícono de nuez diferente desde otra colección (Bootstrap Icons)
import { BsNutFill } from 'react-icons/bs';


// --- IMÁGENES DE EJEMPLO (Reemplázalas con tus propias fotos) ---
const heroImage = "https://images.unsplash.com/photo-1599785209707-a456fc1337ce?q=80&w=1887&auto=format&fit=crop";
const gallery1 = "https://images.unsplash.com/photo-1605384145249-598913501b1b?q=80&w=1887&auto=format&fit=crop";
const gallery2 = "https://images.unsplash.com/photo-1608314614697-a4a8f9460d36?q=80&w=1887&auto=format&fit=crop";
const gallery3 = "https://images.unsplash.com/photo-1628182662035-5bab222d4493?q=80&w=1887&auto=format&fit=crop";

// --- DATOS DE TU NEGOCIO (Modifica esto) ---
const businessData = {
  name: "Canela Celestial",
  tagline: "El sabor que te lleva al cielo.",
  phone: "521234567890", // Tu número de WhatsApp con código de país (52 para México)
  instagram: "https://instagram.com/tu_usuario",
  facebook: "https://facebook.com/tu_pagina",
};

const products = [
  { name: "Rol Chico", price: 30, description: "El antojo perfecto para uno." },
  { name: "Rol Mediano", price: 45, description: "Ideal para compartir... o no." },
  { name: "Rol Grande", price: 50, description: "El rey de la casa, para toda la familia." },
];

const toppings = [
  { name: "Nutella", icon: <GiChocolateBar size={30} /> },
  { name: "Fresa Fresca", icon: <GiStrawberry size={30} /> },
  { name: "Oreo Triturada", icon: <FaCookieBite size={30} /> },
  // --- CORRECCIÓN FINAL ---
  // Usamos el nuevo ícono importado
  { name: "Nuez Pecana", icon: <BsNutFill size={30} /> },
];

// --- Componente reutilizable para animaciones de scroll ---
const AnimatedSection = ({ children, className = "" }) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

export default function App() {
  const whatsappMessage = `¡Hola ${businessData.name}! Quisiera hacer un pedido de roles de canela.`;
  const whatsappUrl = `https://wa.me/${businessData.phone}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-brand-cream-light font-body">
      
      {/* --- SECCIÓN HERO --- */}
      <header className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden p-4">
        <div className="absolute inset-0 bg-brand-brown-dark opacity-60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center animate-pulse-slow" 
          style={{ backgroundImage: `url(${heroImage})`, animation: 'kenburns 20s ease-out infinite' }}
        ></div>
        <style>{`
          @keyframes kenburns {
            0% { transform: scale(1) translate(0, 0); }
            50% { transform: scale(1.1) translate(-5px, 5px); }
            100% { transform: scale(1) translate(0, 0); }
          }
        `}</style>
        
        <div className="relative z-20 flex flex-col items-center">
          <motion.h1 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 100 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl drop-shadow-lg"
          >
            {businessData.name}
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-4 text-xl md:text-2xl font-light text-brand-cream-light drop-shadow-md"
          >
            {businessData.tagline}
          </motion.p>
          <motion.a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            whileHover={{ scale: 1.1, boxShadow: "0px 10px 30px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-brand-brown-light to-brand-brown-dark text-white font-bold text-lg rounded-full shadow-lg transition-transform duration-300 ease-out flex items-center gap-3"
          >
            <FaWhatsapp size={24} />
            ¡Ordena por WhatsApp!
          </motion.a>
        </div>
      </header>

      <main className="container mx-auto px-6 py-20">
        
        {/* --- SECCIÓN MENÚ --- */}
        <AnimatedSection className="mb-24">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl text-brand-brown-dark">Nuestro Menú</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-brown to-brand-brown-light mx-auto mt-4 rounded-full"></div>
            <p className="text-lg mt-4 text-gray-600 max-w-2xl mx-auto">Hechos con amor, horneados a la perfección y listos para endulzar tu día.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <motion.div 
                key={product.name}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-out flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="p-8 text-center flex-grow">
                  <h3 className="font-display text-3xl text-brand-brown-dark">{product.name}</h3>
                  <p className="text-gray-500 mt-2">{product.description}</p>
                </div>
                <div className="bg-gradient-to-r from-brand-cream-DEFAULT to-brand-cream-light p-6 text-center">
                  <p className="text-4xl font-bold text-brand-brown-dark">${product.price}<span className="text-2xl font-normal"> MXN</span></p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
        
        {/* --- SECCIÓN TOPPINGS --- */}
        <AnimatedSection className="mb-24">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl text-brand-brown-dark">¡Personalízalo!</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-brown to-brand-brown-light mx-auto mt-4 rounded-full"></div>
            <p className="text-lg mt-4 text-gray-600 max-w-2xl mx-auto">Añade tu toque favorito por un costo extra.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-brand-brown-dark">
            {toppings.map((topping, index) => (
              <motion.div 
                key={topping.name}
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="bg-white rounded-full p-5 shadow-lg text-brand-brown-light transform hover:scale-110 transition-transform duration-300">
                  {topping.icon}
                </div>
                <p className="mt-4 font-semibold text-lg">{topping.name}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* --- SECCIÓN GALERÍA --- */}
        <AnimatedSection>
            <div className="text-center mb-16">
                <h2 className="font-display text-5xl text-brand-brown-dark">Una Probadita Visual</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-brand-brown to-brand-brown-light mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[gallery1, gallery2, gallery3].map((img, index) => (
                    <motion.div 
                        key={index}
                        className="overflow-hidden rounded-lg shadow-lg"
                        whileHover={{ scale: 1.05, zIndex: 10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img src={img} alt={`Rol de canela ${index+1}`} className="w-full h-80 object-cover transform hover:scale-110 transition-transform duration-500 ease-in-out"/>
                    </motion.div>
                ))}
            </div>
        </AnimatedSection>

      </main>
      
      {/* --- FOOTER --- */}
      <footer className="bg-gradient-to-t from-brand-brown-dark to-brand-brown-DEFAULT text-white mt-20">
        <div className="container mx-auto px-6 py-12 text-center">
            <h3 className="font-display text-4xl">{businessData.name}</h3>
            <p className="mt-2 text-brand-cream-light">Horneando felicidad desde siempre.</p>
            
            <div className="flex justify-center gap-6 mt-8">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-cream-light transform hover:scale-125 transition-transform"><FaWhatsapp size={30} /></a>
                <a href={businessData.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-cream-light transform hover:scale-125 transition-transform"><FaInstagram size={30} /></a>
                <a href={businessData.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-cream-light transform hover:scale-125 transition-transform"><FaFacebook size={30} /></a>
            </div>

            <div className="mt-10 border-t border-brand-brown-light/30 pt-6 text-sm text-brand-cream-DEFAULT">
                <p>© {new Date().getFullYear()} {businessData.name}. Todos los derechos reservados.</p>
                <p className="mt-1">Diseñado con ❤️ para tu antojo.</p>
            </div>
        </div>
      </footer>
    </div>
  );
}