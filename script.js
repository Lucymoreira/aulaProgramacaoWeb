// ==================== Menu Mobile ====================
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
}

// ==================== Scroll Suave ====================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const headerHeight = 70; // altura do header fixa
    const sectionPosition = section.offsetTop - headerHeight;

    window.scrollTo({ top: sectionPosition, behavior: 'smooth' });

    // Fecha o menu mobile após clicar
    const menu = document.getElementById('navMenu');
    menu.classList.remove('active');
}

// ==================== Cadastro ====================
function handleSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('volunteerForm');

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();

    // Verifica campos obrigatórios
    if (!nome || !email) {
        alert('Por favor, preencha os campos Nome e Email.');
        return;
    }

    // Coleta os valores do formulário
    const formData = {
        nome,
        email,
        telefone: form.telefone.value.trim(),
        idade: form.idade.value.trim(),
        disponibilidade: form.disponibilidade.value.trim(),
        areaInteresse: form['area-interesse'].value.trim(),
        experiencia: form.experiencia.value.trim(),
        motivacao: form.motivacao.value.trim(),
        dataCadastro: new Date().toLocaleString()
    };

    // Recupera cadastros anteriores ou cria lista vazia
    let voluntarios = JSON.parse(localStorage.getItem('voluntarios')) || [];
    voluntarios.push(formData);
    localStorage.setItem('voluntarios', JSON.stringify(voluntarios));

    // Mostra mensagem de sucesso
    const successMessage = document.getElementById('successMessage');
    successMessage.classList.add('show');
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Limpa formulário após 2 segundos
    setTimeout(() => form.reset(), 2000);

    // Esconde mensagem após 5 segundos
    setTimeout(() => successMessage.classList.remove('show'), 5000);

    // Atualiza a tabela de voluntários
    exibirVoluntarios();
}
