import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Status.module.scss'

export interface StatusProps {
	className?: string
	status?: string
}

const Status = (props: StatusProps) => {
	const { status, className } = props

	return (
		<div className={classNames(cls.Status, undefined, [className])}>
			{status}
		</div>
	)
}

export default Status
