import React from "react";
import Profile from "@/components/Profile";
import Stats from "@/components/Stats";
import History from "@/components/History";
import Header from "@/components/Header";
import BackToStaff from "@/components/BackToStaff";
import data from "/public/data/data.json";

export default function page({ id = 0 }) {
  const item = data[id];
  return (
    <div>
      <Header item={item} />
      <BackToStaff />
      <div className="flex flex-col gap-y-4 md:flex-row md:flex-wrap 2xl:container 2xl:mx-auto">
        <Profile item={item} />
        <div className="md:flex md:w-full">
          <Stats item={item} />
          <History item={item} />
        </div>
      </div>
    </div>
  );
}
