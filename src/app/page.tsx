import Image from 'next/image'
import SectionHero from './components/SectionHero'
import SectionServices from './components/SectionServices'
import Link from 'next/link'
import Login from "@/app/login/page"

export default function Home() {
  return (
    <>
    <SectionHero/>
    <SectionServices/>
    </>
    
  )
}
