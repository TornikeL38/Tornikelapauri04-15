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