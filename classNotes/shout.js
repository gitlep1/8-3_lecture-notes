function shout (word) {
  for (i = 2; i < word.length; i++) {
    console.log(word[i].toUpperCase().concat(' ', word[i+=1].toUpperCase()))
  }
}

shout(process.argv)