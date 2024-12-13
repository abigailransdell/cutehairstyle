const { getFile } = require("../api/utils");
const Footer = require("./footer");
const Head = require("./head");
const Main = require("./main");
const Navigation = require("./navigation");

const Layout = async (config) => {
  let injectBody = await getFile("inject_body.txt");
  return `<!DOCTYPE html>
<html>
<head>
${await Head(config)}
</head>
<center><ins data-ad-format="auto" class="adsbygoogle adsbygoogle-noablate" data-ad-client="ca-pub-5742205514321536" data-adsbygoogle-status="done" style="display: block; margin: 10px auto; background-color: transparent; height: 90px;" data-ad-status="filled"><div id="aswift_3_host" style="border: none; height: 90px; width: 1000px; margin: 0px; padding: 0px; position: relative; visibility: visible; background-color: transparent; display: inline-block; overflow: visible;"><iframe id="aswift_3" name="aswift_3" browsingtopics="true" style="left:0;position:absolute;top:0;border:0;width:1000px;height:90px;" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" width="1000" height="90" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" allow="attribution-reporting; run-ad-auction" src="https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-5742205514321536&amp;output=html&amp;h=90&amp;adk=4071697873&amp;adf=965144642&amp;pi=t.aa~a.310784647~rp.4&amp;w=1000&amp;abgtt=6&amp;fwrn=1&amp;fwrnh=100&amp;lmt=1731541267&amp;rafmt=1&amp;to=qs&amp;pwprc=9543146075&amp;format=1000x90&amp;url=https%3A%2F%2Flokerinfo.web.id%2F&amp;fwr=0&amp;fwrattr=false&amp;pra=3&amp;rpe=1&amp;resp_fmts=3&amp;wgl=1&amp;fa=40&amp;uach=WyJXaW5kb3dzIiwiMTUuMC4wIiwieDg2IiwiIiwiMTMwLjAuNjcyMy4xMTciLG51bGwsMCxudWxsLCI2NCIsW1siQ2hyb21pdW0iLCIxMzAuMC42NzIzLjExNyJdLFsiR29vZ2xlIENocm9tZSIsIjEzMC4wLjY3MjMuMTE3Il0sWyJOb3Q_QV9CcmFuZCIsIjk5LjAuMC4wIl1dLDBd&amp;dt=1731541267689&amp;bpp=1&amp;bdt=1872&amp;idt=-M&amp;shv=r20241107&amp;mjsv=m202411110101&amp;ptt=9&amp;saldr=aa&amp;abxe=1&amp;cookie_enabled=1&amp;eoidce=1&amp;prev_fmts=0x0&amp;nras=2&amp;correlator=2876145640803&amp;frm=20&amp;pv=1&amp;u_tz=480&amp;u_his=1&amp;u_h=720&amp;u_w=1280&amp;u_ah=672&amp;u_aw=1280&amp;u_cd=24&amp;u_sd=1.5&amp;dmc=4&amp;adx=132&amp;ady=1281&amp;biw=1263&amp;bih=551&amp;scr_x=0&amp;scr_y=0&amp;eid=44759875%2C44759926%2C42533202%2C31087701%2C31088770%2C95344187%2C31088814%2C95335246%2C95345967&amp;oid=2&amp;pvsid=3938732599727024&amp;tmod=744254286&amp;uas=0&amp;nvt=1&amp;fc=1920&amp;brdim=0%2C0%2C0%2C0%2C1280%2C0%2C1280%2C672%2C1280%2C551&amp;vis=1&amp;rsz=%7C%7Cs%7C&amp;abl=NS&amp;fu=128&amp;bc=31&amp;bz=1&amp;td=1&amp;tdf=2&amp;psd=W251bGwsbnVsbCxudWxsLDNd&amp;nt=1&amp;ifi=4&amp;uci=a!4&amp;btvi=1&amp;fsb=1&amp;dtd=10" data-google-container-id="a!4" tabindex="0" title="Advertisement" aria-label="Advertisement" data-google-query-id="CIqZ-PG92okDFZiKrAIdupcGNw" data-load-complete="true"></iframe></div></ins></center>
<body>
${Navigation(config)}
${await Main(config)}
${Footer(config)}
${injectBody}
</body>
</html>`;
};

module.exports = Layout;
