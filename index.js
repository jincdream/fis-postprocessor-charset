'use strict';

module.exports = function (content, file, conf) {
  // if (file.isHtmlLike) {
    // return content = content.replace(/[Uu][Tt][Ff]-*8/g, 'gbk');

    return content.replace(/(<meta.*?)utf-8(.*?>)/gi,'$1gbk$2')
  // }
};
