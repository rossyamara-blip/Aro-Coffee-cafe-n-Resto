import { useState } from 'react'
import PageHeader from './PageHeader.jsx'
import FilterBar from './FilterBar.jsx'
import MenuCategory from './MenuCategory.jsx'
import { menuSections } from '../data/menu'

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('kopi')
  const [activeDiets, setActiveDiets] = useState([])

  const toggleDiet = (dietId) => {
    setActiveDiets((prev) =>
      prev.includes(dietId)
        ? prev.filter((d) => d !== dietId)
        : [...prev, dietId]
    )
  }

  const visibleSections = menuSections.filter(
    (section) => section.id === activeCategory
  )

  return (
    <>
      <PageHeader />

      <FilterBar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        activeDiets={activeDiets}
        onToggleDiet={toggleDiet}
      />

      {visibleSections.length > 0 ? (
        visibleSections.map((section) => (
          <MenuCategory key={section.id} section={section} />
        ))
      ) : (
        <p className="text-center text-on-surface-variant font-body-md text-body-md py-12">
          Menu untuk kategori ini belum tersedia.
        </p>
      )}
    </>
  )
}
