import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode='light' />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
