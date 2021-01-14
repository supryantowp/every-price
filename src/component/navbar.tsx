import { Flex, HStack, Image, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

import routes from '@/routes'

const Navbar = () => {
  return (
    <Flex
      as='nav'
      pos='sticky'
      top={0}
      flexDir='row'
      px={{ base: 10, md: 20 }}
      py={8}
      align='center'
      justify='space-between'
      zIndex={999}
      bg='#F3F6FD'
    >
      <Text fontWeight='bold' fontSize='xl'>
        Every<span style={{ color: '#6E62E4' }}>Price</span>
      </Text>
      <HStack color='#697789' spacing={6} justify='center'>
        <NextLink href={'#'} key={'#'}>
          <Link href={'#'}>home</Link>
        </NextLink>
        <NextLink href={'#'} key={'#'}>
          <Link href={'#'}>features</Link>
        </NextLink>
        <NextLink href={'#'} key={'#'}>
          <Link href={'#'}>stories</Link>
        </NextLink>
        <NextLink href={'#'} key={'#'}>
          <Link color='gray.900' href={'#'}>
            pricing
          </Link>
        </NextLink>
        <NextLink href={'#'} key={'#'}>
          <Link href={'#'}>about</Link>
        </NextLink>
      </HStack>
    </Flex>
  )
}

export default Navbar
