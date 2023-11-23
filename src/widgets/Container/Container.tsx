import cls from './Container.module.scss'
import { ReactNode } from 'react'

interface ContainerProps {
	children: ReactNode
}

const Container = ({ children }: ContainerProps) => {
	return <div className={cls.container}>{children}</div>
}

export default Container
