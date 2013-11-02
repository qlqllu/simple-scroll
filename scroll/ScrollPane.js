define(['dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/_base/html',
    'dijit/_WidgetBase'
  ],
  function(declare, lang, html, _WidgetBase) {
    return declare([_WidgetBase], {
      baseClass: 'scroll-pane'
    });
  }
);