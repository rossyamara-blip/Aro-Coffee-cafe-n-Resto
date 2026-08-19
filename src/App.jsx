import TopNavBar from './components/TopNavBar.jsx'
import MenuPage from './components/MenuPage.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="antialiased min-h-screen flex flex-col font-body-md text-body-md">
      <TopNavBar />
      <main className="flex-grow pt-32 pb-xl px-gutter max-w-container-max mx-auto w-full">
        <MenuPage />
      </main>
      <Footer />
    </div>
  )
}
