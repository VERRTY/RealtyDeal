export const DynamicModuleLoader = ''
// import { Reducer } from '@reduxjs/toolkit'
// import {
// 	ReduxStoreWithManager,
// 	StateSchemaKey,
// } from 'app/providers/StoreProvider/config/StateSchema'
// import { FC, ReactNode, useEffect } from 'react'
// import { useDispatch, useStore } from 'react-redux'
//
// export type ReducersList = {
// 	[name in StateSchemaKey]?: Reducer
// }
//
// type ReducersListEntry = [StateSchemaKey, Reducer]
//
// interface DynamicModuleLoaderProps {
// 	reducers: ReducersList
// 	removeAfterUnmount?: boolean
// 	children: ReactNode
// }
//
// export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = props => {
// 	const { children, reducers, removeAfterUnmount } = props
//
// 	const store = useStore() as ReduxStoreWithManager
// 	const dispatch = useDispatch()
//
// 	useEffect(() => {
// 		//@ts-ignore
// 		Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
// 			store.reducerManager.add(name, reducer)
// 			dispatch({ type: `@INIT ${name} reducer` })
// 		})
//
// 		return () => {
// 			if (removeAfterUnmount) {
// 				Object.entries(reducers).forEach(
// 					//@ts-ignore
// 					([name, reducer]: ReducersListEntry) => {
// 						store.reducerManager.remove(name)
// 						dispatch({ type: `@DESTROY ${name} reducer` })
// 					}
// 				)
// 			}
// 		}
// 	}, [])
//
// 	return <>{children}</>
// }
