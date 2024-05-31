import { NavItem } from '@/app/dashboard/nav-item'
import {
  RiBankCardLine,
  RiExchange2Line,
  RiInbox2Line,
  RiPieChartLine,
  RiSettingsLine,
  RiShieldKeyholeLine,
  RiShieldStarLine,
  RiStackLine,
  RiUser4Line
} from '@remixicon/react'

export const SidebarMenu = () => {
  return (
    <div className="flex-1 overflow-auto py-2">
      <nav className="items-start px-4 h-full text-sm font-medium flex flex-col justify-between">
        <div className="w-full">
          <NavItem href="/dashboard">
            <RiUser4Line size={16} />
            Access
          </NavItem>
          <NavItem>
            <RiExchange2Line size={16} />
            Connections
          </NavItem>
          <NavItem>
            <RiPieChartLine size={16} />
            Analytics
          </NavItem>
          <NavItem>
            <RiInbox2Line size={16} />
            Log Reports
          </NavItem>
          <NavItem href="/organisation">
            <RiShieldStarLine size={16} />
            Organisation
          </NavItem>
          <NavItem>
            <RiSettingsLine size={16} />
            Configuration
          </NavItem>
          <NavItem>
            <RiBankCardLine size={16} />
            Manage Billing
          </NavItem>
          <NavItem>
            <RiShieldKeyholeLine size={16} />
            Security
          </NavItem>
        </div>
        <div className="w-full mb-2">
          <NavItem href="/panel" isActive>
            <RiStackLine size={16} />
            Control Panel
          </NavItem>
        </div>
      </nav>
    </div>
  )
}
