import axios from "axios";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2ZkOTAwZGJhMzFiYWYwNjRkYzQzNDE4YTExMzUwZSIsIm5iZiI6MTc3NDIyNjIyOS4xMzYsInN1YiI6IjY5YzA4YjM1NTNhYmRiYjVmNDE1ZWQyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9suzFh2URJ7B3vQyDN7dsoESTxNbhn0lMpTPtj_ME3Y'
  }
};

const runningMoies = async() =>{
    try {
        let response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, options);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
const upcomingMovies = async () =>{
    let response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming`,options)

    return response.data;
}
const trandingMovies = async () =>{
    let response = await axios.get(`https://api.themoviedb.org/3/trending/all/week`,options)

    return response.data;
}

export {runningMoies,upcomingMovies,trandingMovies}