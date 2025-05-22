import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const recentSales = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00",
    image: "/placeholder.svg?height=36&width=36",
    initials: "OM",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: "+$39.00",
    image: "/placeholder.svg?height=36&width=36",
    initials: "JL",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: "+$299.00",
    image: "/placeholder.svg?height=36&width=36",
    initials: "IN",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    amount: "+$99.00",
    image: "/placeholder.svg?height=36&width=36",
    initials: "WK",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: "+$39.00",
    image: "/placeholder.svg?height=36&width=36",
    initials: "SD",
  },
]

export function RecentSales() {
  return (
    <div className="space-y-0">
      {recentSales.map((sale, index) => (
        <div
          key={sale.name}
          className={`flex items-center p-4 transition-colors hover:bg-muted/50 ${index !== recentSales.length - 1 ? "border-b" : ""}`}
        >
          <Avatar className="h-9 w-9 border border-primary/10">
            <AvatarImage src={sale.image || "/placeholder.svg"} alt={`${sale.name}'s avatar`} />
            <AvatarFallback>{sale.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{sale.name}</p>
            <p className="text-sm text-muted-foreground">{sale.email}</p>
          </div>
          <div className="ml-auto font-medium text-green-600">{sale.amount}</div>
        </div>
      ))}
    </div>
  )
}
