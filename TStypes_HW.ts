//TS ile çalışırken hatarlarımızı daha programı compile etmeden görme şansı buluruz. Buna compile time error denir ve geliştirme aşamasındayke hataları görüp düzelttiğimiz için dosyamızı da korumuş olur.

//İlgili kodlarımızı TS uzantılı dosyada yazdıktan sonra terminae tsc dosayadı şeklinde yazdığımızda bizim kodlarımızı JS uzantılı koda dönüştürür.Artık JS uzantılı dosyamızı node dosyaadı şeklinde yazarak çalıştırabiliriz.
//---------------------------------------------------------------------------------

 let number = 5 ;
// number = 'a';

//----------------------------------------------------------------------------------

//Biz biliyoruz ki JS de bir değişkene değer atadığımız zaman diğer programlama dillerinde olduğu gibi number,string,boolean ... şeklinde bir tip ayrımı yapmaz. İşte bu noktada yukarıdaki örnekte number değişkenini biz proje tasarım aşamasında type number olarak tasarladıysak JS kısmında yapacağımız bu yeni atama hatasında PROGRAM HATA VERMEZ.Bu noktada program için bu bir hata değildir ama projemiz için büyük bir hatadır.

    let ali: number = 5;

//TS kullanımında bu şekilde type belirleyebiliriz. Bu noktada belirlediğim number type hiçbir zaman başka type olarak değiştirilemez. TS burada hata verir. 

//ÖRNEKLER
// ----------------------------------------------------------------
     let b1: string = 'a';
     let c1: boolean = true;
     let d1: any;
     let e1: number[] = [1,2,3];
     let f1: Array<number> = [1,2,3];
    // --------------------------------------------------------------
//Görüldüğü üzere bu şekilde type ı belli atmamalar yapabilmekteyiz.



