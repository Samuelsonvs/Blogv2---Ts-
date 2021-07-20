import Head from 'next/head'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useState } from 'react';
import Container from '@/container/Container';

type modeHandler = () => void

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme();
  const [bool, setBool] = useState(false)

  console.log(bool)
  const modeHandler: modeHandler = () => { 
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
    setBool(!bool)
  }

  return (
    <Container>
      <div>free</div>
    </Container>
  )
}
