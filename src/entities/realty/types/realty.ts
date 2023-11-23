export interface ISellPrice {
	price: number
	exchange: string
	mortgage: string
	installment: string
}

export interface ILocation {
	city: string
	district: string
	house_num: string
	region: string
	street: string
}

export interface ICharacteristics {
	balcony: string
	bathrooms: string
	ceilings_height: number
	documents: string
	drinking_water: string
	electricity: string
	floor: string
	furniture: string
	gas: string
	internet: string
	other_house: string
	parking: string
	phone: string
	safety: string
	sewerage: string
	wifi: string
}

export interface IRealty {
	id: number
	offer_type: string
	deal_type: string
	author: string
	description: string
	images: []
	buy_sell_price?: ISellPrice
	characteristics: ICharacteristics
	location: ILocation
	commercial_property: any
	country_house: any
	plot: any
	rental_rent_price: any
}

export interface RealtySchema {
	realtyArr?: IRealty[] | null
	isLoading?: boolean
	error?: string
}
