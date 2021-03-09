import React from 'react';
import Layout from '../components/Layout';
import wingbotLogo from '../images/WINGBOT_logo_BLACK-COLOR.png'


// <!DOCTYPE html>
// < lang="en">

// <head>
//     <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
//     <meta name="description" content="" />
//     <meta name="author" content="wingbot.ai" />
//     <meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width"
//     />
//     <title>Wingbot.ai chatbot</title>
//     <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700" rel="stylesheet">
//     <!-- BOTSERVICE CSS -->
//     <!--  <link href="https://cdn.botframework.com/botframework-webchat/latest/botchat.css" rel="stylesheet" /> -->

//     <link href="./bulma.min.css" rel="stylesheet" />
//     <link href="./general.css" rel="stylesheet" />

// </head>



const app = () => (
<Layout>
    <section className="hero is-fullheight">
        {/* <!-- Hero head: will stick at the top --> */}
        <div className="hero-head has-cs-bg">
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item">
                            {/* <!-- put logo here --> */}
                        </a>
                        {/* <div className="navbar-item">
                           <a href="https://wingbot.ai">
                                <img className="logo" src={wingbotLogo} />
                            </a>
                        </div> */}
                    </div>
                </div>
            </nav>
        </div>

        {/* <!-- Hero content: will be in the middle --> */}
        <div className="hero-body">
            <div className="columns has-iframe">
                <div className="column has-gray-bg">
                    <div className="top-frame">
                        <div className="bg"></div>
                        <div className="content">
                            <h1>
                                Wingbot.ai Documentation
                            </h1>
                        </div>
                    </div>

                    {/* <div className="text-frame">
                        <div className="content">
                            <h2>
                                We build a multi-domain conversational artificial intelligence.
                            </h2>
                            <ul>
                                <li>sign it to chatbot designer here
                                    <a href="https://designer.wingbot.ai">designer.wingbot.ai</a></li>
                                <li>find out, how to use wingbot.ai at our <a href="http://docs.wingbot.ai">tutorial page</a></li>
                                <li>or check out our <a href="https://github.com/wingbotai">github</a></li>
                            </ul>
                        </div>
                    </div> */}
                </div>
                {/* <div className="column has-chat">
                    <link href="https://orchestrator.wingbot.ai/styles/wingbotRounded.css" rel='stylesheet' type='text/css' />
                    <div id="chat"></div>
                </div> */}
            </div>
        </div>
    </section>
    </Layout>
);

export default app;