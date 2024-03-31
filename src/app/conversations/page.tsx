"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import React from "react";

const ConversationPage = () => {
  return (
    <>
      <div className="h-screen w-full flex flex-col gap-20 items-center justify-center">
        <h2 className="text-center text-3xl font-semibold">ConversationPage</h2>
        <Button onClick={() => signOut()}>Logout</Button>
      </div>
    </>
  );
};

export default ConversationPage;
