import { Button } from 'shared/ui/button/Button'
import cls from './AdBlock.module.scss'

const AdBlock = () => {
	return (
		<div className={cls.AdBlock}>
			<div className={cls.infoBlock}>
				<h2>ЖК “Дружба”</h2>
				<div className={cls.desc}>
					Откройте дверь в будущее с нашей новостройкой, где комфорт и
					современный дизайн соединились в одном месте.
				</div>
				<Button className={cls.showButton}>Смотреть</Button>
			</div>
		</div>
	)
}

export default AdBlock
