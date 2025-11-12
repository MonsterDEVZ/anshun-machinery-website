// Main JavaScript for Asian Anshun Machinery website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initSlider();
    initCharts();
    initScrollAnimations();
    initSmoothScrolling();
    
    console.log('Asian Anshun Machinery website loaded successfully');
});

// Slider functionality
let currentSlide = 0;
const totalSlides = 5; // REF_1.png to REF_5.png

function initSlider() {
    const slider = document.getElementById('refSlider');
    if (!slider) return;
    
    // Auto-play slider
    setInterval(() => {
        changeSlide(1);
    }, 4000);
}

function changeSlide(direction) {
    const slider = document.getElementById('refSlider');
    if (!slider) return;
    
    currentSlide += direction;
    
    // Loop around
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    // Apply transform
    const translateX = -currentSlide * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}

// Charts initialization
function initCharts() {
    createMarketShareChart();
    createBetonChart();
    createCentralAsiaChart();
    createShchebenChart();
    createEquipmentChart();
    createCisMarketChart();
}

// Market Share Chart (Central Asia)
function createMarketShareChart() {
    const ctx = document.getElementById('marketShareChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                'Казахстан (45%)',
                'Узбекистан (30%)', 
                'Кыргызстан (12%)',
                'Таджикистан (8%)',
                'Туркменистан (5%)'
            ],
            datasets: [{
                data: [45, 30, 12, 8, 5],
                backgroundColor: [
                    '#FF6B35',  // Orange
                    '#FFC914',  // Yellow
                    '#FF8555',  // Light orange
                    '#FFD84A',  // Light yellow
                    '#FF9975'   // Lighter orange
                ],
                borderColor: '#162238',
                borderWidth: 2,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#B0BAC9',
                        font: {
                            size: 12,
                            family: 'Inter'
                        },
                        padding: 15,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: '#162238',
                    titleColor: '#FFFFFF',
                    bodyColor: '#B0BAC9',
                    borderColor: '#FF6B35',
                    borderWidth: 1,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const volume = {
                                45: '$3.96 млрд',
                                30: '$2.64 млрд', 
                                12: '$1.06 млрд',
                                8: '$0.70 млрд',
                                5: '$0.44 млрд'
                            };
                            return `${label}: ${volume[value]}`;
                        }
                    }
                }
            },
            layout: {
                padding: 10
            }
        }
    });
}

// Beton Market Chart (Kyrgyzstan)
function createBetonChart() {
    const ctx = document.getElementById('betonChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Крупные компании', 'Средние компании', 'Малые компании'],
            datasets: [{
                data: [21, 36, 43],
                backgroundColor: [
                    '#FF6B35',  // Orange
                    '#FFC914',  // Yellow  
                    '#FF8555'   // Light orange
                ],
                borderColor: '#162238',
                borderWidth: 2,
                hoverOffset: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#B0BAC9',
                        font: {
                            size: 12,
                            family: 'Inter'
                        },
                        padding: 15,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: '#162238',
                    titleColor: '#FFFFFF',
                    bodyColor: '#B0BAC9',
                    borderColor: '#FF6B35',
                    borderWidth: 1,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const companies = {
                                21: '3 компании',
                                36: '5 компаний',
                                43: '6 компаний'
                            };
                            return `${label}: ${value}% (${companies[value]})`;
                        }
                    }
                }
            },
            layout: {
                padding: 10
            }
        }
    });
}

// Central Asia Equipment Market Chart
function createCentralAsiaChart() {
    const ctx = document.getElementById('centralAsiaChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'Китайские производители',
                'Турецкие производители', 
                'Европейские производители',
                'Россия и СНГ',
                'Региональные дилеры КЗ',
                'Региональные дилеры УЗ',
                'Региональные дилеры ТД'
            ],
            datasets: [{
                label: 'Доля рынка (%)',
                data: [60, 15, 12, 8, 2, 2, 1],
                backgroundColor: [
                    '#FF6B35',
                    '#F7931E', 
                    '#FFD23F',
                    '#06FFA5',
                    '#1B98E0',
                    '#8E44AD',
                    '#E74C3C'
                ],
                borderColor: [
                    '#FF6B35',
                    '#F7931E',
                    '#FFD23F', 
                    '#06FFA5',
                    '#1B98E0',
                    '#8E44AD',
                    '#E74C3C'
                ],
                borderWidth: 2,
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#162238',
                    titleColor: '#FFFFFF',
                    bodyColor: '#B0BAC9',
                    borderColor: '#FF6B35',
                    borderWidth: 1,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed.y || 0;
                            return `${label}: ${value}%`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 65,
                    ticks: {
                        color: '#B0BAC9',
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(176, 186, 201, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#B0BAC9',
                        maxRotation: 45,
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// CIS/Eurasia Market Chart
function createCisMarketChart() {
    const ctx = document.getElementById('cisMarketChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                'Россия (45%)',
                'Украина (30%)', 
                'Беларусь + другие (25%)'
            ],
            datasets: [{
                data: [45, 30, 25],
                backgroundColor: [
                    '#FF6B35',
                    '#1B98E0',
                    '#FFD23F'
                ],
                borderColor: [
                    '#FF6B35',
                    '#1B98E0',
                    '#FFD23F'
                ],
                borderWidth: 3,
                hoverBorderWidth: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#B0BAC9',
                        font: {
                            size: 14,
                            family: 'Inter'
                        },
                        padding: 20,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: '#162238',
                    titleColor: '#FFFFFF',
                    bodyColor: '#B0BAC9',
                    borderColor: '#FF6B35',
                    borderWidth: 1,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const values = {
                                45: '$12.8 млрд',
                                30: '$8.6 млрд',
                                25: '$7.1 млрд'
                            };
                            return `${label}: ${value}% (${values[value]})`;
                        }
                    }
                }
            }
        }
    });
}

// Shcheben Production Chart (Kyrgyzstan)
function createShchebenChart() {
    const ctx = document.getElementById('shchebenChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                'Shagyl Tash (40-50%)',
                'Кум-Шагыл (20-25%)',
                'ATS-GROUP (15-20%)',
                'Прочие компании (15-25%)'
            ],
            datasets: [{
                data: [45, 22.5, 17.5, 15],
                backgroundColor: [
                    '#FF6B35',
                    '#FFC914',
                    '#FF8555',
                    '#FFD84A'
                ],
                borderColor: '#162238',
                borderWidth: 2,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#B0BAC9',
                        font: {
                            size: 12,
                            family: 'Inter'
                        },
                        padding: 15,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: '#162238',
                    titleColor: '#FFFFFF',
                    bodyColor: '#B0BAC9',
                    borderColor: '#FF6B35',
                    borderWidth: 1,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            return `${label}: ${value}%`;
                        }
                    }
                }
            }
        }
    });
}

// Equipment Market Chart (Kyrgyzstan)
function createEquipmentChart() {
    const ctx = document.getElementById('equipmentChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'Machineryline.kg',
                'Asian Anshun Machinery',
                'КыргызМашТрейд',
                'Howo Centre',
                'Прочие'
            ],
            datasets: [{
                label: 'Доля рынка (%)',
                data: [35, 20, 15, 10, 20],
                backgroundColor: [
                    '#FF6B35',
                    '#FFC914',
                    '#FF8555',
                    '#FFD84A',
                    '#FF9975'
                ],
                borderColor: [
                    '#FF6B35',
                    '#FFC914',
                    '#FF8555',
                    '#FFD84A',
                    '#FF9975'
                ],
                borderWidth: 2,
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#162238',
                    titleColor: '#FFFFFF',
                    bodyColor: '#B0BAC9',
                    borderColor: '#FF6B35',
                    borderWidth: 1,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed.y || 0;
                            return `${label}: ${value}%`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 40,
                    ticks: {
                        color: '#B0BAC9',
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(176, 186, 201, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#B0BAC9',
                        maxRotation: 45,
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Global Market Chart
function createGlobalMarketChart() {
    const ctx = document.getElementById('globalMarketChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'Европа',
                'Азия', 
                'Северная Америка',
                'Южная Америка',
                'Океания',
                'Африка'
            ],
            datasets: [{
                label: 'Объем рынка (млрд $)',
                data: [2.8, 2.4, 1.6, 0.8, 0.5, 0.3],
                backgroundColor: [
                    '#FF6B35',
                    '#F7931E',
                    '#FFD23F',
                    '#06FFA5',
                    '#1B98E0',
                    '#8E44AD'
                ],
                borderColor: [
                    '#FF6B35',
                    '#F7931E',
                    '#FFD23F',
                    '#06FFA5',
                    '#1B98E0',
                    '#8E44AD'
                ],
                borderWidth: 2,
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#162238',
                    titleColor: '#FFFFFF',
                    bodyColor: '#B0BAC9',
                    borderColor: '#FF6B35',
                    borderWidth: 1,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed.y || 0;
                            return `${label}: $${value} млрд`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 3,
                    ticks: {
                        color: '#B0BAC9',
                        callback: function(value) {
                            return '$' + value + 'B';
                        }
                    },
                    grid: {
                        color: 'rgba(176, 186, 201, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#B0BAC9'
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);
    
    // Observe all elements that should animate
    const animateElements = document.querySelectorAll('.market-card, .monster-block, .audience-column, .pricing-card, .instagram-item, .gallery-item');
    animateElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Gallery hover effects
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.zIndex = '10';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.zIndex = '1';
        });
    });
});

// Pricing card interactions
document.addEventListener('DOMContentLoaded', function() {
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Monster sections animations
document.addEventListener('DOMContentLoaded', function() {
    const monsterBlocks = document.querySelectorAll('.monster-block');
    
    monsterBlocks.forEach(block => {
        block.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px)';
            this.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 107, 53, 0.4)';
        });
        
        block.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });
    
    // Monster step animations
    const monsterSteps = document.querySelectorAll('.monster-step');
    const monsterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInLeft 0.6s ease-out forwards';
                entry.target.style.opacity = '1';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    monsterSteps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateX(-50px)';
        step.style.animationDelay = `${index * 0.1}s`;
        monsterObserver.observe(step);
    });
});

// Instagram links click tracking
document.addEventListener('DOMContentLoaded', function() {
    const instagramLinks = document.querySelectorAll('.instagram-item a');
    
    instagramLinks.forEach(link => {
        link.addEventListener('click', function() {
            const handle = this.textContent;
            console.log(`Instagram link clicked: ${handle}`);
            
            // Add visual feedback
            this.style.color = '#FFC914';
            setTimeout(() => {
                this.style.color = '';
            }, 500);
        });
    });
});

// Feature list item animations
document.addEventListener('DOMContentLoaded', function() {
    const featureItems = document.querySelectorAll('.feature-list li');
    
    featureItems.forEach((item, index) => {
        // Stagger the animation
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            item.style.transition = 'all 0.5s ease-out';
            
            // Trigger animation
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 100);
        }, index * 100);
    });
});

// Number animations
function animateNumbers() {
    const numberElements = document.querySelectorAll('.text-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const text = element.textContent;
                const match = text.match(/[\d.,]+/);
                
                if (match) {
                    const finalNumber = parseFloat(match[0].replace(',', '.'));
                    animateNumber(element, finalNumber, text);
                }
                
                observer.unobserve(element);
            }
        });
    });
    
    numberElements.forEach(el => observer.observe(el));
}

function animateNumber(element, finalNumber, originalText) {
    const duration = 2000;
    const steps = 60;
    const increment = finalNumber / steps;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= finalNumber) {
            current = finalNumber;
            clearInterval(timer);
        }
        
        const formattedNumber = current < 1 ? current.toFixed(1) : Math.round(current);
        element.textContent = originalText.replace(/[\d.,]+/, formattedNumber.toString().replace('.', ','));
    }, duration / steps);
}

// Initialize number animations
document.addEventListener('DOMContentLoaded', animateNumbers);

// Parallax effect for hero background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.classList.add('fade-in-up');
        }
    }, 500);
});

// Responsive chart resizing
window.addEventListener('resize', function() {
    // Charts will automatically resize due to responsive: true option
    // This event is here for any additional responsive logic if needed
});

// Console message for developers
console.log(`
🏭 Asian Anshun Machinery - Monster Marketing Solution
────────────────────────────────────────────────────
📊 Market Analysis: Central Asia $8.8B market
🎯 Target Audience: ~850 potential clients  
🏆 Instagram Competitors: Top-10 analyzed
💼 Pricing: Advanced (360,000c) | Ultimate (450,000c)
🔧 All critical bugs FIXED:
   ✅ Empty cards filled with content
   ✅ Monster blocks redesigned with icons
   ✅ Pricing updated (360k/450k in soms)
   ✅ Enhanced animations added
─────────────────────────────────────────────────────
🚀 Ready to dominate the crushing equipment market!
`);

// Add special monster section animations
function initMonsterAnimations() {
    // Icon floating animation
    const monsterIcons = document.querySelectorAll('.monster-icon');
    monsterIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.animation = 'iconFloat 3s ease-in-out infinite';
        });
    });
    
    // Monster header parallax effect
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const monsterHeaders = document.querySelectorAll('.monster-header');
        
        monsterHeaders.forEach(header => {
            const rect = header.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
                const speed = scrolled * 0.3;
                header.style.transform = `translateY(${speed}px)`;
            }
        });
    });
}

// Initialize monster animations after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initMonsterAnimations, 1000);
});