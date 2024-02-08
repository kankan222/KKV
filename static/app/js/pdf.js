// window.html2canvas = html2canvas;
// window.jsPDF = window.jspdf.jsPDF

const htmlContent = `<h1 style="color: red;">PDF Print Example</h1>
      <p>This is an example of printing a PDF from HTML and CSS.</p>
      <img src="http://localhost:3000/static/app/img/moon.jpg">
`;

// var doc = new jsPDF({
//   orientation: 'landscape',
//   unit: 'in',
//   format: [4, 2]
// });  
// doc.setFont('Arial');
// const html = document.createElement('div')
// html.innerHTML = htmlContent;
// doc.html(html, {
//    callback: function (doc) {
//      doc.save();
//    }
// });
const html = document.createElement('div')
// html.innerHTML = htmlContent;
// html2pdf()
// .from(html)
// .save();

// doc.fromHTML(htmlContent, 15, 15);
