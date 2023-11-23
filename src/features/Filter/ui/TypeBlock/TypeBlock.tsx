import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './TypeBlock.module.scss'
interface TypeBlockProps {
    className?: string,
    changeActiveType: (id: number) => void,
    activeType: number
}
const types = [
    {
        id: 1,
        title: 'Купить',
    },
    {
        id: 2,
        title: 'Снять',
    },
    {
        id: 3,
        title: 'Посуточно',
    },
    {
        id: 4,
        title: 'Новостройки',
    },
]

export const TypeBlock = ({className, changeActiveType, activeType}:TypeBlockProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.TypeBlock,{},[className])}>
            {types.map(type => (
                <div
                    key={type.id}
                    className={
                        type.id === activeType ? cls.activeTypeTittle : cls.typeTittle
                    }
                    onClick={changeActiveType.bind(null, type.id)}
                >
                    {type.title}
                </div>
            ))}
        </div>
    );
};
