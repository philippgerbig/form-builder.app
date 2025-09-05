"use client"

import {FormElementInstance} from "@/components/form-elements";
import React, {createContext, useState} from "react";

type DesignerContextType = {
  elements: FormElementInstance[]
  addElements: (index: number, elements: FormElementInstance[]) => void
}

export const DesignerContext = createContext<DesignerContextType | null>(null)

export const DesignerContextProvider = ({children}: { children: React.ReactNode }) => {
  const [elements, setElements] = useState<FormElementInstance[]>([])

  const addElements = (index: number, elements: FormElementInstance[]) => {
    setElements(prev => [...prev.slice(0, index), ...elements, ...prev.slice(index)])
  }

  return <DesignerContext.Provider value={{
    elements,
    addElements,
  }}>
    {children}
  </DesignerContext.Provider>
}
