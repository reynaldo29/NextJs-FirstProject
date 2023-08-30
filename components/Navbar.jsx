import Link from "next/link";

function Navbar() {
  return (
    <div className="bg-slate-400 mb-4 flex justify-between items-center px-20 p-4 font-bold text-black">
      <Link href="/">Home</Link>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
