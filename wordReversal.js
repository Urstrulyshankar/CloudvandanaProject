function reverseWords() {
    let inputSentence = prompt("Enter a sentence to reverse:");

    if (!inputSentence || inputSentence.trim() === "") {
        alert("Please enter a sentence!");
        return;
    }

    let words = inputSentence.split(' ');

    let reversedWords = words.map(word => {
        let punctuation = '';
        if (/[,.;!?]$/.test(word)) {
            punctuation = word.slice(-1);
            word = word.slice(0, -1);
        }

        return punctuation + word.split('').reverse().join('');
    });

    let reversedSentence = reversedWords.join(' ');

    alert("Reversed: " + reversedSentence);
}

reverseWords();
