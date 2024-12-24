"use client";

import { adminAccess } from "@/db/dashboard.db";
import dynamic from "next/dynamic";
import React from "react";

const DashBaordLayout = dynamic(
  () => import("@/components/(dashboard)/layout/Layout"),
  { ssr: false } // Prevents server-side rendering
);

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="w-full h-20 bg-blue-100"></header>
      <DashBaordLayout access={adminAccess}>{children}</DashBaordLayout>
    </>
  );
};

export default AdminLayout;
