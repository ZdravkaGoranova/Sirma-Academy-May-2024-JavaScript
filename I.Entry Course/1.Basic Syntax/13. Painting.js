function painting(num) {
    let yellow = num;
    let red = num / 4;
    let white = num * 2;
    let total = yellow + red + white;

    console.log(`Red: ${red}`);
    console.log(`Yellow: ${yellow}`);
    console.log(`White: ${white}`);
    console.log(`Total: ${total}`);
    console.log("----------------");
}
painting(10);
painting(17);
painting(42);