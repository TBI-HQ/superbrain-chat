'use client'

// import { getUsers } from '@/lib/db';
import { UsersTable } from './user-table'
import { Search } from './search'

import DashboardLayout from './dashboardLayout'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PlusIcon } from '@radix-ui/react-icons'
import { users } from '@/lib/user'
import { useRouter } from 'next/navigation'

export default function Dashboard({
  searchParams
}: {
  searchParams: { q: string; offset: string }
}) {
  const search = searchParams.q ?? ''
  const offset = searchParams.offset ?? 0
  const router = useRouter()

  //   const { users, newOffset } = await getUsers(search, Number(offset));

  return (
    <DashboardLayout>
      <main className="flex flex-1 flex-col p-4 md:p-6">
        <div className="flex items-center mb-8 justify-between">
          <h1 className="font-semibold text-lg md:text-2xl">Users</h1>
          <Button
            variant="default"
            className="font-bold flex gap-1"
            onClick={() => router.push('/add-user')}
          >
            <PlusIcon /> Add User
          </Button>
        </div>
        <div className="w-full mb-4">
          <Search value={searchParams.q} />
        </div>
        <UsersTable users={users} offset={0} />
      </main>
    </DashboardLayout>
  )
}
