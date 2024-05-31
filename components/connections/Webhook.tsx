import { Input } from '../ui/input'
import { ActionBtnGroup } from './ActionBtnGroup'
import { ConnectionLayout } from './ConnectionLayout'

export const Webhook = () => {
  return (
    <ConnectionLayout title="Add DB">
      <div className="grid grid-cols-2 gap-2">
        <Input type="text" placeholder="Connector Name" />
        <Input type="text" placeholder="URL" />
        <Input type="text" placeholder="DB Name" />
        <Input type="text" placeholder="User" />
        <Input type="text" placeholder="Password" />
        <Input type="text" placeholder="Read Only" />
      </div>
      <ActionBtnGroup />
    </ConnectionLayout>
  )
}
