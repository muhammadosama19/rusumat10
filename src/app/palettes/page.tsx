import Models_navbar from "@/components/Models_navbar";
import React from "react";

export default function Palettes() {
  return (
    <section className="">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold mt-14 bg-clip-text bg-current p-4 text-transparent bg-gradient-to-r from-pink-200 to-violet-800">
        Palettes
        </h1>
        <h1 className="text-2xl mt-5 mx-36">
          Enjoy an enchanting journey through amazing colorful worlds.
        </h1>
      </div>
      <div className="max-w-[85rem] px-10 py-5 sm:px-6 lg:px-10 lg:py-14 mx-auto">
        <div className="grid gap-4 grid-cols-5 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          <Models_navbar />
          <Models_navbar />
          <Models_navbar />
          <Models_navbar />
          <Models_navbar />
          <Models_navbar />
          <Models_navbar />
          <Models_navbar />
          <Models_navbar />
          <Models_navbar />
          <Models_navbar />
          <Models_navbar />
          <Models_navbar />
          <Models_navbar />
          <Models_navbar />
          <Models_navbar />
          <Models_navbar />
          <Models_navbar />
          <Models_navbar />
          <Models_navbar />
          <Models_navbar />
          <Models_navbar />
          <Models_navbar />
          <Models_navbar />
          <Models_navbar />
          <Models_navbar />
          <Models_navbar />
          <Models_navbar />
        </div>
      </div>
    </section>
  );
}
