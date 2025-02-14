document.addEventListener('DOMContentLoaded', function() {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const html = document.documentElement;
    
    if (darkModeToggle) {
        if (localStorage.getItem('darkMode') === 'true' || 
            (!('darkMode' in localStorage) && 
             window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
        }

        darkModeToggle.addEventListener("click", () => {
            html.classList.toggle("dark");
            localStorage.setItem("darkMode", html.classList.contains("dark"));
        });
    }

    // Typing Animation
    const typingText = document.getElementById("typing-text");
    const words = [
        "AI Engineer",
        "DevOps Engineer",
        "ML Engineer",
        "Backend Developer",
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        let currentWord = words[wordIndex];
        let displayedText = isDeleting
            ? currentWord.substring(0, charIndex--)
            : currentWord.substring(0, charIndex++);

        if (typingText) {
            typingText.innerText = displayedText;
        }

        let typingSpeed = isDeleting ? 50 : 100;
        if (!isDeleting && charIndex === currentWord.length) {
            typingSpeed = 1000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();

    // Load Projects
    const projectsContainer = document.getElementById("project-container");
    const projects = [
        {
            title: "AI Chatbot",
            description: "Built with OpenAI's GPT models and FastAPI.",
            link: "#",
        },
        {
            title: "E-commerce Scraper",
            description: "Web scraping with Scrapy and PostgreSQL.",
            link: "#",
        },
        {
            title: "Cloud Infra Automation",
            description: "Automated provisioning using Terraform.",
            link: "#",
        },
    ];

    if (projectsContainer) {
        projectsContainer.innerHTML = '';
        projects.forEach((project) => {
            const projectCard = document.createElement("div");
            projectCard.className = "bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-transform hover:-translate-y-2";
            projectCard.innerHTML = `
                <h3 class="text-xl font-bold mb-3">${project.title}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">${project.description}</p>
                <a href="${project.link}" class="inline-block px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors" target="_blank">
                    View Project
                </a>
            `;
            projectsContainer.appendChild(projectCard);
        });
    }
});
