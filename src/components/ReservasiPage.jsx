import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient.js'

export default function ReservasiPage() {
  const [form, setForm] = useState({
    nama_lengkap: '',
    nomor_meja: '',
    tanggal: '',
    waktu: '',
    jumlah_tamu: '1-2 Tamu'
  })
  const [reservations, setReservations] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    fetchReservations()
  }, [])

  const fetchReservations = async () => {
    const { data, error } = await supabase
      .from('reservasi')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching reservations:', error)
    } else {
      setReservations(data || [])
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    const { data, error } = await supabase
      .from('reservasi')
      .insert([{ ...form, jumlah_tamu: form.jumlah_tamu }])
      .select()

    setLoading(false)

    if (error) {
      setError('Gagal menyimpan reservasi: ' + error.message)
    } else {
      setSuccess('Reservasi berhasil disimpan!')
      setForm({
        nama_lengkap: '',
        nomor_meja: '',
        tanggal: '',
        waktu: '',
        jumlah_tamu: '1-2 Tamu'
      })
      fetchReservations()
    }
  }

  return (
    <div className="antialiased min-h-screen flex flex-col font-body-md text-body-md bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-gutter py-sm max-w-container-max mx-auto left-0 right-0 bg-surface/80 backdrop-blur-md dark:bg-inverse-surface/80 shadow-[0_10px_30px_-5px_rgba(45,71,57,0.08)]">
        <div className="font-headline-lg text-headline-lg text-primary dark:text-inverse-primary tracking-tight">
          Aro Cafe
        </div>
        <ul className="hidden md:flex gap-md items-center">
          <li>
            <a className="font-label-lg text-label-lg text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors hover:bg-surface-container-low dark:hover:bg-primary-container/20 px-sm py-xs rounded-lg transition-all scale-95 active:scale-100 duration-200" href="#">
              Menu
            </a>
          </li>
          <li>
            <a className="font-label-lg text-label-lg text-primary dark:text-inverse-primary border-b-2 border-primary font-bold pb-1 hover:bg-surface-container-low dark:hover:bg-primary-container/20 px-sm py-xs rounded-lg transition-all scale-95 active:scale-100 duration-200" href="#">
              Reservasi
            </a>
          </li>
          <li>
            <a className="font-label-lg text-label-lg text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors hover:bg-surface-container-low dark:hover:bg-primary-container/20 px-sm py-xs rounded-lg transition-all scale-95 active:scale-100 duration-200" href="#">
              Cerita Kami
            </a>
          </li>
          <li>
            <a className="font-label-lg text-label-lg text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors hover:bg-surface-container-low dark:hover:bg-primary-container/20 px-sm py-xs rounded-lg transition-all scale-95 active:scale-100 duration-200" href="#">
              Lokasi
            </a>
          </li>
        </ul>
        <div className="hidden md:block">
          <button className="bg-primary text-on-primary font-label-lg text-label-lg px-md py-sm rounded-full hover:opacity-90 transition-opacity scale-95 active:scale-100 duration-200 flex items-center gap-xs">
            Pesan Meja
          </button>
        </div>
        <button className="md:hidden text-primary p-xs">
          <span className="material-symbols-outlined text-[32px]">menu</span>
        </button>
      </nav>

      {/* Main Content */}
      <main className="pt-[120px] pb-xl max-w-container-max mx-auto px-gutter md:px-lg space-y-xl">
        {/* Hero / Standard Reservation */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-lg items-center">
          <div className="md:col-span-5 space-y-md md:pr-lg">
            <h1 className="font-display-lg text-display-lg text-primary">Pesan Momen Ketenangan Anda</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Pesan meja dengan pemandangan lereng Gunung Sindoro yang tenang. Kami mengundang Anda untuk bersantai, menikmati kopi buatan kami, dan menghirup udara pegunungan.
            </p>
            <div className="pt-base">
              <img alt="Aro Cafe View" className="w-full h-64 object-cover rounded-xl shadow-[0_10px_30px_-5px_rgba(45,71,57,0.08)]" data-alt="A serene, high-quality photograph of a rustic, elegantly set wooden cafe table looking out over a misty, green mountain landscape (Mount Sindoro). The lighting is soft morning sunlight, creating a calm, restorative atmosphere. The color palette emphasizes rich forest greens, warm woods, and soft off-whites." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9g37RFCE2uaI-9WNfCkA3RY4qqGGv_Isw0MUv_k9rPXJfIt1kpMxJzH1wrUVCQ1CXJ4KKSlPb_JUg8b3A5EbY3L2GLzn_fgGPewkME4vC5q-Y0UytYuPM7j7j59p2_dynNB--VN4361-QHaSrhLjsK0HJfxmAZN8Dwf4b2ta1pFpAQtCUmwInb0-CxJtB8oVt_buJO9kOCHZMzZG94VzI0a7ZF_Fs8P0W29J4Zn0KzooOomf6wxbG" />
            </div>
          </div>

          {/* Bento Card Form */}
          <div className="md:col-span-7 bg-surface-container-lowest p-lg rounded-xl shadow-[0_10px_30px_-5px_rgba(45,71,57,0.08)] border border-surface-container-high relative overflow-hidden">
            {/* Botanical Accent Background */}
            <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none text-primary">
              <svg fill="currentColor" height="200" viewBox="0 0 24 24" width="200" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 19 7 17 8Z" />
              </svg>
            </div>
            <h2 className="font-headline-md text-headline-md text-primary mb-md relative z-10">Reservasi Meja</h2>
            {error && <p className="text-error text-sm mb-md relative z-10">{error}</p>}
            {success && <p className="text-primary text-sm mb-md relative z-10">{success}</p>}
            <form className="space-y-md relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div>
                  <label className="block font-label-lg text-label-lg text-on-surface mb-xs">Nama Lengkap</label>
                  <div className="relative">
                    <input className="w-full bg-surface-bright border-outline-variant rounded-lg p-sm font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-on-surface" name="nama_lengkap" value={form.nama_lengkap} onChange={handleChange} placeholder="Nama Anda" required type="text" />
                  </div>
                </div>
                <div>
                  <label className="block font-label-lg text-label-lg text-on-surface mb-xs">Nomor Meja</label>
                  <div className="relative">
                    <input className="w-full bg-surface-bright border-outline-variant rounded-lg p-sm font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-on-surface" name="nomor_meja" value={form.nomor_meja} onChange={handleChange} placeholder="Nomor Meja" required type="text" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div>
                  <label className="block font-label-lg text-label-lg text-on-surface mb-xs">Tanggal</label>
                  <div className="relative">
                    <input className="w-full bg-surface-bright border-outline-variant rounded-lg p-sm font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-on-surface" name="tanggal" value={form.tanggal} onChange={handleChange} required type="date" />
                  </div>
                </div>
                <div>
                  <label className="block font-label-lg text-label-lg text-on-surface mb-xs">Waktu</label>
                  <div className="relative">
                    <input className="w-full bg-surface-bright border-outline-variant rounded-lg p-sm font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-on-surface" name="waktu" value={form.waktu} onChange={handleChange} required type="time" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block font-label-lg text-label-lg text-on-surface mb-xs">Jumlah Tamu</label>
                <select className="w-full bg-surface-bright border-outline-variant rounded-lg p-sm font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-on-surface appearance-none" name="jumlah_tamu" value={form.jumlah_tamu} onChange={handleChange}>
                  <option>1-2 Tamu</option>
                  <option>3-4 Tamu</option>
                  <option>5-6 Tamu</option>
                  <option>7+ Tamu (Silakan lihat acara)</option>
                </select>
              </div>
              <div className="pt-sm">
                <button className="w-full bg-primary text-on-primary font-label-lg text-label-lg py-sm rounded-lg hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-[0_10px_30px_-5px_rgba(45,71,57,0.08)]" type="submit" disabled={loading}>
                  {loading ? 'Menyimpan...' : 'Konfirmasi Reservasi'}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Reservation List */}
        {reservations.length > 0 && (
          <section className="bg-surface-container-low rounded-[24px] p-lg md:p-xl shadow-[0_10px_30px_-5px_rgba(45,71,57,0.08)] border border-surface-variant">
            <h2 className="font-headline-lg md:font-display-lg text-headline-lg md:text-display-lg text-primary mb-md">Daftar Reservasi</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-surface-variant">
                    <th className="font-label-lg text-label-lg text-on-surface py-sm px-sm">Nama</th>
                    <th className="font-label-lg text-label-lg text-on-surface py-sm px-sm">Meja</th>
                    <th className="font-label-lg text-label-lg text-on-surface py-sm px-sm">Tanggal</th>
                    <th className="font-label-lg text-label-lg text-on-surface py-sm px-sm">Waktu</th>
                    <th className="font-label-lg text-label-lg text-on-surface py-sm px-sm">Tamu</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map((item) => (
                    <tr key={item.id} className="border-b border-surface-variant/50 hover:bg-surface-container-lowest/50">
                      <td className="font-body-md text-body-md text-on-surface py-sm px-sm">{item.nama_lengkap}</td>
                      <td className="font-body-md text-body-md text-on-surface py-sm px-sm">{item.nomor_meja}</td>
                      <td className="font-body-md text-body-md text-on-surface py-sm px-sm">{item.tanggal}</td>
                      <td className="font-body-md text-body-md text-on-surface py-sm px-sm">{item.waktu}</td>
                      <td className="font-body-md text-body-md text-on-surface py-sm px-sm">{item.jumlah_tamu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* The "Sindoro" Divider */}
        <div className="flex justify-center items-center py-lg opacity-20">
          <svg className="text-primary" fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 120 24" width="120">
            <path d="M0 20 L40 5 L60 15 L80 2 L120 20" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Private Events Section */}
        <section className="bg-surface-container-low rounded-[24px] p-lg md:p-xl shadow-[0_10px_30px_-5px_rgba(45,71,57,0.08)] border border-surface-variant">
          <div className="max-w-3xl mx-auto text-center mb-lg space-y-sm">
            <h2 className="font-headline-lg md:font-display-lg text-headline-lg md:text-display-lg text-primary">Berkumpul di Kaki Gunung</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Adakan acara pribadi, ulang tahun, atau pertemuan komunitas di ruang yang dirancang untuk kebersamaan. Isi formulir di bawah ini untuk menanyakan tentang pemesanan eksklusif.
            </p>
          </div>
          <form className="max-w-2xl mx-auto space-y-md bg-surface-container-lowest p-md md:p-lg rounded-xl border border-outline-variant/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div>
                <label className="block font-label-lg text-label-lg text-on-surface mb-xs">Nama Lengkap</label>
                <input className="w-full bg-surface-bright border-outline-variant rounded-lg p-sm font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="Nama Anda" type="text" />
              </div>
              <div>
                <label className="block font-label-lg text-label-lg text-on-surface mb-xs">Alamat Email</label>
                <input className="w-full bg-surface-bright border-outline-variant rounded-lg p-sm font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="email@anda.com" type="email" />
              </div>
            </div>
            <div>
              <label className="block font-label-lg text-label-lg text-on-surface mb-xs">Jenis Acara</label>
              <input className="w-full bg-surface-bright border-outline-variant rounded-lg p-sm font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="mis., Ulang Tahun, Lokakarya, Reuni" type="text" />
            </div>
            <div>
              <label className="block font-label-lg text-label-lg text-on-surface mb-xs">Ceritakan tentang acara Anda</label>
              <textarea className="w-full bg-surface-bright border-outline-variant rounded-lg p-sm font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none" placeholder="Perkiraan tanggal, jumlah tamu, dan permintaan khusus..." rows="4"></textarea>
            </div>
            <div className="text-right">
              <button className="bg-transparent border border-primary text-primary font-label-lg text-label-lg px-lg py-sm rounded-lg hover:bg-primary-container-low hover:bg-surface-tint/10 transition-colors" type="button">
                Kirim Pertanyaan
              </button>
            </div>
          </form>
        </section>

        {/* Location & Directions (Asymmetrical Layout) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-xl items-start pt-lg">
          {/* Left: Map & Practical Info */}
          <div className="md:col-span-7 space-y-md">
            <h3 className="font-headline-md text-headline-md text-primary">Temukan Jalan ke Sini</h3>
            {/* Interactive Map Placeholder */}
            <div className="w-full h-[300px] bg-surface-container-high rounded-xl overflow-hidden shadow-[0_10px_30px_-5px_rgba(45,71,57,0.08)] relative" data-location="Mount Sindoro, Central Java" style={{}}>
              <div className="bg-cover bg-center w-full h-full opacity-80 mix-blend-multiply" data-alt="A detailed overhead stylized map view illustrating a winding mountain road leading up to Mount Sindoro. The map is designed in a minimalist, elegant aesthetic using light creams, warm sands, and soft forest greens to indicate elevation and forests. A subtle, sophisticated pin marks the location of Aro Cafe." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBVj6j6C0zqSwmDuOBvmofpQGDP1MuOK7ftrysRgGFYULF9qHDLRathxrvqrV2S3MZ7AJwmAGYsvrw8yHkt_FhHWyP0RT-zW28H7GGib4hu8iPFGZMtrKQN9bgALh1TrE40CW0GtdTeZYzy6W08Yllz6vkCPDvTJVkxRkBTopqbhmke4OTryc46DwlB9ENamgcC7luRqXzkoz9Ogjtmb8h3oFEXkhg0TJhPcxJNQaVjdkImF-EW5pm')" }}></div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-surface-container-lowest/90 backdrop-blur px-md py-xs rounded-full font-label-lg text-label-lg text-primary shadow-sm border border-surface-variant flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[18px]">location_on</span> Lihat di Peta
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-md rounded-xl border border-surface-variant space-y-sm">
              <div className="flex items-start gap-sm">
                <span className="material-symbols-outlined text-primary mt-xs">map</span>
                <div>
                  <p className="font-label-lg text-label-lg text-on-surface">Alamat</p>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
                    Jl. Raya Sindoro No. 88, Kledung Pass<br />
                    Jawa Tengah, Indonesia 56264
                  </p>
                </div>
              </div>
              <hr className="border-surface-variant" />
              <div className="flex items-start gap-sm">
                <span className="material-symbols-outlined text-primary mt-xs">local_parking</span>
                <div>
                  <p className="font-label-lg text-label-lg text-on-surface">Parkir &amp; Patokan</p>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
                    Tersedia area parkir gratis yang luas untuk mobil dan sepeda motor. Kami berlokasi 500 meter setelah Rest Area Kledung di sebelah kiri saat menuju ke atas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Hours & Contact */}
          <div className="md:col-span-5 bg-secondary-fixed/30 rounded-[24px] p-lg border border-secondary-fixed-dim space-y-lg">
            <div>
              <h3 className="font-headline-md text-headline-md text-tertiary-container mb-md">Jam Operasional</h3>
              <ul className="space-y-sm">
                <li className="flex justify-between items-baseline font-body-md text-body-md text-on-surface">
                  <span className="font-headline-sm text-headline-sm">Sen - Kam</span>
                  <div className="flex-grow border-b border-dotted border-outline-variant mx-xs opacity-50 relative top-[-6px]"></div>
                  <span>08:00 - 20:00</span>
                </li>
                <li className="flex justify-between items-baseline font-body-md text-body-md text-on-surface">
                  <span className="font-headline-sm text-headline-sm">Jum - Min</span>
                  <div className="flex-grow border-b border-dotted border-outline-variant mx-xs opacity-50 relative top-[-6px]"></div>
                  <span>07:00 - 22:00</span>
                </li>
              </ul>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-sm italic">
                *Jam operasional hari libur dapat bervariasi. Silakan periksa Instagram kami untuk pembaruan.
              </p>
            </div>
            <div className="space-y-sm pt-md border-t border-secondary-fixed-dim">
              <h3 className="font-headline-sm text-headline-sm text-tertiary-container">Tautan Cepat</h3>
              <button className="w-full bg-white border border-outline-variant text-on-surface font-label-lg text-label-lg py-sm rounded-lg hover:bg-surface-bright transition-colors flex items-center justify-center gap-sm shadow-[0_10px_30px_-5px_rgba(45,71,57,0.08)]">
                <span className="material-symbols-outlined">two_wheeler</span> Pesan Antar
              </button>
              <button className="w-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#128C7E] font-label-lg text-label-lg py-sm rounded-lg hover:bg-[#25D366]/20 transition-colors flex items-center justify-center gap-sm">
                <span className="material-symbols-outlined">forum</span> Hubungi via WhatsApp
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-high dark:bg-inverse-surface w-full py-xl px-gutter flex flex-col md:flex-row justify-between items-start gap-md max-w-container-max mx-auto mt-xl">
        <div className="font-headline-md text-headline-md text-primary dark:text-inverse-primary">
          Aro Cafe
        </div>
        <div className="flex flex-col md:flex-row gap-lg md:gap-xl">
          <ul className="space-y-sm">
            <li>
              <a className="font-label-lg text-label-lg text-on-surface-variant dark:text-surface-variant hover:text-primary hover:underline transition-all opacity-80 hover:opacity-100" href="#">
                Hubungi kami via WhatsApp
              </a>
            </li>
            <li>
              <a className="font-label-lg text-label-lg text-on-surface-variant dark:text-surface-variant hover:text-primary hover:underline transition-all opacity-80 hover:opacity-100" href="#">
                Ikuti di Instagram
              </a>
            </li>
            <li>
              <a className="font-label-lg text-label-lg text-on-surface-variant dark:text-surface-variant hover:text-primary hover:underline transition-all opacity-80 hover:opacity-100" href="#">
                Tonton di TikTok
              </a>
            </li>
          </ul>
          <ul className="space-y-sm">
            <li>
              <a className="font-label-lg text-label-lg text-on-surface-variant dark:text-surface-variant hover:text-primary hover:underline transition-all opacity-80 hover:opacity-100" href="#">
                Kebijakan Privasi
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-auto pt-md md:pt-0 mt-md md:mt-0 border-t md:border-t-0 border-surface-variant font-body-md text-body-md text-primary dark:text-primary-fixed-dim text-sm opacity-60">
          © 2024 Aro Cafe Gunung Sindoro. Seluruh hak cipta dilindungi undang-undang.
        </div>
      </footer>
    </div>
  )
}
