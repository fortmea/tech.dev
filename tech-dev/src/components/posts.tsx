import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Card, CardBody, CardFooter, CardHeader, Container, Divider, Heading, Link, List, ListItem, MenuDivider, SimpleGrid, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react"
import { postData, postsInterface } from "../lib/interfaces"
import DateParser from "./date"
import UserInfo from "./github"
const Posts = (data: postsInterface) => (
    <>
        <Heading size={'md'} margin="8">Postagens <Divider></Divider></Heading>

        <Accordion allowMultiple >
            {data.data.map((post: postData) => (
                <AccordionItem borderRadius={"16px"} className="glass" marginBottom={"1em"} key={post.id}>
                    <h2>
                        <AccordionButton _hover={{ backgroundColor: "secondary", textShadow: "1px 1px", textColor: "primary" }} borderRadius={"16px"} >
                            <Box as="span" flex='1' textAlign='left'>
                                {post.titulo}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Stack>
                            <Text>{post.resumo}</Text>
                            <Link href={`/posts/${post.id}`}>Ver postagem completa</Link>
                            <Divider></Divider>
                            <DateParser dateString={post.date!!}/>
                            <UserInfo login={post.autor!!} />
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    </>
)

export default Posts