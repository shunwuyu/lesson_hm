# 跨站脚本注入（XSS） 跨站请求伪造(CSRF)， 如何预防

- XSS 
  攻击者通过在网页中注入恶意脚本，窃取用户信息或执行未授权的操作的攻击方式。
  <script>alert('XSS Attack')</script>
  假设有一个评论系统，用户可以在网页上发布评论。如果系统没有对用户输入过滤或转译，攻击者可以提交恶意脚本。
  - 窃取用户信息： cookie
  - 重定向恶意网站
  - 串改网页内容，钓鱼攻击

  - 解决方案
    - 对用户输入进行严格的验证和过滤
    - 对html 转译 < > & &lgt; &gt; &lt; &amp;
    - sanitize-html  

## 跨站请求伪造 csrf 
  攻击者诱使用户在已认证的会话中执行未授权的操作，利用用户身份进行恶意请求。

  - 假设用户已登陆到一个在线银行网站，并且该网站允许用户通过发送POST请求来转账

  - 过程
    - 用户登陆 银行网站
    - 恶意网站 
    ```
    <form action="https://bank.com/transfer" method="POST" style="display:none;">
    <input type="hidden" name="amount" value="1000">
    <input type="hidden" name="to" value="attacker_account">
</form>
<script>
    document.forms[0].submit();
</script>
    ```

  - 解决方案
    - 使用CSRF token 敏感操作的时候 验证csrf token 
    - cookie  sameSite 属性  Strict 