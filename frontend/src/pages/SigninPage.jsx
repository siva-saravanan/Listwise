import { Box, Button, Container, Flex, Input, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { adminstore } from '../store/admin';
import { useNavigate } from 'react-router-dom';
import BottomWarning from '../parts/BottomWarning';

const SigninPage = () => {
    const [existAdmin ,setexistAdmin] = useState({
        UserName  : "" , 
        PassWord : ""
    }) 
    const token  =  localStorage.getItem("token") ;
    const {siginAdmin}  =adminstore() ;
    const navigate =useNavigate()  ;
    const signinhandle = async (existAdmin ,token)=>{
        await siginAdmin(existAdmin ,token) ;  
        navigate('/')  ;
    }
    useEffect(()=>{
        if(token){
            navigate("/")
        }
    } ,navigate)


  return (
    <Container alignItems={'center'} justifyContent={'center'} h={"100vh"} display={'flex'} >
      
   
    <VStack  w={'full'} >
    <Text
         bgGradient={'linear(to-r, teal.200, blue.300)'}
         bgClip={'text'}
         fontSize={'4xl'}
         fontWeight={'bold'}
         mb={10}

     >
    WiseList
     </Text>

   
   <Box bg={'gray.800'} p={5} rounded={'lg'} w={'full'} maxW={'400px'} >
  
     <VStack spacing={3}>
    
         
         <Text fontSize={'3xl'} fontWeight={'bold'} color={'blue.200'} >Sigin In</Text>

          <Input placeholder='Username'
          name='username'
          value ={existAdmin.UserName}
          onChange={(e)=>setexistAdmin({...existAdmin , UserName : e.target.value})}>
         </Input>

         <Input placeholder='password' 
          name='username'
          value ={existAdmin.PassWord}
          onChange={(e)=>setexistAdmin({...existAdmin , PassWord : e.target.value})}>
         </Input>
    
         <Button colorScheme='blue'  mt={4} w={'full'} fontSize="2xl" onClick={()=>{signinhandle(existAdmin ,token)}}> Submit </Button>
         <BottomWarning content="Already have Account ? " to="/signup" buttontext="Sign up"></BottomWarning>
         </VStack>


   
   </Box>
   </VStack> 
   
     
 </Container>
   
  )
}

export default SigninPage