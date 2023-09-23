import React from 'react'
import { topPicks } from '../data/data';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const TopPick = () => {
  return (
    <>
    <h1 className ='text-orange-500 font-bold text-2xl text-center py-2'> Top Picks </h1>
    <div className ='hidden lg:flex max-w[1520px] m-auto py-2 px-=2'>
    {
        topPicks.map((item)=>{
            
        })
    }
    </div>
    </>
    )
}

export default TopPick
