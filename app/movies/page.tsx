'use client';

import {useEffect} from "react";
import {useDispatch, useSelector} from "@/lib/redux";
import {loadALlMovie, selectMovie} from "@/lib/redux/slices/movieSlice";
import Movie from "@/lib/redux/slices/movieSlice/movie";

export default function Movie() {
    const dispatch = useDispatch()
    const movies:Movie[] = useSelector(selectMovie);

    useEffect(() => {
        dispatch(loadALlMovie());
    }, []);
    return (<div className={'mt-10'}>
        <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'}>
            {
                movies.map((movie,index) => {
                    return (<div key={index} className={'bg-gray-200 p-5 rounded hover:shadow-2xl'}>
                        <h1 className={'mb-2'}>{movie.name}</h1>
                        <img src={movie.image.original} alt={"Movie-"+movie.name}/>
                    </div>);
                })
            }
        </div>

    </div>)
}