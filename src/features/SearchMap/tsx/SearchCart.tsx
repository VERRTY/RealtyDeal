import { Button } from 'shared/ui/button/Button'
import cls from './SearchCart.module.scss'

const SearchByMap = () => {
	return (
		<div className={cls.SearchCart}>
			<h2>Поиск по карте</h2>
			<p>Ищите недвижимость на карте и найдите свой идеальный дом или бизнес</p>
			<div>
				<Button className={cls.searchButton}>Найти на карте</Button>
			</div>
		</div>
	)
}
export default SearchByMap
