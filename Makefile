functions = src/getFigCaption.js src/createDataThumbnail.js src/extractImages.js src/createPopup.js src/removeLineReturn.js src/getText.js src/style.css.js src/isHidden.js src/extractLinks.js src/extractHeadings.js src/main.js

rgaa-tool.html: rgaa-tool.template.bash rgaa-tool.bookmarklet
	bash rgaa-tool.template.bash > rgaa-tool.html

rgaa-tool.js: $(functions)
	uglifyjs $(functions) > rgaa-tool.js

rgaa-tool.bookmarklet: to-url.py rgaa-tool.js
	python3 ./to-url.py < rgaa-tool.js > rgaa-tool.bookmarklet

clean:
	rm -f rgaa-tool.js rgaa-tool.bookmarklet rgaa-tool.html
