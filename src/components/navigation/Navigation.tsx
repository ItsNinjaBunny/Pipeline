import { DesktopNavigation } from './desktop/Desktop'
import { MobileNavigation } from './mobile/Mobile'
import { NavigationLinks } from './constants';
import { useState } from 'react';

export const Navigation = () => {
  const [selected, setSelected] = useState('Home');

  return (
    <>
      <DesktopNavigation selected={selected} links={NavigationLinks} className={`md:flex hidden`} />
      <MobileNavigation selected={selected} className={`md:hidden`} links={NavigationLinks} />
    </>
  )
}