window.womYtStop = function () {
  var d = document.getElementById('womYtDock'),
      h = document.getElementById('womYtHost');
  if (d) d.classList.remove('active');
  if (h) h.innerHTML = '';
  document.querySelectorAll('.yt-play-btn').forEach(function (x) {
    x.classList.remove('playing');
    x.textContent = '▶';
  });
};

window.womYtPlay = function (b) {
  var d = document.getElementById('womYtDock'),
      h = document.getElementById('womYtHost'),
      t = document.getElementById('womYtTitle'),
      e = document.getElementById('womYtExt'),
      v = b.getAttribute('data-vid'),
      a = b.classList.contains('playing'),
      o = (location.origin && location.origin !== 'null')
        ? '&origin=' + encodeURIComponent(location.origin)
        : '';

  window.womYtStop();
  if (a) return;

  b.classList.add('playing');
  b.textContent = '❚❚';
  if (t) t.textContent = b.getAttribute('data-title') || 'YouTube';
  if (e) e.href = 'https://www.youtube.com/watch?v=' + v;
  if (d) d.classList.add('active');
  if (h) {
    h.innerHTML =
      '<iframe width="260" height="200" src="https://www.youtube.com/embed/' +
      v +
      '?autoplay=1&playsinline=1&rel=0' +
      o +
      '" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share" allowfullscreen></iframe>';
  }
};