import {Button, ButtonTheme} from 'shared/ui/button/Button'
import Switcher from 'shared/ui/switcher/Switcher'
import cls from './FilterFlats.module.scss'
import React, {useState} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {
    getArea_max,
    getArea_min,
    getBalcony,
    getBathroom,
    getCondition,
    getFloors,
    getFloors_num,
    getFurniture
} from "../../../model/selectors/getFilter/getFilter";
import {filterActions} from "../../../model/slice/FilterSlice";
import {Condition} from "../ui/Condition/Condition";
import {Furniture} from "../ui/Furniture/Furniture";

interface FilterFlatsProps {
}

const FilterFlats = (props: FilterFlatsProps) => {

    const [active, setActive] = useState(true);
    const dispatch = useAppDispatch()

    const ariaMax = useSelector(getArea_max)
    const ariaMin = useSelector(getArea_min)
    const floors = useSelector(getFloors)
    const floorsNum = useSelector(getFloors_num)
    const balcony = useSelector(getBalcony)
    const bathroom = useSelector(getBathroom)

    const handelSetAreaMax = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filterActions.setArea_max(e.target.value))
    }
    const handelSetAreaMin = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filterActions.setArea_min(e.target.value))
    }
    const handelSetFloors = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filterActions.setFloors(e.target.value))
    }
    const handelSetFloorsNum = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filterActions.setFloors_num(e.target.value))
    }
    const handelSetBalcony = (val: string) => {
        dispatch(filterActions.setBalcony(val))
    }
    const handelSetBathroom = (val: string) => {
        dispatch(filterActions.setBathroom(val))
    }


    return (
        <div className={cls.filterFlats}>
            <div className={cls.filterFlatsTitle}>
                Квартиры
                <Switcher
                    isOn={active}
                    onToggle={() => setActive(!active)}
                    id='flat'
                />
            </div>
            {active && (
                <div className={cls.filterFlatsWrapper}>
                    <div className={cls.filterFlatsSquare}>
                        <p className={cls.filterFlatsTitleSquare}>Площадь</p>
                        <div className={cls.filterFlatsInputItems}>
                            <input
                                className={cls.filterFlatsInput}
                                type='number'
                                onChange={handelSetAreaMin}
                                placeholder='От'
                                value={ariaMin?.toString()}
                            />
                            <input
                                className={`${cls.filterFlatsInput} ${cls.filterFlatsInput2}`}
                                type='number'
                                onChange={handelSetAreaMax}
                                value={ariaMax?.toString()}
                                placeholder='До                          m2'
                            />
                        </div>
                    </div>
                    <div className={cls.filterFlatsSquare}>
                        <p className={cls.filterFlatsTitleSquare}>Этаж</p>
                        <div className={cls.filterFlatsInputItems}>
                            <input
                                className={cls.filterFlatsInput}
                                type='number'
                                placeholder='От'
                                value={floors}
                                onChange={handelSetFloors}
                            />
                            <input
                                className={cls.filterFlatsInput}
                                type='number'
                                placeholder='До'
                                value={floorsNum}
                                onChange={handelSetFloorsNum}
                            />
                        </div>
                        {/*<div className={cls.filterFlatsCheckbox}>*/}
                        {/*	<label>*/}
                        {/*		<input type='checkbox' />*/}
                        {/*		Не первый*/}
                        {/*	</label>*/}
                        {/*	<label>*/}
                        {/*		<input type='checkbox' />*/}
                        {/*		Не последний*/}
                        {/*	</label>*/}
                        {/*	<label>*/}
                        {/*		<input type='checkbox' />*/}
                        {/*		Последний*/}
                        {/*	</label>*/}
                        {/*</div>*/}
                    </div>
                    <div className={cls.filterFlatsItemBlog}>
                        <p className={cls.filterFlatsTitleSquare}>Отделка</p>
                        <div className={cls.filterFlatsGroupBtn}>
                            <Condition/>
                        </div>
                    </div>

                    <div className={cls.filterFlatsItemBlog}>
                        <p className={cls.filterFlatsTitleSquare}>Балкон</p>
                        <div className={cls.filterFlatsGroupBtn}>
                            <Button theme={balcony === 'балкон' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                                    onClick={() => handelSetBalcony('балкон')}
                                    className={cls.filterFlatsBtn}>Балкон</Button>
                            <Button theme={balcony === 'застекленный балкон' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                                    onClick={() => handelSetBalcony('застекленный балкон')}
                                    className={cls.filterFlatsBtn}>Лоджия</Button>
                            <Button theme={balcony === 'лоджия' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                                    onClick={() => handelSetBalcony('лоджия')} className={cls.filterFlatsBtn}>Балкон и
                                лоджия</Button>
                            <Button theme={balcony === 'нет' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                                    onClick={() => handelSetBalcony('нет')} className={cls.filterFlatsBtn}>Нет</Button>
                        </div>
                    </div>

                    <div className={cls.filterFlatsItemBlog}>
                        <p className={cls.filterFlatsTitleSquare}>Мебель</p>
                        <div className={cls.filterFlatsGroupBtn}>
                            <Furniture/>
                        </div>
                    </div>

                    {/*Кухня*/}
                    {/*<div className={cls.filterFlatsItemBlog}>*/}
                    {/*    <p className={cls.filterFlatsTitleSquare}>Кухня</p>*/}
                    {/*    <div className={cls.filterFlatsInputItems}>*/}
                    {/*        <input*/}
                    {/*            className={cls.filterFlatsInput}*/}
                    {/*            type='number'*/}
                    {/*            placeholder='От'*/}
                    {/*        />*/}
                    {/*        <input*/}
                    {/*            className={`${cls.filterFlatsInput} ${cls.filterFlatsInput2}`}*/}
                    {/*            type='number'*/}
                    {/*            placeholder='До                          m2'*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div className={cls.filterFlatsGroupBtn}>*/}
                    {/*        <Button className={cls.filterFlatsBtn}>от 6 м2</Button>*/}
                    {/*        <Button className={cls.filterFlatsBtn}>от 8 м2</Button>*/}
                    {/*        <Button className={cls.filterFlatsBtn}>от 10 м2</Button>*/}
                    {/*        <Button className={cls.filterFlatsBtn}>от 14 м2</Button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                    {/*Высота потолков*/}
                    {/*<div className={cls.filterFlatsItemBlog}>*/}
                    {/*    <p className={cls.filterFlatsTitleSquare}>Высота потолков</p>*/}
                    {/*    <div className={cls.filterFlatsGroupBtn}>*/}
                    {/*        <Button className={cls.filterFlatsBtn}>от 2,5 м</Button>*/}
                    {/*        <Button className={cls.filterFlatsBtn}>от 2,7 м</Button>*/}
                    {/*        <Button className={cls.filterFlatsBtn}>от 3 м</Button>*/}
                    {/*        <Button className={cls.filterFlatsBtn}>от 4 м</Button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className={cls.filterFlatsItemBlog}>
                        <p className={cls.filterFlatsTitleSquare}>Санузел</p>
                        <div className={cls.filterFlatsGroupBtn}>
                            <Button theme={bathroom === 'раздельный' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                                    onClick={() => handelSetBathroom('раздельный')}
                                    className={cls.filterFlatsBtn}>Раздельный</Button>
                            <Button theme={bathroom === 'соединенный' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                                    onClick={() => handelSetBathroom('соединенный')}
                                    className={cls.filterFlatsBtn}>Совмещенный</Button>
                            <Button theme={bathroom === 'недоступен' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                                    onClick={() => handelSetBathroom('недоступен')}
                                    className={cls.filterFlatsBtn}>Недоступен</Button>
                            <Button theme={bathroom === 'более двух' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                                    onClick={() => handelSetBathroom('более двух')}
                                    className={cls.filterFlatsBtn}>Несколько</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FilterFlats
