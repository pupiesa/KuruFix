"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CalendarDays,
  Clock,
  MapPin,
  Phone,
  User,
  Wrench,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowLeft,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

// Mock data for repair requests
const mockRepairRequests = [
  {
    id: "REQ-001",
    equipment: "เครื่องปริ้นเตอร์ HP LaserJet",
    problem: "ไม่สามารถพิมพ์ได้ มีไฟแดงกระพริบ",
    department: "แผนกบัญชี",
    priority: "สูง",
    status: "กำลังดำเนินการ",
    date: "2024-01-15",
    reporter: "นางสาวสมใจ ใจดี",
  },
  {
    id: "REQ-002",
    equipment: "เครื่องปรับอากาศ Daikin",
    problem: "ไม่เย็น เสียงดังผิดปกติ",
    department: "ห้องประชุมใหญ่",
    priority: "กลาง",
    status: "เสร็จสิ้น",
    date: "2024-01-14",
    reporter: "นายสมชาย รักงาน",
  },
  {
    id: "REQ-003",
    equipment: "คอมพิวเตอร์ Dell OptiPlex",
    problem: "เปิดไม่ติด หน้าจอดับ",
    department: "แผนกการตลาด",
    priority: "สูง",
    status: "รอดำเนินการ",
    date: "2024-01-16",
    reporter: "นางสาววิมล ขยันทำงาน",
  },
];

export default function Userreport() {
  const [activeTab, setActiveTab] = useState("request");
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "ส่งคำขอซ่อมสำเร็จ",
      description: "เราจะติดต่อกลับภายใน 24 ชั่วโมง",
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "รอดำเนินการ":
        return "bg-yellow-100 text-yellow-800";
      case "กำลังดำเนินการ":
        return "bg-blue-100 text-blue-800";
      case "เสร็จสิ้น":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "สูง":
        return "bg-red-100 text-red-800";
      case "กลาง":
        return "bg-orange-100 text-orange-800";
      case "ต่ำ":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "รอดำเนินการ":
        return <Clock className="w-4 h-4" />;
      case "กำลังดำเนินการ":
        return <AlertTriangle className="w-4 h-4" />;
      case "เสร็จสิ้น":
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <XCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Wrench className="w-8 h-8 text-blue-600" />
              <h1 className="text-3xl font-bold">ระบบแจ้งซ่อมครุภัณฑ์</h1>
            </div>
            <p className="">แจ้งปัญหาและติดตามสถานะการซ่อมครุภัณฑ์ของคุณ</p>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="request" className="flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              แจ้งซ่อม
            </TabsTrigger>
            <TabsTrigger value="status" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              ติดตามสถานะ
            </TabsTrigger>
          </TabsList>

          <TabsContent value="request">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="w-5 h-5" />
                  แจ้งซ่อมครุภัณฑ์
                </CardTitle>
                <CardDescription>
                  กรุณากรอกข้อมูลให้ครบถ้วนเพื่อให้เราสามารถดำเนินการได้อย่างรวดเร็ว
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="reporter"
                        className="flex items-center gap-2"
                      >
                        <User className="w-4 h-4" />
                        ชื่อผู้แจ้ง
                      </Label>
                      <Input
                        id="reporter"
                        placeholder="กรุณาระบุชื่อ-นามสกุล"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="flex items-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        เบอร์โทรศัพท์
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="08X-XXX-XXXX"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="priority"
                        className="flex items-center gap-2"
                      >
                        <AlertTriangle className="w-4 h-4" />
                        ระดับความเร่งด่วน
                      </Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="เลือกระดับความเร่งด่วน" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high">สูง (เร่งด่วน)</SelectItem>
                          <SelectItem value="medium">กลาง (ปกติ)</SelectItem>
                          <SelectItem value="low">ต่ำ (ไม่เร่งด่วน)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="equipment">ชื่อครุภัณฑ์/อุปกรณ์</Label>
                    <Input
                      id="equipment"
                      placeholder="เช่น เครื่องปริ้นเตอร์ HP LaserJet, คอมพิวเตอร์ Dell, เครื่องปรับอากาศ"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">
                      สถานที่ตั้ง/รายละเอียดเพิ่มเติม
                    </Label>
                    <Input
                      id="location"
                      placeholder="เช่น ห้อง 201 ชั้น 2, โต๊ะทำงานข้างหน้าต่าง"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="problem">อาการ/ปัญหาที่พบ</Label>
                    <Textarea
                      id="problem"
                      placeholder="กรุณาอธิบายปัญหาที่พบให้ละเอียด เช่น ไม่สามารถเปิดเครื่องได้, มีเสียงดังผิดปกติ, หน้าจอไม่แสดงผล"
                      className="min-h-[100px]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center gap-2">
                      <CalendarDays className="w-4 h-4" />
                      วันที่ต้องการให้ซ่อม
                    </Label>
                    <Input id="date" type="date" />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    ส่งคำขอซ่อม
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="status">
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    สถานะการซ่อม
                  </CardTitle>
                  <CardDescription>
                    ติดตามความคืบหน้าของคำขอซ่อมทั้งหมด
                  </CardDescription>
                </CardHeader>
              </Card>

              {mockRepairRequests.map((request) => (
                <Card key={request.id}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="font-mono">
                            {request.id}
                          </Badge>
                          <Badge className={getPriorityColor(request.priority)}>
                            {request.priority}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-lg">
                          {request.equipment}
                        </h3>
                        <p className="text-gray-600">{request.problem}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {request.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {request.reporter}
                          </span>
                          <span className="flex items-center gap-1">
                            <CalendarDays className="w-4 h-4" />
                            {request.date}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(request.status)}
                        <Badge className={getStatusColor(request.status)}>
                          {request.status}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
