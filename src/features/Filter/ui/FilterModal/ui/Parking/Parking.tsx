import cls from './../Condition/Condition.module.scss'
import {useSelector} from "react-redux";
import {getParking} from "../../../../model/selectors/getFilter/getFilter";
import {filterActions} from "../../../../model/slice/FilterSlice";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {Button, ButtonTheme} from "shared/ui/button/Button";

export const Parking = () => {
    const dispatch = useAppDispatch()

    const parking = useSelector(getParking)

    const handelParking = (val: string) => {
        dispatch(filterActions.setParking(val))
    }
    return (
        <>
            <Button theme={parking === 'паркинг' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                    onClick={() => handelParking('паркинг')}
                    className={cls.filterFlatsBtn}>Паркинг</Button>
            <Button theme={parking === 'гараж' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                    onClick={() => handelParking('гараж')} className={cls.filterFlatsBtn}>Гараж</Button>
            <Button theme={parking === 'недоступно' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                    onClick={() => handelParking('недоступно')}
                    className={cls.filterFlatsBtn}>Недоступно</Button>
        </>
    );
};
