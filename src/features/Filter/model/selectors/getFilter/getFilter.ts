import {StateSchema} from "app/providers/StoreProvider";

export const getFilter = (state: StateSchema) => state.filter

export const getArea_max = (state: StateSchema) => state.filter.area_max
export const getArea_min = (state: StateSchema) => state.filter.area_min
export const getFloors = (state: StateSchema) => state.filter.floors
export const getFloors_num = (state: StateSchema) => state.filter.floors_num
export const getCondition = (state: StateSchema) => state.filter.condition
export const getBalcony = (state: StateSchema) => state.filter.balcony
export const getFurniture = (state: StateSchema) => state.filter.furniture
export const getBathroom = (state: StateSchema) => state.filter.bathroom
export const getYearBuilt = (state: StateSchema) => state.filter.year_built
export const getBuildingType= (state: StateSchema) => state.filter.building_type
export const getParking= (state: StateSchema) => state.filter.parking