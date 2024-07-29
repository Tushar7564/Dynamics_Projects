var productImgs = document.querySelectorAll('.product-img--main');

productImgs.forEach(function (img) {
    var scale = img.getAttribute('data-scale');
    var imgDiv = document.createElement('div');
    imgDiv.classList.add('product-img--main__image');
    imgDiv.style.backgroundImage = 'url(' + img.getAttribute('data-image') + ')';
    img.appendChild(imgDiv);

    img.addEventListener('mouseover', function () {
        imgDiv.style.transform = 'scale(' + scale + ')';
    });

    img.addEventListener('mouseout', function () {
        imgDiv.style.transform = 'scale(1)';
    });

    img.addEventListener('mousemove', function (e) {
        var rect = img.getBoundingClientRect();
        var xPercent = ((e.pageX - rect.left) / rect.width) * 100;
        var yPercent = ((e.pageY - rect.top) / rect.height) * 100;
        imgDiv.style.transformOrigin = xPercent + '% ' + yPercent + '%';
    });
});

document.querySelector('.search-icon').addEventListener('click', function(event) {
    event.preventDefault();
    let quickView = document.querySelector('.quick-view');
    quickView.classList.toggle('visible');

    const imgContainer = document.querySelector('.imgContainer');
    const imgUrl = imgContainer.getAttribute('data-image');
    const imgTag = imgContainer.querySelector('img');
    const imgAlt = imgTag.getAttribute('alt');
    
    const quickViewimg = document.querySelector('.quick-view-img');
    const quickViewImgName = document.querySelector('.quick-view-imgName');

    const newimgTag = document.createElement('img');
    newimgTag.src = imgUrl;
    newimgTag.alt = 'Quick View Image';
    newimgTag.style.maxWidth = '100%';
    
    quickViewimg.innerHTML = '';
    quickViewimg.appendChild(newimgTag);

    quickViewImgName.textContent = imgAlt;

    document.body.classList.add('no-scroll');
})

document.querySelector('.quick-view-overlay').addEventListener('click', closeQuickView);
document.querySelector('.bi-x').addEventListener('click', closeQuickView);

document.querySelector('.bi-fullscreen').addEventListener('click', function() {
    toggleFullscreen(document.documentElement);
});

function closeQuickView() {
    document.querySelector('.quick-view').classList.remove('visible');
    document.body.classList.remove('no-scroll');
    if (document.fullscreenElement) {
        document.exitFullscreen();
        document.querySelector('.bi-fullscreen-exit').classList.replace('bi-fullscreen-exit', 'bi-fullscreen');
        document.querySelector('.quick-view-overlay').style.opacity = '0.7';
    }
}

function toggleFullscreen(element) {
    if (!document.fullscreenElement) {
        element.requestFullscreen().then(() => {
            document.querySelector('.quick-view-overlay').style.opacity = '1';
            document.querySelector('.bi-fullscreen').classList.replace('bi-fullscreen', 'bi-fullscreen-exit');
        }).catch(err => {
            console.error(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen().then(() => {
            document.querySelector('.quick-view-overlay').style.opacity = '0.7';
            document.querySelector('.bi-fullscreen-exit').classList.replace('bi-fullscreen-exit', 'bi-fullscreen');
        }).catch(err => {
            console.error(`Error attempting to disable fullscreen mode: ${err.message} (${err.name})`);
        });
    }
}