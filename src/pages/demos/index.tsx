import styles from './demos.module.scss'
import ReelEffect from '@/components/Demos/ReelEffect/ReelEffect'
import InfiniteMarquee from '@/components/Demos/InfiniteMarquee/InfiniteMarquee'
import { useRef, useState } from 'react'

const Demos = () => {
  const [demoNumber, setDemoNumber] = useState(-1)
  const demoActiveRef = useRef<HTMLLIElement | null>(null)
  const bulletRef = useRef<HTMLSpanElement | null>(null)

  const demoList = [<ReelEffect />, <InfiniteMarquee />]

  const handleDemoItem = (
    e: React.MouseEvent<HTMLLIElement>,
    demoItem: number
  ) => {
    demoActiveRef.current?.classList.remove(styles.active)
    e.currentTarget.classList.add(styles.active)
    demoActiveRef.current = e.currentTarget
    setDemoNumber(demoItem)

    const { y } = e.currentTarget.getBoundingClientRect()
    bulletRef.current && (bulletRef.current.style.top = `${y + 10}px`)
  }

  return (
    <div className={styles.demo}>
      <aside className={styles.demo__aside}>
        <span ref={bulletRef} className={styles.demo__bullet}></span>
        <ul className={styles.demo__list} role="list">
          <li onClick={(e) => handleDemoItem(e, 0)}>
            Reel Effect (Slot Machine)
          </li>
          <li onClick={(e) => handleDemoItem(e, 1)}>Infinite Marquee</li>
        </ul>
      </aside>
      <main className={styles.demo__main}>
        {demoNumber == -1 ? 'Demo' : demoList[demoNumber]}
      </main>
    </div>
  )
}

export default Demos
