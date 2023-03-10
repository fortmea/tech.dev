import { Center, Container, Heading, Stack, Text } from "@chakra-ui/react"
import Head from "next/head"
import UserInfo from "../../components/github"
import NavBar from "../../components/nav"
import { postData, postList } from "../../lib/interfaces"
import { getAllPostIds, getPostData, getSortedPostsData } from "../../lib/posts"
import ReactMarkdown from 'react-markdown'
export default function Post(data: postData) {
    const dados: postData = data.data!!

    return (<>
        <Head>
            <title>{`${dados.titulo} - tech.dev.br`}</title>
        </Head>
        <NavBar data={[]}></NavBar>
        <Center margin={8}>
            <Container maxW={"container.lg"} padding="8" className="glass">
                <Stack>
                    <Heading size={"md"}>{dados.titulo}</Heading>
                    <ReactMarkdown className="mdstyle">{dados.contentMD!!}</ReactMarkdown>
                    <UserInfo login={dados.autor!!} />
                </Stack>
            </Container>
        </Center>
    </>
    )

}
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps({ params }: any) {
    const data = await getPostData(params.id)
    //console.log(contentHtml)
    return {
        props: {
            data
        }

    }

}