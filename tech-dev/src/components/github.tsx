
import { Avatar, Box, Card, CardHeader, Flex, Heading, HStack, Image, Text, Skeleton, SkeletonCircle, SkeletonText, Divider, Highlight, LinkOverlay, Link } from "@chakra-ui/react"
import React, { useState, useEffect } from 'react';
interface Props {
  name?: string
  avatar_url?: string
  bio?: string
  location?: string
  blog?: string
  twitter_username?: string
  public_repos?: number
  followers?: number
  following?: number
  login: string
}
export default function UserInfo({ login }: Props) {
  const [user, setUser] = useState<Props>({} as Props)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    loadData(login).then((data) => setUser(data))
    setLoading(false)
  }, [])

  return (
    <>
    <Divider w={"100%"} marginBottom={"10"}/>
    <Text marginBottom={"1rem"}>Sobre o autor</Text>
    <Link href={`http://github.com/${user.login}`}>
      <HStack spacing={"4"} justifyContent={"start"}>
        <SkeletonCircle size="10" isLoaded={!loading}><Avatar src={user.avatar_url} /></SkeletonCircle>
        <Box>
        <Skeleton isLoaded={!loading}><Heading size={"xs"}>{loading? "Carregando" :user.login}</Heading></Skeleton>
          <Skeleton isLoaded={!loading}><Text fontSize={"xs"}>{loading? "Carregando" :user.bio}</Text></Skeleton>
        </Box>
        
      </HStack>
      </Link>
      </>
  )
}

export async function loadData(login: string) {
  const response = await fetch(`https://api.github.com/users/${login}`)
  const props = (await response.json()) as Props
  return props
}








