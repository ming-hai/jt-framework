import{r as t,o,c as p,a as n,b as a,F as r,e as s,d as c}from"./app.c886dde0.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=n("h1",{id:"netty\u76F8\u5173",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#netty\u76F8\u5173","aria-hidden":"true"},"#"),s(" Netty\u76F8\u5173")],-1),d={class:"custom-container tip"},m=n("p",{class:"custom-container-title"},"\u4F20\u9001\u95E8",-1),_=s("\u672C\u5C0F\u8282\u793A\u4F8B\u53EF\u4EE5\u5728 "),k={href:"https://github.com/hylexus/jt-framework/tree/master/samples/jt-808-server-sample-customized",target:"_blank",rel:"noopener noreferrer"},h=s("samples/jt-808-server-sample-customized"),b=s(" \u627E\u5230\u76F8\u5173\u4EE3\u7801\u3002"),f=c(`<p>Netty\u76F8\u5173\u914D\u7F6E\u9700\u8981\u7EE7\u627F <code>Jt808ServerConfigurationSupport</code> \u6765\u8986\u76D6\u9ED8\u8BA4\u903B\u8F91\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Jt808Config</span> <span class="token keyword">extends</span> <span class="token class-name">Jt808ServerConfigurationSupport</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Jt808ServerNettyConfigure</span> <span class="token function">jt808ServerNettyConfigure</span><span class="token punctuation">(</span><span class="token class-name">HeatBeatHandler</span> heatBeatHandler<span class="token punctuation">,</span> <span class="token class-name">Jt808ChannelHandlerAdapter</span> jt808ChannelHandlerAdapter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DemoJt808ServerNettyConfigure</span><span class="token punctuation">(</span>heatBeatHandler<span class="token punctuation">,</span> jt808ChannelHandlerAdapter<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,2),v={class:"custom-container tip"},g=n("p",{class:"custom-container-title"},"\u4F20\u9001\u95E8",-1),y=s("\u672C\u5C0F\u8282\u793A\u4F8B\u53EF\u4EE5\u5728 "),j={href:"https://github.com/hylexus/jt-framework/tree/master/samples/jt-808-server-sample-customized",target:"_blank",rel:"noopener noreferrer"},x=s("samples/jt-808-server-sample-customized"),C=s(" \u627E\u5230\u76F8\u5173\u4EE3\u7801\u3002");function w(N,S){const e=t("ExternalLinkIcon");return o(),p(r,null,[u,n("div",d,[m,n("p",null,[_,n("a",k,[h,a(e)]),b])]),f,n("div",v,[g,n("p",null,[y,n("a",j,[x,a(e)]),C])])],64)}var J=l(i,[["render",w]]);export{J as default};
