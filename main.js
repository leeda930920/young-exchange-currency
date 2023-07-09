//1. 박스 2개 만들기
//2. 드랍다운 만들기
//3. 환율정보 가져오기(구글)
//4. 드랍다운 리스트에서 아이템을 선택하면 아이템 및 단위기준이 바뀌는 기능 탑재
//5. 금액을 입력하면 환전이 되는 기능 탑재
//6. 숫자를 한국어로 읽는 법
//7. 반대로 아래 박스에서 숫자를 변경해도 위의 박스에 환율이 적용되도록 만들기

/* 환율정보 가져오기 - 어떠한 값에 대해서 여러가지 정보가 필요할 때, 객체를 주로 씀*/
const currencyRatio = {
  USD: {
    KRW: 1304.96,
    USD: 1,
    VND: 23720.0,
    unit: "달러",
    img: "https://cdn-icons-png.flaticon.com/512/555/555526.png",
  },
  KRW: {
    KRW: 1,
    USD: 0.00077,
    VND: 18.17,
    unit: "원",
    img: "https://cdn.countryflags.com/thumbs/south-korea/flag-400.png",
  },
  VND: {
    VND: 1,
    KRW: 0.055,
    USD: 0.000042,
    unit: "동",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2560px-Flag_of_Vietnam.svg.png",
  },
};
//console.log(currencyRatio.KRW.unit);
//console.log(currencyRatio["KRW"]["unit"]);
//console.log(currencyRatio["KRW"].unit);

var splitUnit = 10000;
var unitWords = ["", "만", "억", "조", "경"];
let fromCurrency = "USD";
let toCurrency = "USD";
let fromButton = document.getElementById("from-button");
let toButton = document.getElementById("to-button");

document.querySelectorAll("#from-currency-list li").forEach(function (item) {
  item.addEventListener("click", function () {
    fromCurrency = this.id;
    fromButton.innerHTML = `<img class="flag-img"src="${currencyRatio[fromCurrency].img}"/>${fromCurrency}`;
    convert("from");
  });
});

document.querySelectorAll("#to-currency-list li").forEach(function (item) {
  item.addEventListener("click", function () {
    toCurrency = this.id;
    toButton.innerHTML = `<img class="flag-img"src="${currencyRatio[toCurrency].img}"/>${toCurrency}`;
    convert("from");
  });
});

``` 
/*document라는 객체는 html 파일에 태그들을 들고올 수 있는 유용한 기능들을 제공해줌*/
document.querySelectorAll("#from-currency-list a").forEach((menu) => 
        menu.addEventListener("click", function () {
        //1. 버튼을 가져온다.
        //document.getElementById("from-button")
        //2. 버튼의 값을 바꾼다.
        document.getElementById("from-button").textContent = this.textContent; 
        //3. 선택된 currency값을 변수에 저장해준다.
        fromCurrency = this.textContent;
        convert("from")
        })
    );

document.querySelectorAll("#to-currency-list a").forEach((menu) =>
        menu.addEventListener("click", function () {
        //1. 버튼을 가져온다.
        //2. 버튼의 값을 바꾼다.
        document.getElementById("to-button").textContent = this.textContent;    
        //3. 선택된 currency값을 변수에 저장해준다. 
        toCurrency = this.textContent;
        convert("to")
        })
    );
```;
//1. 키를 입력하는 순간(function convert(){console.log("key up event issue");})
//2. 환전이 된다.
//3. 환전된 값이 보인다.
function convert(type) {
  let amount = 0;
  if (type == "from") {
    //1. 입력하는 값 받기 > 환전
    let amount = document.getElementById("fromAmount").value;
    //2. 얼마를 환전? 갖고 있는 돈이 무엇인지, 바꾸려고 하는 돈이 무엇인지
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    //3. 돈 * 환율 = 환전금액 > 환전한 값 보여주기
    document.getElementById("toAmount").value = convertedAmount;
    //4. 환전한 값을 한국어로
    renderKoreanNumber(amount, convertedAmount);
  } else {
    amount = document.getElementById("toAmount").value;
    let convertedAmount = amount * currencyRatio[toCurrency][fromCurrency];
    document.getElementById("fromAmount").value = convertedAmount;
    renderKoreanNumber(convertedAmount, amount);
  }
}
function renderKoreanNumber(from, to) {
  document.getElementById("fromNumToKorea").textContent =
    readNum(from) + currencyRatio[fromCurrency].unit;
  document.getElementById("toNumToKorea").textContent =
    readNum(to) + currencyRatio[toCurrency].unit;
}
function readNum(num) {
  let resultString = "";
  let resultArray = [];
  for (let i = 0; i < unitWords.length; i++) {
    let unitResult =
      (num % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
    unitResult = Math.floor(unitResult);
    if (unitResult > 0) {
      resultArray[i] = unitResult;
    }
  }
  for (let i = 0; i < resultArray.length; i++) {
    if (!resultArray[i]) continue;
    resultString = String(resultArray[i]) + unitWords[i] + resultString;
  }
  return resultString;
}
