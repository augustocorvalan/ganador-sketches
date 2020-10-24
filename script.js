const Body = u('body')







var shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}



function getSeedWords() {
  const SEED_WORDS = [
    "carne",
    "carne",
    "ganado",
    "ganador",
    "gains",
    "cattle",
    "meat",
    "flesh",
  ]
  return SEED_WORDS
}


function getHybridWord(arr) {
  const part1 = pick(arr)
  const part2 = pick(arr)
  return `${part1}-${part2}`
}

function getHybridWords(n=3, arr=[]) {
  const words = []
  for (var i=0; i<n; i++) {
    words.push(getHybridWord(arr))
  }
  return words
}

function getStringArray(n=3, str=" ") {
  return new Array(n).fill(str);
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
    // 1. get seed words
    seedWords = getSeedWords()
   // X. Add gaps to seed words
    seedWords = seedWords.concat(getStringArray(3, " "))
    // X. Add hybrid-words
    seedWords = seedWords.concat(getHybridWords(3, seedWords))
    // X. Shuffle array
    shuffle(seedWords)
    // X. Pick one word
    singleSeedWord = seedWords[0]

    // Render- once
    // draw()
    // Render- in an interval
    setInterval(draw, getInterval())
  }
  
  function draw() {
    // 1. seed word
    const TextElement = createTextElement(singleSeedWord, 'seed-word')
    // Body.append(TextElement)
    
    // 2. Many seed elements
    const SeedElements = (word) => createTextElement(word, 'seed-word')
    // Body.append(SeedElements, seedWords)
    
    // 3. One element at a time
    if (seedWords) {
      const NewSeedElement = createTextElement(seedWords.pop(), 'seed-word')
      Body.append(NewSeedElement, seedWords)
    }
  }
  

  change()
}


init()
