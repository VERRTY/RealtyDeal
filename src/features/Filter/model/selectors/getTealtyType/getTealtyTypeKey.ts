import {StateSchema} from "app/providers/StoreProvider";

export const getDeelType = (state: StateSchema) => state.filter.deal_type || "house"