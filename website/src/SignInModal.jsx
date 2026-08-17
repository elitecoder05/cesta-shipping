import { useState } from 'react'
import { useUser } from './UserContext'
import './SignInModal.css'

export default function SignInModal() {
  const { isSignInModalOpen, closeSignInModal, login } = useUser()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if (!isSignInModalOpen) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const res = await login(email, password)
    setLoading(false)
    if (!res.success) {
      setError(res.error)
    }
  }

  const handleQuickLogin = async (selectedEmail) => {
    setEmail(selectedEmail)
    setPassword('password')
    setError('')
    setLoading(true)
    const res = await login(selectedEmail, 'password')
    setLoading(false)
    if (!res.success) {
      setError(res.error)
    }
  }

  return (
    <div className="modal-overlay" onClick={closeSignInModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" type="button" onClick={closeSignInModal}>×</button>
        
        <h2>Sign In to WholeLot Traders</h2>
        <p className="modal-subtitle">Participate in live auction bidding across all marketplaces</p>

        {error && <div className="modal-error">{error}</div>}

        <div className="quick-accounts-section">
          <label className="quick-label">Select Demo Trader Account:</label>
          <div className="quick-buttons-row">
            <button
              type="button"
              className="btn-quick-trader"
              onClick={() => handleQuickLogin('trader1@gmail.com')}
            >
              👤 Trader 1
              <span className="email-sub">trader1@gmail.com</span>
            </button>
            <button
              type="button"
              className="btn-quick-trader"
              onClick={() => handleQuickLogin('trader2@gmail.com')}
            >
              👤 Trader 2
              <span className="email-sub">trader2@gmail.com</span>
            </button>
            <button
              type="button"
              className="btn-quick-trader"
              onClick={() => handleQuickLogin('trader3@gmail.com')}
            >
              👤 Trader 3
              <span className="email-sub">trader3@gmail.com</span>
            </button>
          </div>
        </div>

        <div className="divider"><span>OR SIGN IN MANUALLY</span></div>

        <form onSubmit={handleSubmit} className="sign-in-form">
          <div className="form-group">
            <label htmlFor="modal-email">Email Address</label>
            <input
              id="modal-email"
              type="email"
              placeholder="e.g. trader1@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="modal-password">Password</label>
            <input
              id="modal-password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-modal-submit" disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
