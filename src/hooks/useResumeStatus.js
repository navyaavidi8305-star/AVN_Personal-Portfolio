import { useEffect, useState } from 'react'

export function useResumeStatus(path) {
  const [status, setStatus] = useState('checking')

  useEffect(() => {
    let isCurrent = true

    fetch(path, { method: 'HEAD' })
      .then((response) => {
        const contentType = response.headers.get('content-type') ?? ''
        if (!isCurrent) return
        setStatus(response.ok && contentType.includes('pdf') ? 'available' : 'missing')
      })
      .catch(() => {
        if (isCurrent) setStatus('missing')
      })

    return () => {
      isCurrent = false
    }
  }, [path])

  return status
}
