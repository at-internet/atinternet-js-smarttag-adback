window.ATInternet = window.ATInternet || {};
window.ATInternet.Callbacks = window.ATInternet.Callbacks || {};
window.ATInternet.Callbacks.Adback = window.ATInternet.Callbacks.Adback || function(tag) {
  tag.onTrigger("Tracker:Hit:Sent:Error", (trigger, data) => {
    var hitAt = data.details.hit;
    var configSecure = tag.getConfig("secure");
    var protocolSecure = document.location.protocol === "https:";
    var isSecure = configSecure || protocolSecure;
    var protocol = "";
    if (hitAt.indexOf("http") != 0) { protocol = isSecure ? "https:" : "http:"; }
    hitAt = protocol + hitAt;
    window.parent[window.parent.document.getElementById("adback_data").getAttribute("data-adback")].API().sendATInternetPixel(hitAt);
  });
};
window.ATInternet.Utils = window.ATInternet.Utils || {dispatchCallbackEvent: function() {}};
window.ATInternet.Utils.dispatchCallbackEvent("Adback");