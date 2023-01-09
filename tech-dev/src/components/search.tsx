import { SearchIcon } from "@chakra-ui/icons";
import { Box, HStack, Input, Link, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { postsInterface, stringList } from "../lib/interfaces";
//react searchbox using chakra-ui
export default function SearchBox(titles: stringList) {
    const [query, setQuery] = useState("");
    const [focus, setFocus] = useState(false)
    var listaTitulos: string[] = []
    for (var post in titles.data) {
        listaTitulos.push(titles.data[post].titulo!!)
    }
    useEffect(() => {
        listaTitulos.filter((el: string) => {
            if (query === '') {
                return el;
            }
            else {
                return el.toLowerCase().includes(query)
            }
        })
    }, [query])
    return (
        <Box >
            <HStack>
                <Input variant='filled' value={query} onChange={(e) => { setQuery(e.currentTarget.value); console.log(e.currentTarget.value) }} w={"100%"} onFocus={() => { setFocus(true); console.log(focus) }} onBlur={() => { setFocus(false); console.log(focus) }} /><SearchIcon />
            </HStack>
            <Box display={focus ? "block" : "none"} zIndex={999} className="glass" w="100%" position={"absolute"} padding={4} marginTop={4}>
                <Stack  w={"100%"} >
                    {listaTitulos.map((titulo: string) => (
                        <Link w={"100%"}>
                            {titulo}
                            
                        </Link>
                    ))}
                </Stack>
            </Box>
        </Box>
    )
}

