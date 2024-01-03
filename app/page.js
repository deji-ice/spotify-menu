/* eslint-disable react/no-unescaped-entities */
import { SpotifySignOut } from "@/components/SpotifySignInButton";
import List from "@/components/List";
import Spotify from "next-auth/providers/spotify";
import { signOut } from "next-auth/react";
import Footer from "@/components/footer";
import Profile from "@/components/profile";
import TopArtists from "@/components/TopArtists";
import TopSongs from "@/components/TopSongs";

export default function Home() {
  return (
    <>
      <Profile />
      <div className="w-[90%] md:w-[95%] mx-auto mt-[2rem] ">
        <TopArtists />
        <TopSongs />
      </div>
      <Footer />
    </>
  );
}
