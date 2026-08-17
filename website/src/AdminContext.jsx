import { createContext, useContext, useState, useEffect } from 'react'

const AdminContext = createContext(null)

export function AdminProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('admin_auth') === 'true'
  })
  const [priceHike, setPriceHike] = useState(() => {
    const saved = localStorage.getItem('admin_price_hike') || sessionStorage.getItem('admin_price_hike')
    return saved !== null && saved !== '' ? Number(saved) : 0
  })

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'admin_price_hike') {
        const val = e.newValue !== null && e.newValue !== '' ? Number(e.newValue) : 0
        setPriceHike(isNaN(val) ? 0 : val)
      }
    }
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

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
    if (value === '' || value === null || value === undefined) {
      setPriceHike(0)
      localStorage.setItem('admin_price_hike', '0')
      sessionStorage.setItem('admin_price_hike', '0')
      return
    }
    const num = Number(value)
    if (!isNaN(num) && num >= 0 && num <= 100) {
      setPriceHike(num)
      localStorage.setItem('admin_price_hike', String(num))
      sessionStorage.setItem('admin_price_hike', String(num))
    }
  }

  const applyPriceHike = (price) => {
    const numPrice = Number(price)
    if (isNaN(numPrice) || numPrice <= 0) return price
    if (!priceHike || priceHike <= 0) return numPrice
    return Math.round(numPrice * (1 + priceHike / 100))
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
