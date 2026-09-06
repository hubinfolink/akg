/* menu.js - 메뉴 소실 문제 완전 해결본 (레퍼럴 자동 변경 추가) */
(function () {
  // 1. URL에서 ?ref= 파라미터 값 읽어오기
  const urlParams = new URLSearchParams(window.location.search);
  const userRef = urlParams.get('ref');

  // 2. 기본 레퍼럴 ID 설정 (보스의 기본 ID)
  const defaultRef = "KRAQ767727-0";

  // 3. ref 파라미터가 있으면 그 값을 쓰고, 없으면 기본 보스 ID 사용
  const finalRef = userRef ? userRef : defaultRef;

  // 상단 메뉴 데이터
  const topMenu = [
    { name: "무료가입", link: `http://user.nextstarglobal.com/Account/Register?ref=${finalRef}`, bg: "#ffccaa", target: "_blank" },
    { name: "가입방법", link: "https://youtu.be/_M-ECEPVK7w", bg: "#a3e4d7", target: "_blank" },
    { name: "쇼핑몰", link: "https://www.roadmir.com/", bg: "#d7bde2", target: "_blank" },
    { name: "구매방법", link: "https://youtu.be/VRTiRY82z6A", bg: "#ffc4d7", target: "_blank" }
  ];

  // 하단 메뉴 데이터
  const bottomMenu = [
    { name: "HOME", link: "index.html", bg: "#ffccaa", target: "_self" },
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
