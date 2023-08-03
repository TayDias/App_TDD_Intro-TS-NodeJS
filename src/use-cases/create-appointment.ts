import { Appointment } from "../entities/appointment"
import { AppointmentsRepository } from "../repositories/appointment-repository"

interface CreateAppointmentRequest {
    customer: string,
    startsAt: Date,
    endsAt: Date
}

type CreateAppointmentResponse = Appointment    // Retornar um objeto Appointment

export class CreateAppointment {
    constructor(
        private appointmentsRepository: AppointmentsRepository
    ) {}

    async execute({
        customer, 
        startsAt, 
        endsAt
    }: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {  // Promise devido a ser um método async
        const overLappingAppointment = await this.appointmentsRepository.findOverlappingAppointment(
            startsAt,
            endsAt
        )

        if(overLappingAppointment) {
            throw new Error('Another appointment overlaps this appoitment dates')
        }

        const appointment = new Appointment({
            customer, 
            startsAt, 
            endsAt
        })

        await this.appointmentsRepository.create(appointment)

        return appointment
    }
}

/* Ou simplesmente fazer sem desestruturar o objeto

export class CreateAppointment {
    async execute(request: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
        const appointment = new Appointment(request)

        return appointment
    }
}
*/