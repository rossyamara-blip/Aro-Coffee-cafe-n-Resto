export default function MenuItem({ item }) {
  return (
    <li className="flex flex-col md:flex-row justify-between items-baseline group cursor-pointer hover:bg-surface-container-low p-2 -mx-2 rounded transition-colors">
      <div className="flex-grow flex items-baseline w-full">
        <h4 className="font-headline-sm text-headline-sm text-primary group-hover:text-tertiary transition-colors">
          {item.name}
        </h4>
        <div className="dotted-leader"></div>
        <span className="font-body-lg text-body-lg text-secondary font-medium whitespace-nowrap ml-2">
          {item.price}
        </span>
      </div>
      <div className="w-full md:w-auto mt-1 md:mt-0 md:ml-4 text-on-surface-variant font-body-md text-sm md:text-right max-w-xs">
        {item.description}
      </div>
    </li>
  )
}
