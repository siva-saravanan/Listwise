
import { Box, Button } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './parts/NavBar'
import CreatePage from './pages/CreatePage'
import HomePage from './pages/HomePage'
import { useColorModeValue } from '@chakra-ui/react'
import SignupPage from './pages/signupPage'
import SigninPage from './pages/SigninPage'

function App() {
 // minh =100 vh means occupies full screeen
  return (
      <Box minH={"100vh"} bg={useColorModeValue("gray.100" ,"gray.900" )} >   
       
  
        <Routes>
          <Route path='/signin' element={<SigninPage/>}></Route>
          <Route path='/signup' element={<SignupPage/>}></Route>
          <Route path='/create' element={<CreatePage/>}></Route>
          <Route path='/' element={<HomePage/>}></Route>
        </Routes>
      </Box>
  )
}

export default App
