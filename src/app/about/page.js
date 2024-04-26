import SimpleGallery from "../components/SimpleGallery";

const images = [
  {
  largeURL:  'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  thumbnailURL: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  width: 1980,
  height: 2947,
  alt: 'NewYork1'
  },
  {
    largeURL:  'https://images.unsplash.com/photo-1512850183-6d7990f42385?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    thumbnailURL: 'https://images.unsplash.com/photo-1512850183-6d7990f42385?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    width: 618,
    height: 927,
    alt: 'NewYork2'
    },
    {
      largeURL:  'https://images.unsplash.com/photo-1502899576159-f224dc2349fa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      thumbnailURL: 'https://images.unsplash.com/photo-1502899576159-f224dc2349fa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      width: 741,
      height: 927,
      alt: 'NewYork3'
      },

]

export default function About() {
return (
  <div className="p-12">
  <h1 className="text-xl">About Page</h1>
  <div className="bg-stone-100 p-4">
  <SimpleGallery galleryID="image-gallery" images={images} />
  </div>
  </div>
)
}
