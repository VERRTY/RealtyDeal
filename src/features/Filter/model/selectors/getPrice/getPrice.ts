import {StateSchema} from "app/providers/StoreProvider";

export const getMaxPrice = (state: StateSchema) => state.filter.max_price
export const getMinPrice = (state: StateSchema) => state.filter.min_price