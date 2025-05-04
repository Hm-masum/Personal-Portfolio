"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { ICertification } from "@/type/certification";

const CarouselCard = ({
  certificationData,
}: {
  certificationData: ICertification[];
}) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-4xl mx-auto"
        opts={{
          align: "start",
          loop: true,
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {certificationData.map((certification, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                <div>
                  <Image
                    className="h-[250px] md:h-[280px] w-[380px] rounded-xl"
                    src={certification?.image}
                    width={400}
                    height={400}
                    alt=""
                  />
                </div>
                <div className="text-white space-y-2">
                  <h2 className="text-center md:text-start text-2xl font-semibold">
                    {certification?.title}
                  </h2>
                  <h2>
                    {certification.achievements.map((achievement, idx) => (
                      <p
                        key={idx}
                        className="flex text-center md:text-start gap-2"
                      >
                        <GraduationCap className="text-xl font-semibold text-yellow-600" />
                        {achievement}
                      </p>
                    ))}
                  </h2>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex bg-zinc-900 border-yellow-500 text-yellow-500" />
        <CarouselNext className="hidden md:flex bg-zinc-900 border-yellow-500 text-yellow-500" />
      </Carousel>
    </div>
  );
};

export default CarouselCard;
