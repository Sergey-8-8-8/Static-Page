// Scroll to top when page loads
window.scrollTo(0, 0);

// Floating elements animation
const floatingElements = document.querySelectorAll('.element');
floatingElements.forEach((element, index) => {
    anime({
        targets: element,
        translateY: [
            { value: -20, duration: 2000 },
            { value: 0, duration: 2000 }
        ],
        translateX: [
            { value: 20, duration: 2000 },
            { value: 0, duration: 2000 }
        ],
        rotate: [
            { value: 5, duration: 2000 },
            { value: -5, duration: 2000 }
        ],
        easing: 'easeInOutSine',
        delay: index * 200,
        loop: true
    });
});

// Text animation for hero section
const heroText = document.querySelector('.hero h1');
anime({
    targets: heroText,
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 1500,
    easing: 'easeOutExpo'
});

// Feature cards animation
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
    anime({
        targets: card,
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        delay: index * 200,
        easing: 'easeOutExpo'
    });
});

// Showcase animations
const showcaseAnimations = document.querySelectorAll('.showcase-animation');

// Animation 1: Interactive Elements
anime({
    targets: showcaseAnimations[0],
    background: [
        { value: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)' },
        { value: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)' }
    ],
    duration: 3000,
    easing: 'easeInOutSine',
    loop: true
});

// Animation 2: Motion Graphics
const motionGraphics = anime({
    targets: showcaseAnimations[1],
    scale: [
        { value: 1, duration: 1000 },
        { value: 1.1, duration: 1000 }
    ],
    rotate: [
        { value: 0, duration: 1000 },
        { value: 360, duration: 1000 }
    ],
    easing: 'easeInOutSine',
    loop: true
});

// Animation 3: UI Animations
const uiAnimation = anime({
    targets: showcaseAnimations[2],
    translateX: [
        { value: -20, duration: 1000 },
        { value: 20, duration: 1000 },
        { value: 0, duration: 1000 }
    ],
    translateY: [
        { value: -20, duration: 1000 },
        { value: 20, duration: 1000 },
        { value: 0, duration: 1000 }
    ],
    easing: 'easeInOutSine',
    loop: true
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = '#000';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = '#000';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            anime({
                targets: document.documentElement,
                scrollTop: target.offsetTop - 80,
                duration: 1000,
                easing: 'easeInOutExpo'
            });
        }
    });
});

// Pricing cards hover effect
const pricingCards = document.querySelectorAll('.pricing-card');
pricingCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        anime({
            targets: card,
            scale: 1.05,
            duration: 300,
            easing: 'easeOutExpo'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        anime({
            targets: card,
            scale: 1,
            duration: 300,
            easing: 'easeOutExpo'
        });
    });
});

// --- Animated floating outlined shapes ---
const bgAnim = document.getElementById('background-anim');

function createOutlineShape(type, size, top, left, delay, rotate = 0) {
    let shape;
    if (type === 'circle') {
        shape = document.createElement('div');
        shape.className = 'bg-outline-shape';
        shape.style.width = shape.style.height = size + 'px';
    } else if (type === 'ellipse') {
        shape = document.createElement('div');
        shape.className = 'bg-outline-shape';
        shape.style.width = size * 1.5 + 'px';
        shape.style.height = size + 'px';
        shape.style.borderRadius = '50% / 40%';
    } else if (type === 'polygon') {
        shape = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        shape.setAttribute('width', size);
        shape.setAttribute('height', size);
        shape.style.position = 'absolute';
        shape.style.top = '0';
        shape.style.left = '0';
        shape.style.overflow = 'visible';
        shape.classList.add('bg-outline-shape');
        const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        poly.setAttribute('points', `${size/2},0 ${size},${size} 0,${size}`);
        poly.setAttribute('stroke', 'rgba(255,255,255,0.18)');
        poly.setAttribute('stroke-width', '2');
        poly.setAttribute('fill', 'none');
        shape.appendChild(poly);
    }
    shape.style.top = top + '%';
    shape.style.left = left + '%';
    shape.style.opacity = '1';
    shape.style.position = 'absolute';
    if (rotate) shape.style.transform = `rotate(${rotate}deg)`;
    bgAnim.appendChild(shape);
    anime({
        targets: shape,
        translateY: [0, Math.random() * 40 - 20],
        translateX: [0, Math.random() * 40 - 20],
        scale: [1, 1.12, 1],
        direction: 'alternate',
        duration: 9000 + Math.random() * 4000,
        delay,
        easing: 'easeInOutSine',
        loop: true
    });
}

createOutlineShape('circle', 180, 28, 18, 0);
createOutlineShape('ellipse', 120, 60, 60, 800, 20);
createOutlineShape('polygon', 90, 70, 35, 1200, 10);
createOutlineShape('circle', 140, 45, 70, 400);
createOutlineShape('ellipse', 100, 20, 60, 1000, -15);

// --- Animate headline and prompt bar in ---
anime({
    targets: '.hero h1',
    opacity: [0, 1],
    translateY: [40, 0],
    duration: 1200,
    easing: 'easeOutExpo',
    delay: 200
});
anime({
    targets: '.prompt-bar',
    opacity: [0, 1],
    translateY: [40, 0],
    duration: 1200,
    easing: 'easeOutExpo',
    delay: 600
});

// --- Typing Animation and Use Case Box ---
const promptInput = document.querySelector('.prompt-input');
const useCaseBox = document.getElementById('use-case-box');

const commands = [
    { text: 'Make it full screen...', anim: 'fullscreen' },
    { text: 'Make it smaller...', anim: 'smaller' },
    { text: 'Change the layout...', anim: 'layout' },
    { text: 'Change the aspect ratio...', anim: 'aspect' },
    { text: 'Make it hover...', anim: 'hover' },
    { text: 'Let it flow...', anim: 'flow' }
];
let typingIndex = 0;
let typingChar = 0;
let typingTimeout;
let isUserTyping = false;
let isDeleting = false;
let morphTimeout;
let lastMorphState = null;

// --- Use Case Box Morphing ---
function ensureUseCaseBoxContent() {
    if (!useCaseBox.innerHTML) {
        useCaseBox.innerHTML = `
        <div class="uc-card">
            <div class="uc-image gradient-bg"></div>
            <div class="uc-content">
                <div class="uc-title">Heading</div>
                <div class="uc-bar uc-bar1"></div>
                <div class="uc-bar uc-bar2"></div>
                <div class="uc-bar uc-bar3"></div>
            </div>
        </div>`;
    }
}

function morphUseCaseBox(state) {
    ensureUseCaseBoxContent();
    useCaseBox.className = 'use-case-box';
    const card = useCaseBox.querySelector('.uc-card');
    const image = useCaseBox.querySelector('.uc-image');
    const content = useCaseBox.querySelector('.uc-content');
    if (!card || !image || !content) return;
    // Reset
    card.classList.remove('fullscreen');
    card.style.transition = 'all 0.7s cubic-bezier(.4,0,.2,1)';
    image.style.transition = 'all 0.7s cubic-bezier(.4,0,.2,1)';
    content.style.transition = 'all 0.7s cubic-bezier(.4,0,.2,1)';
    card.style.boxShadow = '';
    card.style.transform = '';
    card.style.flexDirection = '';
    card.style.width = '';
    card.style.height = '';
    card.style.borderRadius = '';
    card.style.padding = '';
    image.style.width = '';
    image.style.height = '';
    image.style.marginBottom = '';
    content.style.alignItems = '';
    content.style.width = '';
    // Morph
    switch (state) {
        case 'fullscreen':
            card.classList.add('fullscreen');
            break;
        case 'smaller':
            card.style.width = '120px';
            card.style.height = '90px';
            card.style.transform = 'scale(0.7)';
            card.style.borderRadius = '1.1rem';
            content.style.width = '';
            break;
        case 'layout':
            card.style.width = '320px';
            card.style.height = '120px';
            card.style.flexDirection = 'row';
            card.style.borderRadius = '1.1rem';
            image.style.width = '90px';
            image.style.height = '100%';
            image.style.marginBottom = '0';
            content.style.alignItems = 'flex-start';
            content.style.width = '';
            break;
        case 'aspect':
            card.style.width = '220px';
            card.style.height = '120px';
            card.style.flexDirection = 'row';
            card.style.borderRadius = '1.1rem';
            image.style.width = '80px';
            image.style.height = '100%';
            image.style.marginBottom = '0';
            content.style.alignItems = 'flex-start';
            content.style.width = '';
            break;
        case 'hover':
            // Only add hover effect to the previous state
            if (lastMorphState) morphUseCaseBox(lastMorphState);
            setTimeout(() => {
                card.classList.add('uc-hovered');
            }, 10);
            return;
        case 'flow':
            card.style.width = '320px';
            card.style.height = '180px';
            card.style.flexDirection = 'column';
            card.style.borderRadius = '1.1rem';
            image.style.width = '100%';
            image.style.height = '90px';
            image.style.marginBottom = '1rem';
            content.style.alignItems = 'flex-start';
            content.style.width = '';
            // Animate content entrance
            content.style.opacity = '0';
            setTimeout(() => {
                content.style.transition = 'opacity 0.7s cubic-bezier(.4,0,.2,1)';
                content.style.opacity = '1';
            }, 200);
            break;
        default:
            break;
    }
    // Remove hover class if not in hover state
    if (state !== 'hover') card.classList.remove('uc-hovered');
    if (state !== 'hover') lastMorphState = state;
}

// --- Typing Animation ---
function typingLoop() {
    if (isUserTyping) return;
    const cmd = commands[typingIndex];
    const fullText = cmd.text;
    if (!isDeleting) {
        // Typing forward
        promptInput.value = fullText.slice(0, typingChar);
        if (typingChar < fullText.length) {
            typingChar++;
            typingTimeout = setTimeout(typingLoop, 60 + Math.random() * 40);
        } else {
            // Wait, then morph
            clearTimeout(morphTimeout);
            morphTimeout = setTimeout(() => {
                morphUseCaseBox(cmd.anim);
                setTimeout(() => {
                    isDeleting = true;
                    typingTimeout = setTimeout(typingLoop, 900);
                }, 600);
            }, 300);
        }
    } else {
        // Deleting backward
        promptInput.value = fullText.slice(0, typingChar);
        if (typingChar > 0) {
            typingChar--;
            typingTimeout = setTimeout(typingLoop, 32 + Math.random() * 32);
        } else {
            isDeleting = false;
            typingIndex = (typingIndex + 1) % commands.length;
            typingTimeout = setTimeout(typingLoop, 400);
        }
    }
}

promptInput.addEventListener('focus', () => {
    isUserTyping = true;
    clearTimeout(typingTimeout);
    clearTimeout(morphTimeout);
    promptInput.value = '';
    // Keep the last state in the use case box
});
promptInput.addEventListener('blur', () => {
    isUserTyping = false;
    typingChar = 0;
    isDeleting = false;
    typingTimeout = setTimeout(typingLoop, 800);
});
promptInput.addEventListener('input', () => {
    isUserTyping = promptInput.value.length > 0;
    if (!isUserTyping) {
        typingChar = 0;
        isDeleting = false;
        typingTimeout = setTimeout(typingLoop, 800);
    }
    // Don't morph while user is typing
});

// Initial start
ensureUseCaseBoxContent();
setTimeout(typingLoop, 1200);

// --- Use Case Box Animations ---
const style = document.createElement('style');
style.innerHTML = `
.uc-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #191a23;
    border-radius: 1.1rem;
    box-shadow: 0 2px 8px 0 #0002, 0 1.5px 6px 0 #4b6cff11;
    width: 320px;
    height: 180px;
    padding: 1.2rem 1.2rem 1.2rem 1.2rem;
    transition: all 0.7s cubic-bezier(.4,0,.2,1);
    position: relative;
    overflow: hidden;
}
.uc-card.uc-hovered {
    box-shadow: 0 8px 32px 0 #4b6cff44, 0 2px 8px 0 #ff4b7d33;
    transform: scale(1.04) translateY(-8px);
}
.uc-image {
    width: 120px;
    height: 100%;
    border-radius: 0.8rem;
    margin-bottom: 0;
    background: linear-gradient(90deg, #ff4b7d 0%, #4b6cff 100%);
    box-shadow: 0 2px 8px 0 #4b6cff22;
    transition: all 0.7s cubic-bezier(.4,0,.2,1);
}
.uc-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 1.2rem;
    opacity: 1;
    transition: all 0.7s cubic-bezier(.4,0,.2,1);
    width: 100%;
}
.uc-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #fff;
    letter-spacing: 0.01em;
}
.uc-bar {
    height: 0.7rem;
    border-radius: 0.4rem;
    background: #23243a;
    margin-bottom: 0.5rem;
    width: 80%;
    opacity: 0.7;
    transition: width 0.7s cubic-bezier(.4,0,.2,1);
}
.uc-bar1 { width: 80%; }
.uc-bar2 { width: 60%; }
.uc-bar3 { width: 40%; margin-bottom: 0; }
.gradient-bg { background: linear-gradient(90deg, #ff4b7d 0%, #4b6cff 100%); }
`;
document.head.appendChild(style); 

// Grid and bouncing ball animation
function createGridAndAnimateCursor() {
    const gridSize = 41;
    const grid = [gridSize, gridSize];
    const numberOfElements = gridSize * gridSize;
    const visualizer = document.querySelector('.stagger-visualizer');
    const cursor = document.querySelector('.stagger-visualizer .cursor');

    // Remove old dots if any
    visualizer.querySelectorAll('.dot').forEach(dot => dot.remove());

    // Create grid dots
    for (let i = 0; i < numberOfElements; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        visualizer.appendChild(dot);
    }
    const dots = visualizer.querySelectorAll('.dot');

    function getXY(index) {
        return [index % gridSize, Math.floor(index / gridSize)];
    }

    function animateBounce() {
        // Pick a random index for the cursor
        const fromIndex = Math.floor(Math.random() * numberOfElements);
        const toIndex = Math.floor(Math.random() * numberOfElements);
        const [fromX, fromY] = getXY(fromIndex);
        const [toX, toY] = getXY(toIndex);
        const cellSize = 1.0; // rem

        anime({
            targets: cursor,
            left: `${fromX * cellSize}rem`,
            top: `${fromY * cellSize}rem`,
            duration: 0,
            easing: 'linear',
            complete: () => {
                anime({
                    targets: cursor,
                    left: `${toX * cellSize}rem`,
                    top: `${toY * cellSize}rem`,
                    scale: [0.7, 1.2, 1],
                    duration: 1200,
                    easing: 'easeInOutElastic(1, .7)',
                    update: anim => {
                        // Animate dots in a wave from the cursor
                        dots.forEach((dot, i) => {
                            const [dotX, dotY] = getXY(i);
                            const dist = Math.abs(dotX - toX) + Math.abs(dotY - toY);
                            if (dist < 6) {
                                anime({
                                    targets: dot,
                                    scale: [1, 2, 1],
                                    duration: 600 + dist * 30,
                                    delay: dist * 20,
                                    easing: 'easeInOutSine',
                                });
                            }
                        });
                    },
                    complete: animateBounce
                });
            }
        });
    }
    animateBounce();
}
createGridAndAnimateCursor();

// Anime.js logo animation (CDN version, adapted)
function animejsLogoAnimation() {
    // Animate the red dot
    anime({
        targets: '#dot-1',
        scale: [0, 1],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutBack',
        delay: 200
    });
    // Animate the white letters
    anime({
        targets: ['#a-1', '#n-1', '#i-1', '#m-1', '#e-1'],
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 900,
        delay: anime.stagger(120, {start: 600}),
        easing: 'easeOutExpo'
    });
    // Animate the line
    anime({
        targets: '#line',
        opacity: [0, 0.5],
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 1200,
        delay: 1200,
        easing: 'easeOutExpo'
    });
    // Animate the subtext
    anime({
        targets: '#sub-text',
        opacity: [0, 1],
        duration: 1000,
        delay: 1800,
        easing: 'easeOutExpo'
    });
}
animejsLogoAnimation(); 