import Container from 'widgets/Container/Container'
import Banner from './Banner'
import { advertisingData, advertisingInfoData } from './data'
import { motion } from 'framer-motion'
import cls from './Advertising.module.scss'

const Advertising = () => {
	return (
		<section className={cls.advert}>
			<Container>
				<div className={cls.advertWrap}>
					<Banner />
					<div className={cls.advertItems}>
						{advertisingData.map((item, index) => (
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ duration: 0.5, ease: 'easeOut' }}
								className={cls.advertItem}
								key={item.id}
							>
								<div className={cls.advertImage}>{item.image}</div>
								<div className={cls.advertInfo}>
									<h4 className={cls.advertTitle}>{item.title}</h4>
									<ul className={cls.advertUl}>
										{item.list.map((listItem, index) => (
											<li className={cls.advertText} key={index}>
												{listItem.item}{' '}
												<span className={cls.advertTotal}>
													{listItem.price}
												</span>
											</li>
										))}
									</ul>
								</div>
							</motion.div>
						))}

						{advertisingInfoData.map((item, index) => (
							<motion.div
								initial={{ opacity: 0, x: 150 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 2 }}
								className={`${cls.advertItem} ${cls.advertItemInfo1}`}
								key={item.id}
							>
								<div className={`${cls.advertInfo} ${cls.advertInfoTitle}`}>
									<h4 className={cls.advertTitle}>{item.title1}</h4>
									<h4 className={cls.advertTitle}>{item.title2}</h4>
									<ul className={`${cls.advertUl} ${cls.advertInfoList}`}>
										{item.list1.map((listItem, index) => (
											<li className={cls.advertText} key={index}>
												{listItem.item}{' '}
												<span className={cls.advertTotal}>
													{listItem.price}
												</span>
											</li>
										))}
									</ul>
									<ul className={cls.advertUl}>
										{item.list2.map((listItem, index) => (
											<li className={cls.advertText} key={index}>
												{listItem.item}{' '}
												<span className={cls.advertTotal}>
													{listItem.price}
												</span>
											</li>
										))}
									</ul>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Advertising
