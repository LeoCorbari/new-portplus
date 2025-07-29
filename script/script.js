// Mapeamento de dados de prefixo para refatorar gerarRota e gerarRecNum
const prefixData = {};

// Função auxiliar para adicionar dados de prefixo ao mapeamento
function addPrefixData(prefixes, data) {
    if (Array.isArray(prefixes)) {
        prefixes.forEach(prefix => {
            prefixData[prefix] = data;
        });
    } else {
        prefixData[prefixes] = data;
    }
}

// Popula o objeto prefixData com todos os prefixos e seus dados correspondentes
function populatePrefixData() {
    addPrefixData(463547, { sbc: "sbcproc01", code: "41030", area: "AEE", description: "Rota CLIENTE", city: "Ampere", ddd: "465", sbcCode: "55216", type: "190" });
    addPrefixData([463560, 462029, 462531, 463195], { sbc: "sbcproc01", code: "41487", area: "PBT", description: "Rota CLIENTE", city: "Pinhal de Sao Bento", ddd: "465", sbcCode: "55216", type: "190" });
    addPrefixData([462601, 462520, 463035, 463055, 463057, 463523, 463524, 463527, 463905, 463211, 463022, 463341, 463520, 463060, 463901, 463197, 463213], { sbc: "sbcproc01", code: "41235", area: "FNB", description: "Rota CLIENTE", city: "Francisco Beltrao", ddd: "465", sbcCode: "55216", type: "190" });
    addPrefixData([462808, 463525, 463529], { sbc: "sbcproc01", code: "41393", area: "MLE", description: "Rota CLIENTE", city: "Marmeleiro", ddd: "465", sbcCode: "55216", type: "190" });
    addPrefixData(463543, { sbc: "sbcproc01", code: "41536", area: "RLZ", description: "Rota CLIENTE", city: "Realeza", ddd: "465", sbcCode: "55216", type: "190" });
    addPrefixData(463552, { sbc: "sbcproc01", code: "41128", area: "CNM", description: "Rota CLIENTE", city: "Capanema", ddd: "465", sbcCode: "55216", type: "190" });
    addPrefixData(463227, { sbc: "sbcproc01", code: "41746", area: "VTO", description: "Rota CLIENTE", city: "Vitorino", ddd: "462", sbcCode: "55216", type: "190" });
    addPrefixData([462101, 463021, 463025, 463027, 463122, 463199, 463220, 463223, 463224, 463225, 463235, 463312, 463313, 463321, 464101, 463040, 463309], { sbc: "sbcproc01", code: "41469", area: "PBC", description: "Rota CLIENTE", city: "Pato Branco", ddd: "465", sbcCode: "55216", type: "190" });
    addPrefixData([462555, 463555], { sbc: "sbcproc01", code: "41499", area: "PNT", description: "Rota CLIENTE", city: "Planalto", ddd: "465", sbcCode: "55216", type: "190" });
    addPrefixData([463010, 463536, 463581], { sbc: "sbcproc01", code: "41192", area: "DVZ", description: "Rota CLIENTE", city: "Dois Vizinhos", ddd: "465", sbcCode: "55216", type: "190" });
    addPrefixData([463232, 463233, 463255], { sbc: "sbcproc01", code: "41145", area: "CVV", description: "Rota CLIENTE", city: "Coronel Vivida", ddd: "465", sbcCode: "55216", type: "190" });
    addPrefixData([493344, 493837, 493388, 493060, 493341, 493387, 493655, 493389, 493362, 493630], { sbc: "sbcproc01", code: "47175", area: "SNX", description: "Rota CLIENTE", city: "Sao Lourenco do Oeste", ddd: "497", sbcCode: "55216", type: "C48" });
    addPrefixData([463243, 463253, 463264, 463267], { sbc: "sbcproc01", code: "41373", area: "MUH", description: "Rota CLIENTE", city: "Mangueirinha", ddd: "462", sbcCode: "55216", type: "190" });
    addPrefixData([423026, 423027, 423028, 423029, 423086, 423087, 423088, 423089, 423227, 423236, 423224, 423226, 423228, 423238, 423225, 423323, 423229, 423243, 423223, 423122, 423222, 423239, 423235, 423025, 423905, 423010, 423301, 423220], { sbc: "sbcproc01", code: "41502", area: "PGO", description: "Rota CLIENTE", city: "Ponta Grossa", ddd: "422", sbcCode: "55216", type: "190" });
    addPrefixData([453039, 453038, 453037, 453036, 453035, 453096, 453097, 453098, 453099, 453226, 453306, 453326, 453220, 453040, 453323, 453222, 453223, 453016, 453286, 453224, 453229, 453288], { sbc: "sbcproc01", code: "41135", area: "CSC", description: "Rota CLIENTE", city: "Cascavel", ddd: "452", sbcCode: "55216", type: "190" });
    addPrefixData(423635, { sbc: "sbcproc01", code: "41351", area: "LJS", description: "Rota CLIENTE", city: "Laranjeiras o Sul", ddd: "427", sbcCode: "55216", type: "190" });
    addPrefixData([423638, 423662, 423682], { sbc: "sbcproc01", code: "41124", area: "CDQ", description: "Rota CLIENTE", city: "Candoi", ddd: "427", sbcCode: "55216", type: "190" });
    addPrefixData([423686, 423677, 423665, 423665, 423664], { sbc: "sbcproc01", code: "41491", area: "PHO", description: "Rota CLIENTE", city: "Pinhao", ddd: "427", sbcCode: "55216", type: "190" });
    addPrefixData([463550, 463090, 463144, 462033], { sbc: "sbcproc01", code: "41539", area: "RNN", description: "Rota CLIENTE", city: "Renascenca", ddd: "427", sbcCode: "55216", type: "190" });
    addPrefixData([463565, 462019, 463939], { sbc: "sbcproc01", code: "41223", area: "FSR", description: "Rota CLIENTE", city: "Flor da Serra do Sul", ddd: "427", sbcCode: "55216", type: "190" });
    addPrefixData([463564, 462034], { sbc: "sbcproc01", code: "41619", area: "SLF", description: "Rota CLIENTE", city: "Salgado Filho", ddd: "427", sbcCode: "55216", type: "190" });
    addPrefixData([463562, 462023], { sbc: "sbcproc01", code: "42306", area: "MFNP", description: "Rota CLIENTE", city: "Manfrinopolis", ddd: "427", sbcCode: "55216", type: "190" });
    addPrefixData([463538, 463016, 463191], { sbc: "sbcproc01", code: "41622", area: "STL", description: "Rota CLIENTE", city: "Salto do Lontra", ddd: "465", sbcCode: "55216", type: "190" });
    addPrefixData([463542, 462035, 463177], { sbc: "sbcproc01", code: "41657", area: "SZE", description: "Rota CLIENTE", city: "Santa Izabel do Oeste", ddd: "427", sbcCode: "55216", type: "190" });
    addPrefixData([443280, 443514, 443642, 443911, 442036, 443149], { sbc: "sbcproc01", code: "41054", area: "ASD", description: "Rota CLIENTE", city: "Assis Chateaubriand", ddd: "449", sbcCode: "55216", type: "190" });
    addPrefixData([422122, 423310, 423751, 423232, 423233, 423249, 423906, 423125], { sbc: "sbcproc01", code: "41136", area: "CAT", description: "Rota CLIENTE", city: "Castro", ddd: "422", sbcCode: "55216", type: "190" });
    addPrefixData([423848, 423080, 423240, 423318, 423446, 423908, 423145, 423043], { sbc: "sbcproc01", code: "41523", area: "PDT", description: "Rota CLIENTE", city: "Prudentopolis", ddd: "424", sbcCode: "55216", type: "190" });
    addPrefixData([423231, 423915, 423151], { sbc: "sbcproc01", code: "41130", area: "CBQ", description: "Rota CLIENTE", city: "Carambei", ddd: "424", sbcCode: "55216", type: "190" });
    addPrefixData([453320, 453299, 452055, 452103, 453373, 453421, 453165, 453536, 453020, 452078, 453252, 453277, 453278, 453313, 453378, 453379, 453380, 453903, 452035, 453125, 453053, 453054, 453055, 453056, 453057, 453065, 454054, 452434, 452470, 452482, 452484, 452488, 452517, 452528, 452554, 452558, 454102, 453196, 453256], { sbc: "sbcproc01", code: "41695", area: "TOO", description: "Rota CLIENTE", city: "Toledo", ddd: "452", sbcCode: "55216", type: "190" });
}

// Chama a função para popular os dados de prefixo uma vez ao carregar o script
populatePrefixData();

// Remove splash screen after timeout (ajustado para 4000ms para corresponder à animação CSS)
window.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(function() {
        document.getElementById('splash-screen').style.display = 'none';
    }, 4000);
});

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const html = document.documentElement;
    const darkModeIcon = document.getElementById('darkModeIcon');

    // Função para atualizar o ícone
    function updateIcon() {
        if (html.classList.contains('dark')) {
            // Ícone de lua para o modo escuro
            darkModeIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
<path fill-rule="evenodd" d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z" clip-rule="evenodd" />
</svg>`;
        } else {
            // Ícone de sol para o modo claro
            darkModeIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
<path d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z" />
</svg>
`;
        }
    }

    // Check for saved preference or system preference
    if (localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    }
    updateIcon(); // Atualiza o ícone na carga inicial

    darkModeToggle.addEventListener('click', function() {
        html.classList.toggle('dark');
        localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
        updateIcon(); // Atualiza o ícone após o toggle

        // Force repaint to ensure transition happens
        document.body.offsetHeight;
    });
});


// Função para exibir um toast
function showToast(message, type = 'error') {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800`;
    toast.setAttribute('role', 'alert');

    let iconDivClass = '';
    let iconSvg = '';
    let srOnlyText = '';

    if (type === 'success') {
        iconDivClass = 'inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200';
        iconSvg = `<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>`;
        srOnlyText = 'Check icon';
    } else if (type === 'error') {
        iconDivClass = 'inline-flex items-center justify-center shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200';
        iconSvg = `<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
        </svg>`;
        srOnlyText = 'Error icon';
    } else if (type === 'info') {
        iconDivClass = 'inline-flex items-center justify-center shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200';
        iconSvg = `<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
        </svg>`;
        srOnlyText = 'Info icon';
    }

    toast.innerHTML = `
        <div class="${iconDivClass}">
            ${iconSvg}
            <span class="sr-only">${srOnlyText}</span>
        </div>
        <div class="ms-3 text-sm font-normal">${message}</div>
        <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
        </button>
    `;

    const closeButton = toast.querySelector('button[aria-label="Close"]');
    closeButton.addEventListener('click', () => {
        toast.remove();
    });

    toastContainer.appendChild(toast);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        toast.remove();
    }, 5000);
}

function gerarCSV() {
    const terminaisRaw = document.getElementById("terminaisInput").value;
    // Divide a string em linhas e filtra linhas vazias
    const terminais = terminaisRaw.split('\n').map(terminal => {
        // Remove parênteses, hífens e espaços
        return terminal.replace(/[()-\s]/g, '').trim();
    }).filter(terminal => terminal.length > 0);

    const total_portabilidade = terminais.length;

    if (total_portabilidade === 0) {
        showToast("Por favor, insira os números de telefone no campo de texto.", 'info');
        return;
    }

    // Passa 'terminais' como argumento para a função validar
    if (validar(terminais)) {
        // Passa 'terminais' como argumento para as funções de geração
        const { csvRota, unknownPrefixes } = gerarRota(terminais);
        const rec_de_num = gerarRecNum(terminais);
        const plano_de_discagem = gerarPlanoDeDiscagem(terminais);

        if (unknownPrefixes.size > 0) {
            const prefixList = Array.from(unknownPrefixes).join(', ');
            showToast(`Os seguintes prefixos não foram localizados: ${prefixList}. A geração de CSVs foi interrompida.`, 'error');
            // Não precisa limpar 'this.terminais' pois 'terminais' é uma variável local
            return; // Interrompe a execução
        }

        downloadCSV(csvRota, rec_de_num, plano_de_discagem);
        showToast("Arquivos CSV gerados com sucesso!", 'success');
        // Não precisa limpar 'this.terminais' pois 'terminais' é uma variável local
    } else {
        showToast("Há campos com terminais sem preencher ou errados! Verifique se todos os números têm 10 dígitos.", 'error');
    }
}

// Recebe 'terminais' como argumento
function validar(terminais) {
    let valido = true;
    const terminaisInput = document.getElementById("terminaisInput");
    let hasError = false;

    // Remove a classe de erro antes de revalidar
    terminaisInput.classList.remove("erro");

    terminais.forEach((terminal) => {
        if (terminal.length !== 10 || !/^\d+$/.test(terminal)) { // Verifica se tem 10 dígitos e é apenas números
            valido = false;
            hasError = true;
        }
    });

    if (hasError) {
        terminaisInput.classList.add("erro"); // Adiciona a classe de erro ao textarea se houver algum erro
    }

    return valido;
}

// Recebe 'terminais' como argumento
function gerarPlanoDeDiscagem(terminais) {
    let csvPlanoDeDisc = "";

    terminais.forEach(function (terminal) {
        csvPlanoDeDisc += "^9090" + terminal + "$";
        csvPlanoDeDisc += ";" + "4";
        csvPlanoDeDisc += ";;" + "10";
        csvPlanoDeDisc += ";" + "A cobrar CLIENTE" + ";";
        csvPlanoDeDisc += "\n";
        csvPlanoDeDisc += "^0(14|21|31|41|43|15|25|99)" + terminal + "$";
        csvPlanoDeDisc += ";" + "3";
        csvPlanoDeDisc += ";;" + "10";
        csvPlanoDeDisc += ";" + "LDN CLIENTE" + ";";
        csvPlanoDeDisc += "\n";
    });

    return csvPlanoDeDisc;
}

// Recebe 'terminais' como argumento e usa o mapeamento prefixData
function gerarRota(terminais) {
    let csvRota = "";
    const unknownPrefixes = new Set(); // Usar um Set para armazenar prefixos únicos não encontrados

    terminais.forEach((terminal) => {
        let i_tn = "^" + terminal + "$";
        const currentPrefix = parseInt(terminal.substring(0, 6));
        const data = prefixData[currentPrefix]; // Busca os dados no mapeamento

        if (data) {
            csvRota += "2";
            csvRota += ";" + data.sbc;
            csvRota += ";" + data.area;
            csvRota += ";" + data.code;
            csvRota += ";" + i_tn;
            csvRota += ";;" + "normal";
            csvRota += ";;;" + "50";
            csvRota += ";" + data.description + ";";
            csvRota += "\n";
        } else {
            unknownPrefixes.add(currentPrefix);
        }
    });

    return { csvRota, unknownPrefixes };
}

// Recebe 'terminais' como argumento e usa o mapeamento prefixData
function gerarRecNum(terminais) {
    let csvRecNum = "";

    terminais.forEach((terminal) => {
        csvRecNum += "^" + terminal + "$";
        const currentPrefix = parseInt(terminal.substring(0, 6));
        const data = prefixData[currentPrefix]; // Busca os dados no mapeamento

        if (data) {
            csvRecNum += ";" + data.city;
            csvRecNum += ";" + data.ddd;
            csvRecNum += ";" + data.code;
            csvRecNum += ";" + data.area;
            csvRecNum += ";" + data.sbcCode;
            csvRecNum += ";" + data.type + ";";
            csvRecNum += "\n";
        }
        // Se o prefixo não for encontrado, ele já será capturado em gerarRota,
        // então não precisamos de uma verificação de erro duplicada aqui.
    });

    return csvRecNum;
}

function downloadCSV(rota, recNum, plano) {
    var hiddenElement = document.createElement("a");
    hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(rota);
    hiddenElement.target = "_blank";
    hiddenElement.download = "rota.csv";
    hiddenElement.click();

    hiddenElement = document.createElement("a"); // Reutiliza a variável
    hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(recNum);
    hiddenElement.target = "_blank";
    hiddenElement.download = "rec_num.csv";
    hiddenElement.click();

    hiddenElement = document.createElement("a"); // Reutiliza a variável
    hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(plano);
    hiddenElement.target = "_blank";
    hiddenElement.download = "plano.csv";
    hiddenElement.click();
}
