import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Card, CardBody, CardFooter, CardHeader, Divider, Link, List, ListItem, MenuDivider, SimpleGrid, Stack, Wrap, WrapItem } from "@chakra-ui/react"
import { postData, postsInterface } from "../lib/interfaces"
import UserInfo from "./github"
const Posts = (data: postsInterface) => (
    <Accordion allowMultiple >
        {data.data.map((post: postData) => (
            <AccordionItem borderRadius={"16px"} className="glass" marginBottom={"1em"} key={post.id}>
                <h2>
                    <AccordionButton >
                        <Box as="span" flex='1' textAlign='left'>
                            {post.titulo}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    {post.resumo}
                    <UserInfo login={post.autor!!} />
                </AccordionPanel>
            </AccordionItem>
        ))}
    </Accordion>
)

export default Posts