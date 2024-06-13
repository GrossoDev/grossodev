import React, { useMemo, useState } from "react";
import linkIcon from "../../assets/icons/icons8-external-link-96.png"
import githubIcon from "../../assets/icons/icons8-github-dark-96.png"

export type CarouselItem = {
  image: any;
  icon: any;
  title: string;
  appUrl: string;
  repoUrl: string;
  description: React.ReactNode;
};

export interface CarouselProps {
  items: CarouselItem[];
}

export function Carousel({ items = [] }: CarouselProps) {
  return (
    <div className="flex flex-col px-2 md:px-16">
      {
        items.map((item, i) => (
          <>
            <article key={i} className="flex flex-col lg:flex-row items-center gap-4 md:gap-0 sm:px-8 rounded">
              <div className="flex-shrink relative p-2 w-full lg:w-[300px] lg:min-w-[300px] h-fit rounded ring-1 ring-white/10">
                <img className="w-full rounded object-contain" src={item.image} />
                <img className="absolute w-16 bottom-4 right-4 object-contain shadow" src={item.icon} />
              </div>

              <div className="flex flex-col">
                <h2 className="mb-4 font-bold">{item.title}</h2>

                <div className="flex-grow">
                  {item.description}
                </div>

                <div className="flex mt-4 gap-2 justify-center w-full lg:w-fit lg:justify-end">
                  <a className="flex-grow no-underline lg:min-w-48" href={item.appUrl} target="_blank">
                    <div className="flex h-12 px-4 rounded-full justify-center items-center bg-[#1300FA]">
                      <img width="24" height="24" src={linkIcon} aria-hidden />
                      <span className="font-bold ml-1 text-white">Visit site</span>
                    </div>
                  </a>

                  <a className="flex-grow no-underline lg:min-w-48" href={item.repoUrl} target="_blank">
                    <div className="flex h-12 px-4 rounded-full justify-center items-center bg-gray-200">
                      <img width="24" height="24" src={githubIcon} aria-hidden />
                      <span className="font-bold ml-1 text-gray-800">Visit repo</span>
                    </div>
                  </a>
                </div>
              </div>
            </article>

            {
              (i + 1 < items.length)
              ? <div className="mx-16 my-16 lg:my-8 ring-1 ring-white/5" />
              : null
            }
          </>
        ))
      }
    </div>
  );
}
  