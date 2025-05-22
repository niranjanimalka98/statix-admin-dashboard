"use client"

import { CheckCircle, Clock, MoreHorizontal, ShoppingCart, XCircle } from "lucide-react"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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

// Sample order data
const orders = [
  {
    id: "ORD-7352",
    customer: {
      name: "John Smith",
      email: "john.smith@example.com",
      image: "/placeholder.svg?height=40&width=40",
      initials: "JS",
    },
    date: "2023-05-22",
    amount: "$235.89",
    status: "completed",
    items: 3,
  },
  {
    id: "ORD-7353",
    customer: {
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      image: "/placeholder.svg?height=40&width=40",
      initials: "SJ",
    },
    date: "2023-05-22",
    amount: "$125.99",
    status: "processing",
    items: 2,
  },
  {
    id: "ORD-7354",
    customer: {
      name: "Michael Brown",
      email: "michael.brown@example.com",
      image: "/placeholder.svg?height=40&width=40",
      initials: "MB",
    },
    date: "2023-05-21",
    amount: "$89.50",
    status: "completed",
    items: 1,
  },
  {
    id: "ORD-7355",
    customer: {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      image: "/placeholder.svg?height=40&width=40",
      initials: "ED",
    },
    date: "2023-05-21",
    amount: "$432.00",
    status: "cancelled",
    items: 4,
  },
  {
    id: "ORD-7356",
    customer: {
      name: "Robert Wilson",
      email: "robert.wilson@example.com",
      image: "/placeholder.svg?height=40&width=40",
      initials: "RW",
    },
    date: "2023-05-20",
    amount: "$76.25",
    status: "processing",
    items: 1,
  },
  {
    id: "ORD-7357",
    customer: {
      name: "Jennifer Taylor",
      email: "jennifer.taylor@example.com",
      image: "/placeholder.svg?height=40&width=40",
      initials: "JT",
    },
    date: "2023-05-20",
    amount: "$189.99",
    status: "completed",
    items: 2,
  },
  {
    id: "ORD-7358",
    customer: {
      name: "David Anderson",
      email: "david.anderson@example.com",
      image: "/placeholder.svg?height=40&width=40",
      initials: "DA",
    },
    date: "2023-05-19",
    amount: "$312.50",
    status: "processing",
    items: 3,
  },
  {
    id: "ORD-7359",
    customer: {
      name: "Lisa Martinez",
      email: "lisa.martinez@example.com",
      image: "/placeholder.svg?height=40&width=40",
      initials: "LM",
    },
    date: "2023-05-19",
    amount: "$54.75",
    status: "cancelled",
    items: 1,
  },
]

interface OrdersListProps {
  searchQuery: string
  statusFilter: string
}

export function OrdersList({ searchQuery, statusFilter }: OrdersListProps) {
  // Filter orders based on search query and status filter
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || order.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b bg-muted/50 text-left text-sm font-medium">
            <th className="px-4 py-3">Order ID</th>
            <th className="px-4 py-3">Customer</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Items</th>
            <th className="px-4 py-3">Amount</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <tr key={order.id} className="border-b text-sm transition-colors hover:bg-muted/50">
                <td className="px-4 py-3 font-medium">{order.id}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 border border-primary/10">
                      <AvatarImage
                        src={order.customer.image || "/placeholder.svg"}
                        alt={`${order.customer.name}'s avatar`}
                      />
                      <AvatarFallback>{order.customer.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{order.customer.name}</div>
                      <div className="text-xs text-muted-foreground">{order.customer.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">{order.date}</td>
                <td className="px-4 py-3">{order.items}</td>
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
                      <DropdownMenuItem asChild>
                        <Link href={`/orders/${order.id}`}>
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          View Order
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Edit Order</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">Cancel Order</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="px-4 py-8 text-center">
                <div className="flex flex-col items-center justify-center gap-2">
                  <ShoppingCart className="h-8 w-8 text-muted-foreground" />
                  <h3 className="font-semibold">No orders found</h3>
                  <p className="text-sm text-muted-foreground">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
