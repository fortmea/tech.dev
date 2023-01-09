import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Card, CardBody, Center, Container, Divider, Grid, GridItem, Link, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import NavBar from '../components/nav'
import Posts from '../components/posts'
import { getSortedPostsData } from '../lib/posts'
const inter = Inter({ subsets: ['latin'] })

export default function Home({ dados }: any, { params }: any) {
  //console.log(dados)
  return (
    <>
      <Head>
        <title>tech.dev.br</title>
        <meta name="description" content="Compartilhe suas experiências" />
      </Head>
      <NavBar data={dados}/>
      <main >
        <Container maxW={"container.lg"}>
          <Posts data={dados} />
        </Container>
        <Divider border={"0.5em"} w={"50%"} marginLeft={"auto"} marginRight={"auto"} marginTop={"3em"}></Divider>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const data = getSortedPostsData()
  return {
    props: {
      dados: data
    }
  }
}