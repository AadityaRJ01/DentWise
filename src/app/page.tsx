import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignOutButton, SignUpButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <SignedOut>
      <SignUpButton mode="modal">Sign Up</SignUpButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton>Sign out</SignOutButton>
      </SignedIn>
    </div>

  );
}
