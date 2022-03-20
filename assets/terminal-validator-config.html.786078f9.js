import{r as t,o,c as p,a as n,b as e,F as c,e as a,d as l}from"./app.c886dde0.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=n("h1",{id:"terminalvalidator",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#terminalvalidator","aria-hidden":"true"},"#"),a(" TerminalValidator")],-1),d={class:"custom-container tip"},k=n("p",{class:"custom-container-title"},"\u9E23\u8C22",-1),m=a("\u8BE5\u7EC4\u4EF6\u7531 "),b={href:"https://github.com/anotherMe17",target:"_blank",rel:"noopener noreferrer"},_=a("anotherMe17"),h=a(" \u8D21\u732E\u3002"),f=a("\u975E\u5E38\u611F\u8C22\u8001\u54E5 "),g={href:"https://github.com/anotherMe17",target:"_blank",rel:"noopener noreferrer"},v=a("anotherMe17"),w=a(" \u7684 "),y={href:"https://github.com/hylexus/jt-framework/pull/19",target:"_blank",rel:"noopener noreferrer"},x=a("Pull request#19"),V=a(" \u3002"),M=l(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Jt808Configuration</span> <span class="token keyword">extends</span> <span class="token class-name">Jt808ServerConfigurationSupport</span> <span class="token punctuation">{</span>
    <span class="token comment">// [\u975E\u5FC5\u987B\u914D\u7F6E] -- \u53EF\u66FF\u6362\u5185\u7F6E TerminalValidator</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">TerminalValidator</span> <span class="token function">terminalValidator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">TerminalValidator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">validateTerminal</span><span class="token punctuation">(</span><span class="token class-name">RequestMsgMetadata</span> metadata<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">needValidate</span><span class="token punctuation">(</span><span class="token class-name">RequestMsgMetadata</span> metadata<span class="token punctuation">,</span> <span class="token class-name">Integer</span> msgId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,1);function j(T,C){const s=t("ExternalLinkIcon");return o(),p(c,null,[u,n("div",d,[k,n("ul",null,[n("li",null,[m,n("a",b,[_,e(s)]),h]),n("li",null,[f,n("a",g,[v,e(s)]),w,n("a",y,[x,e(s)]),V])])]),M],64)}var q=r(i,[["render",j]]);export{q as default};
