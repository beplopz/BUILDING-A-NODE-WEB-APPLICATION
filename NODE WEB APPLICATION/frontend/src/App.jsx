import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [apiData, setApiData] = useState(null)
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    const loadMessage = async () => {
      try {
        const response = await fetch('/api/message')

        if (!response.ok) {
          throw new Error('Server response was not successful.')
        }

        const data = await response.json()
        setApiData(data)
        setStatus('success')
      } catch (fetchError) {
        setError(fetchError.message)
        setStatus('error')
      }
    }

    loadMessage()
  }, [])

  return (
    <main className="app-shell">
      <section className="hero-panel">
        <p className="eyebrow">Hands-On Activity</p>
        <h1>Building a Node Web Application</h1>
        <p className="intro">
          This React frontend is connected to a Node.js and Express backend.
          The data card below is loaded from the API running on localhost.
        </p>
      </section>

      <section className="content-grid">
        <article className="card">
          <h2>Frontend Status</h2>
          <p>React app is running successfully with Vite.</p>
          <ul>
            <li>Frontend URL: http://localhost:5173</li>
            <li>Framework: React</li>
            <li>Build Tool: Vite</li>
          </ul>
        </article>

        <article className="card">
          <h2>Backend Status</h2>
          <p>Express server provides JSON data for the frontend.</p>
          <ul>
            <li>Backend URL: http://localhost:5000</li>
            <li>API Route: /api/message</li>
            <li>Response Type: JSON</li>
          </ul>
        </article>
      </section>

      <section className="card api-card">
        <div className="api-header">
          <div>
            <p className="eyebrow">Live API Data</p>
            <h2>React Displaying Express Response</h2>
          </div>
          <span className={`status-badge status-${status}`}>{status}</span>
        </div>

        {status === 'loading' && (
          <p className="message-box">Loading data from the backend...</p>
        )}

        {status === 'error' && (
          <p className="message-box error-message">
            Unable to connect to the API: {error}
          </p>
        )}

        {status === 'success' && apiData && (
          <div className="api-grid">
            <div className="message-box">
              <h3>Message</h3>
              <p>{apiData.message}</p>
            </div>
            <div className="message-box">
              <h3>Task</h3>
              <p>{apiData.task}</p>
            </div>
            <div className="message-box">
              <h3>Course</h3>
              <p>{apiData.course}</p>
            </div>
            <div className="message-box">
              <h3>Timestamp</h3>
              <p>{apiData.timestamp}</p>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
