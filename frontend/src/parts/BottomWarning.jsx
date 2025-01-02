import { Button, Container ,Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const BottomWarning = ({content , to , buttontext}) => {
  return (
    <Container display={'flex'} justifyContent={'space-between'}>
        
        <Text fontWeight={'bold'}>{content}</Text>
        <Text fontWeight={'bold'} textDecoration={'underline'}><Link to={to}>{buttontext}</Link></Text>
        </Container>
  )
}

export default BottomWarning