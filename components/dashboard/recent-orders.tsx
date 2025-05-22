import { CheckCircle, Clock, XCircle } from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const recentOrders = [
  {
    id: "ORD-7352",
    customer: "John Smith",
    date: "2023-05-22",
    amount: "$235.89",
    status: "completed",
  },
  {
    id: "ORD-7353",
    customer: "Sarah Johnson",
    date: "2023-05-22",
    amount: "$125.99",
    status: "processing",
  },
  {
    id: "ORD-7354",
    customer: "Michael Brown",
    date: "2023-05-21",
    amount: "$89.50",
    status: "completed",
  },
  {
    id: "ORD-7355",
    customer: "Emily Davis",
    date: "2023-05-21",
    amount: "$432.00",
    status: "cancelled",
  },
  {
    id: "ORD-7356",
    customer: "Robert Wilson",
    date: "2023-05-20",
    amount: "$76.25",
    status: "processing",
  },
]

export function RecentOrders() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b bg-muted/50 text-left text-sm font-medium">
            <th className="px-4 py-3">Order ID</th>
            <th className="px-4 py-3">Customer</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Amount</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {recentOrders.map((order) => (
            <tr key={order.id} className="border-b text-sm transition-colors hover:bg-muted/50">
              <td className="px-4 py-3 font-medium">{order.id}</td>
              <td className="px-4 py-3">{order.customer}</td>
              <td className="px-4 py-3">{order.date}</td>
              <td className="px-4 py-3 font-medium">{order.amount}</td>
              <td className="px-4 py-3">
                <Badge
                  variant="outline"
                  className={`flex w-24 items-center justify-center gap-1 ${
                    order.status === "completed"
                      ? "border-green-500 text-green-600"
                      : order.status === "processing"
                        ? "border-blue-500 text-blue-600"
                        : "border-red-500 text-red-600"
                  }`}
                >
                  {order.status === "completed" ? (
                    <CheckCircle className="h-3 w-3" />
                  ) : order.status === "processing" ? (
                    <Clock className="h-3 w-3" />
                  ) : (
                    <XCircle className="h-3 w-3" />
                  )}
                  <span className="capitalize">{order.status}</span>
                </Badge>
              </td>
              <td className="px-4 py-3">
                <Button asChild variant="ghost" size="sm">
                  <Link href={`/orders/${order.id}`}>View</Link>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
