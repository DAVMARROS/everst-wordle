export const saveWords = () =>
  fetch('./words.txt')
    .then((response) => response.text())
    .then((textContent) => {
      const words = textContent.split('\n').filter((word) => word.length == 5)
      localStorage.setItem('dictionary', JSON.stringify(words))
      localStorage.setItem('readed', 'true')
      getWord(false)
    })

export const getWord = (reload = true) => {
  const wordsJson = localStorage.getItem('dictionary')
  if (wordsJson) {
    const dictionary = JSON.parse(wordsJson)
    const word = dictionary[Math.floor(Math.random() * dictionary.length)]
    localStorage.setItem(
      'currentWord',
      word.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
    )
    localStorage.setItem(
      'dictionary',
      JSON.stringify(dictionary.filter((item: string) => item != word)),
    )
    localStorage.setItem('attempts', JSON.stringify([]))
    localStorage.setItem('finished', 'false')
    localStorage.setItem('loss', 'false')
    if (reload) {
      window.location.reload()
    }
  }
}

export const updateStatistics = (key: string) => {
  const value = localStorage.getItem(key)
  if (value) {
    localStorage.setItem(key, (parseInt(value) + 1).toString())
    localStorage.setItem('finished', 'true')
  }
}
