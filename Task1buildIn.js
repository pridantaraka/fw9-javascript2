let a = 'Alibaba'
let b = 'GROUP'
let arr=['ada','dia','mereka']

//charAt adalah metode yang mengembalikan karakter dari indeks yang ditentukan
console.log(a.charAt(0)+' ' +a.charAt(1)+' ' +a.charAt(3)+' ' +a.charAt(4)); 

//charCodeAt Metode ini mengembalikan angka yang menunjukkan nilai Unicode karakter pada indeks yang diberikan.
console.log(a.charCodeAt(0)+', '+a.charCodeAt(1)+', '+a.charCodeAt(3));

//Concat Metode ini menambahkan dua atau lebih string dan mengembalikan string tunggal baru.
let c = a.concat(' '+b)
console.log(c);

//slice Metode ini mengekstrak bagian dari string dan mengembalikan string baru.
console.log(a.slice(0, 3));

//toLowerCase Metode ini mengembalikan nilai string panggilan yang dikonversi menjadi huruf kecil.
console.log(b.toLowerCase());

//reverse metode membalikkan elemen array. Elemen array pertama menjadi yang terakhir dan yang terakhir menjadi yang pertama.
console.log(arr.reverse());

//setYear metode metode menetapkan tahun untuk tanggal tertentu menurut waktu universal.
var year = new Date("Aug 28, 2008 13:30:00");
year.setYear(2001);
console.log(year);

//getTime metode mengembalikan nilai numerik yang sesuai dengan waktu untuk tanggal yang ditentukan menurut waktu universal.
var dt = new Date( "December 25, 1995 23:15:20" );
console.log('Get Time : '+ dt.getTime());

//getTimezone method returns the time-zone offset in minutes for the current locale.
var gt = new Date();
var tz = dt.getTimezoneOffset();
console.log("Time zone : "+ tz);

//shift metode menghapus elemen pertama dari array dan mengembalikan elemen itu.
let d = [105, 1, 2, 3].shift();
console.log(d);