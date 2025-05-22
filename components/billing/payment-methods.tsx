"use client"

import { CreditCard, Plus, Trash } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample payment methods
const initialPaymentMethods = [
  {
    id: "card-1",
    type: "Visa",
    last4: "4242",
    expiry: "04/2025",
    isDefault: true,
  },
  {
    id: "card-2",
    type: "Mastercard",
    last4: "5555",
    expiry: "08/2024",
    isDefault: false,
  },
]

export function PaymentMethods() {
  const [paymentMethods, setPaymentMethods] = useState(initialPaymentMethods)
  const [isOpen, setIsOpen] = useState(false)

  const handleSetDefault = (id: string) => {
    setPaymentMethods(
      paymentMethods.map((method) => ({
        ...method,
        isDefault: method.id === id,
      })),
    )
  }

  const handleDelete = (id: string) => {
    setPaymentMethods(paymentMethods.filter((method) => method.id !== id))
  }

  return (
    <div className="space-y-6">
      {paymentMethods.map((method) => (
        <div
          key={method.id}
          className={`flex items-center justify-between rounded-lg border p-4 ${
            method.isDefault ? "border-primary bg-primary/5" : ""
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium">
                  {method.type} ending in {method.last4}
                </span>
                {method.isDefault && (
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    Default
                  </span>
                )}
              </div>
              <div className="text-sm text-muted-foreground">Expires {method.expiry}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {!method.isDefault && (
              <Button variant="outline" size="sm" onClick={() => handleSetDefault(method.id)}>
                Set as default
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-red-500"
              onClick={() => handleDelete(method.id)}
            >
              <Trash className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </Button>
          </div>
        </div>
      ))}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="w-full">
            <Plus className="mr-2 h-4 w-4" />
            Add Payment Method
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Payment Method</DialogTitle>
            <DialogDescription>Add a new credit or debit card to your account.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Cardholder Name</Label>
              <Input id="name" placeholder="Niranjan Imalka" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="number">Card Number</Label>
              <Input id="number" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="country">Country</Label>
              <Select defaultValue="us">
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>Add Card</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
