import {dealType} from 'shared/const/dealType'
import cls from './SmallFilter.module.scss'
import Select from 'shared/ui/select/Select'
import {Button} from 'shared/ui/button/Button'
import {AppLink} from 'shared/ui/appLink/AppLink'
import {RoutePath} from 'app/providers/router'
import {Rooms} from "../../Rooms/Rooms";
import {Cost} from "../../Сost/Сost";
import {Street} from "../../Address/Street";
import {getRealtyService} from "../../../../../entities/realty";
import {useAppDispatch} from "../../../../../shared/lib/hooks/useAppDispatch";
import {DealTypeSelect} from "../../DealTypeSelect/DealTypeSelect";

const SmallFilter = () => {

	const dispatch = useAppDispatch()
	function handleShowRealty() {
		dispatch(getRealtyService(null))
	}
	return (
		<div className={cls.smallFilter}>
			<div className={cls.dealType}>
				<DealTypeSelect/>
			</div>
			<Rooms/>
			<Cost/>
			<Street/>
			<AppLink to={`${RoutePath.realties}`} className={cls.showBtn}>
				<Button
					className={cls.searchButton}
					onClick={handleShowRealty}
				>
					Показать
				</Button>
			</AppLink>
		</div>
	)
}

export default SmallFilter
