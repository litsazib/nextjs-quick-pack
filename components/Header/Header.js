import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header>
    <nav className="flex h-12 items-center px-4 justify-between shadow-md">
      <Link href="/">
        Header
      </Link>
    </nav>
  </header>
  )
}
