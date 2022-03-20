import{r as e,o as t,c as p,a as n,b as c,w as o,F as l,e as a,d as i}from"./app.c886dde0.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},d=n("h1",{id:"\u5F02\u5E38\u5904\u7406",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5F02\u5E38\u5904\u7406","aria-hidden":"true"},"#"),a(" \u5F02\u5E38\u5904\u7406")],-1),k=n("p",null,[a("\u76F4\u63A5\u5B9E\u73B0 "),n("code",null,"MsgHandler"),a(" \u7B49\u63A5\u53E3\u5E76 "),n("code",null,"\u624B\u52A8\u6CE8\u518C"),a(" \u7684\u7EC4\u4EF6\u7684\u5F02\u5E38\u5904\u7406\u53EF\u4EE5\u5728\u5B9E\u73B0\u7C7B\u4E2D\u81EA\u5DF1\u5904\u7406\u3002")],-1),b=n("p",null,[a("\u57FA\u4E8E\u6CE8\u89E3\u7684 "),n("code",null,"MsgHandler"),a(" \u7684\u5F02\u5E38\u5904\u7406\u53EF\u4EE5\u76F4\u63A5\u7531\u6CE8\u89E3\u5B9E\u73B0\u3002")],-1),m=a("\u5177\u4F53\u914D\u7F6E\u8BF7\u79FB\u6B65 "),h=a("\u914D\u7F6E\u6587\u6863"),v=i(`<h2 id="jt808requestmsghandleradvice" tabindex="-1"><a class="header-anchor" href="#jt808requestmsghandleradvice" aria-hidden="true">#</a> @Jt808RequestMsgHandlerAdvice</h2><p>\u7C7B\u6BD4\u4E8E <code>Spring</code> \u7684 <code>@ControllerAdvice</code> \u6CE8\u89E3\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Jt808RequestMsgHandlerAdvice</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BuiltinDefaultExceptionHandler</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="jt808exceptionhandler" tabindex="-1"><a class="header-anchor" href="#jt808exceptionhandler" aria-hidden="true">#</a> @Jt808ExceptionHandler</h2><p>\u7C7B\u6BD4\u4E8E <code>Spring</code> \u7684 <code>@ExceptionHandler</code> \u6CE8\u89E3\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Jt808RequestMsgHandlerAdvice</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BuiltinDefaultExceptionHandler</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Jt808ExceptionHandler</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Throwable</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">processThrowable</span><span class="token punctuation">(</span><span class="token class-name">Throwable</span> throwable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;BuiltinDefaultExceptionHandler :&quot;</span><span class="token punctuation">,</span> throwable<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u4F20\u9001\u95E8</p><p>\u5185\u7F6E\u7684\u5F02\u5E38\u5904\u7406\u5668\u4F4D\u4E8E <code>BuiltinDefaultExceptionHandler</code> \u4E2D\u3002</p></div>`,7);function _(g,x){const s=e("RouterLink");return t(),p(l,null,[d,k,b,n("p",null,[m,c(s,{to:"/v1/jt-808/config/#exception-handler-scan"},{default:o(()=>[h]),_:1})]),v],64)}var w=r(u,[["render",_]]);export{w as default};
