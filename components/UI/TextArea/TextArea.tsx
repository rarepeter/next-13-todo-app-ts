'use client'
import React, { TextareaHTMLAttributes, useRef } from 'react'

export default function TextArea({ onChange = () => { }, ...otherProps }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const handleTextAreaHeight = (e: any) => {
        if (textAreaRef.current != null) {
            textAreaRef.current.style.height = "2rem";
            textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
        }
    }
    
    return (
        <textarea ref={textAreaRef} onChange={e => { handleTextAreaHeight(e); onChange(e) }} {...otherProps}></textarea>
    )
}
