
function listAnimals(){
    const nameAnimals = [];

    function lista(name){
        if (name){
            nameAnimals.push(name);   
            console.log(nameAnimals);         
        }
    }
    return lista;

}

const myPetList = listAnimals();
myPetList("michi");
myPetList("firulais");
myPetList();


