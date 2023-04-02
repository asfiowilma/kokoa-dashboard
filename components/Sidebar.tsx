import { useSidebar } from '@hooks/useSidebar'
import { useSkelefire } from '@hooks/useSkelefire'
import { AiFillHome, AiFillSetting } from 'react-icons/ai'
import { GiFire, GiCakeSlice, GiStrawberry, GiSandwich } from 'react-icons/gi'
import { CgChevronDoubleLeftO, CgChevronDoubleRightO } from 'react-icons/cg'
import { NavLink } from './NavLink'

interface SidebarProps {
  setIsExpanded: (to: boolean) => void
}

export default function Sidebar() {
  const { isExpanded, setIsExpanded } = useSidebar()

  return isExpanded ? (
    <SidebarExpanded {...{ setIsExpanded }} />
  ) : (
    <SidebarCollapsed {...{ setIsExpanded }} />
  )
}

export function SidebarExpanded({ setIsExpanded }: SidebarProps) {
  const { activities } = useSkelefire()

  return (
    <div
      className={`flex flex-col h-full bg-base-100 rounded-box shadow-lg transition transform origin-top-left`}
    >
      <ul className="flex-1 menu rounded-box p-4 w-42 lg:w-60 overflow-y-auto ">
        <li>
          <NavLink href="/" exact>
            <AiFillHome className="w-6 h-6 mr-2" /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink href="/settings" exact>
            <AiFillSetting className="w-6 h-6 mr-2" /> Settings
          </NavLink>
        </li>
        <li className="menu-title mt-4 mb-1">
          <span>Notifiers</span>
        </li>
        <li>
          <NavLink href="/skelefire" exact>
            <div className="flex items-center">
              <GiFire className="w-6 h-6 mr-2" /> Skelefire
            </div>
            {activities.length > 0 && (
              <div className="ml-auto badge border-none badge-accent bg-neutral-content">
                {activities.length}
              </div>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink href="/strawberry" exact>
            <GiStrawberry className="w-6 h-6 mr-2" /> Strawberry
          </NavLink>
        </li>
        <li>
          <NavLink href="/biscotti" exact>
            <GiSandwich className="w-6 h-6 mr-2" /> Biscotti
          </NavLink>
        </li>
        <li className="menu-title mt-4 mb-1">
          <span>Apps</span>
        </li>
        <li>
          <NavLink href="/tiramisu" exact>
            <GiCakeSlice className="w-6 h-6 mr-2" />
            Tiramisu
          </NavLink>
        </li>
      </ul>
      <div
        onClick={() => setIsExpanded(false)}
        className="btn btn-ghost flex items-center justify-between m-4"
      >
        <div>
          collapse <span className="hidden md:inline">sidebar</span>
        </div>
        <CgChevronDoubleLeftO className="w-6 h-6" />
      </div>
    </div>
  )
}

export function SidebarCollapsed({ setIsExpanded }: SidebarProps) {
  const { activities } = useSkelefire()

  return (
    <div
      className={`flex flex-col h-full bg-base-100 rounded-box shadow-lg transform origin-top-left`}
    >
      <ul className="flex-1 menu rounded-box overflow-y-auto">
        <li>
          <NavLink href="/" exact>
            <AiFillHome className="w-5 h-5 mt-2" />
          </NavLink>
        </li>
        <li>
          <NavLink href="/settings" exact>
            <AiFillSetting className="w-5 h-5" />
          </NavLink>
        </li>
        <div className="divider my-0" />
        <li>
          <NavLink href="/skelefire" exact>
            <div className="indicator">
              <GiFire className="w-5 h-5" />
              {activities.length > 0 && (
                <div className="indicator-item ml-auto badge border-none badge-accent bg-neutral-content">
                  {activities.length}
                </div>
              )}
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink href="/strawberry" exact>
            <GiStrawberry className="w-5 h-5" />
          </NavLink>
        </li>
        <li>
          <NavLink href="/biscotti" exact>
            <GiSandwich className="w-5 h-5" />
          </NavLink>
        </li>
        <div className="divider my-0" />
        <li>
          <NavLink href="/tiramisu" exact>
            <GiCakeSlice className="w-5 h-5" />
          </NavLink>
        </li>
      </ul>
      <div
        onClick={() => setIsExpanded(true)}
        className="btn btn-ghost rounded-box"
      >
        <CgChevronDoubleRightO className="w-5 h-5" />
      </div>
    </div>
  )
}
