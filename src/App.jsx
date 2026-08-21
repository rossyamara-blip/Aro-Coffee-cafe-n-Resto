import { useState } from 'react';
import TopNavBar from './components/TopNavBar';
import BerandaPage from './components/BerandaPage';
import ReservasiPage from './components/ReservasiPage';
import Footer from './components/Footer';

export default function App() {
  const [halamanAktif, setHalamanAktif] = useState('beranda');

  return (
    <div className="antialiased min-h-screen flex flex-col">
      {/* Kirim fungsi pengubah halaman ke Navigasi */}
      <TopNavBar setHalaman={setHalamanAktif} halamanAktif={halamanAktif} />
      
      {/* Isi Utama Halaman */}
      <main className="flex-grow pt-22 pb-12 px-gutter mx-auto w-full max-w-7xl">
        {halamanAktif === 'beranda' && <BerandaPage />}
        {halamanAktif === 'reservasi' && <ReservasiPage />}
      </main>

      {/* Footer Bawah */}
      <Footer />
    </div>
  );
}
