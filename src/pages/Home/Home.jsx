import React from 'react'
import Banner from '../../components/Banners/banner'
import Category from '../../components/Category/category'
import TopicShop from '../../components/Topic/topicShop'
import Favorites from '../../components/Favorites/Favorites'
const Home = () => {
  return (
    <>
        <Banner />
        <Category />
        <TopicShop />
        <Favorites />
    </>
  )
}

export default Home