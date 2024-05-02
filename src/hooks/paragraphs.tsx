function divideTextInParagraphs(text, charsPerLine = 100, linesPerParagraph = 6) {
    const maxChars = charsPerLine * linesPerParagraph;
    const words = text.split(' ');
    let currentLength = 0;
    let paragraph = '';
    const paragraphs: string[] = [];

    words.forEach(word => {
        if (currentLength + word.length + 1 > maxChars) {
            paragraphs.push(paragraph);
            paragraph = '';
            currentLength = 0;
        }
        paragraph += word + ' ';
        currentLength += word.length + 1;
    });

    if (paragraph) {
        paragraphs.push(paragraph);
    }

    return paragraphs;
}