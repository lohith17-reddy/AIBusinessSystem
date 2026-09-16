import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import DeliveryReturns from './components/DeliveryReturns';
import AISupport from './components/AISupport';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <a
        href="#products"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-navy-900"
      >
        Skip to products
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <DeliveryReturns />
        <AISupport />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

