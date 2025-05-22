import { Package } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const topProducts = [
  {
    id: "PROD-1234",
    name: "Wireless Headphones",
    category: "Electronics",
    sales: 1245,
    percentage: 85,
  },
  {
    id: "PROD-2345",
    name: "Smart Watch",
    category: "Electronics",
    sales: 986,
    percentage: 72,
  },
  {
    id: "PROD-3456",
    name: "Running Shoes",
    category: "Footwear",
    sales: 879,
    percentage: 65,
  },
  {
    id: "PROD-4567",
    name: "Coffee Maker",
    category: "Home Appliances",
    sales: 654,
    percentage: 48,
  },
  {
    id: "PROD-5678",
    name: "Backpack",
    category: "Accessories",
    sales: 532,
    percentage: 39,
  },
]

export function TopProducts() {
  return (
    <div className="space-y-0">
      {topProducts.map((product, index) => (
        <div
          key={product.id}
          className={`flex items-center p-4 transition-colors hover:bg-muted/50 ${index !== topProducts.length - 1 ? "border-b" : ""}`}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
            <Package className="h-5 w-5 text-primary" />
          </div>
          <div className="ml-4 flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium leading-none">{product.name}</p>
              <span className="text-sm font-medium">{product.sales} sales</span>
            </div>
            <p className="text-xs text-muted-foreground">{product.category}</p>
            <Progress value={product.percentage} className="h-2" />
          </div>
          <Button asChild variant="ghost" size="sm" className="ml-4">
            <Link href={`/products/${product.id}`}>View</Link>
          </Button>
        </div>
      ))}
    </div>
  )
}
