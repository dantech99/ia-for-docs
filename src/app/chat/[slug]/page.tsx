"use client";

import { SearchIcon } from "@/components/SearchIcon";
import React from "@/icons/ReactIcon";
import Astro from "@/icons/AstroIcon";
import Nextjs from "@/icons/NextjsIcon";

import Markdown from "react-markdown";
import {
  Combobox,
  ComboboxInput,
} from "@headlessui/react";
import { useChat } from "ai/react";
import { useRef, useEffect } from "react";



interface Titles {
  [key: string]: string;
}
interface Iconos {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
}


export default function Chat({ params }: { params: { slug: string } }) {

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/llama',
    streamMode: 'stream-data',
    initialInput: `Que es ${params.slug}`,
  });


  const titles: Titles = {
    reactjs: 'React.js',
    mdn: 'MDN',
    nextjs: 'Next.js',
    astro: 'Astro Build'
  }



  const Icons: Iconos = {
    reactjs: React,
    mdn: React,
    nextjs: Nextjs,
    astro: Astro
  }

  const title = titles[params.slug];
  const Icon = Icons[params.slug];

  useEffect(() => {
    const scrollableContent = document.querySelector('.scrollable-content');
    if (scrollableContent) {
      scrollableContent.scrollTop = scrollableContent.scrollHeight;
    }
  }, [messages]);


  return (
    <div className="flex justify-center  items-center   flex-col h-screen">

      <div className=" p-2 top-32  ">
        <div className="flex justify-center items-center text-3xl font-semibold gap-3">
          <Icon className="w-12 h-12" />  {title}
        </div>
      </div>
      {
        messages.length > 0 ? (
          <div className="w-3/5 bg-white rounded-xl p-10 mb-10 h-auto scrollable-content">
            {
              messages.map(m => (
                <div key={m.id} className="whitespace-pre-wrap">
                  {m.role === 'user' ? (
                    <div className="text-2xl font-bold pb-5">
                      {m.content}
                    </div>
                  ) : (
                    <div className="mb-4 markdown">
                      <Markdown>
                        {m.content}
                      </Markdown>


                    </div>

                  )}
                </div>
              ))
            }
          </div>
        ) : null
      }
      <Combobox
        onSubmit={handleSubmit}
        as="form"
        className=" w-2/3 -top-20 "
      >
        <label className="relative w-full">
          <div className="absolute px-4 py-3 text-gray-300">
            <SearchIcon className="w-8 h-8 md:w-12 md:h-12" />
          </div>
          <ComboboxInput
            value={input || ""}
            aria-label="Assignee"
            onChange={handleInputChange}
            className="z-10 block w-full p-4 md:p-6 pl-14 md:pl-20 text-base md:text-xl font-bold dark:bg-secondry bg-white border dark:border-[#a9a9a9] border-gray-300 rounded-3xl outline-none appearance-none dark:hover:shadow-darkbox hover:shadow-lg dark:focus:shadow-darkbox focus:shadow-blue-100 focus:border-blue-300"
            placeholder={`Escribe tu pregunta de ${title}`}
          />
        </label>
      </Combobox>
    </div>
  );
}
