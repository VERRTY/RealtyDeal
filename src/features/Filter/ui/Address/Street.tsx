import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Street.module.scss'
import {Input} from "../../../../shared/ui/input/Input";
import {useAppDispatch} from "../../../../shared/lib/hooks/useAppDispatch";
import {getStreet} from "../../model/selectors/getStreet/getStreet";
import {useSelector} from "react-redux";
import {filterActions} from "../../model/slice/FilterSlice";

interface AddressProps {
    className?: string
}

export const Street = ({className}: AddressProps) => {
    const dispatch = useAppDispatch()
    const street = useSelector(getStreet)

    const handelStreetChange = (street: string) =>{
        dispatch(filterActions.setStreet(street))
    }

    return (
        <div className={classNames(cls.Address, {}, [className])}>
            <Input
                placeholder='Адрес, ЖК или район'
                className={cls.address}
                value={street}
                onChange={handelStreetChange}
            />
        </div>
    );
};
