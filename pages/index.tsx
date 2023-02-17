import type { NextPage } from 'next'
import { useEffect } from 'react'
import AOS from 'aos'
import NavbarSection from '../components/organisms/Navbar'
import MainBanner from '../components/organisms/MainBanner'
import TransactionSteps from '../components/organisms/TransactionSteps'
import FeaturedGames from '../components/organisms/FeaturedGames'
import Reached from '../components/organisms/Reached'
import Story from '../components/organisms/Story'
import FooterSection from '../components/organisms/Footer'

const HomePage: NextPage = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <NavbarSection />
      <MainBanner />
      <TransactionSteps />
      <FeaturedGames />
      <Reached />
      <Story />
      <FooterSection />
    </>
  )
}

export default HomePage
