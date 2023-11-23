import React, { useState } from 'react'
import { Button, ButtonTheme } from 'shared/ui/button/Button'
import { Fire, ImgInfo } from '../../../../../shared/images/index'
import { ChevronUp, Heart } from 'lucide-react'
import cls from './InfoCard.module.scss'
import { IRealty } from 'entities/realty'

interface InfoCardProps {
	realty: IRealty
}

const InfoCard = (props: InfoCardProps) => {
	const { realty } = props
	console.log(realty)

	const [isLiked, setIsLiked] = useState(false)
	const [showMore, setShowMore] = useState(false)

	return (
		<div className={cls.infoCard}>
			<div className={cls.wrapper}>
				<div className={cls.image}>
					<ImgInfo />
				</div>
				<div className={cls.details}>
					<div className={cls.items}>
						<span className={cls.price}>
							{realty.buy_sell_price?.price} com
						</span>
						<div className={cls.btns}>
							<div>
								<Button className={cls.heartBtn}>
									<Heart
										className={isLiked ? cls.likedHeart : cls.defHeart}
										onClick={() => setIsLiked(!isLiked)}
										fill={isLiked ? ' var(--matrial-theme-def-green)' : 'none'}
									/>
									В избранное
								</Button>
							</div>
							<Button
								onClick={() => setShowMore(!showMore)}
								className={cls.dotsInfo}
							>
								<span>&#8226;</span>
								<span>&#8226;</span>
								<span>&#8226;</span>
							</Button>
						</div>

						<div
							className={showMore ? cls.additionalInfo : cls.additionalInfoNone}
						>
							<div className={cls.additionalInfoText}>
								<p className={cls.infoText}>Написать заметку</p>
								<p className={cls.infoText}>Скопировать ссылку</p>
								<p className={cls.infoText}>Пожаловаться</p>
							</div>
						</div>
					</div>
					<div className={cls.cardFullDesc}>
						<p className={cls.cardText}>4 - ком, 5 этаж, 153 кв2 </p>
						<p className={cls.cardText}>
							<strong>
								{realty.location.street}, {realty.location.district}
							</strong>
						</p>
						<div className={cls.btns}>
							<Button className={cls.cardBtn} theme={ButtonTheme.TONAL}>
								Парк
							</Button>
							<Button className={cls.cardBtn} theme={ButtonTheme.TONAL}>
								Школа
							</Button>
							<Button className={cls.cardBtn} theme={ButtonTheme.TONAL}>
								Торговый центр
							</Button>
							<Button className={cls.cardBtn} theme={ButtonTheme.TONAL}>
								Аптека
							</Button>
						</div>
					</div>
					<div className={cls.btnText}>
						<Button theme={ButtonTheme.TEXT}>{realty.author}</Button>
					</div>
					<div className={cls.contactBtns}>
						<Button className={cls.topBtn}>
							Top{' '}
							<span>
								{' '}
								<ChevronUp />
							</span>
						</Button>
						<Fire className={cls.fire} />
						<Button className={cls.callBtn}>Позвонить</Button>
						<Button className={cls.whatsAppBtn}>Перейти в Whatsapp</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default InfoCard
