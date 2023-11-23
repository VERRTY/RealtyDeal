import AppStores from './AppStores'
import cls from './Footer.module.scss'
import Container from 'widgets/Container/Container'
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'
import { Mail, Phone } from 'lucide-react'

const Footer = () => {
	return (
		<section className={cls.footer}>
			<AppStores />
			<Container>
				<div className={cls.footerWrap}>
					<div className={cls.footerLeft}>
						<h3 className={cls.footerTitle}>“Realty Deal”, 2023</h3>
						<p className={cls.footerText}>
							Realty Deal - ваш надежный онлайн ресурс для поиска жилых и
							коммерческих помещений, предоставляющий широкий выбор
							недвижимости, экспертные консультации и простой способ найти
							идеальное жилье или бизнес-пространство.
						</p>
						<p className={cls.footerSocialText}>Социальные сети</p>
						<ul className={cls.footerSocial}>
							<li className={cls.footerSocialLi}>
								<Instagram />
							</li>
							<li className={cls.footerSocialLi}>
								<Facebook />
							</li>
							<li className={cls.footerSocialLi}>
								<Twitter />
							</li>
							<li className={cls.footerSocialLi}>
								<Linkedin />
							</li>
						</ul>
					</div>
					<ul className={cls.footerRight}>
						<li className={cls.footerLi}>Контакты</li>
						<li className={cls.footerLi}>Условия использования</li>
						<li className={cls.footerLi}>Политика конфедециальности</li>
						<li className={cls.footerLi}>Контактная информация</li>
						<li className={cls.footerLi}>
							<Mail />
							info@realtydeal.com
						</li>
						<li className={cls.footerLi}>
							<Phone />
							+1 (123) 456-7890
						</li>
					</ul>
				</div>
			</Container>
		</section>
	)
}

export default Footer
