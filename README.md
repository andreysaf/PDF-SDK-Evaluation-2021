# Do not download your PDF
## A story of digital document usability and security in your application

Users like to leave some of the requirements till the last minute and as such I put together a guide with samples that outlines several PDF libraries that could save you some time. 

### I need to support PDFs within my app, how do I do that?

#### We could let people download or open a PDF in a new tab

- We cannot control or enforce any retention policies on the file
- If the document has sensitive information, PDF security alone would not be sufficient (PDF encryption, and PDF do not print flags, content copy, extraction)
- Rendering of the content could be different across viewers
- Comments or annotations will not be shown

#### We could implement our own viewer

- You can start by reading PDF Specification or ISO 32000-2:2020 with 986 pages
- The most easiest approach is image based rendering, quality is affected
- Cannot account for all corner cases and poorly generated PDFs
- How much of the spec needs to implemented?
- Do you have resources to support it after the project is done?

#### We could leverage an existing viewer out there

- Consistent rendering across browsers
- Customization might be tricky
- Depending on the underlying rendering engine (PDF.js, PDFium) not all parts of PDF Specification are implemented

### Let's evaluate a few viewers

#### React-PDF

[React PDF](https://www.npmjs.com/package/react-pdf) is one of the more popular libraries out there. It leverages [PDF.js](https://mozilla.github.io/pdf.js/) under the hood and provides a ready to go components like `Document` or `Page`. 

##### Installation

Documentation is available through [npm](https://www.npmjs.com/package/react-pdf) and [GitHub](https://github.com/wojtekmaj/react-pdf).

`npm i react-pdf`

For some reason, after trying to load my files, I was faced with `Failed to load PDF file`. Checking the console did not yield anything fruitful. Reading documentation further, it seems like I have to host my `PDF.js` worker elsewhere and it is not as simple plug-n-play. After some time, I was able to get started and render out first page! 

However, the text layer was off. At first, it is easy to think you are bad at CSS, but after a quick search seems like an [issue](https://github.com/wojtekmaj/react-pdf/issues/332) from 2019. @nikonet saved the day with his [fix](https://github.com/wojtekmaj/react-pdf/issues/332#issuecomment-458121654). Not an official fix, but oh well. 

Pros
+ an impressive project by [Wojciech Maj](https://wojtekmaj.pl/)
+ simple enough to get started
+ frequent commits and updates

Cons
- no UI
- a lot of common issues or gotchas that are not mentioned in docs or resolved in issues
- still plagued by a lot of issues coming from PDF.js side, for example, when trying to select text

#### PDF.js Express

[PDF.js Express](https://pdfjs.express/) is a new player that provides an out of the box UI and annotation support on top of `PDF.js` rendering. 

##### Installation



#### PDFTron WebViewer



