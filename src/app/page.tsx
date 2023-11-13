import Image from 'next/image';
import { Icons } from '../components/icons';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:flex-row">
      <div className="ml-auto flex w-full flex-col gap-4">
        <h1 className="text-5xl font-bold">Nicholas Webster</h1>
        <p className="text-2xl font-semibold">Software Engineer</p>
        <div className="flex flex-row gap-2">
          <Link
            target="_blank"
            href="https://github.com/KingCreate"
            aria-label="Nicholas Webster's GitHub"
          >
            <Icons.gitHub className="h-7 w-7" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/nicholaswebster60/"
            aria-label="Nicholas Webster's LinkedIn"
          >
            <Icons.linkedin className="h-8 w-8" />
          </Link>
        </div>
      </div>
      <div className='w-max-full h-auto'>
        <Image
          className="w-auto rounded-full dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/profile.webp"
          alt="A Picture of Nicholas Webster"
          width={2448}
          height={2440}
          priority
        />
      </div>
    </main>
  );
}
