"use client"

import { MoreHorizontal, User } from "lucide-react"
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

// Sample customer data
const customers = [
  {
    id: "CUST-001",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    status: "active",
    spent: "$2,456.89",
    orders: 12,
    lastOrder: "2023-05-15",
    image: "/placeholder.svg?height=40&width=40",
    initials: "OM",
  },
  {
    id: "CUST-002",
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    status: "active",
    spent: "$1,234.56",
    orders: 8,
    lastOrder: "2023-05-12",
    image: "/placeholder.svg?height=40&width=40",
    initials: "JL",
  },
  {
    id: "CUST-003",
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    status: "inactive",
    spent: "$879.00",
    orders: 4,
    lastOrder: "2023-04-28",
    image: "/placeholder.svg?height=40&width=40",
    initials: "IN",
  },
  {
    id: "CUST-004",
    name: "William Kim",
    email: "will@email.com",
    status: "active",
    spent: "$3,459.00",
    orders: 16,
    lastOrder: "2023-05-18",
    image: "/placeholder.svg?height=40&width=40",
    initials: "WK",
  },
  {
    id: "CUST-005",
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    status: "active",
    spent: "$1,872.00",
    orders: 9,
    lastOrder: "2023-05-10",
    image: "/placeholder.svg?height=40&width=40",
    initials: "SD",
  },
  {
    id: "CUST-006",
    name: "Ethan Johnson",
    email: "ethan.johnson@email.com",
    status: "inactive",
    spent: "$432.00",
    orders: 2,
    lastOrder: "2023-03-22",
    image: "/placeholder.svg?height=40&width=40",
    initials: "EJ",
  },
  {
    id: "CUST-007",
    name: "Ava Thompson",
    email: "ava.thompson@email.com",
    status: "active",
    spent: "$2,768.00",
    orders: 14,
    lastOrder: "2023-05-16",
    image: "/placeholder.svg?height=40&width=40",
    initials: "AT",
  },
  {
    id: "CUST-008",
    name: "Noah Garcia",
    email: "noah.garcia@email.com",
    status: "active",
    spent: "$1,543.00",
    orders: 7,
    lastOrder: "2023-05-08",
    image: "/placeholder.svg?height=40&width=40",
    initials: "NG",
  },
]

interface CustomersListProps {
  searchQuery: string
  statusFilter: string
}

export function CustomersList({ searchQuery, statusFilter }: CustomersListProps) {
  // Filter customers based on search query and status filter
  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.id.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || customer.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b bg-muted/50 text-left text-sm font-medium">
            <th className="px-4 py-3">Customer</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Total Spent</th>
            <th className="px-4 py-3">Orders</th>
            <th className="px-4 py-3">Last Order</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.length > 0 ? (
            filteredCustomers.map((customer) => (
              <tr key={customer.id} className="border-b text-sm transition-colors hover:bg-muted/50">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9 border border-primary/10">
                      <AvatarImage src={customer.image || "/placeholder.svg"} alt={`${customer.name}'s avatar`} />
                      <AvatarFallback>{customer.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{customer.name}</div>
                      <div className="text-muted-foreground">{customer.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <Badge
                    variant="outline"
                    className={`${
                      customer.status === "active" ? "border-green-500 text-green-600" : "border-red-500 text-red-600"
                    }`}
                  >
                    {customer.status === "active" ? "Active" : "Inactive"}
                  </Badge>
                </td>
                <td className="px-4 py-3 font-medium">{customer.spent}</td>
                <td className="px-4 py-3">{customer.orders}</td>
                <td className="px-4 py-3">{customer.lastOrder}</td>
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
                        <Link href={`/customers/${customer.id}`}>
                          <User className="mr-2 h-4 w-4" />
                          View Profile
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">Delete Customer</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="px-4 py-8 text-center">
                <div className="flex flex-col items-center justify-center gap-2">
                  <User className="h-8 w-8 text-muted-foreground" />
                  <h3 className="font-semibold">No customers found</h3>
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
