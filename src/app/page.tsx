"use client";

import EnteranceLoadingPage from "@/components/EnteranceLoadingPage";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show the loading screen for 1 second
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <EnteranceLoadingPage />;
  }

  return <div>Walkthrough 1</div>;
}
