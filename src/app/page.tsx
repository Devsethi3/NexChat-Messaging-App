"use client";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const page = () => {
  const session = useSession();
  console.log(session);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center gap-8">
        <Link href="/login">
          <Button>Login</Button>
        </Link>
        <Button variant="destructive" onClick={() => signOut()}>
          LogOut
        </Button>
      </div>
    </div>
  );
};

export default page;
