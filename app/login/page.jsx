/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  SpotifySignInButton,
} from "@/components/SpotifySignInButton";
import {useSession } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();
  return (
    <div className="flex h-screen items-center justify-center">
      {!session?.user && (
        <>
          <SpotifySignInButton />
        </>
      )}
    </div>
  );
}
