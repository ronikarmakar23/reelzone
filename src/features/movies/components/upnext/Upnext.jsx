import React from 'react'

const data = [
  {
    id: 1,
    title: "John Krasinski Returns in 'Jack Ryan: Ghost War'",
    subtitle: "Watch the Trailer",
    duration: "0:54",
    likes: 223,
    reactions: 248,
    img: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg"
  },
  {
    id: 2,
    title: "Something Very Bad Is Going to Happen",
    subtitle: "Coming to Netflix March 26",
    duration: "2:21",
    likes: 275,
    reactions: 113,
    img: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg"
  },
  {
    id: 3,
    title: "June 12 Is 'Disclosure Day'",
    subtitle: "Watch the Trailer",
    duration: "2:38",
    likes: 634,
    reactions: 336,
    img: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg"
  }
];

export default function Upnext({ upcomingMoviesList }) {
  return (
    <div className="p-2 space-y-3 overflow-y-auto h-full">

      {upcomingMoviesList.map((item) => (
        <div
          key={item.id}
          className="flex gap-3 p-2 rounded-lg hover:bg-black/10 transition cursor-pointer"
        >

          {/* Poster */}
          <img
            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
            alt="movie" loading='lazy'
            className="w-[70px] h-[100px] object-cover rounded-md"
          />


          {/* Content */}
          <div className="flex-1 flex flex-col justify-between">

            {/* Top section */}
            <div>
              <h3 className="text-gray-900 text-sm font-semibold leading-snug line-clamp-2">
                {item.title}
              </h3>

              <p className="text-gray-500 text-xs mt-1">
                Released Date: {item.release_date}
              </p>
            </div>

            {/* Bottom section */}
            <div className="flex items-center justify-between mt-2">

              {/* Duration */}
              {
                item.video === true ? (
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    ▶ <span>{item.duration}</span>
                  </div>
                ) : ''
              }


              {/* Reactions */}
              <div className="flex gap-3 text-xs text-gray-600">
                <span>👍 {item.vote_count}</span>
                {/* <span>❤️ {item.vote_count}</span> */}
              </div>

            </div>

          </div>

        </div>
      ))}

    </div>
  )
}