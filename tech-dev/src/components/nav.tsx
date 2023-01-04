import React, { useState } from "react";
import { Link, Box, Flex, Text, Button, Stack, useColorMode, CloseButton, StackItem } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'

const NavBar = (props: any) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <NavBarContainer {...props}>
            <Link href='/' _hover={{ backgroundColor: "secondary", textShadow: "1px 1px", textColor: "primary" }} padding={"1"}>tech.dev.br - compartilhe suas experiências</Link>
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
        </NavBarContainer>
    );
};



const MenuToggle = ({ toggle, isOpen }: any) => {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
            {isOpen ? <CloseButton /> : <HamburgerIcon />}
        </Box>
    );
};

const MenuLinks = ({ isOpen }: any) => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end"]}
                direction={["column", "row", "row"]}
                pt={[4, 4, 4]}
            >
                <StackItem><Link href='https://github.com/fortmea/tech.dev/blob/main/README.md' w={"100%"} target="_blank"
                    rel="noopener noreferrer" _hover={{ backgroundColor: "secondary", textShadow: "1px 1px", textColor: "primary" }} padding={"1"}><span>&gt;</span> Sobre</Link></StackItem>
                <StackItem><Link href='https://github.com/fortmea/tech.dev' w={"100%"} target="_blank"
                    rel="noopener noreferrer" _hover={{ backgroundColor: "secondary", textShadow: "1px 1px", textColor: "primary" }} padding={"1"}><span className="animate" >&gt;</span> Contribua</Link></StackItem>
                <StackItem><Button w={"100%"} _hover={{ backgroundColor: "secondary", textShadow: "1px 1px", textColor: "primary", transition:"200ms"}} padding={3} onClick={toggleColorMode} >
                    {colorMode === 'light' ? '🌙' : '☀️'}
                </Button></StackItem>

            </Stack>
        </Box>
    );
};

const NavBarContainer = ({ children, ...props }: any) => {
    return (
        <Flex
            as="nav"
            align="end"
            justify="space-evenly"
            wrap="wrap"
            w="100%"
            mb={8}
            p={8}
            {...props}
        >
            {children}
        </Flex>
    );
};

export default NavBar;