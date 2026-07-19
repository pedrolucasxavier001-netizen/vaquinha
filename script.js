// Dados das campanhas (simulado com localStorage)
const STORAGE_KEY = 'vaquinhas_campaigns';

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
        image: "🏥",
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
        image: "📚",
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
        image: "🏠",
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
        image: "🚑",
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
        image: "💻",
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
    
    card.innerHTML = `
        <div class="campaign-image">${campaign.image}</div>
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
    
    const formData = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        targetAmount: parseFloat(document.getElementById('targetAmount').value),
        deadline: document.getElementById('deadline').value,
        category: document.getElementById('category').value,
        organizer: document.getElementById('organizer').value,
        email: document.getElementById('email').value,
        image: '💰',
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
    document.getElementById('campaignImage').textContent = campaign.image;
    document.getElementById('campaignImage').style.fontSize = '4rem';
    document.getElementById('campaignImage').style.background = 'linear-gradient(135deg, #7c3aed, #06b6d4)';
    document.getElementById('campaignImage').style.color = 'white';
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
