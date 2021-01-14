import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    black: '#16161D',
    purple: {
      50: '#ebe8ff',
      100: '#c3bef8',
      200: '#9b92ed',
      300: '#7267e5',
      400: '#4b3bdc',
      500: '#3222c3',
      600: '#261a98',
      700: '#1a136e',
      800: '#0e0a44',
      900: '#04031c',
    },
    orange: {
      50: '#ffe7e2',
      100: '#ffbeb3',
      200: '#fd9481',
      300: '#fd6a4f',
      400: '#fc421e',
      500: '#e32a06',
      600: '#b12003',
      700: '#7f1602',
      800: '#4d0c00',
      900: '#1e0200',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      'body,html': {
        background: '#F3F6FD',
      },
    },
  },
})

export default theme
