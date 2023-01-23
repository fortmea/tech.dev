import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript, useColorModeValue } from '@chakra-ui/react'

export default function Document() {
  
  return (
    <Html lang="pt">
      <Head></Head>
      <body>
      <ColorModeScript initialColorMode={'light'} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
