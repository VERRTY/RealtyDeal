import {classNames} from 'shared/lib/classNames/classNames';
import cls from './loader.module.scss'

interface loaderProps {
    className?: string
}

export const Loader = ({className}: loaderProps) => {

    return (
        <div className={classNames(cls.loader, {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
