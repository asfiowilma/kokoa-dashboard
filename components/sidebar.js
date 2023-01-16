import React, { useContext, useRef, useState } from 'react'
import { NavLink } from './NavLink'
import { AiFillHome, AiFillSetting } from 'react-icons/ai'
import { GiFire, GiCakeSlice, GiStrawberry } from 'react-icons/gi'
import { SiGitea } from 'react-icons/si'
import { useSkelefire } from '@context/SkelefireContext/useSkelefire'
import { useSidebar } from '@context/SidebarContext'
import { CgChevronDoubleLeftO, CgChevronDoubleRightO } from 'react-icons/cg'

export default function Sidebar() {
  const { sidebar, dispatch } = useSidebar()

  const setExpanded = (isExpanded) =>
    dispatch({ type: 'set_expanded', payload: isExpanded })

  return sidebar.isExpanded ? (
    <SidebarExpanded {...{ setExpanded }} />
  ) : (
    <SidebarCollapsed {...{ setExpanded }} />
  )
}

export function SidebarExpanded({ setExpanded }) {
  const { skelefire } = useSkelefire()

  return (
    <div
      className={`flex flex-col h-full bg-base-100 rounded-box shadow-lg transition transform origin-top-left`}
    >
      <ul className="flex-1 menu rounded-box p-4 w-60 overflow-y-auto ">
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
            {skelefire.activities.length > 0 && (
              <div className="ml-auto badge border-none badge-accent bg-neutral-content">
                {skelefire.activities.length}
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
          <NavLink href="/matcha" exact>
            <SiGitea className="w-6 h-6 mr-2" /> Matcha
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
        onClick={() => setExpanded(false)}
        className="btn btn-ghost flex items-center justify-between m-4"
      >
        <div>collapse sidebar</div> <CgChevronDoubleLeftO className="w-6 h-6" />
      </div>
    </div>
  )
}

export function SidebarCollapsed({ setExpanded }) {
  const { skelefire } = useSkelefire()

  return (
    <div
      className={`flex flex-col h-full bg-base-100 rounded-box shadow-lg transform origin-top-left`}
    >
      <ul className="flex-1 menu rounded-box overflow-y-auto">
        <li>
          <NavLink href="/" exact>
            <AiFillHome className="w-6 h-6 mt-2" />
          </NavLink>
        </li>
        <li>
          <NavLink href="/settings" exact>
            <AiFillSetting className="w-6 h-6" />
          </NavLink>
        </li>
        <div className="divider my-0" />
        <li>
          <NavLink href="/skelefire" exact>
            <div className="indicator">
              <GiFire className="w-6 h-6" />
              {skelefire.activities.length > 0 && (
                <div className="indicator-item ml-auto badge border-none badge-accent bg-neutral-content">
                  {skelefire.activities.length}
                </div>
              )}
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink href="/strawberry" exact>
            <GiStrawberry className="w-6 h-6" />
          </NavLink>
        </li>
        <li>
          <NavLink href="/matcha" exact>
            <SiGitea className="w-6 h-6" />
          </NavLink>
        </li>
        <div className="divider my-0" />
        <li>
          <NavLink href="/tiramisu" exact>
            <GiCakeSlice className="w-6 h-6" />
          </NavLink>
        </li>
      </ul>
      <div
        onClick={() => setExpanded(true)}
        className="btn btn-ghost rounded-box"
      >
        <CgChevronDoubleRightO className="w-6 h-6" />
      </div>
    </div>
  )
}
