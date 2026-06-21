"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export default function StudioPage() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "it16j180";
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

  // if (!projectId || projectId === "your_project_id" || !dataset) {
  //   return (
  //     <main className="flex min-h-screen items-center justify-center bg-white px-6 font-sans text-black">
  //       <div className="max-w-xl border border-black/15 p-8">
  //         <h1 className="font-serif text-3xl">Sanity Studio needs setup</h1>
  //         <p className="mt-4 text-neutral-600">
  //           Add NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET to
  //           .env.local, then restart the dev server.
  //         </p>
  //       </div>
  //     </main>
  //   );
  // }

  return <NextStudio config={config} />;
}
