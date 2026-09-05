/* menu.js - 메뉴 소실 문제 완전 해결본 */
(function () {
  // 상단 메뉴 데이터
  const topMenu = [
    { name: "무료가입", link: "http://user.nextstarglobal.com/Account/Register?ref=KRAQ767727-0", bg: "#ffccaa", target: "_blank" },
    { name: "가입방법", link: "https://youtu.be/_M-ECEPVK7w", bg: "#a3e4d7", target: "_blank" },
    { name: "쇼핑몰", link: "https://www.roadmir.com/", bg: "#d7bde2", target: "_blank" },
    { name: "구매방법", link: "https://youtu.be/VRTiRY82z6A", bg: "#ffc4d7", target: "_blank" }
  ];

  // 하단 메뉴 데이터
  const bottomMenu = [
    { name: "HOME", link: "https://hubinfolink.github.io/akg/", bg: "#ffccaa", target: "_self" },
    { name: "오피스", link: "https://www.nextstarglobal.com/", bg: "#a3e4d7", target: "_blank" },
    { name: "AKG란?", link: "akgnews.html", bg: "#d7bde2", target: "_self" }, 
    { name: "문의", link: "https://t.me/gene_akg_bot", bg: "#ffc4d7", target: "_blank" }
  ];

  function buildMenu() {
    // 1. 상단 메뉴 렌더링
    const topTargets = document.querySelectorAll('.cell-nav, #top-nav-container');
    topTargets.forEach(el => {
      el.className = 'cell-nav';
      el.innerHTML = topMenu.map(m => 
        `<a href="${m.link}" class="cell-item" style="background-color: ${m.bg};" target="${m.target}" rel="noopener noreferrer">${m.name}</a>`
      ).join('');
    });

    // 2. 하단 메뉴 렌더링
    const bottomTargets = document.querySelectorAll('.cell-nav-bottom, #bottom-nav-container');
    bottomTargets.forEach(el => {
      el.className = 'cell-nav-bottom';
      el.innerHTML = bottomMenu.map(m => 
        `<a href="${m.link}" class="cell-item" style="background-color: ${m.bg};" target="${m.target}" rel="noopener noreferrer">${m.name}</a>`
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
