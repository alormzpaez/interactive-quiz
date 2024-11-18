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
                options: ["x12 = 1.210029744 ; ε = 0.0000044309", "x13 = 1.211029744 ; ε = 0.0000045305", "x13 = 1.210029744 ; ε = 0.0000049305", "x12 = 1.212029744 ; ε = 0.0000415305"],
                correct_answer: "x13 = 1.211029744 ; ε = 0.0000045305",
                time: "25:00"
            },
            {
                type: 2,
                options: ["x10 = -0.232824464 ; ε = 0.0000012418", "x3 = -0.211824465 ; ε = 0.0000001673", "x1 = -0.211824465 ; ε = 0", "x1 = -0.21282446 ; ε = 0"],
                correct_answer: "x1 = -0.211824465 ; ε = 0",
                time: "25:00"
            },
            {
                type: 3,
                options: ["x12 = 1.297536476 ; ε = 0.000001078", "x14 = 1.287536476 ; ε = 0.000001078", "x13 = 1.297536476 ; ε = 0.000002078", "x13 = 1.307536471 ; ε = 0.000001078"],
                correct_answer: "x13 = 1.297536476 ; ε = 0.000002078",
                time: "25:00"
            },
            {
                type: 4,
                options: ["x1 = 0.139903947 ; ε = 0", "x1 = -0.129103948 ; ε = 0", "x11 = -0.139903947 ; ε = 0.000009129", "x1 = -0.139903947 ; ε = 0"],
                correct_answer: "x1 = -0.139903947 ; ε = 0",
                time: "25:00"
            },
            {
                type: 5,
                options: ["x16 = 2.3697805091 ; ε = 0.0000011747", "x15 = 2.3307985097 ; ε = 0.0000011712", "x16 = 2.3507805091 ; ε = 0.0000011747", "x10 = 2.2507805091 ; ε = 0.0000010129"],
                correct_answer: "x16 = 2.3507805091 ; ε = 0.0000011747",
                time: "25:00"
            },
        ]
    },
    {
        unit_id: UnitIds.U1_ID,
        method_id: 8,
        problems: [
            {
                type: 1,
                options: ["x3 = 1.210032226 ; ε = 0.000000445277", "x4 = 1.211032225 ; ε = 0.000000545277", "x4 = 1.212932225 ; ε = 0.000000545277", "x5 = 1.219032225 ; ε = 0.000000565277"],
                correct_answer: "x4 = 1.211032225 ; ε = 0.000000545277",
                time: "25:00"
            },
            {
                type: 2,
                options: ["x9 = -0.211824465 ; ε = 0.0000010073", "x8 = -0.212824463 ; ε = 0.0000020071", "x9 = -0.210824465 ; ε = 0.0000010072", "x9 = 0.212824465 ; ε = 0.0000020073"],
                correct_answer: "x9 = -0.211824465 ; ε = 0.0000010073",
                time: "30:00"
            },
            {
                type: 3,
                options: ["x4 = 1.297537504 ; ε = 0.000005761", "x3 = 1.307537504 ; ε = 0.000005761", "x4 = -1.297537504 ; ε = 0.000005129", "x3 = 1.397531241 ; ε = 0.000005661"],
                correct_answer: "x4 = 1.297537504 ; ε = 0.000005761",
                time: "25:00"
            },
            {
                type: 4,
                options: ["x9 = -0.140903941 ; ε = 0.000000055", "x8 = -0.140903947 ; ε = 0.000000055", "x8 = 0.140003947 ; ε = 0.000000055", "x9 = -0.139903947 ; ε = 0.000000055"],
                correct_answer: "x9 = -0.139903947 ; ε = 0.000000055",
                time: "35:00"
            },
            {
                type: 5,
                options: ["x7 = -0.8497810591 ; ε = 0.0000000005", "x6 = -0.8517810594 ; ε = 0", "x7 = -0.8507810594 ; ε = 0.0000000005", "x5 = -0.9507810594 ; ε = 0.0000000001"],
                correct_answer: "x7 = -0.8507810594 ; ε = 0.0000000005",
                time: "30:00"
            },
        ]
    },
    {
        unit_id: UnitIds.U1_ID,
        method_id: 9,
        problems: [
            {
                type: 1,
                options: ["x = 1.200686444 ; ε = 0.000585407", "x = 1.220686444 ; ε = 0.000686407", "x = 1.311686444 ; ε = 0.000585407", "x = 1.210686444 ; ε = 0.000685407"],
                correct_answer: "x = 1.210686444 ; ε = 0.000685407",
                time: "25:00"
            },
            {
                type: 2,
                options: ["x = -0.211957583 ; ε = 0.0019706628", "x = -0.212957583 ; ε = 0.0019706628", "x = 0.212957583 ; ε = 0.0020706628", "x = -0.213057583 ; ε = 0.0019706628"],
                correct_answer: "x = -0.212957583 ; ε = 0.0019706628",
                time: "25:00"
            },
            {
                type: 3,
                options: ["x = 1.287478041 ; ε = 0.000247098", "x = 1.297478041 ; ε = 0.000147098", "x = 1.296478042 ; ε = 0.000147098", "x = 1.307478041 ; ε = 0.000147098"],
                correct_answer: "x = 1.297478041 ; ε = 0.000147098",
                time: "25:00"
            },
            {
                type: 4,
                options: ["x = -0.139905538 ; ε = 0.000050467", "x = -0.140905538 ; ε = 0.000049467", "x = -0.138905538 ; ε = 0.000010467", "x = 0.140905538 ; ε = 0.000049467"],
                correct_answer: "x = -0.139905538 ; ε = 0.000050467",
                time: "30:00"
            },
            {
                type: 5,
                options: ["x = -0.8496651123 ; ε = 0.0003363644", "x = -0.8496651113 ; ε = 0.0004403644", "x = -0.8506651113 ; ε = 0.0004363644", "x = -0.8516651113 ; ε = 0.0003363644"],
                correct_answer: "x = -0.8506651113 ; ε = 0.0004363644",
                time: "25:00"
            },
        ]
    },
    {
        unit_id: UnitIds.U1_ID,
        method_id: 10,
        problems: [
            {
                type: 1,
                options: ["x7 = 1.211031281 ; ε = 0.00025490758", "x8 = 1.223031281 ; ε = 0.00015490758", "x7 = 1.221031288 ; ε = 0.00025590758", "x6 = 1.222031281 ; ε = 0.00025490758"],
                correct_answer: "x7 = 1.211031281 ; ε = 0.00025490758",
                time: "35:00"
            },
            {
                type: 2,
                options: ["x9 = -0.212864408 ; ε = 0.00008516", "x7 = -0.211724084 ; ε = 0.00002116", "x8 = -0.122824084 ; ε = 0.00009516", "x8 = -0.211824084 ; ε = 0.00008516"],
                correct_answer: "x8 = -0.211824084 ; ε = 0.00008516",
                time: "35:00"
            },
            {
                type: 3,
                options: ["x8 = 1.298525201 ; ε = 0.001365854", "x6 = 1.307525201 ; ε = 0.001365854", "x7 = 1.297525201 ; ε = 0.001265854", "x7 = 1.307525201 ; ε = 0.001285854"],
                correct_answer: "x7 = 1.297525201 ; ε = 0.001265854",
                time: "35:00"
            },
            {
                type: 4,
                options: ["x6 = 0.1631867939 ; ε = 0.0000025174", "x5 = 0.17329679132 ; ε = 0.0000025174", "x6 = 0.1732867939 ; ε = 0.0000024174", "x6 = 0.1730867939 ; ε = 0.0000014174"],
                correct_answer: "x6 = 0.1732867939 ; ε = 0.0000024174",
                time: "35:00"
            },
            {
                type: 5,
                options: ["x5 = 0.557143306 ; ε = 0.000027", "x5 = 0.567143306 ; ε = 0.000027", "x5 = 0.526143306 ; ε = 0.000021", "x5 = 0.568143306 ; ε = 0.000026"],
                correct_answer: "x5 = 0.567143306 ; ε = 0.000027",
                time: "35:00"
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

