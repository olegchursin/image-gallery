document.addEventListener("DOMContentLoaded", function() {
  // Gallery elements
  const grid = document.querySelector("#grid");
  let pageNum = 1;
  const prev = document.querySelector('#prev');
  const next = document.querySelector('#next');
  const current = document.querySelector('#current');
  current.innerText = `Page: ${pageNum} of 5`;

  // Modal elements
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById("modal-content-img");
  const close = document.getElementById("close");

  function getImages() {
    if (pageNum === 1) {
        prev.style.visibility = "hidden";
    } else {
        prev.style.visibility = "visible";
    };
    if (pageNum === 5) {
        next.style.visibility = "hidden";
    } else {
        next.style.visibility = "visible";
    };
    let grid = document.querySelector('#grid');
    grid.innerText = '';
    Adapter.getImages(pageNum).then(imgArr => {
      imgArr.forEach(imgObj => {
        renderImg(imgObj);
      })
    })
  };

  // Render individual images
  function renderImg(img) {
    // console.log('imgObj', img) // works
    let imgDiv = document.createElement('div');
    let imgTag = document.createElement('img');
    imgDiv.className = 'item';
    imgTag.src = img.urls.small;
    imgTag.addEventListener('click', function(){
      modal.style.display = "block";
      console.log('this', this)
      modalImg.src = this.src;
    })
    imgDiv.append(imgTag);
    grid.append(imgDiv);
  };

  // Pagination
  prev.addEventListener('click', function(){
    if (pageNum > 1) {
      pageNum--;
      current.innerText = `Page: ${pageNum} of 5`;;
      getImages();
    }
  });
  next.addEventListener('click', function(){
    if (pageNum < 5) {
      pageNum++;
      current.innerText = `Page: ${pageNum} of 5`;;
      getImages();
    }
  });

  // Close modal
  close.onclick = function() {
    modal.style.display = "none";
  }

  getImages();
});
