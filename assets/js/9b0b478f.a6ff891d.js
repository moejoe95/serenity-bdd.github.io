"use strict";(self.webpackChunkserenity_users_guide=self.webpackChunkserenity_users_guide||[]).push([[2929],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={title:"Serenity 3.4.1 Is Out!",description:"Serenity 3.4.1",slug:"serenity-3.4.1-release",authors:["wakaleo"],tags:["reporting","locatorless-elements","selenium-4"],image:"data-driven-results.png",hide_table_of_contents:!1},o=void 0,s={permalink:"/blog/serenity-3.4.1-release",editUrl:"https://johnfergusonsmart.com/blog/blog/2022-11-07/index.md",source:"@site/blog/2022-11-07/index.md",title:"Serenity 3.4.1 Is Out!",description:"Serenity 3.4.1",date:"2022-11-07T00:00:00.000Z",formattedDate:"November 7, 2022",tags:[{label:"reporting",permalink:"/blog/tags/reporting"},{label:"locatorless-elements",permalink:"/blog/tags/locatorless-elements"},{label:"selenium-4",permalink:"/blog/tags/selenium-4"}],readingTime:1.98,truncated:!0,authors:[{name:"John Ferguson Smart",title:"Creator of Serenity BDD",url:"https://github.com/wakaleo",imageURL:"https://avatars.githubusercontent.com/u/55986",key:"wakaleo"}],nextItem:{title:"What's New In Serenity 3.1.0",permalink:"/blog/whats-new-in-serenity-3.1.0"}},l={authorsImageUrls:[void 0]},u=[{value:"Selenium 4.6.0 Integration",id:"selenium-460-integration",children:[]},{value:"Improved Reporting For Data-Driven Tests",id:"improved-reporting-for-data-driven-tests",children:[]},{value:"Standardised naming",id:"standardised-naming",children:[]},{value:"Want to learn more?",id:"want-to-learn-more",children:[]}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Serenity BDD is one of the most popular Java test automation libraries, and for good reason!"),(0,a.kt)("p",null,"If you are writing automated web tests in Java, using Serenity BDD correctly can reduce the amount of code you need to write by well over 50%, slashing the amount of code you need to maintain yourself. Serenity BDD produces powerful test reports that you can use both as as evidence of your testing activities and documentation of your application. And with over a million downloads a month, regular releases and a vibrant open source community, it's a solid bet for your test automation framework!"),(0,a.kt)("p",null,"In this article, we look at some of the new features in Serenity BDD version 3.4.2."),(0,a.kt)("h2",{id:"selenium-460-integration"},"Selenium 4.6.0 Integration"),(0,a.kt)("p",null,"Serenity 3.4.2 integrates with ",(0,a.kt)("a",{parentName:"p",href:"https://www.selenium.dev/blog/2022/selenium-4-6-0-released/"},"Selenium 4.6.0"),", which includes a number of new features. One of the more interesting is it's ability to automatically download the correct driver binaries for whatever browser you are using. Serenity currently does this using WebDriverManager, but as this feature is now build into Selenium, the Serenity WebDriverManager integration is now disabled by default and will be removed in a future version."),(0,a.kt)("h2",{id:"improved-reporting-for-data-driven-tests"},"Improved Reporting For Data-Driven Tests"),(0,a.kt)("p",null,"Test results for data-driven tests (parameterized tests in JUnit and Scenario Outlines in Cucumber) are now reported individually, giving a more precise view of the test status:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(310).Z})),(0,a.kt)("h2",{id:"standardised-naming"},"Standardised naming"),(0,a.kt)("p",null,"To avoid confusion in the summary views, the reports now adopt a more conventional definition of scenarios and test cases for data-driven tests. ",(0,a.kt)("em",{parentName:"p"},"Scenario")," refers to the scenario outline or overall test, whereas ",(0,a.kt)("em",{parentName:"p"},"Test Case")," refers to a specific execution of a scenario with a specific set of test data."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5835).Z})),(0,a.kt)("h2",{id:"want-to-learn-more"},"Want to learn more?"),(0,a.kt)("p",null,"There are several courses on Serenity BDD in the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://expansion.serenity-dojo.com"},"Serenity Dojo Training Library")),", including"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://expansion.serenity-dojo.com/courses/serenity-and-the-screenplay-pattern"},"Write Better Automated Tests Faster With Serenity BDD, Cucumber and The Screenplay Pattern"))," - a free deep-dive course into writing scalable, maintainable tests with Serenity BDD and the Screenplay pattern"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://expansion.serenity-dojo.com/courses/testing-web-applications-with-serenity-bdd"},"Effective UI Test Automation With Serenity BDD and Selenium"))," - learn the fundamentals of web testing with Serenity BDD in this very detailed course."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://expansion.serenity-dojo.com/courses/writing-more-sustainable-tests-with-the-screenplay-pattern"},"Next-generation Automated Acceptance Tests With Serenity Screenplay"))," - Learn everything you need to know to master scalable test automation with the powerful Screenplay pattern."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://expansion.serenity-dojo.com/courses/testing-rest-apis-with-serenity-bdd"},"Testing REST APIs with Serenity BDD and RestAssured"))," - Learn how to test REST web services in Serenity BDD.")))}p.isMDXComponent=!0},310:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/data-driven-results-2bbf108629fca70a7f25f67b450708f1.png"},5835:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenarios-and-test-cases-9b3945c912ff5f493bf382012bc0d4f3.png"}}]);