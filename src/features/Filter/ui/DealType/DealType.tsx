import cls from './DealType.module.scss'
import {Button, ButtonTheme} from "../../../../shared/ui/button/Button";
import {dealType} from "shared/const/dealType";
import {useSelector} from "react-redux";
import {getDeelType} from "../../model/selectors/getTealtyType/getTealtyTypeKey";
import {useAppDispatch} from "../../../../shared/lib/hooks/useAppDispatch";
import {filterActions} from "../../model/slice/FilterSlice";

interface RealtyTypeProps {
    className?: string
}

export const DealType = ({className}: RealtyTypeProps) => {
    const dispatch = useAppDispatch()
    const deelType = useSelector(getDeelType)

    const handleClick = (key: string) => {
        dispatch(filterActions.setDeelType(key))
        dispatch(filterActions.resetModal())
    }

    return (
        <>
            {dealType.map(item => (
                <Button
                    key={item.key}
                    className={cls.catButn}
                    theme={
                        item.key === deelType ? ButtonTheme.TONAL : ButtonTheme.OUTLINE
                    }
                    onClick={() => handleClick(item.key)}
                >
                    {item.name}
                </Button>
            ))}
        </>
    );
};
