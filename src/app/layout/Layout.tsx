import { useLocation } from 'react-router-dom'
import Footer from 'widgets/Footer/Footer'
import Header from 'widgets/Header/Header'

const Layout = (props: any) => {
	const { children } = props
	const { pathname } = useLocation()

	const isProductPage = pathname.startsWith('/product/')

	return (
		<>
			{pathname === '/signIn' ||
			pathname === '/signUp' ||
			pathname === '/cart' ||
			isProductPage ? (
				<>{children}</>
			) : (
				<div>
					<Header />
					<div className=''>{children}</div>
					<Footer />
				</div>
			)}
		</>
	)
}

export default Layout
