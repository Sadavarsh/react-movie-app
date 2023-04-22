import React, { useEffect, useState } from 'react'
import "./herobanner.scss"
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../component/lazyLoadImage/Img';
import ContentWrapper from '../../../component/contentWrapper/ContentWrapper';





const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const {url} = useSelector((state) => state.home)

    const {data, loading} = useFetch("/movie/upcoming")


    useEffect(() => {
        const bg =  url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg)
    },[data])


    const searchQueryHandle = (event) => {
        if(event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`)
        }
    } 

  return (
    <div className="heroBanner">
        {!loading && <div className="backdrop-img">
            <Img src={background} />
        </div>}

        <div className="opacity-layer"></div>

       <ContentWrapper>
            <div className="heroBannerContent">
                <span className="title">Welcome</span>
                <span className="subTitle">Millions of movies, TV show and peple to discover. Explore now</span>
                <div className="searchInput">
                    <input type="text" placeholder='Search Your movies and tv show...'
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyUp={searchQueryHandle} />
                    
                    <button>Search</button>
                </div>
            </div>
       </ContentWrapper>
    </div>
  )
}

export default HeroBanner