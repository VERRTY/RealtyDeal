import {
	AppStoreSVG,
	GallerySVG,
	GoogleStoreSVG,
	QRCodeSVG,
} from 'shared/images'
import Container from 'widgets/Container/Container'
import cls from './Footer.module.scss'

const AppStores = () => {
	return (
		<div className={cls.footerStore}>
			<Container>
				<div className={cls.footerStoreItems}>
					<div className={cls.footerStoreCode}>
						<QRCodeSVG />
						<p className={cls.footerStoreText}>
							Наведите камеру телефона <br />
							на код, чтобы быстро <br />
							скачать приложение
						</p>
					</div>
					<div className={cls.footerAppStore}>
						<AppStoreSVG />
						<GoogleStoreSVG />
						<GallerySVG />
					</div>
				</div>
			</Container>
		</div>
	)
}

export default AppStores
