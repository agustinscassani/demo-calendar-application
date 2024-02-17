import Left from '@/app/ui/left/Left';
import Right from '@/app/ui/right/Right';

export default function ReminderLayout({ children, params: { day } }: Readonly<{ children: React.ReactNode, params: { day: string } }>) {
  return (
    <main className="flex">
      <Left>
        {children}
      </Left>
      <Right day={day} />
    </main>
  );
}