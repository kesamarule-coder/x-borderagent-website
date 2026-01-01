// Smooth Scroll & Navigation
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }
    
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Counter Animation
    const animateCounter = (element, target, duration = 2000) => {
        let start = 0;
        const increment = target / (duration / 16);
        
        const updateCounter = () => {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };
        
        updateCounter();
    };
    
    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Animate counters
                if (entry.target.hasAttribute('data-target')) {
                    const target = parseInt(entry.target.getAttribute('data-target'));
                    animateCounter(entry.target, target);
                    entry.target.removeAttribute('data-target'); // Prevent re-animation
                }
                
                // Unobserve after animation
                animateOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.mission-card, .service-card, .result-card, .strength-card, .team-card, .contact-method');
    animatedElements.forEach(el => {
        animateOnScroll.observe(el);
    });
    
    // Observe counter elements
    const counterElements = document.querySelectorAll('[data-target]');
    counterElements.forEach(el => {
        animateOnScroll.observe(el);
    });
    
    // Scroll to Top Button
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Parallax Effect for Hero Orbs
    const heroOrbs = document.querySelectorAll('.gradient-orb');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        heroOrbs.forEach((orb, index) => {
            const speed = parallaxSpeed * (index + 1);
            const yPos = -(scrolled * speed);
            orb.style.transform = `translateY(${yPos}px)`;
        });
    });
    
    // Mouse Move Parallax for Hero Section
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            
            const xPercent = (clientX / innerWidth - 0.5) * 2;
            const yPercent = (clientY / innerHeight - 0.5) * 2;
            
            heroOrbs.forEach((orb, index) => {
                const speed = (index + 1) * 10;
                const x = xPercent * speed;
                const y = yPercent * speed;
                
                orb.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
        
        hero.addEventListener('mouseleave', () => {
            heroOrbs.forEach(orb => {
                orb.style.transform = 'translate(0, 0)';
            });
        });
    }
    
    // Card Hover Effects with Tilt
    const cards = document.querySelectorAll('.service-card, .strength-card, .result-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.1s ease';
        });
        
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'transform 0.3s ease';
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
    
    // Dynamic Badge Animation
    const badges = document.querySelectorAll('.hero-badge, .section-badge');
    
    badges.forEach(badge => {
        const text = badge.textContent;
        badge.style.backgroundImage = 'linear-gradient(90deg, #667eea 0%, #764ba2 50%, #667eea 100%)';
        badge.style.backgroundSize = '200% auto';
        badge.style.animation = 'gradientShift 3s ease infinite';
    });
    
    // Add gradient shift animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes gradientShift {
            0%, 100% { background-position: 0% center; }
            50% { background-position: 100% center; }
        }
    `;
    document.head.appendChild(style);
    
    // Staggered Animation for Hero Stats
    const heroStats = document.querySelectorAll('.stat-item');
    heroStats.forEach((stat, index) => {
        stat.style.opacity = '0';
        stat.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            stat.style.transition = 'all 0.8s ease';
            stat.style.opacity = '1';
            stat.style.transform = 'translateY(0)';
        }, 800 + (index * 200));
    });
    
    // Service Features Animation
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        const features = card.querySelectorAll('.service-features li');
        
        card.addEventListener('mouseenter', () => {
            features.forEach((feature, index) => {
                setTimeout(() => {
                    feature.style.transform = 'translateX(5px)';
                    feature.style.transition = 'transform 0.3s ease';
                }, index * 50);
            });
        });
        
        card.addEventListener('mouseleave', () => {
            features.forEach(feature => {
                feature.style.transform = 'translateX(0)';
            });
        });
    });
    
    // Progress Indicator
    const createProgressIndicator = () => {
        const progressBar = document.createElement('div');
        progressBar.style.position = 'fixed';
        progressBar.style.top = '0';
        progressBar.style.left = '0';
        progressBar.style.height = '3px';
        progressBar.style.background = 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)';
        progressBar.style.zIndex = '9999';
        progressBar.style.transition = 'width 0.1s ease';
        progressBar.style.width = '0%';
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.pageYOffset / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
    };
    
    createProgressIndicator();
    
    // Scroll Indicator Auto-hide
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100 && scrollIndicator) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.visibility = 'hidden';
        } else if (scrollIndicator) {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.visibility = 'visible';
        }
    });
    
    // Contact Method Hover Effect
    const contactMethods = document.querySelectorAll('.contact-method');
    
    contactMethods.forEach(method => {
        method.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.method-icon');
            icon.style.transform = 'scale(1.2) rotate(5deg)';
            icon.style.transition = 'transform 0.3s ease';
        });
        
        method.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.method-icon');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Loading Animation
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });
    
    // Easter Egg: Konami Code
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);
        
        if (konamiCode.join('') === konamiSequence.join('')) {
            triggerConfetti();
        }
    });
    
    function triggerConfetti() {
        const colors = ['#667eea', '#764ba2', '#ec4899', '#06b6d4', '#10b981'];
        const confettiCount = 100;
        
        for (let i = 0; i < confettiCount; i++) {
            createConfetti(colors[Math.floor(Math.random() * colors.length)]);
        }
    }
    
    function createConfetti(color) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.background = color;
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        document.body.appendChild(confetti);
        
        const duration = Math.random() * 3 + 2;
        const xMovement = (Math.random() - 0.5) * 200;
        
        confetti.animate([
            { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight + 10}px) translateX(${xMovement}px) rotate(720deg)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
    
    // Console Message
    console.log('%c🚀 X-Border Agent', 'font-size: 24px; font-weight: bold; color: #667eea;');
    console.log('%cBuilt with ❤️ and AI', 'font-size: 14px; color: #718096;');
    console.log('%cInterested in working with us? Contact: inquiry@x-borderagent.com', 'font-size: 12px; color: #4a5568;');
});

// Performance Optimization: Debounce Function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle Function for Scroll Events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Booking Calendar System
document.addEventListener('DOMContentLoaded', () => {
    const selectedSlots = [];
    const maxSlots = 3;
    let currentWeekOffset = 0;
    
    // 時間スロット生成（10:00-18:00、30分刻み）
    const timeSlots = [];
    for (let hour = 10; hour < 18; hour++) {
        timeSlots.push(`${hour}:00-${hour}:30`);
        timeSlots.push(`${hour}:30-${(hour + 1)}:00`);
    }
    
    // 指定された週の日付を取得
    function getWeekDates(weekOffset) {
        const today = new Date();
        const currentDay = today.getDay(); // 0:日曜, 1:月曜, ..., 6:土曜
        
        // 今週の月曜日を取得
        const monday = new Date(today);
        const daysToMonday = currentDay === 0 ? -6 : 1 - currentDay;
        monday.setDate(today.getDate() + daysToMonday);
        
        // weekOffset分の週をずらす
        monday.setDate(monday.getDate() + (weekOffset * 7));
        
        // 月〜金の日付を生成
        const weekDates = [];
        for (let i = 0; i < 5; i++) {
            const date = new Date(monday);
            date.setDate(monday.getDate() + i);
            weekDates.push(date);
        }
        
        return weekDates;
    }
    
    // 日付フォーマット（例: 1月15日（月））
    function formatDate(date) {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const dayNames = ['日', '月', '火', '水', '木', '金', '土'];
        const dayOfWeek = dayNames[date.getDay()];
        return `${month}月${day}日（${dayOfWeek}）`;
    }
    
    // 日付フォーマット（完全版: 2026年1月15日（月））
    function formatDateFull(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const dayNames = ['日', '月', '火', '水', '木', '金', '土'];
        const dayOfWeek = dayNames[date.getDay()];
        return `${year}年${month}月${day}日（${dayOfWeek}）`;
    }
    
    // カレンダー初期化
    function initCalendar() {
        const weekDates = getWeekDates(currentWeekOffset);
        const dayHeaders = document.querySelectorAll('.day-header');
        const days = ['月', '火', '水', '木', '金'];
        
        // 日付ヘッダーを更新
        dayHeaders.forEach((header, index) => {
            if (weekDates[index]) {
                header.textContent = formatDate(weekDates[index]);
            }
        });
        
        // 時間スロットを生成
        days.forEach((day, dayIndex) => {
            const timeSlotsContainer = document.querySelector(`.time-slots[data-day="${day}"]`);
            if (timeSlotsContainer && weekDates[dayIndex]) {
                timeSlotsContainer.innerHTML = '';
                const currentDate = weekDates[dayIndex];
                
                timeSlots.forEach(slot => {
                    const slotElement = document.createElement('div');
                    slotElement.className = 'time-slot';
                    slotElement.textContent = slot;
                    slotElement.dataset.day = day;
                    slotElement.dataset.time = slot;
                    slotElement.dataset.date = currentDate.toISOString().split('T')[0]; // YYYY-MM-DD形式
                    slotElement.dataset.fullDate = formatDateFull(currentDate);
                    
                    slotElement.addEventListener('click', () => selectTimeSlot(slotElement));
                    timeSlotsContainer.appendChild(slotElement);
                });
            }
        });
        updateWeekDisplay();
    }
    
    // 時間スロット選択
    function selectTimeSlot(element) {
        const day = element.dataset.day;
        const time = element.dataset.time;
        const fullDate = element.dataset.fullDate;
        const slotKey = `${fullDate} ${time}`;
        
        if (element.classList.contains('selected')) {
            // 選択解除
            element.classList.remove('selected');
            const index = selectedSlots.findIndex(s => s.key === slotKey);
            if (index > -1) {
                selectedSlots.splice(index, 1);
            }
        } else {
            // 新規選択
            if (selectedSlots.length >= maxSlots) {
                alert(`最大${maxSlots}つまで選択できます。別の時間を選択する場合は、既存の選択を解除してください。`);
                return;
            }
            element.classList.add('selected');
            selectedSlots.push({
                key: slotKey,
                day: day,
                time: time,
                fullDate: fullDate,
                element: element
            });
        }
        
        updateSelectedDisplay();
        updateFormField();
    }
    
    // 選択表示を更新
    function updateSelectedDisplay() {
        const container = document.getElementById('selectedSlots');
        if (!container) return;
        
        if (selectedSlots.length === 0) {
            container.innerHTML = '<p class="no-selection">まだ選択されていません</p>';
        } else {
            container.innerHTML = selectedSlots.map((slot, index) => `
                <div class="selected-slot">
                    <span class="selected-slot-text">第${index + 1}希望：${slot.key}</span>
                    <button class="remove-slot" onclick="removeSlot(${index})" type="button">×</button>
                </div>
            `).join('');
        }
    }
    
    // スロット削除
    window.removeSlot = function(index) {
        const slot = selectedSlots[index];
        if (slot && slot.element) {
            slot.element.classList.remove('selected');
        }
        selectedSlots.splice(index, 1);
        updateSelectedDisplay();
        updateFormField();
    };
    
    // フォームフィールドを更新
    function updateFormField() {
        const field = document.getElementById('preferredTimes');
        if (field && selectedSlots.length > 0) {
            field.value = selectedSlots.map((slot, index) => 
                `第${index + 1}希望：${slot.fullDate} ${slot.time}`
// 結果: 第1希望：2026年1月15日（木） 10:30-11:00

            ).join('\n');
        }
    }
    
    // 週表示を更新
    function updateWeekDisplay() {
        const weekDisplay = document.getElementById('currentWeek');
        if (weekDisplay) {
            const today = new Date();
            today.setDate(today.getDate() + (currentWeekOffset * 7));
            const year = today.getFullYear();
            const month = today.getMonth() + 1;
            weekDisplay.textContent = `${year}年${month}月 第${Math.ceil(today.getDate() / 7)}週`;
        }
    }
    
    // 週切り替え
    const prevWeekBtn = document.getElementById('prevWeek');
    const nextWeekBtn = document.getElementById('nextWeek');
    
    if (prevWeekBtn) {
        prevWeekBtn.addEventListener('click', () => {
            if (currentWeekOffset > 0) {
                currentWeekOffset--;
                
                // すべての選択を解除
                selectedSlots.forEach(slot => {
                    if (slot.element) {
                        slot.element.classList.remove('selected');
                    }
                });
                selectedSlots.length = 0;
                
                initCalendar();
                updateSelectedDisplay();
                updateFormField();
            }
        });
    }
    
    if (nextWeekBtn) {
        nextWeekBtn.addEventListener('click', () => {
            if (currentWeekOffset < 8) { // 2ヶ月先まで
                currentWeekOffset++;
                
                // すべての選択を解除
                selectedSlots.forEach(slot => {
                    if (slot.element) {
                        slot.element.classList.remove('selected');
                    }
                });
                selectedSlots.length = 0;
                
                initCalendar();
                updateSelectedDisplay();
                updateFormField();
            }
        });
    }
    
    // カレンダー初期化
    if (document.querySelector('.calendar-grid')) {
        initCalendar();
    }
});

// Contact Form Submission
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formMessage = document.getElementById('formMessage');
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            
            // ボタンを無効化
            submitButton.disabled = true;
            submitButton.textContent = '送信中...';
            
            // フォームデータを取得
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            // Google Analytics イベント追跡
            if (typeof trackEvent === 'function') {
                trackEvent('form_submission', {
                    form_name: 'contact_form',
                    service: data.service
                });
            }
            
            try {
                // メールアドレス（実際の送信先）
                const toEmail = 'inquiry@x-borderagent.com';
                
                // メール本文を作成
                const emailBody = `
【お問い合わせ内容】

お名前: ${data.name}
会社名: ${data.company || '未記入'}
メールアドレス: ${data.email}
電話番号: ${data.phone || '未記入'}
ご興味のあるサービス: ${data.service}

ご希望の日時候補（3つ）:
${data.preferredTimes || '未選択'}

お問い合わせ内容:
${data.message}

---
送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
                `;
                
                // Google Apps ScriptのWeb App URL（デプロイ済みのURL）
                const scriptURL = 'https://script.google.com/macros/s/AKfycbyzlewluBWQuXHlbDpugITcOIpuzoOf9rrVfP4QuDj7y9HZgDG5U5G6zbjm1fuBBnNs/exec';
                
                // URLSearchParams形式でデータを送信（CORS対策）
                const params = new URLSearchParams();
                params.append('name', data.name);
                params.append('company', data.company || '');
                params.append('email', data.email);
                params.append('phone', data.phone || '');
                params.append('service', data.service);
                params.append('preferredTimes', data.preferredTimes || '');
                params.append('message', data.message);
                params.append('toEmail', toEmail);
                
                // Google Apps Scriptに送信（GET形式でも受け付けられるように）
                const response = await fetch(`${scriptURL}?${params.toString()}`, {
                    method: 'GET',
                    mode: 'no-cors' // CORS制限を回避
                });
                
                // no-corsモードではresponseの内容を読めないため、
                // 送信自体が成功したと仮定
                const result = { result: 'success' };
                
                // 成功メッセージ
                formMessage.className = 'form-message success';
                formMessage.textContent = 'お問い合わせありがとうございます！inquiry@x-borderagent.com に送信されました。24時間以内に担当者よりご連絡いたします。';
                
                // Google Analytics コンバージョン追跡
                if (typeof trackEvent === 'function') {
                    trackEvent('conversion', {
                        event_category: 'contact',
                        event_label: 'form_success'
                    });
                }
                
                // フォームをリセット
                contactForm.reset();
                
                // 選択されたカレンダースロットもクリア
                document.querySelectorAll('.time-slot.selected').forEach(slot => {
                    slot.classList.remove('selected');
                });
                
                // 5秒後にメッセージを消す
                setTimeout(() => {
                    formMessage.className = 'form-message';
                    formMessage.textContent = '';
                }, 5000);
                
            } catch (error) {
                console.error('Form submission error:', error);
                
                // エラーメッセージ
                formMessage.className = 'form-message error';
                formMessage.textContent = '送信中にエラーが発生しました。お手数ですが、直接メール（inquiry@x-borderagent.com）でご連絡ください。';
                
                // Google Analytics エラー追跡
                if (typeof trackEvent === 'function') {
                    trackEvent('form_error', {
                        error_message: error.message
                    });
                }
            } finally {
                // ボタンを再有効化
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        });
        
        // リアルタイムバリデーション
        const emailField = document.getElementById('email');
        if (emailField) {
            emailField.addEventListener('blur', () => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (emailField.value && !emailRegex.test(emailField.value)) {
                    emailField.style.borderColor = 'var(--secondary)';
                } else {
                    emailField.style.borderColor = '';
                }
            });
        }
    }
});
