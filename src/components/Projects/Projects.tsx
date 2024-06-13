import { Carousel, CarouselItem } from "./Carousel";
import React, { useMemo } from "react";
import buscaventasScreencap from "../../assets/buscaventas-scrcap.png";
import ruleroScreencap from "../../assets/rulero-scrcap.png";
import buscaventasIcon from "../../assets/buscaventas-icon.png";
import ruleroIcon from "../../assets/rulero-icon.png";

const projects: CarouselItem[] = [
  {
    image: buscaventasScreencap,
    icon: buscaventasIcon,
    title: "Buscaventas",
    appUrl: "https://grossodev.github.io/Buscaventas",
    repoUrl: "https://github.com/GrossoDev/Buscaventas",
    description: (
      <>
        <p>Buscaventas is a search engine that finds different products from the same seller using MercadoLibre&apos;s API.</p>

        <ul className="pl-0">
          <li><b>Frontend:</b> React, Tailwind, Bootstrap, Create&#8209;React&#8209;App</li>
          <li><b>CI/CD:</b> Github Actions</li>
          <li><b>Deployment:</b> Github Pages</li>
        </ul>
      </>
    )
  },
  // {
  //   image: ruleroScreencap,
  //   icon: ruleroIcon,
  //   title: "Rulero",
  //   appUrl: "https://grossodev.github.io/Buscaventas",
  //   repoUrl: "https://github.com/GrossoDev/Buscaventas",
  //   description: (
  //     <>
  //       <p>App that finds arbitrage opportunities between crypto-currencies algorithmically.</p>

  //       <ul className="pl-0">
  //         <li><b>Frontend:</b> Angular, PrimeNG, Tailwind, Jest</li>
  //         <li><b>Backend:</b> ASP.Net, .Net 8, Entity Framework Core, NUnit</li>
  //         <li><b>CI/CD:</b> Github Actions</li>
  //         <li><b>Deployment:</b> Azure App Service, Azure Cosmos DB, Github Pages</li>
  //       </ul>
  //     </>
  //   )
  // }
];

export function Projects() {
  return (
    <div className="container flex-col mt-4 sm:my-4 p-8 sm:rounded-2xl bg-transparent backdrop-blur-sm ring-1 ring-white/5">
      <h1 className="flex justify-center font-bold mb-16">Projects</h1>

      <Carousel items={projects} />
    </div>
  );
}
