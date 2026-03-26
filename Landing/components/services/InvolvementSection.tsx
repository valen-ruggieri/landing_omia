'use client';

import React from 'react';
import Image from 'next/image';

export function InvolvementSection() {
  return (
    <section className="relative px-4 py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(96,165,250,0.12),transparent_24%),radial-gradient(circle_at_80%_22%,rgba(139,92,246,0.12),transparent_24%),linear-gradient(180deg,rgba(12,14,23,0)_0%,rgba(14,18,40,0.16)_100%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
          <div className="absolute inset-x-0 top-0 z-10 px-6 pt-8 text-center sm:px-10 sm:pt-10">
            <h2 className="text-4xl tracking-tighter text-white termina-light sm:text-4xl md:text-5xl lg:text-6xl">
              Como nos{' '}
              <span className="bg-gradient-to-r from-blue-300 via-indigo-400 to-violet-500 bg-clip-text text-transparent termina-medium">
                involucramos
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
              Nos involucramos en el proyecto como partner, no solo como proveedor.
            </p>
          </div>

          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/comonosinvolucramos.png"
              alt="Como nos involucramos"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
