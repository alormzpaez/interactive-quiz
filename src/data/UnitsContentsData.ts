import { UnitsContentsDataInterface } from "../interfaces";
import { UnitFourProblemsData } from "./UnitFourProblemsData";
import { UnitOneProblemsData } from "./UnitOneProblemsData";
import { UnitIds } from "./UnitsData";
import { UnitThreeProblemsData } from "./UnitThreeProblemsData";
import { UnitTwoProblemsData } from "./UnitTwoProblemsData";

export const UnitsContentsData: UnitsContentsDataInterface[] = [
    {
        order: 1,
        unit_id: UnitIds.U1_ID,
        topic : "Interpolación",
        methods: [
            {
                id: 1,
                method_name: "Interpolación Lineal"
            },
            {
                id: 2,
                method_name: "Newton hacia Adelante"
            },
            {
                id: 3,
                method_name: "Newton hacia Atrás"
            },
            {
                id: 4,
                method_name: "Newton con Diferencias Divididas"
            },
            {
                id: 5,
                method_name: "Lagrange"
            },
        ]

    },
    {
        order: 2,
        unit_id: UnitIds.U1_ID,
        topic : "Solución de Ecuaciones no Lineales",
        methods: [
            {
                id: 6,
                method_name: "Bisectriz"
            },
            {
                id: 7,
                method_name: "Punto Fijo ó Sustituciones Sucesivas"
            },
            {
                id: 8,
                method_name: "Newton – Raphson"
            },
            {
                id: 9,
                method_name: "Falsa Posición ó Regula – Falsi (Latín)"
            },
            {
                id: 10,
                method_name: "Secante"
            },
        ]
    },
    {
        order: 1,
        unit_id: UnitIds.U2_ID,
        topic : "Solución de Ecuaciones Lineales",
        methods: [
            {
                id: 1,
                method_name: "Montante"
            },
            {
                id: 2,
                method_name: "Gauss – Jordán"
            },
            {
                id: 3,
                method_name: "Eliminación Gaussiana"
            },
            {
                id: 4,
                method_name: "Gauss – Seidel"
            },
            {
                id: 5,
                method_name: "Jacobi"
            },
        ]
    },
    {
        order: 2,
        unit_id: UnitIds.U2_ID,
        topic : "Mínimos Cuadrados",
        methods: [
            {
                id: 6,
                method_name: "Línea Recta"
            },
            {
                id: 7,
                method_name: "Cuadrática"
            },
            {
                id: 8,
                method_name: "Cúbica"
            },
            {
                id: 9,
                method_name: "Lineal con Función"
            },
            {
                id: 10,
                method_name: "Cuadrática con Función"
            },
        ]
    },
    {
        order: 1,
        unit_id: UnitIds.U3_ID,
        topic : "Integración",
        methods: [
            {
                id: 1,
                method_name: "Regla Trapezoidal"
            },
            {
                id: 2,
                method_name: "Regla de 1/3 de Simpson "
            },
            {
                id: 3,
                method_name: "Regla de 3/8 de Simpson "
            },
            {
                id: 4,
                method_name: "Newton – Cotes Cerradas "
            },
            {
                id: 5,
                method_name: "Newton – Cotes Abiertas"
            },
            {
                id: 6,
                method_name: "Tablas de Constantes para las fórmulas Cerradas y Abiertas de Newton – Cotes"
            },
        ]
    },
    {
        order: 1,
        unit_id: UnitIds.U4_ID,
        topic : "Ecuaciones Diferenciales Ordinarias ",
        methods: [
            {
                id: 1,
                method_name: "Euler"
            },
            {
                id: 2,
                method_name: "Hacia Adelante"
            },
            {
                id: 3,
                method_name: "Hacia Atrás"
            },
            {
                id: 4,
                method_name: "Modificado"
            },
            {
                id: 5,
                method_name: "Runge – Kutta: 2do. orden"
            },
            {
                id: 6,
                method_name: "Runge – Kutta: 3er. orden"
            },
            {
                id: 7,
                method_name: "4to. Orden: 1/3 de Simpson "
            },
            {
                id: 8,
                method_name: "4to. Orden: 3/8 de Simpson "
            },
            {
                id: 9,
                method_name: "Orden Superior"
            },

        ]
    },
];

export const globalUnitProblems = [ ...UnitOneProblemsData, ...UnitTwoProblemsData, ...UnitThreeProblemsData, ...UnitFourProblemsData]