# This script should not be modified when changes are made to the list of
# files to be included in the bookmarklet. Only the functions.mk file needs
# to be modified.
include functions.mk

# Generate the HTML page for bookmarklet installation.
rgaa-tool.html: rgaa-tool.template.bash rgaa-tool.bookmarklet
	bash rgaa-tool.template.bash > rgaa-tool.html

# Generate and minify the JavaScript program.
rgaa-tool.js: functions.mk $(functions)
	uglifyjs $(functions) > rgaa-tool.js

# Convert the JavaScript program to a bookmarklet.
rgaa-tool.bookmarklet: to-url.py rgaa-tool.js
	python3 ./to-url.py < rgaa-tool.js > rgaa-tool.bookmarklet

# Clean files.
clean:
	rm -f rgaa-tool.js rgaa-tool.bookmarklet rgaa-tool.html
