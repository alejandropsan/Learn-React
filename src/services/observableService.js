import { Observable } from "rxjs"



export const getNumbers = new Observable(subscriber => {
    // Vamos a emitir valores:
    setTimeout(() => {
        subscriber.next(1)
    }, 2000)
    setTimeout(() => {
        subscriber.next(3)
    }, 2000)
    setTimeout(() => {
        subscriber.next(5)
    }, 2000)
    setTimeout(() => {
        subscriber.next(80)
        subscriber.complete()}, 2000)
})