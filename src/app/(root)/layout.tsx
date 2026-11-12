import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Karawan Garage | كراج كروان",
  description:
    "Karawan Garage — automotive bodywork, painting and modifications in Bahrain since 1959. كراج كروان — أعمال هياكل السيارات والطلاء والتعديلات في البحرين منذ عام 1959.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
