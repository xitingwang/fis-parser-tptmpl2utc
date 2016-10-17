# fis-parser-tptmpl2utc

Convert thinkphp template to underscore template.
## use
```node
npm install --save fis-parser-tptmpl2utc
```

## settings
```javascript
fis.match('**.tmpl.tpl', {
    // utc编译
    parser: fis.plugin('tptmpl2utc'), // 启用fis-parser-tptmpl2utc插件
    isJsLike: true, // 只是内嵌，不用发布
    isMod: false,
    release: false
}, true);

```