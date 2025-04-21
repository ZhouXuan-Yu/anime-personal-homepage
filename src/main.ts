// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  // 隐藏加载动画
  setTimeout(() => {
    const loadingElement = document.querySelector('.loading');
    if (loadingElement) {
      loadingElement.classList.add('fade-out');
      setTimeout(() => {
        loadingElement.classList.add('hidden');
      }, 500);
    }
  }, 1000);

  // 初始化粒子背景
  initParticles();

  // 初始化导航切换功能
  initNavigation();

  // 初始化贡献图表
  generateContributionGrid();

  // 初始化页面特效
  initPageEffects();

  // 初始化项目模态框
  initProjectModal();

  // 初始化证书标签页
  initCertificateTabs();

  // 初始化邮件发送功能
  initEmailSending();
});

/**
 * 初始化粒子背景
 */
function initParticles() {
  if (typeof (window as any).particlesJS !== 'undefined') {
    (window as any).particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#63c3a0'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#5a81be',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  }
}

/**
 * 初始化导航功能
 */
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.content-section');

  for (const item of navItems) {
    item.addEventListener('click', () => {
      const targetSection = item.getAttribute('data-section');

      // 更新导航项激活状态
      for (const nav of navItems) {
        nav.classList.remove('active');
      }
      item.classList.add('active');

      // 更新内容区域显示
      for (const section of sections) {
        section.classList.remove('active');
        if (section.id === targetSection) {
          section.classList.add('active');
        }
      }
    });
  }
}

/**
 * 生成贡献热图
 */
function generateContributionGrid() {
  const gridContainer = document.querySelector('.contribution-grid');
  if (!gridContainer) return;

  // 清空容器
  gridContainer.innerHTML = '';

  // 生成一年的数据 (52周 x 7天)
  const weeks = 52;
  const days = 7;

  // 模拟贡献数据
  for (let i = 0; i < weeks * days; i++) {
    const level = Math.floor(Math.random() * 5); // 0-4 贡献等级
    const day = document.createElement('div');
    day.classList.add('grid-item');
    day.style.setProperty('--i', String(i));

    // 设置不同的颜色强度
    let bgColor = 'rgba(99, 195, 160, 0.1)';
    switch(level) {
      case 0:
        bgColor = 'rgba(99, 195, 160, 0.1)';
        break;
      case 1:
        bgColor = 'rgba(99, 195, 160, 0.3)';
        break;
      case 2:
        bgColor = 'rgba(99, 195, 160, 0.5)';
        break;
      case 3:
        bgColor = 'rgba(99, 195, 160, 0.7)';
        break;
      case 4:
        bgColor = 'rgba(99, 195, 160, 0.9)';
        break;
    }

    day.style.backgroundColor = bgColor;
    gridContainer.appendChild(day);
  }
}

/**
 * 初始化页面特效
 */
function initPageEffects() {
  // 添加背景动画元素
  const bgContainer = document.querySelector('.bg-container');
  if (bgContainer) {
    const animatedBg = document.createElement('div');
    animatedBg.classList.add('animated-bg');

    // 添加浮动圆形
    for (let i = 0; i < 3; i++) {
      const circle = document.createElement('div');
      circle.classList.add('bg-circle');
      animatedBg.appendChild(circle);
    }

    bgContainer.appendChild(animatedBg);
  }

  // 为项目卡片添加点击事件
  const projectLinks = document.querySelectorAll('.project-link');
  for (const link of projectLinks) {
    link.addEventListener('click', (e) => {
      const href = (link as HTMLAnchorElement).getAttribute('href');
      if (href === '#') {
        e.preventDefault();
        alert('项目详情页面即将推出！');
      }
    });
  }

  // 为标签添加随机颜色
  const tags = document.querySelectorAll('.tag');
  const colors = [
    'rgba(99, 195, 160, 0.2)',  // 绿色
    'rgba(90, 129, 190, 0.2)',  // 蓝色
    'rgba(232, 106, 146, 0.2)', // 粉色
    'rgba(255, 180, 0, 0.2)',   // 黄色
    'rgba(184, 119, 217, 0.2)'  // 紫色
  ];

  for (const tag of tags) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    (tag as HTMLElement).style.backgroundColor = randomColor;
  }
}

/**
 * 初始化项目模态框
 */
function initProjectModal() {
  const openModalBtn = document.querySelector('.btn-add-project');
  const closeModalBtn = document.querySelector('.close-modal');
  const modal = document.getElementById('project-modal');
  const projectForm = document.getElementById('add-project-form');

  if (openModalBtn && modal) {
    openModalBtn.addEventListener('click', () => {
      modal.classList.add('active');
    });
  }

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  // 点击外部关闭模态框
  if (modal) {
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  // 项目表单提交处理
  if (projectForm) {
    projectForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const passwordInput = document.getElementById('project-password') as HTMLInputElement;
      const password = passwordInput.value;

      if (password === '1111') {
        const titleInput = document.getElementById('project-title') as HTMLInputElement;
        const descInput = document.getElementById('project-description') as HTMLTextAreaElement;
        const linkInput = document.getElementById('project-link') as HTMLInputElement;

        if (titleInput.value && descInput.value && linkInput.value) {
          // 这里只是前端验证，实际项目中会通过API提交到后端
          alert('项目添加成功！');

          // 清空表单并关闭模态框
          projectForm.reset();
          modal?.classList.remove('active');

          // 在实际应用中，这里会重新加载项目列表
        } else {
          alert('请填写所有必填字段！');
        }
      } else {
        alert('管理密码错误！');
      }
    });
  }

  // 图片预览功能
  const imageInput = document.getElementById('project-image');
  const imagePreview = document.querySelector('.image-preview');

  if (imageInput && imagePreview) {
    imageInput.addEventListener('change', (event) => {
      const input = event.target as HTMLInputElement;

      if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = (e) => {
          // 清空预览区域
          imagePreview.innerHTML = '';

          // 创建预览图片
          const img = document.createElement('img');
          img.src = e.target?.result as string;

          // 添加到预览区域
          imagePreview.appendChild(img);
        };

        reader.readAsDataURL(input.files[0]);
      }
    });
  }
}

/**
 * 初始化证书标签页
 */
function initCertificateTabs() {
  const tabItems = document.querySelectorAll('.tab-item');

  for (const tab of tabItems) {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');

      // 更新选项卡状态
      for (const item of tabItems) {
        item.classList.remove('active');
      }
      tab.classList.add('active');

      // 更新内容
      const tabPanes = document.querySelectorAll('.tab-pane');
      for (const pane of tabPanes) {
        pane.classList.remove('active');
        if (pane.id === targetTab) {
          pane.classList.add('active');
        }
      }
    });
  }
}

/**
 * 初始化邮件发送功能
 */
function initEmailSending() {
  const contactForm = document.querySelector('.contact-form');
  const sendEmailBtn = document.getElementById('send-email-btn');

  if (contactForm && sendEmailBtn) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('name') as HTMLInputElement;
      const emailInput = document.getElementById('email') as HTMLInputElement;
      const messageInput = document.getElementById('message') as HTMLTextAreaElement;

      if (nameInput.value && emailInput.value && messageInput.value) {
        // 显示发送中状态
        sendEmailBtn.textContent = '发送中...';
        sendEmailBtn.setAttribute('disabled', 'true');

        // 模拟发送邮件过程
        setTimeout(() => {
          // 在实际应用中，这里应该调用后端API发送邮件
          // 例如使用代码示例中的 SMTP 发送邮件
          /*
            使用类似以下代码调用后端API:
            fetch('/api/send-email', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: nameInput.value,
                email: emailInput.value,
                message: messageInput.value
              }),
            })
          */

          // 恢复按钮状态
          sendEmailBtn.textContent = '发送消息';
          sendEmailBtn.removeAttribute('disabled');

          // 显示成功消息
          alert('您的消息已发送！我会尽快回复您。');

          // 清空表单
          nameInput.value = '';
          emailInput.value = '';
          messageInput.value = '';
        }, 1500);
      } else {
        alert('请填写所有必填字段！');
      }
    });
  }
}
