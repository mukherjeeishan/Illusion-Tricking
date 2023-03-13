import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import { SliderData } from '../components/SliderData'
import Slider from '../components/Slider'


export default function Home() {
  return (
    <>
      <Head>
        <title>Illusion Tricking</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero 
      heading='Illusion Tricking' 
      message='Sports group based in Levin, New Zealand. We do a mixture of flips, kicks, and twists that are put together to create cool tricks!' />
      <Slider slides={SliderData} />
    </>
  )
}
