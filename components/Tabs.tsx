import NavLink, { NavItem } from "@/components/NavLink"

export default function Tabs({ tabs }: { tabs: NavItem[] }) {
  return (
    <div className="mt-[-14px]">
      <div className=" border-b-2 border-gray-100 dark:border-gray-800">
        <nav aria-label="Tabs" className="mb-[-2px] flex space-x-6 pl-10">
          {tabs.map((tab, index) => (
            <NavLink isTab href={tab.href} key={index} title={tab.title} />
          ))}
        </nav>
      </div>
    </div>
  )
}
