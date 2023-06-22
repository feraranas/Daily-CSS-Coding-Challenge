// Add event listener to each menu item
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    } else {
      menuItems.forEach((item) => { item.classList.remove('active'); })
      item.classList.add('active');
    }
  });
});

addEventListener("DOMContentLoaded", function() {
  const divAlbumSlider = document.getElementById('AlbumSliderId');
  divAlbumSliderChildCount = divAlbumSlider.childElementCount;
  const sliderWidth = divAlbumSliderChildCount * 100;
  const sliderWidthString = sliderWidth.toString();
  console.log(sliderWidthString);
  // Update the style properties
  divAlbumSlider.style.width = sliderWidthString + '%';
})

// Add event listener to each footer item
const footerItems = document.querySelectorAll('.footer-item');
footerItems.forEach((item) => {item.addEventListener('click', () => {
                      if (item.classList.contains('active')) {
                        item.classList.remove('active');
                      } else {
                        footerItems.forEach(
                            (item) => { item.classList.remove('active'); })
                        item.classList.add('active');
                      }
                    })})