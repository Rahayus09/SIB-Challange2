const dataPenjualanNovel = [{
    idProduct: 'B00KBB2421',
    namaProduk: 'Pulang - pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStock: 17,
}, {
    idProduct: 'B00KBB2351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 183000,
    totalTerjual: 171,
    sisaStock: 28,
}, {
    idProduct: 'B00KBB2941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStock: 5,
}, {
    idProduct: 'B00KBB2941',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 28,
    sisaStock: 56,
}]

function getInfoPenjualan(dataPenjualan) {
    // VARIABLE
    let sumHargaBeli = 0;
    let sumHargaJual = 0;
    let sumModal = 0;

    // SUM HARGA BELI
    for (let i = 0; i < dataPenjualan.length; i++) {
        sumHargaBeli += dataPenjualan[i].hargaBeli;
    }

    // SUM HARGA JUAL
    for (let i = 0; i < dataPenjualan.length; i++) {
        sumHargaJual += dataPenjualan[i].hargaJual;
    }

    // RUMUS KEUNTUNGAN
    const rumusKeuntungan = sumHargaJual - sumHargaBeli;
    const totalKeuntungan = `Rp${rumusKeuntungan.toLocaleString("id-ID")}`;

    // RUMUS MODAl USAHA 
    for (let i = 0; i < dataPenjualan.length; i++) {
        sumModal += ((dataPenjualan[i].hargaJual + dataPenjualan[i].sisaStock) * dataPenjualan[i].hargaBeli);
    }
    const totalModal = `Rp${sumModal.toLocaleString("id-ID")}`;

    // PRESENTASE
    const rumusPresentase = (rumusKeuntungan / sumHargaBeli) * 100
    const presentase = rumusPresentase.toFixed(2) + '%'

    // Mengurutkan data terbesar
    const dataSort = dataPenjualan.sort((a, b) => b.totalTerjual - a.totalTerjual)
    const sort = {
        produkBukuTerlaris: dataSort[0].namaProduk,
        penulisTerlaris: dataSort[0].penulis
    }

    // data akhir
    const data = {
        totalKeuntungan: totalKeuntungan,
        totalModal: totalModal,
        presentaseKeuntungan: presentase,
        ...sort
    }

    return console.log(data)
}

console.log(getInfoPenjualan(dataPenjualanNovel));