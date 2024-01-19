import React from 'react'
import Swipe from '../../components/Swiper/Swipe'
import Cards from '../../components/Cards/Cards'
import Static from '../../components/Static/Static'
import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <div>
<Helmet>
                <meta charSet="utf-8" />
                <title>Home Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Swipe/>
      <Cards/>
      <Static/>
    </div>
  )
}

export default Home