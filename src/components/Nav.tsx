import Link from "next/link";

export function Nav() {
  return (
    <nav className="w-full p-4 shadow-md sticky top-0 bg-white dark:bg-slate-950">
      <div className="container flex text-blue-500">
        <Link
          href="/"
          className="hover:text-blue-300 mr-auto font-bold text-2xl"
        >
          LOGO
        </Link>

        <ul className="flex text-black dark:text-white">
          <li className="ml-10">
            <Link href="/" className="hover:text-blue-300">
              Home
            </Link>
          </li>
          <li className="ml-10">
            <Link href="/about" className="hover:text-blue-300">
              About
            </Link>
          </li>
          <li className="ml-10">
            <Link href="/blog" className="hover:text-blue-300">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
