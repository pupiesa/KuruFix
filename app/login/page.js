"use client";

import React from "react";
import { signIn, useSession } from "next-auth/react";
import LoginCard from "../components/LoginCard";
import { Wrench } from "lucide-react";

const page = () => {
  const { data: session, status } = useSession();
  if (status === "loading") return <p>Loading...</p>;

  if (session) {
    return <p>Redirecting...</p>; // Show loading message while redirecting
  }
  return (
    <>
      <div className="flex items-center flex-col gap-y-2 h-screen">
        <div className="p-3 bg-blue-600 rounded-full mt-34">
          <Wrench className="w-8 h-8 " color="#FFFFFF" />
        </div>
        <h1 className="text-2xl font-bold mb-2">เข้าสู่ระบบ</h1>
        <p className="mb-8">ระบบแจ้งซ่อมครุภัณฑ์</p>
        {/* <button onClick={() => signIn("google")}>Sign in with Google</button> */}
        <LoginCard signIn={signIn} />
      </div>
    </>
  );
};

export default page;
