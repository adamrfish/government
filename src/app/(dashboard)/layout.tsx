import { redirect } from "next/navigation";
import { verifySession } from "@/lib/auth";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await verifySession();
  if (!session) redirect("/");

  return (
    <SidebarProvider>
      <AppSidebar session={session} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 !h-4" />
          <span className="text-sm font-medium">Point11</span>
        </header>
        <main className="flex-1 p-2 sm:p-4">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
