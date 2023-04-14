import Link from 'next/link'
import { ROOT_URL } from 'services/constants'
import { ReactNode } from 'react'
import { useRouter } from 'next/router'

interface NavLinkProps {
  href: string
  exact?: boolean
  children?: ReactNode
  className?: string
}

export default function NavLink({
  href,
  exact,
  children,
  className,
}: NavLinkProps) {
  const { pathname } = useRouter()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  return (
    <Link
      href={ROOT_URL + href}
      className={`${className} ${isActive ? 'active' : ''}`}
    >
      {children}
    </Link>
  )
}
