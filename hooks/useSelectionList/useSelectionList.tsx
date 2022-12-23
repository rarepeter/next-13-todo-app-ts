import React, { useState } from 'react'

interface ListItem {
    name: string
    value: string
}

export default function useSelectionList(selectionList: any[]) {
    const firstItem = selectionList[0]
    const [currentListItem, setCurrentListItem] = useState<ListItem>(firstItem)

    const handleChangeItem = (index: number) => {
        setCurrentListItem(selectionList[index])
    }
    
    return [currentListItem, handleChangeItem] as const
}
