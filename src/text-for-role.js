const textForRole = (roles, textLines) => {
    let result = ''
    let phrases = textLines.split('\n')
    let numberOfNewLineSymbols = 2

    roles.forEach(role => {
        result += `\n\n${role}:`
        phrases.forEach((phrase, phraseIndex) => {
            let regExp = new RegExp(`^${role}:`)
            if (regExp.test(phrase)) {
                phrase = phrase.replace(`${role}:`, '')
                result += `\n${phraseIndex + 1})${phrase}`
            }
        })

    })
    return result.slice(numberOfNewLineSymbols)
}

module.exports = textForRole;