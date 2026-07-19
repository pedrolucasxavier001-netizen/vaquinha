// Dados das campanhas (simulado com localStorage)
const STORAGE_KEY = 'vaquinhas_campaigns';

// SVGs para cada categoria
const categoryIcons = {
    saude: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect fill="#ff6b6b" width="100" height="100"/><g fill="white"><path d="M50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 50c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z"/><rect x="47" y="35" width="6" height="30" fill="white"/><rect x="35" y="47" width="30" height="6" fill="white"/></g></svg>',
    educacao: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect fill="#4ecdc4" width="100" height="100"/><g fill="white"><path d="M50 20l-30 15v20c0 15 30 25 30 25s30-10 30-25V35l-30-15z"/><path d="M50 40l20 10v15c0 8-20 15-20 15s-20-7-20-15V50l20-10z"/></g></svg>',
    moradia: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect fill="#95a3a6" width="100" height="100"/><g fill="white"><path d="M50 20l-35 25v50h70V45L50 20z"/><rect x="30" y="55" width="12" height="15" fill="white"/><rect x="58" y="55" width="12" height="15" fill="white"/><polygon points="45,30 55,30 50,25" fill="white"/></g></svg>',
    emergencia: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect fill="#e74c3c" width="100" height="100"/><g fill="white"><path d="M50 15c-19.3 0-35 15.7-35 35s15.7 35 35 35 35-15.7 35-35-15.7-35-35-35zm0 60c-13.8 0-25-11.2-25-25s11.2-25 25-25 25 11.2 25 25-11.2 25-25 25z"/><circle cx="50" cy="50" r="15" fill="#e74c3c"/><rect x="48" y="40" width="4" height="20" fill="white"/><rect x="40" y="48" width="20" height="4" fill="white"/></g></svg>',
    negocios: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect fill="#3498db" width="100" height="100"/><g fill="white"><path d="M25 45h15v30H25zm30-10h15v40H55zm30-5h15v45H85z"/><line x1="20" y1="75" x2="80" y2="75" stroke="white" stroke-width="2"/></g></svg>',
    viagem: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect fill="#f39c12" width="100" height="100"/><g fill="white"><path d="M30 50c0-8.3 6.7-15 15-15h10c8.3 0 15 6.7 15 15v20H30V50z"/><polygon points="35,45 45,30 55,45"/><path d="M65 60h10v15H65z"/></g></svg>',
    outro: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect fill="#9b59b6" width="100" height="100"/><g fill="white"><circle cx="50" cy="50" r="25"/><circle cx="50" cy="50" r="20" fill="#9b59b6"/><circle cx="40" cy="40" r="3" fill="white"/><circle cx="60" cy="40" r="3" fill="white"/><path d="M40 55 Q50 65 60 55" stroke="white" stroke-width="2" fill="none"/></g></svg>'
};

// Campanhas de exemplo
const sampleCampaigns = [
    {
        id: 1,
        title: "Cirurgia de Hérnia Inguinal - João Silva",
        description: "Meu filho João de 8 anos foi diagnosticado com hérnia inguinal e precisa passar por cirurgia corretiva urgente. A cirurgia está marcada para agosto de 2024. Infelizmente, não temos cobertura total do plano de saúde e precisamos complementar os custos médicos, anestésico e internação. João é muito corajoso e queremos dar a ele o melhor atendimento médico possível. Qualquer valor ajuda a realizar essa cirurgia que vai melhorar a qualidade de vida do nosso filho.",
        targetAmount: 8500,
        currentAmount: 6240,
        category: "saude",
        organizer: "Maria Silva",
        email: "maria.silva@email.com",
        createdDate: "2024-07-12",
        deadline: "2024-08-25",
        image: "saude",
        photo: '<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect fill="#e8f4f8" width="400" height="300"/><circle cx="200" cy="100" r="50" fill="#fdbf5c"/><path d="M150 160 Q200 140 250 160" fill="#ff6b6b" stroke="#ff6b6b" stroke-width="2"/><rect x="160" y="180" width="80" height="100" fill="#4a90e2"/><rect x="170" y="190" width="60" height="60" fill="#7dd3c0" rx="5"/><circle cx="180" cy="120" r="8" fill="#333"/><circle cx="220" cy="120" r="8" fill="#333"/><circle cx="200" cy="135" r="4" fill="#333"/></svg>',
        supporters: [
            { name: "Francisco Costa", amount: 500, date: "2024-07-19" },
            { name: "Anônimo", amount: 250, date: "2024-07-19" },
            { name: "Ana Beatriz", amount: 1000, date: "2024-07-18" },
            { name: "Anônimo", amount: 200, date: "2024-07-18" },
            { name: "Pedro Oliveira", amount: 750, date: "2024-07-17" },
            { name: "Carla Souza", amount: 500, date: "2024-07-17" },
            { name: "Roberto Mendes", amount: 1500, date: "2024-07-16" },
            { name: "Anônimo", amount: 300, date: "2024-07-16" },
            { name: "Juliana Ferreira", amount: 100, date: "2024-07-15" },
            { name: "Anônimo", amount: 140, date: "2024-07-15" },
            { name: "Dra. Cristina Oliveira", amount: 250, date: "2024-07-14" },
            { name: "Enfermeiro Paulo", amount: 180, date: "2024-07-14" },
            { name: "Anônimo", amount: 320, date: "2024-07-13" },
            { name: "Tia Débora", amount: 450, date: "2024-07-13" },
            { name: "Amigo Marcelo", amount: 280, date: "2024-07-12" },
            { name: "Anônimo", amount: 175, date: "2024-07-12" },
            { name: "Vizinha Dona Lúcia", amount: 130, date: "2024-07-11" },
            { name: "Colega de Trabalho", amount: 220, date: "2024-07-11" },
            { name: "Anônimo", amount: 290, date: "2024-07-10" },
            { name: "Primo Gustavo", amount: 350, date: "2024-07-10" }
        ]
    },
    {
        id: 2,
        title: "Bolsa de Estudos ENEM - Universidade Federal",
        description: "Meu nome é Carlos Santos e sou aluno destaque da escola estadual. Passei no ENEM e fui aprovado no curso de Engenharia Civil pela Universidade Federal do Rio de Janeiro. Infelizmente, minha família não tem recursos para custear a mudança para o Rio e os gastos com aluguel, alimentação e materiais. Venho de uma família humilde, e essa bolsa de estudos é uma oportunidade única de transformar meu futuro. Estou determinado a me formar e ajudar minha família. Preciso de ajuda com os primeiros 12 meses de despesas até conseguir uma bolsa ou bolsista.",
        targetAmount: 6000,
        currentAmount: 4350,
        category: "educacao",
        organizer: "Carlos Santos",
        email: "carlos.santos@email.com",
        createdDate: "2024-07-08",
        deadline: "2024-08-30",
        image: "educacao",
        photo: '<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect fill="#f0e8ff" width="400" height="300"/><rect x="80" y="80" width="240" height="140" fill="#4ecdc4" rx="10"/><circle cx="200" cy="110" r="35" fill="#fdbf5c"/><path d="M160 160 Q200 140 240 160" fill="#fff" stroke="#fff" stroke-width="2"/><circle cx="120" cy="220" r="15" fill="#e8d5ff"/><circle cx="200" cy="220" r="15" fill="#e8d5ff"/><circle cx="280" cy="220" r="15" fill="#e8d5ff"/><text x="200" y="250" font-size="24" text-anchor="middle" fill="#333">ENEM</text></svg>',
        supporters: [
            { name: "Professora Andréia", amount: 300, date: "2024-07-19" },
            { name: "Anônimo", amount: 150, date: "2024-07-18" },
            { name: "Tia Andréa", amount: 500, date: "2024-07-18" },
            { name: "Anônimo", amount: 200, date: "2024-07-17" },
            { name: "Diretor da Escola", amount: 400, date: "2024-07-17" },
            { name: "Vizinha Dona Maria", amount: 250, date: "2024-07-16" },
            { name: "Primo Felipe", amount: 800, date: "2024-07-16" },
            { name: "Anônimo", amount: 100, date: "2024-07-15" },
            { name: "Tio Roberto", amount: 600, date: "2024-07-15" },
            { name: "Anônimo", amount: 50, date: "2024-07-14" },
            { name: "Professor de Matemática", amount: 180, date: "2024-07-13" },
            { name: "Coordenadora Pedagógica", amount: 220, date: "2024-07-13" },
            { name: "Anônimo", amount: 120, date: "2024-07-12" },
            { name: "Madrinha Tereza", amount: 350, date: "2024-07-12" },
            { name: "Colega da Escola", amount: 75, date: "2024-07-11" },
            { name: "Anônimo", amount: 90, date: "2024-07-11" },
            { name: "Amigo da Família", amount: 210, date: "2024-07-10" },
            { name: "Vendedor da Rua", amount: 85, date: "2024-07-10" },
            { name: "Anônimo", amount: 140, date: "2024-07-09" },
            { name: "Professora de Português", amount: 190, date: "2024-07-09" }
        ]
    },
    {
        id: 3,
        title: "Reforma Urgente - Reparos Estruturais da Casa",
        description: "Eu sou Rosana Costa, mãe de 3 filhos. Minha casa sofreu danos estruturais sérios após as chuvas do mês de junho. O teto apresenta infiltrações graves, o encanamento está danificado e há riscos de desabamento de parte da cobertura. A prefeitura já fez a vistoria e disse que a moradia está em risco. Preciso fazer reparos imediatos para proteger minha família. Tenho orçamentos de engenheiros para os reparos. Trabalho como diarista, mas não tenho recursos suficientes para esses reparos urgentes. Peço ajuda para salvar minha casa.",
        targetAmount: 12000,
        currentAmount: 7850,
        category: "moradia",
        organizer: "Rosana Costa",
        email: "rosana.costa@email.com",
        createdDate: "2024-06-28",
        deadline: "2024-09-15",
        image: "moradia",
        photo: '<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect fill="#fff8e1" width="400" height="300"/><polygon points="100,180 200,80 300,180" fill="#d4a574"/><rect x="90" y="180" width="220" height="100" fill="#a0826d"/><rect x="130" y="210" width="50" height="50" fill="#7a6b60"/><rect x="220" y="210" width="50" height="50" fill="#7a6b60"/><polygon points="170,160 230,160 200,120" fill="#c70000" opacity="0.7"/><circle cx="155" cy="230" r="8" fill="#333"/><circle cx="245" cy="230" r="8" fill="#333"/><path d="M200 180 L200 240" stroke="#333" stroke-width="2"/><path d="M170 210 L170 260" stroke="#333" stroke-width="2"/><path d="M230 210 L230 260" stroke="#333" stroke-width="2"/></svg>',
        supporters: [
            { name: "Vizinho Pedro", amount: 800, date: "2024-07-19" },
            { name: "Anônimo", amount: 500, date: "2024-07-19" },
            { name: "Mãe Lúcia", amount: 1500, date: "2024-07-18" },
            { name: "Anônimo", amount: 300, date: "2024-07-17" },
            { name: "Patroa da Dona Rosana", amount: 1000, date: "2024-07-17" },
            { name: "Amigo Carlos", amount: 600, date: "2024-07-16" },
            { name: "Anônimo", amount: 200, date: "2024-07-16" },
            { name: "Pastor João", amount: 750, date: "2024-07-15" },
            { name: "Anônimo", amount: 250, date: "2024-07-15" },
            { name: "Tia Samanta", amount: 400, date: "2024-07-14" },
            { name: "Anônimo", amount: 150, date: "2024-07-13" },
            { name: "Compadre Paulo", amount: 350, date: "2024-07-12" },
            { name: "Encanador João", amount: 280, date: "2024-07-12" },
            { name: "Anônimo", amount: 175, date: "2024-07-11" },
            { name: "Tia Juliana", amount: 320, date: "2024-07-11" },
            { name: "Meu Chefe", amount: 500, date: "2024-07-10" },
            { name: "Anônimo", amount: 225, date: "2024-07-10" },
            { name: "Pedreiro Marcelo", amount: 290, date: "2024-07-09" },
            { name: "Amiga Fernanda", amount: 180, date: "2024-07-09" },
            { name: "Anônimo", amount: 140, date: "2024-07-08" }
        ]
    },
    {
        id: 4,
        title: "Equipamento de Tomografia - Clínica Comunitária",
        description: "Somos uma clínica comunitária que atende mais de 5 mil pacientes por mês em uma região de vulnerabilidade social. Precisamos adquirir um tomógrafo para diagnosticar tumores, traumas, doenças neurológicas e cardíacas. Atualmente, temos que encaminhar os pacientes para clínicas privadas, deixando muitos sem acesso a esse exame essencial. O equipamento custa R$ 35 mil, mas conseguimos uma doação de R$ 15 mil. Precisamos de R$ 20 mil para completar a compra e instalação. Isso vai salvar muitas vidas.",
        targetAmount: 20000,
        currentAmount: 14500,
        category: "emergencia",
        organizer: "Dr. Roberto Silva",
        email: "dr.roberto@clinicacomunitaria.com",
        createdDate: "2024-07-02",
        deadline: "2024-08-28",
        image: "emergencia",
        photo: '<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect fill="#ffe8e8" width="400" height="300"/><rect x="80" y="60" width="240" height="180" fill="#e74c3c" rx="15"/><circle cx="200" cy="150" r="60" fill="#fff" stroke="#e74c3c" stroke-width="3"/><circle cx="200" cy="150" r="45" fill="#e74c3c"/><rect x="195" y="120" width="10" height="60" fill="#fff"/><rect x="170" y="145" width="60" height="10" fill="#fff"/><rect x="160" y="240" width="80" height="25" fill="#ff6b6b" rx="5"/><text x="200" y="258" font-size="16" text-anchor="middle" fill="white">EMERGÊNCIA</text></svg>',
        supporters: [
            { name: "Prefeitura Municipal", amount: 2000, date: "2024-07-19" },
            { name: "Anônimo", amount: 500, date: "2024-07-19" },
            { name: "Dra. Fernanda Cardoso", amount: 1500, date: "2024-07-18" },
            { name: "Anônimo", amount: 800, date: "2024-07-18" },
            { name: "Instituto de Saúde", amount: 3000, date: "2024-07-17" },
            { name: "Paciente Grato", amount: 300, date: "2024-07-16" },
            { name: "Anônimo", amount: 200, date: "2024-07-16" },
            { name: "Rotary Club Local", amount: 2500, date: "2024-07-15" },
            { name: "Anônimo", amount: 1000, date: "2024-07-15" },
            { name: "Enfermeira Cristina", amount: 250, date: "2024-07-14" },
            { name: "Anônimo", amount: 450, date: "2024-07-14" },
            { name: "Dr. Marcelo Costa", amount: 1500, date: "2024-07-13" },
            { name: "Farmacêutica Marisa", amount: 350, date: "2024-07-13" },
            { name: "Anônimo", amount: 180, date: "2024-07-12" },
            { name: "Técnico de Saúde", amount: 220, date: "2024-07-12" },
            { name: "Médico Voluntário", amount: 400, date: "2024-07-11" },
            { name: "Anônimo", amount: 150, date: "2024-07-11" },
            { name: "Doadora Anônima", amount: 600, date: "2024-07-10" },
            { name: "Enfermeiro João", amount: 280, date: "2024-07-10" },
            { name: "Anônimo", amount: 120, date: "2024-07-09" }
        ]
    },
    {
        id: 5,
        title: "Desenvolvimento de App - Assistente para Pessoas com Deficiência Visual",
        description: "Somos um time de 4 desenvolvedores (Ana, Lucas, Beatriz e Rafael) com paixão por tecnologia acessível. Estamos criando um app inovador que ajuda pessoas com deficiência visual a navegarem pela cidade, reconhecer objetos, ler textos e interagir com tecnologia de forma autônoma usando inteligência artificial. O app já tem versão beta testada com 50 usuários que confirmaram que mudou suas vidas. Precisamos de R$ 25 mil para finalizar o desenvolvimento, fazer testes em mais de 500 pessoas e lançar na App Store e Google Play. O objetivo é tornar a tecnologia acessível para todos.",
        targetAmount: 25000,
        currentAmount: 18750,
        category: "negocios",
        organizer: "Tech Accessibility Team",
        email: "hello@techaccessibility.com",
        createdDate: "2024-06-15",
        deadline: "2024-09-30",
        image: "negocios",
        photo: '<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect fill="#e8f5ff" width="400" height="300"/><rect x="100" y="80" width="200" height="160" fill="#3498db" rx="20"/><path d="M150 130 L150 200 M150 130 L200 100 M200 100 L250 150 M250 150 L200 130" stroke="#fff" stroke-width="3" fill="none"/><circle cx="200" cy="100" r="6" fill="#fff"/><circle cx="250" cy="150" r="6" fill="#fff"/><rect x="120" y="220" width="30" height="30" fill="#27ae60" rx="5"/><rect x="175" y="220" width="30" height="30" fill="#f39c12" rx="5"/><rect x="230" y="220" width="30" height="30" fill="#e74c3c" rx="5"/></svg>',
        supporters: [
            { name: "Google Brasil", amount: 5000, date: "2024-07-19" },
            { name: "Anônimo", amount: 1000, date: "2024-07-19" },
            { name: "Fundação TI", amount: 3000, date: "2024-07-18" },
            { name: "Programador Voluntário", amount: 500, date: "2024-07-18" },
            { name: "Microsoft Innovation", amount: 2500, date: "2024-07-17" },
            { name: "Anônimo", amount: 750, date: "2024-07-17" },
            { name: "ONG Inclusão Digital", amount: 2000, date: "2024-07-16" },
            { name: "Usuário do App", amount: 300, date: "2024-07-16" },
            { name: "Investidor Anjo", amount: 1500, date: "2024-07-15" },
            { name: "Anônimo", amount: 200, date: "2024-07-15" },
            { name: "Empresa de Tecnologia", amount: 1000, date: "2024-07-14" },
            { name: "Professor Universitário", amount: 100, date: "2024-07-14" },
            { name: "Anônimo", amount: 250, date: "2024-07-13" },
            { name: "Dev Freelancer", amount: 350, date: "2024-07-13" },
            { name: "Pessoa com Deficiência", amount: 150, date: "2024-07-12" },
            { name: "Anônimo", amount: 400, date: "2024-07-12" },
            { name: "Startup Aceleradora", amount: 800, date: "2024-07-11" },
            { name: "Tech Enthusiast", amount: 250, date: "2024-07-11" },
            { name: "Anônimo", amount: 180, date: "2024-07-10" },
            { name: "Empresário Social", amount: 500, date: "2024-07-10" }
        ]
    },
    {
        id: 6,
        title: "Viagem para Intercâmbio - Programa de Idioma na Irlanda",
        description: "Meu nome é Sofia e sempre sonhei em fazer um intercâmbio para aperfeiçoar meu inglês e crescer profissionalmente. Consegui passar na seleção de um programa renomado de intercâmbio na Irlanda pelo período de 6 meses. O programa inclui aulas intensivas de inglês, hospedagem em casa de família e experiência cultural única. O custo total é R$ 18 mil (passagem, programa, hospedagem e documentação). Meus pais trabalham muito mas não conseguem arcar com essa despesa sozinhos. Sou aluna dedicada e essa oportunidade vai transformar meu futuro profissional.",
        targetAmount: 18000,
        currentAmount: 9500,
        category: "viagem",
        organizer: "Sofia Ribeiro",
        email: "sofia.ribeiro@email.com",
        createdDate: "2024-07-10",
        deadline: "2024-08-20",
        image: "viagem",
        photo: '<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect fill="#fff3e0" width="400" height="300"/><polygon points="200,40 80,150 320,150" fill="#f39c12"/><rect x="190" y="150" width="20" height="120" fill="#95a5a6"/><circle cx="140" cy="100" r="15" fill="#3498db" opacity="0.7"/><circle cx="260" cy="80" r="12" fill="#e74c3c" opacity="0.7"/><path d="M50 180 Q200 160 350 180" stroke="#e8daef" stroke-width="3" fill="none" opacity="0.5"/><text x="200" y="260" font-size="20" text-anchor="middle" fill="#f39c12" font-weight="bold">IRLANDA</text></svg>',
        supporters: [
            { name: "Avó Filomena", amount: 2000, date: "2024-07-19" },
            { name: "Anônimo", amount: 500, date: "2024-07-18" },
            { name: "Primo Educado", amount: 1000, date: "2024-07-17" },
            { name: "Anônimo", amount: 300, date: "2024-07-16" },
            { name: "Madrinha Patricia", amount: 1500, date: "2024-07-15" },
            { name: "Tio Bruno", amount: 1200, date: "2024-07-14" },
            { name: "Anônimo", amount: 250, date: "2024-07-13" },
            { name: "Professor de Inglês", amount: 750, date: "2024-07-12" },
            { name: "Coordenadora da Escola", amount: 300, date: "2024-07-12" },
            { name: "Anônimo", amount: 150, date: "2024-07-11" },
            { name: "Colega de Classe", amount: 80, date: "2024-07-11" },
            { name: "Dentista da Família", amount: 200, date: "2024-07-10" },
            { name: "Anônimo", amount: 120, date: "2024-07-10" },
            { name: "Amiga Marina", amount: 180, date: "2024-07-09" },
            { name: "Vizinha Dona Lourdes", amount: 140, date: "2024-07-08" }
        ]
    },
    {
        id: 7,
        title: "Prótese Auditiva - Recuperando a Audição aos 62 Anos",
        description: "Meu nome é Joaquim e aos 62 anos estou com dificuldade auditiva severa nos dois ouvidos. Isso me afastou do trabalho e prejudicou muito minha qualidade de vida e relacionamentos. Um otorrinolaringologista recomendou uma prótese auditiva digital de última geração que custa R$ 12 mil o par. Tenho aposentadoria pequena e essa é uma despesa que não consegui economizar. Quero voltar a ouvir meus netos, conversar com minha esposa e retomar minha participação na comunidade.",
        targetAmount: 12000,
        currentAmount: 5800,
        category: "saude",
        organizer: "Joaquim Oliveira",
        email: "joaquim.oliveira@email.com",
        createdDate: "2024-07-05",
        deadline: "2024-09-05",
        image: "saude",
        photo: '<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect fill="#f3e5f5" width="400" height="300"/><circle cx="200" cy="150" r="70" fill="#ff6b6b" opacity="0.9"/><g fill="white"><circle cx="200" cy="150" r="50"/><circle cx="200" cy="150" r="35" fill="#ff6b6b"/><path d="M185 135 Q200 125 215 135" stroke="white" stroke-width="3" fill="none"/><path d="M180 155 Q200 170 220 155" stroke="white" stroke-width="3" fill="none"/></g><path d="M150 100 Q140 90 130 100" stroke="#2c3e50" stroke-width="3" fill="none"/><path d="M250 100 Q260 90 270 100" stroke="#2c3e50" stroke-width="3" fill="none"/><text x="200" y="260" font-size="18" text-anchor="middle" fill="#9b59b6">AUDIÇÃO</text></svg>',
        supporters: [
            { name: "Filha Marisa", amount: 1500, date: "2024-07-19" },
            { name: "Anônimo", amount: 200, date: "2024-07-18" },
            { name: "Neto Lucas", amount: 500, date: "2024-07-17" },
            { name: "Amigo Pedro", amount: 800, date: "2024-07-16" },
            { name: "Vizinha Dona Zilda", amount: 300, date: "2024-07-15" },
            { name: "Anônimo", amount: 150, date: "2024-07-14" },
            { name: "Sobrinha Fernanda", amount: 400, date: "2024-07-13" },
            { name: "Anônimo", amount: 100, date: "2024-07-12" },
            { name: "Amiga do Rosário", amount: 350, date: "2024-07-11" },
            { name: "Anônimo", amount: 200, date: "2024-07-10" },
            { name: "Neta Beatriz", amount: 250, date: "2024-07-09" },
            { name: "Primo Ronaldo", amount: 180, date: "2024-07-09" },
            { name: "Anônimo", amount: 120, date: "2024-07-08" },
            { name: "Fonoaudióloga Silvia", amount: 300, date: "2024-07-07" },
            { name: "Compadre Nilson", amount: 250, date: "2024-07-06" }
        ]
    },
    {
        id: 8,
        title: "Projeto Social - Oficinas de Arte para Crianças em Comunidade Carente",
        description: "Somos uma ONG que trabalha há 8 anos com crianças em situação de risco em uma favela da zona norte. Queremos expandir nosso programa de oficinas de arte (pintura, escultura, cerâmica, fotografia) para atender 200 crianças de 7 a 16 anos. As oficinas retiram as crianças das ruas e as dão esperança através da criatividade. Precisamos de R$ 15 mil para comprar materiais, alugar um espaço maior e pagar 2 professores de arte em período integral por 12 meses.",
        targetAmount: 15000,
        currentAmount: 8900,
        category: "outro",
        organizer: "ONG Cores do Amanhã",
        email: "contato@coresdeamanha.org",
        createdDate: "2024-07-03",
        deadline: "2024-09-20",
        image: "outro",
        photo: '<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect fill="#fce4ec" width="400" height="300"/><rect x="60" y="80" width="280" height="180" fill="#e8d5ff" rx="10" stroke="#9b59b6" stroke-width="2"/><circle cx="100" cy="140" r="20" fill="#ff6b6b"/><circle cx="160" cy="120" r="20" fill="#f39c12"/><circle cx="220" cy="140" r="20" fill="#4ecdc4"/><circle cx="280" cy="130" r="20" fill="#27ae60"/><circle cx="130" cy="200" r="20" fill="#3498db"/><circle cx="200" cy="220" r="20" fill="#e74c3c"/><circle cx="270" cy="200" r="20" fill="#2c3e50"/><g fill="white" font-size="12"><text x="100" y="147">♪</text><text x="160" y="127">✎</text><text x="220" y="147">🎨</text><text x="280" y="137">✨</text></g><text x="200" y="270" font-size="18" text-anchor="middle" fill="#9b59b6" font-weight="bold">CORES DO AMANHÃ</text></svg>',
        supporters: [
            { name: "Fundação Bradesco", amount: 3000, date: "2024-07-19" },
            { name: "Anônimo", amount: 500, date: "2024-07-19" },
            { name: "Prefeitura Local", amount: 2000, date: "2024-07-18" },
            { name: "Pintor Renato", amount: 200, date: "2024-07-17" },
            { name: "Artesã Maria", amount: 300, date: "2024-07-16" },
            { name: "Anônimo", amount: 150, date: "2024-07-15" },
            { name: "Empresa de Consultoria", amount: 1000, date: "2024-07-14" },
            { name: "Família Silva", amount: 750, date: "2024-07-13" },
            { name: "Anônimo", amount: 100, date: "2024-07-12" },
            { name: "Professor de Arte", amount: 180, date: "2024-07-11" },
            { name: "Dono de Galeria", amount: 350, date: "2024-07-11" },
            { name: "Anônimo", amount: 120, date: "2024-07-10" },
            { name: "Poeta Voluntário", amount: 200, date: "2024-07-09" },
            { name: "Músico Comunitário", amount: 250, date: "2024-07-08" },
            { name: "Anônimo", amount: 80, date: "2024-07-07" }
        ]
    }
];

// Inicializar campanhas no localStorage
function initializeCampaigns() {
    if (!localStorage.getItem(STORAGE_KEY)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleCampaigns));
    }
}

// Obter todas as campanhas
function getAllCampaigns() {
    initializeCampaigns();
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// Obter campanha por ID
function getCampaignById(id) {
    const campaigns = getAllCampaigns();
    return campaigns.find(c => c.id === parseInt(id));
}

// Salvar novas campanhas
function saveCampaign(campaign) {
    const campaigns = getAllCampaigns();
    campaign.id = Math.max(...campaigns.map(c => c.id), 0) + 1;
    campaign.currentAmount = 0;
    campaign.supporters = [];
    campaigns.push(campaign);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(campaigns));
    return campaign;
}

// Atualizar campanha
function updateCampaign(updatedCampaign) {
    const campaigns = getAllCampaigns();
    const index = campaigns.findIndex(c => c.id === updatedCampaign.id);
    if (index !== -1) {
        campaigns[index] = updatedCampaign;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(campaigns));
    }
}

// Formatar moeda brasileira
function formatBRL(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

// Calcular dias restantes
function getDaysRemaining(deadline) {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diff = deadlineDate - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

// Calcular porcentagem
function getPercentage(current, target) {
    if (target === 0) return 0;
    return Math.round((current / target) * 100);
}

// Categorias em português
const categoryNames = {
    saude: "Saúde",
    educacao: "Educação",
    moradia: "Moradia",
    emergencia: "Emergência",
    negocios: "Negócios",
    viagem: "Viagem",
    outro: "Outro"
};

// Criar card de campanha
function createCampaignCard(campaign) {
    const percentage = getPercentage(campaign.currentAmount, campaign.targetAmount);
    const daysLeft = getDaysRemaining(campaign.deadline);
    
    const card = document.createElement('div');
    card.className = 'campaign-card';
    card.onclick = () => {
        window.location.href = `detalhes.html?id=${campaign.id}`;
    };
    
    const svgIcon = categoryIcons[campaign.category] || categoryIcons.outro;
    
    card.innerHTML = `
        <div class="campaign-image">${svgIcon}</div>
        <div class="campaign-body">
            <h3 class="campaign-title">${campaign.title}</h3>
            <p class="campaign-description">${campaign.description.substring(0, 80)}...</p>
            <span class="campaign-category">${categoryNames[campaign.category]}</span>
            <div class="campaign-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${percentage}%"></div>
                </div>
                <div class="progress-info">
                    <span class="current-amount">${formatBRL(campaign.currentAmount)}</span>
                    <span class="target-amount">de ${formatBRL(campaign.targetAmount)}</span>
                </div>
            </div>
            <div style="font-size: 0.9rem; color: #6b7280;">
                ${campaign.supporters.length} apoiadores • ${daysLeft > 0 ? daysLeft + ' dias' : 'Finalizado'}
            </div>
            <p class="campaign-organizer">por ${campaign.organizer}</p>
        </div>
    `;
    
    return card;
}

// Carregar campanhas em destaque
function loadFeaturedCampaigns() {
    const container = document.getElementById('campaignsContainer');
    if (!container) return;
    
    const campaigns = getAllCampaigns().slice(0, 3);
    container.innerHTML = '';
    campaigns.forEach(campaign => {
        container.appendChild(createCampaignCard(campaign));
    });
}

// Carregar todas as campanhas
function loadAllCampaigns() {
    const container = document.getElementById('allCampaigns');
    if (!container) return;
    
    const campaigns = getAllCampaigns();
    container.innerHTML = '';
    campaigns.forEach(campaign => {
        container.appendChild(createCampaignCard(campaign));
    });
}

// Filtrar campanhas
function filterCampaigns() {
    const searchTerm = document.getElementById('searchInput')?.value?.toLowerCase() || '';
    const category = document.getElementById('categoryFilter')?.value || '';
    const sortBy = document.getElementById('sortFilter')?.value || 'recentes';
    
    let campaigns = getAllCampaigns();
    
    // Filtrar por busca
    if (searchTerm) {
        campaigns = campaigns.filter(c => 
            c.title.toLowerCase().includes(searchTerm) ||
            c.description.toLowerCase().includes(searchTerm)
        );
    }
    
    // Filtrar por categoria
    if (category) {
        campaigns = campaigns.filter(c => c.category === category);
    }
    
    // Ordenar
    if (sortBy === 'recentes') {
        campaigns.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
    } else if (sortBy === 'populares') {
        campaigns.sort((a, b) => b.supporters.length - a.supporters.length);
    } else if (sortBy === 'proximas') {
        campaigns.sort((a, b) => {
            const percentA = getPercentage(b.currentAmount, b.targetAmount);
            const percentB = getPercentage(a.currentAmount, a.targetAmount);
            return percentB - percentA;
        });
    }
    
    // Renderizar
    const container = document.getElementById('allCampaigns');
    container.innerHTML = '';
    
    if (campaigns.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">Nenhuma campanha encontrada.</p>';
    } else {
        campaigns.forEach(campaign => {
            container.appendChild(createCampaignCard(campaign));
        });
    }
}

// Criar nova campanha
function handleCreateCampaign(e) {
    e.preventDefault();
    
    const category = document.getElementById('category').value;
    
    const formData = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        targetAmount: parseFloat(document.getElementById('targetAmount').value),
        deadline: document.getElementById('deadline').value,
        category: category,
        organizer: document.getElementById('organizer').value,
        email: document.getElementById('email').value,
        image: category,
        createdDate: new Date().toISOString().split('T')[0]
    };
    
    saveCampaign(formData);
    
    alert('✅ Vaquinha criada com sucesso!\nAgora você pode compartilhá-la com seus amigos.');
    window.location.href = 'campanhas.html';
}

// Carregar detalhes da campanha
function loadCampaignDetails() {
    const params = new URLSearchParams(window.location.search);
    const campaignId = params.get('id');
    
    if (!campaignId) {
        window.location.href = 'campanhas.html';
        return;
    }
    
    const campaign = getCampaignById(campaignId);
    
    if (!campaign) {
        alert('Campanha não encontrada');
        window.location.href = 'campanhas.html';
        return;
    }
    
    const percentage = getPercentage(campaign.currentAmount, campaign.targetAmount);
    const daysLeft = getDaysRemaining(campaign.deadline);
    
    // Preencher informações
    document.getElementById('campaignTitle').textContent = campaign.title;
    
    // Adicionar foto/imagem SVG
    const campaignImageElement = document.getElementById('campaignImage');
    if (campaign.photo) {
        campaignImageElement.innerHTML = campaign.photo;
        campaignImageElement.style.width = '100%';
        campaignImageElement.style.minHeight = '350px';
        campaignImageElement.style.borderRadius = '1rem';
    } else {
        // Fallback para ícone da categoria se não tiver foto
        const svgIcon = categoryIcons[campaign.category] || categoryIcons.outro;
        campaignImageElement.innerHTML = svgIcon;
        campaignImageElement.style.width = '100%';
        campaignImageElement.style.minHeight = '350px';
        campaignImageElement.style.borderRadius = '1rem';
    }
    
    document.getElementById('campaignDescription').textContent = campaign.description;
    document.getElementById('campaignCategory').textContent = categoryNames[campaign.category];
    document.getElementById('campaignOrganizer').textContent = `por ${campaign.organizer}`;
    
    document.getElementById('currentAmount').textContent = campaign.currentAmount.toFixed(2);
    document.getElementById('targetAmount').textContent = campaign.targetAmount.toFixed(2);
    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('percentage').textContent = percentage;
    document.getElementById('daysLeft').textContent = daysLeft > 0 ? daysLeft : '⏱️ Finalizado';
    document.getElementById('supporters').textContent = campaign.supporters.length;
    
    document.getElementById('deadlineDate').textContent = new Date(campaign.deadline).toLocaleDateString('pt-BR');
    document.getElementById('creatorName').textContent = campaign.organizer;
    document.getElementById('categoryName').textContent = categoryNames[campaign.category];
    
    // Carregar apoiadores
    const supportersList = document.getElementById('supporters-list');
    supportersList.innerHTML = '';
    
    if (campaign.supporters.length === 0) {
        supportersList.innerHTML = '<p style="color: #9ca3af; text-align: center; padding: 2rem;">Ainda não há apoiadores. Seja o primeiro!</p>';
    } else {
        campaign.supporters.forEach(supporter => {
            const div = document.createElement('div');
            div.className = 'supporter';
            div.innerHTML = `
                <div class="supporter-name">${supporter.name}</div>
                <div class="supporter-amount">${formatBRL(supporter.amount)}</div>
                <div class="supporter-date">${new Date(supporter.date).toLocaleDateString('pt-BR')}</div>
            `;
            supportersList.appendChild(div);
        });
    }
}

// Definir valor de doação
function setDonationAmount(amount) {
    document.getElementById('customAmount').value = amount;
}

// Enviar doação
function submitDonation() {
    const amount = parseFloat(document.getElementById('customAmount').value);
    
    if (isNaN(amount) || amount <= 0) {
        alert('Por favor, insira um valor válido');
        return;
    }
    
    const params = new URLSearchParams(window.location.search);
    const campaignId = params.get('id');
    const campaign = getCampaignById(campaignId);
    
    campaign.currentAmount += amount;
    campaign.supporters.unshift({
        name: 'Anônimo',
        amount: amount,
        date: new Date().toISOString().split('T')[0]
    });
    
    updateCampaign(campaign);
    
    document.getElementById('customAmount').value = '';
    document.getElementById('successModal').style.display = 'block';
    
    // Recarregar detalhes
    setTimeout(() => {
        location.reload();
    }, 2000);
}

// Fechar modal
function closeModal() {
    document.getElementById('successModal').style.display = 'none';
}

// Compartilhar
function shareOn(platform) {
    const campaignId = new URLSearchParams(window.location.search).get('id');
    const campaign = getCampaignById(campaignId);
    const url = window.location.href;
    const text = `Ajude a ${campaign.organizer} com: ${campaign.title}`;
    
    let shareUrl = '';
    
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(text + '\n' + url)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank');
    }
}

// Copiar link
function copyLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        alert('✅ Link copiado para a área de transferência!');
    });
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById('successModal');
    if (modal && event.target === modal) {
        modal.style.display = 'none';
    }
};

// Inicializar na carga
document.addEventListener('DOMContentLoaded', function() {
    initializeCampaigns();
});
