import { ReactNode } from "react";

export default function ServiceLayout({ children }: { children: ReactNode }) {
  return <div className="bg-gray-50/30">{children}</div>;
}
