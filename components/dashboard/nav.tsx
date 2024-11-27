'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  FolderOpen,
  Package,
  Settings,
  Plus,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { UserNav } from './user-nav'

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'Projects',
    icon: FolderOpen,
    href: '/dashboard/projects',
    color: 'text-violet-500',
  },
  {
    label: 'Products',
    icon: Package,
    href: '/dashboard/products',
    color: 'text-pink-700',
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col border-r bg-card">
      <div className="flex h-16 items-center px-4">
        <Link href="/dashboard" className="flex items-center">
          <span className="font-bold">UGC AI</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="space-y-2 px-4">
          <Link href="/dashboard/projects/new">
            <Button className="w-full justify-start gap-2">
              <Plus className="h-4 w-4" />
              Create Ad
            </Button>
          </Link>
          <nav className="grid gap-1 pt-2">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                  pathname === route.href ? 'bg-accent' : 'transparent',
                )}
              >
                <route.icon className={cn('mr-2 h-4 w-4', route.color)} />
                <span>{route.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="mt-auto">
        <UserNav />
      </div>
    </div>
  )
}

