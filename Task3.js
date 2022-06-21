    let dataArray = [2,25,4,14,17,30,8]

    function seleksi (nilaiAwal, nilaiAkhir) {
        let hasil = '';
        if(nilaiAwal<nilaiAkhir){
            hasil = dataArray.filter(dataA => dataA > nilaiAwal && dataA < nilaiAkhir);
        }else{
            console.log('tidak sesuai');
        }
        return hasil;
    }


    console.log(seleksi(5,20));