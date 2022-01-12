//Fonksiyonlarda TS kullanmanın avantajlarını açıklayalım. JS üzerinde 

        //const sum=(a,b,c) => {
        //     return a+b+c
        // }
//şeklinde basit bir fonksiyon yazıs olalım.Bu noktada fonksiyonu kullanan kişi sum(10,20,25) şeklinde number türünde parametreler girerse fonksiyon çalışacaktır. Peki ya string girerse??? Bu noktada JS yetersiz kalır. Ancak TS ile bunları engellediğimiz bir fonksiyon yazabiliriz.

const getAverage1 = (...a: number[]): string => {
    let total = 0;
    let count = 0;

    for (let i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }

    const result = total / count;
    return 'result : ' + result;
}

getAverage1(10, 20, 30);
getAverage1(10, 20, 30, 50);
getAverage1(10, 20);
getAverage1(10);

//Görüldüğü üzere fonksiyonumuz içerisine SADECE NUMBER TİPİNDE olabilen biri dizi alarak çalışıyor. Return olarak döneceği değeri de string oalrak belirledik. Şuan kullanıcı parametreler yerine number dışında bir parametre girdiği anda program hata verecektir.

// Bu konunun ne kadar büyük proble oluşturabileceğini başka bir örnekle yazalım.


        // function add(num1,num2){
        //     return num1+num2;
        // }

//Bu fonksiyon JS standartlarında yazılmıstır ve olası kullanıcı ihtimallerine bir  bakalım.

       //add("2","5")----->Sorunsuz çalışır ve SONUÇ 25 çünkü string toplaması yaptı.

       //add(2,5)----->Sorunsuz çalışır ve SONUÇ 7 çünkü number toplaması yaptı.

//JS için ortada hiçbir sorun yok ancak biz oldukça büyük bir sorun ile karşı karşıyayız ve bunun farkına varamayabiliriz.

//TS İLE HALLEDELİM.

    // function add(num1:number,num2:number){
        //     return num1+num2;
        // }

//Artık hata şansımız kalmadı.



