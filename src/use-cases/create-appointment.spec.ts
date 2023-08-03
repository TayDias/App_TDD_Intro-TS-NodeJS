import { describe, expect, it } from "vitest";
import { CreateAppointment } from "./create-appointment";
import { Appointment } from "../entities/appointment";
import { getFutureDate } from "../tests/utils/get-future-date";
import { InMemoryAppointmentsRepository } from "../repositories/in-memory/in-memory-appointments-repository";

describe('Create Appointment', () => {
    it('should be able to create an appointment', () => {
        const startsAt = getFutureDate('2023-08-10')
        const endsAt = getFutureDate('2023-08-11')

        const appointmentsRepository = new InMemoryAppointmentsRepository()
        const createAppointment = new CreateAppointment(appointmentsRepository)

        expect(createAppointment.execute({
            customer: 'John Doe',
            startsAt,
            endsAt
        })).resolves.toBeInstanceOf(Appointment)    // Esperado que consiga criar uma instancia dessa classe
    })

    it('should not be able to create an appointment with overlapping dates', async () => {
        const startsAt = getFutureDate('2023-08-10')
        const endsAt = getFutureDate('2023-08-15')

        const appointmentsRepository = new InMemoryAppointmentsRepository()
        const createAppointment = new CreateAppointment(appointmentsRepository)

        await createAppointment.execute({
            customer: 'John Doe',
            startsAt,
            endsAt
        })

        expect(createAppointment.execute({
            customer: 'John Doe',
            startsAt: getFutureDate('2023-08-14'),
            endsAt: getFutureDate('2023-08-16')
        })).rejects.toBeInstanceOf(Error)    // Esperado que falhe ao criar um agendamento com datas simultâneas aos agendamentos anteriores

        expect(createAppointment.execute({
            customer: 'John Doe',
            startsAt: getFutureDate('2023-08-10'),
            endsAt: getFutureDate('2023-08-15')
        })).rejects.toBeInstanceOf(Error)

        expect(createAppointment.execute({
            customer: 'John Doe',
            startsAt: getFutureDate('2023-08-09'),
            endsAt: getFutureDate('2023-08-10')
        })).rejects.toBeInstanceOf(Error) 
    })
})

// describe: Criar categorização dos testes