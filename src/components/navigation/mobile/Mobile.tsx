import { useState } from 'react';
import { type NavigationLink } from '../types';
import Link from 'next/link';
import { Settings } from './Settings';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

type Props = {
  selected: string;
  className: string;
  links: NavigationLink[];
}

export const MobileNavigation = ({ selected, links, className }: Props) => {
  const [settings, setSettings] = useState(false);
  const { data: session } = useSession();

  const toggleSettings = () => setSettings((prev) => !prev);
  const closeSettings = () => setSettings(false);

  return (
    <>
      <nav className={`${className} fixed flex bottom-0 w-full bg-slate-200/90 py-2 shadow-md`}>
        <ul className='flex justify-evenly items-center w-full'>
          {
            links.map((link) => {
              if(link.name !== 'Profile') {
                return (
                  <li key={link.name}>
                    <Link href={link.href}>{link.icon}</Link>
                  </li>
                )
              }

              return (
                <li id='profile-settings' className='' onClick={toggleSettings} key={link.name}>
                  {
                    session?.user?.image ? (
                      <Image className='w-7 h-7 md:w-8 md:h-8 rounded-full' width={32} height={32} src={session?.user?.image} alt='' />
                    ) : (
                      link.icon
                    )
                  }
                </li>
              )
            })
          }
        </ul>
      </nav>
      <Settings settings={settings} setSettings={closeSettings} />
    </>
  );
}