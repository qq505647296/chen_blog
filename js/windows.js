<script type="text/javascript">
    var OriginTitile = document.title,
        st;
    document.addEventListener("visibilitychange", function () {
        document.hidden ? (document.title = "记得回来黄麓204~", clearTimeout(st)) : (document.title =
            "你已进入黄麓204，前方高能！", st = setTimeout(function () {
                document.title = OriginTitile
            }, 3e3))
    })
</script> 