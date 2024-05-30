'use client';

import { FilePicker } from "./ui/file-picker/file-picker";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl mb-6">Upload image</h1>
      <FilePicker uploadURL={"http://dlptest.com/http-post/"} />
    </main>
  );
}