var DETAIL_IMAGE_SELECTOR = "[data-image-role=target]";
var DETAIL_TITLE_SELECTOR = "[data-image-role=title]";
var THUMBNAIL_LINK_SELECTOR = "[data-image-role=trigger]";
var current = 0;

function setDetails(imageUrl, titleText) {
  "use strict";
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute("src", imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-url");
}

function titleFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-title");
}

function setDetailsFromThumb(thumbnail) {
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function getThumbnailsArray() {
  "use strict";
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailsArray = [].slice.call(thumbnails);
  return thumbnailsArray;
}

function initializeEvents() {
  "use strict";
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(function(thumb, index) {
    thumb.addEventListener("click", function(event) {
      event.preventDefault();
      if (index == 5) {
        if (current <= 0) {
          current = 5;
        }
        thumb = thumbnails[current - 1];
        current--;
      } else if (index == 6) {
        if (current >= 4) {
          current = -1;
        }
        thumb = thumbnails[current + 1];
        current++;
      }
      else {
        current = index;
      }
      setDetailsFromThumb(thumb);
    });
  });
}

initializeEvents();
