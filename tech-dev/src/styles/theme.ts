import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Source_Code_Pro } from '@next/font/google'
const sourceCode = Source_Code_Pro({
  subsets: ['latin'],
  weight: "400"
})
export const personalizedTheme = extendTheme({
  fonts: {
    body: sourceCode.style.fontFamily
  },
  config: {
    disableTransitionOnChange: false
  },
  colors: {
    primary: "#1C002E",
    secondary: "#F9F871",
    highlight: "#F6B152",
    tertiary: "#611846",
    info: "#285749",
    alert: "#B24842",
    danger: "#FF8A5E"

  },
  styles: {
    global: (props: any) => ({

      body: {

        transitionProperty: "background-color",
        transitionDuration: "200ms",
        bg: mode("#FFFFFF", "#353535")(props),
        lineHeight: "base",
      }
    })
  },
})