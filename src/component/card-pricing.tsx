import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { PropsWithChildren } from 'react'

interface CardPricingProps {
  isPrimary?: boolean
  icon: string
  title: string
  price: string
}

const CardPricing = ({
  isPrimary,
  icon,
  title,
  price,
  children,
}: PropsWithChildren<CardPricingProps>) => {
  return (
    <Box
      px={8}
      py={4}
      bgColor={isPrimary ? '#3A3379' : 'white'}
      borderRadius='3xl'
      zIndex={isPrimary ? 99 : 1}
      color={isPrimary ? 'white' : 'gray.800'}
      style={{
        backdropFilter: 'blur(5px)',
      }}
    >
      <Flex align='center'>
        <Image
          src={icon}
          w='70px'
          h='70px'
          objectFit='cover'
          htmlHeight='70px'
          htmlWidth='70px'
        />
        <Box ml={4}>
          <Text fontWeight='bold' fontSize='xl'>
            {title}
          </Text>
          <Text
            fontWeight='bold'
            fontSize='xl'
            color={isPrimary ? '#FFBEB2' : '#6E62E4'}
          >
            <sup style={{ fontWeight: 'normal', color: 'gray' }}>$</sup> {price}{' '}
            <sub style={{ fontWeight: 'normal', color: 'gray' }}>/ user</sub>
          </Text>
        </Box>
      </Flex>
      <Divider py={2} color='gray.400' />
      {children}
    </Box>
  )
}

export default CardPricing
