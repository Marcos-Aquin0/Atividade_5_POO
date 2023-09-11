import { App } from "./app";
import { Bike } from "./bike";
import { User } from "./user";

const app = new App()
const bike = new Bike('caloi mountain', 'mountain bike', 100, 200, 150.5, 
    'My bike', 5, [], 20, true)
const bikeId = app.registerBike(bike)
console.log(app.bikes)
const user1 = new User('Jose', 'jose@mail.com', '1234')
const user2 = new User('Maria', 'maria@mail.com', '1756')

console.log("Opção 0 -> signup")
console.log("Opção 1 -> login")

app.AutenticarUsuario(user1, 0)
app.AutenticarUsuario(user2, 0)

const yesterday = new Date()
yesterday.setDate(yesterday.getDate() - 1)
const today = new Date()
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
const dayAfterTomorrow = new Date()
dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2)
const twoDaysFromToday = new Date()
twoDaysFromToday.setDate(twoDaysFromToday.getDate() + 3)

app.rentBike(bikeId, 'jose@mail.com', bike.disponibilidade)
app.returnBike(bikeId, 'jose@mail.com')









