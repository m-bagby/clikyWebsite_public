const typeWord = async () => {
    const typedTextElement = document.getElementById("typedText");
    const untypedTextElement = document.getElementById("untypedText"); //using an element containing the text with hidden visibility will ensure no layout shift and responsiveness

    while (untypedTextElement.innerHTML.length > 0) {
        await typeLetter(typedTextElement, untypedTextElement);
    }

    document.getElementById("typingCursor").style.animation = "blink 1s infinite";
}


const typeLetter = async (textElement, untypedTextElement) => {
    const speed = Math.floor(Math.random() * (100 - 25 + 1) + 25);

    return new Promise(resolve => {
        setTimeout(() => {
            const untypedText = untypedTextElement.innerHTML;

            untypedTextElement.innerHTML = untypedText.substring(1);
            textElement.innerHTML += untypedText[0];
            resolve();
        }, speed);
    })
}


setTimeout(typeWord, 250);