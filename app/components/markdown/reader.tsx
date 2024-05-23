"use client"

import MDEditor from "@uiw/react-md-editor"
import React from "react";

type MarkdownReaderProps = {
    children: string
    }


// MarkdownReader component used to display markdown content as plain text in theindividual guides
const MarkdownReader = ({ children }: MarkdownReaderProps) => {
  return (
    <div data-color-mode="light">
    <MDEditor.Markdown source={children}></MDEditor.Markdown>
    </div>
  )
}

export default MarkdownReader;