import { createContext, useContext, useState } from 'react'

const AdminContext = createContext(null)

export function AdminProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('admin_auth') === 'true'
  })
  const [priceHike, setPriceHike] = useState(() => {
    const saved = sessionStorage.getItem('admin_price_hike')
    return saved ? Number(saved) : 0
  })

  const login = (username, password) => {
    if (username === 'gopi' && password === 'gopi12') {
      setIsAuthenticated(true)
      sessionStorage.setItem('admin_auth', 'true')
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem('admin_auth')
  }

  const updatePriceHike = (value) => {
    const num = Number(value)
    if (num >= 1 && num <= 100) {
      setPriceHike(num)
      sessionStorage.setItem('admin_price_hike', String(num))
    }
  }

  const applyPriceHike = (price) => {
    if (!price || typeof price !== 'number') return price
    if (priceHike <= 0) return price
    return Math.round(price * (1 + priceHike / 100))
  }

  return (
    <AdminContext.Provider value={{
      isAuthenticated,
      login,
      logout,
      priceHike,
      updatePriceHike,
      applyPriceHike
    }}>
      {children}
    </AdminContext.Provider>
  )
}

export function useAdmin() {
  const context = useContext(AdminContext)
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider')
  }
  return context
}
