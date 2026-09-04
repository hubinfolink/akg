/* menu.js - 메뉴 소실 문제 완전 해결본 */
(function () {
  // 상단 메뉴 데이터
  const topMenu = [
    { name: "무료가입", link: "http://user.nextstarglobal.com/Account/Register?ref=KRAQ767727-0", bg: "#ffccaa" },
    { name: "쇼핑몰", link: "https://www.roadmir.com/", bg: "#a3e4d7" },
    { name: "AKG란?", link: "akgnews.html", bg: "#d7bde2" },
    { name: "문의", link: "https://youtube.com/shorts/cxyL38WZ6ZY?feature=share", bg: "#ffc4d7" }
  ];

  // 하단 메뉴 데이터
  const bottomMenu = [
    { name: "HOME", link: "https://hubinfolink.github.io/akg/", bg: "#a3e4d7" },
    { name: "오피스", link: "https://www.nextstarglobal.com/", bg: "#ffccaa" },
    { name: "하단메뉴3", link: "office.html", bg: "#d7bde2" },
    { name: "하단메뉴4", link: "contact.html", bg: "#ffc4d7" }
  ];

  function buildMenu() {
    // 1. 상단 메뉴 렌더링
    const topTargets = document.querySelectorAll('.cell-nav, #top-nav-container');
    topTargets.forEach(el => {
      el.className = 'cell-nav'; // 클래스명 강제 고정
      el.innerHTML = topMenu.map(m => 
        `<a href="${m.link}" class="cell-item" style="background-color: ${m.bg};">${m.name}</a>`
      ).join('');
    });

    // 2. 하단 메뉴 렌더링
    const bottomTargets = document.querySelectorAll('.cell-nav-bottom, #bottom-nav-container');
    bottomTargets.forEach(el => {
      el.className = 'cell-nav-bottom'; // 클래스명 강제 고정
      el.innerHTML = bottomMenu.map(m => 
        `<a href="${m.link}" class="cell-item" style="background-color: ${m.bg};">${m.name}</a>`
      ).join('');
    });
  }

  // 문서 로딩 상태와 상관없이 무조건 즉시 + 로딩후 double 실행으로 미출력 방지
  buildMenu();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildMenu);
  }
  window.addEventListener('load', buildMenu);
})();
