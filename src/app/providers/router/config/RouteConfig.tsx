import { MainPage } from 'pages/main'
import { RealtiesPage } from 'pages/realties'
import { type RouteProps } from 'react-router-dom'

export enum AppRoutes {
	MAIN = 'main',
	REALTIES = 'realties',

	// last
	// NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.REALTIES]: '/realties',

	// last
	// [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />,
	},
	[AppRoutes.REALTIES]: {
		path: RoutePath.realties,
		element: <RealtiesPage />,
	},
}
