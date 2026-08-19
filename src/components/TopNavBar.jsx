export default function TopNavBar() {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-gutter py-sm max-w-container-max mx-auto bg-surface/80 backdrop-blur-md shadow-[0_10px_30px_-5px_rgba(45,71,57,0.08)]">
      <div className="font-headline-lg text-headline-lg text-primary tracking-tight">
        Aro Cafe
      </div>
      <nav className="hidden md:flex items-center gap-md font-label-lg text-label-lg">
        <a className="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-low transition-all rounded px-3 py-2" href="#">Cerita Kami</a>
        <a className="text-primary border-b-2 border-primary font-bold pb-1 hover:bg-surface-container-low transition-all rounded px-3 py-2" href="#">Menu</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-low transition-all rounded px-3 py-2" href="#">Lokasi</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-low transition-all rounded px-3 py-2" href="#">Reservasi</a>
      </nav>
      <button className="bg-primary text-on-primary font-label-lg text-label-lg px-4 py-2 rounded-lg hover:opacity-90 scale-95 active:scale-100 transition-transform duration-200">
        Pesan Meja
      </button>
    </header>
  )
}
