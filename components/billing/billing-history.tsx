import { Download, MoreHorizontal } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Sample billing history data
const billingHistory = [
  {
    id: "INV-001",
    date: "May 15, 2023",
    amount: "$49.99",
    status: "paid",
    description: "Business Pro Plan - Monthly",
  },
  {
    id: "INV-002",
    date: "Apr 15, 2023",
    amount: "$49.99",
    status: "paid",
    description: "Business Pro Plan - Monthly",
  },
  {
    id: "INV-003",
    date: "Mar 15, 2023",
    amount: "$49.99",
    status: "paid",
    description: "Business Pro Plan - Monthly",
  },
  {
    id: "INV-004",
    date: "Feb 15, 2023",
    amount: "$49.99",
    status: "paid",
    description: "Business Pro Plan - Monthly",
  },
  {
    id: "INV-005",
    date: "Jan 15, 2023",
    amount: "$49.99",
    status: "paid",
    description: "Business Pro Plan - Monthly",
  },
  {
    id: "INV-006",
    date: "Dec 15, 2022",
    amount: "$49.99",
    status: "paid",
    description: "Business Pro Plan - Monthly",
  },
]

export function BillingHistory() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b bg-muted/50 text-left text-sm font-medium">
            <th className="px-4 py-3">Invoice</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Amount</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {billingHistory.map((invoice) => (
            <tr key={invoice.id} className="border-b text-sm transition-colors hover:bg-muted/50">
              <td className="px-4 py-3">
                <div className="font-medium">{invoice.id}</div>
                <div className="text-xs text-muted-foreground">{invoice.description}</div>
              </td>
              <td className="px-4 py-3">{invoice.date}</td>
              <td className="px-4 py-3 font-medium">{invoice.amount}</td>
              <td className="px-4 py-3">
                <Badge
                  variant="outline"
                  className={`${
                    invoice.status === "paid"
                      ? "border-green-500 text-green-600"
                      : invoice.status === "pending"
                        ? "border-amber-500 text-amber-600"
                        : "border-red-500 text-red-600"
                  }`}
                >
                  {invoice.status === "paid" ? "Paid" : invoice.status === "pending" ? "Pending" : "Failed"}
                </Badge>
              </td>
              <td className="px-4 py-3 text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <Download className="mr-2 h-4 w-4" />
                      Download Invoice
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
