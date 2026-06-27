'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error ?? 'Something went wrong.')
        setStatus('error')
        return
      }

      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setErrorMsg('Failed to send. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-6" style={{ background: '#FAE8E7' }}>
          ✓
        </div>
        <h3 className="font-sans font-semibold text-xl text-foreground mb-2">Message sent</h3>
        <p className="font-sans text-muted text-sm">We'll get back to you at {email}.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 font-sans text-sm text-coral underline underline-offset-2 hover:opacity-70 transition-opacity"
        >
          Send another message
        </button>
      </div>
    )
  }

  const inputClass = "w-full font-sans text-sm text-foreground bg-white border border-border rounded-brand px-4 py-3.5 outline-none focus:border-coral transition-colors placeholder:text-muted/50"

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs font-medium text-muted uppercase tracking-wide">Name</label>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs font-medium text-muted uppercase tracking-wide">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-xs font-medium text-muted uppercase tracking-wide">Message</label>
        <textarea
          placeholder="What's on your mind?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={6}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="font-sans text-sm text-coral">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="self-start inline-flex items-center gap-2 bg-foreground text-background font-sans font-medium text-sm px-8 py-4 rounded-full hover:opacity-80 transition-opacity disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
