import { ArrowUp, Package } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

// Sample top products data
const topProducts = [
  {
    id: "PROD-1234",
    name: "Wireless Headphones",
    category: "Electronics",
    revenue: "$12,450",
    orders: 245,
    views: 3450,
    conversionRate: 7.1,
    trend: "up",
  },
  {
    id: "PROD-2345",
    name: "Smart Watch",
    category: "Electronics",
    revenue: "$9,860",
    orders: 186,
    views: 2980,
    conversionRate: 6.2,
    trend: "up",
  },
  {
    id: "PROD-3456",
    name: "Running Shoes",
    category: "Footwear",
    revenue: "$8,790",
    orders: 179,
    views: 2450,
    conversionRate: 7.3,
    trend: "down",
  },
  {
    id: "PROD-4567",
    name: "Coffee Maker",
    category: "Home Appliances",
    revenue: "$6,540",
    orders: 154,
    views: 1980,
    conversionRate: 7.8,
    trend: "up",
  },
  {
    id: "PROD-5678",
    name: "Backpack",
    category: "Accessories",
    revenue: "$5,320",
    orders: 132,
    views: 1750,
    conversionRate: 7.5,
    trend: "down",
  },
]

interface AnalyticsTableProps {
  timeframe: string
}

export function AnalyticsTable({ timeframe }: AnalyticsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b bg-muted/50 text-left text-sm font-medium">
            <th className="px-4 py-3">Product</th>
            <th className="px-4 py-3">Revenue</th>
            <th className="px-4 py-3">Orders</th>
            <th className="px-4 py-3">Views</th>
            <th className="px-4 py-3">Conversion Rate</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {topProducts.map((product) => (
            <tr key={product.id} className="border-b text-sm transition-colors hover:bg-muted/50">
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                    <Package className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{product.name}</div>
                    <div className="text-xs text-muted-foreground">{product.category}</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3 font-medium">{product.revenue}</td>
              <td className="px-4 py-3">{product.orders}</td>
              <td className="px-4 py-3">{product.views}</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{product.conversionRate}%</span>
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-green-100">
                    <ArrowUp className="h-3 w-3 text-green-600" />
                  </div>
                  <Progress value={product.conversionRate * 10} className="h-2 w-20" />
                </div>
              </td>
              <td className="px-4 py-3 text-right">
                <Button asChild variant="ghost" size="sm">
                  <Link href={`/products/${product.id}`}>View Details</Link>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
