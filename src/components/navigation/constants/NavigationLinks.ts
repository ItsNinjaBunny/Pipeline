import { HouseIcon, CalendarIcon, UsersIcon, ChartBarIcon, UserCircleIcon, ComputerIcon } from '../../icons'


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
    name: 'Clients',
    href: '/clients',
    icon: UsersIcon({ className: LinkStyles }),
  }, {
    name: 'Analytics',
    href: '/analytics',
    icon: ChartBarIcon({ className: LinkStyles }),
  }, {
    name: 'Automation',
    href: '/automation',
    icon: ComputerIcon({ className: LinkStyles }),
  }, {
    name: 'Profile',
    href: '/profile',
    icon: UserCircleIcon({ className: LinkStyles }),
  }
]