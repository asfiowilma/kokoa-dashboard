import React from 'react'

export default function CourseTabs({ coursesTabs, activeTab, onTabChange }) {
  return (
    <div className="tabs">
      {coursesTabs.map((c) => (
        <div
          key={c.shortname}
          onClick={() => onTabChange(c.shortname)}
          className={`indicator tab tab-lifted ${
            c.shortname === activeTab && 'tab-active'
          }`}
        >
          {c.shortname}
          {c.unread > 0 && (
            <div
              className={`badge ml-2 ${
                c.shortname === activeTab && 'badge-outline'
              }`}
            >
              {c.unread}
            </div>
          )}
        </div>
      ))}
      <div className="flex-1 tab tab-lifted cursor-default"></div>
    </div>
  )
}
