import { HouseIcon, CalendarIcon, UsersIcon, ChartBarIcon, UserCircleIcon } from '../../icons'


const LinkStyles = 'w-7 h-7 md:w-8 md:h-8'
export const NavigationLinks = [
  {
    name: 'Home',
    href: '/',
    icon: HouseIcon({ className: LinkStyles }),
  }, {
    name: 'Calendar',
    href: '/calendar',
    icon: CalendarIcon({ className: LinkStyles }),
  }, {
    name: 'Contacts',
    href: '/contacts',
    icon: UsersIcon({ className: LinkStyles }),
  }, {
    name: 'Analytics',
    href: '/analytics',
    icon: ChartBarIcon({ className: LinkStyles }),
  }, {
    name: 'Profile',
    href: '/profile',
    icon: UserCircleIcon({ className: LinkStyles }),
  }
]