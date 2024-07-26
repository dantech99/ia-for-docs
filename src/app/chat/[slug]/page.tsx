"use client";

import { SearchIcon } from "@/components/SearchIcon";
import ReactLogo from "@/components/ReactLogo";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Description,
  Field,
  Label,
  Textarea
} from "@headlessui/react";
import { useState } from "react";
import {useChat} from "ai/react";

interface Question {
  id: number;
  pregunta: string;
  answer: string;
}

const questions: Question[] = [
  {
    id: 1,
    pregunta: "¿Para qué sirve useEffect?",
    answer: "Paris",
  },
  {
    id: 2,
    pregunta: "Cómo cancelar una petición fetch",
    answer: "Berlin",
  },
  {
    id: 3,
    pregunta: "¿Qué es la hidratación?",
    answer: "Rome",
  },
  {
    id: 4,
    pregunta: "¿Qué hace el hook useId?",
    answer: "Madrid",
  },
];

export default function Chat() {
  const [selectQuestion, setSelectQuestion] = useState(questions[0]);
  const [query, setQuery] = useState("");

  const {messages, input, handleInputChange, handleSubmit} = useChat();

  const filterQuestion =
    query === ""
      ? questions
      : questions.filter((question) => {
          return question.pregunta.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="flex justify-center content-center items-center h-screen  flex-col">

      <div className=" p-2 top-32  ">
        <div className="flex justify-center items-center text-3xl font-semibold gap-3">
          <ReactLogo className="size-16 fill-cyan-400" /> React.js
        </div>
      </div>

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
            value={input}
            aria-label="Assignee"
            displayValue={(question: Question | null) =>
              question?.pregunta ?? ""
            }
            onChange={handleInputChange}
            className="z-10 block w-full p-4 md:p-6 pl-14 md:pl-20 text-base md:text-xl font-bold dark:bg-secondry bg-white border dark:border-[#a9a9a9] border-gray-300 rounded-3xl outline-none appearance-none dark:hover:shadow-darkbox hover:shadow-lg dark:focus:shadow-darkbox focus:shadow-blue-100 focus:border-blue-300"
            placeholder="Buscar pregunta..."
          />
        </label>
        <ComboboxOptions
          anchor="bottom"
          className="absolute z-10 w-[60%] p-3 overflow-hidden bg-white border border-gray-300 rounded-t-none shadow-lg rounded-3xl"
        >
          {filterQuestion.map((question) => (
            <ComboboxOption
              key={question.id}
              value={question}
              className="data-[focus]:bg-blue-100"
            >
              {question.pregunta}
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>


      <div className=" w-full max-w-md mx-auto bg-white rounded-xl p-10 mt-10">
      {
        messages.map(m => (
          <div key={m.id} className="whitespace-pre-wrap">
            {m.role === 'user' ? 'User: ' : 'AI: '}

            {m.content}
          </div>
        ))
      }
      </div>
  
    </div>
  );
}
