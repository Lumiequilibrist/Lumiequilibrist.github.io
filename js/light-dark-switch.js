let themeFunc = async function() {
    let btn = document.getElementById("theme-btn");
    let root = document.documentElement;
    
    // 在页面加载时，从localStorage中获取主题
    let storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        root.setAttribute('theme', storedTheme);
    } else {
        // 如果localStorage中没有主题，则默认设置为亮色模式
        root.setAttribute('theme', 'light');
    }
    
    btn.addEventListener('click', e => {
        if (root.getAttribute('theme') == 'dark') {
            root.setAttribute('theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            root.setAttribute('theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
};
themeFunc();
