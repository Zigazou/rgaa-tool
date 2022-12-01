include functions.mk

rgaa-tool.html: rgaa-tool.template.bash rgaa-tool.bookmarklet
	bash rgaa-tool.template.bash > rgaa-tool.html

rgaa-tool.js: functions.mk $(functions)
	uglifyjs $(functions) > rgaa-tool.js

rgaa-tool.bookmarklet: to-url.py rgaa-tool.js
	python3 ./to-url.py < rgaa-tool.js > rgaa-tool.bookmarklet

clean:
	rm -f rgaa-tool.js rgaa-tool.bookmarklet rgaa-tool.html
