import { useEffect, useState } from 'react'
import * as React from 'react';
import Banner from '../components/banner/Banner';
import Card from '../../../shared/components/card/Card';
import './Movies.css'
import Upnext from '../components/upnext/Upnext';
import { runningMoies, upcomingMovies, trandingMovies } from '../services/service'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Movies() {
  const [runningMovies, setrunningMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [upcomingMoviesList, setUpcomingMoviesList] = useState([]);
  const [upcomingListIndex, setUpcomingListIndex] = useState(3);

  const [trandingMovieList, setTrandingMovieList] = useState([]);
  const [filterTrandingMovieList, setFilterTrandingMovieList] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  useEffect(() => {
    console.log("useEffect");

    async function running_movies() {
      const response = await runningMoies();
      setrunningMovies(response.results)
      // setCurrentIndex(0);
    }
    async function upcoming_movies() {
      const response = await upcomingMovies();
      let result = response.results;
      let start = upcomingListIndex - 3;
      let end = upcomingListIndex;
      setUpcomingMoviesList(result.slice(start, end));
    }
    async function trendingMovies() {
      const response = await trandingMovies();
      const result = response.results;
      setTrandingMovieList(result);
      setFilterTrandingMovieList(result.slice(0, 10));
      console.log(filterTrandingMovieList);

    }
    running_movies();
    upcoming_movies();
    trendingMovies();

  }, [])
  const next = () => {
    setCurrentIndex((current) => current === runningMovies.length - 1 ? 0 : current + 1)
  }
  const previous = () => {
    setCurrentIndex((current) => current === 0 ? current : current - 1)
  }

  const handleChange = (value) => {
    setPage(value);
    const start = (value - 1) * perPage;
    const end = value * perPage;

    const sliced = trandingMovieList.slice(start, end);

    setFilterTrandingMovieList(sliced);


    console.log(filterTrandingMovieList);

  };

  return (

    <>

      <div className='mt-[2px] ml-[5px]'>
        <div className="banner-container h-[80vh]">
          <div className="banner h-[100%] w-[65%]">
            {
              runningMovies.length > 0 && (
                <Banner movie={runningMovies[currentIndex]} next={next} previous={previous} />
              )
            }

          </div>
          <div className="up-next h-[100%] w-[35%] flex flex-col gap-[20px]">
            <h1 className='pb-20px'>Upcoming Next</h1>
            <div className="up-next-movies flex-1">
              <Upnext upcomingMoviesList={upcomingMoviesList} />
            </div>
          </div>

        </div>
        <div className="upcoming-movie">
          <h1 className='mb-[20px] text-xl'>Trending Movies</h1>
          <div className="upcoming-movies flex flex-wrap mx-auto gap-[10px] ">
            {
              filterTrandingMovieList.length && filterTrandingMovieList.map(movie => (
                <Card movie={movie} key={movie.id} />
              ))
            }


          </div>
          <div className="pagination mt-[10px]">
            <Stack spacing={2}>
              <Pagination count={trandingMovieList.length / 10} onChange={(e, v) => handleChange(v)} page={page} />
            </Stack>
          </div>


        </div>

      </div>

    </>
  )
}
