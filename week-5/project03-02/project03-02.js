/*    JavaScript 7th Edition
      Chapter 3
      Project 03-02

      Application to generate a slide gallery
      Author: Bernice Templeman
      Date: 02/10/2024

      Filename: project03-02.js
*/

let captions = new Array(14);
captions[0] = "International Space Station fourth expansion [2009]";
captions[1] = "Assembling the International Space Station [1998]";
captions[2] = "The Atlantis docks with the ISS [2001]";
captions[3] = "The Atlantis approaches the ISS [2000]";
captions[4] = "The Atlantis approaches the ISS [2000]";
captions[5] = "International Space Station over Earth [2002]";
captions[6] = "The International Space Station first expansion [2002]";
captions[7] = "Hurricane Ivan from the ISS [2008]";
captions[8] = "The Soyuz spacecraft approaches the ISS [2005]";
captions[9] = "The International Space Station from above [2006]";
captions[10] = "Maneuvering in space with the Canadarm2 [2006]";
captions[11] = "The International Space Station second expansion [2006]";
captions[12] = "The International Space Station third expansion [2007]";
captions[13] = "The ISS over the Ionian Sea [2007]";

let htmlCode = "";

for (i = 0; i < captions.length; i++) {
  // Formatted by Prettier
  // “Using the backtick character (`) creates a structure known as a template literal: Note however that both the text and the line return are part of the text string”
  // Carey, Patrick; Vodnik, Sasha. JavaScript for Web Warriors (p. 50). Course Technology Inc. Kindle Edition.
  //
  // With each iteration, add the following text to the value of the htmlCode variable
  //  htmlCode +=
  //  `<figure>
  //    <img alt='' src='slide` + i + `.jpg' />
  //    <figcaption>` + captions[i] + `</figcaption>
  //  </figure>
  //
  //  `;

  htmlCode +=
    `<figure>
    <img alt='' src='slide` +
    i +
    `.jpg' />
    <figcaption>` +
    captions[i] +
    `</figcaption>
  </figure>

  `;
}

//change the inner HTML of the document element by the id "gallery" to the value of the htmlCode variable
document.getElementById("gallery").innerHTML = htmlCode;
