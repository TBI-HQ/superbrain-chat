import { Button } from '../ui/button'

export const ActionBtnGroup = () => {
  return (
    <div className="action-btns mt-8 flex gap-2 justify-center">
      <Button variant="default">Save</Button>
      <Button variant="secondary">Add Next</Button>
    </div>
  )
}
