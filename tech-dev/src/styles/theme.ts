import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
export const personalizedTheme = extendTheme({
    colors:{
        primary: "#353535",
        secondary: "#FFFFFF",
        highlight: "#BDBBB0",
        tertiary: "#D2D7DF",
        info: "#285749", 
        alert: "#B24842",
        danger: "#FF8A5E"

    },
    styles: {
        global: (props: any) => ({
          body: {
            transitionProperty: "background-color",
            transitionDuration: "slow",
            bg: mode("#FFFFFF","#353535")(props),
          }
        })
      },
})