function solve(path) {
  const regex = /([^\\]+)\.([^.]+)$/;
  const match = path.match(regex);

  if (match) {
    const fileName = match[1];
    const fileExtension = match[2];

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
  } else {
    console.log('Invalid path');
  }
  //   let pathParts = path.split('\\');
  //   let fileWithExtension = pathParts[pathParts.length - 1];

  //   let lastDotIndex = fileWithExtension.lastIndexOf('.');

  //   let fileName = fileWithExtension.slice(0, lastDotIndex);
  //   let еxtension = fileWithExtension.slice(lastDotIndex + 1);
  //     console.log(`File name: ${fileName}`);
  //     console.log(`File extension: ${еxtension}`);
}
solve('C:\\desktop\\academy\\template.pptx');
console.log(`-------`);
solve('C:\\Projects\\website.folder\\file.name.js');
