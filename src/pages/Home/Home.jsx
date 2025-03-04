import React from 'react'
import Banner from '../../components/Banners/banner'
import Category from '../../components/Category/category'
import TopicShop from '../../components/Topic/topicShop'
import Favorites from '../../components/Favorites/Favorites'
import ReviewRate from '../../components/ReviewRate/ReviewRate'
import Postpopular from '../../components/PopularPost/Postpopular'
const Home = () => {
  return (
    <>
        <Banner />
        <Category />
        <TopicShop />
        {/* <Favorites /> */}
        {/* <ReviewRate /> */}
        <Postpopular />
    </>
  )
}

export default Home