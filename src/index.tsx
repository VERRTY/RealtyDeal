import 'app/styles/index.scss'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'shared/config/i18n/i18n'
import App from './app/App'

import { ThemeProvider } from 'app/providers/themes'
import {StoreProvider} from "./app/providers/StoreProvider";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<BrowserRouter>
		<StoreProvider>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</StoreProvider>
	</BrowserRouter>
)
