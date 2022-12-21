import { useState } from 'react'

export default function useFilters() {
    const [filters, setFilters] = useState({
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
