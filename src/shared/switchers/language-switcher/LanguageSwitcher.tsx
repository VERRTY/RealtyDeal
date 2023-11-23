import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/button/Button'
import cls from './LanguageSwitcher.module.scss'
import Select, { SelectOption } from 'shared/ui/select/Select'

export enum LangSwitcherTypeEnum {
	SELECT = 'select',
	BUTTON = 'button',
}

interface LangSwitcherProps {
	className?: string
	type?: LangSwitcherTypeEnum
}

const optionsLang: SelectOption[] = [
	{ id: 1, short: 'ru', name: 'Русский' },
	{ id: 2, short: 'en', name: 'English' },
]

const LangSwitcher: React.FC<LangSwitcherProps> = ({
	className,
	type = LangSwitcherTypeEnum.BUTTON,
}) => {
	const { t, i18n } = useTranslation()
	const [activeLang, setActiveLang] = useState<SelectOption>(
		i18n.language === 'ru' ? optionsLang[0] : optionsLang[1]
	)

	const toggle = async () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	const handleItemClick = (item: SelectOption) => {
		i18n.changeLanguage(item.short)
	}

	useEffect(() => {
		setActiveLang(i18n.language === 'ru' ? optionsLang[0] : optionsLang[1])
	}, [i18n.language])

	return type === LangSwitcherTypeEnum.SELECT ? (
		// <div style={{ width: '130px' }}>
		<Select
			listStyles={{ position: 'absolute' }}
			options={optionsLang}
			placeholder='Рус/Eng'
			handleClickeItem={handleItemClick}
			clickedItem={activeLang}
			changePlaceholder={false}
			className={cls.swithcerSel}
		/>
	) : (
		// </div>
		<Button
			className={classNames(cls.LangSwitcher, {}, [className])}
			theme={ButtonTheme.TONAL}
			onClick={toggle}
		>
			{t('Язык')}
		</Button>
	)
}

export default LangSwitcher
