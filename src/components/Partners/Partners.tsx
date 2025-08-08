"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaGithub } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; 
import Image from "next/image";

const developers = [
  {
    name: "André Barros",
    image: "/AndreBarros.JPG",
    link: "https://github.com/andreb308",
  },
  {
    name: "Davi Silvério",
    image: "/Davi.JPG",
    link: "https://github.com/davisilverio",
  },
  {
    name: "Felipe Carrancho",
    image: "/FelipeCarrancho.jpg",
    link: "https://github.com/FelipeCarrancho",
  },
  {
    name: "Gabriel Calheias",
    image: "/Gabriel.png",
    link: "https://github.com/Calheias",
  },
  {
    name: "Gabriel Gonçalves",
    image: "/GabrielGoncalves.JPG",
    link: "https://github.com/gabrielgongig",
  },
  {
    name: "Gabrielle Oliveira",
    image: "/Gabrielle.jpg",
    link: "https://github.com/gabriellefoliv",
  },
  {
    name: "Gustavo Curty",
    image: "/GustavoCurty.jpg",
    link: "https://github.com/Gustavocurty",
  },
  {
    name: "Luis Felipe Braido",
    image: "/LuisFelipe.JPG",
    link: "https://github.com/BraidoLuis",
  },
];

export default function Partners() {
  return (
    <section className="py-12 bg-white">
      <div className="px-4 sm:px-6 py-8 max-w-7xl mx-auto text-center">
        <h2 className="text-xl font-bold mb-10">Parceiros</h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 24 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          <SwiperSlide>
            <img src="/LogoUerj.svg" alt="Parceiro 1" className="h-20 mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/LogoSparta.svg" alt="Parceiro 2" className="h-20 mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/LogoFermoplast.svg" alt="Parceiro 3" className="h-20 mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/LogoPontes.svg" alt="Parceiro 4" className="h-20 mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/LogoSpartanus.svg" alt="Parceiro 5" className="h-20 mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/LogoSerraJr.svg" alt="Serra Jr. Engenharia" className="h-20 mx-auto" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="border-t border-gray-200 my-10 mx-auto w-11/12 sm:w-3/4" />

      <div className="text-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default" className="bg-[orange] text-white font-bold text-md p-4 hover:border-[orange] hover:bg-white hover:text-[orange] transition duration-400 hover:transition hover:duration-400 border-2 border-[orange] hover:border-2">Conheça os Desenvolvedores</Button>
          </DialogTrigger>
          <DialogContent className="p-4 max-w-lg md:max-w-2xl max-h-screen overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Desenvolvedores</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8 mt-4">
              {developers.map((dev, index) => (
                <a
                  key={index}
                  href={dev.link ? dev.link : "#developers"}
                  className="flex flex-col items-center bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300 transform hover:scale-[1.03]"
                  {...(dev.link ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {dev.image ? (
                    <Image
                      src={dev.image}
                      alt={dev.name}
                      width={100}
                      height={100}
                      className="rounded-full w-20 h-20 mx-auto mb-3 object-cover"
                    />
                  ) : (
                    <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center rounded-full bg-gray-200">
                      <BsPersonCircle size={100} className="text-gray-400" />
                    </div>
                  )}
                  <p className="text-sm font-semibold text-gray-800 text-center">{dev.name}</p>
                  <div className="flex justify-center mt-2 text-gray-500 hover:text-black transition">
                    <FaGithub size={20} />
                  </div>
                </a>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}