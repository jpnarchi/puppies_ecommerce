import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import AdminPanel from './AdminPanel';
import { useCurrency } from '../context/CurrencyContext';

const Footer = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { selectedCurrency } = useCurrency();
  const isEnglish = selectedCurrency === 'usd' || selectedCurrency === 'cad';

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-block">
              <img 
                src="/imagen.png" 
                alt="Best Family Puppies" 
                className="h-12"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              {isEnglish 
                ? 'Your trusted destination for finding the perfect companion. Purebred puppies, raised with love and professional care.'
                : 'Tu destino confiable para encontrar el compañero perfecto. Cachorros de raza pura, criados con amor y cuidado profesional.'}
            </p>
            <p className="text-gray-400 text-sm">
              1309 Coffeen Avenue Suite 1200,<br />
              Sheridan, WY 82801 US
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              {isEnglish ? 'Quick Links' : 'Enlaces Rápidos'}
            </h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigation('/catalogo')} 
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  {isEnglish ? 'Dog Catalog' : 'Catálogo de Perros'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/catalogo-gatos')} 
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  {isEnglish ? 'Cat Catalog' : 'Catálogo de Gatos'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/contacto')} 
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  {isEnglish ? 'Contact' : 'Contacto'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/admin')} 
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  {isEnglish ? 'Admin Panel' : 'Panel de Admin'}
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              {isEnglish ? 'Follow Us' : 'Síguenos'}
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/bestfamilypuppiesus/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/bestfamilypuppiesgroup/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@bestfamilypuppies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Best Family Puppies. {isEnglish ? 'All rights reserved.' : 'Todos los derechos reservados.'}</p>
        </div>
      </div>

      {showLogin && !isLoggedIn && (
        <AdminLogin onLogin={handleLogin} />
      )}

      {isLoggedIn && (
        <AdminPanel onLogout={handleLogout} />
      )}
    </footer>
  );
};

export default Footer;