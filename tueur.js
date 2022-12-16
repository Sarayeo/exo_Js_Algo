/*Jean est un chevalier qui possède 10pv et une armure au début du jeu
Il va affronter les ennemis en boucle jusqu’à la mort

Les ennemis possèdent 3pv et un pourcentage d’armure et d’attaque :
    le pourcentage d'armure signifie que Jean a [pourcentage] de chance de toucher l'ennemi
le pourcentage d'attaque signifie que l'ennemi a [pourcentage] de chance de toucher Jean
ces deux statistiques sont égales (10% initialement)
le pourcentage augmente de 5% chaque fois que l'ennemi survit à un tour

L'armure de Jean a 30% de chance de se casser lors d'un coup de l'ennemi
on considère que le coup qui brise l'armure n'inflige pas de dégâts supplémentaires.

    Si Jean possède une armure, son épée a 70% de toucher l'ennemi, sinon, 50% seulement.
Jean et l'ennemi infligent 1pv de dégât*/

class chevalier {
    constructor(nom,pv) {
        this.nom = nom;
        this.hasarmure = true;
        this.pv = pv;
        this.win = 0;
    }

    touche(){
        if(this.hasarmure) {
            return Math.random () < 0.7 ;
        }else{
            return Math.random () < 0.5 ;
        }
    }
}
let Jean = new chevalier("Jean", 10)

class Victime{
    constructor(pourcentage) {
        this.pourcentage = pourcentage;
        this.pv = 3;
        this.nouveaufighter= true;
    }

    contreattack(){
        if(this.pourcentage) {
            return Math.random () < 0.1 ;
        }else{
            return Math.random () < 0.5 ;
        }
    }

}
let victime = new Victime(0.1)

while (Jean.pv > 0 ) {
    console.log(Jean.pv)
    if(Jean.touche(victime)){
        victime.pv --
    }else{
        console.log("victime did not get touched")
    }
    if (victime.pv<=0){
        console.log("victime is  dead")
    }
    victime.contreattack(Jean)
    console.log(victime.pv)
    if (victime.pv<=0){
        console.log(" pika death")
    }
}