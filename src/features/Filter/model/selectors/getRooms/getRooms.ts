import {StateSchema} from "app/providers/StoreProvider";

export const getRooms = (state: StateSchema) => state.filter.rooms