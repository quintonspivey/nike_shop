import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    shoes: [ 'Blazers', 'AirForce Ones', 'Peicers', 'Peroccs']
}

const shoeSlice = createSlice({
    name: "shoe",
    initialState,
    reducers: {

    }
})

export const selectShoes = state => state.shoe.shoes;

export default shoeSlice.reducer

