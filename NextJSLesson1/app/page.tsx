import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-green-500 to-yellow-500">
    <h1 className="text-4xl font-bold mb-8">Home Page</h1>
    <p className="text-lg mb-8">Welcome to the home page!</p>
    <p className="text-lg mb-8">
        Go to <Link href="/about" className="text-blue-600 hover:underline">About Page</Link>
    </p>
    </main>
  );
}
