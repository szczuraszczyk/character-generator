function createCharacter(imie, klasa) {

    return {
        name: imie,
        role: klasa,
        level: 1,
        skills: ["niegotujhani", "mega pierdnięcie"],
        equipment: {
            weapon: "miecz",
            armor: "złote gacie",
            items: ["garnek", "nadgryziony owad"]
        }
    }
}

function addItem(character, item) {
    character.equipment.items.push(item);
}

function learnSkill(character, newSkill){
    character.skills.push(newSkill);
}

function levelUp(character){
    const currentLevel = character.level;
    character.level = currentLevel + 1;
}

function characterDescription(character){
    const description = character.name + "\n" + character.role + "\n" + character.skills;
    console.log(description);
}

const myCharacter = createCharacter("Owad", "Pospolity");

addItem(myCharacter, "buty");

learnSkill(myCharacter, "Przywolywanie Tabubu");

levelUp(myCharacter);

characterDescription(myCharacter);


console.log(myCharacter);