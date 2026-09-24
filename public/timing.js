// Load-time readout for testing on a real phone. Only runs when the page is
// opened with ?timing in the address, e.g. .../las-margaritas/?timing
(function () {
  var marks = {};
  try {
    new PerformanceObserver(function (list) {
      list.getEntries().forEach(function (e) {
        if (e.name === "first-contentful-paint") marks.fcp = e.startTime;
      });
    }).observe({ type: "paint", buffered: true });
    new PerformanceObserver(function (list) {
      var e = list.getEntries();
      marks.lcp = e[e.length - 1].startTime;
    }).observe({ type: "largest-contentful-paint", buffered: true });
  } catch (err) {}
  if (document.fonts) document.fonts.ready.then(function () { marks.fonts = performance.now(); });

  function ms(v) { return v == null || isNaN(v) ? "—" : (v / 1000).toFixed(2) + " s"; }

  function show() {
    var n = performance.getEntriesByType("navigation")[0] || {};
    var c = navigator.connection || {};
    var rows = [
      ["Connected to server", n.connectEnd],
      ["First byte from server", n.responseStart],
      ["Page downloaded", n.responseEnd],
      ["Page first visible", marks.fcp],
      ["Main content drawn", marks.lcp],
      ["Fonts ready", marks.fonts],
      ["Buttons working", window.__lmReadyAt],
      ["Everything loaded", n.loadEventEnd],
    ];
    var box = document.createElement("div");
    box.setAttribute("role", "status");
    box.style.cssText =
      "position:fixed;left:12px;right:12px;bottom:12px;z-index:2147483647;max-width:420px;margin:0 auto;" +
      "background:#fff;color:#111;font:14px/1.45 -apple-system,system-ui,sans-serif;padding:14px 16px;" +
      "border-radius:14px;box-shadow:0 10px 40px rgba(0,0,0,.5)";
    box.innerHTML =
      "<strong>Load timing</strong> <span style='color:#666'>(from tapping the link)</span>" +
      "<table style='width:100%;margin-top:6px;border-collapse:collapse'>" +
      rows.map(function (r) {
        return "<tr><td>" + r[0] + "</td><td style='text-align:right;font-weight:600'>" + ms(r[1]) + "</td></tr>";
      }).join("") +
      "</table><div style='margin-top:6px;color:#666;font-size:12px'>" +
      (n.nextHopProtocol || "") +
      (c.effectiveType ? " · network " + c.effectiveType : "") +
      (c.rtt ? " · ping " + c.rtt + " ms" : "") +
      " · " + (n.transferSize != null ? Math.round(n.transferSize / 1024) + " KB page" : "") +
      "</div><button style='margin-top:8px;padding:6px 12px;border-radius:8px;border:1px solid #ccc;background:#f5f5f5;font:inherit'>Close</button>";
    box.querySelector("button").onclick = function () { box.remove(); };
    document.body.appendChild(box);
  }

  function whenDone() {
    var n = performance.getEntriesByType("navigation")[0];
    if (n && n.loadEventEnd > 0) setTimeout(show, 1500);
    else setTimeout(whenDone, 250);
  }
  if (document.readyState === "complete") whenDone();
  else addEventListener("load", whenDone);
})();
