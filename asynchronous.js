console.log('hello 1');
setTimeout(()=> {
    console.log('hello 2');
}, 10);
console.log('hello 3');

function Async(a) {
    setTimeout(() => {
        a();
    }, 2000);
}
function cetak() {
    console.log('utsman');
}
console.log('mulai');
Async(cetak);
console.log('selesai');

// ==================================================== // ini adalah penggunaan async yg salah
// karena let user mendeklarasi duluan
// di line let user tidak terjadi blocking
// saat return di eksekusi
// function userCredentialRepo() {
//     let users = [];
//     setTimeout(() => {
//         users = [{
//             userName : 'jution',
//             password : 1234,
//         },{
//             userName : 'fadli',
//             password : 4321,
//         }]
//     }, 1000);
//     return users;
// }

// // hanya dapat array kosong dari userRepo
// function findUser(userName) {
//     const userRepo = userCredentialRepo();
//     console.log(userRepo);
//     return userRepo.find((u) => u.userName === userName);
// }

// findUser('jution');

// ==================================================== // ini yang benar
// function userCredentialRepo(findUser) {
//     setTimeout(() => {
//         let users = [{
//             userName : 'jution',
//             password : 1234,
//         },{
//             userName : 'fadli',
//             password : 4321,
//         }]
//         findUser(users);
//     }, 1000);
// }

// function findUser(userName) {
//    let findUserCr = (users) => {
//         let result = users.find((u) => u.userName === userName);
//         console.log(result);
//    }
//    userCredentialRepo(findUserCr);
// }

// findUser('jution');