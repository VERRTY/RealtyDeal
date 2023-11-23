import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Rooms.module.scss'
import {Button, ButtonTheme} from "shared/ui/button/Button";
import {useAppDispatch} from "../../../../shared/lib/hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {getRooms} from "../../model/selectors/getRooms/getRooms";
import {filterActions} from "../../model/slice/FilterSlice";

interface roomsProps {
    className?: string
}

export const Rooms = ({className}: roomsProps) => {

    const dispatch = useAppDispatch()
    const roomsAmount = useSelector(getRooms)

    const changeHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(filterActions.setRooms(e.currentTarget.id))
    }

    return (
        <div className={classNames(cls.rooms, {}, [className])}>
            <p>Количество комнат</p>
            <div className={cls.numButtons}>
                <Button id={'1'} className={cls.num}
                        theme={roomsAmount === '1' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                        onClick={changeHandler}
                >
                    1
                </Button>
                <Button id={'2'} className={cls.num}
                        theme={roomsAmount === '2' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                        onClick={changeHandler}
                >
                    2
                </Button>
                <Button id={'3'} className={cls.num}
                        theme={roomsAmount === '3' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                        onClick={changeHandler}
                >
                    3
                </Button>
                <Button id={'4'} className={cls.num}
                        theme={roomsAmount === '4' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                        onClick={changeHandler}
                >
                    4
                </Button>
                <Button id={'5'} className={cls.num}
                        theme={roomsAmount === '5' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                        onClick={changeHandler}>
                    5
                </Button>
                <Button id={'6 и более'} className={cls.num}
                        theme={roomsAmount === '6 и более' ? ButtonTheme.TONAL : ButtonTheme.OUTLINE}
                        style={{padding: '6px 6px'}} onClick={changeHandler}>
                    +6
                </Button>
            </div>
        </div>
    );
};
