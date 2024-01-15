import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { RecoilRoot } from "recoil";
import client from '../src/app/lib/apollo';
import '../src/app/globals.css';


export default function App({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <RecoilRoot>
                <Component {...pageProps} />
            </RecoilRoot>
        </ApolloProvider>
    )
}