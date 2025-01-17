"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export default function WithdrawPage() {
  const [amount, setAmount] = useState(0)
  const { toast } = useToast()

  const handleWithdraw = async () => {
    // Here you would typically call an API to process the withdrawal
    toast({
      title: "Withdrawal Request Submitted",
      description: `Your request to withdraw $${amount} is being processed.`,
    })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-8">Withdraw Funds</h1>
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
        <Button onClick={handleWithdraw} className="w-full">Request Withdrawal</Button>
      </div>
    </div>
  )
}

