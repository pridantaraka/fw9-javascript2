const name = [
    'Abigail','Alexandra','Alison',
    'Amanda','Angela','Bella',
    'Carol','Caroline','Carolyn',
    'Deirdre','Diana','Elizabeth',
    'Ella','Faith','Olivia','Penelope'
]
const lowerName = name.map(a => a.toLowerCase())

function show(search,index,cb){
    let tampil = '';
    let x =''; 
    tampil = lowerName.filter(x => x.includes(search));
    x = tampil.slice(0, index);
    cb(x);
}

function searchName(answer) {
    console.log(answer);
}

show('ca',2,searchName);

