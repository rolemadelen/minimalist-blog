import { metadata } from '@/lib/metadata'
import Link from 'next/link'
import React from 'react'

interface FooterProps {
  pageFrom: string
}

const Footer: React.FC<FooterProps> = ({ pageFrom }) => {
  const { owner } = metadata
  return (
    <footer className="max-w-[18rem] m-auto flex flex-col items-center mt-5">
      <div className="footer max-w-[18rem] mb-5 m-auto flex justify-center item-center">
        © 2024 / {owner.name.toUpperCase()}
      </div>
      <span className="puppy mb-16">
        <span className="ear-left">૮</span> • ᴥ •{' '}
        <span className="ear-right">ა</span>
      </span>
    </footer>
  )
}

export default Footer
