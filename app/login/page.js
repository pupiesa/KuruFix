"use client";

import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import LoginCard from "../components/LoginCard";
import { Wrench } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Loginalert from "../components/Loginalert";

const page = () => {
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (error === "AccessDenied") {
      setShowAlert(true);

      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 13000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  if (status === "loading") return <p>Loading...</p>;

  if (session) {
    return <p>Redirecting...</p>; // Show loading message while redirecting
  }
  return (
    <>
      {showAlert && <Loginalert />}

      <div className="flex flex-col h-screen">
        {/* Icon and Text Section - Slightly to the top */}
        <div className="flex items-center justify-center flex-col pt-20 pb-8">
          <div className="p-3 bg-blue-600 rounded-full mb-4">
            <Wrench className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold mb-2">เข้าสู่ระบบ</h1>
          <p className="">ระบบแจ้งซ่อมครุภัณฑ์</p>
        </div>

        {/* LoginCard - Centered */}
        <div className="flex items-center justify-center pt-2">
          <LoginCard signIn={signIn} className="px-5" />
        </div>
      </div>
    </>
  );
};

export default page;
