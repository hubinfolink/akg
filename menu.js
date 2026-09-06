/* menu.js - 화이트리스트 보안 및 레퍼럴 유지 최종본 */
(function () {
  const defaultRef = "KRAQ767727-0";

  // 2. 승인된 ID
  const allowedRefs = [
    "KRAQ917863-0",
  ];
  // ==========================================

  // 1. URL에서 ?ref= 파라미터 값 읽어오기
  const urlParams = new URLSearchParams(window.location.search);
  let userRef = urlParams.get('ref');

  // 2. URL에 ref가 있으면 세션 저장소에 보관, 없으면 기존 저장값 가져오기
  if (userRef) {
    sessionStorage.setItem('saved_ref', userRef);
  } else {
    userRef = sessionStorage.getItem('saved_ref');
  }

  // 3. 화이트리스트 검증 (목록에 있는 ID만 인정, 없으면 기본 ID로 강제 변경)
  let finalRef = defaultRef;
  if (userRef && allowedRefs.includes(userRef)) {
    finalRef = userRef;
  }

  // 4. 내부 링크용 쿼리 스트링 (검증된 유효 회원인 경우에만 내부 이동 시 파라미터 유지)
  const internalRefQuery = (userRef && allowedRefs.includes(userRef)) ? `?ref=${userRef}` : '';

// 상단 메뉴 데이터
  const topMenu = [
    { name: "무료가입", link: `http://user.nextstarglobal.com/Account/Register?ref=${finalRef}`, bg: "#ffccaa", target: "_blank" },
    { name: "가입방법", link: `guide_join.html${internalRefQuery}`, bg: "#a3e4d7", target: "_self" },
    { name: "쇼핑몰", link: "https://www.roadmir.com/", bg: "#d7bde2", target: "_blank" },
    { name: "구매방법", link: `guide_buy.html${internalRefQuery}`, bg: "#ffc4d7", target: "_self" }
  ];

  // 하단 메뉴 데이터
  const bottomMenu = [
    { name: "HOME", link: `./${internalRefQuery}`, bg: "#ffccaa", target: "_self" },
    { name: "오피스", link: "https://www.nextstarglobal.com/", bg: "#a3e4d7", target: "_blank" },
    { name: "AKG란?", link: `akgnews.html${internalRefQuery}`, bg: "#d7bde2", target: "_self" },
    { name: "문의", link: `contactus.html${internalRefQuery}`, bg: "#ffc4d7", target: "_self" }
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

  // 문서 로딩 대응 double 실행
  buildMenu();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildMenu);
  }
  window.addEventListener('load', buildMenu);
})();
