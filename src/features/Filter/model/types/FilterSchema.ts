export interface FilterSchema {
    isLoading: boolean;
    error?: string;

    // realtyTypeKey?: string
    deal_type?: string
    max_price?: number
    min_price?: number
    // offer_type?: string
    // region?: string
    // rental_max_price?: number
    // rental_min_price?: number
    // rental_period?: string
    rooms?: string
    street?: string

    area_max?: number
    area_min?: number
    floors?: number
    floors_num?: number
    condition?: string
    balcony?: string
    furniture?: string
    bathroom?: string
    year_built?: number
    building_type?: string
    parking?: string

}
