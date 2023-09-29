import React, { useCallback, useEffect, useRef } from 'react'

const ProgressBar = () => {
  const ref = useRef<HTMLDivElement>(null)

  const handleScroll = useCallback(() => {
    const windowHeight: number = window.innerHeight
    const documentHeight: number = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    )

    const scrollY: number = window.scrollY
    const maxScroll: number = documentHeight - windowHeight
    const progress: number = (scrollY / maxScroll) * 100

    ref.current?.style.setProperty('width', `${progress}%`)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <div
      ref={ref}
      className="progress-bar w-0 fixed top-0 h-[0.3rem] bg-slate-700 z-[999]"
    ></div>
  )
}

export default ProgressBar
