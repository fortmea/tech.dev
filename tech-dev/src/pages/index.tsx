import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Card, CardBody, Center, Container, Divider, Grid, GridItem, Link, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import NavBar from '../components/nav'
import Posts from '../components/posts'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  var dados = [
    { "title": "bbb", "content": "Conteúdo", "autor": "fortmea", "resumo": "Exemplo resumo blahblah" }, { "title": "aaaaaa", "content": "Conteúdo", "autor": "fortmea", "resumo": "Exemplo resumo blahblah" }, { "title": "ccc", "content": "Conteúdo", "autor": "fortmea", "resumo": "Exemplo resumo blahblah" }, { "title": "ddd", "content": "Conteúdo", "autor": "fortmea", "resumo": "Exemplo resumo blahblah" },]


  return (
    <>
      <Head>
        <title>tech.dev.br</title>
        <meta name="description" content="Compartilhe suas experiências" />


      </Head>
      <NavBar />
      <main >
        <Container>
          <Posts data={dados}></Posts>
        </Container>
        <Divider border={"0.5em"} w={"50%"} marginLeft={"auto"} marginRight={"auto"} marginTop={"1em"}></Divider>
      </main>
    </>
  )
}
