import Image from "next/image";
import Link from "./Link";
import logo from "../public/logo.png";
export default function Navbar() {
  return (
    <div className="flex items-center bg-green-400 p-4 ">
      <span className="font-serif text-3xl text-gray-50 ">
        <Link href="/">VALDIVIA</Link>
      </span>
      <span className="ml-auto ">
        <Link className="text-gray-50 font-bold m-2 " href="/users/login">
          Log In
        </Link>
        <Link className="text-gray-50 font-bold m-2" href="/users/register">
          Register
        </Link>
      </span>
    </div>
  );
}
