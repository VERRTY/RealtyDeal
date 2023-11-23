import {Button} from 'shared/ui/button/Button'
import cls from './FilterModal.module.scss'
import FilterHouse from "./FilterHouse/FilterHouse";
import FilterFlats from "./FilterFlats/FilterFlats";
import {useSelector} from "react-redux";
import {getDeelType} from "../../model/selectors/getTealtyType/getTealtyTypeKey";
import FilterCommerce from "./FilterCommerce/FilterCommerce";
import {RoutePath} from "app/providers/router";
import {AppLink} from "shared/ui/appLink/AppLink";
import {getRealtyService} from "entities/realty";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";

interface FilterModalProps {
    changeModalState: () => void
}

const FilterModal = (props: FilterModalProps) => {
    const dispatch = useAppDispatch()
    const {changeModalState} = props

    const dealType = useSelector(getDeelType)

    function handleShowRealty() {
        dispatch(getRealtyService(null))
    }


    return (
        <section className={cls.filterModal}>
            <div className={cls.filter}>
                <div className={cls.filterModalClose}>
                    <h1 className={cls.filterTitle}>Расширенные фильтры</h1>
                    <Button className={cls.filterClose} onClick={changeModalState}>
                        &times;
                    </Button>
                </div>
                <div className={cls.filterFineHousing}>
                    <div className={cls.filterInfoText}>
                        <h3 className={cls.filterInfoTitle}>
                            Подбор идеального жилья — это просто с нами
                        </h3>
                        <p className={cls.filterText}>
                            Сэкономьте свое драгоценное время и усилия, доверьте
                            профессионалам. Мы поможем вам подобрать идеальное жилье,
                            полностью соответствующее вашим критериям.
                        </p>
                    </div>
                    <div className={cls.filterBlogBtn}>
                        <Button className={cls.filterBtn}>Найти моё жильё</Button>
                    </div>
                </div>
                <div className={cls.filterCellType}>

                    {/*{cellTypeArray.map(cellType => (*/}
                    {/*	<div*/}
                    {/*		onClick={handleClickCellType.bind(null, cellType.title)}*/}
                    {/*		key={cellType.title}*/}
                    {/*		className={`${cls.singleCellType} ${*/}
                    {/*			cellType.active ? cls.activeCellType : ''*/}
                    {/*		}`}*/}
                    {/*	>*/}
                    {/*		{cellType.active && (*/}
                    {/*			<svg*/}
                    {/*				xmlns='http://www.w3.org/2000/svg'*/}
                    {/*				width='19'*/}
                    {/*				height='18'*/}
                    {/*				viewBox='0 0 19 18'*/}
                    {/*			>*/}
                    {/*				<path d='M7.41662 12.1275L4.28912 9L3.22412 10.0575L7.41662 14.25L16.4166 5.25L15.3591 4.1925L7.41662 12.1275Z' />*/}
                    {/*			</svg>*/}
                    {/*		)}*/}
                    {/*		{cellType.title}*/}
                    {/*	</div>*/}
                    {/*))}*/}
                </div>
                {dealType === 'apartment' &&
                    <FilterFlats/>
                }
                {dealType === 'house' &&
                    <FilterHouse/>
                }
                {dealType === 'commercial' &&
                    <FilterCommerce/>
                }
                {/*<FilterLocation />*/}
                <AppLink to={`${RoutePath.realties}`} className={cls.filterLocationShowBtn}>
                    <Button className={cls.filterBtn} onClick={handleShowRealty}>
                        Показать
                    </Button>
                </AppLink>
            </div>
        </section>
    )
}

export default FilterModal
