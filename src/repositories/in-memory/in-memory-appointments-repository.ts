import { areIntervalsOverlapping } from "date-fns"
import { Appointment } from "../../entities/appointment";
import { AppointmentsRepository } from "../appointment-repository";

export class InMemoryAppointmentsRepository implements AppointmentsRepository {
    public items: Appointment[] = []

    async create(appointment: Appointment): Promise<void> {
        this.items.push(appointment)
    }

    async findOverlappingAppointment(startsAt: Date, endsAt: Date): Promise<Appointment | null> {
        const overLappingAppointment = this.items.find(appointment => {
            // Percorre todos os itens cadastrados e retorna true caso os intervalos de algum conflite, senão retorna false
            return areIntervalsOverlapping(
                { start: startsAt, end: endsAt },   // Intevalo do agendamento da memória
                { start: appointment.startsAt, end: appointment.endsAt },    // Intervalo do agendamento que está sendo cadastrado
                { inclusive: true }     // Comparar datas iguais também (<= e >=)
            )
        })

        if (!overLappingAppointment) {
            return null
        }
        
        return overLappingAppointment
    }
}

// Classe que implementa o "contrato" AppointmentsRepository
// Funciona como um banco de dados em memória