const styles = `
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
`
function getStyles() {
  const style = document.createElement("style")
  style.innerText = styles.replace("\n", " ").replace("<br>", " ")

  return style
}