import Users from "@/components/Users"

const fetchUsers = async () => {
  const res = await fetch('https://reqres.in/api/users')
  const data = await res.json()
  return data.data
}

export default async function Home() {

  const users = await fetchUsers()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold pb-4">Homepage</h1>
      <Users users={users} />
    </main>
  )
}
