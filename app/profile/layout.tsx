import React from "react";

export default function LayoutProfile({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <h1>This is the layout</h1>
      {children}
    </div>
  );
}
