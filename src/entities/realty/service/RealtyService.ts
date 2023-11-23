import {createAsyncThunk} from '@reduxjs/toolkit'
import {StateSchema, ThunkConfig} from 'app/providers/StoreProvider/config/StateSchema'
import {IRealty} from '../types/realty'
import {FilterSchema} from "../../../features/Filter";

export const getRealtyService = createAsyncThunk<IRealty[],
    // filterStateProps,
    null,
    ThunkConfig<string>>('realty', async (filterState, thunkApi) => {
    console.log(filterState)

    const {extra, dispatch, rejectWithValue} = thunkApi
    const currentState = <StateSchema>thunkApi.getState()
    const {
        rooms,
        max_price,
        min_price,
        deal_type,
        street,

        area_max,
        area_min,
        floors,
        floors_num,
        condition,
        balcony,
        furniture,
        bathroom,
        year_built,
        building_type,
        parking,
    } = currentState.filter

    try {
        // const realtyTypeKeys = Object.keys(filterState.realtyType)
        // const selectedRealtyTypeKey = realtyTypeKeys.find(
        // 	//@ts-ignore
        // 	key => filterState.realtyType[key].active
        // )

        // console.log(selectedRealtyTypeKey, 'from service')

        // const response = await extra.api.get(
        // 	`/real-estate/?deal_type=${
        // 		selectedRealtyTypeKey ? selectedRealtyTypeKey : ''
        // 	}`
        // )

        const response = await extra.api.get<IRealty[]>('/real-estate/', {
            params: <FilterSchema>{
                rooms: rooms,
                max_price,
                min_price,
                deal_type,
                street,

                area_max,
                area_min,
                floors,
                floors_num,
                condition,
                balcony,
                furniture,
                bathroom,
                year_built,
                building_type,
                parking,
            }
        })
        if (!response.data) {
            throw new Error();
        }
        // dispatch(realtyActions.setData(response.data))
        // extra.navigate?.(RoutePath.realties)
        return response.data
    } catch (e) {
        return rejectWithValue('error')
    }
})
