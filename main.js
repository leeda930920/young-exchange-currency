//1. 박스 2개 만들기
//2. 드랍다운 만들기
//3. 환율정보 가져오기(구글)
//4. 드랍다운 리스트에서 아이템을 선택하면 아이템 및 단위기준이 바뀌는 기능 탑재
//5. 금액을 입력하면 환전이 되는 기능 탑재
//6. 숫자를 한국어로 읽는 법
//7. 반대로 아래 박스에서 숫자를 변경해도 위의 박스에 환율이 적용되도록 만들기

/* 환율정보 가져오기 - 어떠한 값에 대해서 여러가지 정보가 필요할 때, 객체를 주로 씀*/
let currencyRatio= {
    USD:{
        KRW: 1304.96,
        USD: 1,
        VND: 23720.00,
        unit: "달러"     
    },
    KRW:{
        KRW: 1,
        USD: 0.00077,
        VND: 18.17,
        unit: "원"  
    },
    VND:{
        VND: 1,
        KRW: 0.055,
        USD: 0.000042,
        unit: "동" 
    }
}
//console.log(currencyRatio.KRW.unit);
//console.log(currencyRatio["KRW"]["unit"]);
//console.log(currencyRatio["KRW"].unit);

let fromCurrency = "USD"; 
let toCurrency = "USD";

/*document라는 객체는 html 파일에 태그들을 들고올 수 있는 유용한 기능들을 제공해줌*/
document
    .querySelectorAll("#from-currency-list a").forEach((menu) => 
        menu.addEventListener("click", function () {
        //1. 버튼을 가져온다.
        //document.getElementById("from-button")
        //2. 버튼의 값을 바꾼다.
        document.getElementById("from-button").textContent = this.textContent; 
        //3. 선택된 currency값을 변수에 저장해준다.
        fromCurrency = this.textContent;
        console.log("fromCurrency :", fromCurrency);
        })
    );

document.querySelectorAll("#to-currency-list a").forEach((menu) =>
        menu.addEventListener("click", function () {
        //1. 버튼을 가져온다.
        //2. 버튼의 값을 바꾼다.
        document.getElementById("to-button").textContent = this.textContent;    
        //3. 선택된 currency값을 변수에 저장해준다. 
        toCurrency = this.textContent;
        console.log("toCurrency :", toCurrency);
        })
    );