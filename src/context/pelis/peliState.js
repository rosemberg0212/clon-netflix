import React, { useReducer, useCallback } from 'react'
import PeliContext from './peliContext'
import PeliReducer from './peliReducer'
import axios from 'axios'
// import Swal from 'sweetalert2'

import {
    OBTENER_PELI,
    OBTENER_NOW,
    OBTENER_TEN
} from '../../types'


const INITIAL_STATE = {
    pelis: [],
    now: [],
    tend: []
}

const PeliState = (props) => {
    const [state, dispatch] = useReducer(PeliReducer, INITIAL_STATE)
    
    const api_key = process.env.REACT_APP_API_KEY;

    //metodo para obtener peliculas
    const getPelis = useCallback(async () => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`);
            // console.log(res.data.results);
            dispatch({
                type: OBTENER_PELI,
                payload: res.data.results
            })
        } catch (error) {
            console.log(error.response.data.errors)
        }
    }, [api_key])

    //metodo para obtener peliculas
    const nowPlaying = useCallback(async () => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`);
            // console.log(res.data.results);
            dispatch({
                type: OBTENER_NOW,
                payload: res.data.results
            })
        } catch (error) {
            console.log(error.response.data.errors)
        }
    }, [api_key])

    const tendencias = useCallback(async () => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=2`);
            // console.log(res.data.results);
            dispatch({
                type: OBTENER_TEN,
                payload: res.data.results
            })
        } catch (error) {
            console.log(error.response.data.errors)
        }
    }, [api_key])


    const { pelis, now, tend } = state
    const values = {
        pelis,
        now,
        tend,
        getPelis,
        nowPlaying,
        tendencias
    }

    return (
        <PeliContext.Provider
            value={values}
        >
            {props.children}
        </PeliContext.Provider>
    )
}

export default PeliState