"use client"

import { useState } from "react"

import { AnalyticsCharts } from "@/components/analytics/analytics-charts"
import { AnalyticsMetrics } from "@/components/analytics/analytics-metrics"
import { AnalyticsTable } from "@/components/analytics/analytics-table"
import { DashboardShell } from "@/components/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AnalyticsPage() {
  const [timeframe, setTimeframe] = useState("weekly")

  return (
    <DashboardShell>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
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

        <AnalyticsMetrics timeframe={timeframe} />

        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
            <CardTitle>Performance Overview</CardTitle>
            <CardDescription>
              {timeframe === "daily" ? "24 hours" : timeframe === "weekly" ? "7 days" : "30 days"} performance metrics
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <AnalyticsCharts timeframe={timeframe} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Performing Products</CardTitle>
            <CardDescription>Products with the highest revenue and engagement</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <AnalyticsTable timeframe={timeframe} />
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}
