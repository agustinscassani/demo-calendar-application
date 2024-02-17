import { redirect } from 'next/navigation';

export default function Home() {
  // Utils
  // Get current date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];
  redirect(`/${today}`);
}
