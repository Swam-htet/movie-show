/* Instruments */
import {counterSlice} from './slices'
import {movieSlice} from "@/lib/redux/slices/movieSlice";

export const reducer = {
  counter: counterSlice.reducer,
  movie: movieSlice.reducer,


}
