let names = [
        {name: "Tornike"},
        {name:"Tato"},
        {name:"Irakli"},
        {name:"Lasha"},
        {name:'Luka'},
    ]

names.pop();
names.push({name:"Magda"});
names.shift()
names.unshift({name:"Gvanca"})
console.log(names);

let addNumbers = []
for (let index = 1; index < 10000 ; index++) {
    addNumbers.push(index * index)
    
}
console.log(addNumbers)

const addNames = ['MY NAME IS ROI'];
for (let index = 0; index < addNames.length; index++) {
    const element = addNames[index].toLowerCase();
    
    console.log(element)
    
}
let randomNumbers = []
for (let index = 0; index < 30; index++) {
    if (index % 2 === 0); 
    randomNumbers.push(index * index)
}