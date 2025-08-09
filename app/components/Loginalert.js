import React, { useState, useEffect } from "react";
import { AlertCircleIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Loginalert = () => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(progressInterval);
          return 0;
        }
        return prev - 100 / 130;
      });
    }, 100);

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <>
      <div className="fixed top-4 right-4 z-50 w-full max-w-md">
        <Alert
          variant="destructive"
          className="shadow-lg border-2 relative overflow-hidden"
        >
          {/* Timer Loading Bar */}
          <div
            className="absolute top-0 left-0 h-1 bg-gradient-to-r from-red-600 to-red-400 transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>

          <AlertCircleIcon />
          <AlertTitle>การเข้าถึงถูกปฏิเสธ</AlertTitle>
          <AlertDescription>
            <p>คุณปฏิเสธการเข้าถึงแอปพลิเคชัน กรุณาลองใหม่อีกครั้ง</p>
            <ul className="list-inside list-disc text-sm mt-2">
              <li>กรุณาใช้อีเมลของสถาบันในการเข้าสู่ระบบ (@kmitl.ac.th)</li>
              <li>ลองเข้าสู่ระบบใหม่อีกครั้ง</li>
              <li>ติดต่อผู้ดูแลระบบหากยังมีปัญหา</li>
            </ul>
          </AlertDescription>
        </Alert>
      </div>
    </>
  );
};

export default Loginalert;
