"use client"

import { CreditCard, Download, Receipt } from "lucide-react"

import { BillingHistory } from "@/components/billing/billing-history"
import { PaymentMethods } from "@/components/billing/payment-methods"
import { DashboardShell } from "@/components/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function BillingPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h1 className="text-3xl font-bold tracking-tight">Billing</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download Invoices
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 pb-2">
              <CardTitle className="text-sm font-medium">Current Plan</CardTitle>
              <CreditCard className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">Business Pro</div>
              <p className="text-xs text-muted-foreground">$49.99/month</p>
              <Button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                Upgrade Plan
              </Button>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 pb-2">
              <CardTitle className="text-sm font-medium">Next Payment</CardTitle>
              <Receipt className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">$49.99</div>
              <p className="text-xs text-muted-foreground">Due on June 15, 2023</p>
              <Button variant="outline" className="mt-4 w-full">
                View Details
              </Button>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 bg-gradient-to-r from-pink-500/20 to-pink-600/20 pb-2">
              <CardTitle className="text-sm font-medium">Payment Method</CardTitle>
              <CreditCard className="h-4 w-4 text-pink-600" />
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">•••• 4242</div>
              <p className="text-xs text-muted-foreground">Expires 04/2025</p>
              <Button variant="outline" className="mt-4 w-full">
                Update
              </Button>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 bg-gradient-to-r from-green-500/20 to-green-600/20 pb-2">
              <CardTitle className="text-sm font-medium">Billing Cycle</CardTitle>
              <Receipt className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">Monthly</div>
              <p className="text-xs text-muted-foreground">Save 20% with annual billing</p>
              <Button variant="outline" className="mt-4 w-full">
                Switch to Annual
              </Button>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="history" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="history">Billing History</TabsTrigger>
            <TabsTrigger value="methods">Payment Methods</TabsTrigger>
          </TabsList>
          <TabsContent value="history" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
                <CardDescription>View your billing history and download invoices.</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <BillingHistory />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="methods" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your payment methods and billing details.</CardDescription>
              </CardHeader>
              <CardContent>
                <PaymentMethods />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
}
