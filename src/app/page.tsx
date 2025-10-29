'use client';

import Navbar from '@/components/Navbar';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mohd Imran – Frontend Developer</title>
        <meta name="description" content="Mohd Imran Portfolio" />
        {/* Google Fonts Inter or Poppins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        className="min-h-screen w-full flex flex-col items-center font-sans"
        style={{
          background: `radial-gradient(ellipse at top right, #bcf1d7 0%, transparent 60%),
          radial-gradient(ellipse at bottom left, #fde4cc 0%, transparent 60%),
          linear-gradient(180deg, #f7fad3 0%, #fde4cc 100%)`,
        }}
      >
        <Navbar />
        <header className="w-full mt-32 px-4 md:px-0 flex flex-col items-center">
          <h1 className="text-10xl md:text-7xl font-bold text-center mb-2 heading-title font-title">
            Hi. I&apos;m Imran.
            <br />A Developer.
          </h1>
          <p className="mt-4 mb-10 text-lg text-neutral-500 text-center max-w-xl font-body text-brandgreen font-bold  ">
            I&apos;m passionate about building experiences that are engaging, accessible, and
            user-centric.
          </p>
        </header>

        {/* Project Cards */}
        <section className="w-full grid md:grid-cols-2 gap-10 px-4 mb-20 max-w-5xl">
          <div className="rounded-3xl p-6 bg-purple-200 shadow-md">
            <h2 className="mb-2 text-lg font-bold text-purple-700">AI</h2>
            <div className="w-full h-40 bg-white rounded-xl mb-2"></div>
            <p className="text-neutral-700">Hotel API system with AI features...</p>
          </div>
          <div className="rounded-3xl p-6 bg-teal-200 shadow-md">
            <h2 className="mb-2 text-lg font-bold text-teal-700">Articles</h2>
            <div className="w-full h-40 bg-white rounded-xl mb-2"></div>
            <p className="text-neutral-700">Technical writing and documentation sample...</p>
          </div>
          <div className="rounded-3xl p-6 bg-orange-200 shadow-md">
            <h2 className="mb-2 text-lg font-bold text-orange-700">Plugins</h2>
            <div className="w-full h-40 bg-white rounded-xl mb-2"></div>
            <p className="text-neutral-700">React Native plugins with custom tools...</p>
          </div>
          <div className="rounded-3xl p-6 bg-blue-200 shadow-md">
            <h2 className="mb-2 text-lg font-bold text-blue-700">Mobile</h2>
            <div className="w-full h-40 bg-white rounded-xl mb-2"></div>
            <p className="text-neutral-700">Mobile app network manager features...</p>
          </div>
        </section>

        {/* In Progress Section */}
        <section className="w-full mb-20 flex flex-col items-center">
          <h2
            className="text-4xl font-bold mb-4 text-center"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            In Progress.
          </h2>
          <p className="mt-2 mb-10 text-neutral-600 text-center max-w-xl">
            Work in various states of design and development, from side projects to in-flight
            features.
          </p>
          <div className="flex gap-10">
            <div className="rounded-3xl p-6 bg-white shadow-md w-72 h-56"></div>
            <div className="rounded-3xl p-6 bg-neutral-900 shadow-md w-72 h-56"></div>
          </div>
        </section>

        <footer className="w-full py-12 px-4 text-neutral-600 text-xs flex flex-col items-center border-t border-neutral-200">
          <div className="flex gap-8 mb-3">
            <span>© 2025 Mohd Imran</span>
            <span>Portfolio</span>
          </div>
          <div className="flex gap-8">
            <a href="#">Github</a>
            <a href="#">LinkedIn</a>
            <a href="#">Contact</a>
            <a href="#">CV</a>
          </div>
        </footer>
      </div>
    </>
  );
}
