import Button from './Button'
import Tag from './Tag'
import { ServerStackIcon } from '@heroicons/react/24/solid'

const navigationButtons = [
  {
    title: 'About',
    href: '/about',
    isNew: true,
  },
  {
    title: 'Home',
    href: '/',
    isNew: false,
  },
]

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-indigo-50 p-6 items-center sticky top-0 shadow-lg">
      <a href = "/" className=" p-6 bg-red rounded-full hover:scale-100 transition-all cursor-pointrer">
        <ServerStackIcon className="h-14 w-14 text-stone-400" />
        </a>
      <div className="flex gap-x-4 items-center">
        {navigationButtons.map(({ href,title, isNew}) => (
          <>


        <Button href = {href} classNameProp="flex gap-2 text-xl">

        {isNew && <Tag classNames='mr-2 animate-bounce'/>}

          {title}

          </Button>

        </>

        ))}
      </div>
    </nav>
  )
}
