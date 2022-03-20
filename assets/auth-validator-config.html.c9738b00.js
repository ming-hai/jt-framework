import{r as t,o as e,c as o,a as n,b as p,F as c,d as l,e as s}from"./app.c886dde0.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const i={},r=l(`<h1 id="authvalidator" tabindex="-1"><a class="header-anchor" href="#authvalidator" aria-hidden="true">#</a> AuthValidator</h1><div class="custom-container danger"><p class="custom-container-title">\u6CE8\u610F</p><ul><li>\u8BE5\u7EC4\u4EF6 <code>\u5F53\u4E14\u4EC5\u5F53</code> \u4F60\u4F7F\u7528\u4E86\u5185\u7F6E\u7684 <code>AuthMsgHandler</code> \u6765\u5904\u7406 <code>\u9274\u6743\u6D88\u606F</code> \u65F6\u624D\u6709\u6548\u3002</li><li>\u5982\u679C\u4F60\u8986\u76D6\u4E86/\u672A\u542F\u7528\u5185\u7F6E\u7684 <code>AuthMsgHandler</code>\uFF0C\u90A3\u4E48\u4F60\u4E5F <code>\u4E0D\u7528</code> \u63D0\u4F9B <code>AuthCodeValidator</code>\u3002\u56E0\u4E3A\u6B64\u65F6\u7684\u9274\u6743\u903B\u8F91\u5DF2\u7ECF\u5B8C\u5168\u4EA4\u7531\u4F60\u81EA\u5B9A\u7684 <code>AuthMsgHandler</code> \u6765\u5904\u7406\u4E86\u3002</li><li>\u6BD4\u8F83\u9E21\u808B\u7684\u4E00\u4E2A\u5185\u7F6E\u7EC4\u4EF6\uFF0C\u4E0D\u8FC7\u7528\u6765 <code>Quick-Start</code> \u8FD8\u662F\u5F88\u65B9\u4FBF\u7684\u{1F923}\u3002</li></ul></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Jt808Config</span> <span class="token keyword">extends</span> <span class="token class-name">Jt808ServerConfigurationSupport</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">AuthCodeValidator</span> <span class="token function">supplyAuthCodeValidator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>session<span class="token punctuation">,</span> requestMsgMetadata<span class="token punctuation">,</span> authRequestMsgBody<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">final</span> <span class="token class-name">String</span> terminalId <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">getTerminalId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">final</span> <span class="token class-name">String</span> authCode <span class="token operator">=</span> authRequestMsgBody<span class="token punctuation">.</span><span class="token function">getAuthCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u4ECE\u5176\u4ED6\u670D\u52A1\u9A8C\u8BC1\u9274\u6743\u7801\u662F\u5426\u6B63\u786E</span>
            <span class="token keyword">boolean</span> success <span class="token operator">=</span> clientService<span class="token punctuation">.</span><span class="token function">isAuthCodeValid</span><span class="token punctuation">(</span>terminalId<span class="token punctuation">,</span> authCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;AuthCode validate for terminal : {} with authCode : {}, result: {}&quot;</span><span class="token punctuation">,</span> terminalId<span class="token punctuation">,</span> authCode<span class="token punctuation">,</span> success<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> success<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,3),d={class:"custom-container tip"},k=n("p",{class:"custom-container-title"},"\u4F20\u9001\u95E8",-1),m=s("\u672C\u5C0F\u8282\u7684\u793A\u4F8B\u53EF\u4EE5\u5728 "),h={href:"https://github.com/hylexus/jt-framework/tree/master/samples/jt-808-server-sample-customized",target:"_blank",rel:"noopener noreferrer"},b=s("samples/jt-808-server-sample-customized"),_=s(" \u4E0B\u627E\u5230\u5BF9\u5E94\u4EE3\u7801\u3002");function g(f,v){const a=t("ExternalLinkIcon");return e(),o(c,null,[r,n("div",d,[k,n("p",null,[m,n("a",h,[b,p(a)]),_])])],64)}var w=u(i,[["render",g]]);export{w as default};
