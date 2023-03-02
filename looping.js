// // // // // adalimamacam jenis perulangan di js.secara umumn diaBGI 2  
// // // // //counted loop dan uncounted loop  
// // // // pwebwsnyadalah 
// // // // 1. counted loop merupakan perulangan yang jelas dan sudah banyak perulangannya
// // // // 2. uncounted loop merupakan perulangan yang tidak berapa kali harus mengulang
// // // function pushUp(){

// // // }
// // // for(i = 1; i <= 10; i++){
// // //     pushUp();
// // // }

// // // let bosan;

// // // while(bosan == false){
// // //     pushUp();
// // // }

// // // macam macam perulangan counted loop
// // // perulangan for 
// // // perulangan ForEach
// // // perulangan repeat 

// // // macam macam perulangan uncounted
// // // 1. perulangna while
// // // 2. perulangan DoWhile

// // // for(let i = 1; i <= 10; i++){
// // //     document.write(`<p>perulangan berulang sebanyak ${i} kali</p>`)
// // // }
// // //perulangan while
// // //perulangan while merupakan peruu=langan yang termaasuk kedalam uncounted loop. namun perulangan while juga dapat masuk atau menjadi perulangan counted loop, dengan memberikan sebuah counted didalamnya
// // //contoh
// // var huruf = ""
// // var ulang = ("apakah anda mau mengulang?");
// // var counter = 0;


// // while(ulang){
// //     let jawab = confirm("anda mau mengulang? ");
// //     counter++;
// //     if(jawab == false){
// //         ulang = false;
// //     }
// // }
// // document.write ("perulangan sudah dilakukan sebanyak " + counter + "  kali");

// // //perulangan do/while 
// // //perulangan do/while sama seperti while. 
// // //perbedaan nya adalah perulangan do/while akan melakukan perulangan sebanyak 1 kali terlebih dahulu lalu mengcek kondisi yang ada di dalam kurung while. 

// do{

// }while(kondisi);

var ulang = confirm("apakah anda mau mengulang?");
var counter = 0;



while(ulang){
counter++
var bintang = "*".repeat(counter)+"<br>";
document.write(counter + ": " + bintang);
ulang = confirm("anda mau mengulang?");
}

// let sum = "";
// while(true){
//     let value = prompt("masukan huruf untuk membuat kata ");
//     if(!value) break;
//     sum += value;
// }
// alert (`kata yang dibuat adala : ` + sum);


// //4. ForEach                                  
// // perulangan foreach vbiasanya digunakan untuk mencetak item di dalam array 
// // perulangan ini termasuk ke dalam perulangan counted loop, karena jumlah perulangannya akan ditentukan oleh panjang array
// // ada dua cara menggunakan foreach
// //1, dengan menggunakan for dengan operator in
// //2. menggunakan nethod foreach()


// // //contoh

// // let bahasa = ["javascript", "java","objective", "python"];
// // for (let i = 0; i < bahasa.length; i++){
// //     document.write( `${i + 1}. ${bahasa[i]} </br>`)
// // }

// // //perulangan for menggunakan operator in
// // let bahasaCoding = ["javascript", "cpp", "python","ruby"];
// // for (let i in bahasaCoding){
// //     document.write(`${i}.${bahasaCoding[i]}</br>`);
// // }

// //contoh perulangan menggunakan forEach

// let hari = ["senin","selasa","rabu","kamis","jumat","sabtu","minggu"];
// // hari.forEach(function (hari) {
// //     document.write(`<h1>${hari}</h1>`);
// // })

// hari.forEach((hari) => {
//     document.write(`<h1>${hari}</h1>`)
// })

//perulangan dengan method  repeat()
//perulangan dengan menggunakan method/fungsi repeat () termasuk dalam perulangan counted loop

//fungsi ini khusus digunakan untuk mengulang sebuah teks (string);

// for (let i = 0; i < 10; i++){
//     document.write(`ulangi kalimat ini<br>`);
// }

// document.write(`ulangi kalimat ini <br>`.repeat(10));


//6. perulangan nested (bersarang)
//nested loop adalah perulangan bersarang (perulangan di dalam perulangan)

//contoh
// hasil = ``;
// for (let i = 0; i < 5; i++){
//     for ( let j = 0; j < 10; j++){
//         document.write(`<p> ${i + 1} :  ${j} </p>`)
//     }
// }
// function segitiga1(panjang) {
//     let hasil = '';
//     for (let i = 0; i < panjang; i++) {
//         for (let j = 0; j <= i; j++) {
//             hasil += '* ';
//         }
//         hasil += '<br>';
//     }
//     return hasil;
// }
// document.write(segitiga1(10));