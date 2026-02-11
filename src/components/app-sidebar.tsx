import { BookOpen, CheckSquare, Compass, DollarSign, LogOut, Radar, Receipt, Shield, Lightbulb } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { logout } from "@/lib/actions";

const federalItems = [
  { title: "Sales Overview", href: "/overview", icon: BookOpen },
  { title: "Sales Advantages", href: "/competitive-advantage", icon: Shield },
  { title: "Sales Tactics", href: "/tactics", icon: Lightbulb },
  { title: "Current Opps", href: "/opportunities", icon: Radar },
  { title: "Raising Capital", href: "/raising-capital", icon: DollarSign },
  { title: "Tax Incentives", href: "/tax-incentives", icon: Receipt },
];

const stateItems = [
  { title: "Sales Overview", href: "/state-overview", icon: BookOpen },
  { title: "Current Opps", href: "/state-opportunities", icon: Radar },
  { title: "Raising Capital", href: "/state-raising-capital", icon: DollarSign },
];

export function AppSidebar({ session }: { session: { email: string } }) {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="px-2 py-2">
          <h2 className="text-lg font-semibold tracking-tight">Point11</h2>
          <p className="text-xs text-muted-foreground">
            Selling to Government
          </p>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/start-here">
                    <Compass />
                    <span>Start Here</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Federal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {federalItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>State</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {stateItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Action Items</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/action-items">
                    <CheckSquare />
                    <span>Action Items</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="px-2 py-2">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatar.webp" alt={session.email} className="object-cover" />
              <AvatarFallback className="text-xs">
                {session.email.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <p className="text-sm text-muted-foreground truncate">
              {session.email}
            </p>
          </div>
          <form action={logout}>
            <button
              type="submit"
              className="mt-2 flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </button>
          </form>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
