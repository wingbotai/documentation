(self.webpackChunkwingbot_documentation=self.webpackChunkwingbot_documentation||[]).push([[328],{1649:function(t,e,n){"use strict";n.r(e),n.d(e,{_frontmatter:function(){return r},default:function(){return d}});n(7294);var a=n(4983),l=n(408),r={},i={_frontmatter:r},o=l.q;function d(t){var e=t.components,n=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,["components"]);return(0,a.kt)(o,Object.assign({},i,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"How to connect Wingbot Webchat to any website"),(0,a.kt)("h2",null,"Basic setupnpm"),(0,a.kt)("p",null,"On the example below you can see the minimal setup for connecting the Wingbot webchat to a website."),(0,a.kt)("deckgo-highlight-code",{html:"","line-numbers":"true","highlight-lines":""},"\n          ",(0,a.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"<link href=\"https://orchestrator.wingbot.ai/styles/wingbotChat.css\" rel='stylesheet' type='text/css'>\n<div id=\"chat\"></div>\n<script>\n    window.wingbotChatCmds=window.wingbotChatCmds||[];\n    window.wingbotChat=window.wingbotChat||function(){wingbotChatCmds.push(arguments)}\n\n    wingbotChat('init', {\n        pageId: '<put your page-id here>'\n    }, document.getElementById('chat'));\n<\/script>\n<script async src=\"https://orchestrator.wingbot.ai/wingbotChat.js\"><\/script>"),"\n        "),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h5",null,"We can split this example code to the 4 main parts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CSS styles"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"link with the basic webchat theme, working out of the box"),(0,a.kt)("li",{parentName:"ul"},"feel free to create your own and replace it"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Physical representation"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'<div id="chat"></div>')," is physical representation of the webchat"),(0,a.kt)("li",{parentName:"ul"},"it can be placed anywhere in your website"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Webchat configuration"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"this part is mostly for configuration the webchat configuration"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pageId")," is mandatory and unique, if you don't know your ",(0,a.kt)("inlineCode",{parentName:"li"},"pageId")," feel free to contact Wingbot support"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"document.getElementById")," can be set to any existing element in the website"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Source to the webchat code"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"the last line of the example is link to the actual webchat app"),(0,a.kt)("li",{parentName:"ul"},"please do not download it and/or cache it somewhere in your infrastructure if you want to have the latest and the most secure version of Wingbot webchat")))),(0,a.kt)("h2",null,"Dig more deeply into the configuration"),(0,a.kt)("p",null,"As we saw in the example above, webchat is configurable with 3 parameters."),(0,a.kt)("p",null,"Lets have a look little bit deeply about the configuration right now:"),(0,a.kt)("h3",null,"Webchat commands and parameters:"),(0,a.kt)("deckgo-highlight-code",{javascript:"","line-numbers":"true","highlight-lines":""},"\n          ",(0,a.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"webchat (\n    'init',    // `'init'` command should be always called to start a chat\n    element,   // is for the DOM element which is representation of the chat on the page\n    config     // object with webchat configurations\n);\n"),"\n        "),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"There are supported parameters for the config object:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Default value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"pageId")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required")),(0,a.kt)("td",{parentName:"tr",align:null},"Identifier of page"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"'134271f0-1d1c-42a3-9191-6288fd1a263b'"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"api")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"null")),(0,a.kt)("td",{parentName:"tr",align:null},"Override an API URL of orchestrator (on-premise solutions only)"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"websocket")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"null")),(0,a.kt)("td",{parentName:"tr",align:null},"Override an websocket URL of the widget (on-premise solutions only)"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"token")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"null")),(0,a.kt)("td",{parentName:"tr",align:null},"Conversation token to continue in already existing conversation"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"refreshInterval")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"15000")),(0,a.kt)("td",{parentName:"tr",align:null},"Interval in miliseconds to refresh the credentials"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"startAction")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"start")),(0,a.kt)("td",{parentName:"tr",align:null},"Postback payload to send a non-visual chat event for start the conversation"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"lang")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"null")),(0,a.kt)("td",{parentName:"tr",align:null},"Force the widget to use specified language"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"fallbackLang")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"'en'")),(0,a.kt)("td",{parentName:"tr",align:null},"Use this language if it cannot be detected automatically"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"reduxEnhancer")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"null")),(0,a.kt)("td",{parentName:"tr",align:null},"Redux plugin to be used within chat"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"onInit")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"() => {}")),(0,a.kt)("td",{parentName:"tr",align:null},"Will be called when chat has been successfuly initialized"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"headerText")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"null")),(0,a.kt)("td",{parentName:"tr",align:null},"Set a static text to be used as a header"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"context")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{}")),(0,a.kt)("td",{parentName:"tr",align:null},"Thread context variables - will be pushed to the bot"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"uploadEnabled")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},"On/off for file upload (boolean)"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"uploadSizeLimit")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1048576 * 6")),(0,a.kt)("td",{parentName:"tr",align:null},"Hard limit for the file upload, bigger file cannot be uploaded"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"uploadSoftLimitForResize")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1048576 * 2.5")),(0,a.kt)("td",{parentName:"tr",align:null},"Soft limit for the file upload, bigger file will be shrunk, ",(0,a.kt)("inlineCode",{parentName:"td"},"0")," means no shrinking"),(0,a.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-orchestrator-mdx-d9b238f08b10c5e10d80.js.map