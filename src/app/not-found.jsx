"use client";

import React from "react";
import Link from "next/link";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center">
        {/* Large stylized 404 */}
        <h1 className="text-9xl font-extrabold text-primary1 animate-pulse">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-Base sm:text-5xl">
          Page not found
        </h2>

        <p className="mt-6 text-Base leading-7">
          Sorry, we couldn’t find the page you’re looking for. It might have
          been moved or deleted.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-primary1 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary1 transition-all"
          >
            Go back home
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="text-sm font-semibold text-Base hover:text-primary1"
          >
            Try refreshing <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>

      {/* Subtle background decoration */}
      <div className="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-primary1 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] right-[20%] w-72 h-72 bg-primary2 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
}

export default NotFound;
