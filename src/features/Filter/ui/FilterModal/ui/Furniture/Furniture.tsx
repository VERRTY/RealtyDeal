import cls from './../Condition/Condition.module.scss'
import {useSelector} from "react-redux";
import {getFurniture} from "../../../../model/selectors/getFilter/getFilter";
import {filterActions} from "../../../../model/slice/FilterSlice";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {Button, ButtonTheme} from "shared/ui/button/Button";
import React from "react";


export const Furniture = () => {
    const dispatch = useAppDispatch()

    const furniture = useSelector(getFurniture)
    const handelSetFurniture = (val: string) => {
        dispatch(filterActions.setFurniture(val))
    }
    return (
        <>
            <Button theme={furniture === 'есть полностью' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                    onClick={() => handelSetFurniture('есть полностью')} className={cls.filterFlatsBtn}>Есть
                полностью</Button>
            <Button theme={furniture === 'есть частично' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                    onClick={() => handelSetFurniture('есть частично')} className={cls.filterFlatsBtn}>Есть
                частично</Button>
            <Button theme={furniture === 'без мебели' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                    onClick={() => handelSetFurniture('без мебели')} className={cls.filterFlatsBtn}>Без
                мебели</Button>
        </>
    );
};
