import { Container, Text, HStack, Button, useColorMode} from '@chakra-ui/react'
import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

import { Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
    <Container maxW={"1140px"} px={4} >
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base:"column",
                sm:"row"
            }}
        >
            <Text
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
				>
					<Link to={"/"}>Product Store 🛒</Link>
				</Text>

                <HStack spacing={2} alignItems={"center"}>
                    <Link to={"/create"}>
                        <Button>
                            <FaCartPlus />
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MdDarkMode /> : <MdOutlineLightMode />}
                    </Button>
                </HStack>
        </Flex>
    </Container>
)
}

export default Navbar