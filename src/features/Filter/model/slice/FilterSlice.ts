import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {FilterSchema} from "../types/FilterSchema";

const initialState: FilterSchema = {
    isLoading: false,
    deal_type: 'house',
    // realtyTypeKey: 'house',
    rooms: '1',
    error: '',

}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        setLoading: state => {
            state.isLoading = true
        },
        resetModal: (state) => {
            state.area_max = undefined
            state.area_min = undefined
            state.floors = undefined
            state.floors_num = undefined
            state.condition = undefined
            state.balcony = undefined
            state.furniture = undefined
            state.bathroom = undefined
            state.year_built = undefined
            state.building_type = undefined
            state.parking = undefined
        },
        setInitState: (state, action) => {
            state = initialState
        },
        setDeelType: (state, action: PayloadAction<string>) => {
            state.deal_type = action.payload
        },
        setRooms: (state, action: PayloadAction<string>) => {
            state.rooms = action.payload
        },
        setMaxPrice: (state, action: PayloadAction<string>) => {
            state.max_price = Number(action.payload)
        },
        setMinPrice: (state, action: PayloadAction<string>) => {
            state.min_price = Number(action.payload)
        },
        setStreet: (state, action: PayloadAction<string>) => {
            state.street = action.payload
        },
        setArea_max: (state, action: PayloadAction<string>) => {
            state.area_max = Number(action.payload)
        },
        setArea_min: (state, action: PayloadAction<string>) => {
            state.area_min = Number(action.payload)
        },
        setFloors: (state, action: PayloadAction<string>) => {
            state.floors = Number(action.payload)
        },
        setFloors_num: (state, action: PayloadAction<string>) => {
            state.floors_num = Number(action.payload)
        },
        setCondition: (state, action: PayloadAction<string>) => {
            state.condition = action.payload
        },
        setBalcony: (state, action: PayloadAction<string>) => {
            state.balcony = action.payload
        },
        setFurniture: (state, action: PayloadAction<string>) => {
            state.furniture = action.payload
        },
        setBathroom: (state, action: PayloadAction<string>) => {
            state.bathroom = action.payload
        },
        setYearBuilt: (state, action: PayloadAction<string>) => {
            state.year_built = Number(action.payload)
        },
        setBuildingType: (state, action: PayloadAction<string>) => {
            state.building_type = action.payload
        },
        setParking: (state, action: PayloadAction<string>) => {
            state.parking = action.payload
        }
    },
})

export const { actions: filterActions } = filterSlice
export const { reducer: filterReducer } = filterSlice
