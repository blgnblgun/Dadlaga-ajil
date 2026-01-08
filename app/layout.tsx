import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import MainLayout from "@/components/MainLayout";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-[#0f0f0f] text-white">
        <Navbar />
        <Sidebar />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
