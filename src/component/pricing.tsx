import { Button, Flex, Icon, Stack, Text } from '@chakra-ui/react'
import { FiCheckCircle } from 'react-icons/fi'

import CardPricing from '@/component/card-pricing'

const Pricing = () => {
  return (
    <Stack
      direction='row'
      px={{ base: 10, md: 20 }}
      maxW='6xl'
      spacing={0}
      align='center'
      justify='center'
      mx='auto'
    >
      <CardPricing icon='/icon-1.png' title='Starter' price='5'>
        <Stack py={4} spacing={4}>
          <Flex align='center'>
            <Icon as={FiCheckCircle} color='#6E62E4' />
            <Text ml={3}>
              Get started with <b>Blast</b>
            </Text>
          </Flex>
          <Flex align='center'>
            <Icon as={FiCheckCircle} color='#6E62E4' />
            <Text ml={3}>
              <b>10 TB </b> cloud storage
            </Text>
          </Flex>
        </Stack>
        <Button py={2} isFullWidth colorScheme='purple' borderRadius='3xl'>
          Choose Plan
        </Button>
      </CardPricing>
      <CardPricing icon='/icon-2.png' title='Starter' price='5' isPrimary>
        <Stack py={4} spacing={4}>
          <Flex align='center'>
            <Icon as={FiCheckCircle} color='white' />
            <Text ml={3}>
              All Features in <b>Starter</b>
            </Text>
          </Flex>
          <Flex align='center'>
            <Icon as={FiCheckCircle} color='white' />
            <Text ml={3}>
              <b>Unlimited </b> Report
            </Text>
          </Flex>
          <Flex align='center'>
            <Icon as={FiCheckCircle} color='white' />
            <Text ml={3}>
              <b>280 TB </b> cloud storage
            </Text>
          </Flex>
        </Stack>
        <Button
          mt={4}
          py={2}
          isFullWidth
          bgColor='#FFBEB2'
          color='gray.800'
          borderRadius='3xl'
          _hover={{
            bgColor: 'orange.200',
          }}
        >
          Choose Plan
        </Button>
      </CardPricing>
      <CardPricing icon='/icon-3.png' title='Starter' price='5'>
        <Stack py={4} spacing={4}>
          <Flex align='center'>
            <Icon as={FiCheckCircle} color='#6E62E4' />
            <Text ml={3}>
              Get started with <b>Blast</b>
            </Text>
          </Flex>
          <Flex align='center'>
            <Icon as={FiCheckCircle} color='#6E62E4' />
            <Text ml={3}>
              <b>10 TB </b> cloud storage
            </Text>
          </Flex>
        </Stack>
        <Button py={2} isFullWidth colorScheme='purple' borderRadius='3xl'>
          Choose Plan
        </Button>
      </CardPricing>
    </Stack>
  )
}

export default Pricing
