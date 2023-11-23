import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { useTheme } from './providers/themes'
import { ToastProvier } from './providers/toast'
import Layout from './layout/Layout'

function App() {
	const { theme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<ToastProvier />
			<Layout>
				<AppRouter />
			</Layout>
		</div>
	)
}

export default App
