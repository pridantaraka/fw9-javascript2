    let dataArray = [2,25,4,14,17,30,8]
    // 
    dataArray.sort((a, b) => a - b);
    function seleksi (nilaiAwal, nilaiAkhir) {
        let hasil = '';
        if(dataArray.length < 5){
            console.log('Jumlah angka dalam dataArray harus lebih dari 5');
        }else if(nilaiAwal < nilaiAkhir){
            hasil = dataArray.filter(dataA => dataA > nilaiAwal && dataA < nilaiAkhir);
        }else{
            console.log('Nilai Akhir harus lebih besar dari 5');
        }
        return hasil;
    }

    console.log(seleksi(5,20));