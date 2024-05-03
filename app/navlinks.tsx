'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  { name: 'Home', href: '/' },
  { name: 'Login', href: '/private' },
];

export function Navlinks() {
  const pathname = usePathname()

  return (
    <ul className="flex items-center justify-between gap-3 mr-auto">
      {navlinks.map(link => {
        const isActive = pathname === link.href
        return (
          <li className="ml-12" key={link.name}>
            <Link 
              href={link.href} 
              className={`${isActive ? 'text-[#E7C7A1]' : 'hover:text-[#fae8d2]'}`}
            >
              {link.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}