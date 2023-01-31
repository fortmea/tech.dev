import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Container, HStack, Input, InputGroup, InputRightAddon, Link, LinkBox, LinkOverlay, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { postData, postList, postsInterface } from "../lib/interfaces";
import useComponentVisible from "../lib/useComponentVisible";
//react searchbox using chakra-ui
var inicial: postList = { data: [] }
export default function SearchBox(titles: postList) {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
    const [listaTitulos, setListaTitulos] = useState([] as postData[])
    function initial() {
        var parcial: postList = { data: [] }
        for (var post in titles.data) {
            parcial.data.push(titles.data[post])
        }
        inicial = { data: parcial.data.slice() }
        setListaTitulos(parcial.data)
        parcial.data = []
    }
    function filterArray(query: string) {
        var parcial = inicial.data.slice()
        parcial = parcial.filter((post: postData) => post.titulo!!.toLowerCase().includes(query.toLowerCase()))
        setListaTitulos(parcial)
    }
    useEffect(() => { initial() }, [0])
    return (
        <Box position={"relative"} ref={ref} >
            <HStack >
                <InputGroup ><Input placeholder="Pesquise artigos" variant='filled' onClick={() => setIsComponentVisible(true)} onTouchStart={() => setIsComponentVisible(true)} onChange={(e) => { filterArray(e.currentTarget.value) }} w={"100%"} />
                    <InputRightAddon _hover={{cursor: "pointer"}} onClick={() => (setIsComponentVisible(!isComponentVisible))}>
                        {isComponentVisible ? <CloseIcon /> : <SearchIcon />}</InputRightAddon></InputGroup>
            </HStack>
            <Container display={isComponentVisible ? "block" : "none"} onPointerEnter={() => { setIsComponentVisible(true) }} onTouchStart={() => setIsComponentVisible(true)} zIndex={999} className="glass" position={"absolute"} padding={4} marginTop={4}>
                <Stack w={"100%"} >
                    {(listaTitulos.length > 0) ?

                        listaTitulos.map((post: postData) => (
                            <Link w={"100%"} key={post.id} href={`/posts/${post.id}`} >
                                {post.titulo}
                            </Link  >
                        )) : <Text>Nenhum resultado encontrado</Text>}
                </Stack>
            </Container>
        </Box>
    )
}

