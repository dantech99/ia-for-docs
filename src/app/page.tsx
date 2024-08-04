import CardsDoc from "@/components/cardDoc";

export default function Home() {
  interface IData {
    title: string;
    description: string;
    sources: Array<{ name: string; url: string }>;
  }

  const data: IData[] = [
    {
      title: "GitHub",
      description:
        "Information about GitHubs products and services, including GitHub.com, GitHub Enterprise, and GitHub Desktop.products and services, including",
      sources: [
        {
          name: "github/docs",
          url: "chat/reactjs",
        },
      ],
    },
    {
      title: "GitHub",
      description:
        "Information about GitHubs products and services, including GitHub.com, GitHub Enterprise, and GitHub Desktop.products and services, including",
      sources: [
        {
          name: "github/docs",
          url: "chat/mdn",
        },
      ],
    },
    {
      title: "GitHub",
      description:
        "Information about GitHubs products and services, including GitHub.com, GitHub Enterprise, and GitHub Desktop.products and services, including",
      sources: [
        {
          name: "github/docs",
          url: "chat/nextjs",
        },
      ],
    },
    {
      title: "GitHub",
      description:
        "Information about GitHubs products and services, including GitHub.com, GitHub Enterprise, and GitHub Desktop.products and services, including",
      sources: [
        {
          name: "github/docs",
          url: "chat/astro",
        },
      ],
    },
  ];
  return (
    <section className="max-w-screen-xl px-4 py-8 mx-auto lg:py-5 ">
      <h2 className="text-4xl font-bold text-gray-900 py-4">Documentation</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data.map((item, index) => (
          <CardsDoc key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
