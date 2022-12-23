'use client'

import useSelectionList from '@hooks/useSelectionList/useSelectionList'
import React, { useState } from 'react'
import styles from './SelectionList.module.css'

interface SelectionListItem {
    name: string
    value: string
}

export default function SelectionList({ selectionListOptions }: any) {
    const [selectedItem, handleChangeSelectedItem] = useSelectionList(selectionListOptions)

    const [isActive, setIsActive] = useState<boolean>(false)
    console.log(selectionListOptions)

    return (
        <div className={styles[`selection-box`]} onClick={() => setIsActive(prev => !prev)}>
            <>
                {selectedItem.name}
                <div className={`${styles[`selection-box__options`]} ${!isActive ? styles[`not-active`] : ''}`}>
                    {selectionListOptions.map((item: SelectionListItem) => {
                        return (<div
                            className={styles[`selection-option`]}
                        // onClick={() => handleChangeSelectedItem()}
                        >
                            {item.name}
                        </div>)
                    })}
                </div>
            </>
        </div>
    )
}
