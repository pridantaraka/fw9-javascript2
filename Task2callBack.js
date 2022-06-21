const name = [
    'Abigail','Alexandra','Alison',
    'Amanda','Angela','Bella',
    'Carol','Caroline','Carolyn',
    'Deirdre','Diana','Elizabeth',
    'Ella','Faith','Olivia','Penelope'
]

function show(search,cb){
    let tampil = '';
    let a =''; 
    search = name.filter(x => x.includes('A','n'));
    a = name.slice(0, 3);
    tampil = a,search;
    cb(tampil);
}

function searchName(answer) {
    console.log(answer);
}

show('',searchName);
