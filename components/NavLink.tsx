import { ENV } from 'services/constants'
import Link from 'next/link'
import { ReactNode } from 'react'
import { useRouter } from 'next/router'

interface NavLinkProps {
  href: string
  exact?: boolean
  children?: ReactNode
  className?: string
}

function NavLink({ href, exact, children, className }: NavLinkProps) {
  const { pathname } = useRouter()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  return (
    <Link
      href={href}
      as={ENV == 'production' ? `/kokoa-dashboard${href}` : href}
      className={`${className} ${isActive ? 'active' : ''}`}
    >
      {children}
    </Link>
  )
}
export { NavLink }
