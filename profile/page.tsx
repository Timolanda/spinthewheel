import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function ProfilePage() {
  const session = await getServerSession()

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>
      <div className="space-y-4 w-full max-w-md">
        <p>Email: {session.user?.email}</p>
        <p>Balance: $1000</p> {/* This would typically come from your database */}
        <Button asChild className="w-full">
          <Link href="/deposit">Deposit</Link>
        </Button>
        <Button asChild variant="outline" className="w-full">
          <Link href="/withdraw">Withdraw</Link>
        </Button>
      </div>
    </div>
  )
}

