/* menu.js - 상/하단 메뉴 통합 관리 */
document.addEventListener("DOMContentLoaded", function () {
  // 1. 상단 메뉴 HTML 정의
  const topNavHTML = `
    <nav class="cell-nav">
      <a href="http://user.nextstarglobal.com/Account/Register?ref=KRAQ767727-0" class="cell-item" style="background-color: #ffccaa;">회원가입</a>
      <a href="https://www.roadmir.com/" class="cell-item" style="background-color: #a3e4d7;">쇼핑몰</a>
      <a href="akgnews.html" class="cell-item" style="background-color: #d7bde2;">AKG란?</a>
      <a href="https://youtube.com/shorts/cxyL38WZ6ZY?feature=share" class="cell-item" style="background-color: #ffc4d7;">문의</a>
    </nav>
  `;

  // 2. 하단 메뉴 HTML 정의
  const bottomNavHTML = `
    <nav class="cell-nav-bottom">
      <a href="https://hubinfolink.github.io/akg/" class="cell-item" style="background-color: #a3e4d7;">HOME</a>
      <a href="https://www.nextstarglobal.com/" class="cell-item" style="background-color: #ffccaa;">오피스</a>
      <a href="office.html" class="cell-item" style="background-color: #d7bde2;">하단메뉴3</a>
      <a href="contact.html" class="cell-item" style="background-color: #ffc4d7;">하단메뉴4</a>
    </nav>
  `;

  // 3. 페이지 내 위치에 상/하단 메뉴 자동으로 꽂아넣기
  const topTarget = document.getElementById("top-nav-container");
  const bottomTarget = document.getElementById("bottom-nav-container");

  if (topTarget) topTarget.innerHTML = topNavHTML;
  if (bottomTarget) bottomTarget.innerHTML = bottomNavHTML;
});
