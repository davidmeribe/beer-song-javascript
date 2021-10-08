class Drink{
     constructor(container='bottle', content='beer'){
       this.container = container;
       this.content = content;
     }

     chooseDrink(drink){
       this.content = drink;
     }
     chooseContainer(shell){
       this.container = shell;
     }
     containerName(num){
        if (num >=2){
          return `${this.container}s`
        }
        else if (num ==1){
          return `${this.container}`
        }
        else{
          return `${this.container}s`
        }
     }
}

class Phrase{
  static givePhrase(numOfCont, drink){
        if (numOfCont == 0){
          return `No more ${drink.container}s of ${drink.content} on the wall, no more ${drink.container}s of ${drink.content}.\n`+
                  `Go to the store and buy some more, 99 ${drink.container}s of ${drink.content} on the wall.\n`
        }
        else if(numOfCont == 1){
           return `${numOfCont} ${drink.container} of ${drink.content} on the wall, ${numOfCont} ${drink.container} of ${drink.content}.\n`+
                   `Take it down and pass it around, no more ${drink.container}s of ${drink.content} on the wall.\n`
        }
        else if(numOfCont == 2){
           return `${numOfCont} ${drink.container}s of ${drink.content} on the wall, ${numOfCont} ${drink.container}s of ${drink.content}.\n`+
                   `Take one down and pass it around, ${numOfCont-1} ${drink.container} of ${drink.content} on the wall.\n`
        }
        else{
          return (
            `${numOfCont} ${drink.container}s of ${drink.content} on the wall, ${numOfCont} ${drink.container}s of ${drink.content}.\n` +
            `Take one down and pass it around, ${numOfCont - 1} ${drink.container}s of ${drink.content} on the wall.\n`
           );
        } 
  }
}


class BeerSong {
  constructor(cont, drnk) {
      this.startVerse = 99;
      this.endVerse = 0;
      this.drink = new Drink(cont,drnk);
    } 

  sing(start = 99, end =0) {
    let song = [];
    // else start & end is already set, continue song logic
    for (let i = start; i >= end; i--) {
        song.push(this.verse(i));
    }
    //console.log(song);
    return song.join('\n');
  }
  
  verse(verseNum) {
    return Phrase.givePhrase(verseNum, this.drink);
  }
}

export default BeerSong;

// for (let i = start; i >= end; i--) {
//   song += this.verse(i);
//   //console.log(this.buildVerse(i));
// }