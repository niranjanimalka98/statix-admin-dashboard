"use client"

import { BarChart3, CreditCard, Home, Package, Settings, ShoppingCart, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "Dashboard",
    icon: Home,
    href: "/dashboard",
    color: "text-pink-500",
  },
  {
    title: "Customers",
    icon: Users,
    href: "/customers",
    color: "text-blue-500",
  },
  {
    title: "Orders",
    icon: ShoppingCart,
    href: "/orders",
    color: "text-green-500",
  },
  {
    title: "Products",
    icon: Package,
    href: "/products",
    color: "text-amber-500",
  },
  {
    title: "Billing",
    icon: CreditCard,
    href: "/billing",
    color: "text-purple-500",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/analytics",
    color: "text-cyan-500",
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-r from-pink-500 to-violet-500 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold">Statix Inc</span>
            <span className="text-xs text-muted-foreground">Admin Dashboard</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href} className="group">
                      <item.icon
                        className={`h-5 w-5 transition-transform duration-200 group-hover:scale-110 ${item.color}`}
                      />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/settings"}>
                  <Link href="/settings" className="group">
                    <Settings className="h-5 w-5 text-gray-500 transition-transform duration-200 group-hover:scale-110" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-3">
          <img
            src="/placeholder.svg?height=40&width=40"
            width="40"
            height="40"
            className="rounded-full ring-2 ring-primary/20"
            alt="Avatar"
          />
          <div className="flex flex-col">
            <span className="font-medium">Niranjan Imalka</span>
            <span className="text-xs text-muted-foreground">Administrator</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
