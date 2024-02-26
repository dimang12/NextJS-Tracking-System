
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main className='p-3'>
      <h1>Welcome to the Tracking System</h1>
      <Link href='/users'> User </Link>
      <ProductCard />
    </main>
  )
}
