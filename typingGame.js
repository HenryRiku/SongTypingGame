let songs = [
  { title : "タイトル1",
    viewLyricses:["かし１", "かし２"] },
  { title : "タイトル2",
    lyricses:["かし１"] },
  { title : "タイトル3",
    lyricses:["かし１", "かし２", "かし３"] },
]

window.onload =  () => {
  // 表示させる曲を設定する
  let currentSong = 0;
  // 表示させるhtmlタグのidを取得する
  let title = document.getElementById("titleLine");
  let lyrices = document.getElementById("lyricsLine");
  // 取得した位置に表示させる
  title.innerHTML = songs[currentSong].title;
  lyrices.innerHTML = songs[currentSong].viewLyricses[0];
}

let judge = () => {

}
