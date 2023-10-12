import {fetchALlMovie} from "@/lib/redux/slices/movieSlice/api";
import {createAppAsyncThunk} from "@/lib/redux/createAppAsyncThunk";

export const loadALlMovie = createAppAsyncThunk(
    'movie/fetchAllMovie',
    async () => {
        let movies = await fetchALlMovie();
        console.log("This is from thunk - ",movies);
        return movies;
    }
)
