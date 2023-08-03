import { setYear, parseISO } from 'date-fns'

// Recebe um valor de uma data com um ano qualquer "2020-08-10" e retorna a data com o valor do ano ajustado, de forma a não ser retroativa

export function getFutureDate (date: string): Date {
    return setYear(parseISO(date), new Date().getFullYear() + 1)    // Acrescentar + 1 no ano baseado no ano atual
}

// parseISO: converte uma data no formato string para um objeto Date