export default function BerandaPage() {
  return (
    <div className="antialiased min-h-screen flex flex-col font-body-md text-body-md">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-gutter py-sm max-w-container-max mx-auto left-0 right-0 bg-surface/80 backdrop-blur-md shadow-[0_10px_30px_-5px_rgba(45,71,57,0.08)]">
        <div className="flex items-center gap-md">
          <span className="font-headline-lg text-headline-lg text-primary tracking-tight">Aro Cafe</span>
        </div>
        <nav className="hidden md:flex gap-md items-center">
          <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all px-4 py-2 rounded-lg" href="#">Menu</a>
          <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all px-4 py-2 rounded-lg" href="#">Reservasi</a>
          <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all px-4 py-2 rounded-lg" href="#">Cerita Kami</a>
          <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all px-4 py-2 rounded-lg" href="#">Lokasi</a>
        </nav>
        <button className="hidden md:flex items-center gap-2 bg-primary text-on-primary font-label-lg text-label-lg px-6 py-3 rounded-lg hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm scale-95 active:scale-100 transition-transform duration-200">
          Pesan Meja
        </button>
        <button className="md:hidden text-primary p-2">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center justify-center pt-24 pb-16 px-gutter">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-cover bg-center" data-alt="A cinematic, wide-angle shot of a beautiful modern cafe nestled on the lush, misty slopes of a majestic mountain. The morning fog rolls gently over the forested hills, softly illuminated by warm, golden sunlight breaking through the clouds. The cafe features elegant glass walls and warm wood accents, blending harmoniously with the serene natural environment. The atmosphere is calm, sophisticated, and deeply restorative, characterized by a refined Modern-Organic aesthetic with rich forest greens and warm sand tones." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAwUu2dzrukRtKG53AsZT_NkyNXJy2gEdfguVkfIK_VbP1aXcl_g-RZa2C18y7xNrKtcaXzHQ_mdrpTCyOmTITuwp1QzHrvsS_uOXTnhLpXw9dgwk6lYWVPXeLOfbzNhswvD55ovegi6150ZLm4H--mBO9vZ3ZJDsmLK1CC5j5fukkrG3K1XqGT88SALwbXIBUOsMhsZlDXBlM_XPzEvLRAwsRlmHh5VPASXZMQ1C50lJm5MQUCuIG4')" }}></div>
          </div>
          <div className="relative z-10 max-w-3xl text-center flex flex-col items-center gap-8">
            <h1 className="font-display-lg text-display-lg text-on-primary md:text-[64px] md:leading-[1.1]">
              Tempat Terbaik untuk Ngopi dan Menikmati Alam
            </h1>
            <p className="font-body-lg text-body-lg text-on-primary max-w-xl mx-auto">
              Permata tersembunyi yang terletak di lereng Gunung Sindoro yang tenang. Rasakan perpaduan sempurna antara pemandangan yang memukau, kopi pilihan yang nikmat, dan ruang yang dirancang untuk setiap generasi agar bisa bersantai dan bernapas lega.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto justify-center">
              <button className="bg-primary text-on-primary font-label-lg text-label-lg px-8 py-4 rounded-lg hover:bg-primary-container hover:shadow-lg transition-all w-full sm:w-auto">
                Lihat Menu
              </button>
              <button className="bg-transparent border border-primary text-primary font-label-lg text-label-lg px-8 py-4 rounded-lg hover:bg-surface-container-low transition-all w-full sm:w-auto">
                Reservasi Meja
              </button>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="py-xl px-gutter max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-lg items-center">
            <div className="md:col-span-5 md:col-start-2 flex flex-col gap-6">
              <h2 className="font-headline-lg text-headline-lg text-primary">Tempat Berlindung di Atas Awan</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Aro Cafe lebih dari sekadar kedai kopi; ini adalah permata tersembunyi di mana energi dinamis kaum muda bertemu dengan kenyamanan yang diperlukan bagi para senior kami. Kami percaya pada gaya hidup santai, menawarkan tempat peristirahatan dari hiruk pikuk kota.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Apakah Anda seorang penjelajah yang mencari matahari terbit berkabut yang sempurna untuk Instagram, atau keluarga yang menikmati pertemuan akhir pekan yang tenang, ruang kami yang dirancang dengan cermat memastikan semua orang menemukan sudut sempurna mereka di tengah keindahan alam Sindoro.
              </p>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <div className="relative rounded-xl overflow-hidden shadow-[0_10px_30px_-5px_rgba(45,71,57,0.15)] aspect-[4/5]">
                <img className="w-full h-full object-cover" data-alt="A close-up lifestyle shot of a multi-generational family enjoying coffee at an elegant cafe with a mountain view in the background. A young adult and a senior are smiling and conversing over beautifully crafted latte art in ceramic cups. The setting is bright and airy, with warm wood tables and soft natural light. The aesthetic emphasizes connection, calm, and slow living, utilizing a palette of off-whites, warm sand, and subtle forest green accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPGbEtomN-lD2zVfPvgx0crt1e_Icud0_VaVN2Ztrrm-Qq3TqW0xO79qi_SJT17YvGav7nQY75AoQnJ6xftY4JpkhBRDSUXoO_EJbpCq9MbUH8seRiGQmlem1jf5aq1-7N1prTwAK_nGWOANTsHCCZQ4KPBmuroU7FJho7qkA7qaO-Lj7R4Ju_AEHDRxF3RCyb7T_sJTUat6CMba2xNPkhA2hmqusfSC5ra21_ttrNiYIENG3Fu4eu" />
              </div>
            </div>
          </div>
        </section>

        {/* Split-Screen Comparison (Bento style) */}
        <section className="py-xl px-gutter max-w-container-max mx-auto bg-surface-container-low rounded-3xl my-lg">
          <div className="text-center mb-12">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Dua Pengalaman, Satu Gunung</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Temukan suasana sempurna yang disesuaikan dengan suasana hati dan kebutuhan Anda.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            {/* Sky Altar */}
            <div className="bg-surface rounded-xl overflow-hidden shadow-[0_10px_30px_-5px_rgba(45,71,57,0.05)] group">
              <div className="h-64 relative overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="An expansive outdoor cafe seating area overlooking a stunning mountain valley. The space is filled with comfortable, colorful bean bags and low wooden tables arranged asymmetrically. Young people are relaxing, taking photos, and enjoying the vibrant, youthful atmosphere. The scene is bright and breezy, set against a backdrop of rolling hills and clear skies. The visual style is modern, organic, and highly aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ2DZmiu4gku2UA9-GItpCBEEszTsdYfZN0hZmiQKqSZ6rut5fCUMV69XzWjQ4bdPiKahtCTV27s90YR-g-3sdrmgu71_X7UotgWdd99mhfIvsrZ1DdsFEwhVJvRMHw0WU_5NxZzYMYyDbj2KVT7BlZdDVOoR13lOHw9KfvfA8XfNcOBmwG9vwnjl93JLdXacAt3-gSj5xuBELCX9w5iWfEWD54dxZOU1puWCQAlOEoeHI8MMb4wyz" />
              </div>
              <div className="p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-3xl" data-icon="air">air</span>
                  <h3 className="font-headline-md text-headline-md text-primary">Sky Altar Sindoro</h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">Dek terbuka luas kami yang dirancang untuk yang berjiwa muda dan bebas. Bersantailah di bean bag empuk, rasakan angin pegunungan, dan abadikan matahari terbenam yang sempurna. Tempat terbaik untuk nongkrong dan meresapi energi alam yang dinamis dengan kenyamanan bean bag yang santai.</p>
              </div>
            </div>

            {/* Glass Sanctuary */}
            <div className="bg-surface rounded-xl overflow-hidden shadow-[0_10px_30px_-5px_rgba(45,71,57,0.05)] group">
              <div className="h-64 relative overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A cozy, elegantly designed indoor cafe interior featuring large floor-to-ceiling glass windows that frame a beautiful mountain landscape. The space is furnished with comfortable, supportive sofas and sturdy armchairs suitable for seniors. The lighting is soft and warm, highlighting the high-quality wood and warm sand textures. The atmosphere is calm, accessible, and premium, perfect for a relaxing family gathering." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr47AE_ohJPGmGTTSSDhjeLTbLoVe44S3mDYni_IR_PQ1nTQoHK80uhgaLWqUSNGryo7nAoT-1mB-imT_1IadWiPrjl7GxsDHqagRU5rchIGsDcZ_T-2WfGbnAZEk0cHbiL31zEMES4YDVe2n0rG6r3ARH50UccYojAyy59bZgT5pDr9fLVtguOEf6ww5Rn4pFrSJ3TMrPLZa7D9dlH9s2lCw0HUv6FhpCopoDq6IfNRWvb4FCCSMW" />
              </div>
              <div className="p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-3xl" data-icon="weekend">weekend</span>
                  <h3 className="font-headline-md text-headline-md text-primary">Sanctuari Kaca</h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Ruangan tertutup sepenuhnya dengan pengatur suhu yang menampilkan dinding kaca dari lantai hingga langit-langit. Dilengkapi dengan sofa ergonomis dan ruang yang luas, area ini sangat mudah diakses dan ramah lansia, memastikan pengalaman minum kopi yang nyaman dan tenang tanpa mengabaikan pemandangan.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-xl px-gutter flex flex-col md:flex-row justify-between items-start gap-md max-w-container-max mx-auto bg-surface-container-high">
        <div className="flex flex-col gap-4 max-w-sm">
          <span className="font-headline-md text-headline-md text-primary">Aro Cafe</span>
          <p className="font-body-md text-body-md text-on-surface-variant">Permata tersembunyi di lereng Gunung Sindoro. Santai sejenak, bernapaslah, dan nikmati karya kami.</p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-label-lg text-label-lg text-primary mb-2">Hubungi Kami</h4>
          <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-all flex items-center gap-2" href="#">Hubungi via WhatsApp</a>
          <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-all flex items-center gap-2" href="#">Ikuti di Instagram</a>
          <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-all flex items-center gap-2" href="#">Tonton di TikTok</a>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-label-lg text-label-lg text-primary mb-2">Legal</h4>
          <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-all" href="#">Kebijakan Privasi</a>
          <p className="font-label-lg text-label-lg text-on-surface-variant mt-4 opacity-80">© 2024 Aro Cafe Mount Sindoro. Hak cipta dilindungi undang-undang.</p>
        </div>
      </footer>
    </div>
  )
}
