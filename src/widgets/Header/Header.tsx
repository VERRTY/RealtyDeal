import { RoutePath } from 'app/providers/router'
import { Heart, MapPin, Plus, UserCircle2 } from 'lucide-react'
import LangSwitcher, {
	LangSwitcherTypeEnum,
} from 'shared/switchers/language-switcher/LanguageSwitcher'
import { AppLink } from 'shared/ui/appLink/AppLink'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/button/Button'
import Container from 'widgets/Container/Container'
import cls from './Header.module.scss'
import {ThemeSwitcher} from "../../shared/switchers/theme-switcher/ThemeSwitcher";

const Header = () => {
	return (
		<header className={cls.header}>
			<Container>
				<div className={cls.headerItems}>
					<div className={cls.headerRight}>
						<AppLink to={`${RoutePath.main}`}>
							<h2 className={cls.headerLogo}>Logo</h2>
						</AppLink>

						<AppLink to={`#`}>
							<Button
								className={cls.headerBut}
								theme={ButtonTheme.OUTLINE}
								size={ButtonSize.L}
							>
								<MapPin />
								<p>Бишкек</p>
							</Button>
						</AppLink>
					</div>

					<div className={cls.headerLeft}>
						<div className={cls.headerLangItems}>
							<LangSwitcher type={LangSwitcherTypeEnum.SELECT} />
							{/* <p className={cls.headerLangChange}>Pyc/Eng</p>
						<ChevronDown className={cls.headerChevron} /> */}
						</div>
						<div className={cls.headerHeart}>
							<Heart />
						</div>
						<ThemeSwitcher/>

						<Button className={cls.headerAdd} theme={ButtonTheme.OUTLINE}>
							<Plus />
							<p>Добавить объявление</p>
						</Button>
						<Button className={cls.headerUserBut}>
							<UserCircle2 />
							<p>Войти</p>
						</Button>
					</div>
				</div>
			</Container>
		</header>
	)
}

export default Header
