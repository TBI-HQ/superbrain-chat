'use client'

import AddUserLayout from '../add-user/addUserLayout'
import { useEffect, useState } from 'react'
import { ChooseConnection } from '@/components/connections'
import { ShowConnections } from '@/components/connections/ShowConnections'
import { ShowCSV } from '@/components/connections/ShowCSV'
import { RiArrowLeftSLine } from '@remixicon/react'
import { Json } from '@/components/connections/Json'
import { Webhook } from '@/components/connections/Webhook'
import { Api } from '@/components/connections/Api'
import { Docs } from '@/components/connections/Docs'
import { AddDB } from '@/components/connections/AddDB'

export default function ConnectionsPage() {
  const [isAddConnection, setIsAddConnection] = useState(false)
  const [connectionType, setConnectionType] = useState('show-connection')

  const getConnectionLayout = (type: string) => {
    if (connectionType === 'show-connection-cards') {
      return (
        <ChooseConnection
          type={connectionType}
          handleConnection={setConnectionType}
        />
      )
    }
    if (connectionType === 'show-csv') {
      return <ShowCSV />
    }
    if (connectionType === 'show-json') {
      return <Json />
    }
    if (connectionType === 'show-webhook') {
      return <AddDB />
    }
    if (connectionType === 'show-api') {
      return <Api />
    }
    if (connectionType === 'show-docs') {
      return <Docs />
    }
    if (connectionType === 'show-database') {
      return <Webhook />
    }
    return (
      <ShowConnections
        handleConnection={() => setConnectionType('show-connection-cards')}
      />
    )
  }

  return (
    <AddUserLayout>
      {/* {connectionType !== 'show-connection' && (
        <div
          className="p-6 text-sm flex items-center cursor-pointer"
          onClick={() => setConnectionType('show-connection')}
        >
          <RiArrowLeftSLine size={16} />
          <span className="ml-1">Back</span>
        </div>
      )} */}
      {getConnectionLayout(connectionType)}
    </AddUserLayout>
  )
}
