import React from 'react';
import '../styles/global.scss';
import Nav from './Nav';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
// import Footer from './Footer';


export default function Layout ({ children }) {
    return (
        <>
            <div className="columns">
                <div className="column is-full">
                    <Nav className="navigation" />
                </div>
            </div>
            <div className="columns">
                <div className="column is-full">
                        { children }
                </div>
            </div>
            <div className="columns">
                <div className="column is-full">
                    {/* <Footer className="footer" /> */}
                </div>
            </div>
        </>

    );
}

export function DocuLayout ({ children }) {

    deckDeckGoHighlightElement();
    return (
        <Layout>
            <div className="columns">
                <div className="column is-10 is-offset-1">
                    <div className="content">
                        { children }
                    </div>
                </div>
            </div>
        </Layout>
    );
}
