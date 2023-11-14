import { useState, useEffect, useRef } from "react";
import API from '../API';

//Helpers
import { isPersistedState } from "../helpers";

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false); // false when button is not clicked, will trigger a useEffect

    console.log(searchTerm);

    const fetchMovies = async (page, searchTerm = '') => {

        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);

            //making sure you return an object with ({})
            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))

        } catch (error) {
            setError(true);
        }

        setLoading(false);
    };

    //initial and search render
    useEffect(() => {

        if(!searchTerm) //check if we have a session state before we fetch anything from the API
        {
            const sessionState = isPersistedState('homeState');

            if(sessionState)
            {
                console.log("Grabbing from sessionStorage");
                setState(sessionState);
                return;
            }
        }
        console.log("Grabbing from API");
        setState(initialState);
        fetchMovies(1, searchTerm)// first page
    }, [searchTerm]); //dependencies, triggers when searchTerm changes

    //Load More
    useEffect(() => {
        if (!isLoadingMore) // if it's false
            return;

        fetchMovies(state.page + 1, searchTerm);
        setIsLoadingMore(false);


    }, [isLoadingMore, searchTerm, state.page])

    //Write to Session STorage
    useEffect(() => {
        if(!searchTerm) sessionStorage.setItem('homeState', JSON.stringify(state))
    },[searchTerm, state]) //will be triggered when [...] changes

    return { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore };
};