import { Card, CardBody, CardFooter, CardHeader, Divider, Link, List, ListItem, MenuDivider, SimpleGrid, Stack, Wrap, WrapItem } from "@chakra-ui/react"
import UserInfo from "./github"


interface postData {
    title: string,
    content: string,
    date: Date,
    autor: string,
    resumo: string
}
interface postsInterface {
    data: any
}

const Posts = (data: postsInterface) => (
    <SimpleGrid columns={2} spacing="1em">
        {data.data.map((post: postData) => (
            <Card boxShadow={"lg"} bg={"blackAlpha.100"} w="100%" key={post.title}>
                <CardHeader bg={"blackAlpha.500"} textColor="white" transition="200ms" _hover={{ bg: "blackAlpha.200", transition: "200ms" }}>
                    <Link href="/">{post.title}</Link>
                </CardHeader>
                <CardBody>
                    {post.resumo.substring(0, 100)}
                </CardBody>
                <CardFooter>
                    
                    <Link href={`https://github.com/${post.autor}`}><UserInfo login={"fortmea"} /></Link>
                </CardFooter>
            </Card>
        ))}
    </SimpleGrid>)

export default Posts