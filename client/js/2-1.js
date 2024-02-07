const data = [
  {
    productName:'간장게장',
    price: 25_000,
    saleRadio:10,
    quantity:5,
  },
  {
    productName:'장어구이',
    price: 28_500,
    saleRadio:24,
    quantity:3,
  },
  {
    productName:'고추잡채',
    price: 17_500,
    saleRadio:13,
    quantity:0,
  },
  {
    productName:'안심 스테이크',
    price: 22_900,
    saleRadio:23,
    quantity:0,
  }
]



// ⭐⭐⭐⭐⭐ forEach, mpa, filter, reduce ⭐⭐⭐⭐⭐


/* --------------------------------- forEach -------------------------------- */
const arr = ['가희','지성','도희','우중','호영'];

function f(t,i){
  console.log(t,i);
}
// const ff = () => { }

// const  a = arr.forEach((item,index)=> return item >> a : undefined 
arr.forEach(f)
// forEach는 값을 반환하지 X , 단순 반복만 해준다 , 배열 반복하려고 사용


/* ----------------------------------- map ---------------------------------- */
// map은 값을 반환 O => 새로운 배열 값, 데이터를 만들기 위해 사용.
// 리액트가 화면에 그림을 그리려면 배열로 표현한다
// arr.map(f)


/* arr.map((t,i)=>{
  return i
})

console.log(map);  // (5) [0,1,2,3,4,] */


const map = arr.map((t,i)=>{

  return 'hello-' + t
})

console.log(map); // (5) ['hello-가희', 'hello-지성', 'hello-도희' ...]


/* --------------------------------- filter --------------------------------- */
// 새로운 배열 값 O  => 새로운 배열 데이터를(필터로) 만들기 위해 사용
const filter = arr.filter((t,i)=>{
  return t === '호영'
})

// 조건이 여러게? : filter.filter()

// arr(filter(f => f === 1), filter(e => 1), reduce() ...)


console.log(filter);


/* ----------------------------------- 실습 ----------------------------------- */
console.log( data );

// forEach price 총합
let total = 0;

data.forEach((t,i)=>{
  total += (t.price)  // 각 객체가 나온다
})

console.log(total);


// map을 사용하여 productName만 가지고있는 배열 데이터를 생성

const productName = data.map((t)=> t.productName
)


// map을 사용하여 [[간장게장,25000],[장어구이,28500]] 가지고 있는 배열 데이터 생성

const productNameAndPrice = data.map((t)=>{
  return [t.productName, t.price]
})



// reduce는 값을반환 O => 다양한 자료형  , 값을 한번에 내배퉤
const result = data.reduce((acc,cur)=>{
  return acc + cur.price
  // console.log(acc); // acc: 배열의 첫번째 , cur 첫번째 제외 나머지 아이템
},0)  // init value : 초기값 -> acc에 담김, reduce 사용할때 초기값을 주자.


const result2 = data.reduce((acc,cur)=>{
  acc.push(cur.productName)
  return acc
},[])



// filter를 사용해 수량이 남아있는 항목들만 배열 데이터로 만들어주세요.

const result3 = data.filter((t)=>{
  return t.quantity !== 0; // || t.price > 20000 => 다중 조건 => 이중 filter 
})




// 세일 가격이 적용된 price만 배열로

const sale = data.map((t)=>{
  // console.log( t.saleRadio) // price*(saleRadio * 0.01)
  // t.price - t.price * (t.saleRadio * 0.01) => 할인된 금액

  return `<li> 🎉 할인된 가격 : ${t.price - t.price * (t.saleRadio * 0.01)} 🎉 남은 상품 수량 : ${t.quantity > 0 ? t.quantity : '재고없음'}</li>` // 삼항식 => 값반환 => ${ } 안에 쓸수있음
})


function render(text){
  document.body.insertAdjacentHTML('beforeend', text)
}


sale.forEach((t)=>{
  document.body.insertAdjacentHTML('beforeend',t)
   // 돌려주는애 || 데이터 만들어주는 애 따로 있어야한다
})


// ⤵️ 바닐라 자바스크립트 일때이다  || React에서는 배열만으로 된다..? 
// sale.forEach(render) // 결과는 동일하다 .. 본분이 들어가는 이유 => 실행은 forEach가 해준다


// document.body.insertAdjacentHTML('beforeend',sale) // sale.toString()이 들어감 => <li>,<li> 콤마가 들어감

// insertLast(0/)



/* productNameAndPrice.forEach(([p,price])=>{
    console.log(p);
})
console.log( productNameAndPrice ); */



console.clear()


const salaries = {
  호영:150,
  도희:250,
  경미:153,
  희선:175,
  선범:3000, // 있었다? 그럼 있는 값 갖다씀
}


// 객체의 구조 분해 할당

// salaries.경미 => 쓰일 데가 많아지면 ? const 경미 = salaries.경미;
// 👇 이것도 불편 , 구조 분해 할당을 쓴다 (안쓴다고 잘못되지는 않앙)
// 객체 순서 중요 X ---> 키 값을 그대로 불러옴 , 배열만 순서 중요
// 변수도 마음대로 이름을 지정할 수 있듯히, 객체:a => 이렇게 별칭을 지정가능

const { 경미:돼지, 도희:꿀돼지, 희선:꽃돼지, 호영:흑돼지 } = salaries;

// console.log( 흑돼지, 돼재, 꽃돼지, 선범 = 5000)



function createUser({name,age,nickName = 'duck'}){ // 객체를 구조분해해서 바로 매개변수로 넣어주자

  // const {name,age,nickName = 'duck'} = obj; // 기본값을 정해줘서 에러를 막아줌


  '잘생긴' + name;

  age + 10;

  nickName.toUpperCase();

}


// createUser('이경민',30,150); // 매개변수 많아짐에 따라 순서를 맞춰야하는 불편함 => 객체로 받는다



const 이경민 = {
    name: '이경민',
    age:30,
    salaries:150,
    address:'서울',
    lat:30,
    long:50,
}


createUser(이경민)


