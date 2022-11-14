class User {
    constructor(firstName,lastName,calorieCount,proteinCount,carbohydrateCount,lipidCount){
        this.firstName = firstName;
        this.lastName = lastName;
        this.setWidgetData(calorieCount,proteinCount,carbohydrateCount,lipidCount)
    }

    setWidgetData(calorieCount,proteinCount,carbohydrateCount,lipidCount){
        this.calorieCount = calorieCount
        this.proteinCount = proteinCount
        this.carbohydrateCount = carbohydrateCount
        this.lipidCount = lipidCount
    }

    getFirstName(){
        return this.firstName;
    }
    getLastName(){
        return this.lastName;
    }
    /**
     * 
     * @returns the complete name
     */
    getCompleteName(){
        return this.formatString(this.getFirstName() + ' ' + this.getLastName())
    }
    /**
     * Return Capitalized String
     * @param {*} string 
     * @returns 
     */
    formatString(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    getCalorie(){
        return this.calorieCount
    }
    getProtein(){
        return this.proteinCount
    }
    getCarbohydrate(){
        return this.carbohydrateCount
    }
    getLipid(){
        return this.lipidCount
    }

}

const toto = new User('John','Doe',10,100,1000,10000)
console.log(toto)
console.log('Name :',toto.getCompleteName())
console.log('Calorie :',toto.getCalorie())
console.log('Protein :',toto.getProtein())
console.log('Carbohydrate :',toto.getCarbohydrate())
console.log('Lipid :',toto.getLipid())
