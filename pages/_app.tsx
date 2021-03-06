import React from "react";
import type { AppProps } from "next/app";
import { css, Global } from '@emotion/core'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Global styles={css`
                html,
                body {
                    padding: 3rem 1rem;
                    margin: 0;
                    background: papayawhip;
                    min-height: 100%;
                    font-family: Helvetica, Arial, sans-serif;
                    font-size: 24px;
                }
                `}
            />
            <Component {...pageProps} />
        </>
        );
};

export default MyApp
