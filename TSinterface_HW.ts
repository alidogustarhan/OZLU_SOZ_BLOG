
//TS de çalışırken JS in aksine biz çok detaylı type ataması yapabiliriz. Interface adlı yapılarda oluşturduğumuz bu düzen adeta programımızın hangi türlerden oluşması gerektiğini söyleyen hatta kaç parametre alması gerektiğini söyleyen bir tür filtresi gibi çalışır.Bu bakımda TS ile çalışırken istemediğimiz tür dönüşümleri hatta ve hatta istemediğimiz değişkene erişmelerini bile engelleyebiliriz.


interface Point {
    x: number,
    y: number
}

interface Vehicle {
    travelTo(point: Point): void;
    //Görüldüğü üzere Point adında bir interface tanımladık ve bunu Vehicle interfacesinde kullandık. Burada travelTo alı bir fonksiyon oluşturduk ve içerisine alacaı parametrelerin türünü ve adetini Point interfacesine bağlı kıldık.
}

class Taxi implements Vehicle {  
    //implements ile Vehicle nterfacesini Taxi Class ına implement ettik.

    constructor(private _location?: Point, private _color?: string) {  }
    //Burada Taxi class ımızın kendine has constructor yapısını oluşturduk. Görüldüğü üzere içerisine alacağı parametreleri Point interfacesine bağımlı kıldık. _location parametresine bakarsak 2 değer almak zorundadır ve ikisi de number olmak zorundadır.



    travelTo(point: Point): void {
        console.log(`taksi X: ${this._location.x} Y: ${this._location.y} dan X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }

    //Vehicle interfacesinden çektiğimiz kısım burası ve Vehicle Point interfacesine bağlı olduğu için sarmal bir şekilde Taxi class ım da Point interfacesine bağlı oldu.



    get location() {
        return this._location;
    }

    set location(value: Point) {
        if(value.x<0 || value.y <0) {
            throw new Error('koordinat bilgileri negatif olamaz');
        }
        this._location = value;
    }
}
//Interface kullanımının TS deki ayrıcalığını gördük. Şimdi başka bir önemli noktaya değinelim.Biz yazdığımız class ların dışarıdan erişiminin olmasını istemeyiz. Örnek verecek olursak _location parametresine dışarıdan ulaşıp x ve y değerlerini atayamamalıyız.Bu noktada JS DE OLMAYAN AMA TS DE OLAN bir özellik devreye giriyor. _location parametresinin önüne private yazdık. Bu sayede artık class dışından hiçbir şekilde bu parametreye erişemeyiz.

//Peki nasıl erişeceğiz??? Burada bir fonksiyon yazarak (CLASS IN İÇİNDE BİR FONKSİYON) önce classın içinde bu yazmış olduğunuz fonksiyona erişirsiniz o da sizin yerinize gidip _location a ulaşır ve ilgili değişikliği yapabilirsiniz.

//Ancak biz burada get ve set kullandık. Ulaşmak istediğimiz parametreye get ve set ile işlemler atadık. Bu sayede değişkenimize dışarıdan erişilmesine izin verdik. Ancak set tarafına dikkat edersek kulanıcı taraflı eksi koordinat girme ihtimali hatalarını ortadan kaldırdık.
let taxi_1;
let currentLocation = taxi_1.location;
taxi_1.location = { x: 2, y: 5 };
