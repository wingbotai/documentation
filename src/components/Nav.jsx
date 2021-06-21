import React from 'react';
import wingbotLogo from '../images/WINGBOT_logo_BLACK-COLOR.png'
import { Link } from 'gatsby';

export default () => (
<nav className="level-left">
	<div className="level-item">
	<Link to="/">
		<img className="logo" src={wingbotLogo} />
	</Link>

	<Link to="/orchestrator">
		Web Chat
	</Link>
	&nbsp;|&nbsp;
	<Link to="/events">
		Messaging events
	</Link>
	</div>
</nav>
);