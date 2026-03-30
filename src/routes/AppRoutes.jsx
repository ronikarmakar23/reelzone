import React from 'react'
import { Route,Routes } from 'react-router-dom'
import {lazy} from 'react';
// import Movies from '../features/movies/pages/Movies'
// import WatchList from '../features/watch-list/components/WatchList'
const Movies = lazy(()=>import('../features/movies/pages/Movies.jsx'));
const WatchList = lazy(()=>import('../features/watch-list/components/WatchList.jsx'))
export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Movies />} />
                <Route path='/watchlist' element={<WatchList />} />
            </Routes>

        </>
    )
}
