import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
const imgUrl = "/malkiya.jfif";

export default function Home() {
  return (
    <div >


      <main className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-4xl text-black mb-4 font-semibold'>
          Bienvenu chez nous!
        </h1>
        <Image height={400} width={800} src={imgUrl} alt="" className='rounded-xl object-center' />
      </main>


    </div>
  )
}
