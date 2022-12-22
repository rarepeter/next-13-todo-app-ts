import { useState } from 'react'

interface Filters {
    search: string
    sortBy: string
    orderBy: string
}

export default function useFilters() {
    const [filters, setFilters] = useState<Filters>({
        search: "",
        sortBy: "createdAt",
        orderBy: "desc"
    })

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
