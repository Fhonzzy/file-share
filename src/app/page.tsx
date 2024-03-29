"use client"
import { Button } from "@/components/ui/button";
import { SignInButton, SignOutButton, SignedIn, SignedOut, useSession } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
	const session = useSession();
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<SignedIn>
        <SignOutButton><Button>SIgn Out</Button></SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal"><Button>SIgn In</Button></SignInButton>
      </SignedOut>
		</main>
	);
}
