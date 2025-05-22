import { ArrowDown, ArrowUp, DollarSign, ShoppingBag, Users, View } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface AnalyticsMetricsProps {
  timeframe: string
}

export function AnalyticsMetrics({ timeframe }: AnalyticsMetricsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 pb-2">
          <CardTitle className="text-sm font-medium">Total Views</CardTitle>
          <View className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent className="p-6">
          <div className="text-3xl font-bold">45,231</div>
          <div className="flex items-center gap-1 pt-1">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <p className="text-xs text-green-500">+12.5% from last {timeframe.slice(0, -2)}</p>
          </div>
        </CardContent>
      </Card>
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 bg-gradient-to-r from-pink-500/20 to-rose-500/20 pb-2">
          <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
          <Users className="h-4 w-4 text-rose-600" />
        </CardHeader>
        <CardContent className="p-6">
          <div className="text-3xl font-bold">23,487</div>
          <div className="flex items-center gap-1 pt-1">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <p className="text-xs text-green-500">+8.2% from last {timeframe.slice(0, -2)}</p>
          </div>
        </CardContent>
      </Card>
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 pb-2">
          <CardTitle className="text-sm font-medium">Orders</CardTitle>
          <ShoppingBag className="h-4 w-4 text-emerald-600" />
        </CardHeader>
        <CardContent className="p-6">
          <div className="text-3xl font-bold">1,234</div>
          <div className="flex items-center gap-1 pt-1">
            <ArrowDown className="h-4 w-4 text-red-500" />
            <p className="text-xs text-red-500">-2.3% from last {timeframe.slice(0, -2)}</p>
          </div>
        </CardContent>
      </Card>
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 bg-gradient-to-r from-purple-500/20 to-violet-500/20 pb-2">
          <CardTitle className="text-sm font-medium">Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-violet-600" />
        </CardHeader>
        <CardContent className="p-6">
          <div className="text-3xl font-bold">$34,567</div>
          <div className="flex items-center gap-1 pt-1">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <p className="text-xs text-green-500">+18.7% from last {timeframe.slice(0, -2)}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
