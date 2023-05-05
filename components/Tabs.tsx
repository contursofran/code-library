import NavLink from "@/components/NavLink"

interface TabsProps {
  href: string
  text: string
}

export default function Tabs({ tabs }: { tabs: TabsProps[] }) {
  return (
    <div className="mt-[-14px]">
      <div className=" border-b-2 border-gray-100 dark:border-gray-800">
        <nav aria-label="Tabs" className="mb-[-2px] flex space-x-6 pl-10">
          {tabs.map((tab, index) => (
            <NavLink isTab href={tab.href} key={index} text={tab.text} />
          ))}
        </nav>
      </div>
    </div>
  )
}
