"use client"

import { Edit, MoreHorizontal, Package, Trash } from "lucide-react"
import Link from "next/link"

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

// Sample product data
const products = [
  {
    id: "PROD-1234",
    name: "Wireless Headphones",
    category: "electronics",
    price: "$129.99",
    stock: 45,
    status: "in-stock",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "PROD-2345",
    name: "Smart Watch",
    category: "electronics",
    price: "$199.99",
    stock: 28,
    status: "in-stock",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "PROD-3456",
    name: "Running Shoes",
    category: "clothing",
    price: "$89.99",
    stock: 12,
    status: "low-stock",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "PROD-4567",
    name: "Coffee Maker",
    category: "home",
    price: "$79.99",
    stock: 32,
    status: "in-stock",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "PROD-5678",
    name: "Backpack",
    category: "accessories",
    price: "$49.99",
    stock: 18,
    status: "in-stock",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "PROD-6789",
    name: "Wireless Earbuds",
    category: "electronics",
    price: "$89.99",
    stock: 0,
    status: "out-of-stock",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "PROD-7890",
    name: "Desk Lamp",
    category: "home",
    price: "$34.99",
    stock: 24,
    status: "in-stock",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "PROD-8901",
    name: "Leather Wallet",
    category: "accessories",
    price: "$29.99",
    stock: 8,
    status: "low-stock",
    image: "/placeholder.svg?height=50&width=50",
  },
]

interface ProductsListProps {
  searchQuery: string
  categoryFilter: string
}

export function ProductsList({ searchQuery, categoryFilter }: ProductsListProps) {
  // Filter products based on search query and category filter
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.id.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b bg-muted/50 text-left text-sm font-medium">
            <th className="px-4 py-3">Product</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Stock</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <tr key={product.id} className="border-b text-sm transition-colors hover:bg-muted/50">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-md border">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{product.name}</div>
                      <div className="text-xs text-muted-foreground">{product.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 capitalize">{product.category}</td>
                <td className="px-4 py-3 font-medium">{product.price}</td>
                <td className="px-4 py-3">{product.stock}</td>
                <td className="px-4 py-3">
                  <Badge
                    variant="outline"
                    className={`${
                      product.status === "in-stock"
                        ? "border-green-500 text-green-600"
                        : product.status === "low-stock"
                          ? "border-amber-500 text-amber-600"
                          : "border-red-500 text-red-600"
                    }`}
                  >
                    {product.status === "in-stock"
                      ? "In Stock"
                      : product.status === "low-stock"
                        ? "Low Stock"
                        : "Out of Stock"}
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
                        <Link href={`/products/${product.id}`}>
                          <Package className="mr-2 h-4 w-4" />
                          View Product
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Product
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="mr-2 h-4 w-4" />
                        Delete Product
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="px-4 py-8 text-center">
                <div className="flex flex-col items-center justify-center gap-2">
                  <Package className="h-8 w-8 text-muted-foreground" />
                  <h3 className="font-semibold">No products found</h3>
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
