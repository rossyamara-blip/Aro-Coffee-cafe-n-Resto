import { categories } from '../data/menu'

export default function CategoryFilter({ activeCategory, onChange }) {
  return (
    <div className="flex overflow-x-auto hide-scrollbar w-full md:w-auto gap-2 pb-2 md:pb-0">
      {categories.map((category) => {
        const isActive = activeCategory === category.id
        return (
          <button
            key={category.id}
            onClick={() => onChange(category.id)}
            className={
              isActive
                ? 'whitespace-nowrap px-4 py-2 rounded-full bg-primary text-on-primary font-label-lg text-label-lg'
                : 'whitespace-nowrap px-4 py-2 rounded-full bg-surface text-primary border border-primary/20 hover:bg-primary-fixed/50 font-label-lg text-label-lg transition-colors'
            }
          >
            {category.name}
          </button>
        )
      })}
    </div>
  )
}
