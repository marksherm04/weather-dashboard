:root {
    --primary: #ccdad1;
    --secondary: #9caea9;
    --tertiary: #788585;
    --light-dark: #6f6866;
    --dark: #38302e;
    --border-radius: .3rem;
  }
* {
    box-sizing: border-box;
}

  body {
    background-color: var(--primary);
    margin: 0;
    padding: 0;
    font-family: "IBM Plex Sans", sans-serif;
    color: var(--dark);
    line-height: 1.5;
    font-size: 16px;
  }

.header-title {
    font-size: 3rem;
    background-color: var(--primary);
    color: var(--dark);
    padding: 0 10px;
    display: inline-block;
    border-radius: var(--border-radius);
    box-shadow: 6px 5px var(--light-dark);
  }