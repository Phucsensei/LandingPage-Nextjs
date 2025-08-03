'use client'
import { useCallback } from 'react'

export const useScrollToSection = () => {
  return useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Điều chỉnh offset để tránh bị navbar che
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }, [])
}