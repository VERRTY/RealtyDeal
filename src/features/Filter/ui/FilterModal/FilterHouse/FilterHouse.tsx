import {useSelector} from 'react-redux'
import {Button, ButtonTheme} from 'shared/ui/button/Button'
import cls from './FilterHouse.module.scss'
import Switcher from "../../../../../shared/ui/switcher/Switcher";
import {useState} from "react";
import {useAppDispatch} from "../../../../../shared/lib/hooks/useAppDispatch";
import {getBuildingType} from "../../../model/selectors/getFilter/getFilter";
import {filterActions} from "../../../model/slice/FilterSlice";
import {Furniture} from "../ui/Furniture/Furniture";
import {YearBuilt} from "../ui/YearBuilt/YearBuilt";
import {Parking} from "../ui/Parking/Parking";


const FilterHouse = () => {
    const dispatch = useAppDispatch()

    const [active, setActive] = useState(true);

    const buildingType = useSelector(getBuildingType)


    const handelBuildingType = (val: string) => {
        dispatch(filterActions.setBuildingType(val))
    }


    return (
        <div className={cls.filterHouse}>
            <div className={cls.filterFlatsTitle}>
                Дом
                <Switcher
                    isOn={active}
                    onToggle={() => setActive(!active)}
                    id='house'
                />
            </div>
            {active && (
                <div className={cls.filterFlatsWrapper}>
                    <div className={cls.filterFlatsSquare}>
                        <h5 className={cls.filterFlatsTitleSquare}>Год постройки</h5>
                        <div className={cls.filterFlatsInputItems}>
                            <YearBuilt/>
                        </div>
                    </div>
                    <div className={cls.filterFlatsSquare}>
                        <h5 className={cls.filterFlatsTitleSquare}>Этажей в доме</h5>
                        <div className={cls.filterFlatsInputItems}>
                            <input
                                className={cls.filterFlatsInput}
                                type='number'
                                placeholder='От'
                            />
                            <input
                                className={cls.filterFlatsInput}
                                type='number'
                                placeholder='До'
                            />
                        </div>
                    </div>
                    <div className={cls.filterFlatsItemBlog}>
                        <h5 className={cls.filterFlatsTitleSquare}>Тип дома</h5>
                        <div className={cls.filterFlatsGroupBtn}>
                            <Button theme={buildingType === 'кирпичный' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                                    onClick={() => handelBuildingType('кирпичный')}
                                    className={cls.filterFlatsBtn}>Кирпичный</Button>
                            <Button theme={buildingType === 'монолитный' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                                    onClick={() => handelBuildingType('монолитный')}
                                    className={cls.filterFlatsBtn}>Монолитный</Button>
                            <Button theme={buildingType === 'панельный' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                                    onClick={() => handelBuildingType('панельный')}
                                    className={cls.filterFlatsBtn}>Панельный</Button>
                            <Button theme={buildingType === 'сэндвич-панели' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                                    onClick={() => handelBuildingType('сэндвич-панели')} className={cls.filterFlatsBtn}>
                                Сэндвич-панели
                            </Button>
                            <Button theme={buildingType === 'пеноблочный' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                                    onClick={() => handelBuildingType('пеноблочный')}
                                    className={cls.filterFlatsBtn}>Пеноблочный</Button>
                            <Button theme={buildingType === 'деревянный' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                                    onClick={() => handelBuildingType('деревянный')}
                                    className={cls.filterFlatsBtn}>Деревянный</Button>
                            <Button
                                theme={buildingType === 'каркасно-щитовой' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                                onClick={() => handelBuildingType('каркасно-щитовой')}
                                className={cls.filterFlatsBtn}>Каркасно-щитовой</Button>
                            <Button theme={buildingType === 'шлакоблочный' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                                    onClick={() => handelBuildingType('шлакоблочный')}
                                    className={cls.filterFlatsBtn}>Шлакоблочный</Button>
                            <Button theme={buildingType === 'другое' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                                    onClick={() => handelBuildingType('другое')}
                                    className={cls.filterFlatsBtn}>Другое</Button>
                        </div>
                    </div>

                    <div className={cls.filterFlatsItemBlog}>
                        <h5 className={cls.filterFlatsTitleSquare}>Парковка</h5>
                        <div className={cls.filterFlatsGroupBtn}>
                            <Parking/>
                        </div>
                    </div>

                    <div className={cls.filterFlatsItemBlog}>
                        <h5 className={cls.filterFlatsTitleSquare}>Мебель</h5>
                        <div className={cls.filterFlatsGroupBtn}>
                            {/*<Button className={cls.filterFlatsBtn}>Да</Button>*/}
                            {/*<Button className={cls.filterFlatsBtn}>Нет</Button>*/}
                            <Furniture/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FilterHouse
