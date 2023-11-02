"use strict";(self.webpackChunkserenity_users_guide=self.webpackChunkserenity_users_guide||[]).push([[3283],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(t),d=r,m=g["".concat(l,".").concat(d)]||g[d]||u[d]||a;return t?i.createElement(m,o(o({ref:n},c),{},{components:t})):i.createElement(m,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9647:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=t(7462),r=(t(7294),t(3905));const a={id:"integration_testing_spring",title:"Integration Testing in Spring",sidebar_position:1},o=void 0,s={unversionedId:"spring/integration_testing_spring",id:"spring/integration_testing_spring",isDocsHomePage:!1,title:"Integration Testing in Spring",description:"Spring projects are well suited for running your acceptance tests against different layers of your application.",source:"@site/docs/spring/integration-testing-spring.md",sourceDirName:"spring",slug:"/spring/integration_testing_spring",permalink:"/docs/spring/integration_testing_spring",editUrl:"https://github.com/serenity-bdd/serenity-bdd.github.io/blob/master/docs/spring/integration-testing-spring.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"integration_testing_spring",title:"Integration Testing in Spring",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Making Screenplay Assertions with Serenity Ensure",permalink:"/docs/screenplay/screenplay_ensure"},next:{title:"The Serenity Reports",permalink:"/docs/reporting/the_serenity_reports"}},l=[{value:"In Spring Boot &lt;1.3",id:"in-spring-boot-13",children:[]}],p={toc:l};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Spring projects are well suited for running your acceptance tests against different layers of your application."),(0,r.kt)("p",null,"With Serenity, you can ensure correct behavior using a browser or the REST API or work with the service layer of your application directly."),(0,r.kt)("p",null,"Occasionally it can also be useful to access the service layers directly in your browser-based end-to-end tests."),(0,r.kt)("p",null,"For example, you may have a scenario where a user action must, as a side effect, record an audit log in a table in the database."),(0,r.kt)("p",null,"To keep your test focused and simple, you may want to call the service layer directly to check the audit logs, rather than using the browser to log in as an administrator and navigate to the audit logs screen."),(0,r.kt)("p",null,"Integration tests must use the ",(0,r.kt)("inlineCode",{parentName:"p"},"SerenityRunner"),".\nTo be able to inject (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"@Autowired"),") dependencies and use the usual annotations (like ",(0,r.kt)("inlineCode",{parentName:"p"},"@DirtiesContext"),"), you just need to include the Serenity ",(0,r.kt)("inlineCode",{parentName:"p"},"SpringIntegrationMethodRule")," in your test class."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@RunWith(SerenityRunner.class)\n@SpringBootTest\npublic class WhenInjectingSpringDependencies {\n\n    @Managed\n    WebDriver driver;\n\n    @ManagedPages(defaultUrl = "http://www.google.com")\n    public Pages pages;\n\n    @Rule\n    public SpringIntegrationMethodRule springIntegrationMethodRule =\n      new SpringIntegrationMethodRule();\n\n    @Autowired\n    public GizmoService gizmoService;\n\n    @Test\n    public void shouldInstantiateGizmoService() {\n        assertThat(gizmoService, is(not(nullValue())));\n    }\n\n    @Test\n    public void shouldInstantiateNestedServices() {\n        assertThat(gizmoService.getWidgetService(), is(not(nullValue())));\n    }\n}\n')),(0,r.kt)("h3",{id:"in-spring-boot-13"},"In Spring Boot <1.3"),(0,r.kt)("p",null,"use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@ContextConfiguration")," annotation to define the configuration file or files to use. Then you can inject dependencies as you would with an ordinary Spring integration test, using the usual Spring annotations such as ",(0,r.kt)("inlineCode",{parentName:"p"},"@Autowired")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@Resource"),". For example, suppose we are using the following Spring configuration file, called \u2018config.xml\u2019:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<beans>\n    <bean id="widgetService" class="net.serenity.junit.spring.WidgetService">\n        <property name="name"><value>Widgets</value></property>\n        <property name="quota"><value>1</value></property>\n    </bean>\n    <bean id="gizmoService" class="net.serenity.junit.spring.GizmoService">\n        <property name="name"><value>Gizmos</value></property>\n        <property name="widgetService"><ref bean="widgetService" /></property>\n    </bean>\n</beans>\n')),(0,r.kt)("p",null,"We can use this configuration file to inject dependencies as shown here:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@RunWith(SerenityRunner.class)\n@ContextConfiguration(locations = "/config.xml")\npublic class WhenInjectingSpringDependencies {\n\n    @Managed\n    WebDriver driver;\n\n    @ManagedPages(defaultUrl = "http://www.google.com")\n    public Pages pages;\n\n    @Rule\n    public SpringIntegrationMethodRule springIntegrationMethodRule = new SpringIntegrationMethodRule();\n\n    @Autowired\n    public GizmoService gizmoService;\n\n    @Test\n    public void shouldInstantiateGizmoService() {\n        assertThat(gizmoService, is(not(nullValue())));\n    }\n\n    @Test\n    public void shouldInstantiateNestedServices() {\n        assertThat(gizmoService.getWidgetService(), is(not(nullValue())));\n    }\n}\n')),(0,r.kt)("p",null,"Other context-related annotations such as ",(0,r.kt)("inlineCode",{parentName:"p"},"@DirtiesContext")," will also work as they would in a traditional Spring Integration test. Spring will create a new ApplicationContext for each test, but it will use a single ApplicationContext for all of the methods in your test. If one of your tests modifies an object in the ApplicationContext, you may want to tell Spring so that it can reset the context for the next test. You do this using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@DirtiesContext")," annotation. In the following test case, for example, the tests will fail without the ",(0,r.kt)("inlineCode",{parentName:"p"},"@DirtiesContext")," annotation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@RunWith(SerenityRunner.class)\n@ContextConfiguration(locations = "/spring/config.xml")\npublic class WhenWorkingWithDirtyContexts {\n\n    @Managed\n    WebDriver driver;\n\n    @ManagedPages(defaultUrl = "http://www.google.com")\n    public Pages pages;\n\n    @Rule\n    public SpringIntegration springIntegration = new SpringIntegration();\n\n    @Autowired\n    public GizmoService gizmoService;\n\n    @Test\n    @DirtiesContext\n    public void shouldNotBeAffectedByTheOtherTest() {\n        assertThat(gizmoService.getName(), is("Gizmos"));\n        gizmoService.setName("New Gizmos");\n    }\n\n    @Test\n    @DirtiesContext\n    public void shouldNotBeAffectedByTheOtherTestEither() {\n        assertThat(gizmoService.getName(), is("Gizmos"));\n        gizmoService.setName("New Gizmos");\n    }\n\n}\n')),(0,r.kt)("p",null,"You can also inject Spring dependencies directly into your Step libraries, for JUnit, Cucumber and JBehave, as shown in this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@ContextConfiguration(locations = "/spring/config.xml")\npublic class NestedSpringEnabledSteps {\n\n    @Autowired\n    public WidgetService widgetService;\n\n    private String widgetName;\n\n    @Steps\n    private NestedSteps nestedSteps;\n\n    @Given("I have a nested autowired Spring bean")\n    public void givenIHaveAnAutowiredSpringBean() {\n        assertThat(nestedSteps.widgetService, notNullValue());\n    }\n\n    @When("I use the nested bean")\n    public void whenIUseTheBean() {\n        widgetName = nestedSteps.widgetService.getName();\n    }\n\n    @Then("the nested bean should be instantiated")\n    public void thenItShouldBeInstantiated() {\n        assertThat(widgetName, is("Widgets"));\n    }\n\n}\n')))}c.isMDXComponent=!0}}]);