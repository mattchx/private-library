'use client'

import { usePathname } from 'next/navigation'
import NextLink from 'next/link'
import { AppBar, Toolbar, Link } from '@mui/material'

export function NavLinks() {
  const pathname = usePathname()

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
     
        <Link component={NextLink} className={`NextLink ${pathname === '/dashboard' ? 'active' : ''}`} href="/dashboard">
          Home
        </Link>
     
      </Toolbar>
    </AppBar>
  )
}
