import { useState, useEffect } from "react";
import API from '../API';
import { isPersistedState } from "../helpers";

//Helpers


//movieOd is a parameter
export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true); //this will fetch data of the Movie, so default true
    const [error, setError] = useState(false);

    useEffect(() => {

        const fetchMovie = async () => {
            try {
                setLoading(true);
                setError(false);

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);

                //Get Directors only
                const directors = credits.crew.filter(
                    member => member.job === 'Director'
                );

                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                })

                setLoading(false);

            } catch (error) {
                setError(true);
            }
        };

        const sessionState = isPersistedState(movieId) // each movie will be saved in it's own session based on it's id

        if (sessionState) {
            setState(sessionState);
            setLoading(false);
            return; //to stop here and not execute the next lines of code below 
        }
        fetchMovie();

    }, [movieId]) // changes when MovieId changes

    // Write to sessionStorage
    useEffect(() => {
        //I can handle here if's or stuff like this for the items in the dependency array []
        sessionStorage.setItem(movieId, JSON.stringify(state));// I can only write a string to the sessionStorage, that's why I convert JSON to string
    }, [movieId, state])

    return { state, loading, error }

}