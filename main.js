/*
Firma nabízející trička s potiskem poskytuje množstevní slevy podle počtu objednaný kusů. 

Při objednávce pod 50 kusů stojí jedno tričko 300 Kč. 

Pokud si objednáme alespoň 50 kusů, je cena 250 Kč za kus. 

Při objednávce nad 200 kusů je cena 200 Kč za tričko. 

Nad 500 kusů zaplatíme 150 Kč za tričko a 

nad 1000 kusů zaplatíme 120 korun za tričko.

Napište stránku, která od uživatele obdrží počet kusů, které si chce objednat, a program odpoví celkovou ceny objednávky výpisem do stránky.
*/



const pocet = Number(prompt("Zadej počet kusů triček."));

let cena;

if (pocet < 50){
    cena = pocet *300
}else if (pocet < 200){
    cena = pocet *250
}else if (pocet < 500){
    cena = pocet *200
}else if (pocet < 1000){
    cena = pocet *150
}else if (pocet >= 1000){
    cena = pocet *120
}

document.body.innerHTML = "<p>Vaše cena je " + cena + "Kč.</p>"