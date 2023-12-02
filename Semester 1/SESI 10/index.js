// TENTANG CLASS
class Hewan {
    warna
    keahlian
    constructor(nama) {
        this.nama = nama
    }

    set newColor(color) {
        this.warna = color
    }

    set newSkill(skill) {
        this.keahlian = skill
    }

    get detail() {
        return `Hi saya ${this.nama}, saya berwarna ${this.warna} dan keahlian saya ${this.keahlian}`
    }

}

const kucing = new Hewan('jojo')
kucing.newColor = "red"
kucing.newSkill = "Mengonggong"

console.log(kucing.detail);




// TENTANG OBJECT DAN ARRAY





const mahasiswa = [
    {
        nama: "dea afrizal",
        alamat: "kampung inggris",
        usia: 20,
        semester: 3
    },
    {
        nama: "afrizaldea",
        alamat: "kampung belanda",
        usia: 30,
        semester: 8
    },
]

function getDetailData() {
    mahasiswa.map(function (result, i) {
        console.table(result);
    })
    mahasiswa.forEach(result => {
        console.log(result)
    });
    console.log(`data yang anda cari dalah: ${mahasiswa}`)
    console.log(mahasiswa[0].nama);
}