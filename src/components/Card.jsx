export default function Card({ children, style = 'bg-gray-100' }) {
  return (
    <div className={`${style} p-6 rounded-lg shadow-md`}>
      { children }
    </div>
  )
}
