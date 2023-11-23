import { AdvertBg } from '../../shared/images'
import { Button, ButtonTheme } from 'shared/ui/button/Button'
import { motion } from 'framer-motion'
import cls from './Advertising.module.scss'

const Banner = () => {
	return (
		<div className={cls.banner}>
			<AdvertBg />
			<motion.div
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ ease: 'easeOut', duration: 1.5 }}
				className={cls.bannerItems}
			>
				<h3 className={cls.bannerTitle}>
					Максимальный комфорт в <br />
					коммерческой недвижимости
				</h3>
				<Button className={cls.bannerBtn} theme={ButtonTheme.TONAL}>
					Подробнее
				</Button>
			</motion.div>
		</div>
	)
}

export default Banner
