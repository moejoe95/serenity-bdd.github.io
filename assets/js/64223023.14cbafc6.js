"use strict";(self.webpackChunkserenity_users_guide=self.webpackChunkserenity_users_guide||[]).push([[7417],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),b=r,m=d["".concat(l,".").concat(b)]||d[b]||p[b]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},494:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={id:"saucelabs",title:"SauceLabs",sidebar_position:4},o="Serenity BDD SauceLabs Integration",s={unversionedId:"cloud/saucelabs",id:"cloud/saucelabs",isDocsHomePage:!1,title:"SauceLabs",description:"The serenity-saucelabs plugin provides seamless integration with the SauceLabs online test automation platform.",source:"@site/docs/cloud/saucelabs.md",sourceDirName:"cloud",slug:"/cloud/saucelabs",permalink:"/docs/cloud/saucelabs",editUrl:"https://github.com/serenity-bdd/serenity-bdd.github.io/blob/master/docs/cloud/saucelabs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"saucelabs",title:"SauceLabs",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"BrowserStack",permalink:"/docs/cloud/browserstack"},next:{title:"BitBar",permalink:"/docs/cloud/bitbar"}},l=[{value:"Adding the SauceLabs plugin",id:"adding-the-saucelabs-plugin",children:[]},{value:"Specifying your SauceLabs credentials and grid URL",id:"specifying-your-saucelabs-credentials-and-grid-url",children:[]},{value:"Configuring the SauceLabs driver",id:"configuring-the-saucelabs-driver",children:[]},{value:"Activating the SauceLabs plugin",id:"activating-the-saucelabs-plugin",children:[]},{value:"Defining Saucelabs Capabilities",id:"defining-saucelabs-capabilities",children:[]}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"serenity-bdd-saucelabs-integration"},"Serenity BDD SauceLabs Integration"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"serenity-saucelabs")," plugin provides seamless integration with the ",(0,r.kt)("a",{parentName:"p",href:"https://saucelabs.com/"},"SauceLabs")," online test automation platform. "),(0,r.kt)("h2",{id:"adding-the-saucelabs-plugin"},"Adding the SauceLabs plugin"),(0,r.kt)("p",null,"To add the integrated support for SauceLabs to your project, you will need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"serenity-saucelabs")," dependency to your project dependencies. For Maven, you would add the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"    <dependency>\n        <groupId>net.serenity-bdd</groupId>\n        <artifactId>serenity-saucelabs</artifactId>\n        <version>${serenity.version}</version>\n    </dependency>\n")),(0,r.kt)("p",null,"And for Gradle:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'    testImplementation "net.serenity-bdd:serenity-saucelabs:${serenityVersion}"\n')),(0,r.kt)("h2",{id:"specifying-your-saucelabs-credentials-and-grid-url"},"Specifying your SauceLabs credentials and grid URL"),(0,r.kt)("p",null,"Next, you will need a ",(0,r.kt)("a",{parentName:"p",href:"https://saucelabs.com/pricing"},"SauceLabs account"),". "),(0,r.kt)("p",null,"Next you will need to configure your SauceLabs credentials (if you are logged on to the Saucelabs Dashboard ","[you can find these on this page]",". The simplest way to do this is to define the following system properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SAUCE_USERNAME"),"- SauceLabs user name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SAUCE_ACCESS_KEY")," - SauceLabs access key")),(0,r.kt)("p",null,"Alternatively, you can define your username and accesskey using the ",(0,r.kt)("inlineCode",{parentName:"p"},"sauce.username")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sauce.key")," properties respectively in your ",(0,r.kt)("inlineCode",{parentName:"p"},"serenity.conf")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},"sauce.username=myuser\nsauce.key=XXXXXXXX\n")),(0,r.kt)("h2",{id:"configuring-the-saucelabs-driver"},"Configuring the SauceLabs driver"),(0,r.kt)("p",null,"Serenity interacts with SauceLabs via the ",(0,r.kt)("inlineCode",{parentName:"p"},"RemoteDriver")," driver. You will need to specify the remote URL for the geographical region you want to use in the ",(0,r.kt)("inlineCode",{parentName:"p"},"webdriver.remote.url")," property, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'webdriver {\n  driver = remote\n  remote.url = "https://ondemand.us-west-1.saucelabs.com/wd/hub"\n}\n')),(0,r.kt)("h2",{id:"activating-the-saucelabs-plugin"},"Activating the SauceLabs plugin"),(0,r.kt)("p",null,"The Serenity SauceLabs plugin will be invoked if Serenity can find a ",(0,r.kt)("inlineCode",{parentName:"p"},'"sauce:options"')," section in your ",(0,r.kt)("inlineCode",{parentName:"p"},"serenity.conf")," file, or if you specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"remote.webdriver.url")," that points to a SauceLabs server. If you have no Saucelabs-specific capabilities, simply set the ",(0,r.kt)("inlineCode",{parentName:"p"},"sauce.active")," property to true like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},"sauce {\n  active = true\n}\n")),(0,r.kt)("h2",{id:"defining-saucelabs-capabilities"},"Defining Saucelabs Capabilities"),(0,r.kt)("p",null,"You can specify the operating system and browser you want to run your tests on by customising the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.saucelabs.com/dev/test-configuration-options/#desktop-and-mobile-capabilities-sauce-specific--optional"},"Selenium Capabilities")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"serenity.conf")," file. You do this in the ",(0,r.kt)("inlineCode",{parentName:"p"},'"sauce:options"')," section of the ",(0,r.kt)("inlineCode",{parentName:"p"},"serenity.conf")," file, e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'    webdriver {\n      driver = "remote"\n      capabilities {\n        browserName = "chrome"\n        version = "104.0"\n        platform = "Windows 10"\n        "sauce:options" {\n          tags = ["smoketest","billing"]\n          recordVideo = true\n          recordLogs = false\n        }\n      }\n    }\n')))}u.isMDXComponent=!0}}]);