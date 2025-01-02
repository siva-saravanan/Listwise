import { Button, Container, Flex, HStack, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { CiSquarePlus } from "react-icons/ci";
import { IoMoon } from 'react-icons/io5';
import { LuSun } from 'react-icons/lu';
import { IoIosLogOut } from "react-icons/io";

const NavBar = () => {
    const {colorMode ,toggleColorMode} =useColorMode() ;
  return (
    <Container maxW={"1140px"} px={4} >
        <Flex
        h= {16}
        alignItems={"center"}
        justifyContent={"space-between"}
        
        flexDir={{
            base :"column" ,
            sm:"row"
        }}>
        
        <Text
            bgGradient={'linear(to-r, teal.500, blue.500)'}
            bgClip={'text'}
            fontSize={'4xl'}
            fontWeight={'bold'}
        >
        <Link to='/'>WiseList</Link> 
        </Text>
       

        
        <HStack spacing={4} alignItems="center">
        <Link to="/create">
            <Button aria-label="Add new item">
            <CiSquarePlus fontSize={20} />
            </Button>
        </Link>
        <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <IoMoon fontSize={20} /> : <LuSun fontSize={20} />}
      </Button>
      <Link to="/signin">
            <Button aria-label="Add new item" onClick={()=>{
                localStorage.removeItem("token")
            }}>
            <IoIosLogOut fontSize={20} />
            </Button>
        </Link>
    </HStack>
        
        



        </Flex>

    </Container>


)
}

export default NavBar