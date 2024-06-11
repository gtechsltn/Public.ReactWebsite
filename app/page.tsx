'use client';

import { FilePicker } from "./components/FilePicker/FilePicker";

export default function Home() {
  console.log("ENV_LOCAL_VARIABLE", process.env.ENV_LOCAL_VARIABLE)
  console.log("NEXT_PUBLIC_ENV_LOCAL_VARIABLE", process.env.NEXT_PUBLIC_ENV_LOCAL_VARIABLE)
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl mb-6">Upload image</h1>
      <FilePicker uploadURL={"https://localhost:5001/api/v1/ImageGroup"} />
      <
    </main>
  );
}