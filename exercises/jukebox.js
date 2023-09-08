// * Design a musical jukebox using object-oriented principles
class Song {
  constructor(title, artist) {
    this.title = title
    this.artist = artist
  }

  play() {
    console.log(`Playing ${this.title} by ${this.artist}`)
  }
}

class Jukebox {
  constructor() {
    this.songs = []
  }

  addSong(song) {
    this.songs.push(song)
  }

  removeSong(song) {
    const index = this.songs.indexOf(song)
    this.songs.splice(index, 1)

    return index
  }

  playSong(song) {
    song.play()
  }

  playRandomSong() {
    const randomIndex = Math.floor(Math.random() * this.songs.length)
    const randomSong = this.songs[randomIndex]
    randomSong.play()
  }
}

let jukebox = new Jukebox()

let song1 = new Song('Always', 'Blink 182')
let song2 = new Song('I Miss You', 'Blink 182')

jukebox.addSong(song1)
jukebox.addSong(song2)

jukebox.playSong(song1) // Playing Always by Blink 182
jukebox.playRandomSong()

console.log(jukebox.removeSong(song1)) // 0
