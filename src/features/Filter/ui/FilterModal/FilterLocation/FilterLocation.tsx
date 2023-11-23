import { Button, ButtonTheme } from 'shared/ui/button/Button'
import cls from './FilterLocation.module.scss'

const FilterLocation = () => {
	return (
		<div className={cls.filterLocation}>
			<h2 className={cls.filterFlatsTitle}>Расположение</h2>
			<div className={cls.filterFlatsWrapper}>
				<div className={cls.filterFlatsItemBlog}>
					<h5 className={cls.filterFlatsTitleSquare}>На карте</h5>
					<div className={cls.filterFlatsGroupBtn} style={{ width: '180px' }}>
						<Button className={cls.filterFlatsBtn} theme={ButtonTheme.ELEVANT}>
							Обвести на карте
						</Button>
					</div>
				</div>

				<div className={cls.filterFlatsItemBlog}>
					<h5 className={cls.filterFlatsTitleSquare}>Рядом</h5>
					<div className={cls.filterFlatsGroupBtn}>
						<Button className={cls.filterFlatsBtn}>Парк</Button>
						<Button className={cls.filterFlatsBtn}>Школа</Button>
						<Button className={cls.filterFlatsBtn}>Детский сад</Button>
						<Button className={cls.filterFlatsBtn}>Торговый центр</Button>
						<Button className={cls.filterFlatsBtn}>Остановка</Button>
						<Button className={cls.filterFlatsBtn}>Аптека</Button>
						<Button className={cls.filterFlatsBtn}>Спорт зал</Button>
						<Button className={cls.filterFlatsBtn}>Мечеть</Button>
					</div>
				</div>
				<div className={cls.filterFlatsCheckbox}>
					<label>
						<input type='checkbox' />
						От хозяев
					</label>
					<label>
						<input type='checkbox' />С фото
					</label>
					<label>
						<input type='checkbox' />
						От агенство
					</label>
					<label>
						<input type='checkbox' />
						Новостройки
					</label>
				</div>
			</div>
		</div>
	)
}

export default FilterLocation
