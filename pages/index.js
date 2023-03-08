import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import { SliderData } from '../components/SliderData'
import Slider from '../components/Slider'


export default function Home() {
  return (
    <>
      <Head>
        <title>Tricking Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Illusion Tricking' message='We teach a combination of 
      flips, kicks, and twists which are tricks!' />
      <Slider slides={SliderData} />
    </>
  )
}
