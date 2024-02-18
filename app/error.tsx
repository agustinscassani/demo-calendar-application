'use client';

export default function GlobalError() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold text-red-500">Invalid date</h1>
      <button onClick={() => window.location.assign(`/${new Date().toISOString().split('T')[0]}`)}>Click here to start over</button>
    </main>
  )
}