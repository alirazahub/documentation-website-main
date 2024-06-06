import Layout from "@/components/layout/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../components/theme.js";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
