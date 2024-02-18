import Image from 'next/image';

export default function Loading() {
  // Render
  return (
    <Image
      alt="Loading"
      height={24}
      priority
      src="/loading.svg"
      width={24}
    />
  );
}