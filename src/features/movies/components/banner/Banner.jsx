import React,{useEffect} from 'react'
import {textLimitation} from '../../../../shared/utils/text'
export default function Banner({movie,next,previous}) {
    
  return (
    <>

        <div 
      className='h-[100%] w-[100%] mb-[5px] rounded-[10px] shadow-lg bg-cover bg-center bg-no-repeat relative overflow-hidden'
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
      }} key={movie.id}
    >

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* LEFT BUTTON */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center border border-white/40 bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/20 hover:scale-110 transition cursor-pointer" onClick={previous}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-6 h-6 text-white "
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* RIGHT BUTTON */}
      <button className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center border border-white/40 bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/20 hover:scale-110 transition hover:cursor-pointer" onClick={next}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-6 h-6 text-white"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

     

      {/* Content */}
      <div className='relative z-10 w-full h-full flex items-end p-5'>
        <div>
          <h1 className="text-3xl font-bold text-white drop-shadow-lg">
            {movie.title}
          </h1>

          <p className="text-sm text-gray-300 mt-1">
            {textLimitation(movie.overview,20)}
          </p>

          <button className="mt-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 transition rounded-lg text-sm font-medium">
            Watch Now
          </button>
        </div>
      </div>

    </div>
    
    
    
    </>
    
  )
}