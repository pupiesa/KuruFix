"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status == "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);
  if (status === "loading") return <p>Loading...</p>;

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
