import { useState } from 'react'
import Filters from 'types/TodoFilters'

export default function useFilters(defaultFilters: Filters) {
    const [filters, setFilters] = useState<Filters>(defaultFilters)

    const handleChangeSearchFilter = (search: string) => {
        setFilters(prev => ({ ...prev, search }))
    }
    const handleChangeSortByFilter = (sortBy: string) => {
        setFilters(prev => ({ ...prev, sortBy }))
    }
    const handleChangeOrderByFilter = (orderBy: string) => {
        setFilters(prev => ({ ...prev, orderBy }))
    }

    return [filters, handleChangeSearchFilter, handleChangeSortByFilter, handleChangeOrderByFilter] as const
}
