"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import Image from '@/components/Image/Image';
import Card1 from '@/components/Information/Card1';
import Card2 from '@/components/Information/Card2';
import Card3 from '@/components/Information/Card3';
import Partners from '@/components/Partners/Partners';
import Subscribe from '@/components/Subscribe/Subscribe';
import InformationWrapper from '@/components/Information/Information';

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
    <section>
        <Image />
    </section>
    <section id="Information">
        <section>
            <Card1 />
        </section>
        <section>
            <Card2 />
        </section>
        <section>
            <Card3 />
        </section>
    </section>
      <section id="Partners">
        <Partners />
      </section>
      <section id="Subscribe">
        <Subscribe />
    </section>
    </>
  );
}
