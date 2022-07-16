window.player = {
  cover: document.querySelector('.cartao-img'),
  title: document.querySelector('.conteudo-crt h5'),
  artist: document.querySelector('.artista'),
  audio: document.querySelector('audio'),
  audioData: audios,
  currentAudio: {},
  currentPlaying: 0,
  start() {
    this.update()
    this.audio.onended = () => this.next()
  },
  next() {
    this.currentPlaying++
    if (this.currentPlaying == this.audioData.length) this.restart()
    this.update()
  },
  update() {
    this.currentAudio = this.audioData[this.currentPlaying]
    this.cover.style.background = `url('${this.currentAudio.cover}') no-repeat center center / contain`
    this.title.innerText = this.currentAudio.title
    this.artist.innerText = this.currentAudio.artist
    this.audio.src = this.currentAudio.aud
  },
  restart() {
    this.currentPlaying = 0
    this.update()
  }
}
