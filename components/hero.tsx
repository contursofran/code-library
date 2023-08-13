"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import darkHero from "public/dark-hero.svg"
import lightHero from "public/light-hero.svg"

export function Hero() {
  const { resolvedTheme } = useTheme()
  const [hero, setHero] = useState(lightHero)

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setHero(darkHero)
    } else {
      setHero(lightHero)
    }
  }, [resolvedTheme])

  return (
    <Image
      priority
      alt="hero"
      className="hidden md:flex md:w-[245px] lg:w-[270px]  xl:w-[300px] "
      height={300}
      src={hero}
      width={300}
    />
  )
}
