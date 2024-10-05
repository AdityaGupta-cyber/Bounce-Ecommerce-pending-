"use client"

import { cn } from "@/lib/utils";
import { CalendarCheck, Heart, HomeIcon, LucideProps, Settings, ShoppingBag, ShoppingCart, Users2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ForwardRefExoticComponent, RefAttributes } from "react";

 interface iAppProps {
    id: number;
    name: string;
    href: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
}

export const dashboardLinks: iAppProps[] = [
    {
        id: 0,
        name: "Home",
        href: "/dashboard",
        icon: HomeIcon,
    },
    {
        id: 1,
        name: "Shop",
        href: "/dashboard/shop",
        icon: ShoppingBag,
    },
    {
        id: 2,
        name: "Favourites",
        href: "/dashboard/favourites",
        icon: Heart,
    },
    {
        id: 3,
        name: "Cart",
        href: "/dashboard/cart",
        icon: ShoppingCart,
    },
];

export function DashboardLinks() {
    const pathname = usePathname();
    return (
        <>
            {dashboardLinks.map((link) => (
                <Link className={cn(
                    pathname === link.href 
                    ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground',
                    'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary'
                )} key={link.id} href={link.href}>
                    <link.icon className="size-4" />
                    {link.name}
                </Link>
            ))}
        </>
    );
}
