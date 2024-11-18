import { MethodProblemsData } from "../interfaces";
import { UnitIds } from "./UnitsData";

const urlImage = "https://static.vecteezy.com/system/resources/thumbnails/033/135/472/small_2x/ai-generative-beautiful-winter-landscape-with-snow-covered-trees-photo.jpg";

export const UnitOneProblemsData : MethodProblemsData[] = [
    {
        unit_id: UnitIds.U1_ID,
        method_id: 1,
        problems: [
            {
                type: 1,
                options: ["g(3) = 1.180600195 ; ε = 0.075087906", "g(3) = 1.173600194 ; ε = 0.074987905", "g(3) = 1.172600199 ; ε = 0.074987905", "g(3) = 1.173600194 ; ε = 0.084087905"],
                correct_answer: "g(3) = 1.173600194 ; ε = 0.074987905",
                time: "5:00"
            },
            {
                type: 2,
                options: ["g(4) = 1.344025199 ; ε = 0.03226926", "g(4) = 1.354025101 ; ε = 0.03326939", "g(4) = 1.344025198 ; ε = 0.03226926", "g(4) = 1.354025101 ; ε = 0.03226926"],
                correct_answer: "g(4) = 1.354025101 ; ε = 0.03226926",
                time: "5:00"
            },
            {
                type: 3,
                options: ["g(3) = 1.08552686 ; ε = 0.014085438", "g(3) = 1.08353686 ; ε = 0.014085438", "g(3) = 1.08452685 ; ε = 0.014085438", "g(3) = 1.08452685 ; ε = 0.015085438"],
                correct_answer: "g(3) = 1.08452685 ; ε = 0.014085438",
                time: "5:00"
            },
            {
                type: 4,
                options: ["g(2) = 0.549306144 ; ε = 0.150841037", "g(2) = 0.550306147 ; ε = 0.143841036", "g(2) = 0.549306144 ; ε = 0.143841036", "g(2) = 0.559306144 ; ε = 0.143841036"],
                correct_answer: "g(2) = 0.549306144 ; ε = 0.143841036",
                time: "5:00"
            },
            {
                type: 5,
                options: ["g(2) = 0.46209812 ; ε = 0.33104906", "g(2) = 0.46209812 ; ε = 0.23104906", "g(2) = 0.46209812 ; ε = 0.22194907", "g(2) = 0.45809818 ; ε = 0.23104906"],
                correct_answer: "g(2) = 0.46209812 ; ε = 0.23104906",
                time: "5:00"
            },
        ]
    },
    {
        unit_id: UnitIds.U1_ID,
        method_id: 2,
        problems: [
            {
                type: 1,
                options: ["No puede resolverse con este método porque los intervalos son no uniformes", "g(3.3) = 3.02753909", "g(3.3) = 3.02693809", "g(3.3) = 3.03043809"],
                correct_answer: "No puede resolverse con este método porque los intervalos son no uniformes",
                time: "15:00"
            },
            {
                type: 2,
                options: ["g(3.75) = 3.464414007", "g(3.75) = 3.564424107", "No puede resolverse con este método porque los intervalos son no uniformes", "g(3.75) = 3.563424107"],
                correct_answer: "No puede resolverse con este método porque los intervalos son no uniformes",
                time: "15:00"
            },
            {
                type: 3,
                options: ["g(1.8) = 0.44632653", "g(1.8) = 0.45001653", "g(1.8) = 0.43991652", "g(1.8) = 0.4430991"],
                correct_answer: "g(1.8) = 0.44632653",
                time: "10:00"
            },
            {
                type: 4,
                options: ["g(0.158) = 0.787935086", "g(0.158) = 0.798045089", "g(0.158) = 0.77994590", "g(0.158) = 0.799945081"],
                correct_answer: "g(0.158) = 0.787935086",
                time: "10:00"
            },
            {
                type: 5,
                options: ["g(0.636) = 0.651814477", "g(0.636) = 0.69104077", "g(0.636) = 0.641914479", "g(0.636) = 0.64914477"],
                correct_answer: "g(0.636) = 0.651814477",
                time: "10:00"
            },
        ]
    },
    {
        unit_id: UnitIds.U1_ID,
        method_id: 3,
        problems: [
            {
                type: 1,
                options: ["No puede resolverse con este método porque los intervalos son no uniformes", "g(3.75) = 3.8818370122", "g(3.75) = 3.891328420", "g(3.75) = 3.8820369129"],
                correct_answer: "No puede resolverse con este método porque los intervalos son no uniformes",
                time: "15:00"
            },
            {
                type: 2,
                options: ["g(3.3) = 3.8918947823", "g(3.3) = 3.8818370122", "No puede resolverse con este método porque los intervalos son no uniformes", "g(3.3) = 3.901238921"],
                correct_answer: "No puede resolverse con este método porque los intervalos son no uniformes",
                time: "15:00"
            },
            {
                type: 3,
                options: ["g(0.158) = 0.788045089", "g(0.158) = 0.787935086", "g(0.158) = 0.78994590", "g(0.158) = 0.789945081"],
                correct_answer: "g(0.158) = 0.787935086",
                time: "10:00"
            },
            {
                type: 4,
                options: ["g(0.636) = 0.651814477", "g(0.636) = 0.65104077", "g(0.636) = 0.651914479", "g(0.636) = 0.64914477"],
                correct_answer: "g(0.636) = 0.651814477",
                time: "10:00"
            },
            {
                type: 5,
                options: ["g(1.8) = 0.446326", "g(1.8) = 0.456312", "g(1.8) = 0.437325", "g(1.8) = 0.446336"],
                correct_answer: "g(1.8) = 0.446326",
                time: "10:00"
            },
        ]
    },
    {
        unit_id: UnitIds.U1_ID,
        method_id: 4,
        problems: [
            {
                type: 1,
                options: ["g(3.75) = 3.679454207", "g(3.75) = 3.575424107", "g(3.75) = 3.553434109", "No puede resolverse con este método porque los intervalos son uniformes"],
                correct_answer: "g(3.75) = 3.575424107",
                time: "15:00"
            },
            {
                type: 2,
                options: ["g(3.3) = 2.02763808", "g(3.3) = 3.03763819", "g(3.3) = 3.02753909", "No puede resolverse con este método porque los intervalos son uniformes"],
                correct_answer: "g(3.3) = 3.02753909",
                time: "20:00"
            },
            {
                type: 3,
                options: ["No puede resolverse con este método porque los intervalos son uniformes", "g(3.75) = 3.822506225", "g(3.75) = 3.811506224", "g(3.75) = 3.811605114"],
                correct_answer: "g(3.75) = 3.811605114",
                time: "15:00"
            },
            {
                type: 4,
                options: ["No puede resolverse con este método porque los intervalos son no uniformes", "No puede resolverse con este método porque los intervalos son uniformes", "g(3.75) = 3.575267855", "g(3.75) = 3.574367955"],
                correct_answer: "g(3.75) = 3.575267855",
                time: "15:00"
            },
            {
                type: 5,
                options: ["No puede resolverse con este método porque los intervalos son uniformes", "g(3.3) = 2.956846798", "g(3.3) = 2.659856697", "g(3.3) = 2.956577908"],
                correct_answer: "g(3.3) = 2.956846798",
                time: "20:00"
            },
        ]
    },
    {
        unit_id: UnitIds.U1_ID,
        method_id: 5,
        problems: [
            {
                type: 1,
                options: ["g(3.3) = 3.02972661", "g(3.3) = 3.02852661", "g(3.3) = 3.02955661", "g(3.3) = 3.03022661"],
                correct_answer: "g(3.3) = 3.02972661",
                time: "20:00"
            },
            {
                type: 2,
                options: ["g(3.3) = 2.02643801", "g(3.3) = 3.03043820", "g(3.3) = 3.02753909", "g(3.3) = 3.02643809"],
                correct_answer: "g(3.3) = 3.02753909",
                time: "20:00"
            },
            {
                type: 3,
                options: ["g(3.75) = 3.810505224", "g(3.75) = 3.812506225", "g(3.75) = 3.812506224", "g(3.75) = 3.811605114"],
                correct_answer: "g(3.75) = 3.811605114",
                time: "17:00"
            },
            {
                type: 4,
                options: ["g(3.75) = 3.565367855", "No puede resolverse con este método porque los intervalos son uniformes", "g(3.75) = 3.575267858", "g(3.75) = 3.574367955"],
                correct_answer: "g(3.75) = 3.575267858",
                time: "17:00"
            },
            {
                type: 5,
                options: ["No puede resolverse con este método porque los intervalos son uniformes", "g(3.3) = 2.956847098", "g(3.3) = 2.949856697", "g(3.3) = 2.956577908"],
                correct_answer: "g(3.3) = 2.956847098",
                time: "20:00"
            },
        ]
    },
    {
        unit_id: UnitIds.U1_ID,
        method_id: 6,
        problems: [
            {
                type: 1,
                options: ["4", "5", "6", "7"],
                correct_answer: "4",
                time: "5:00"
            },
            {
                type: 2,
                options: ["4", "5", "6", "7"],
                correct_answer: "4",
                time: "5:00"
            },
            {
                type: 3,
                options: ["4", "5", "6", "7"],
                correct_answer: "4",
                time: "5:00"
            },
            {
                type: 4,
                options: ["4", "5", "6", "7"],
                correct_answer: "4",
                time: "5:00"
            },
            {
                type: 5,
                options: ["4", "5", "6", "7"],
                correct_answer: "4",
                time: "5:00"
            },
        ]
    },
    {
        unit_id: UnitIds.U1_ID,
        method_id: 7,
        problems: [
            {
                type: 1,
                options: ["4", "5", "6", "7"],
                correct_answer: "4",
                time: "5:00"
            },
            {
                type: 2,
                options: ["4", "5", "6", "7"],
                correct_answer: "4",
                time: "5:00"
            },
            {
                type: 3,
                options: ["4", "5", "6", "7"],
                correct_answer: "4",
                time: "5:00"
            },
            {
                type: 4,
                options: ["4", "5", "6", "7"],
                correct_answer: "4",
                time: "5:00"
            },
            {
                type: 5,
                options: ["4", "5", "6", "7"],
                correct_answer: "4",
                time: "5:00"
            },
        ]
    },
    {
        unit_id: UnitIds.U1_ID,
        method_id: 8,
        problems: [
            {
                type: 1,
                options: ["4", "5", "6", "7"],
                correct_answer: "4",
                time: "5:00"
            },
            {
                type: 2,
                options: ["4", "5", "6", "7"],
                correct_answer: "4",
                time: "5:00"
            },
            {
                type: 3,
                options: ["4", "5", "6", "7"],
                correct_answer: "4",
                time: "5:00"
            },
            {
                type: 4,
                options: ["4", "5", "6", "7"],
                correct_answer: "4",
                time: "5:00"
            },
            {
                type: 5,
                options: ["4", "5", "6", "7"],
                correct_answer: "4",
                time: "5:00"
            },
        ]
    },
    {
        unit_id: UnitIds.U1_ID,
        method_id: 9,
        problems: [
            {
                type: 1,
                options: ["4", "5", "6", "7"],
                correct_answer: "4",
                time: "5:00"
            },
            {
                type: 2,
                options: ["4", "5", "6", "7"],
                correct_answer: "4",
                time: "5:00"
            },
            {
                type: 3,
                options: ["4", "5", "6", "7"],
                correct_answer: "4",
                time: "5:00"
            },
            {
                type: 4,
                options: ["4", "5", "6", "7"],
                correct_answer: "4",
                time: "5:00"
            },
            {
                type: 5,
                options: ["4", "5", "6", "7"],
                correct_answer: "4",
                time: "5:00"
            },
        ]
    },
    {
        unit_id: UnitIds.U1_ID,
        method_id: 10,
        problems: [
            {
                type: 1,
                options: ["4", "5", "6", "7"],
                correct_answer: "4",
                time: "5:00"
            },
            {
                type: 2,
                options: ["4", "5", "6", "7"],
                correct_answer: "4",
                time: "5:00"
            },
            {
                type: 3,
                options: ["4", "5", "6", "7"],
                correct_answer: "4",
                time: "5:00"
            },
            {
                type: 4,
                options: ["4", "5", "6", "7"],
                correct_answer: "4",
                time: "5:00"
            },
            {
                type: 5,
                options: ["4", "5", "6", "7"],
                correct_answer: "4",
                time: "5:00"
            },
        ]
    },
    
]

// export const unitOneProblemsData = answers.map((answer) => {
//     return {
//         type: answer.type,
//         unit_id: UnitIds.U1_ID,
//         method_id: 1,
//         question: "¿Cuál es el resultado de 2 + 2?",
//         path: urlImage,
//         options: answer.options,
//         correct_answer: answer.correct_answer
//     }
// })

