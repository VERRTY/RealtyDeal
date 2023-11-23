import React, { memo, useContext } from 'react'
import cls from './Switcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeContext } from 'app/providers/themes/lib/ThemeContext'
import { Camera, Check, X } from 'lucide-react'

export enum SwitcherTheme {
	COLORED = 'colored',
	NONECOLOR = 'noneColor',
}

interface SwitcherProps {
	isOn: boolean
	theme?: SwitcherTheme
	disabled?: boolean
	icon?: boolean
	className?: string
	onToggle: () => void
	id: string
}

const Switcher = memo((props: SwitcherProps) => {
	const themeData = useContext(ThemeContext)

	const initialButtonColor = themeData.theme === 'dark' ? '#cbd5e1' : '#717971'
	const initialLabelColor = themeData.theme === 'dark' ? '#8B938A' : '#E1E3E3'

	const {
		theme = SwitcherTheme.COLORED,
		isOn,
		disabled,
		icon,
		className,
		onToggle,
		id,
	} = props

	const mods = {
		[cls[theme]]: true,
		[cls.disabled]: disabled,
	}

	return (
		<>
			<input
				checked={isOn}
				className={classNames(cls.switchCheckbox, mods, [className])}
				id={`react-switch-new${id}`}
				type='checkbox'
				key={1}
				onChange={onToggle}
				disabled={disabled}
			/>
			<label
				style={!isOn ? { background: initialLabelColor } : {}}
				className={classNames(cls.switchLabel, mods)}
				htmlFor={`react-switch-new${id}`}
			>
				<span
					style={!isOn ? { background: initialButtonColor } : {}}
					className={classNames(cls.SwitchButton, {
						[cls.colored]: isOn,
					})}
				>
					{!isOn && icon && (
						<X width={16} height={16} color={initialLabelColor} />
					)}
					{isOn && icon && (
						<Check width={16} height={16} className={cls.iconDone} />
					)}
				</span>
			</label>
		</>
	)
})

export default Switcher
