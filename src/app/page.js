import React from "react";
import Profile from "@/components/Profile";
import Stats from "@/components/Stats";
import History from "@/components/History";

export default function page() {
  return (
    <div className="flex flex-col gap-y-4">
      <Profile />
      <Stats />
      <History />
    </div>
  );
}
