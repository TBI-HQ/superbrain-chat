'use client'

import { PinRightIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { CalBooking } from '../calBooking'

export const Hero = () => {
  const router = useRouter()
  return (
    <div className="max-w-5xl m-auto my-24 w-full px-4 lg:px-0">
      <div className="hero-content-action">
        <div className="content max-w-[460px] mb-8">
          <h1 className="mb-8 text-5xl font-bold ">
            SuperBrain Powers your Organisation
          </h1>
          <p className="text-[#71717a] text-xl">
            Accelerate decision with actionable insights from your data to support informed decisions and strategic success.
          </p>
        </div>
        <div className="cta-btn-actions flex gap-2">
          <Button variant="secondary" onClick={() => router.push('/login')}>
            <PinRightIcon />
            <span className="ml-2 md:flex font-bold">Sign in</span>
          </Button>
          <CalBooking />
        </div>
      </div>
    </div>
  )
}
