class ChristmasTree {
  constructor() {}

  generate(height) {
    let widthCounter = 1;
    let maxWidth = height * 2;
    let center = maxWidth / 2 + 1;

    document.write("<pre>");
    for (let i = 1; i <= height; i++) {
      let indent = height - i;

      // Print indent
      for (let j = 1; j <= indent; j++) {
        document.write("&nbsp");
      }
      // Print stars
      for (let j = 1; j <= widthCounter; j++) {
        if (i == 1) {
          document.write("<span id=top>*</span>");
        }
        else {
            document.write("<span>*</span>");
        }
      }

      // New Row of stars
      document.write("<br>");

      // Increase width for next row
      widthCounter = widthCounter + 2;
    }
    // Lower End of Tree
    for (let i = 0; i < widthCounter - 2; i++) {
      document.write("<span>-</span>");
    }

    document.write("<br>");

    // Trunk of Tree
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j <= center; j++) {
        if (j == center) {
          document.write('<span>"</span>');
          document.write("<br>");
        } else {
          document.write("&nbsp;");
        }
      }
    }
    document.write("</pre>");
  }
}
let tree = new ChristmasTree();
tree.generate(20);
