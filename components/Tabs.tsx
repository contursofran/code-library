"use client"

import { useState } from "react"
import HomeLayout from "app/(landing)/layout"

interface TabsProps {
  href: string
  id: string
  title: string
}

export default function Tabs({ tabs }: { tabs: TabsProps[] }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div className="-mt-6">
      <div className=" border-b-2 border-gray-800">
        <nav aria-label="Tabs" className="mb-[-2px] flex space-x-6">
          {tabs.map((tab) => (
            <button
              className={`${
                activeTab === tab.id
                  ? "border-gray-200 text-gray-200"
                  : "border-transparent text-gray-400 hover:text-gray-200"
              } border-b-2 py-4 text-sm font-medium`}
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
