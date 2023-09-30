"use client";

import { ShoppingBag } from "lucide-react";
import Button from "./ui/button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";



const NavbarActions = () => {

    // This is a hack to prevent the component from rendering on the server
    // since our cart will tap into the local storage
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart();
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return ( 
        <div className="ml-auto flex items-center gap-x-4">
            <Button onClick={() => router.push("/cart")} className="flex items-center rounded-full bg-black px-4 py-2 ">
                <ShoppingBag scale={20} color="white" />
                <span className="ml-2 text-sm font-medium text-white ">
                    {cart.items.length}
                </span>
            </Button>
        </div>
     );
}
 
export default NavbarActions;