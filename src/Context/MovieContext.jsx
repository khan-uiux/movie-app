import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext(null)

export const ContextProvider = ({children}) => {

    const [movies, setMovies] = useState([])
    const [newArival, setNewArival] = useState([])
    const [toprated, setToprated] = useState([])
    const [popular, setPopular] = useState([])
    const [movieCategory, setMovieCategory] = useState([])
    const [heading, setHeading] = useState('')


    const Api_Key = "bf555f9dcec786c28aca45fbbcdff1be"

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${Api_Key}`)
                const response = await data.json()
                setMovies(response.results)
            } catch (error) {
                alert(error)
            }
        }
        fetchData()
    },[])

    useEffect(() => {
        const newArival = async (newArival) => {
            try {
                const data = await fetch(`https://api.themoviedb.org/3/movie/${newArival}?api_key=${Api_Key}`)
                const response = await data.json()
                setNewArival(response.results)
            } catch (error) {
                alert(error)
            }
        }
        newArival('upcoming')
    },[])

    useEffect(() => {
        const topRated = async (toprated) => {
            try {
                const data = await fetch(`https://api.themoviedb.org/3/movie/${toprated}?api_key=${Api_Key}`)
                const response = await data.json()
                setToprated(response.results)
            } catch (error) {
                alert(error)
            }
        }
        topRated('top_rated')
    },[])

    useEffect(() => {
        const popular = async (toprated) => {
            try {
                const data = await fetch(`https://api.themoviedb.org/3/movie/${toprated}?api_key=${Api_Key}`)
                const response = await data.json()
                setPopular(response.results)
            } catch (error) {
                alert(error)
            }
        }
        popular('popular')
    },[])

    const handleCategory = async (tabID) => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${tabID}?api_key=${Api_Key}`)
            const response = await data.json()
            setMovieCategory(response.results)
        } catch (error) {
            alert(error)
        }

        if (tabID =='popular') {
            setHeading('Popular')
        }
        if (tabID == 'top_rated') {
            setHeading('Top Rated')
        }
        if (tabID == 'upcoming') {
            setHeading('Upcoming')
        }
        if (tabID == 'now_playing') {
            setHeading('New Arival')
        }
    }


    const value = {
        movies,
        newArival,
        toprated,
        popular,
        movieCategory,
        heading,
        handleCategory,
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}