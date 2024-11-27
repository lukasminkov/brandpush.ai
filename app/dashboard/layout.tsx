import Link from 'next/link'
import { DashboardNav } from '@/components/dashboard/nav'
import { ThemeToggle } from '@/components/theme-toggle'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <DashboardNav />
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b bg-background px-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-semibold">
              UGC AI
            </Link>
            <span className="text-lg font-semibold">Dashboard</span>
          </div>
          <ThemeToggle />
        </header>
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

