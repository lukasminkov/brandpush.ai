import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Billing</h1>
      <Card>
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
          <CardDescription>You are currently on the Pro plan.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">$29.99/month</p>
          <Button className="mt-4">Upgrade Plan</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
          <CardDescription>Manage your payment method here.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Visa ending in 1234</p>
          <Button variant="outline" className="mt-4">Update Payment Method</Button>
        </CardContent>
      </Card>
    </div>
  )
}

