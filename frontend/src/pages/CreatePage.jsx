import { useColorModeValue, useToast } from '@chakra-ui/react'
import {  Box, Button, Container, Heading, Input,  VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductStore } from '../store/product'
import { Toast } from '@chakra-ui/react'
import NavBar from '../parts/NavBar'
const CreatePage = () => {
 

   const [newProduct , setnewProduct] = useState({
    name : "" ,
    price : "" ,
    image : "" 
  }) ; 
  const token  = localStorage.getItem('token') ; 
  const toast =useToast() ; 
  const {createProduct} = useProductStore(); 
  const handleNewProduct =async ()=>{
    const {success ,message} = await createProduct(newProduct ,token)
    
    if(!success){
      Toast({
        title : "Error" ,
        description : message ,
        Status : "error" ,
        isClosable :true
      }) ; 
    }
    else{
      toast({
        title : "success" ,
        description : message ,
        Status : "success" ,
        isClosable :true
      }) ; 
     

    }
    setnewProduct({name:""  , price:"" , image:""}); // resetting the state after it is created succesffully
    
  }



  return (
   
   <Container maxW={"container.xl"}>
     <NavBar/>
      <VStack
        Spacing={8}
      >
        <Heading as={'h1'} size={"xl"} textAlign={"center"} mb={8}>Create New Product</Heading>

        <Box
        w={"550px"}
        bg={useColorModeValue("white", "gray.800")}
        p={6} rounded={"lg"} shadow = {"md"}
        
        >
          <VStack borderSpacing={4}>
            <Input
            placeholder='Product Name'
            name ="name"
            value={newProduct.name}
            onChange={(e) => setnewProduct({ ...newProduct ,name : e.target.value})}
            
            >
            </Input>
            <Input
            placeholder='Product Price'
            name ="price"
            type='number'
            value={newProduct.price}
            onChange={(e)=> setnewProduct({...newProduct ,price : e.target.value})}
            
            >
            </Input>
            <Input
            placeholder='Image URL'
            name ="Url"
            value={newProduct.image}
            onChange={(e)=> setnewProduct({...newProduct ,image : e.target.value})}
            >
            </Input>
            <Button bg={useColorModeValue("blue.600" , "blue.300")} w={'full'} fontSize={"lg"} fontWeight={"bold"} 
            onClick={handleNewProduct}>Add product</Button>

          
          </VStack>


        </Box>


      </VStack>
   </Container>
  )
}

export default CreatePage