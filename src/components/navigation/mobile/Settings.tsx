import Link from 'next/link';
import { useOutside } from 'src/hooks';

type Props = {
  settings: boolean;
  setSettings: CallableFunction;
}

const AccountSettings = [
  {
    name: 'Account Preferences',
    href: '/profile/preferences'
  }, {
    name: 'Account Settings',
    href: '/profile/settings'
  }, {
    name: 'Logout',
    href: '/logout',
  }
]

export const Settings = ({ settings, setSettings }: Props) => {


  const ref = useOutside<HTMLDivElement>(setSettings);

  return (
    <div ref={ref} className={`fixed bottom-14 md:bottom-20 right-2 md:right-4 rounded px-2 py-1 duration-500
      bg-slate-200/90 ${settings ? 'translate-x-0 ease-linear' : 'translate-x-[110%] ease-linear'}`}>
      <ul className='divide-y-2 px-4 divide-gray-400 font-bold tracking-wide md:text-lg'>
        {
          AccountSettings.map((setting) => {
            if(setting.name !== 'Logout')
              return (
                <li className='py-1' key={setting.name}>
                  <Link href={setting.href} >{setting.name}</Link>
                </li>
              );
            return (
              <li className='py-1' key={setting.name}>
                {setting.name}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}