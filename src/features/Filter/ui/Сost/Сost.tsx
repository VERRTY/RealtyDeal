import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Сost.module.scss'
import {Input} from "../../../../shared/ui/input/Input";
import {useAppDispatch} from "../../../../shared/lib/hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {getMaxPrice, getMinPrice} from "../../model/selectors/getPrice/getPrice";
import {filterActions} from "../../model/slice/FilterSlice";

interface CostProps {
    className?: string
}

export const Cost = ({className}: CostProps) => {
    const dispatch = useAppDispatch()
    const maxPrice = useSelector(getMaxPrice)
    const minPrice = useSelector(getMinPrice)

    const handelSetMaxPrice = (max: string) => {
        dispatch(filterActions.setMaxPrice(max))
    }

    const handelSetMinPrice = (min: string) => {
        dispatch(filterActions.setMinPrice(min))
    }

    return (
        <div className={classNames(cls.Cost, {}, [className])}>
            <p>Стоимость</p>
            <div style={{display: 'flex'}}>
                <Input
                    before='От'
                    type={'number'}
                    className={cls.roomInput}
                    onChange={handelSetMinPrice}
                    value={minPrice?.toString()}
                />
                <Input
                    before='До'
                    type={'number'}
                    className={cls.roomInputRight}
                    onChange={handelSetMaxPrice}
                    value={maxPrice?.toString()}
                />
            </div>
        </div>
    );
};
