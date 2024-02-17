import Image from 'next/image';
import Link from 'next/link';

import { getNavigationURL } from '@/app/lib/utils';

import styles from '@/app/ui/navigation/navigation.module.css';

export default function Navigation({ day }: { day: string }) {
  // Render
  return (
    <section className={styles.navigation}>
      <Link href={getNavigationURL('left', day)}>
        <Image
          alt="chebron left"
          height={24}
          priority
          src="/chevron-left.svg"
          width={24}
        />
      </Link>
      <Image
        alt="point navigation"
        height={24}
        priority
        src="/point-navigation.svg"
        width={6}
      />
      <Link href={getNavigationURL('right', day)}>
        <Image
          alt="chebron right"
          height={24}
          priority
          src="/chevron-right.svg"
          width={24}
        />
      </Link>
    </section>
  );
}