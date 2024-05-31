import { Input } from '../ui/input'
import { ActionBtnGroup } from './ActionBtnGroup'
import { ConnectionLayout } from './ConnectionLayout'

export const Api = () => {
  return (
    <ConnectionLayout title="Connect API">
      <Input type="text" placeholder="Connector Name" className='mb-4'/>
      <Input type="text" placeholder="API URL" />
      <ActionBtnGroup />
    </ConnectionLayout>
  )
}
