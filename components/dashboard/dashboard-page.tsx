"use client"

import { ArrowDown, ArrowUp, DollarSign, Package, ShoppingCart, Users } from "lucide-react"
import { useState } from "react"

import { DashboardShell } from "@/components/dashboard-shell"
import { DashboardOverview } from "@/components/dashboard/dashboard-overview"
import { RecentOrders } from "@/components/dashboard/recent-orders"
import { RecentSales } from "@/components/dashboard/recent-sales"
import { TopProducts } from "@/components/dashboard/top-products"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DashboardPage() {
  const [timeframe, setTimeframe] = useState("weekly")

  return (
    <DashboardShell>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <div className="flex items-center gap-2">
            <Tabs defaultValue="weekly" className="w-[300px]" onValueChange={setTimeframe}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="daily">Daily</TabsTrigger>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
              </TabsList>
            </Tabs>
            <Button>Export</Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 bg-gradient-to-r from-pink-500/20 to-pink-600/20 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-pink-600" />
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-3xl font-bold">$45,231.89</div>
              <div className="flex items-center gap-1 pt-1">
                <ArrowUp className="h-4 w-4 text-green-500" />
                <p className="text-xs text-green-500">+20.1% from last {timeframe.slice(0, -2)}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 pb-2">
              <CardTitle className="text-sm font-medium">Customers</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-3xl font-bold">+2,350</div>
              <div className="flex items-center gap-1 pt-1">
                <ArrowUp className="h-4 w-4 text-green-500" />
                <p className="text-xs text-green-500">+12.2% from last {timeframe.slice(0, -2)}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 bg-gradient-to-r from-green-500/20 to-green-600/20 pb-2">
              <CardTitle className="text-sm font-medium">Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-3xl font-bold">+12,234</div>
              <div className="flex items-center gap-1 pt-1">
                <ArrowUp className="h-4 w-4 text-green-500" />
                <p className="text-xs text-green-500">+19% from last {timeframe.slice(0, -2)}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 bg-gradient-to-r from-amber-500/20 to-amber-600/20 pb-2">
              <CardTitle className="text-sm font-medium">Products</CardTitle>
              <Package className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-3xl font-bold">+573</div>
              <div className="flex items-center gap-1 pt-1">
                <ArrowDown className="h-4 w-4 text-red-500" />
                <p className="text-xs text-red-500">-2% from last {timeframe.slice(0, -2)}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-violet-500/10 to-purple-500/10">
              <CardTitle>Revenue Overview</CardTitle>
              <CardDescription>
                {timeframe === "daily" ? "24 hours" : timeframe === "weekly" ? "7 days" : "30 days"} revenue overview
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2 pt-6">
              <DashboardOverview timeframe={timeframe} />
            </CardContent>
          </Card>
          <Card className="col-span-3 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
              <CardTitle>Recent Sales</CardTitle>
              <CardDescription>You made 265 sales this {timeframe.slice(0, -2)}.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <RecentSales />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-500/10 to-emerald-500/10">
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Latest customer orders</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <RecentOrders />
            </CardContent>
          </Card>
          <Card className="col-span-3 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-pink-500/10 to-rose-500/10">
              <CardTitle>Top Products</CardTitle>
              <CardDescription>Best selling products this {timeframe}</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <TopProducts />
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  )
}
