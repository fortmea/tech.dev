import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript, useColorModeValue } from '@chakra-ui/react'


export default function Document() {
  
  return (
    <Html lang="pt">
      <Head><link rel="icon" href="src/public/images/brazil-flag-round-icon-256.png" /></Head>
      <body>
      <ColorModeScript initialColorMode={'light'} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
