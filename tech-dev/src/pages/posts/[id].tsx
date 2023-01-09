import { Container, Heading } from "@chakra-ui/react"
import Head from "next/head"
import NavBar from "../../components/nav"
import { postData } from "../../lib/interfaces"
import { getAllPostIds, getPostData } from "../../lib/posts"


export default function Post(data: postData, { params }: any) {
    const dados: postData = data.data!!
    return (<>
        <Head>
            <title>{dados.titulo} - tech.dev.br</title>
        </Head>
        <NavBar />
        <Container maxW={"container.lg"} className="glass">
        <Heading size={"sm"}>{dados.titulo}</Heading>
        </Container>
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
    return {
        props: {
            data,
        }

    }

}