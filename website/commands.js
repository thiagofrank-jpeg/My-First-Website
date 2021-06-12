var languagejs= {
    language-en: {
        welcome: "Hi, I am Thiago Frank. How are you? I'm a web front-end developer, and my actually skills is:"
    },
    language-pt: {
        welcome: "Olá, eu me chamo Thiago Frank. Como você está? Eu sou um desenvolvedor front-end, e minhas habilidades são:"       
    }
};

if (window.location.hash) {
if (window.location.hash === "#language-ptbr") {
    hi.textContent = language.language-pt.welcome;
}
}