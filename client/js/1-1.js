function checkUser() {
  // let userName = prompt('사용자의 아이디를 입력해주세요','').toLowerCase(); // 조큼 위험

  let userName = prompt("사용자의 아이디를 입력해주세요", "");

  // 만약 userName === null 이면 아래 코드 실행하지마

  if (!userName) return "해당 정보가 없습니다.";
  // 아래 코드 실행하지마 return

  userName = userName.toLowerCase(); // 재할당

  if (userName.toLowe === "tiger") {
    console.log("환영합니다");
  } else if (userName === "bear") {
    console.log("반갑습니다!");
  } else if (userName === null) {
    console.log("취소됐습니다.");
  } else if (userName === "" || userName.replace(/\s*/g, "") === "") {
    console.log("빈문자를 입력하셨습니다.");
  } else {
    console.log("안녕히가세요");
  }
}

checkUser();

// prompt
// 취소 esc 아무것도입력 X  ---> 다 체크 , console.error('고민해야한다',고민해야한다)
//  null

// 'tiger'.replace('t','o')  -->  'oiger' ...(String methods)
// 공백 --> 정규표현식
// \s : 공백  , * all
// '    t i g e r'.replace(/\s*/g,'')

// esc 에러 >> try .. catch && 옵셔널체이닝(?.)
// ?.   --> no error라 위험할수도
//
