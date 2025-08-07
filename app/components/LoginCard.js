import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const LoginCard = (props) => {
  return (
    <>
      <Card className="w-full max-w-sm">
        <CardHeader className="">
          <CardTitle>ยินดีต้อนรับ</CardTitle>
          <CardDescription>
            เข้าสู่ระบบเพื่อแจ้งซ่อมและติดตามสถานะ
          </CardDescription>
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            <LogIn />
            Login
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => props.signIn("google")}
          >
            <FcGoogle />
            เข้าสู่ระบบด้วย Google
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default LoginCard;
