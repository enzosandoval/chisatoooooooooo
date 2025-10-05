// Lista de videos
const videos = [
  {
    title: "Chisato Moritaka　get smile",
    description: "Para mi el mejor en vivo de Chisato Moritaka.",
    youtubeId: "xklDO2P-VdE"
  },
  {
    title: "The Study Song",
    description: "El mejor tema de todos, asi dan ganas de ponerse a estudiar.",
    youtubeId: "cQ0iioDmgdQ"
  },
  {
    title: "森高千里 / LIVE ROCK ALIVE CONCERT TOUR '92 /わかりました (4K)",
    description: "Una canción medio rockera con ritmo contagioso.",
    youtubeId: "HA_sj6a8SVo"
  },
  {
    title: "「ザ・森高」ツアー1991.8.22 at 渋谷公会堂 'Sonogo no Watashi)' (その後の私 [森高コネクション], 'Me Afterwards'",
    description: "Es muy pegajosa esta canción jaja!.",
    youtubeId: "4K1AFIwXKAc"
  },
  {
    title: "森高千里 / アローン [Alone] (PV) (4K)",
    description: "💔...",
    youtubeId: "WgBujPcdpgI"
  },
  {
    title: "19 GROWING UP - 森高千里＆プリンセス・プリンセス",
    description: "Una de las canciones de Princess Princess interpretada por Chisato Moritaka, muy alegré aunque la letra es medio rara.",
    youtubeId: "yRXuiszOzvg"
  }
];

const videoContainer = document.getElementById("video-container");

videos.forEach(video => {
  const card = document.createElement("div");
  card.className = "video-card";

  card.innerHTML = `
    <iframe src="https://www.youtube.com/embed/${video.youtubeId}" allowfullscreen></iframe>
    <div class="video-info">
      <h3>${video.title}</h3>
      <p>${video.description}</p>
    </div>
  `;

  videoContainer.appendChild(card);
});

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.btn');
  if (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    });
  }
});

document.addEventListener('mousemove', (e) => {
  const star = document.createElement('div');
  star.className = 'star';
  star.innerText = '✶';
  star.style.left = `${e.clientX}px`;
  star.style.top = `${e.clientY}px`;
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 1000);
});

document.addEventListener('mousemove', (e) => {
  const trail = document.createElement('div');
  trail.className = 'blue-trail';
  trail.style.left = `${e.clientX}px`;
  trail.style.top = `${e.clientY}px`;
  document.body.appendChild(trail);
  setTimeout(() => trail.remove(), 600);
});
