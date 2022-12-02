#!/bin/bash

# This Bash script uses a heredoc statement to create an HTML page.
# The HTML page makes it easier to install the bookmarklet by drag and dropping
# a big link in your favorites bar.
#
# Using an onclick attribute, the user cannot accidentally click on it.

cat << EOF
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>RGAA Tool</title>
    <style>
      body {
        display: grid;
        justify-content: center;
        font-family: sans-serif;
        font-weight: bold;
      }

      a {
        display: grid;
        justify-content: center;
        width: 50%;
        text-decoration: none;
        color: #17a2b8;
        background: transparent;
        border: 1px solid #17a2b8;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: alias;
        text-align: center;
      }

      a:hover {
        background: #17a2b8;
        color: white;
      }

      a:active {
        background: #04404a;
      }

      a::before {
        content: "🤚 ";
        font-size: 400%;
      }

      a::after {
        display: inline-block;
        content: "Déplacez-moi dans votre barre de favoris";
        margin-top: 0.5rem;
        font-size: 90%;
        font-weight: normal;
      }

      a:hover::before {
        color: white;
      }
    </style>
  </head>
  <body>
    <a onclick="return false"
       href="javascript:(function(){$(cat rgaa-tool.bookmarklet)})()">
      RGAA Tool
    </a>
  </body>
</html>
EOF
