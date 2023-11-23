import { createAsyncThunk } from '@reduxjs/toolkit'
import { User, userActions } from 'entities/user'
import toast from 'react-hot-toast'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import {ThunkConfig} from "../../../../app/providers/StoreProvider/config/StateSchema";

interface LoginByUsernameProps {
	username: string
	password: string
}

export const loginByUsername = createAsyncThunk<
	User,
	LoginByUsernameProps,
	ThunkConfig<string>
>(
	'login/loginByUsername',

	async (authData, thunkApi) => {
		const { extra, dispatch, rejectWithValue } = thunkApi

		try {
			const response = await extra.api.post('/login/', authData)

			if (response.status >= 400) {
				toast.error(`${response.data.message}`)
				throw new Error()
			}

			localStorage.setItem(
				USER_LOCALSTORAGE_KEY,
				JSON.stringify(response.data.token)
			)
			dispatch(userActions.setAuthData(response.data))
			return response.data
		} catch (e) {
			console.log(e)
			return rejectWithValue('error')
		}
	}
)
