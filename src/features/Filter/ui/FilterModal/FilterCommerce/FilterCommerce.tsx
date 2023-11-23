import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import Switcher from 'shared/ui/switcher/Switcher'
import cls from './FilterCommerce.module.scss'
import {useState} from "react";
import {YearBuilt} from "../ui/YearBuilt/YearBuilt";
import {Condition} from "../ui/Condition/Condition";
import {Parking} from "../ui/Parking/Parking";
import {Furniture} from "../ui/Furniture/Furniture";


const FilterCommerce = () => {
    const [active, setActive] = useState(true);

    const dispatch = useAppDispatch()


    return (
        <div className={cls.filterCommerce}>
            <div className={cls.filterCommerceTitle}>
                Коммерческое
                <Switcher
                    isOn={active}
                    onToggle={() => setActive(!active)}
                    id='house'
                />
            </div>
            {active && (
                <div className={cls.filterCommerceWrapper}>
                    <div className={cls.filterCommerceSquare}>
                        <p className={cls.filterCommerceTitleSquare}>Год постройки</p>
                        <div className={cls.filterCommerceInputItems}>
                            <YearBuilt/>
                        </div>
                    </div>
                    <div className={cls.filterCommerceSquare}>
                        <p className={cls.filterCommerceTitleSquare}>Этажей в офисе</p>
                        <div className={cls.filterCommerceInputItems}>
                            <input
                                className={cls.filterCommerceInput}
                                type='number'
                                placeholder='От'
                            />
                            <input
                                className={cls.filterCommerceInput}
                                type='number'
                                placeholder='До'
                            />
                        </div>
                    </div>
                    <div className={cls.filterCommerceItemBlog}>
                        <p className={cls.filterCommerceTitleSquare}>Отделка</p>
                        <div className={cls.filterCommerceGroupBtn}>
                            <Condition/>
                        </div>
                    </div>

                    <div className={cls.filterCommerceItemBlog}>
                        <p className={cls.filterCommerceTitleSquare}>Парковка</p>
                        <div className={cls.filterCommerceGroupBtn}>
                            <Parking/>
                        </div>
                    </div>

                    <div className={cls.filterCommerceItemBlog}>
                        <p className={cls.filterCommerceTitleSquare}>Мебель</p>
                        <div className={cls.filterCommerceGroupBtn}>
                            <Furniture/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FilterCommerce
