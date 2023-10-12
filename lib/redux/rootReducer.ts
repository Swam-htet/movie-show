/* Instruments */
import {counterSlice, todoSlice} from './slices'
import {movieSlice} from "@/lib/redux/slices/movieSlice";

export const reducer = {
  counter: counterSlice.reducer,
  todo: todoSlice.reducer,
  movie: movieSlice.reducer,


}
