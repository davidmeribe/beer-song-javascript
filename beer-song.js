class BeerSong {
  constructor() {
      this.startVerse = 99;
      this.endVerse = 0;
    } 

  sing(start, end) {
    let song = '';
    if (!start && !end) {
       // sing all verses
          start = 99;
          end = 0;
    } else if (start && !end) {
            // sing from start to 0
             end = 0;
    }
    // else start & end is already set, continue song logic
    for (let i = start; i >= end; i--) {
         song += this.buildVerse(i);
    }
    return song;
  }

  verse(verseNum) {
    return this.buildVerse(verseNum);
  }

  buildVerse(verseNum) {
   if (verseNum == 0){
       return ('No more bottles of beer on the wall, no more bottles of beer.\n' +
              'Go to the store and buy some more, 99 bottles of beer on the wall. \n');
   }else{
       return (
        verseNum + ' bottles of beer on the wall,' + verseNum + ' bottles of beer.\n'
        + 'Take one down and pass it around,' + (verseNum - 1) + ' bottles of beer on the wall.\n'
       );
   }
  }
}

export default BeerSong;
