import Link from "next/link";

export function Nav() {
  return (
    <div>
      <div className="container flex py-5">
        <h1 className="mr-auto font-bold text-2xl">LOGO</h1>
        <ul className="flex">
          <li className="ml-5">
            <Link href="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li className="ml-5">
            <Link href="/" className="hover:text-blue-500">
              About
            </Link>
          </li>
          <li className="ml-5">
            <Link href="/" className="hover:text-blue-500">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
