from urllib.parse import quote
from sys import stdin, stdout
from cssmin import cssmin
from re import sub

def import_css(m):
    return cssmin(open(m.group(1)).read())

source = stdin.read()
source = sub(r"\[\[\[CSS:([a-zA-Z0-9./_-]*)\]\]\]", import_css, source)
stdout.write(quote(source, safe="(){},=![]"))
