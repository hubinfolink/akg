/* menu.js */
document.addEventListener("DOMContentLoaded", function () {
  // 1. 상단 메뉴 (<nav class="cell-nav"> 로 교체)
  const topNav = document.createElement("nav");
  topNav.className = "cell-nav";
  topNav.innerHTML = `
    <a href="http://user.nextstarglobal.com/Account/Register?ref=KRAQ767727-0" class="cell-item" style="background-color: #ffccaa;">회원가입</a>
    <a href="https://www.roadmir.com/" class="cell-item" style="background-color: #a3e4d7;">쇼핑몰</a>
    <a href="akgnews.html" class="cell-item" style="background-color: #d7bde2;">AKG란?</a>
    <a href="https://youtube.com/shorts/cxyL38WZ6ZY?feature=share" class="cell-item" style="background-color: #ffc4d7;">문의</a>
  `;

  // 2. 하단 메뉴 (<nav class="cell-nav-bottom"> 으로 교체)
  const bottomNav = document.createElement("nav");
  bottomNav.className = "cell-nav-bottom";
  bottomNav.innerHTML = `
    <a href="https://hubinfolink.github.io/akg/" class="cell-item" style="background-color: #a3e4d7;">HOME</a>
    <a href="https://www.nextstarglobal.com/" class="cell-item" style="background-color: #ffccaa;">오피스</a>
    <a href="office.html" class="cell-item" style="background-color: #d7bde2;">하단메뉴3</a>
    <a href="contact.html" class="cell-item" style="background-color: #ffc4d7;">하단메뉴4</a>
  `;

  // 3. ID 요소를 완벽한 NAV 태그로 1:1 대체
  const topTarget = document.getElementById("top-nav-container");
  const bottomTarget = document.getElementById("bottom-nav-container");

  if (topTarget) topTarget.replaceWith(topNav);
  if (bottomTarget) bottomTarget.replaceWith(bottomNav);
});
