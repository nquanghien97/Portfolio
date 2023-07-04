import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from './navbar'
import HomePage from './home'
import About from './about'
import MyPortfolio from './portfolio'
import Contact from './contact'
import Footer from './footer'
import MessengerCustomerChat from 'react-messenger-customer-chat';
import TechStack from './techStack'

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
      <TechStack />
      <MyPortfolio />
      <Contact />
      <Footer />
      <div>
        <MessengerCustomerChat
          pageId="101380578051500"
          appId="3228824117442850"
        />
      </div>
    </div>
  )
}

export default Home
