const formatter = new Intl.NumberFormat("es-CO", {
    currency: "COP",
});

export function copFormat(n: number) {
    return formatter.format(n);
}
