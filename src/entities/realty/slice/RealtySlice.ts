import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import {IRealty, RealtySchema} from '../types/realty'
import {getRealtyService} from '../service/RealtyService'

const initialState: RealtySchema = {
    realtyArr: null,
    isLoading: false,
    error: '',
}

export const realtySlice = createSlice({
    name: 'realty',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<IRealty[]>) => {
            state.realtyArr = action.payload
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getRealtyService.pending, state => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(
                getRealtyService.fulfilled,
                (state, action: PayloadAction<IRealty[]>) => {
                    state.isLoading = false
                    state.realtyArr = action.payload
                }
            )
            .addCase(getRealtyService.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const {actions: realtyActions} = realtySlice
export const {reducer: realtyReducer} = realtySlice
