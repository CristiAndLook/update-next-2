import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-slate-400 p-4 flex justify-between items-center">
            <ul className="flex">
                <li className="ml-4">
                    <Link href="/" className="text-slate-100 hover:text-slate-200">
                        Home
                    </Link>
                </li>
                <li className="ml-4">
                    <Link href="/users" className="text-slate-100 hover:text-slate-200">
                        Users
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
