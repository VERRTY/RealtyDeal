import {CombinedState, configureStore, Reducer, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema, ThunkExtraArg} from "./StateSchema";
import {filterReducer} from "features/Filter";
import {$api} from "shared/api/api";
import {userReducer} from "entities/user";
import {loginReducer} from "features/Auth/model/slice/LoginSlice";
import {createReducerManager} from "./reducerManager";
import {realtyReducer} from "../../../../entities/realty";


export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {

    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        loginForm: loginReducer,
        filter: filterReducer,
        realty: realtyReducer

        // realty: realtyReducer
    };

    const reducerManager = createReducerManager(rootReducers)

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,

        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });

    //@ts-ignore
    store.reducerManager = reducerManager;
    return store;
}

// export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];