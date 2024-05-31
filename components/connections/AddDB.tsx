import { Input } from '../ui/input'
import { ActionBtnGroup } from './ActionBtnGroup'
import { ConnectionLayout } from './ConnectionLayout'

export const AddDB = () => {
  return (
    <ConnectionLayout title="Zapier Webhooks">
      <Input type="text" placeholder="Connector Name" className="mb-4" />
      <Input type="text" placeholder="Webhook URL" />
      <ActionBtnGroup />
    </ConnectionLayout>
  )
}
