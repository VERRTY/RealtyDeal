import { AdvertBlog1, AdvertBlog2, AdvertBlog3 } from '../../shared/images'

export const advertisingData = [
	{
		id: 1,
		image: <AdvertBlog1 />,
		title: 'Купить квартиру',
		list: [
			{ item: '1 - комнатные', price: 18230 },
			{ item: '2 - комнатные', price: 12230 },
			{ item: '3 - комнатные', price: 5600 },
			{ item: 'Свободная планировка', price: 875 },
			{ item: 'Квартиры - студии', price: 2589 },
			{ item: 'Комнаты в квартире', price: 1789 },
		],
	},
	{
		id: 2,
		image: <AdvertBlog2 />,
		title: 'Снять квартиру',
		list: [
			{ item: '1 - комнатные', price: 17230 },
			{ item: '2 - комнатные', price: 11230 },
			{ item: '3 - комнатные', price: 4600 },
			{ item: 'Квартиры - студии', price: 2455 },
			{ item: 'Комнаты в квартире', price: 736 },
		],
	},
	{
		id: 3,
		title: 'Снять посуточно',
		image: <AdvertBlog3 />,
		list: [
			{ item: 'Квартиры посуточно', price: 15005 },
			{ item: 'Коттеджи посуточно ', price: 2044 },
			{ item: 'Комнаты на сутки', price: 1900 },
			{ item: 'Хостелы', price: 875 },
		],
	},
]

export const advertisingInfoData = [
	{
		id: 1,
		title1: 'Новостройки',
		list1: [
			{ item: 'Бизнес - класс', price: 22230 },
			{ item: 'Эконом - класс', price: 11230 },
			{ item: 'Студии', price: 4600 },
			{ item: 'Апартаменты', price: 2455 },
			{ item: 'С чистовой отделкой', price: 2455 },
			{ item: 'С отделкой под ключ', price: 736 },
		],
		title2: 'Коммерческая недвижимость',
		list2: [
			{ item: 'Купить офис', price: 17230 },
			{ item: 'Купить помещение', price: 8230 },
			{ item: 'Аренда офиса', price: 10600 },
			{ item: 'Аренда помещение', price: 4455 },
			{ item: 'Аренда торговой площади', price: 1455 },
			{ item: 'Аренда склада', price: 336 },
		],
	},
]
