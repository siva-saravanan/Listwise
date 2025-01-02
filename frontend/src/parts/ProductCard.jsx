import { Box , Heading, HStack, IconButton, Image, Text, useToast,Modal, ModalContent, ModalOverlay, ModalHeader, ModalBody, Input, ModalFooter, Button, useDisclosure, VStack, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useProductStore } from '../store/product';


 const ProductCard = ({product}) => {
   const toast  = useToast()
   const { isOpen, onOpen, onClose } = useDisclosure() ;
   const bgcolor = useColorModeValue('gray.100' ,'gray.800')

   const [updatedProduct  , setUpdatedProduct] = useState(product) ; 
   const token = localStorage.getItem("token")
 
    const {deleteProduct ,updateProduct ,fetchProduct} = useProductStore() ;
    const handleupdate = async(id ,updatedProduct ,token)=>{
            const response = await updateProduct(id ,updatedProduct ,token) ;
            const success = response.success ;
            const message = response.message ;
            if(success){
                toast({
                    title : "success" , 
                    description : message,
                    status :"success" ,
                    isClosable:true
    
                }
                )
            }
            else{
                toast({
                    title : "error" , 
                    description : message,
                    status :"error" ,
                    isClosable:true
    
                })
            }
            fetchProduct(token) ; 
            onClose() ;
    }
 
    const deletehandle= async(pid,token)=>{
        const response =  await deleteProduct(pid ,token) ;
        const success = response.success ;
        const message = response.message ;
        
        console.log(success ,message)
        if(success){
            toast({
                title : "success" , 
                description : message,
                status :"success" ,
                isClosable:true

            }
            )
        }
        else{
            toast({
                title : "error" , 
                description : message,
                status :"error" ,
                isClosable:true

            })
        }

}



  return (
   <Box
   shadow={'lg'}
   rounded={'lg'}
   overflow={'hidden'}
   transition={"all 0.3s"}
   _hover={{transform : "translateY(-5px)" ,shadow : 'xl'}}
   bg={bgcolor}
   >
    <Image src={product.image} alt={product.name} h={48} w="full" objectFit={'cover'}></Image>
    
    <Box p={4} >
        <Heading as='h3'  size='md' pb={3}>{product.name}</Heading>
        <Text fontSize={'md'} fontWeight={'bold'}>Rs.{product.price}</Text>
        <HStack spacing={2} pt={3}>
            <IconButton  size="sm" colorScheme='blue' onClick={onOpen} icon={<MdEdit/>} ></IconButton>
            <IconButton size="sm"  colorScheme='red' onClick={()=>deletehandle(product._id ,token)}  icon={<MdDelete/>} ></IconButton>
        </HStack>

    </Box>
    <Modal isOpen={isOpen} onClose={onClose}>
         <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalBody>
          <VStack spacing={8}>
            <Input 
              placeholder='Product Name'
              name ="name"
              value = {updatedProduct.name}
              onChange={(e)=>setUpdatedProduct({...updatedProduct , name : e.target.value})}
              >
        
            </Input>
            <Input 
              placeholder='Product price'
              name ="price"
              value = {updatedProduct.price}
              type ="number"
              onChange={(e)=>setUpdatedProduct({...updatedProduct , price : e.target.value})}
              
              
              >
             
            </Input>
            <Input 
              placeholder='Product image'
              name ="image"
              value = {updatedProduct.image}
              onChange={(e)=>setUpdatedProduct({...updatedProduct , image : e.target.value})}>
            </Input>
          </VStack>
          </ModalBody>
          <ModalFooter>
            <Button mr={4} colorScheme='blue' onClick={()=>handleupdate(product._id , updatedProduct ,token)}>
              Update 
            </Button>
            <Button   colorScheme='red' onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
          </ModalContent>
          </Modal>
  

   </Box>
  )
}

export default ProductCard