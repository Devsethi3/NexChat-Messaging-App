"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";
import Spline from "@splinetool/react-spline";
import Image from "next/image";

const HomePage = () => {
  useGSAP(() => {
    gsap.from(".home-content", {
      y: 100,
      duration: 0.8,
      opacity: 0,
      stagger: 0.1,
    });
  }, []);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const cursor = document.querySelector(".cursor");
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
      });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="cursor hidden lg:block w-32 h-32 opacity-5 bg-white rounded-full absolute z-50 mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="overflow-hidden z-[100]">
        <div className="h-full relative bg-[url(/images/paper.svg)] dark:bg-[url(/images/paper-dark.svg)]">
          <div className="container grid grid-cols-1 lg:grid-cols-2 items-center h-[90vh]">
            <div className="mx-auto text-center">
              <div className="absolute w-[500px] h-[500px] bg-primary -z-10 top-0 left-0 opacity-10 shine-asset-1 rounded-full"></div>
              <h1 className="font-semibold home-content text-4xl tracking-tighter sm:text-4xl lg:text-7xl">
                Chat in <span className="text-primary">Real Time</span> with
                Friends
              </h1>

              <p className="lg:mx-auto mx-4 home-content lg:text-base my-6 lg:my-12 max-w-xl text text-black/80 dark:text-white/80">
                Connect with your friends and loved ones instantly with our
                real-time chat application. Whether you want to catch up, simply
                stay connected.
              </p>
              <div className="flex mt-8 items-center home-content justify-center gap-8">
                <Link href="/users">
                  <Button variant="secondary">Start Chatting</Button>
                </Link>
                <Link href="/login">
                  <Button>Get Started</Button>
                </Link>
              </div>
            </div>
            <div className="w-full relative">
              <div className="absolute w-[500px] h-[500px] bg-primary -z-10 top-0 right-0 shine-asset-1 rounded-full opacity-20"></div>
              <Spline scene="https://prod.spline.design/aJKcxnPQcZbtsO0m/scene.splinecode" />
            </div>
          </div>
        </div>
      </div>

      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Tour the App
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Experience the Chat
              </h2>
              <p className="max-w-[600px] text-gray-500 py-5 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                See the sleek and intuitive interface that makes communication a
                breeze. Whether you&apos;re on desktop or mobile, the chat app
                keeps you connected.
              </p>
            </div>
            <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
              <Image
                alt="Screenshot"
                className="object-cover rounded-md p-2 bg-secondary"
                height="600"
                src="/images/preview-2.png"
                width="600"
              />
              <Image
                alt="Screenshot"
                className="object-cover rounded-md p-2 bg-secondary"
                height="600"
                src="/images/preview-1.png"
                width="600"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 items-center justify-center text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                How it works
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Follow these simple steps to get started with our chat app.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="flex flex-col gap-2 items-center justify-center">
                <div className="flex w-12 h-12 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
                  1
                </div>
                <div className="grid gap-2 text-center">
                  <h3 className="text-lg font-bold">Create an Account</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Sign up for an account on our website or mobile app.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <div className="flex w-12 h-12 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
                  2
                </div>
                <div className="grid gap-2 text-center">
                  <h3 className="text-lg font-bold">Add Friends</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with your friends by adding them to your contact
                    list.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <div className="flex w-12 h-12 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
                  3
                </div>
                <div className="grid gap-2 text-center">
                  <h3 className="text-lg font-bold">Start Chatting</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Begin your conversations and enjoy our chat app!
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[60vh] w-full relative">
              <Image
                src="/images/preview-2.png"
                fill
                className="bg-secondary p-2 rounded-md"
                objectFit="cover"
                alt="showcase"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
