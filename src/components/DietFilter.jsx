import { dietFilters } from '../data/menu'

export default function DietFilter({ activeDiets, onToggleDiet }) {
  return (
    <div className="flex gap-2 w-full md:w-auto justify-start md:justify-end border-t md:border-t-0 border-outline-variant pt-2 md:pt-0">
      {dietFilters.map((diet) => {
        const isActive = activeDiets.includes(diet.id)
        return (
          <button
            key={diet.id}
            onClick={() => onToggleDiet(diet.id)}
            className={
              isActive
                ? 'flex items-center gap-1 px-3 py-1.5 rounded-full border border-primary bg-primary text-on-primary font-label-lg text-[12px]'
                : 'flex items-center gap-1 px-3 py-1.5 rounded-full border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors font-label-lg text-[12px]'
            }
          >
            <span className="material-symbols-outlined text-[16px]">{diet.icon}</span>
            {diet.name}
          </button>
        )
      })}
    </div>
  )
}
