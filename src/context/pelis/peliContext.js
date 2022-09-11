import { createContext, useContext } from 'react'

const PeliContext = createContext()

export function usePeli() {
  const context = useContext(PeliContext)
  
  if (!context) {
    throw new Error('usePeli debe ser usado por un componente envuelto por PeliState')
  }

  return context
}

export default PeliContext