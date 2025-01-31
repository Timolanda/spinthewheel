import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

export default async function AdminDashboard() {
  const session = await getServerSession()

  if (!session || session.user?.email !== "admin@example.com") {
    redirect("/")
  }

  return (
    <div className="flex flex-col<div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="space-y-4 w-full max-w-md">
        <h2 className="text-xl font-semibold">Recent Activity</h2>
        <ul className="list-disc pl-5">
          <li>User deposits: $5000</li>
          <li>User withdrawals: $3000</li>
          <li>Total bets placed: 1000</li>
          <li>Net profit: $2000</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6">Actions</h2>
        <Button className="w-full">Manage Users</Button>
        <Button className="w-full">View Transactions</Button>
        <Button className="w-full">Update Game Settings</Button>
      </div>
    </div>
  )
}

