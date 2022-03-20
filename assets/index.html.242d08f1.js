import{r as o,o as c,c as i,a as s,b as a,w as r,F as u,e as n,d as l}from"./app.c886dde0.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const m={},_=s("h1",{id:"\u5FEB\u901F\u5F00\u59CB",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5FEB\u901F\u5F00\u59CB","aria-hidden":"true"},"#"),n(" \u5FEB\u901F\u5F00\u59CB")],-1),g=s("p",null,[n("\u6B64\u5904\u5C06\u5C55\u793A\u4E00\u4E2A \u6700\u5C11\u914D\u7F6E \u7684 "),s("code",null,"808\u534F\u8BAE"),n(" \u6D88\u606F\u5904\u7406\u670D\u52A1\u7684\u642D\u5EFA\u3002")],-1),k={class:"custom-container tip"},h=s("p",{class:"custom-container-title"},"\u4F20\u9001\u95E8",-1),b=n("\u672C\u5C0F\u8282\u7684\u793A\u4F8B\u53EF\u4EE5\u5728 "),v={href:"https://github.com/hylexus/jt-framework/tree/master/samples/jt-808-server-sample-bare",title:"jt-808-server-sample-bare",target:"_blank",rel:"noopener noreferrer"},x=n("samples/jt-808-server-sample-bare"),f=n(" \u4E0B\u627E\u5230\u5BF9\u5E94\u4EE3\u7801\u3002"),y=s("h2",{id:"\u521B\u5EFA\u5DE5\u7A0B",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u521B\u5EFA\u5DE5\u7A0B","aria-hidden":"true"},"#"),n(" \u521B\u5EFA\u5DE5\u7A0B")],-1),j=s("p",null,[n("\u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684 "),s("code",null,"spring-boot"),n(" \u5DE5\u7A0B\u3002")],-1),E={class:"custom-container tip"},B=s("p",{class:"custom-container-title"},"\u4F20\u9001\u95E8",-1),q=n("\u53EF\u4EE5\u4F7F\u7528 "),w={href:"https://start.spring.io",target:"_blank",rel:"noopener noreferrer"},I=n("Spring Initializer"),L=n(" \u5FEB\u901F\u521D\u59CB\u5316\u4E00\u4E2A Spring Boot \u5DE5\u7A0B\u3002"),C=l(`<h2 id="\u6DFB\u52A0\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u4F9D\u8D56" aria-hidden="true">#</a> \u6DFB\u52A0\u4F9D\u8D56</h2><p>\u5F15\u5165\u4E3A <code>808\u534F\u8BAE</code> \u63D0\u4F9B\u7684 <code>spring-boot-starter</code></p><ul><li>gradle</li></ul><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>dependencies <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    implementation group<span class="token punctuation">:</span> <span class="token string">&#39;io.github.hylexus.jt&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token string">&#39;jt-808-server-spring-boot-stater&#39;</span><span class="token punctuation">,</span> version<span class="token punctuation">:</span> <span class="token string gstring">&quot;2.0.1-RELEASE&quot;</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>maven</li></ul><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.github.hylexus.jt<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jt-808-server-spring-boot-stater<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.0.1-RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><ul><li>application.yml</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">jt808</span><span class="token punctuation">:</span>
  <span class="token key atrule">built-components</span><span class="token punctuation">:</span>
    <span class="token key atrule">component-statistics</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">request-handlers</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">logging</span><span class="token punctuation">:</span>
  <span class="token key atrule">level.root</span><span class="token punctuation">:</span> info
  <span class="token key atrule">level.io.github.hylexus</span><span class="token punctuation">:</span> info
  <span class="token key atrule">level.jt-808.request.decoder</span><span class="token punctuation">:</span> debug
  <span class="token key atrule">level.jt-808.response.encoder</span><span class="token punctuation">:</span> debug
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><p>\u81F3\u6B64\uFF0C\u5BF9 <strong>808\u6D88\u606F</strong> \u7684\u5904\u7406\u670D\u52A1\u5DF2\u7ECF\u642D\u5EFA\u5B8C\u6BD5\u3002\u542F\u52A8 <code>spring-boot</code> \u9879\u76EE\u5F00\u59CB\u6D4B\u8BD5\u3002</p>`,11),S={class:""},A=["src"],N=l('<p>\u53EF\u4EE5\u4ECE\u542F\u52A8\u65E5\u5FD7\u4E2D\u7684<code>\u7EC4\u4EF6\u7EDF\u8BA1\u4FE1\u606F</code>\u4E2D\u770B\u5230\u5185\u7F6E\u4E86\u4E00\u4E9B\u6D88\u606F\u5904\u7406\u5668\uFF1A</p><ul><li><code>0x0100</code> \u7EC8\u7AEF\u6CE8\u518C</li><li><code>0x0102</code> \u7EC8\u7AEF\u9274\u6743</li><li><code>0x0200</code> \u5B9A\u4F4D\u6570\u636E\u4E0A\u62A5</li><li><code>0x0704</code> \u5B9A\u4F4D\u6570\u636E\u6279\u91CF\u4E0A\u62A5</li></ul><p>\u6240\u4EE5\u73B0\u5728\u53EF\u4EE5\u6D4B\u8BD5\u63A5\u6536\u5185\u7F6E\u7684\u8FD9\u4E9B\u7C7B\u578B\u7684\u6D88\u606F\u4E86\u3002\u4E0B\u9762\u4EE5 <strong>2019</strong> \u7248\u7684 <strong>\u7EC8\u7AEF\u6CE8\u518C\u6D88\u606F</strong> \u4E3A\u4F8B\u8FDB\u884C\u6D4B\u8BD5\uFF1A</p><div class="custom-container tip"><p class="custom-container-title">\u914D\u7F6E\u63D0\u793A</p><ul><li><code>\u7EC4\u4EF6\u7EDF\u8BA1\u4FE1\u606F</code> \u7684\u5F00\u5173\u7531\u914D\u7F6E\u9879 <code>jt808.print-component-statistics = true|false</code> \u6765\u63A7\u5236</li><li>\u9ED8\u8BA4\u7684 <code>TCP</code> \u7AEF\u53E3\u4E3A <code>6808</code></li></ul></div>',4),R={class:"custom-container danger"},V=s("p",{class:"custom-container-title"},"\u8B66\u544A",-1),$=n("\u6CE8\u610F\uFF1A \u65E0\u8BBA\u4EE5\u4EC0\u4E48\u53D1\u5305\u5DE5\u5177\u53D1\u5305\uFF0C\u90FD\u8BF7\u8BB0\u5F97\u4EE5 "),F=s("code",null,"\u5341\u516D\u8FDB\u5236\u683C\u5F0F",-1),T=n(" \u53D1\u9001\uFF01\u53EF\u4EE5\u53C2\u8003 "),z=n("\u63A8\u8350\u53D1\u5305\u5DE5\u5177"),D=n(" \u3002"),P=s("ul",null,[s("li",null,"\u62A5\u6587")],-1),G=s("div",{class:"language-text ext-text line-numbers-mode"},[s("pre",{class:"language-text"},[s("code",null,`7E010040560100000000013912344321007B000B0000313233353931323335393131323334353637383930313233343536373839303132333435363738393069643132333435363738393031323334353637383930313233343536373801B8CA4A2D3635343332313C7E
`)]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br")])],-1),H=s("ul",null,[s("li",null,"\u5BA2\u6237\u7AEF")],-1),J={class:""},K=["src"],M=s("ul",null,[s("li",null,"\u670D\u52A1\u7AEF")],-1),O={class:""},Q=["src"],U={class:"custom-container tip"},W=s("p",{class:"custom-container-title"},"\u4F20\u9001\u95E8",-1),X=n("\u672C\u5C0F\u8282\u7684\u793A\u4F8B\u53EF\u4EE5\u5728 "),Y={href:"https://github.com/hylexus/jt-framework/tree/master/samples/jt-808-server-sample-bare",title:"jt-808-server-sample-bare",target:"_blank",rel:"noopener noreferrer"},Z=n("samples/jt-808-server-sample-bare"),ss=n(" \u4E0B\u627E\u5230\u5BF9\u5E94\u4EE3\u7801\u3002");function ns(e,as){const t=o("ExternalLinkIcon"),p=o("RouterLink");return c(),i(u,null,[_,g,s("div",k,[h,s("p",null,[b,s("a",v,[x,a(t)]),f])]),y,j,s("div",E,[B,s("p",null,[q,s("a",w,[I,a(t)]),L])]),C,s("p",S,[s("img",{src:e.$withBase("/img/v2/quick-start/print-component-statistics.jpg")},null,8,A)]),N,s("div",R,[V,s("p",null,[$,F,T,a(p,{to:"/frequently-asked-questions/debug.html"},{default:r(()=>[z]),_:1}),D])]),P,G,H,s("p",J,[s("img",{src:e.$withBase("/img/v2/quick-start/register-msg-2019-client.png")},null,8,K)]),M,s("p",O,[s("img",{src:e.$withBase("/img/v2/quick-start/register-msg-2019-breakpoint.png")},null,8,Q)]),s("div",U,[W,s("p",null,[X,s("a",Y,[Z,a(t)]),ss])])],64)}var os=d(m,[["render",ns]]);export{os as default};
