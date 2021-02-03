# Do not download your PDF
## A story of digital document usability and security in your application

Users like to leave some of the requirements till the last minute and as such I put together a guide with samples that outlines several PDF libraries that could save you some time. 

### I need to support PDFs within my app, how do I do that?

- We could let people download or open a PDF in a new tab
- We could implement our own viewer
- We could leverage an existing viewer out there

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

#### PDF.js Express

#### PDFTron WebViewer



