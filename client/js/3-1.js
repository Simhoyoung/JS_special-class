// 자바스크립트의 함수는 값입니다. 일급함수 => javascript,python 


// sumA()


// 함수 선언문
function sumA(value){
  // hoisting
    return 'a'
  }
  
  sumA(10)  // 'a'
  const a = new sumA();
  
  
  // 함수 표현식
  const sumB = function(value){
    return 'b'
   }
  
  sumB(20) // 'b'
  const b = new sumB();
  
  
  // 함수 표현식 -> 화살표 함수 
  
  const sumC = value => 'c' 
  sumC(30) // 'c'
  
  
  // const c = new sumC();
  
  // callback
  
  
  // 1. 실행부 작성
  // 2. 매개변수
  // 3. 리턴 유무 
  // 4. validation
  
  
  // context  
  // node 변수가 문자가 아니면 에러를 발생 
  //                    default parameter
  
  function getNode(node,context = document){
  
    if(typeof node !== 'string') {
      throw new Error('getNode의 첫 번째 인수는 문자 타입 이어야 합니다!')
    }
    
    if(context.nodeType !== 9){
      context = document.querySelector(context);
    }
  
    return context.querySelector(node)
  }
  
  
  
  
  
  // h1.classList.add('hello')
  
  function addClass(node,className){
  
    // const node = 'h1';
    // const className = 'hello';
  
    // node 문자일때만
    
    if(typeof node === 'string') node = getNode(node);
  
    if(typeof className !== 'string'){
      throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
    }
  
    node.classList.add(className)
  
  }
  
  addClass('h1','hello');
  addClass('h1','kind');
  addClass('h1','tiger');
  
  
  
  
  // removeClass
  
  // 리액트 코드 vs 자바스크립트 코드 
  
  
  function removeClass(node,cn){
  
    if(typeof node === 'string') node = getNode(node);
    
    if(typeof cn !== 'string' && cn !== undefined){
      throw new TypeError('removeClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
    }
  
    if(!cn){
      node.className = ''
      return;
    }
  
    node.classList.remove(cn);
  }
  
  
  removeClass('h1');
  
  
  
  // toggleClass
  
  
  const h1 = getNode('h1');
  
  // getCss
  
  
  // CSSStyleDeclaration => TS
  
  function getCss(node,prop){
  
    if(typeof node === 'string') node = getNode(node);
  
    if(!(prop in document.body.style)){
      throw new TypeError('getCss 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.');
    }
  
    return getComputedStyle(node)[prop];
  }
  
  
  
  const result = getCss('h1','fontSize') // 32px
  
  
  
  
  // CSSStyleDeclaration
  
  // setCss
  
  function setCss(node,prop,value){
  
    if(typeof node === 'string') node = getNode(node);
    if(!(prop in document.body.style)){
      throw new TypeError('setCss 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.');
    }
    if(!value) throw new SyntaxError('setCss 함수의 세 번째 인수는 필수 입력값 입니다.');
    
    node.style[prop] = value;
  }
  
  
  setCss('h1','fontSize','100px');
  
  
  
  
  // css
  
  
  
  // getAttr
  
  
  
  // setAttr
  
  
  
  // attr