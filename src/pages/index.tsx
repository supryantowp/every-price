import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'

import Pricing from '@/component/pricing'

const Index = () => (
  <>
    <Stack py={8} maxW='sm' mx='auto' textAlign='center'>
      <Heading>
        <span style={{ color: '#6E62E4' }}>Plans</span> That Works
      </Heading>
      <Text>Choose a plan that works best for your own future company</Text>
    </Stack>
    <Pricing />

    <Box py={20} px={{ base: 10, md: 20 }}>
      <Heading fontSize='xl'>
        <span style={{ color: '#6E62E4' }}>Trusted</span> Companies
      </Heading>
      <Stack my={4} spacing={8} direction='row'>
        <Image h='40px' objectFit='cover' src='/sponsor.png' />
        <Image h='40px' objectFit='cover' src='/sponsor-1.png' />
        <Image h='40px' objectFit='cover' src='/sponsor-2.png' />
        <Image h='40px' objectFit='cover' src='/sponsor-3.png' />
        <Image h='40px' objectFit='cover' src='/sponsor-4.png' />
        <Image h='40px' objectFit='cover' src='/sponsor-5.png' />
      </Stack>
    </Box>
  </>
)

export default Index
