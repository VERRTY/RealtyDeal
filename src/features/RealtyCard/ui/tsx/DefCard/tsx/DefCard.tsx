import ImageCarusel from 'features/RealtyCard/ui/components/ImageCarusel/ImageCarusel'
import { Heart, Phone } from 'lucide-react'
import { Button, ButtonTheme } from 'shared/ui/button/Button'
import cls from './DefCard.module.scss'
import { useState } from 'react'
import Status from 'features/RealtyCard/ui/components/Status/Status'

const DefCard = () => {
	const images = [
		{
			id: 1,
			image:
				'https://i.pinimg.com/474x/9d/de/7d/9dde7d1e8abbf972b4d815d41aeb5284.jpg',
		},
		{
			id: 2,
			image:
				'https://i.pinimg.com/474x/46/c3/ae/46c3aef61f085e63691c0c975c62d8b7.jpg',
		},
		{
			id: 3,
			image:
				'https://i.pinimg.com/474x/b3/7a/cb/b37acb2d24cbf66c1a8fa7fb63c70d4e.jpg',
		},
		{
			id: 4,
			image:
				'https://i.pinimg.com/474x/a4/e6/59/a4e659a6594b5504f51b17d43091e813.jpg',
		},
		{
			id: 5,
			image:
				'https://i.pinimg.com/474x/1e/47/19/1e47190c06d78fa237e54dd041dc2f52.jpg',
		},
		{
			id: 6,
			image:
				'https://i.pinimg.com/474x/1e/47/19/1e47190c06d78fa237e54dd041dc2f52.jpg',
		},
	]

	const [isHovered, setIsHovered] = useState(false)
	const [isLiked, setIsLiked] = useState(false)

	return (
		<div
			className={cls.DefCard}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className={cls.imageBlock}>
				<Status className={cls.status} status='Top' />
				<Heart
					cursor='pointer'
					className={isLiked ? cls.likedHeart : cls.defHeart}
					onClick={() => setIsLiked(!isLiked)}
					fill={isLiked ? ' var(--matrial-theme-def-green)' : 'none'}
				/>
				{isHovered ? (
					<ImageCarusel images={images} isLiked={isLiked} />
				) : (
					<img className={cls.image} src={images[0].image} alt='image' />
				)}
			</div>

			<div className={cls.infoBlock}>
				<div className={cls.info}>
					<p className={cls.price}>250 000 тг</p>
					<p className={cls.dataInf}>
						<label className={cls.rooms}>2-комнт.кв |</label> 68 м2 <>|</> 4/12
						эт.{' '}
					</p>
					<p className={cls.street}>ЖК Айва, ул. Акбулак 22, р-н Нура</p>
				</div>
				<Button className={cls.call} theme={ButtonTheme.OUTLINE}>
					<Phone className={cls.phone} size={'14px'} />
					Позвонить
				</Button>
			</div>
		</div>
	)
}

export default DefCard
