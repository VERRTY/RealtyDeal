import { HouseDef, SmallHome } from 'shared/images'
import cls from './NewsBlock.module.scss'

const NewsBlock = () => {
	return (
		<div className={cls.news}>
			<p>Новости/Блог</p>
			<div className={cls.newsBlock}>
				<div className={cls.firstNews}>
					<HouseDef />
					<div className={cls.date}>
						<div>18 сентября</div>
						<div>Советы</div>
					</div>
					<p className={cls.descript}>
						Сдача в аренду жилого помещения: Искусство нахождения идеальных
						арендаторов
					</p>
				</div>
				<div className={cls.secondNews}>
					<div className={cls.smallNews}>
						<SmallHome />
						<p>
							Секреты Успешной Покупки и Продажи Жилья: Как сделать правильный
							выбор
						</p>
					</div>
					<div className={cls.smallNews}>
						<SmallHome />
						<p>
							Секреты Успешной Покупки и Продажи Жилья: Как сделать правильный
							выбор
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewsBlock
