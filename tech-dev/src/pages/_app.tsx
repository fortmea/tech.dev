import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { personalizedTheme } from '../styles/theme'



const theme = extendTheme(personalizedTheme)
export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}><Component {...pageProps} /></ChakraProvider>
}
