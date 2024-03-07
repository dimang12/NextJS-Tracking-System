
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import { authProvider } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authProvider)
  return (
    <main className='p-3'>
      <h1>Welcome to the Tracking System</h1>
      <Link href='/users'> User </Link>
      <ProductCard />
    </main>
  )
}
