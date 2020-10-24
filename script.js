const Body = u('body')

function getSeedWords() {
  const SEED_WORDS = [
    "carne"
  ]
  return SEED_WORDS
}

function createTextElement(text, classes="text-element") {
    const textElement = u('<p>').addClass(classes).text(text)
    return textElement
}

function getInterval() {
  const INTERVAL = 1000
  return INTERVAL
}

function init() {
  let singleSeedWord = ''
  let seedWords = []
  
  function change() {
    seedWords = getSeedWords()
    singleSeedWord = seedWords[0]
    
    draw()
  }
  
  function draw() {
    const TextElement = createTextElement(singleSeedWord, 'seed-word')  
    Body.append(TextElement)
  }
  

  change()
}


init()
