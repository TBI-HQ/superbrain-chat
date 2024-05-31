'use client'

import { Button } from '@/components/ui/button'
import AddUserLayout from '../add-user/addUserLayout'
import { PlusIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ConnectionCards } from '@/components/connections/ConnectionCard'
import { ChooseConnection } from '@/components/connections'
import { ShowConnections } from '@/components/connections/ShowConnections'
import { ShowCSV } from '@/components/connections/ShowCSV'

export default function ConnectionsPage() {
  const [isAddConnection, setIsAddConnection] = useState(false)
  const [connectionType, setConnectionType] = useState('show-connection')

  const getConnectionLayout = (type: string) => {
    if (connectionType === 'show-connection-cards') {
      return <ChooseConnection type={connectionType} handleConnection={setConnectionType}/>
    }
    if(connectionType === 'show-csv') {
        return <ShowCSV />
    }
    return (
      <ShowConnections
        handleConnection={() => setConnectionType('show-connection-cards')}
      />
    )
  }

  return <AddUserLayout>{getConnectionLayout(connectionType)}</AddUserLayout>
}
