export default function FeaturedCard({ card }) {
  const isWide = card.size === 'wide'

  const badgeClassMap = {
    'primary-container': 'bg-primary-container text-on-primary-container',
    'tertiary-container': 'bg-tertiary-container text-on-tertiary-container',
  }
  const badgeClass = card.badge?.type
    ? badgeClassMap[card.badge.type]
    : 'bg-primary-container text-on-primary-container'

  const imageClass = isWide
    ? 'h-64 bg-cover bg-center w-full transition-transform duration-700 group-hover:scale-105'
    : 'h-48 bg-cover bg-center w-full transition-transform duration-700 group-hover:scale-105'

  const articleClass = isWide
    ? 'col-span-1 md:col-span-2 bg-surface rounded-lg overflow-hidden shadow-[0_10px_30px_-5px_rgba(45,71,57,0.08)] relative group'
    : 'col-span-1 bg-surface rounded-lg overflow-hidden shadow-[0_10px_30px_-5px_rgba(45,71,57,0.08)] relative group flex flex-col'

  const contentClass = isWide
    ? 'p-6 bg-surface relative z-10'
    : 'p-6 bg-surface flex-grow flex flex-col justify-between relative z-10'

  const titleClass = isWide
    ? 'font-headline-md text-headline-md text-primary'
    : 'font-headline-sm text-headline-sm text-primary'

  const priceClass = isWide
    ? 'font-body-lg text-body-lg text-secondary font-semibold'
    : 'font-body-md text-body-md text-secondary font-semibold'

  const descClass = isWide
    ? 'font-body-md text-body-md text-on-surface-variant mb-4'
    : 'font-body-md text-body-md text-on-surface-variant mb-4 text-sm'

  const tagsWrapperClass = isWide
    ? 'flex gap-2'
    : 'flex gap-2 mt-auto'

  const tagClass =
    'text-xs border border-outline-variant rounded px-2 py-1 text-on-surface-variant'

  return (
    <article className={articleClass}>
      <div
        className={imageClass}
        style={{ backgroundImage: card.image }}
        data-alt={card.alt}
      ></div>

      {card.badge && (
        <div className="absolute top-4 left-4 flex gap-2">
          <span
            className={`${badgeClass} px-2 py-1 rounded text-[12px] font-label-lg uppercase tracking-wider`}
          >
            {card.badge.text}
          </span>
        </div>
      )}

      <div className={contentClass}>
        {isWide ? (
          <>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className={titleClass}>{card.title}</h3>
              <span className={priceClass}>{card.price}</span>
            </div>
            <p className={descClass}>{card.description}</p>
            <div className={tagsWrapperClass}>
              {card.tags.map((tag) => (
                <span key={tag} className={tagClass}>
                  {tag}
                </span>
              ))}
            </div>
          </>
        ) : (
          <>
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className={titleClass}>{card.title}</h3>
                <span className={priceClass}>{card.price}</span>
              </div>
              <p className={descClass}>{card.description}</p>
            </div>
            <div className={tagsWrapperClass}>
              {card.tags.map((tag) => (
                <span key={tag} className={tagClass}>
                  {tag}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </article>
  )
}
