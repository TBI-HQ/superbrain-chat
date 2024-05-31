import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { ActionBtnGroup } from './ActionBtnGroup'
import { ConnectionLayout } from './ConnectionLayout'

export const Docs = () => {
  return (
    <ConnectionLayout title="Content Box">
      <Input
        type="text"
        placeholder="Connector Name"
        className="w-full mb-3 w=[300px]"
      />
      <Textarea
        placeholder="Write your content here"
        className="w-full  h-[180px]"
      />
      <ActionBtnGroup />
    </ConnectionLayout>
  )
}
