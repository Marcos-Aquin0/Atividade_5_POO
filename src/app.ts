import { Bike } from "./bike";
import { User } from "./user";
import crypto from 'crypto'

export class App {
    users: User[] = []
    bikes: Bike[] = []

    findUser(email: string): User {
        return this.users.find(user => user.email === email)
    }

    AutenticarUsuario(user: User, help: number, email?: string, password?: string): string | void {
        //help = 1 - login; = 0 - signup
        if(!help){
            return this.SignUp(user)
        }
        else {
            return this.LogIn(user, email, password)
        }
    }

    SignUp(user: User): string | void{
        for (const rUser of this.users) {
            if (rUser.email === user.email) {
                // throw new Error('Duplicate user. Please use another email or log in')
                console.log('Duplicate user. Please use another email or log in')
                return 
            }
        }
        const newId = crypto.randomUUID()
        user.id = newId
        this.users.push(user)
        console.log ('Usuario ' + user.name + ' cadastrado')
        return newId
    }

    LogIn(user: User, email: string, password: string){
        for (const rUser of this.users) {
            if (email === user.email) {
                if(password === user.password)
                    console.log ("Usuario autenticado")
                    return
            }
        }
        // throw new Error('Tente novamente. Email e/ou senha incorretos')
        console.log('Tente novamente. Email e/ou senha incorretos')
    }

    registerBike(bike: Bike): string {
        const newId = crypto.randomUUID()
        bike.id = newId
        this.bikes.push(bike)
        return newId
    }

    removeUser(email: string): void {
        const userIndex = this.users.findIndex(user => user.email === email)
        if (userIndex !== -1) {
            this.users.splice(userIndex, 1)
            return
        }
        throw new Error('User does not exist.')
    }
    
    rentBike(bikeId: string, userEmail: string, possivel: boolean): void {
        if(possivel){
            possivel = false
            console.log('Bike alugada')
        } 
        else{
            console.log('Bike indisponível, alugue outra bike')
        }
    }

    returnBike(bike: Bike, userEmail: string, diaInicio: Date, diaRetorno: Date): number {
        // data que começou, que devolveu, valor da diaria
        // const today = new Date()
        let valor 
        valor = (diaRetorno.getTime() / (1000*60*60*24) - diaInicio.getTime() / (1000*60*60*24)) * bike.diaria
        return valor
    }


    listUsers() : void{
        let a = 0
        for (const rUser of this.users) {
            a +=1
            console.log("Nº", a, rUser)
        }
    }

    listBikes() : void{
        let a = 0
        for (const rBike of this.bikes) {
            a +=1
            console.log("Nº", a, rBike)
        }
    }

}