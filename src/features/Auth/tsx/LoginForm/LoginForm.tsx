import {getLoginError} from 'features/Auth/model/selectors/getLoginError'
import {getLoginIsLoading} from 'features/Auth/model/selectors/getLoginIsLoading'
import {getLoginPassword} from 'features/Auth/model/selectors/getLoginPassword'
import {getLoginUsername} from 'features/Auth/model/selectors/getLoginUsername'
import {loginByUsername} from 'features/Auth/model/service/LoginService'
import {memo, useCallback} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {classNames} from 'shared/lib/classNames/classNames'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {Button, ButtonTheme} from 'shared/ui/button/Button'
import {Input} from 'shared/ui/input/Input'
import {loginActions} from '../../model/slice/LoginSlice'
import cls from './LoginForm.module.scss'

export interface LoginFormProps {
	className?: string
	onSuccess: () => void
}


const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
	const { t } = useTranslation()
	const dispatch = useAppDispatch()
	const username = useSelector(getLoginUsername)
	const password = useSelector(getLoginPassword)
	const isLoading = useSelector(getLoginIsLoading)
	const error = useSelector(getLoginError)

	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(loginActions.setUserName(value))
		},
		[dispatch]
	)

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value))
		},
		[dispatch]
	)

	const onLoginClick = useCallback(async () => {
		const result = await dispatch(loginByUsername({ username, password }))

		if (result.meta.requestStatus === 'fulfilled') {
			onSuccess()
		}
	}, [onSuccess, dispatch, password, username])

	return (
			<div className={classNames(cls.LoginForm, {}, [className])}>
				<Input
					autofocus
					type='text'
					className={cls.input}
					placeholder={t('Введите username')}
					onChange={onChangeUsername}
					value={username}
				/>
				<Input
					type='text'
					className={cls.input}
					placeholder={t('Введите пароль')}
					onChange={onChangePassword}
					value={password}
				/>
				<Button
					className={cls.loginBtn}
					theme={ButtonTheme.TONAL}
					onClick={onLoginClick}
					disabled={isLoading}
				>
					{t('Войти')}
				</Button>
			</div>
	)
})

export default LoginForm
