import React from 'react';
//import '../styles/global.scss';
import Nav from './Nav';
import Sidebar from './Sidebar'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
// import Footer from './Footer';


export default function Layout({ children }) {
    return (
        <>
            <div className="columns">
                <div className="column">
                    <div className="content">
                        <Sidebar />
                    </div>
                </div>
                <div className="column is-three-quarters">
                    {children}
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

export function DocuLayout({ children }) {

    deckDeckGoHighlightElement();
    return (
        <Layout>
            <div className="columns">
                <div className="column is-10 is-offset-1">
                    <div className="content">
                        {children}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
