!function (a) {
    var e,
        n = '<svg><symbol id="icon-favorites" viewBox="0 0 1024 1024"><path d="M484.266667 272.021333l6.634666 6.72c5.973333 5.973333 13.013333 12.842667 21.098667 20.629334l9.194667-8.917334c7.253333-7.04 13.44-13.184 18.56-18.432a193.28 193.28 0 0 1 277.44 0c75.904 77.525333 76.629333 202.794667 2.133333 281.194667L512 853.333333 204.672 553.237333c-74.474667-78.421333-73.770667-203.690667 2.133333-281.216a193.28 193.28 0 0 1 277.44 0z m293.162666 232.149334c46.272-53.76 44.181333-136.149333-5.973333-187.370667a129.28 129.28 0 0 0-185.984 0l-15.125333 15.104a1687.253333 1687.253333 0 0 1-4.394667 4.309333L512 388.181333l-49.28-47.445333-13.226667-12.928-10.965333-11.008a129.28 129.28 0 0 0-186.005333 0c-51.456 52.565333-52.309333 137.962667-2.197334 191.573333L512 763.882667l261.674667-255.530667 3.754666-4.181333z"  ></path></symbol><symbol id="icon-ashbin-fill" viewBox="0 0 1024 1024"><path d="M416 394.645333l0.298667 318.506667h64l-0.298667-318.506667h53.013333L533.333333 713.152h64l-0.32-318.506667h135.424L704.426667 792.64a64 64 0 0 1-63.829334 59.498667H368.768a64 64 0 0 1-63.829333-59.52L276.885333 394.666667l139.114667-0.021334zM181.333333 288h640v64h-640v-64z m453.482667-106.666667v64h-256v-64h256z"  ></path></symbol><symbol id="icon-favorites-fill" viewBox="0 0 1024 1024"><path d="M484.266667 272.021333l6.634666 6.72c5.973333 5.973333 13.013333 12.842667 21.098667 20.629334l9.194667-8.917334c7.253333-7.04 13.44-13.184 18.56-18.432a193.28 193.28 0 0 1 277.44 0c75.904 77.525333 76.629333 202.794667 2.133333 281.194667L512 853.333333 204.672 553.237333c-74.474667-78.421333-73.770667-203.690667 2.133333-281.216a193.28 193.28 0 0 1 277.44 0z"  ></path></symbol></svg>',
        t = (e = document.getElementsByTagName("script"))[e.length - 1].getAttribute("data-injectcss");
    if (t && !a.__iconfont__svg__cssinject__) {
        a.__iconfont__svg__cssinject__ = !0;
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
        } catch (e) {
            console && console.log(e)
        }
    }
    !function (e) {
        if (document.addEventListener) if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(e, 0); else {
            var t = function () {
                document.removeEventListener("DOMContentLoaded", t, !1), e()
            };
            document.addEventListener("DOMContentLoaded", t, !1)
        } else document.attachEvent && (o = e, i = a.document, l = !1, (c = function () {
            try {
                i.documentElement.doScroll("left")
            } catch (e) {
                return void setTimeout(c, 50)
            }
            n()
        })(), i.onreadystatechange = function () {
            "complete" == i.readyState && (i.onreadystatechange = null, n())
        });

        function n() {
            l || (l = !0, o())
        }

        var o, i, l, c
    }(function () {
        var e, t;
        (e = document.createElement("div")).innerHTML = n, n = null, (t = e.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", function (e, t) {
            t.firstChild ? function (e, t) {
                t.parentNode.insertBefore(e, t)
            }(e, t.firstChild) : t.appendChild(e)
        }(t, document.body))
    })
}(window);
