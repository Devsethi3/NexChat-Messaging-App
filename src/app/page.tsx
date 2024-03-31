import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Link href="/login">
        <Button>Login</Button>
      </Link>
    </div>
  );
};

export default page;
