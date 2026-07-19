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
        title: "Cirurgia do João",
        description: "Meu filho João precisa fazer uma cirurgia urgente. Toda ajuda é bem-vinda!",
        targetAmount: 5000,
        currentAmount: 3200,
        category: "saude",
        organizer: "Maria Silva",
        email: "maria@email.com",
        createdDate: "2024-07-15",
        deadline: "2024-08-15",
        image: "saude",
        supporters: [
            { name: "Anônimo", amount: 500, date: "2024-07-18" },
            { name: "João", amount: 200, date: "2024-07-17" },
            { name: "Anônimo", amount: 1000, date: "2024-07-16" }
        ]
    },
    {
        id: 2,
        title: "Bolsa de Estudos para Universidade",
        description: "Estou indo para a universidade e preciso de ajuda com a mensalidade e materiais.",
        targetAmount: 3000,
        currentAmount: 1500,
        category: "educacao",
        organizer: "Carlos Santos",
        email: "carlos@email.com",
        createdDate: "2024-07-10",
        deadline: "2024-08-10",
        image: "educacao",
        supporters: [
            { name: "Tia Ana", amount: 300, date: "2024-07-17" },
            { name: "Anônimo", amount: 700, date: "2024-07-15" }
        ]
    },
    {
        id: 3,
        title: "Reforma da Casa",
        description: "Casa precisa de reparos urgentes no teto e encanamento.",
        targetAmount: 8000,
        currentAmount: 4500,
        category: "moradia",
        organizer: "Rosana Costa",
        email: "rosana@email.com",
        createdDate: "2024-07-05",
        deadline: "2024-09-05",
        image: "moradia",
        supporters: [
            { name: "Vizinho Pedro", amount: 500, date: "2024-07-16" },
            { name: "Anônimo", amount: 2000, date: "2024-07-14" }
        ]
    },
    {
        id: 4,
        title: "Equipamento Médico de Emergência",
        description: "A clínica precisa de equipamentos para atender melhor os pacientes.",
        targetAmount: 15000,
        currentAmount: 9000,
        category: "emergencia",
        organizer: "Dr. Roberto",
        email: "dr.roberto@email.com",
        createdDate: "2024-07-08",
        deadline: "2024-08-20",
        image: "emergencia",
        supporters: [
            { name: "Anônimo", amount: 1000, date: "2024-07-17" },
            { name: "Paciente", amount: 500, date: "2024-07-16" }
        ]
    },
    {
        id: 5,
        title: "Startup de App Mobile",
        description: "Estamos desenvolvendo um app para melhorar a vida de pessoas com deficiência.",
        targetAmount: 20000,
        currentAmount: 12000,
        category: "negocios",
        organizer: "Tech Team",
        email: "tech@email.com",
        createdDate: "2024-07-12",
        deadline: "2024-09-12",
        image: "negocios",
        supporters: [
            { name: "Investidor", amount: 5000, date: "2024-07-17" },
            { name: "Anônimo", amount: 2000, date: "2024-07-15" }
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
    
    // Adicionar SVG como imagem
    const svgIcon = categoryIcons[campaign.category] || categoryIcons.outro;
    const campaignImageElement = document.getElementById('campaignImage');
    campaignImageElement.innerHTML = svgIcon;
    campaignImageElement.style.width = '100%';
    campaignImageElement.style.minHeight = '300px';
    campaignImageElement.style.borderRadius = '1rem';
    
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
