import { useAdmin } from './AdminContext'

export function usePrice() {
  const { applyPriceHike } = useAdmin()

  const formatMoney = (value) => {
    const inflated = applyPriceHike(value)
    if (typeof inflated !== 'number') return '-'
    return `₹ ${inflated.toLocaleString('en-IN')}`
  }

  return { formatMoney, applyPriceHike }
}
