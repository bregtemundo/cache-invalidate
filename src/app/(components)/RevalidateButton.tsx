"use client";

import React from 'react'
import { revalidate } from '../(services)/api.services';
import { useRouter } from 'next/navigation';


function RevalidateButton() {
  const router = useRouter();

  return (
    <button
    onClick={async () => {
      await revalidate();
      router.refresh();
    }}
  >
    Revalidate
  </button>
  )
}

export default RevalidateButton