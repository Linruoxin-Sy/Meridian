# `audit-test`审计结果


您所审计的工程总共有 **34** 个风险漏洞。

其中：

- **关键漏洞**：共计 **6** 个
- **高风险漏洞**：共计 **20** 个
- **中风险漏洞**：共计 **5** 个
- **低风险漏洞**：共计 **3** 个

> 说明：
>
> - **关键**漏洞被认为是极其严重的，应该立即修复。
> - **高风险**漏洞被认为是严重的，应该尽快修复。
> - **中风险**漏洞被认为是中等严重的，可以选择在时间允许时修复。
> - **低风险**漏洞被认为是轻微的，可以根据自行需要进行修复。

下面是漏洞的详细信息


## 关键漏洞

共计 **6** 个


### `handlebars`

**漏洞描述**：

- Arbitrary Code Execution in handlebars
  - npm漏洞编号：`1086648`
  - 漏洞详细说明：https://github.com/advisories/GHSA-q2c6-c6pm-g3gh
  - 漏洞等级：高风险
  - 受影响的版本：`>=4.0.0 <4.5.3`

- Prototype Pollution in handlebars
  - npm漏洞编号：`1086650`
  - 漏洞详细说明：https://github.com/advisories/GHSA-g9r4-xpmj-mj65
  - 漏洞等级：高风险
  - 受影响的版本：`>=4.0.0 <4.5.3`

- Denial of Service in handlebars
  - npm漏洞编号：`1086668`
  - 漏洞详细说明：https://github.com/advisories/GHSA-f52g-6jhx-586p
  - 漏洞等级：中风险
  - 受影响的版本：`>=4.0.0 <4.4.5`

- Remote code execution in handlebars when compiling templates
  - npm漏洞编号：`1095063`
  - 漏洞详细说明：https://github.com/advisories/GHSA-f2jv-r9rf-7988
  - 漏洞等级：关键
  - 受影响的版本：`<4.7.7`

- Arbitrary Code Execution in Handlebars
  - npm漏洞编号：`1095064`
  - 漏洞详细说明：https://github.com/advisories/GHSA-3cqr-58rm-57f8
  - 漏洞等级：高风险
  - 受影响的版本：`>=4.0.0 <4.5.3`

- Regular Expression Denial of Service in Handlebars
  - npm漏洞编号：`1095069`
  - 漏洞详细说明：https://github.com/advisories/GHSA-62gr-4qp9-h98f
  - 漏洞等级：高风险
  - 受影响的版本：`>=4.0.0 <4.4.5`

- Arbitrary Code Execution in handlebars
  - npm漏洞编号：`1096404`
  - 漏洞详细说明：https://github.com/advisories/GHSA-2cf5-4w76-r9qv
  - 漏洞等级：高风险
  - 受影响的版本：`>=4.0.0 <4.5.2`

- Prototype Pollution in handlebars
  - npm漏洞编号：`1102332`
  - 漏洞详细说明：https://github.com/advisories/GHSA-w457-6q6x-cgp9
  - 漏洞等级：关键
  - 受影响的版本：`>=4.0.0 <4.3.0`

- Prototype Pollution in handlebars
  - npm漏洞编号：`1102335`
  - 漏洞详细说明：https://github.com/advisories/GHSA-765h-qjxv-5f44
  - 漏洞等级：关键
  - 受影响的版本：`<4.7.7`


**依赖关系**：


- `audit-test` / handlebars



**漏洞包所在目录**：

- `node_modules/handlebars`


### `lodash`

**漏洞描述**：

- Command Injection in lodash
  - npm漏洞编号：`1106913`
  - 漏洞详细说明：https://github.com/advisories/GHSA-35jh-r3h4-6jhm
  - 漏洞等级：高风险
  - 受影响的版本：`<4.17.21`

- Prototype Pollution in lodash
  - npm漏洞编号：`1106918`
  - 漏洞详细说明：https://github.com/advisories/GHSA-jf85-cpcp-j695
  - 漏洞等级：关键
  - 受影响的版本：`<4.17.12`

- Regular Expression Denial of Service (ReDoS) in lodash
  - npm漏洞编号：`1106919`
  - 漏洞详细说明：https://github.com/advisories/GHSA-29mw-wpgm-hmr9
  - 漏洞等级：中风险
  - 受影响的版本：`<4.17.21`

- Prototype Pollution in lodash
  - npm漏洞编号：`1106920`
  - 漏洞详细说明：https://github.com/advisories/GHSA-p6mc-m468-83gw
  - 漏洞等级：高风险
  - 受影响的版本：`>=3.7.0 <4.17.19`


**依赖关系**：


- `audit-test` / lodash



**漏洞包所在目录**：

- `node_modules/lodash`


### `minimist`

**漏洞描述**：

- Prototype Pollution in minimist
  - npm漏洞编号：`1096466`
  - 漏洞详细说明：https://github.com/advisories/GHSA-vh95-rmgr-6w4m
  - 漏洞等级：中风险
  - 受影响的版本：`<0.2.1`

- Prototype Pollution in minimist
  - npm漏洞编号：`1097677`
  - 漏洞详细说明：https://github.com/advisories/GHSA-xvch-5gv4-984h
  - 漏洞等级：关键
  - 受影响的版本：`<0.2.4`


**依赖关系**：



- `audit-test` / `handlebars` / `optimist` / `minimist`

  
  

**漏洞包所在目录**：

- `node_modules/minimist`


### `mongoose`

**漏洞描述**：

- automattic/mongoose vulnerable to Prototype pollution via Schema.path
  - npm漏洞编号：`1095078`
  - 漏洞详细说明：https://github.com/advisories/GHSA-f825-f98c-gj3g
  - 漏洞等级：高风险
  - 受影响的版本：`<5.13.15`

- Mongoose Prototype Pollution vulnerability
  - npm漏洞编号：`1095080`
  - 漏洞详细说明：https://github.com/advisories/GHSA-9m93-w8w6-76hh
  - 漏洞等级：关键
  - 受影响的版本：`<5.13.20`

- Mongoose Vulnerable to Prototype Pollution in Schema Object
  - npm漏洞编号：`1097158`
  - 漏洞详细说明：https://github.com/advisories/GHSA-h8hf-x3f4-xwgp
  - 漏洞等级：关键
  - 受影响的版本：`<5.13.15`

- Mongoose search injection vulnerability
  - npm漏洞编号：`1101061`
  - 漏洞详细说明：https://github.com/advisories/GHSA-m7xq-9374-9rvx
  - 漏洞等级：高风险
  - 受影响的版本：`<6.13.5`

- Mongoose search injection vulnerability
  - npm漏洞编号：`1101838`
  - 漏洞详细说明：https://github.com/advisories/GHSA-vg7j-7cwx-8wgw
  - 漏洞等级：关键
  - 受影响的版本：`<6.13.6`


**依赖关系**：


- `audit-test` / mongoose



**漏洞包所在目录**：

- `node_modules/mongoose`


### `underscore`

**漏洞描述**：

- Arbitrary Code Execution in underscore
  - npm漏洞编号：`1095097`
  - 漏洞详细说明：https://github.com/advisories/GHSA-cf4h-3jhx-xvhq
  - 漏洞等级：关键
  - 受影响的版本：`>=1.3.2 <1.12.1`


**依赖关系**：


- `audit-test` / underscore



**漏洞包所在目录**：

- `node_modules/underscore`


### `xmlhttprequest-ssl`

**漏洞描述**：

- xmlhttprequest and xmlhttprequest-ssl vulnerable to Arbitrary Code Injection
  - npm漏洞编号：`1095088`
  - 漏洞详细说明：https://github.com/advisories/GHSA-h4j5-c7cj-74xg
  - 漏洞等级：关键
  - 受影响的版本：`<1.6.2`

- Improper Certificate Validation in xmlhttprequest-ssl
  - npm漏洞编号：`1095090`
  - 漏洞详细说明：https://github.com/advisories/GHSA-72mh-269x-7mh5
  - 漏洞等级：关键
  - 受影响的版本：`<1.6.1`


**依赖关系**：



- `audit-test` / `engine.io-client` / `xmlhttprequest-ssl`

  
  

**漏洞包所在目录**：

- `node_modules/xmlhttprequest-ssl`





## 高风险漏洞

共计 **20** 个


### `axios`

**漏洞描述**：

- Axios vulnerable to Server-Side Request Forgery
  - npm漏洞编号：`1090049`
  - 漏洞详细说明：https://github.com/advisories/GHSA-4w2v-q235-vp99
  - 漏洞等级：中风险
  - 受影响的版本：`<0.21.1`

- Axios Cross-Site Request Forgery Vulnerability
  - npm漏洞编号：`1097679`
  - 漏洞详细说明：https://github.com/advisories/GHSA-wf5p-g6vw-rhxx
  - 漏洞等级：中风险
  - 受影响的版本：`>=0.8.1 <0.28.0`

- axios Inefficient Regular Expression Complexity vulnerability
  - npm漏洞编号：`1102326`
  - 漏洞详细说明：https://github.com/advisories/GHSA-cph5-m8f7-6c5x
  - 漏洞等级：高风险
  - 受影响的版本：`<0.21.2`

- axios Requests Vulnerable To Possible SSRF and Credential Leakage via Absolute URL
  - npm漏洞编号：`1103617`
  - 漏洞详细说明：https://github.com/advisories/GHSA-jr5f-v2jv-69x6
  - 漏洞等级：高风险
  - 受影响的版本：`<0.30.0`

- Axios is vulnerable to DoS attack through lack of data size check
  - npm漏洞编号：`1107516`
  - 漏洞详细说明：https://github.com/advisories/GHSA-4hjh-wcwx-xvwj
  - 漏洞等级：高风险
  - 受影响的版本：`<1.12.0`


**依赖关系**：


- `audit-test` / axios



**漏洞包所在目录**：

- `node_modules/axios`


### `body-parser`

**漏洞描述**：

- body-parser vulnerable to denial of service when url encoding is enabled
  - npm漏洞编号：`1099520`
  - 漏洞详细说明：https://github.com/advisories/GHSA-qwcr-r2fm-qrc7
  - 漏洞等级：高风险
  - 受影响的版本：`<1.20.3`


**依赖关系**：



- `audit-test` / `express` / `body-parser`

  
  

**漏洞包所在目录**：

- `node_modules/body-parser`

- `node_modules/express/node_modules/body-parser`


### `debug`

**漏洞描述**：

- debug Inefficient Regular Expression Complexity vulnerability
  - npm漏洞编号：`1094457`
  - 漏洞详细说明：https://github.com/advisories/GHSA-9vvw-cc9w-f27h
  - 漏洞等级：高风险
  - 受影响的版本：`<2.6.9`

- Regular Expression Denial of Service in debug
  - npm漏洞编号：`1096792`
  - 漏洞详细说明：https://github.com/advisories/GHSA-gxpj-cx7g-858c
  - 漏洞等级：低风险
  - 受影响的版本：`>=4.0.0 <4.3.1`

- Regular Expression Denial of Service in debug
  - npm漏洞编号：`1096795`
  - 漏洞详细说明：https://github.com/advisories/GHSA-gxpj-cx7g-858c
  - 漏洞等级：低风险
  - 受影响的版本：`<2.6.9`


**依赖关系**：



- `audit-test` / `socket.io` / `engine.io` / `debug`

  

- `audit-test` / `socket.io` / `debug`

  

- `audit-test` / `socket.io` / `socket.io-client` / `debug`

  

- `audit-test` / `socket.io` / `socket.io-parser` / `debug`

  
  

**漏洞包所在目录**：

- `node_modules/debug`

- `node_modules/engine.io/node_modules/debug`

- `node_modules/socket.io-client/node_modules/debug`

- `node_modules/socket.io-parser/node_modules/debug`

- `node_modules/socket.io/node_modules/debug`


### `dicer`

**漏洞描述**：

- Crash in HeaderParser in dicer
  - npm漏洞编号：`1093150`
  - 漏洞详细说明：https://github.com/advisories/GHSA-wm7h-9275-46v2
  - 漏洞等级：高风险
  - 受影响的版本：`<=0.3.1`


**依赖关系**：



- `audit-test` / `multer` / `busboy` / `dicer`

  
  

**漏洞包所在目录**：

- `node_modules/dicer`


### `engine.io`

**漏洞描述**：

- Uncaught exception in engine.io
  - npm漏洞编号：`1089526`
  - 漏洞详细说明：https://github.com/advisories/GHSA-r7qp-cfhv-p84w
  - 漏洞等级：中风险
  - 受影响的版本：`<3.6.1`

- Resource exhaustion in engine.io
  - npm漏洞编号：`1105123`
  - 漏洞详细说明：https://github.com/advisories/GHSA-j4f2-536g-r55m
  - 漏洞等级：高风险
  - 受影响的版本：`<3.6.0`


**依赖关系**：



- `audit-test` / `socket.io` / `engine.io`

  
  

**漏洞包所在目录**：

- `node_modules/engine.io`


### `express`

**漏洞描述**：

- Express.js Open Redirect in malformed URLs
  - npm漏洞编号：`1096820`
  - 漏洞详细说明：https://github.com/advisories/GHSA-rv95-896h-c2vc
  - 漏洞等级：中风险
  - 受影响的版本：`<4.19.2`

- express vulnerable to XSS via response.redirect()
  - npm漏洞编号：`1100530`
  - 漏洞详细说明：https://github.com/advisories/GHSA-qw6h-vgh9-j6wx
  - 漏洞等级：低风险
  - 受影响的版本：`<4.20.0`


**依赖关系**：


- `audit-test` / express



**漏洞包所在目录**：

- `node_modules/express`


### `follow-redirects`

**漏洞描述**：

- Exposure of Sensitive Information to an Unauthorized Actor in follow-redirects
  - npm漏洞编号：`1092623`
  - 漏洞详细说明：https://github.com/advisories/GHSA-pw2r-vq6v-hr8c
  - 漏洞等级：中风险
  - 受影响的版本：`<1.14.8`

- Follow Redirects improperly handles URLs in the url.parse() function
  - npm漏洞编号：`1096353`
  - 漏洞详细说明：https://github.com/advisories/GHSA-jchw-25xp-jwwc
  - 漏洞等级：中风险
  - 受影响的版本：`<1.15.4`

- follow-redirects' Proxy-Authorization header kept across hosts
  - npm漏洞编号：`1096856`
  - 漏洞详细说明：https://github.com/advisories/GHSA-cxjh-pqwp-8mfp
  - 漏洞等级：中风险
  - 受影响的版本：`<=1.15.5`

- Exposure of sensitive information in follow-redirects
  - npm漏洞编号：`1102323`
  - 漏洞详细说明：https://github.com/advisories/GHSA-74fj-2j2h-c42q
  - 漏洞等级：高风险
  - 受影响的版本：`<1.14.7`


**依赖关系**：



- `audit-test` / `axios` / `follow-redirects`

  
  

**漏洞包所在目录**：

- `node_modules/follow-redirects`


### `jsonwebtoken`

**漏洞描述**：

- jsonwebtoken unrestricted key type could lead to legacy keys usage 
  - npm漏洞编号：`1097690`
  - 漏洞详细说明：https://github.com/advisories/GHSA-8cf7-32gw-wr33
  - 漏洞等级：高风险
  - 受影响的版本：`<=8.5.1`

- jsonwebtoken's insecure implementation of key retrieval function could lead to Forgeable Public/Private Tokens from RSA to HMAC
  - npm漏洞编号：`1097694`
  - 漏洞详细说明：https://github.com/advisories/GHSA-hjrf-2m68-5959
  - 漏洞等级：中风险
  - 受影响的版本：`<=8.5.1`

- jsonwebtoken vulnerable to signature validation bypass due to insecure default algorithm in jwt.verify()
  - npm漏洞编号：`1102458`
  - 漏洞详细说明：https://github.com/advisories/GHSA-qwph-4952-7xr6
  - 漏洞等级：中风险
  - 受影响的版本：`<9.0.0`


**依赖关系**：


- `audit-test` / jsonwebtoken



**漏洞包所在目录**：

- `node_modules/jsonwebtoken`


### `kind-of`

**漏洞描述**：

- Validation Bypass in kind-of
  - npm漏洞编号：`1095056`
  - 漏洞详细说明：https://github.com/advisories/GHSA-6c8f-qphg-qjgp
  - 漏洞等级：高风险
  - 受影响的版本：`>=6.0.0 <6.0.3`


**依赖关系**：


- `audit-test` / kind-of



**漏洞包所在目录**：

- `node_modules/kind-of`


### `moment`

**漏洞描述**：

- Moment.js vulnerable to Inefficient Regular Expression Complexity
  - npm漏洞编号：`1095072`
  - 漏洞详细说明：https://github.com/advisories/GHSA-wc69-rhjr-hc9g
  - 漏洞等级：高风险
  - 受影响的版本：`>=2.18.0 <2.29.4`

- Path Traversal: 'dir/../../filename' in moment.locale
  - npm漏洞编号：`1095083`
  - 漏洞详细说明：https://github.com/advisories/GHSA-8hfj-j24r-96c4
  - 漏洞等级：高风险
  - 受影响的版本：`<2.29.2`


**依赖关系**：


- `audit-test` / moment



**漏洞包所在目录**：

- `node_modules/moment`


### `multer`

**漏洞描述**：

- Multer vulnerable to Denial of Service via memory leaks from unclosed streams
  - npm漏洞编号：`1105267`
  - 漏洞详细说明：https://github.com/advisories/GHSA-44fp-w29j-9vj5
  - 漏洞等级：高风险
  - 受影响的版本：`<2.0.0`


**依赖关系**：


- `audit-test` / multer



**漏洞包所在目录**：

- `node_modules/multer`


### `node-fetch`

**漏洞描述**：

- node-fetch forwards secure headers to untrusted sites
  - npm漏洞编号：`1095073`
  - 漏洞详细说明：https://github.com/advisories/GHSA-r683-j2x4-v87g
  - 漏洞等级：高风险
  - 受影响的版本：`<2.6.7`

- The `size` option isn't honored after following a redirect in node-fetch
  - npm漏洞编号：`1098225`
  - 漏洞详细说明：https://github.com/advisories/GHSA-w7rc-rwvf-8q5r
  - 漏洞等级：低风险
  - 受影响的版本：`>=2.0.0 <2.6.1`


**依赖关系**：



- `audit-test` / `rc-editor-core` / `draft-js` / `fbjs` / `isomorphic-fetch` / `node-fetch`

  

- `audit-test` / `antd` / `rc-editor-mention` / `draft-js` / `fbjs` / `isomorphic-fetch` / `node-fetch`

  
  

**漏洞包所在目录**：

- `node_modules/isomorphic-fetch/node_modules/node-fetch`

- `node_modules/node-fetch`


### `path-to-regexp`

**漏洞描述**：

- path-to-regexp outputs backtracking regular expressions
  - npm漏洞编号：`1101850`
  - 漏洞详细说明：https://github.com/advisories/GHSA-9wv6-86v2-598j
  - 漏洞等级：高风险
  - 受影响的版本：`<0.1.10`

- path-to-regexp contains a ReDoS
  - npm漏洞编号：`1105199`
  - 漏洞详细说明：https://github.com/advisories/GHSA-rhx6-c78j-4q9w
  - 漏洞等级：高风险
  - 受影响的版本：`<0.1.12`


**依赖关系**：



- `audit-test` / `express` / `path-to-regexp`

  
  

**漏洞包所在目录**：

- `node_modules/path-to-regexp`


### `qs`

**漏洞描述**：

- qs vulnerable to Prototype Pollution
  - npm漏洞编号：`1104118`
  - 漏洞详细说明：https://github.com/advisories/GHSA-hrpp-h998-j3pp
  - 漏洞等级：高风险
  - 受影响的版本：`>=6.5.0 <6.5.3`

- qs vulnerable to Prototype Pollution
  - npm漏洞编号：`1104120`
  - 漏洞详细说明：https://github.com/advisories/GHSA-hrpp-h998-j3pp
  - 漏洞等级：高风险
  - 受影响的版本：`>=6.7.0 <6.7.3`


**依赖关系**：



- `audit-test` / `express` / `body-parser` / `qs`

  

- `audit-test` / `express` / `qs`

  
  

**漏洞包所在目录**：

- `node_modules/express/node_modules/qs`

- `node_modules/qs`


### `serialize-javascript`

**漏洞描述**：

- Insecure serialization leading to RCE in serialize-javascript
  - npm漏洞编号：`1095131`
  - 漏洞详细说明：https://github.com/advisories/GHSA-hxcc-f52p-wc94
  - 漏洞等级：高风险
  - 受影响的版本：`<3.1.0`


**依赖关系**：


- `audit-test` / serialize-javascript



**漏洞包所在目录**：

- `node_modules/serialize-javascript`


### `shelljs`

**漏洞描述**：

- Improper Privilege Management in shelljs
  - npm漏洞编号：`1088208`
  - 漏洞详细说明：https://github.com/advisories/GHSA-64g7-mvw6-v9qj
  - 漏洞等级：中风险
  - 受影响的版本：`<0.8.5`

- Improper Privilege Management in shelljs
  - npm漏洞编号：`1095126`
  - 漏洞详细说明：https://github.com/advisories/GHSA-4rq4-32rv-6wp6
  - 漏洞等级：高风险
  - 受影响的版本：`<0.8.5`


**依赖关系**：


- `audit-test` / shelljs



**漏洞包所在目录**：

- `node_modules/shelljs`


### `socket.io`

**漏洞描述**：

- CORS misconfiguration in socket.io
  - npm漏洞编号：`1093718`
  - 漏洞详细说明：https://github.com/advisories/GHSA-fxwf-4rqh-v8g3
  - 漏洞等级：中风险
  - 受影响的版本：`<2.4.0`

- socket.io has an unhandled 'error' event
  - npm漏洞编号：`1100551`
  - 漏洞详细说明：https://github.com/advisories/GHSA-25hc-qcg6-38wj
  - 漏洞等级：中风险
  - 受影响的版本：`<2.5.0`


**依赖关系**：


- `audit-test` / socket.io



**漏洞包所在目录**：

- `node_modules/socket.io`


### `tar`

**漏洞描述**：

- Arbitrary File Creation/Overwrite due to insufficient absolute path sanitization
  - npm漏洞编号：`1089684`
  - 漏洞详细说明：https://github.com/advisories/GHSA-3jfq-g458-7qm9
  - 漏洞等级：高风险
  - 受影响的版本：`>=4.0.0 <4.4.14`

- Arbitrary File Creation/Overwrite on Windows via insufficient relative path sanitization
  - npm漏洞编号：`1095117`
  - 漏洞详细说明：https://github.com/advisories/GHSA-5955-9wpr-37jh
  - 漏洞等级：高风险
  - 受影响的版本：`<4.4.18`

- Arbitrary File Creation/Overwrite via insufficient symlink protection due to directory cache poisoning
  - npm漏洞编号：`1096309`
  - 漏洞详细说明：https://github.com/advisories/GHSA-r628-mhmh-qjhw
  - 漏洞等级：高风险
  - 受影响的版本：`>=4.0.0 <4.4.15`

- Arbitrary File Creation/Overwrite via insufficient symlink protection due to directory cache poisoning using symbolic links
  - npm漏洞编号：`1096376`
  - 漏洞详细说明：https://github.com/advisories/GHSA-9r2w-394v-53qc
  - 漏洞等级：高风险
  - 受影响的版本：`>=3.0.0 <4.4.16`

- Arbitrary File Creation/Overwrite via insufficient symlink protection due to directory cache poisoning using symbolic links
  - npm漏洞编号：`1096411`
  - 漏洞详细说明：https://github.com/advisories/GHSA-qq89-hq3f-393p
  - 漏洞等级：高风险
  - 受影响的版本：`>=3.0.0 <4.4.18`

- Denial of service while parsing a tar file due to lack of folders count validation
  - npm漏洞编号：`1097493`
  - 漏洞详细说明：https://github.com/advisories/GHSA-f5x3-32g6-xq36
  - 漏洞等级：中风险
  - 受影响的版本：`<6.2.1`


**依赖关系**：


- `audit-test` / tar



**漏洞包所在目录**：

- `node_modules/tar`


### `trim`

**漏洞描述**：

- Regular Expression Denial of Service in trim
  - npm漏洞编号：`1089867`
  - 漏洞详细说明：https://github.com/advisories/GHSA-w5p7-h5w8-2hfq
  - 漏洞等级：高风险
  - 受影响的版本：`<0.0.3`


**依赖关系**：


- `audit-test` / trim



**漏洞包所在目录**：

- `node_modules/trim`


### `ws`

**漏洞描述**：

- ReDoS in Sec-Websocket-Protocol header
  - npm漏洞编号：`1090476`
  - 漏洞详细说明：https://github.com/advisories/GHSA-6fc8-4gx4-v693
  - 漏洞等级：中风险
  - 受影响的版本：`>=6.0.0 <6.2.2`

- ws affected by a DoS when handling a request with many HTTP headers
  - npm漏洞编号：`1098394`
  - 漏洞详细说明：https://github.com/advisories/GHSA-3h5v-q93c-6h6q
  - 漏洞等级：高风险
  - 受影响的版本：`>=6.0.0 <6.2.3`


**依赖关系**：



- `audit-test` / `engine.io-client` / `ws`

  
  

**漏洞包所在目录**：

- `node_modules/engine.io-client/node_modules/ws`





## 中风险漏洞

共计 **5** 个


### `bcrypt`

**漏洞描述**：

- Integer Overflow or Wraparound and Use of a Broken or Risky Cryptographic Algorithm in bcrypt
  - npm漏洞编号：`1090082`
  - 漏洞详细说明：https://github.com/advisories/GHSA-5wg4-74h6-q47v
  - 漏洞等级：中风险
  - 受影响的版本：`<5.0.0`


**依赖关系**：


- `audit-test` / bcrypt



**漏洞包所在目录**：

- `node_modules/bcrypt`


### `bl`

**漏洞描述**：

- Remote Memory Exposure in bl
  - npm漏洞编号：`1090072`
  - 漏洞详细说明：https://github.com/advisories/GHSA-pp7h-53gx-mx7r
  - 漏洞等级：中风险
  - 受影响的版本：`<1.2.3`


**依赖关系**：


- `audit-test` / bl



**漏洞包所在目录**：

- `node_modules/bl`


### `jquery`

**漏洞描述**：

- XSS in jQuery as used in Drupal, Backdrop CMS, and other products
  - npm漏洞编号：`1100396`
  - 漏洞详细说明：https://github.com/advisories/GHSA-6c3j-c64m-qhgq
  - 漏洞等级：中风险
  - 受影响的版本：`>=1.1.4 <3.4.0`

- Potential XSS vulnerability in jQuery
  - npm漏洞编号：`1102093`
  - 漏洞详细说明：https://github.com/advisories/GHSA-jpcq-cgw6-v4j6
  - 漏洞等级：中风险
  - 受影响的版本：`>=1.0.3 <3.5.0`

- Potential XSS vulnerability in jQuery
  - npm漏洞编号：`1102100`
  - 漏洞详细说明：https://github.com/advisories/GHSA-gxr4-xjj5-5px2
  - 漏洞等级：中风险
  - 受影响的版本：`>=1.2.0 <3.5.0`


**依赖关系**：


- `audit-test` / jquery



**漏洞包所在目录**：

- `node_modules/jquery`


### `parseuri`

**漏洞描述**：

- parse-uri Regular expression Denial of Service (ReDoS)
  - npm漏洞编号：`1107224`
  - 漏洞详细说明：https://github.com/advisories/GHSA-6fx8-h7jm-663j
  - 漏洞等级：中风险
  - 受影响的版本：`<2.0.0`


**依赖关系**：



- `audit-test` / `engine.io-client` / `parseuri`

  

- `audit-test` / `socket.io` / `socket.io-client` / `parseuri`

  
  

**漏洞包所在目录**：

- `node_modules/engine.io-client/node_modules/parseuri`

- `node_modules/parseuri`


### `yargs-parser`

**漏洞描述**：

- yargs-parser Vulnerable to Prototype Pollution
  - npm漏洞编号：`1088811`
  - 漏洞详细说明：https://github.com/advisories/GHSA-p9pc-299p-vxgp
  - 漏洞等级：中风险
  - 受影响的版本：`>=6.0.0 <13.1.2`


**依赖关系**：


- `audit-test` / yargs-parser



**漏洞包所在目录**：

- `node_modules/yargs-parser`





## 低风险漏洞

共计 **3** 个


### `cookie`

**漏洞描述**：

- cookie accepts cookie name, path, and domain with out of bounds characters
  - npm漏洞编号：`1103907`
  - 漏洞详细说明：https://github.com/advisories/GHSA-pxg6-pf52-xh8x
  - 漏洞等级：低风险
  - 受影响的版本：`<0.7.0`


**依赖关系**：



- `audit-test` / `socket.io` / `engine.io` / `cookie`

  

- `audit-test` / `express` / `cookie`

  
  

**漏洞包所在目录**：

- `node_modules/cookie`


### `send`

**漏洞描述**：

- send vulnerable to template injection that can lead to XSS
  - npm漏洞编号：`1100526`
  - 漏洞详细说明：https://github.com/advisories/GHSA-m6fv-jmcg-4jfg
  - 漏洞等级：低风险
  - 受影响的版本：`<0.19.0`


**依赖关系**：



- `audit-test` / `express` / `send`

  

- `audit-test` / `serve-static` / `send`

  
  

**漏洞包所在目录**：

- `node_modules/send`


### `serve-static`

**漏洞描述**：

- serve-static vulnerable to template injection that can lead to XSS
  - npm漏洞编号：`1100528`
  - 漏洞详细说明：https://github.com/advisories/GHSA-cm22-4g7w-348p
  - 漏洞等级：低风险
  - 受影响的版本：`<1.16.0`


**依赖关系**：


- `audit-test` / serve-static



**漏洞包所在目录**：

- `node_modules/serve-static`


 



