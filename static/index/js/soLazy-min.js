(function(a) {
	a.fn.extend({
		soLazy: function(h) {
			h = a.extend({
				type: "scroll",
				imgTag: "srcPath",
				defHeight: 40,
				defDelay: 4000
			}, h || {});
			var b = a(this);
			var d = b.find("img"),
				f = h.imgTag;
			if (h.type == "scroll") {
				var c = function() {
						return document.documentElement.clientHeight + Math.max(document.documentElement.scrollTop, document.body.scrollTop) - h.defHeight
					};
				var g = function() {
						d.each(function() {
							if (a(this).offset().top <= c()) {
								var i = a(this).attr(f);
								if (i) {
									a(this).attr("src", i).removeAttr(f)
								}
							}
						})
					};
				g();
				a(window).bind("scroll", function() {
					g()
				})
			}
			if (h.type == "delay") {
				var e = setTimeout(function() {
					d.each(function() {
						var i = a(this).attr(f);
						if (i) {
							a(this).attr("src", i).removeAttr(f)
						}
					})
				}, h.defDelay)
			}
			return b
		}
	})
})(jQuery);