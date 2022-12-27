import { useState } from 'react'

interface SelectionListItem {
    name: string
    value: string
}

export default function useSelectionList(selectionListOptions: any[]) {
    const firstItem = selectionListOptions[0]
    const [currentListItem, setCurrentListItem] = useState<SelectionListItem>(firstItem)

    const handleChangeItem = (index: number) => {
        setCurrentListItem(selectionListOptions[index])
    }

    return [currentListItem, handleChangeItem] as const
}
