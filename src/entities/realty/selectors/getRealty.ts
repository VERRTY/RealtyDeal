import {StateSchema} from "app/providers/StoreProvider";

export const realtyState = (state: StateSchema) => state?.realty?.realtyArr
export const getRealtyLoading = (state: StateSchema) => state?.realty?.isLoading

export const realtyStateLoading = (state: StateSchema) =>
	state?.realty?.isLoading
