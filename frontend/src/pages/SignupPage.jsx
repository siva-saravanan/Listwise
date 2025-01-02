import { Box, Button, Container, Flex, Input, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { adminstore } from '../store/admin';
import { useNavigate } from 'react-router-dom';
import BottomWarning from '../parts/BottomWarning';

const SignupPage = () => {
   
const [newAdmin ,setnewAdmin] =useState({
    UserName : "" ,
    FirstName :"" ,
    LastName : "" ,
    PassWord : ""

})
const navigate =useNavigate() ;
const token = localStorage.getItem("token") ;

const {signupAdmin}  = adminstore() ;

const signuphandle = async(newAdmin ,token)=>{
    await signupAdmin(newAdmin ,token)  ; 
    navigate('/') ; 
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
       
            
            <Text fontSize={'3xl'} fontWeight={'bold'} color={'blue.200'} >Sigin Up</Text>
            <Input placeholder='FirstName' 
            name = "firstname"
            value={newAdmin.FirstName}
            onChange={(e)=>setnewAdmin({...newAdmin ,FirstName : e.target.value})}
            >
            </Input>

             <Input placeholder='LastName'
             name='lastname'
             value ={newAdmin.LastName}
             onChange={(e)=> setnewAdmin({...newAdmin , LastName : e.target.value})}>
            </Input>

            <Input placeholder='Username'
             name='username'
             value ={newAdmin.UserName}
             onChange={(e)=>setnewAdmin({...newAdmin , UserName : e.target.value})}>
            </Input>

            <Input placeholder='password' 
             name='username'
             value ={newAdmin.PassWord}
             onChange={(e)=>setnewAdmin({...newAdmin , PassWord : e.target.value})}>
            </Input>

            <Button colorScheme='blue'  mt={4} w={'full'} fontSize="2xl" onClick={()=>{signuphandle(newAdmin ,token)}}> Submit </Button>
            <BottomWarning content="Don't have an Account ?" to="/signin" buttontext="Sign in"></BottomWarning>
            </VStack>


      
      </Box>
      </VStack> 
      
        
    </Container>
  )
}

export default SignupPage