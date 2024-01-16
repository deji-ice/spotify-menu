/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  SpotifySignInButton,
} from "@/components/SpotifySignInButton";
import {useSession } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();
  return (
    <section className="flex h-screen ">
      {/* <Loader/> */}
      <div className="m-auto">
        <h2 className="text-center mb-[1rem]">
          {!session?.user && (
            <>
              <SpotifySignInButton />
            </>
          )}
        </h2>
      </div>
    </section>
  );
}
