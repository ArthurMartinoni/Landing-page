$(document).ready(function () {
  $("#mobile_btn").on("click", function () {
    $("#mobile_menu").toggleClass("active");
    $("#mobile_btn").find("i").toggleClass("fa-x");
  });
});

function createReview(grade, totalReviews) {
  let starsHtml = " ";

  for (let i = 0; i < notEqual; i++) {
    starsHtml += '<i class="fa-solid fa-star"></i>';
  }
  const finalLayout = `
<div class="course-reviews">
${starsHtml}
<span>(${totalReviews}+)</span>
</div>
`;
  document.getElementById("container-courses").innerHTML += finalLayout;
}

createReview(5, 500);
