import cls from './YearBuilt.module.scss'
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {filterActions} from "../../../../model/slice/FilterSlice";
import {useSelector} from "react-redux";
import {getYearBuilt} from "../../../../model/selectors/getFilter/getFilter";
interface YearBuiltProps {
    className?: string
}

export const YearBuilt = ({className}:YearBuiltProps) => {
    const dispatch = useAppDispatch()

    const yearBuilt = useSelector(getYearBuilt)

    const handelSetYearBuilt = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filterActions.setYearBuilt(e.target.value))
    }
    return (
        <>
            <input
                className={cls.filterFlatsInput}
                type='number'
                placeholder='C'
                value={yearBuilt}
                onChange={handelSetYearBuilt}
            />
            <input
                className={cls.filterFlatsInput}
                type='number'
                placeholder='По'
                value={yearBuilt}
                onChange={handelSetYearBuilt}
            />
        </>
    );
};
