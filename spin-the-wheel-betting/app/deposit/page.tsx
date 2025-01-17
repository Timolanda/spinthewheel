"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export default function DepositPage() {
  const [amount, setAmount] = useState(0)
  const { toast } = useToast()

  const handleDeposit = async () => {
    // Here you would typically call an API to process the deposit
    toast({
      title: "Deposit Successful",
      description: `$${amount} has been added to your account.`,
    })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-8">Deposit Funds</h1>
      <div className="space-y-4 w-full max-w-md">
        <div className="space-y-2">
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            min={0}
          />
        </div>
        <Button onClick={handleDeposit} className="w-full">Deposit</Button>
      </div>
    </div>
  )
}

