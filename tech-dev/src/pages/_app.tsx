import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { personalizedTheme } from '../styles/theme'
import Head from 'next/head'


import { Source_Code_Pro } from '@next/font/google'
const sourceCode = Source_Code_Pro({
  subsets: ['latin'],
  weight: "400"
})

const theme = extendTheme(personalizedTheme)

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}><Head><meta name="viewport" content="width=device-width, initial-scale=1" /></Head><Component {...pageProps} /></ChakraProvider>
}
