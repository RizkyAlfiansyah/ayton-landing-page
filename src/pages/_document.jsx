import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

const Document = () => {
    return (
        <Html>
            <Head>
                <meta property="og:image" content="https://i.postimg.cc/pLsD9P5J/thumb.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="200" />
                <meta property="og:url" content="https://ayton.com/" />
                <meta property="og:type" content="website" />
                <meta property="fb:app_id" content="your fb id" />
                <meta property="og:title" content="Ayton capital partners" />
                <meta name="twitter:card" content="summary" />
                <meta
                    property="og:description"
                    content="Let us help you secure early-stage investment capital"
                />
                <meta name="twitter:site" content="@coachcube" />
                <meta name="twitter:url" content="https://ayton.com/" />
                <meta name="twitter:title" content="Ayton capital partners" />
                <meta name="twitter:description" content="Let us help you secure early-stage investment capital" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="icon" href="/icon.png" />
                <link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document