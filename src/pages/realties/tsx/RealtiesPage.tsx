import {getRealtyService, realtyReducer, realtyState} from 'entities/realty'
import InfoCard from 'features/RealtyCard/ui/tsx/InfoCard/InfoCard'

import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import cls from './RealtiesPage.module.scss'
import {SmallFilter} from 'features/Filter'
import {Loader} from "../../../shared/loader/loader";
import {getRealtyLoading} from "../../../entities/realty/selectors/getRealty";


const RealtiesPage = () => {
    const dispatch = useAppDispatch()

    // const { cellType, realtyType } = useSelector(getFilterState)

    const data = useSelector(realtyState)
    const isLoading = useSelector(getRealtyLoading)

    useEffect(() => {
        if (!data?.length) {
            // dispatch(getRealtyService({ cellType, realtyType }))
        }
        window.scrollTo(0, 0)
    }, [])

    return (
        // <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
        //
        // </DynamicModuleLoader>
        <div className={cls.realtiesPage}>
            <SmallFilter/>
            {isLoading ?
                <Loader/>
                :
                data && data.map(realty => <InfoCard key={realty.id} realty={realty}/>)

            }
        </div>
    )
}

export default RealtiesPage
