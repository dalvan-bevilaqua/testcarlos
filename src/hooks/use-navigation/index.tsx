import { createContext, useContext, useState } from 'react'

type NavigationContextData = {
  categoryName: string
  setCategoryName: (id: string) => void
  pageId: string
  setPageId: (id: string) => void
  categorySum: number
  setCategorySum: (quantity: number) => void
}
export const NavigationContextDefaultValues = {
  categoryName: '',
  setCategoryName: () => null,
  pageId: '',
  setPageId: () => null,
  categorySum: 0,
  setCategorySum: () => null
}

export type NavigationProviderProps = {
  children: React.ReactNode
}

export const NavigationContext = createContext<NavigationContextData>(
  NavigationContextDefaultValues
)

const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const [pageId, setPageId] = useState(NavigationContextDefaultValues.pageId)
  const [categorySum, setCategorySum] = useState(
    NavigationContextDefaultValues.categorySum
  )
  const [categoryName, setCategoryName] = useState(
    NavigationContextDefaultValues.categoryName
  )

  return (
    <NavigationContext.Provider
      value={{
        pageId,
        setPageId,
        categorySum,
        setCategorySum,
        categoryName,
        setCategoryName
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

const useNavigation = () => useContext(NavigationContext)

export { NavigationProvider, useNavigation }
