import React from 'react'

export default function Card({movie}) {
    console.log(movie);
    
    return (
        <div className="w-[150px] h-[250px] rounded-[10px] overflow-hidden relative group cursor-pointer transition-transform duration-300 hover:scale-105">

            {/* Image Section */}
            <div
                className="h-[75%] bg-cover bg-center relative"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
                }}
            >

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                {/* Add Favorite (Top Left) */}
                <div className="absolute top-2 left-2 w-7 h-7 flex items-center justify-center bg-blue-500 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}   // 🔥 increase thickness
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 5v14M5 12h14"
                        />
                    </svg>

                </div>

                {/* Info (Top Right) */}
                <div className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-blue-500 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>

                </div>

            </div>

            {/* Bottom Section */}
            <div className="h-[25%] bg-black text-white flex items-center px-2">
                <h2 className="text-sm font-semibold line-clamp-2">
                    {
                        movie.media_type =="tv" ? movie.name : movie.media_type =="movie" ? movie.original_title : ''
                }
                </h2>
            </div>

        </div>
    )
}