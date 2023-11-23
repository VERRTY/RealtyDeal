import { lazy } from 'react'

export const RealtiesPageAsync = lazy(
	async () => await import('./RealtiesPage')
)
