import { test, expect } from "vitest";
import { getFutureDate } from "./get-future-date";

test('increases date', () => {
    const year = new Date().getFullYear()

    expect(getFutureDate(`${year}-08-01`).getFullYear()).toEqual(year+1) // Esperado que o ano seja igual ao próximo ano
})

// getFutureDate função criada que retorna uma objeto do tipo Date