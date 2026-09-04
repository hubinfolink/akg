/* menu.js */
(function () {
  // 1. 깨짐 방지용 핵심 CSS 자동 주입
  const style = document.createElement('style');
  style.innerHTML = `
    .cell-nav, .cell-nav-bottom {
      display: flex !important;
      width: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
      box-sizing: border-box !important;
    }
    .cell-nav { position: sticky; top: 0; z-index: 1000; }
    .cell-nav-bottom { position: fixed; bottom: 0; left: 0; z-index: 9999; box-shadow: 0 -2px 8px rgba(0,0,0,0.4); }
    .cell-nav .cell-item, .cell-nav-bottom .cell-item {
      flex: 1 1 0px !important;
      width: 0 !important;
      min-width: 0 !important;
      display: block !important;
      padding: 14px 0 !important;
      font-size: 18px !important;
      font-weight: bold !important;
      text-decoration: none !important;
      color: #000000 !important;
      text-align: center !important;
      box-sizing: border-box !important;
      border-right: 1px solid rgba(0, 0, 0, 0.1) !important;
    }
    .cell-nav .cell-item:last-child, .cell-nav-bottom .cell-item:last-child {
      border-right: none !important;
    }
  `;
  document.head.appendChild(style);

  // 2. 메뉴 데이터 관리
  const topMenu = [
    { name: "회원가입", link: "http://user.nextstarglobal.com/Account/Register?ref=KRAQ767727-0", bg: "#ffccaa" },
    { name: "쇼핑몰", link: "https://www.roadmir.com/", bg: "#a3e4d7" },
    { name: "AKG란?", link: "akgnews.html", bg: "#d7bde2" },
    { name: "문의", link: "https://youtube.com/shorts/cxyL38WZ6ZY?feature=share", bg: "#ffc4d7" }
  ];

  const bottomMenu = [
    { name: "HOME", link: "https://hubinfolink.github.io/akg/", bg: "#a3e4d7" },
    { name: "오피스", link: "https://www.nextstarglobal.com/", bg: "#ffccaa" },
    { name: "하단메뉴3", link: "office.html", bg: "#d7bde2" },
    { name: "하단메뉴4", link: "contact.html", bg: "#ffc4d7" }
  ];

  // 3. 화면 그리기
  function init() {
    const topEl = document.querySelector('.cell-nav');
    const bottomEl = document.querySelector('.cell-nav-bottom');

    if (topEl) {
      topEl.innerHTML = topMenu.map(m => `<a href="${m.link}" class="cell-item" style="background-color: ${m.bg};">${m.name}</a>`).join('');
    }
    if (bottomEl) {
      bottomEl.innerHTML = bottomMenu.map(m => `<a href="${m.link}" class="cell-item" style="background-color: ${m.bg};">${m.name}</a>`).join('');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
