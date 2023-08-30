"use client";
import Link from "next/link";


export default function Users({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <Link href={`/users/${user.id}`}>
          <li className="bg-slate-400 mb-2 p-4 rounded-md flex justify-between">
            <div>
              <h5 className="font-bold">
                {user.id} {user.first_name}
              </h5>
              <p className="text-slate-900">email: {user.email}</p>
            </div>
            <img className="rounded-full w-20" src={user.avatar} />
          </li>
        </Link>
      ))}
    </ul>
  );
}
