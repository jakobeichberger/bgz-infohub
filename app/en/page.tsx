"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ENRootPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/en/infohub");
  }, [router]);
  return null;
}
