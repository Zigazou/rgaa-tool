function getFigCaption(element){if(element.parentElement===null)return null;if(element.nodeName.toLowerCase()==="figcaption")return null;if(element.nodeName.toLowerCase()!=="figure"){return getFigCaption(element.parentElement)}const figCaption=element.querySelector("figcaption");if(figCaption===null)return null;return removeLineReturn(figCaption.innerText)}function convertSize(width,height,maxWidth,maxHeight){const rx=maxWidth/width;const ry=maxHeight/height;const ratio=Math.min(rx,ry);return[width*ratio,height*ratio]}function createDataThumbnail(src,maxWidth,maxHeight,callback){const image=new Image;image.crossOrigin="Anonymous";image.onload=function(){const canvas=document.createElement("canvas");const context=canvas.getContext("2d");const[width,height]=convertSize(this.naturalWidth,this.naturalHeight,maxWidth,maxHeight);canvas.width=width;canvas.height=height;context.drawImage(this,0,0,width,height);const dataURL=canvas.toDataURL("image/png");callback(dataURL,width,height)};image.src=src}function extractImages(){const elements=document.createDocumentFragment();const title=document.createElement("h1");title.innerText="Images";elements.appendChild(title);const table=document.createElement("table");table.classList.add("images-table");const images=document.querySelectorAll("img");for(let image of images){let row=document.createElement("tr");if(isHidden(image)){row.classList.add("is-hidden")}else{row.classList.add("is-visible")}let content=document.createElement("td");content.classList.add("image-content");let div=document.createElement("div");content.appendChild(div);createDataThumbnail(image.getAttribute("src"),150,150,(dataURL,width,height)=>{const thumbnail=document.createElement("img");thumbnail.setAttribute("src",dataURL);thumbnail.setAttribute("width",width);thumbnail.setAttribute("height",height);div.appendChild(thumbnail)});row.appendChild(content);let alt=document.createElement("td");alt.classList.add("image-alt");let altValue=image.getAttribute("alt");if(altValue===null){alt.innerText="❎"}else if(altValue.trim()===""){alt.innerText="empty alt";alt.classList.add("is-hidden")}else{alt.innerText=altValue}row.appendChild(alt);let figCaption=document.createElement("td");figCaption.classList.add("image-figcaption");let figCaptionValue=getFigCaption(image);if(figCaptionValue===null){figCaption.innerText="no figcaption";figCaption.classList.add("is-hidden")}else{figCaption.innerText=figCaptionValue}row.appendChild(figCaption);table.appendChild(row)}elements.appendChild(table);return elements}function createPopup(fragment,styles){const copyTab=window.open("","_blank","popup").document;copyTab.title="RGAA Tool";const encoding=document.createElement("meta");encoding.setAttribute("charset","UTF-8");copyTab.head.appendChild(encoding);copyTab.head.appendChild(styles);copyTab.body.appendChild(fragment);copyTab.close()}function removeLineReturn(string){if(string===null)return null;return string.replace(/( *(\r\n|\n|\r) *)+/gm,"\n").trim().replace(/(.)\n(.)/gm,"$1. $2")}function getText(element){const text=removeLineReturn(element.innerText);if(text)return text;const image=element.querySelector("img[alt]");if(image&&image.getAttribute("alt").trim()!==""){return"🖼 "+image.getAttribute("alt")}const title=removeLineReturn(element.getAttribute("title"));if(title)return"🆎";return"❎"}const styles=`
  :root {
    --stripes: repeating-linear-gradient(
      45deg,
      #fff,
      #fff 1em,
      #eee 1em,
      #eee 2em
    );

    --checker-color-1: gray;
    --checker-color-2: lightgray;
    --checker-size: 0.5em;
    --checker-gradient: linear-gradient(45deg, var(--checker-color-1) 25%, transparent 25%, transparent 75%, var(--checker-color-1) 75%);
  }

  body { font-family: sans-serif; }

  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6 {
    font-size: 1rem;
    font-weight: normal;
    color: black;
  }

  .h1.is-hidden,
  .h2.is-hidden,
  .h3.is-hidden,
  .h4.is-hidden,
  .h5.is-hidden,
  .h6.is-hidden {
    color: gray;
    background-color: #eee;
  }

  .h1::before,
  .h2::before,
  .h3::before,
  .h4::before,
  .h5::before,
  .h6::before {
    display: block;
    padding: 0 0 0.5rem 0;
    position: absolute;
    left: 0;
    margin-top: -0.15em;
    font-size: 150%;
  }

  .h1::before { content: "❶"; color: blue; }
  .h2::before { content: "❷"; color: green; }
  .h3::before { content: "❸"; color: orange; }
  .h4::before { content: "❹"; color: red; }
  .h5::before { content: "❺"; color: black; }
  .h6::before { content: "❻"; color: black; }

  .h1.is-hidden::before,
  .h2.is-hidden::before,
  .h3.is-hidden::before,
  .h4.is-hidden::before,
  .h5.is-hidden::before,
  .h6.is-hidden::before {
    color: gray;
    font-style: normal;
  }

  .links-table { border-collapse: collapse; }

  .links-table td {
    border: 1px solid gray;
    padding: 0.2rem 0.3rem;
  }

  td.link-href { font-size: 80%; }
  td.is-hidden {
    color: gray;
    font-style: italic;
  }

  .links-table { background: var(--stripes); }
  tr.is-visible { background-color: white; }
  tr.is-hidden {
    color: gray;
    background-color: transparent;
  }

  .images-table { border-collapse: collapse; }

  .images-table td {
    border: 1px solid gray;
    padding: 0.2rem 0.3rem;
  }

  .image-content>div {
    background-color: var(--checker-color-2);
    background-image: var(--checker-gradient), var(--checker-gradient);
    background-position: 0 0, var(--checker-size) var(--checker-size);
    background-size: calc(var(--checker-size) * 2) calc(var(--checker-size) * 2);
  }
`;function getStyles(){const style=document.createElement("style");style.innerText=styles.replace("\n"," ").replace("<br>"," ");return style}function isHidden(element){const styles=window.getComputedStyle(element);const hidden=styles.display==="none"||styles.visibility==="hidden";if(element.parentElement===null){return hidden}else if(!hidden){return isHidden(element.parentElement)}else{return true}}function extractLinks(){const elements=document.createDocumentFragment();const title=document.createElement("h1");title.innerText="Links";elements.appendChild(title);const links=document.getElementsByTagName("a");const table=document.createElement("table");table.classList.add("links-table");for(let link of links){if(link.href==="")continue;let row=document.createElement("tr");if(isHidden(link)){row.classList.add("is-hidden")}else{row.classList.add("is-visible")}let text=document.createElement("td");text.classList.add("link-text");text.innerText=getText(link);row.appendChild(text);let title=document.createElement("td");title.classList.add("link-title");if(link.title.trim()){title.innerText=link.title}else{title.innerText="no title";title.classList.add("is-hidden")}row.appendChild(title);let href=document.createElement("td");href.classList.add("link-href");href.innerText=link.href;row.appendChild(href);table.appendChild(row)}elements.appendChild(table);return elements}const levels={h1:0,h2:1,h3:2,h4:3,h5:4,h6:5};function buryInUL(level,element){if(!(level in levels))return element;let parent;for(let step=0;step<levels[level];step++){parent=document.createElement("ul");parent.appendChild(element);element=parent}return element}function extractHeadings(){const elements=document.createDocumentFragment();const title=document.createElement("h1");title.innerText="Headings";elements.appendChild(title);const headingElements=document.createElement("ul");headingElements.classList.add("heading-list");const headings=document.querySelectorAll("h1,h2,h3,h4,h5,h6");for(let heading of headings){let element=document.createElement("li");element.innerText=getText(heading);element=buryInUL(heading.nodeName.toLowerCase(),element);element.classList.add(heading.nodeName);if(isHidden(heading)){element.classList.add("is-hidden")}else{element.classList.add("is-visible")}headingElements.appendChild(element)}elements.appendChild(headingElements);return elements}function scrollSlowlyTillTheEnd(previous,delay,final){const current=window.pageYOffset;if(current===previous){final()}else{window.scrollBy(0,window.innerHeight);setTimeout(()=>{scrollSlowlyTillTheEnd(current,delay,final)},delay)}}window.scrollTo(0,0);scrollSlowlyTillTheEnd(-1,200,()=>{const elements=document.createDocumentFragment();elements.appendChild(extractLinks());elements.appendChild(extractHeadings());elements.appendChild(extractImages());createPopup(elements,getStyles());window.scrollTo(0,0)});
