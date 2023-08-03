import { expect, test } from 'vitest'
import { Appointment } from './appointment'
import { getFutureDate } from '../tests/utils/get-future-date'

test('create an appointment', () => {
    const startsAt = getFutureDate('2023-08-10')
    const endsAt = getFutureDate('2023-08-16')

    const appointment = new Appointment({
        customer: 'John Doe',
        startsAt,
        endsAt
    })

    expect(appointment).toBeInstanceOf(Appointment) // Esperado que o appointment seja uma instância da classe Appointment
    //expect(appointment.customer).toEqual('John Doe') // Esperado que o customer seja igual a John Doe
})

test('cannot create an appointment with end date before start date', () => {
    const startsAt = getFutureDate('2023-08-10')
    const endsAt = getFutureDate('2023-08-09')

    expect(() => {
        return new Appointment({
            customer: 'John Doe',
            startsAt,
            endsAt
        })
    }).toThrow()    // Esperado que ocorra uma exceção
})

test('cannot create an appointment with end date before now', () => {
    const startsAt = new Date()
    const endsAt = new Date()

    startsAt.setDate(startsAt.getDate() - 1)   // Volta um dia da data
    endsAt.setDate(endsAt.getDate() + 3)    // Add três dias na data

    expect(() => {
        return new Appointment({
            customer: 'John Doe',
            startsAt,
            endsAt
        })
    }).toThrow() 
})