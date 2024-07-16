"use client";

import { useRouter } from "next/navigation";
import FeedbackForm from "./feedback";

function MyProfile({ children }: any) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-hero-pattern bg-[51%_38%] ">
      <div className="w-full flex items-center justify-center min-h-screen lg:flex-row gap-6 sm:px-20 md:px-8 lg:px-36 xl:px-48 ">
        <FeedbackForm />
      </div>
    </div>
  );
}
export default MyProfile;
