import { ReactNode, memo } from 'react'
import { Link, LinkProps } from 'react-router-dom'

interface AppLinkProps extends LinkProps {
	children?: ReactNode
}

export const AppLink = memo((props: AppLinkProps) => {
	const { to, children, ...otherProps } = props

	return (
		<Link to={to} {...otherProps}>
			{children}
		</Link>
	)
})
