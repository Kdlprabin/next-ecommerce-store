"use client"

import React, { useEffect } from 'react';
import Button from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import useCartStore from '@/hooks/use-cart';
import { useRouter } from 'next/navigation';

const NavbarActions = () => {

  const cart = useCartStore();
  const router = useRouter();

  return (
    <div className='ml-auto flex items-center gap-x-4'>
      <Button
        onClick={() => router.push("/cart")}
        className='flex items-center rounded-full bg-black px-4 py-2'
      >
        <ShoppingBag
          size={20}
          color={"white"}
        />
        <span className='ml-2 text-sm font-medium text-white'>
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
}

export default NavbarActions;
