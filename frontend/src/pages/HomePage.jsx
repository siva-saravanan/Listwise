import { Container, VStack ,Text, HStack, Grid, SimpleGrid, useColorModeValue} from '@chakra-ui/react'
import React,{useEffect}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useProductStore } from '../store/product'
import ProductCard from '../parts/ProductCard'
import NavBar from '../parts/NavBar'
const HomePage = () => {
  const {products , fetchProduct }=useProductStore() ; 
  const  textcolor = useColorModeValue("gray.600" , "gray.200")
  const token = localStorage.getItem('token'); 
  const navigate =  useNavigate() ; 
 



  useEffect(() => {
    fetchProduct(token); 
  },[fetchProduct])
  console.log(products)
  if(products.length >  0) {
    return (
      <Container maxW={'container.xl'}>
         <NavBar/>
        
        <VStack
        spacing={2}
        >
       
         <Text
         fontSize={"4xl"}
         fontWeight={'bold'}
         bgClip={'text'}
         bgGradient={'linear(to-r, teal.500, blue.500)'}
         
         >
          Current Products
         </Text>
     
        
        <Link to='/create'>
        <Text
        fontSize={'2xl'}
        fontWeight={'bold'}
        color= {textcolor}
        _hover={{textDecoration : "underline"}}
        >create a Product </Text>
        </Link>
       
        
  
        
        
         <SimpleGrid columns={{
            base : 1  , 
            md :2 , 
            lg : 3 
         }} 
         spacing={10}
         w={'full'}
        
         
         pt={6}>
          {products.map((product)=> (
            <ProductCard key={product._id} product={product}/>
          ))}
  
         </SimpleGrid>
        
         </VStack>
  
  
  
  
      </Container>
    
    )
  }
  else{
    return (
      <Container maxW={'container.xl'}>
        <NavBar/>
        
        <VStack
        spacing={2}
        >
       
         <Text
         fontSize={"3xl"}
         fontWeight={'bold'}
         bgClip={'text'}
         bgGradient={'linear(to-r, teal.500, blue.500)'}
         >
          Current Products
         </Text>
     
        <Text
          fontSize={'2xl'}
          textAlign={"center"}
          fontWeight={'bold'}
          color={textcolor}
        > 
        No Products Found 
        </Text>
        <Link to='/create'>
        <Text
        fontSize={'xl'}
        color={"blue.500"}
        _hover={{textDecoration : "underline"}}
        >create a Product
         </Text>
        </Link>
       
        </VStack>
       
          
        
      </Container>
    
    )
  }
  
}

export default HomePage