import React from 'react';
import wingbotLogo from '../images/WINGBOT_logo_BLACK-COLOR.png'
import { Link } from 'gatsby';

export default () => (
    <div className="sidebar">
        <ul>
            <li className="item"><Link to="/chat">
                <strong>Web Chat</strong>
            </Link>
            </li>
            <li className="item">
                <Link to="/orchestrator">
                    <strong>Orchestrator</strong>
                </Link>
            </li>
            <li className="item">
                <Link to="/events">
                    <strong>Messaging events</strong>
                </Link>
            </li>
            <li className="item">
                <strong>API</strong>
                <ul>
                    <li className="item">
                        <Link to="/api/Ai">
                            Ai
                        </Link>
                    </li>
                    <li className="item">
                        <Link to="/api/BotApp">
                            BotApp
                        </Link>
                    </li>
                    <li className="item">
                        <Link to="/api/bufferloader">
                            bufferloader
                        </Link>
                    </li>
                    <li className="item">
                        <Link to="/api/BuildRouter">
                            BuildRouter
                        </Link>
                    </li>
                    <li className="item">
                        <Link to="/api/ButtonTemplate">
                            ButtonTemplate
                        </Link>
                    </li>
                    <li className="item">
                        <Link to="/api/GraphApi">
                            GraphApi
                        </Link>
                    </li>
                    <li className="item">
                        <Link to="/api/Notifications">
                            Notifications
                        </Link>
                    </li>
                    <li className="item">
                        <Link to="/api/Request">
                            Request
                        </Link>
                    </li>
                    <li className="item">
                        <Link to="/api/Responder">
                            Responder
                        </Link>
                    </li>
                    <li className="item">
                        <Link to="/api/Router">
                            Router
                        </Link>
                    </li>
                    <li className="item">
                        <Link to="/api/stateVariables">
                            stateVariables
                        </Link>
                    </li>
                    <li className="item">
                        <Link to="/api/Tester">
                            Tester
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
);