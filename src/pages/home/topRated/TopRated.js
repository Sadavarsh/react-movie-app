import React, { useState } from 'react'
import ContentWrapper from '../../../component/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../component/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../component/carousel/Carousel';


const TopRated = () => {
  const [endPoint, setEndPoint] = useState("movie");

  const {data, loading} = useFetch(`/${endPoint}/top_rated`);
  const onTabChange = (tab) =>  {
    setEndPoint(tab === "Movies" ? "movie" : "tv")
  }
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>
          Top Rated
        </span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>

      <Carousel data={data?.results}  loading={loading} endPoint={endPoint} />
    </div>
  )
}

export default TopRated