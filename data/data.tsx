import { LanguageFilter, Snippet } from "@/types"

export const snippets: Snippet[] = [
  {
    id: "1",
    date: "2021-09-01",
    content: {
      title: "Snippet 1",
      description: "This is the description for snippet 1",
      language: "javascript",
      code: "console.log('hello world')",
    },
  },
  {
    id: "2",
    date: "2022-05-12",
    content: {
      title: "Snippet 2",
      description: "Lorem ipsum dolor sit amet.",
      language: "typescript",
      code: "print('Lorem ipsum')",
    },
  },
  {
    id: "3",
    date: "2022-08-27",
    content: {
      title: "Snippet 3",
      description: "Nullam quis risus eget urna mollis ornare vel eu leo.",
      language: "typescript",
      code: "System.out.println('Hello world')",
    },
  },
  {
    id: "4",
    date: "2023-02-14",
    content: {
      title: "Snippet 4",
      description: "Duis mollis, est non commodo luctus.",
      language: "html",
      code: "Console.WriteLine('Hello, World!')",
    },
  },
  {
    id: "5",
    date: "2023-03-20",
    content: {
      title: "Snippet 5",
      description: "Maecenas faucibus mollis interdum.",
      language: "javascript",
      code: "alert('Hello world')",
    },
  },
  {
    id: "6",
    date: "2023-04-08",
    content: {
      title: "Snippet 6",
      description: "Aenean lacinia bibendum nulla sed consectetur.",
      language: "css",
      code: "print('Lorem ipsum dolor sit amet')",
    },
  },
  {
    id: "7",
    date: "2023-04-23",
    content: {
      title: "Snippet 7",
      description: "Praesent commodo cursus magna.",
      language: "css",
      code: "System.out.println('Hello, Snippets!')",
    },
  },
  {
    id: "8",
    date: "2023-05-07",
    content: {
      title: "Snippet 8",
      description: "Aenean eu leo quam.",
      language: "html",
      code: "Console.WriteLine('Greetings, World!')",
    },
  },
  {
    id: "9",
    date: "2023-05-16",
    content: {
      title: "Snippet 9",
      description: "Donec id elit non mi porta gravida at eget metus.",
      language: "javascript",
      code: "console.log('Hello from Snippets!')",
    },
  },
  {
    id: "10",
    date: "2023-05-24",
    content: {
      title: "Snippet 10",
      description: "Vestibulum id ligula porta felis euismod semper.",
      language: "css",
      code: "print('Hello, Snippet World!')",
    },
  },
  {
    id: "11",
    date: "2023-05-24",
    content: {
      title: "Snippet 11",
      description: "Vestibulum id ligula porta felis euismod semper.",
      language: "css",
      code: "print('Hello, Snippet World!')",
    },
  },
  {
    id: "12",
    date: "2023-05-24",
    content: {
      title: "Snippet 12",
      description: "Vestibulum id ligula porta felis euismod semper.",
      language: "css",
      code: "print('Hello, Snippet World!')",
    },
  },
]

export const languages: LanguageFilter[] = [
  {
    value: "javascript",
    label: "Javascript",
  },
  {
    value: "typescript",
    label: "Typescript",
  },
]
