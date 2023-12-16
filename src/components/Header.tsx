import React from 'react'
import Link from 'next/link'
import { atom, useAtomValue } from 'jotai'

export const simpleViewAtom = atom(false)

const Header = () => {
  const isSimpleView = useAtomValue(simpleViewAtom)

  return (
    <header className="max-w-[36rem] m-auto mt-20 mb-16 px-6">
      <Link href="/">
        <div className="text-xl uppercase">Record, Not Recall</div>
      </Link>
      <nav className="mt-2">
        <ul className="flex gap-4">
          <li className="text-sm hover:underline text-sky-700">
            <Link href="/about">About</Link>
          </li>
          <li className="text-sm hover:underline text-sky-700">
            <Link href="https://www.jiieu.com">Portfolio</Link>
          </li>
          <li className="text-sm hover:underline text-sky-700">
            <Link href={isSimpleView ? '/' : '/simple'}>
              {isSimpleView ? 'Regular' : 'Simplified'}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
