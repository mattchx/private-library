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
        <Link component={NextLink} className={`link ${pathname === '/dashboard/book-list' ? 'active' : ''}`} href="/dashboard/book-list">
          Books
        </Link>
     
      </Toolbar>
    </AppBar>
  )
}

// "use client"
// import React from 'react'
// import { usePathname } from 'next/navigation'
// import NextLink from 'next/link'
// import { Link } from '@mui/material'

// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

// export default function NavLinks() {
//   const pathname = usePathname()

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>

//           <nav>
//             <Link component={NextLink} className={`NextLink ${pathname === '/dashboard' ? 'active' : ''}`} href="/dashboard">
//               Home
//             </Link>
//             <Link component={NextLink} className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">
//               About
//             </Link>
//           </nav>

//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }