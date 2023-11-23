import { memo, useState } from 'react'
import cls from './Select.module.scss'
import { Mods, classNames } from 'shared/lib/classNames/classNames'
import { ChevronDown, XCircle } from 'lucide-react'

export interface SelectOption {
	id?: number | null
	name?: string
	short?: string
	key?: string
}

export enum SelectTheme {
	DEFAULT = 'default',
}

interface SelectProps {
	className?: string
	options?: SelectOption[]
	disabled?: boolean
	placeholder?: string
	clickedItem?: SelectOption
	changePlaceholder?: boolean
	canRemoveItem?: boolean
	listStyles?: {}
	theme?: SelectTheme
	onClick?: (e: React.ChangeEvent<HTMLSelectElement>) => void
	handleClickeItem?: (item: SelectOption) => void
	handleClickRemoveItem?: () => void
}

const Select = memo((props: SelectProps) => {
	const [open, setOpen] = useState(false)
	const handleDropdownClick = () => {
		setOpen(!open)
	}

	const {
		options,
		className,
		placeholder,
		clickedItem,
		changePlaceholder,
		listStyles,
		disabled,
		canRemoveItem,
		theme = SelectTheme.DEFAULT,
		handleClickeItem,
		handleClickRemoveItem,
		...otherProps
	} = props

	const mods: Mods = {
		[cls[theme]]: true,
		[cls.disabled]: disabled,
	}

	return (
		<div className={classNames(cls.Select, mods, [className])}>
			<button
				id='dropdownInformationButton'
				onClick={handleDropdownClick}
				className={`${cls['dropdown-button']} ${open && cls.iconOpen} `}
				disabled={disabled}
			>
				{clickedItem?.name && changePlaceholder
					? clickedItem.name
					: placeholder}
				<ChevronDown className={`${cls.icon} ${cls.iconClosed}`} />
			</button>
			{open && (
				<ul className={cls['dropdown-list']} style={listStyles}>
					{options &&
						options.map(item => (
							<li key={item.id} className={cls['dropdown-block']}>
								<div
									onClick={
										handleClickeItem && handleClickeItem.bind(null, item)
									}
									className={cls['dropdown-item']}
									style={
										item.id === clickedItem?.id
											? {
													background: '#006d39',
													color: 'white',
													fontWeight: 700,
													boxShadow:
														'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
											  }
											: {}
									}
								>
									{item.name}
								</div>
								{item.id === clickedItem?.id && canRemoveItem && (
									<XCircle
										width={18}
										cursor='pointer'
										className={cls.closeIcon}
										onClick={handleClickRemoveItem}
									/>
								)}
							</li>
						))}
				</ul>
			)}
		</div>
	)
})

export default Select
