import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from './navbar'
import HomePage from './home'
import About from './about'
import MyPortfolio from './portfolio'
import Contact from './contact'
import Footer from './footer'
import FacebookChat from './facebook'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="Portfolio" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <HomePage />
      <About />
      <MyPortfolio />
      <Contact />
      <Footer />
      <FacebookChat />
    </div>
  )
}

export default Home
