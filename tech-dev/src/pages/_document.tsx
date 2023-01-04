import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript, useColorModeValue } from '@chakra-ui/react'


export default function Document() {
  
  return (
    <Html lang="pt">
      <Head><link rel="icon" href="../public/favicon.ico" /></Head>
      <body>
      <ColorModeScript initialColorMode={'dark'} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
