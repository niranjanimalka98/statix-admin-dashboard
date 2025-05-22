"use client"

import { DashboardShell } from "@/components/dashboard-shell"
import { SettingsForm } from "@/components/settings/settings-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SettingsPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <div className="flex items-center gap-2">
            <Button>Save Changes</Button>
          </div>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="mt-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>Manage your account settings and preferences.</CardDescription>
              </CardHeader>
              <CardContent>
                <SettingsForm />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="appearance" className="mt-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>Customize the look and feel of your dashboard.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <h3 className="text-lg font-medium">Theme</h3>
                    <p className="text-sm text-muted-foreground">Select a theme for your dashboard.</p>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex cursor-pointer flex-col items-center gap-2 rounded-lg border border-primary bg-primary/5 p-4">
                        <div className="h-10 w-10 rounded-full bg-primary" />
                        <span className="text-sm font-medium">Default</span>
                      </div>
                      <div className="flex cursor-pointer flex-col items-center gap-2 rounded-lg border p-4">
                        <div className="h-10 w-10 rounded-full bg-blue-500" />
                        <span className="text-sm font-medium">Blue</span>
                      </div>
                      <div className="flex cursor-pointer flex-col items-center gap-2 rounded-lg border p-4">
                        <div className="h-10 w-10 rounded-full bg-green-500" />
                        <span className="text-sm font-medium">Green</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="notifications" className="mt-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Manage your notification preferences.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Email Notifications</h3>
                      <p className="text-sm text-muted-foreground">
                        Receive email notifications for important updates.
                      </p>
                    </div>
                    <div className="flex h-6 w-11 cursor-pointer items-center rounded-full bg-primary p-1">
                      <div className="h-4 w-4 translate-x-5 rounded-full bg-white transition-transform" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Order Updates</h3>
                      <p className="text-sm text-muted-foreground">Receive notifications for order status changes.</p>
                    </div>
                    <div className="flex h-6 w-11 cursor-pointer items-center rounded-full bg-primary p-1">
                      <div className="h-4 w-4 translate-x-5 rounded-full bg-white transition-transform" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Marketing Emails</h3>
                      <p className="text-sm text-muted-foreground">Receive promotional emails and offers.</p>
                    </div>
                    <div className="flex h-6 w-11 cursor-pointer items-center rounded-full bg-muted p-1">
                      <div className="h-4 w-4 rounded-full bg-muted-foreground transition-transform" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
}
