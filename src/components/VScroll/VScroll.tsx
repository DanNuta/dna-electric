import React, { PropsWithChildren, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
//mport React, {PropsWithChildren} from 'react';

export const ScrollToTop: React.FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return <>{children}</>
}
