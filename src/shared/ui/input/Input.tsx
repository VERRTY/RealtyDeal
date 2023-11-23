import React, {
	InputHTMLAttributes,
	ReactNode,
	memo,
	useEffect,
	useRef,
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange'
>

interface InputProps extends HTMLInputProps {
	className?: string
	value?: string
	onChange?: (value: string) => void
	autofocus?: boolean
	before?: ReactNode
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		value,
		onChange,
		type = 'text',
		placeholder,
		autofocus,
		before,
		...otherProps
	} = props
	const ref = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (autofocus) {
			ref.current?.focus()
		}
	}, [autofocus])

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
	}

	return (
		<div className={classNames(cls.InputWrapper, {}, [className])}>
			{before && <div className={cls.placeholder}>{`${before}`}</div>}
			<div className={cls.caretWrapper}>
				<input
					ref={ref}
					type={type}
					value={value}
					onChange={onChangeHandler}
					className={cls.input}
					placeholder={placeholder}
					{...otherProps}
				/>
			</div>
		</div>
	)
})
