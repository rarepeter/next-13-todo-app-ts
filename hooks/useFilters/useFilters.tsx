import { useState } from 'react'
import Filters from 'types/TodoFilters'

export default function useFilters(defaultFilters: Filters) {
    const [filters, setFilters] = useState<Filters>(defaultFilters)

    const handleChangeSearchFilter = (search: Filters['search']) => {
        setFilters(prev => ({ ...prev, search }))
    }
    const handleChangeSortByFilter = (sortBy: Filters['sortBy']) => {
        setFilters(prev => ({ ...prev, sortBy }))
    }
    const handleChangeOrderByFilter = (orderBy: Filters['orderBy']) => {
        setFilters(prev => ({ ...prev, orderBy }))
    }

    return [filters, handleChangeSearchFilter, handleChangeSortByFilter, handleChangeOrderByFilter] as const
}
