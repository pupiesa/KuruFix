// "use client"

// import { useSession,signIn,signOut } from 'next-auth/react';

// export default function HomePage() {
//   const { data: sessios, status } = useSession();

//   if (status === "authenticated") {
//     return <p>Signed in as {session.user.email}</p>
//   }

//   return <button onClick={() => signIn('google')}>signin</button>
// }
"use client";

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

export default function HomePage() {
  const { data: session, status } = useSession();

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
              style={{ borderRadius: '50%' }}
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

  return (
    <>
      <h1>Not signed in</h1>
      <button onClick={() => signIn('google')}>Sign in with Google</button>
    </>
  );
}