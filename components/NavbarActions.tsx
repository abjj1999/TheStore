"use client";

import { ShoppingBag } from "lucide-react";
import Button from "./ui/button";
import { useEffect, useState } from "react";



const NavbarActions = () => {

    // This is a hack to prevent the component from rendering on the server
    // since our cart will tap into the local storage
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return ( 
        <div className="ml-auto flex items-center gap-x-4">
            <Button className="flex items-center rounded-full bg-black px-4 py-2 ">
                <ShoppingBag scale={20} color="white" />
                <span className="ml-2 text-sm font-medium text-white ">0</span>
            </Button>
        </div>
     );
}
 
export default NavbarActions;