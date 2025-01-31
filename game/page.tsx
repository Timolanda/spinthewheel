"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import SpinningWheel from "@/components/SpinningWheel"

export default function GamePage() {
  const [betAmount, setBetAmount] = useState(0)
  const [isSpinning, setIsSpinning] = useState(false)
  const { toast } = useToast()

  const handleSpin = () => {
    if (betAmount <= 0) {
      toast({
        title: "Error",
        description: "Please enter a valid bet amount",
        variant: "destructive",
      })
      return
    }

    setIsSpinning(true)
    setTimeout(() => {
      setIsSpinning(false)
      // Here you would typically call an API to process the bet and get the result
      const result = Math.random() > 0.5 ? "win" : "lose"
      toast({
        title: result === "win" ? "Congratulations!" : "Better luck next time!",
        description: result === "win" ? `You won $${betAmount * 2}!` : `You lost $${betAmount}.`,
        variant: result === "win" ? "default" : "destructive",
      })
    }, 3000)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-8">Spin the Wheel</h1>
      <SpinningWheel isSpinning={isSpinning} />
      <div className="mt-8 space-y-4 w-full max-w-md">
        <div className="space-y-2">
          <Label htmlFor="betAmount">Bet Amount</Label>
          <Input
            id="betAmount"
            type="number"
            value={betAmount}
            onChange={(e) => setBetAmount(Number(e.target.value))}
            min={0}
          />
        </div>
        <Button onClick={handleSpin} disabled={isSpinning} className="w-full">
          {isSpinning ? "Spinning..." : "Spin"}
        </Button>
      </div>
    </div>
  )
}

