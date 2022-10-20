let pressBtn = document.getElementsByTagName("button");
let calScreen = document.getElementById("screen1");
let clearBtn = document.getElementsByTagName("button")[12]; //  "C" silme butonu
let calculateBtn = document.getElementsByTagName("button")[14]; // "=" eşittir butonu
let onmouseoverFunc = document.getElementById("calc");


// console.log(btnValue[12].value);
// console.log("---------------");


// Hesapmakinası tuşları üzerine gelince otomatik bir for döngüsü tuşlara basılıyor mu dinlesin
onmouseoverFunc.addEventListener("mouseover", cycle) ;

function cycle(){
    // console.log("onmouseever");
    // calScreen.value=calScreen.value + "+";
    
    // Basılı olan tuşların indexlerini geziyoruz.
    for (i=0; i<pressBtn.length; i++) {
        // index 12 ve 14 C ve = tuşlarına ait bunlara gelince dinleme yapmamak için atlatıyoruz.
        if ( i==12 || i==14 ) {
            continue;
        }
        // For döngüsü tüm tuşların indexlerini sırayla yazıyor bizde bunların eventlistener ile dinliyoruz. click olan olduğu anda ekrana yaz fonskiyonu çalıştırıyoruz. 
        pressBtn[i].addEventListener("click", ekranaYaz); // Dinleme yapılırken diyelim [2] nolu  indexteyken butona tıklandı fonksiyon çağrıldığında (ekranayaz) pressBtn[2] nin kendisi fonksiyonla beraber çağrıldığı yere gider. ve orada this şeklinde kullanılabilir {pressBtn[2]} = this oldu yani..
        // console.log(pressBtn[i].value);
        
    }

}

// index 12 ve 14 özellikle ayrı dinleyip burada ilgili fonksiyonları çağırıyozruz.
clearBtn.addEventListener("click", clear);
calculateBtn.addEventListener("click",calculate);


function ekranaYaz() {
    // Burada this dediği değişken yukarıda pressBtn[2] fonksiyonla beraber buraya geldi... 
    calScreen.value= calScreen.value + this.value; // burada ekran idli input içine (hesap makinansının ekranına) pressBtn[2] value si üzerine toplamaişlemi yapılarak yazılır. Burada amaç önce 5 nolu butona bastık diyelim ekrana yazar yanına 0 daha yazarız ne oldu 50 yazmış olduk. ilaveten * 30 yazık eşittir yaza kadarki tüm degerler ekranda yazmış olacak.
    console.log("pressing to key: " + this.value); 
    // console.log("this: " + this.value);

}

// C butonuna basıldığında hesp. mak. ekranı komple silmiş oluyoruz.
function clear() {
    calScreen.value="";

}
// önemli bir fonksiyon olan *****  eval()  ***  fonksiyonunu kullnıyoruz. Bu fonksiyon içindeki degerleri matematik işlemlerini işlem sırasına dikkat ederek yapar ve bize sonuçu döndürür.

function calculate() {
    // burada ekran boşken = basıldığında ekrana undefined yazıyordu onu yazmasın diye if içine soktuk. işlem yaptırmadık alert ile kullanıcıyı uyardık.
    // Aksi durumda else ile işleme devam ediliyor
    if(!calScreen.value){  // eger calScreen.value FALSE ise yani yoksa içi boşsa if e gir dedik. // ikinci yöntemde if içine if(calScreen.value == ""); boşsa diyede sorabilir dik. ikiside mantıken aynıdır.
        // calScreen.value = "";
        
        alert("Ekrana rakamsal deger girmeden işlem yapmaz !");
        console.log("Ekrana rakamsal deger girmeden işlem yapmaz");
    }
    else{

        console.log(typeof calScreen.value);
        calScreen.value= eval(calScreen.value);
        // eval hazır fonksiyonu işlem sırasına göre matematik işlemi yapan bir fonksiyondur.
    }   
    
 
}

// class eklemek ve silmek için yöntem
let newClass =  document.querySelector("#calc");
console.log(newClass);

// newClass.classList.add("calc2");
// newClass.classList.remove("calc2");










