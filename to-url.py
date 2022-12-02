"""
This script converts a JavaScript file to a bookmarklet (special bytes
are transformed into their %HH counterpart).

The JavaScript file may include a CSS file using a tag like:

    [[[CSS:css-file-path]]]

The CSS is minified before being included.

The script takes no argument: it reads the standard input ou writes to the
standard output.

It works in Python 3 and standard modules except for the `cssmin` module.

The `cssmin` module can be installed using `sudo apt install python3-cssmin`
(on Debian-like GCC-Linux OS).
"""
from urllib.parse import quote
from sys import stdin, stdout
from cssmin import cssmin
from re import sub

def import_css(m):
    return cssmin(open(m.group(1)).read())

source = stdin.read()
source = sub(r"\[\[\[CSS:([a-zA-Z0-9./_-]*)\]\]\]", import_css, source)
stdout.write(quote(source, safe="(){},=![]"))
