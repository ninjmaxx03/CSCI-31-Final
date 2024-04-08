import Card from './Card'
import Flex from './Flex'
import Content from './content'

const cards = [
  {
    title: 'Camels',
    img: 'https://images.unsplash.com/photo-1710169589950-ee8c3be7cbef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Mountain',
    img: 'https://images.unsplash.com/photo-1710302027281-a1bfbaa94f92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8',
  },
  {
    title: 'City',
    img: 'https://images.unsplash.com/photo-1707494750832-48a457145d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
  },
]

export default function Main() {
  return (
    <main>
      <div className="flex gap-x-12 my-12 flex-wrap gap-y-6" id="card-container">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} image={card.img} />
        ))}
      </div>
      <Flex classNames="bg-blue-600 text-grey-500">
        <span>Child tag one</span>
        <span>Child tag two</span>
        <span>Child tag three</span>
      </Flex>
      <Content content="" />
      <Content content="" />
    </main>
  )
}
