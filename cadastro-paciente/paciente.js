const nomePaciente = "Carlos Eduardo";
let idade = 42;
let possuiPlanoSaude = true;
const tipoSanguineo = "O+";

console.log(`Paciente: ${nomePaciente} | Idade: ${idade} anos | Tipo Sanguíneo: ${tipoSanguineo} | Possui plano de saúde: ${possuiPlanoSaude}.`);

const examesAgendados = ["Hemograma", "Raio-X", "Eletrocardiograma", "Ultrassom"];

if (possuiPlanoSaude === true) {
    console.log(`Atendimento de ${nomePaciente} liberado pelo convênio para os exames: ${examesAgendados.join(", ")}.`);
} else {
    console.log(`Atendimento particular para ${nomePaciente}. Encaminhar ao financeiro.`);
}

if (examesAgendados.length === 4 && idade > 0) {
    console.log("Validação do sistema: Cadastro concluído com 5 variáveis, 2 condicionais e 3 saídas exibidas.");
} else {
    console.log("Erro na validação do cadastro do paciente.");
}
