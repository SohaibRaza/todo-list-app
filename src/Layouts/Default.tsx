import React from "react";

export default function Default({ children }: { children: React.ReactNode }) {
  return (
    <main className="dark-mode h-screen overflow-y-auto">
      <div className="container h-full mx-auto p-4 max-w-4xl">{children}</div>
    </main>
  );
}
