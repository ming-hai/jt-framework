import{r as c,o as r,c as u,a as n,b as a,w as e,F as i,d as t,e as s}from"./app.c886dde0.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";const b={},d=t('<h1 id="\u8BF7\u6C42\u6D88\u606F\u5904\u7406\u5668" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u6D88\u606F\u5904\u7406\u5668" aria-hidden="true">#</a> \u8BF7\u6C42\u6D88\u606F\u5904\u7406\u5668</h1><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><strong>\u63A5\u6536/\u5904\u7406</strong> \u8BF7\u6C42\u6CA1\u6709\u5F3A\u5236\u6307\u5B9A\u56FA\u5B9A\u7C7B\u578B\u7684\u5904\u7406\u5668\uFF0C\u7531\u8C01\u6765\u5904\u7406\u6D88\u606F\u53D6\u51B3\u4E8E <code>Jt808HandlerMapping</code> \u914D\u7F6E\u3002</p></div><p>\u5185\u7F6E\u4E86\u4E24\u4E2A <code>Jt808HandlerMapping</code>:</p>',4),m={class:"demo"},g=["src"],h=t('<ul><li><code>SimpleJt808RequestHandlerHandlerMapping</code> \u80FD\u5C06\u6D88\u606F\u8DEF\u7531\u5230 <code>SimpleJt808RequestHandler</code> \u7C7B\u578B\u7684 <strong>\u7C7B\u7EA7\u522B</strong> \u5904\u7406\u5668\u3002</li><li><code>Jt808RequestHandlerMappingHandlerMapping</code> \u80FD\u5C06\u6D88\u606F\u8DEF\u7531\u5230 <code>@Jt808RequestHandlerMapping</code> \u6CE8\u89E3\u4FEE\u9970\u7684 <strong>\u65B9\u6CD5\u7EA7\u522B</strong> \u5904\u7406\u5668\u3002</li></ul><h2 id="simplejt808requesthandler" tabindex="-1"><a class="header-anchor" href="#simplejt808requesthandler" aria-hidden="true">#</a> SimpleJt808RequestHandler</h2><h3 id="\u4ECB\u7ECD-1" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD-1" aria-hidden="true">#</a> \u4ECB\u7ECD</h3><p>\u6700\u76F4\u89C2\u7684\u5904\u7406\u65B9\u5F0F\u5C31\u662F\u7C7B\u4F3C\u4E8E <code>Spring</code> \u7684 <code>WebFlux</code> \u4E2D\u7684 <code>org.springframework.web.reactive.function.server.HandlerFunction</code>\u3002</p><p>\u4F46\u662F <code>HandlerFunction</code> \u9700\u8981\u501F\u52A9 <code>RouterFunction</code> \u6765\u5C06\u8BF7\u6C42\u548C <code>HandlerFunction</code> \u8054\u7CFB\u8D77\u6765\u3002</p><p>\u672C\u9879\u76EE\u501F\u9274(\u6284\u88AD) <code>WebFlux</code>\uFF0C\u63D0\u4F9B\u4E86\u4E00\u4E2A <code>SimpleJt808RequestHandler</code>(\u4E3A\u4E86\u7F16\u7801\u7B80\u5355\uFF0C\u76F4\u63A5\u7701\u53BB\u4E86 <code>RouterFunction</code>) :</p>',6),v=n("div",{class:"language-java ext-java line-numbers-mode"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// \u8FD9\u91CC\u662F Spring WebFlux \u7684 HandlerFunction \u5B9A\u4E49"),s(`
`),n("span",{class:"token keyword"},"package"),s(),n("span",{class:"token namespace"},[s("org"),n("span",{class:"token punctuation"},"."),s("springframework"),n("span",{class:"token punctuation"},"."),s("web"),n("span",{class:"token punctuation"},"."),s("reactive"),n("span",{class:"token punctuation"},"."),s("function"),n("span",{class:"token punctuation"},"."),s("server")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"HandlerFunction"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"ServerResponse"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token class-name"},"Mono"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"handle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ServerRequest"),s(" request"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br")])],-1),f=n("div",{class:"language-java ext-java line-numbers-mode"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"SimpleJt808RequestHandler"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"MultipleVersionSupport"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * `),n("span",{class:"token keyword"},"@return"),s(` \u8BE5\u5904\u7406\u5668\u53EF\u4EE5\u5904\u7406\u4EC0\u4E48\u7C7B\u578B\u7684\u6D88\u606F
     */`)]),s(`
    `),n("span",{class:"token class-name"},"Set"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"MsgType"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"getSupportedMsgTypes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * `),n("span",{class:"token keyword"},"@return"),s(` \u8BE5\u5904\u7406\u5668\u53EF\u4EE5\u5904\u7406\u7684\u534F\u8BAE\u7C7B\u578B(\u9ED8\u8BA4\u4E3AALL)
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token class-name"},"Set"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Jt808ProtocolVersion"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"getSupportedVersions"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token class-name"},"MultipleVersionSupport"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getSupportedVersions"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * \u5904\u7406\u6D88\u606F
     *
     * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"@link"),s(),n("span",{class:"token reference"},[n("span",{class:"token class-name"},"Jt808Response")]),n("span",{class:"token punctuation"},"}"),s(" \u6216 \u53EF\u4EE5\u8F6C\u6362\u4E3A "),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"@link"),s(),n("span",{class:"token reference"},[n("span",{class:"token class-name"},"Jt808Response")]),n("span",{class:"token punctuation"},"}"),s(` \u7684\u7C7B\u578B
     */`)]),s(`
    `),n("span",{class:"token class-name"},"T"),s(),n("span",{class:"token function"},"handleMsg"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Jt808ServerExchange"),s(" exchange"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br")])],-1),y=t(`<h3 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h3><div class="custom-container tip"><p class="custom-container-title">\u4F7F\u7528\u65B9\u5F0F</p><p>\u76F4\u63A5\u5C06\u5B9E\u73B0\u4E86 <code>SimpleJt808RequestHandler</code> \u63A5\u53E3\u7684\u5904\u7406\u5668\u7C7B\u52A0\u5165\u5230 <code>Spring</code> \u5BB9\u5668\u4E2D\u5C31\u53EF\u4EE5\u3002</p></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TerminalRegisterMsgHandlerV2011</span> <span class="token keyword">implements</span> <span class="token class-name">SimpleJt808RequestHandler</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">BuiltinMsg8100</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u5904\u7406 [\u7EC8\u7AEF\u6CE8\u518C] \u6D88\u606F
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MsgType</span><span class="token punctuation">&gt;</span></span> <span class="token function">getSupportedMsgTypes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Set</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token class-name">BuiltinJt808MsgType</span><span class="token punctuation">.</span>CLIENT_REGISTER<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u5904\u7406 [V2011] \u7248\u7684\u6D88\u606F
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Jt808ProtocolVersion</span><span class="token punctuation">&gt;</span></span> <span class="token function">getSupportedVersions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Jt808ProtocolVersion</span><span class="token punctuation">.</span><span class="token function">unmodifiableSetVersion2011</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 7E01000023013912344321007B000B0002696431323361626364656667684944313233343501B8CA4A2D313233343531317E</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">BuiltinMsg8100</span> <span class="token function">handleMsg</span><span class="token punctuation">(</span><span class="token class-name">Jt808ServerExchange</span> exchange<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token function">processRequest</span><span class="token punctuation">(</span>exchange<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="jt808requesthandlermapping" tabindex="-1"><a class="header-anchor" href="#jt808requesthandlermapping" aria-hidden="true">#</a> @Jt808RequestHandlerMapping</h2><h3 id="\u4ECB\u7ECD-2" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD-2" aria-hidden="true">#</a> \u4ECB\u7ECD</h3><p>\u8FD9\u79CD\u5904\u7406\u5668\u4E5F\u662F\u4ECE <code>Spring</code> \u501F\u9274(\u6284\u88AD)\u7684\u3002\u548C <code>Spring</code> \u7684 <code>@Controller</code>\u3001<code>@RestController</code> \u7528\u6CD5\u7C7B\u4F3C\u3002</p><p>\u4F5C\u7528\u5C31\u662F\u6807\u8BB0\u4E00\u4E0B\u5F53\u524D\u7C7B\u662F\u4E00\u4E2A\u6D88\u606F\u5904\u7406\u5668\u7C7B\u3002\u88AB\u8BE5\u6CE8\u89E3\u6807\u8BB0\u7684\u7C7B\u4E2D\u5E94\u8BE5\u5B58\u5728\u82E5\u5E72\u4E2A\u80FD\u5904\u7406\u8BF7\u6C42\u7684\u65B9\u6CD5\u3002</p><h3 id="\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-1" aria-hidden="true">#</a> \u793A\u4F8B</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token comment">// @Jt808RequestHandler \u6807\u8BB0\u8BE5\u7C7B \u8868\u793A\u8BE5\u7C7B\u662F\u4E00\u4E2A\u6D88\u606F\u5904\u7406\u5668\u7D2F(\u5177\u4F53\u7684\u5904\u7406\u5668\u662F\u8BE5\u7C7B\u4E2D\u7684\u90E8\u5206\u65B9\u6CD5)</span>
<span class="token annotation punctuation">@Jt808RequestHandler</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SomeRequestHandler</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Jt808RequestHandlerMapping</span><span class="token punctuation">(</span>msgType <span class="token operator">=</span> <span class="token number">0x0100</span><span class="token punctuation">,</span> versions <span class="token operator">=</span> VERSION_2013<span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">TerminalRegisterReplyMsg</span> <span class="token function">processTerminalRegisterMsgV2011</span><span class="token punctuation">(</span><span class="token class-name">Jt808Request</span> request<span class="token punctuation">,</span> <span class="token class-name">TerminalRegisterMsgV2011</span> body<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token function">processRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> body<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Jt808RequestHandlerMapping</span><span class="token punctuation">(</span>msgType <span class="token operator">=</span> <span class="token number">0x0100</span><span class="token punctuation">,</span> versions <span class="token operator">=</span> VERSION_2019<span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">TerminalRegisterReplyMsg</span> <span class="token function">processTerminalRegisterMsgV2019</span><span class="token punctuation">(</span><span class="token class-name">Jt808RequestEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TerminalRegisterMsgV2019</span><span class="token punctuation">&gt;</span></span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token function">processRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> body<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,9);function R(o,S){const p=c("CodeGroupItem"),l=c("CodeGroup");return r(),u(i,null,[d,n("p",m,[n("img",{src:o.$withBase("/img/v2/design/jt808-handler-mapping.png")},null,8,g)]),h,a(l,null,{default:e(()=>[a(p,{title:"HandlerFunction(Spring)"},{default:e(()=>[v]),_:1}),a(p,{title:"SimpleJt808RequestHandler",active:""},{default:e(()=>[f]),_:1})]),_:1}),y],64)}var q=k(b,[["render",R]]);export{q as default};
