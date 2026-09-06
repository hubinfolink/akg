/* menu.js - 내부 페이지 이동 시 레퍼럴 유지 기능 추가본 */
(function () {
  // 1. URL에서 ?ref= 파라미터 값 읽어오기
  const urlParams = new URLSearchParams(window.location.search);
  let userRef = urlParams.get('ref');

  // 2. URL에 ref가 있으면 세션 저장소에 보관하고, 없으면 이전에 저장된 값 꺼내 쓰기
  if (userRef) {
    sessionStorage.setItem('saved_ref', userRef);
  } else {
    userRef = sessionStorage.getItem('saved_ref');
  }

  // 3. 기본 레퍼럴 ID 설정 (보스의 기본 ID)
  const defaultRef = "KRAQ767727-0";

  // 4. 최종 사용할 레퍼럴 ID 결정
  const finalRef = userRef ? userRef : defaultRef;

  // 5. 내부 링크에 붙여줄 쿼리 스트링 (파라미터가 있을 때만 붙임)
  const internalRefQuery = userRef ? `?ref=${userRef}` : '';

  // 상단 메뉴 데이터
  const topMenu = [
    { name: "무료가입", link: `http://user.nextstarglobal.com/Account/Register?ref=${finalRef}`, bg: "#ffccaa", target: "_blank" },
    { name: "가입방법", link: "https://youtu.be/_M-ECEPVK7w", bg: "#a3e4d7", target: "_blank" },
    { name: "쇼핑몰", link: "https://www.roadmir.com/", bg: "#d7bde2", target: "_blank" },
    { name: "구매방법", link: "https://youtu.be/VRTiRY82z6A", bg: "#ffc4d7", target: "_blank" }
  ];

  // 하단 메뉴 데이터 (내부 페이지 링크 뒤에 ref 파라미터 자동 유지)
  const bottomMenu = [
    { name: "HOME", link: `./`, bg: "#ffccaa", target: "_self" },
    { name: "오피스", link: "https://www.nextstarglobal.com/", bg: "#a3e4d7", target: "_blank" },
    { name: "AKG란?", link: `akgnews.html${internalRefQuery}`, bg: "#d7bde2", target: "_self" },
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
