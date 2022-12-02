(function (d, w) {
    function fwCurrentScript(e) {
        if (!e) {
            var scripts = d.getElementsByTagName('script');
            for (var i = scripts.length - 1; i >= 0; i--) {
                if (scripts[i].getAttribute("data-fw-param")) return scripts[i];
            }
        } else if (e.nodeName.toLowerCase() == 'script' && e.getAttribute("data-fw-param")) {
            return e;
        } else {
            return fwCurrentScript(e.lastChild);
        }
    }

    var fwScript = d.currentScript || fwCurrentScript(d);
    var fwparam = fwScript.getAttribute("data-fw-param");
    var preloader_text = fwScript.getAttribute("preloader-text");
    preloader_text = preloader_text ? 'preloader-text=\"' + preloader_text + "\"" : "";
    var i = 'fw-iframe' + Math.floor(Math.random() * 9999999999);
    d.write(
        '\x3cdiv class=\'fw-block\' style="position:relative;width:100%;">'
        + '\x3ciframe id="' + i + '" name="' + i + '" title="fw-iframe" style="position:relative;min-width:150px;min-height:150px;width:50%" class="fw-iframe" scrolling="no" frameborder="0" data-fw-params="' + fwparam + '"' + preloader_text + '">\x3c/iframe>'
        + '\x3cdiv id=\'preview-back\' style="position:absolute;top:0px;left:0px;"> \x3cimg id=\'preview-back-image\' class=\'fw-preview-button\' onclick="onClickBack(this, \'' + i + '\', \'' + fwparam + '\')"/> \x3c/div>'
        + '\x3cstyle> .fw-preview-button{cursor: pointer;height: 64px;opacity: 0;visibility: hidden;transition: visibility 1s linear, opacity 1s linear;} .fw-preview-button.active{opacity: 0.2;visibility: visible;transition-delay: 1s;}.fw-preview-button:hover {opacity: 0.4;} \x3c/style>'
        + '\x3cscript> function onClickBack(self,iframeid,id){var iframe=this.document.getElementById(iframeid);if(iframe){iframe.src=(\'https:\'==location.protocol?\'https:\':\'http:\')+\'//feed.mikle.com/widget/v2/\'+id+\'?id=\'+iframeid;} self.setAttribute("class","fw-preview-button");}\x3c/script>'
        + '\x3c/div>'
    );

    var f = d.getElementById(i).contentWindow.document;
    f.open().write('<body onload="'
        + 'window.fwIframeId=\'' + i + '\';'
        + 'document.body.appendChild(document.createElement(\'script\')).src =\'https://feed.mikle.com/js/fw-widget.js?v=1.0\';'
        + '">');
    f.close();

}(document, window));