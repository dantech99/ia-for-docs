import CardsDoc from "@/components/cardDoc";
import React  from "@/icons/ReactIcon";
import Nextjs from "@/icons/NextjsIcon";
import Astro from "@/icons/AstroIcon";

export default function Home() {
  interface IData {
    title: string;
    description: string;
    icon: any;
    sources: Array<{ name: string; url: string }>;
    route: string;
  }

  const data: IData[] = [
    {
      title: "React.js",
      description:
        "Informacion sobre React.js, una biblioteca de JavaScript para construir interfaces de usuario",
      icon: React,
      sources: [
        {
          name: "github/docs",
          url: "https://es.react.dev/learn",
        },
      ],
      route: 'chat/reactjs'
    },
    {
      title: "MDN",
      description:
        "MDN Web Docs es una plataforma creada por Mozilla para proporcionar documentación y recursos educativos sobre tecnologías web como HTML, CSS y JavaScript",
        icon: React,
      sources: [
        {
          name: "github/docs",
          url: "https://developer.mozilla.org/es/",
        },
      ],
      route: 'chat/mdn'
    },
    {
      title: "Next.js",
      description:
        "Informacion sobre Next.js, un framework de React que permite renderizado del lado del servidor y de la vista del cliente",
      icon: Nextjs,
      sources: [
        {
          name: "github/docs",
          url: "https://nextjs.org/docs",
        },
      ],
      route: 'chat/nextjs'
    },
    {
      title: "Astro Build",
      description:
        "Informacion sobre Astro Build, un marco de construcción de sitios web moderno y rápido",
      icon: Astro,
      sources: [
        {
          name: "github/docs",
          url: "https://docs.astro.build/en/getting-started/",
        },
      ],
      route: 'chat/astro'
    },
  ];
  return (
    <section className="max-w-screen-xl px-4 py-8 mx-auto lg:py-5 ">
      <h2 className="text-4xl font-bold text-gray-900 py-4">Documentaciones</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data.map((item, index) => (
          <CardsDoc key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
