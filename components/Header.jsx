'use client';

import { HomeIcon, PersonIcon } from '@radix-ui/react-icons';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';
import { TfiTicket } from 'react-icons/tfi';

const Header = () => {
  const { data: session, status } = useSession();

  return (
    <nav className="drop-shadow-2xl flex items-center justify-between p-3 border-b border-slate-200 border-spacing-0 bg-slate-100 h-24">
      {/* Logo */}
      <div className="hover-inverse flex items-center justify-center gap-2">
        <Link
          href="/"
          className="text-3xl font-bold max-sm:text-2xl bg-gradient-to-r from-orange-400 to-teal-600 bg-clip-text text-transparent"
        >
          <Image
            src="/images/logo.png"
            alt="logo"
            height={90}
            width={90}
            className="hover-inverse w-full h-auto max-w-[120px] max-h-[120px] py-4"
          />
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-4">
        <div className="flex items-center justify-center gap-5 font-semibold text-black max-md:hidden">
          {/* Home */}
          <Link
            href="/"
            className="flex items-center justify-center gap-2 hover:text-primary hover:scale-105 hover:underline-offset-8 hover:underline transition-all"
          >
            <div className="scale-110">
              <HomeIcon />
            </div>
            <p>Home</p>
          </Link>

          {/* Events */}
          <Link
            href="/events"
            className="flex items-center justify-center gap-2 hover:text-primary hover:scale-105 hover:underline-offset-8 hover:underline transition-all"
          >
            <div className="scale-110">
              <CgProfile />
            </div>
            <p>Events</p>
          </Link>

          {/* Artists */}
          <Link
            href="/artists"
            className="flex items-center justify-center gap-2 hover:text-primary hover:scale-105 hover:underline-offset-8 hover:underline transition-all"
          >
            <div className="scale-110">
              <PersonIcon />
            </div>
            <p>Artists</p>
          </Link>

          {/* Tags */}
          <Link
            href="/tags"
            className="flex items-center justify-center gap-2 hover:text-primary hover:scale-105 hover:underline-offset-8 hover:underline transition-all"
          >
            <div className="scale-110">
              <TfiTicket />
            </div>
            <p>Tags</p>
          </Link>

          {/* Create Event - only when logged in */}
          {session && (
            <Link
              href="/create-event"
              className="flex items-center justify-center gap-2 hover:text-primary hover:scale-105 hover:underline-offset-8 hover:underline transition-all"
            >
              <p>Create Event</p>
            </Link>
          )}

          {/* Authentication buttons */}
          {status !== 'loading' &&
            (session ? (
              <button
                onClick={() => signOut()}
                className="bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium hover:opacity-70"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => signIn('google')}
                className="bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium hover:opacity-70"
              >
                Log in
              </button>
            ))}
        </div>

        <div className="flex justify-center items-center gap-4 max-sm:gap-1"></div>
      </div>
    </nav>
  );
};

export default Header;
