import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Movie } from "@/types/Movie";

interface ModalState {
  showModal: boolean;
  movie: Movie | null;
}

const initialState: ModalState = {
  showModal: false,
  movie: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalMovie: (state, action: PayloadAction<Movie | null>) => {
      state.movie = action.payload;
    },
    openModal: (state) => {
      state.showModal = true;
    
    },
    closeModal: (state) => {
      state.showModal = false;
      state.movie = null;
    },
  },
});

export const { openModal, closeModal, setModalMovie } = modalSlice.actions;
export default modalSlice.reducer;