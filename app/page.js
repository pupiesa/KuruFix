"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function HomePage() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session.user ? (
          <>
            <h1>Welcome, {session.user.name}!</h1>
            <Image
              src={session.user.image}
              alt="Profile"
              width={50}
              height={50}
              style={{ borderRadius: "50%" }}
            />
            <p>Email: {session.user.email}</p>
            <button onClick={() => signOut()}>Sign out</button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  }
}
