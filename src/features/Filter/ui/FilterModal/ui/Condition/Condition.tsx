import cls from './Condition.module.scss'
import {useSelector} from "react-redux";
import {getCondition} from "../../../../model/selectors/getFilter/getFilter";
import {filterActions} from "../../../../model/slice/FilterSlice";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {Button, ButtonTheme} from "shared/ui/button/Button";
import React from "react";


export const Condition = () => {
    const dispatch = useAppDispatch()

    const condition = useSelector(getCondition)

    const handelSetCondition = (val: string) => {
        dispatch(filterActions.setCondition(val))
    }
    return (
        <>
            <Button theme={condition === 'под самоотделку' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                    onClick={() => handelSetCondition('под самоотделку')}
                    className={cls.filterFlatsBtn}>Под самоотделку</Button>
            <Button theme={condition === 'евроремонт' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                    onClick={() => handelSetCondition('евроремонт')} className={cls.filterFlatsBtn}>
                Евроремонт
            </Button>
            <Button theme={condition === 'хорошее' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                    onClick={() => handelSetCondition('хорошее')}
                    className={cls.filterFlatsBtn}>Хорошее </Button>
            <Button theme={condition === 'среднее' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                    onClick={() => handelSetCondition('среднее')}
                    className={cls.filterFlatsBtn}>Среднее</Button>
            <Button theme={condition === 'не достроено' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                    onClick={() => handelSetCondition('не достроено')} className={cls.filterFlatsBtn}>не
                Достроено</Button>
        </>
    );
};
