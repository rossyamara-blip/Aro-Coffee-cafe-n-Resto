export default function Footer() {
  return (
    <footer className="w-full py-xl px-gutter flex flex-col md:flex-row justify-between items-start gap-md max-w-container-max mx-auto bg-surface-container-high mt-auto">
      <div className="font-headline-md text-headline-md text-primary mb-4 md:mb-0">
        Aro Cafe
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-lg font-label-lg text-label-lg">
        <a className="text-on-surface-variant hover:text-primary hover:underline transition-all opacity-80 hover:opacity-100 transition-opacity" href="#">Hubungi kami melalui WhatsApp</a>
        <a className="text-on-surface-variant hover:text-primary hover:underline transition-all opacity-80 hover:opacity-100 transition-opacity" href="#">Ikuti di Instagram</a>
        <a className="text-on-surface-variant hover:text-primary hover:underline transition-all opacity-80 hover:opacity-100 transition-opacity" href="#">Tonton di TikTok</a>
        <a className="text-on-surface-variant hover:text-primary hover:underline transition-all opacity-80 hover:opacity-100 transition-opacity" href="#">Kebijakan Privasi</a>
      </div>
      <div className="font-body-md text-body-md text-on-surface-variant mt-6 md:mt-0">
        © 2024 Aro Cafe Mount Sindoro. Hak cipta dilindungi undang-undang.
      </div>
    </footer>
  )
}
