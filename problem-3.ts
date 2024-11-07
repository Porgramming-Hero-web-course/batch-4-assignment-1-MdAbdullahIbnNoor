// Problem 3:
// Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

{
    const countWordOccurrences = (sentence: string, word: string): number => {
        let occurrencesNo: number = 0

        let lowerCaseSentence = sentence.toLowerCase()
        let wordToMatch = word.toLowerCase()

        let sentenceArray = lowerCaseSentence.split(/\W+/)

        sentenceArray.forEach(item => {
            if (item === wordToMatch) {
                occurrencesNo++
            }
        })

        return occurrencesNo

    }

    console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));

}