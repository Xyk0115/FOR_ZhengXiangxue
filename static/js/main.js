// 1. 随机飘落的花朵/花瓣特效
const skyContainer = document.getElementById('sky-container');
for (let i = 0; i < 30; i++) {
    let particle = document.createElement('div');
    particle.classList.add('particle');
    // 随机大小、位置、动画延迟
    let size = Math.random() * 20 + 10;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `-${Math.random() * 100}px`;

    // 简单的下落动画
    particle.animate([
        { transform: `translateY(0) rotate(0deg)` },
        { transform: `translateY(110vh) rotate(${Math.random() * 360}deg)` }
    ], {
        duration: Math.random() * 5000 + 5000,
        iterations: Infinity,
        delay: Math.random() * 5000
    });
    skyContainer.appendChild(particle);
}

// 2. 点击照片展示回忆（控制台或弹窗）
function showMemory(title, desc, element) {
    // 这里可以换成好看的弹窗库，简单起见用 alert 演示
    // 也可以加上 CSS 类来实现原图的铺开效果
    element.style.transform = 'scale(1.1) rotate(2deg)';
    setTimeout(() => {
        alert(`📸 回忆：${title}\n${desc}\n\n（这里可以替换成专属你的回忆故事）`);
        element.style.transform = 'scale(1)';
    }, 300);
}

// 3. 拆开信件交互
function openLetter() {
    const envelope = document.getElementById('envelope');
    envelope.classList.toggle('open');
}

// 4. 滚动视差特效（让天空背景感觉在移动）
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.body.style.backgroundPositionY = `${scrolled * 0.5}px`;
});