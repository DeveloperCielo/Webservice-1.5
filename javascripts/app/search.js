!function(t){function e(){$("h1, h2").each(function(){var t=$(this),e=t.nextUntil("h1, h2");u.add({id:t.prop("id"),title:t.text(),body:e.text()})})}function n(){s=$(".content"),r=$(".dark-box"),c=$(".search-results"),$("#input-search").on("keyup",a)}function a(t){if(o(),c.addClass("visible"),27===t.keyCode&&(this.value=""),this.value){var e=u.search(this.value).filter(function(t){return t.score>1e-4});e.length?(c.empty(),$.each(e,function(t,e){c.append("<li><a href='#"+e.ref+"'>"+$("#"+e.ref).text()+"</a></li>")}),i.call(this)):(c.html("<li></li>"),$(".search-results li").text('No Results Found for "'+this.value+'"'))}else o(),c.removeClass("visible")}function i(){this.value&&s.highlight(this.value,l)}function o(){s.unhighlight(l)}var s,r,c,l=($(t),{element:"span",className:"search-highlight"}),u=new lunr.Index;u.ref("id"),u.field("title",{boost:10}),u.field("body"),u.pipeline.add(lunr.trimmer,lunr.stopWordFilter),$(e),$(n)}(window);