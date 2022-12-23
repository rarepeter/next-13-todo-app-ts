'use client'

import useSelectionList from '@hooks/useSelectionList/useSelectionList'
import React from 'react'

// interface ListProps {
//     name: string
//     sortBy: string
// }

export default function SelectionList({ selectionList }: any) {
    const [selectedItem, handleChangeSelectedItem] = useSelectionList(selectionList)
    return (
        <div>SelectionList</div>
    )
}
