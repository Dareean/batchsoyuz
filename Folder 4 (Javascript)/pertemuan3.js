
// // membuat objek
// const user = {
//     nama : "ikhwal",
//     umur : 20
// };

// const apple = {
//     color : "merah",
//     spesies: "fuji",
//     weight: 150
// };

// // mengkakses objek
// console.log(user.umur);
// console.log(user['nama']);
// console.log(apple['color', 'spesies']); // tidak bisa mengkases dua value dalam satu kurung

// const {color,spesies, weight} = apple
// console.log(color);

// //  mengupdate properti
// user.nama = "andi" //mengubah nama user menjadi andi
// console.log(user.nama);

// user['umur'] = 25 // mengubah umur user menjadi
// console.log(user.umur);

// // menthods
// const pengguna ={
//     Nama : "rusdi",
//     menyapa : function(){
//         console.log("halo, saya "+ this.Nama);
//     }
// };
// pengguna.menyapa();

// // nested object
// const spaceship ={
//     telescope: {
//         year: 2012,
//         model: "hubble"
//     },
//     crew: {
//         captain:{
//             name: "sandra",
//             age: 40
//         }
//     }
// }
// console.log(spaceship.telescope.year);
// console.log(spaceship.crew.captain.age);

// // looping through object
//     for (let crewMember in spaceship.crew){
//         console.log(${crewMember}: ${spaceship.crew[crewMember].name});
// }