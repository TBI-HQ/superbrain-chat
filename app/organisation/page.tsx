import { Button } from '@/components/ui/button'
import AddUserLayout from '../add-user/addUserLayout'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'

export default function Organisation() {
  return (
    <AddUserLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold">Organisation</h1>
        <p className="mb-4 text-[14px] text-zinc-500">
          Your organisation details
        </p>
        <div className="input-form max-w-[700px]">
          <div className="flex gap-2 mb-4">
            <Input
              type="text"
              placeholder="Your Name"
              className=" w-[350px]"
              value="John Doe"
              disabled
            />
            <Input
              type="text"
              placeholder="Organisation Name"
              className="w-[350px]"
              value="SuperBrain"
              disabled
            />
          </div>
          <div className="flex gap-2 mb-4">
            <Input
              type="text"
              placeholder="GST Number"
              className=" w-[350px]"
              value="27AABCU9603R1ZM"
              disabled
            />
            <Input
              type="text"
              placeholder="Billing Address"
              className="w-[350px]"
              value="123 Elm Street, Springfield, IL, 62701, USA"
              disabled
            />
          </div>
          <div className="flex gap-2 mb-4">
            <Input
              type="text"
              placeholder="City"
              className="w-[350px]"
              value="Newyork"
              disabled
            />
            <Input
              type="text"
              placeholder="State"
              className="w-[350px]"
              value="Newyork"
              disabled
            />
            {/* <Input type="text" placeholder="Designation" className='w-[350px]'/> */}
          </div>
          <div className="flex gap-2 mb-4">
            <Input
              type="text"
              placeholder="Website URL"
              className=" w-[350px]"
              value="https://super.trianglehq.co/"
              disabled
            />
            <Input
              type="text"
              placeholder="Admin Email ID"
              className="w-[350px]"
              value="superbrain@trianglehq.co"
              disabled
            />
          </div>

          <div className="flex gap-2 mb-4">
            <Input
              type="password"
              placeholder="Admin Password"
              className=" w-[350px]"
              value="P@ssw0rd123!"
              disabled
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              className="w-[350px]"
              value="P@ssw0rd123!"
              disabled
            />
          </div>

          <div className="mb-4">
            <Textarea
              cols={100}
              disabled
              placeholder="Policies Content Box (a simple context box where they can put a lot of content just copy paste,
                this content will be kept to make users follow the company policies.)"
              className="w-full min-h-40"
              value="This is a placeholder for the organisation's policies. All employees are expected to adhere to the guidelines set forth in this document. Please review the policies regularly to stay informed of any updates.

              - Policy 1: Code of Conduct
              - Policy 2: Privacy Policy
              - Policy 3: Terms of Service
              - Policy 4: Data Protection Policy
              
              For more detailed information, please visit our internal policies page on the company intranet."
            />
          </div>
          <div className="btn text-right flex justify-end">
            <Button variant="secondary" className="font-bold">
              <span className='ml-1'>Edit</span>
            </Button>
            <Button variant="default" className="font-bold ml-2" disabled>
              Save Organisation
            </Button>
          </div>
        </div>
      </div>
    </AddUserLayout>
  )
}
