import { useEffect } from 'react'

const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title ? `${title} - Strategle` : 'Strategle - Decentralized Finance App'
  }, [])
}

export default useTitle
