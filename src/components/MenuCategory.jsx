import FeaturedCard from './FeaturedCard.jsx'
import MenuItem from './MenuItem.jsx'

export default function MenuCategory({ section }) {
  const featuredCards = section.featuredCards ?? []
  const menuItems = section.menuItems ?? []

  return (
    <section className="mb-xl" id={section.id}>
      <div className="flex items-center gap-4 mb-lg">
        <h2 className="font-headline-lg text-headline-lg text-primary md:font-headline-lg font-headline-md text-headline-md">
          {section.title}
        </h2>
        <div className="h-px bg-outline-variant flex-grow"></div>
      </div>

      {featuredCards.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-lg">
          {featuredCards.map((card) => (
            <FeaturedCard key={card.id} card={card} />
          ))}
        </div>
      )}

      {menuItems.length > 0 && (
        <div className="bg-surface rounded-lg p-6 shadow-[0_10px_30px_-5px_rgba(45,71,57,0.08)]">
          <ul className="space-y-6">
            {menuItems.map((item) => (
              <MenuItem key={item.name} item={item} />
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
