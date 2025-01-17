import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function Home() {
  const session = await getServerSession()

  if (!session) {
    redirect("/login")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to Spin the Wheel!</h1>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/game">Play Now</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/profile">My Profile</Link>
        </Button>
      </div>
    </main>
  )
}

