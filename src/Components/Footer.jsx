import React,{useState,useEffect} from 'react';

const Footer = () => {
    const [trendingCoins,setTrendingCoins] = useState([]);
  return (
    <div className='bg-white w-full h-auto p-4 flex flex-col items-center'>
        <div className='text-2xl m-2'>You may also like</div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Footer