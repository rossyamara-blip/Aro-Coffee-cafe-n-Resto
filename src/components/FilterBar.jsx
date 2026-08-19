import CategoryFilter from './CategoryFilter.jsx'
import DietFilter from './DietFilter.jsx'

export default function FilterBar({
  activeCategory,
  onCategoryChange,
  activeDiets,
  onToggleDiet,
}) {
  return (
    <div className="sticky top-20 z-40 bg-secondary-fixed/90 backdrop-blur-sm py-4 mb-lg -mx-gutter px-gutter shadow-[0_10px_30px_-5px_rgba(45,71,57,0.05)]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-container-max mx-auto">
        <CategoryFilter
          activeCategory={activeCategory}
          onChange={onCategoryChange}
        />
        <DietFilter activeDiets={activeDiets} onToggleDiet={onToggleDiet} />
      </div>
    </div>
  )
}
