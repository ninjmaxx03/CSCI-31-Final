export default function Tag({ content = 'New', classNames = ''}){
  return <div className= {`px-2 bg-gradient-to-r from-red-500 to-blue-500 rounded-lg text-white ${classNames}`}>
  {content}</div>
}
