import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold mb-8">Veloxity</h1>
      <div className="flex gap-4">
        <Link href="/signup">
          <button className="hover:bg-primary hover:text-primary-foreground px-6 py-3 border rounded-md text-lg font-semibold">Sign Up</button>
        </Link>
        <Link href="/login">
          <button className="hover:bg-primary hover:text-primary-foreground px-6 py-3 border rounded-md text-lg font-semibold">Login</button>
        </Link>
      </div>
    </div>
  );
}

