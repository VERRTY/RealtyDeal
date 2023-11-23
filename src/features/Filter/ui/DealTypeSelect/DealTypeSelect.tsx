import { classNames } from 'shared/lib/classNames/classNames';
import cls from './DealTypeSelect.module.scss'
import {dealType} from "../../../../shared/const/dealType";
import Select, {SelectOption} from "../../../../shared/ui/select/Select";
import {useAppDispatch} from "../../../../shared/lib/hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {getDeelType} from "../../model/selectors/getTealtyType/getTealtyTypeKey";
import {filterActions} from "../../model/slice/FilterSlice";
import {useEffect, useState} from "react";
interface DealTypeSelectProps {
    className?: string
}

export const DealTypeSelect = ({className}:DealTypeSelectProps) => {
    const dispatch = useAppDispatch()
    const deelType = useSelector(getDeelType)
    const [clickedItem, setClickedItem] = useState<SelectOption>()

    const handleClick = (item: SelectOption) => {
        setClickedItem(item)
        dispatch(filterActions.setDeelType(item.key || deelType))
    }

    useEffect(() => {
        const active = dealType.filter(item => item.key === deelType)[0]
        setClickedItem(active)
    }, [])


    return (
        <div className={classNames(cls.DealTypeSelect,{},[className])}>
            <Select
                options={dealType}
                placeholder='Тип недвижимости'
                listStyles={{ position: 'absolute' }}
                handleClickeItem={handleClick}
                changePlaceholder={true}
                clickedItem={clickedItem}
            />
        </div>
    );
};
