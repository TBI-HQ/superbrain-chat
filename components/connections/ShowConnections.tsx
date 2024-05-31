import { PlusIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'

export const ShowConnections = ({
  handleConnection
}: {
  handleConnection: () => void
}) => {
  return (
    <div className="connections p-8">
      <div className="flex justify-between items-center mb-16">
        <div className="connections-content">
          <h1 className="text-2xl font-bold">Connections</h1>
          <p className="mb-4 text-[14px] text-zinc-500">
            Select your connections
          </p>
        </div>
        <Button
          variant="default"
          className="font-bold flex gap-1"
          onClick={handleConnection}
        >
          <PlusIcon /> Add Connections
        </Button>
      </div>
      <div className="text-zinc-400 grid place-items-center h-full">
        No connections found!
      </div>
    </div>
  )
}
