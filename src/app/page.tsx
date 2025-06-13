"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


import Image from '@/components/Image/Image';
import Card1 from '@/components/Information/Card1';
import Card2 from '@/components/Information/Card2';
import Card3 from '@/components/Information/Card3';
import Partners from '@/components/Partners/Partners';
import Subscribe from '@/components/Subscribe/Subscribe';

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scrollTo = params.get("scrollTo");

    if (scrollTo) {
      const section = document.getElementById(scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <>
    <div className='overflow-hidden'>
      <section>
          <Image />
      </section>
      <section id="Information" className="relative -mt-30 bg-[url('/Background-page.svg')] py-20 w-full min-h-screen">
        <div className="relative container mt-30 mx-auto space-y-10 px-4">
          <Card1 />
          <Card2 />
        </div>  
      </section>
          <Card3 />
        <section id="Partners">
          <Partners />
        </section>
        <section id="Subscribe">
          <Subscribe />
      </section>
    </div>
    </>
  );
}
