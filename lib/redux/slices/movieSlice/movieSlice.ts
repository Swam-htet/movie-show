import {createSlice} from '@reduxjs/toolkit'
import {loadALlMovie} from "@/lib/redux/slices/movieSlice/thunks";



const initialState = {
    movies : []
}


//console.log('loadAllTodo ',loadAllTodo);
export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadALlMovie.pending, (state, action) => {
                console.log('Extra reducer Payload from load all movies - ', action.payload);
            })
            .addCase(loadALlMovie.fulfilled, (state, action) => {
                console.log('Extra reducer fulfilled from load all movies - ', action.payload);
                state.movies.push(...action.payload);
            })

    },
});