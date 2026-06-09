// 当前简化版应用逻辑
document.addEventListener('DOMContentLoaded', function() {
  // 初始化页面
  initNavigation();
  initScrollAnimations();
  initMobileMenu();
  document.body.classList.add('loaded');
  
  // 替换品牌信息
  replaceBrandInfo();
});

function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.portfolio-item, .explore-item, .experience-item').forEach(item => {
    observer.observe(item);
  });
}

function initMobileMenu() {
  const screenSize = window.innerWidth;
  if (screenSize <= 768) {
    // 移动设备特定处理
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

function replaceBrandInfo() {
  // 替换品牌名称
  document.body.innerHTML = document.body.innerHTML
    .replace(/Achuan/g, 'Masai')
    .replace(/阿川/g, '马赛')
    .replace(/\+86 13800000000/g, '+86 176-8188-0663')
    .replace(/13800000000/g, '17681880663');
}

// 控制台问候
console.log('%cMasai Collection', 'font-size: 24px; color: #8b5cf6; font-weight: bold;');
console.log('%c品牌设计 & 艺术创作', 'font-size: 12px; color: #ec4899;');
console.log('%c联系: +86 176-8188-0663', 'font-size: 12px; color: #06b6d4;');
