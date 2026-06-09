// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 导航栏背景效果
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// 观察者模式用于元素进入视口时的动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// 观察所有投资组合项目
document.querySelectorAll('.portfolio-item, .explore-item, .experience-item').forEach(item => {
    item.style.opacity = '0';
    observer.observe(item);
});

// 滚动到顶部功能
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 处理移动菜单
const navMenu = document.querySelector('.nav-menu');
if (navMenu) {
    navMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            // 在移动设备上关闭菜单
            console.log('Navigation clicked');
        }
    });
}

// 延迟加载图片（如果有真实图片）
if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}

// 添加活动导航链接指示器
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// 控制台问候
console.log('%cMasai Collection', 'font-size: 24px; color: #667eea; font-weight: bold;');
console.log('%c品牌设计 & 艺术创作', 'font-size: 12px; color: #764ba2;');
console.log('%c联系: +86 176-8188-0663', 'font-size: 12px; color: #737380;');

// 页面加载完成时的动画
document.addEventListener('DOMContentLoaded', () => {
    // 添加加载完成类
    document.body.classList.add('loaded');
});

// 响应式导航菜单切换（可选，用于移动设备）
function initMobileMenu() {
    const screenSize = window.innerWidth;
    if (screenSize <= 768) {
        // 移动设备特定的处理
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.addEventListener('click', function(e) {
                if (e.target.tagName === 'A') {
                    console.log('Mobile navigation');
                }
            });
        }
    }
}

window.addEventListener('resize', initMobileMenu);
initMobileMenu();

// 自定义活动链接样式
const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        color: #667eea;
        font-weight: 600;
    }
    
    .nav-menu a.active::after {
        width: 100%;
    }
    
    body.loaded .hero-content {
        animation: fadeInUp 0.8s ease-out;
    }
`;
document.head.appendChild(style);