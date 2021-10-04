class BeerSong {
  constructor() {
      this.startVerse = 99;
      this.endVerse = 0;
    } 

  static sing(start = 99, end =0) {
    let song = [];
    // else start & end is already set, continue song logic
    for (let i = start; i >= end; i--) {
        song.push(this.verse(i));
    }
    //console.log(song);
    return song.join('\n');
  }

  static verse(verseNum) {
    if (verseNum == 0){
        return ('No more bottles of beer on the wall, no more bottles of beer.\n' +
               'Go to the store and buy some more, 99 bottles of beer on the wall.\n');
    }else if (verseNum == 1){
        return ('1 bottle of beer on the wall, 1 bottle of beer.\n' +
     'Take it down and pass it around, no more bottles of beer on the wall.\n');
    }
    else if (verseNum == 2){
     return ('2 bottles of beer on the wall, 2 bottles of beer.\n' +
     'Take one down and pass it around, 1 bottle of beer on the wall.\n');
    }
    else{
        return (
         verseNum + ' bottles of beer on the wall, ' + verseNum + ' bottles of beer.\n'
         + 'Take one down and pass it around, ' + (verseNum - 1) + ' bottles of beer on the wall.\n'
        );
    }
  }

}

export default BeerSong;

// for (let i = start; i >= end; i--) {
//   song += this.verse(i);
//   //console.log(this.buildVerse(i));
// }