/*
 * fis
 * http://web.baidu.com/
 */
'use strict';

var _ = require('underscore');

module.exports = function (content, file, conf) {
    _.templateSettings = {
        evaluate: /{([\s\S]+?)}/g,
        interpolate: /{([\s\S]+?)}/g,
        escape: /<%-([\s\S]+?)%>/g
    };

    fis.util.merge(_.templateSettings, conf);

    content = content.replace(/{:/ig, '{');

    var matches = content.match(/\$[\s\S]+?[\.|}|\)|\?]/ig);
    var params = {};
    var key = '';
    for (var i in matches) {
        key = matches[i].replace(/[\$|\.|\)|}|\?]/ig, '');
        if (!params[key]) {
            params[key] = key;
        }
    }

    var paramsContent = [];
    for (var key in params) {
        paramsContent.push('{$' + key + '=' + key + '}');
    }

    content = paramsContent.join('') + content;

    return _.template(content).source;
};
