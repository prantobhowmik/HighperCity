"use client"
import './globals.css'
import { ThemeProvider } from '@material-tailwind/react'
import Image from 'next/image'
import Nav from './Nav/page'
import News from './News/page'
import {Footer} from './Footer/page'

export default function Home() {
  return (
    <ThemeProvider>
    <div className=''>
      <Nav/>
      <News/>
      <div className='absolute inset-x-0 bottom-0 '>
        <Footer/>
      </div>
    </div>
    </ThemeProvider>
  )
}
