import {FilterSchema} from "features/Filter";
import {AxiosInstance} from "axios";
import {NavigateOptions, To} from "react-router-dom";
import {RealtySchema} from "../../../../entities/realty";
import {UserSchema} from "../../../../entities/user";
import {LoginSchema} from "../../../../features/Auth";
import {AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";


export interface StateSchema {
    user: UserSchema,
    filter: FilterSchema,
    loginForm: LoginSchema,
    realty: RealtySchema,

    //асинхронные
}

export type StateSchemaKey = keyof StateSchema

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
}

export interface ReducerManager{
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager;
}


