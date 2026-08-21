export default function TopNavBar({ setHalaman, halamanAktif }) {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center bg-surface px-gutter py-4 border-b border-surface-variant">
      <div className="font-headline-lg text-headline-lg text-primary font-bold">
        Aro Cafe
      </div>

      <nav className="hidden md:flex items-center gap-md">
        <button 
          onClick={() => setHalaman('beranda')}
          className={`cursor-pointer font-medium transition-colors ${halamanAktif === 'beranda' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-text-primary'}`}
        >
          Beranda
        </button>
        
        <button 
          onClick={() => setHalaman('menu')}
          className={`cursor-pointer font-medium transition-colors ${halamanAktif === 'menu' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-text-primary'}`}
        >
          Menu
        </button>
      </nav>

      <button 
        onClick={() => setHalaman('reservasi')}
        className="bg-primary text-on-primary font-medium px-6 py-2.5 rounded-full"
      >
        Pesan Meja
      </button>
    </header>
  );
}
