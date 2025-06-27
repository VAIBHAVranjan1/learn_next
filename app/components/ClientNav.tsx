"use client";

import Link from "next/link";
import { signIn, signOut } from "next-auth/react";

const ClientNav = ({ session }: { session: any }) => {
  return (
    <div className="flex items-center gap-5 text-black">
      {session?.user ? (
        <>
          <Link href="/startup/create">
            <span className="font-bold text-primary">Create</span>
          </Link>
          <button onClick={() => signOut({ callbackUrl: "/" })}>
            <span>Logout</span>
          </button>
          <Link href={`/user/${session?.id}`}>
            <span>{session?.user.name}</span>
          </Link>
        </>
      ) : (
        <button onClick={() => signIn("github")}>
          <span>Login</span>
        </button>
      )}
    </div>
  );
};

export default ClientNav;
