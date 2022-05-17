console.log("Welcome to Musify");

//Initilize the Variables
let songIndex = 0;
let audioElement = new Audio("/Music/KabhiTumhe.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Dariya",
    filePath: "/Music/Dariya.mp3",
    coverPath: "/Img/dariya.jpg",
  },
  {
    songName: "Tomar Chaya",
    filePath: "/Music/TomarChaya.mp3",
    coverPath: "/Img/tomar_chaya.jpg",
  },
  {
    songName: "Aami Sudhu Cheyechi Tomay",
    filePath: "/Music/AamiSudhuCheyechiTomay.mp3",
    coverPath: "/Img/aami_sudhu_cheyechi_tomay.jpg",
  },
  {
    songName: "Arcade X Mann Mera",
    filePath: "/Music/ArcadexMannMera.mp3",
    coverPath: "/Img/arcade_x_mann_mera.jpg",
  },
  {
    songName: "Bol Kaffara Kya Hoga",
    filePath: "/Music/BolKaffaraKyaHoga.mp3",
    coverPath: "/Img/Bol_kaffara_kya_hoga.jpg",
  },
  {
    songName: "Hosanna",
    filePath: "/Music/Hosanna.mp3",
    coverPath: "/Img/hosanna.jpg",
  },
  {
    songName: "Hum Na Rahein Hum",
    filePath: "/Music/HumNaaRaheinHum.mp3",
    coverPath: "/Img/hum_na_rahein_hum.jpg",
  },
  {
    songName: "Kabhii Tumhhe",
    filePath: "/Music/KabhiTumhe.mp3",
    coverPath: "/Img/kabhi_tumhe.jpeg",
  },
  {
    songName: "Ishq Mubarak",
    filePath: "/Music/IshqMubarak.mp3",
    coverPath: "/Img/ishq_mubarak.jpg",
  },
  {
    songName: "Khuda Bhi",
    filePath: "/Music/khudabhi.mp3",
    coverPath: "/Img/khuda_bhi.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play();

// Handle Play/Pause click

masterPlay.addEventListener("click", (i) => {
  console.log(i.target);
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  }
  else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      console.log(e.target);
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `/Music/${songIndex}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `/Music/${songIndex}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `/Music/${songIndex}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
