import Button from './Button'
import Tag from './Tag'

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
      <div className="logo bg-indigo-600 rounded-full p-6 hover:scale-105 transition-all cursor-pointer"></div>
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
