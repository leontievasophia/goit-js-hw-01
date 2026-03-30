function getElementWidth(content, padding, border){
    const intContent=Number.parseInt(content);
    const intPadding=Number.parseInt(padding);
    const intBorder=Number.parseInt(border);

    return intContent+2*(intPadding+intBorder);

}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
