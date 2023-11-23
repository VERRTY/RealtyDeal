import {RoutePath} from 'app/providers/router'
// import { changeRealtyType } from 'entities/filter/model/slice/FilterSlice'
import {motion} from 'framer-motion'
import {useState} from 'react'
import {FilterIcon} from 'shared/images'
import {AppLink} from 'shared/ui/appLink/AppLink'
import {Button, ButtonTheme} from 'shared/ui/button/Button'
import {getRealtyService} from 'entities/realty'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {Street} from '../../Address/Street'
import {DealType} from '../../DealType/DealType'
import {Rooms} from '../../Rooms/Rooms'
import {TypeBlock} from '../../TypeBlock/TypeBlock'
import {Cost} from '../../Сost/Сost'
import cls from './MainFilter.module.scss'
import FilterModal from "../../FilterModal/FilterModal";

const MainFilter = () => {
	const dispatch = useAppDispatch()
	const [activeType, setActiveType] = useState(1)
	const [openFilterModal, setOpenFilterModal] = useState(false)

	function changeActiveType(id: number) {
		setActiveType(id)
	}

	function changeModalState() {
		setOpenFilterModal(!openFilterModal)
	}

	function handleShowRealty() {
		dispatch(getRealtyService(null))
	}

	return (
		<>
			{openFilterModal && <FilterModal changeModalState={changeModalState} />}

			<div className={cls.MainFilter}>
				<motion.h1
					initial={{ opacity: 0, y: -100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }}
				>
					Продать и купить недвижимость в Кыргызстане
				</motion.h1>
				<motion.div
					initial={{ opacity: 0, y: -100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.5 }}
					className={cls.filterBlock}
				>
					<TypeBlock
						changeActiveType={(id: number) => changeActiveType(id)}
						activeType={activeType}
					/>

					<div className={cls.sortBlock}>
						<div className={cls.firstCategory}>
							<DealType />
							<Button theme={ButtonTheme.TEXT} onClick={changeModalState}>
								<FilterIcon className={cls.filterIcon} />
							</Button>
						</div>
						<div className={cls.secondCategory}>
							<Rooms />
							<Cost />
							<Street className={cls.roomsCategorySolo} />
							<div className={cls.roomsCategorySolo}>
								<Button theme={ButtonTheme.ELEVANT} className={cls.choseInMap}>
									Обвести на карте
								</Button>
							</div>
						</div>
					</div>
					<div className={cls.actionBlock}>
						<Button className={cls.createButton} theme={ButtonTheme.TONAL}>
							Сдать/Продать
						</Button>
						<AppLink to={`${RoutePath.realties}`}>
							<Button className={cls.searchButton} onClick={handleShowRealty}>
								Показать
							</Button>
						</AppLink>
					</div>
				</motion.div>
			</div>
		</>
	)
}

export default MainFilter
