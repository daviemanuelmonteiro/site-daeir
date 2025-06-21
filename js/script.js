// Função para carregar notícias
document.addEventListener('DOMContentLoaded', function() {
    // Simulação de carregamento de notícias
    const newsData = [
        {
            title: "Reunião Mensal do DAEIR",
            date: "15/06/2025",
            excerpt: "Confira os tópicos discutidos na última reunião mensal do diretório acadêmico...",
            link: "#"
        },
        {
            title: "Pesquisa de Satisfação",
            date: "10/06/2025",
            excerpt: "Resultados da pesquisa sobre a qualidade das disciplinas estão disponíveis...",
            link: "#"
        },
        {
            title: "Workshop de Primeiros Socorros",
            date: "05/06/2025",
            excerpt: "Fotos e materiais do último workshop já estão disponíveis para download...",
            link: "#"
        }
    ];

    const newsContainer = document.querySelector('.news-container');
    
    if (newsContainer) {
        newsData.forEach(news => {
            const newsCard = document.createElement('article');
            newsCard.className = 'news-card';
            newsCard.innerHTML = `
                <div class="news-date">${news.date}</div>
                <h3>${news.title}</h3>
                <p>${news.excerpt}</p>
                <a href="${news.link}" class="read-more">Ler mais →</a>
            `;
            newsContainer.appendChild(newsCard);
        });
    }

    // Galeria de imagens interativa
    const galleryImages = document.querySelectorAll('.gallery-item img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            // Aqui você pode implementar um lightbox
            console.log('Imagem clicada:', this.src);
            // Exemplo simples:
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundColor = 'rgba(0,0,0,0.9)';
            overlay.style.display = 'flex';
            overlay.style.justifyContent = 'center';
            overlay.style.alignItems = 'center';
            overlay.style.zIndex = '2000';
            overlay.style.cursor = 'pointer';
            
            const enlargedImg = document.createElement('img');
            enlargedImg.src = this.src;
            enlargedImg.style.maxWidth = '90%';
            enlargedImg.style.maxHeight = '90%';
            enlargedImg.style.objectFit = 'contain';
            
            overlay.appendChild(enlargedImg);
            document.body.appendChild(overlay);
            
            overlay.addEventListener('click', function() {
                document.body.removeChild(overlay);
            });
        });
    });

    // Formulário de contato
    const contactForm = document.getElementById('messageForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());
            
            console.log('Mensagem enviada:', formValues);
            
            // Feedback para o usuário
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            this.reset();
        });
    }

    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});