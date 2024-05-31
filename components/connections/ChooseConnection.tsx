import {
  RiArticleLine,
  RiBracesFill,
  RiBubbleChartLine,
  RiDatabase2Line,
  RiTerminalLine,
  RiWebhookLine
} from '@remixicon/react'
import { ConnectionCards } from './index'

export const ChooseConnection = ({
  type,
  handleConnection
}: {
  type: string
  handleConnection: any
}) => {
  const connectionCardData = [
    {
      title: 'Webhook',
      key: 'show-webhook',
      icon: <RiWebhookLine />
    },
    {
      title: 'API',
      key: 'show-api',
      icon: <RiTerminalLine />
    },
    {
      title: 'Docs',
      key: 'show-dosc',
      icon: <RiArticleLine />
    },
    {
      title: 'Database',
      key: 'show-database',
      icon: <RiDatabase2Line />
    },
    {
      title: 'JSON',
      key: 'show-json',
      icon: <RiBracesFill />
    },
    {
      title: 'CSV',
      key: 'show-csv',
      icon: <RiBubbleChartLine />
    }
  ]
  return (
    <div className="h-[calc(100vh-60px)] flex items-center justify-center flex-col">
      <h1 className="text-2xl font-bold mb-6">Choose your Connection</h1>
      <div className="p-8 grid place-items-center grid-cols-[repeat(3,_minmax(0,_210px))] gap-5">
        {connectionCardData.map((item, index) => (
          <ConnectionCards
            key={index}
            title={item.title}
            icon={item.icon}
            cardKey={item.key}
            handleConnection={handleConnection}
          />
        ))}
      </div>
    </div>
  )
}
