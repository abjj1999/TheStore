"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconBtn from "./IconBtn";
import {  Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
// import React from "react";

interface ProductCardProps {
    data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({
    data
}) => {
    return ( 
        <div className="
            bg-white group cursor-pointer rounded-xl border p-3 space-y-4
        ">
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image alt="image" src={data?.images?.[0].url} fill
                    className="aspect-square rounded-md object-cover"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconBtn 
                            onClick={() => {}}
                            icon={<Expand  size={20} className="text-gray-600"/>}
                            className=""
                        />
                        <IconBtn 
                            onClick={() => {}}
                            icon={<ShoppingCart  size={20} className="text-gray-600"/>}
                            className=""
                        />
                    </div>
                </div>
            </div>
            {/* desc */}
            <div className="">
                <p className="font-semibold text-lg ">{data.name}</p>
                <p className="text-sm text-gray-500">{data.category?.name}</p>
            </div>
            {/* price */}
            <div className="flex items-center justify-between">
                <Currency value={data.price} />
            </div>
        </div>
     );
}
 
export default ProductCard;