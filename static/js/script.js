// Blog posts data
const blogPosts = [
  {
    id: "1",
    title: "5 Simple Meditation Techniques for Daily Calm",
    excerpt:
      "Discover easy-to-follow meditation practices that can help reduce stress and anxiety in just a few minutes each day.",
    content:
      "Meditation doesn't have to be complicated or time-consuming. These five simple techniques can be practiced anywhere, anytime, to help you find moments of peace in your busy day.\n\n1. **Breath Awareness**: Focus on your natural breathing rhythm for 2-3 minutes.\n2. **Body Scan**: Notice sensations throughout your body from head to toe.\n3. **Loving-Kindness**: Send positive thoughts to yourself and others.\n4. **Mindful Walking**: Pay attention to each step and your surroundings.\n5. **Gratitude Meditation**: Reflect on three things you're grateful for.\n\nStart with just 5 minutes daily and gradually increase as you feel comfortable.",
    category: "mindfulness",
    readTime: "3 min read",
    publishedAt: "2024-01-15T10:00:00Z",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
  },
  {
    id: "2",
    title: "Understanding Anxiety: What Your Mind and Body Are Telling You",
    excerpt:
      "Learn to recognize anxiety symptoms and discover practical coping strategies that can help you regain control.",
    content:
      "Anxiety is your body's natural response to stress, but when it becomes overwhelming, it's important to understand what's happening and how to cope.\n\n**Common Signs of Anxiety:**\n- Racing thoughts or constant worry\n- Physical symptoms like rapid heartbeat or sweating\n- Difficulty concentrating\n- Sleep disturbances\n- Avoidance of certain situations\n\n**Effective Coping Strategies:**\n- Deep breathing exercises\n- Progressive muscle relaxation\n- Grounding techniques (5-4-3-2-1 method)\n- Regular exercise and movement\n- Talking to trusted friends or professionals\n\nRemember, seeking help is a sign of strength, not weakness.",
    category: "anxiety",
    readTime: "5 min read",
    publishedAt: "2024-01-12T14:30:00Z",
    imageUrl:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
  },
  {
    id: "3",
    title: "Building Resilience: Bouncing Back from Life's Challenges",
    excerpt:
      "Discover evidence-based strategies for developing emotional resilience and maintaining mental wellness during difficult times.",
    content:
      "Resilience isn't about avoiding difficult emotions or pretending everything is fine. It's about developing the skills to navigate life's ups and downs while maintaining your mental health.\n\n**Key Components of Resilience:**\n- Emotional awareness and regulation\n- Flexible thinking patterns\n- Strong social connections\n- Self-care practices\n- Meaning and purpose in life\n\n**Building Your Resilience Toolkit:**\n1. Practice self-compassion during setbacks\n2. Develop problem-solving skills\n3. Cultivate gratitude and optimism\n4. Build and maintain supportive relationships\n5. Create healthy routines and boundaries\n\nResilience is a skill that can be developed with practice and patience.",
    category: "self-care",
    readTime: "4 min read",
    publishedAt: "2024-01-10T09:15:00Z",
    imageUrl:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop",
  },
  {
    id: "4",
    title: "The Science of Sleep: How Rest Affects Mental Health",
    excerpt:
      "Explore the connection between quality sleep and emotional well-being, plus practical tips for better sleep hygiene.",
    content:
      "Sleep and mental health are deeply connected. Poor sleep can worsen anxiety and depression, while mental health challenges can disrupt sleep patterns.\n\n**How Sleep Affects Mental Health:**\n- Emotional regulation and mood stability\n- Stress hormone balance\n- Memory consolidation and cognitive function\n- Immune system strength\n\n**Sleep Hygiene Tips:**\n- Maintain consistent sleep and wake times\n- Create a calming bedtime routine\n- Limit screen time before bed\n- Keep your bedroom cool, dark, and quiet\n- Avoid caffeine and large meals before bedtime\n- Get natural light exposure during the day\n\n**When to Seek Help:**\nIf sleep problems persist for more than a few weeks or significantly impact your daily life, consider speaking with a healthcare provider.",
    category: "self-care",
    readTime: "6 min read",
    publishedAt: "2024-01-08T16:45:00Z",
    imageUrl:
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&h=600&fit=crop",
  },
  {
    id: "5",
    title: "Managing Depression: Small Steps Toward Healing",
    excerpt:
      "Gentle, practical strategies for coping with depression and taking care of your mental health one day at a time.",
    content:
      "Living with depression can feel overwhelming, but small, consistent steps can make a meaningful difference in your healing journey.\n\n**Understanding Depression:**\nDepression affects everyone differently, but common experiences include persistent sadness, loss of interest, fatigue, and difficulty concentrating.\n\n**Gentle Self-Care Strategies:**\n- Start with tiny, achievable goals\n- Maintain basic daily routines when possible\n- Connect with supportive people, even briefly\n- Spend time in nature or near windows\n- Practice gentle movement or stretching\n- Engage in activities that once brought joy\n\n**Professional Support:**\nTherapy, medication, or both can be highly effective. Don't hesitate to reach out to mental health professionals.\n\n**Crisis Resources:**\nIf you're having thoughts of self-harm, please reach out immediately to a crisis hotline or emergency services.",
    category: "depression",
    readTime: "5 min read",
    publishedAt: "2024-01-05T11:20:00Z",
    imageUrl:
      "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=800&h=600&fit=crop",
  },
  {
    id: "6",
    title: "Stress Management Techniques for Busy Lives",
    excerpt:
      "Quick and effective stress-relief methods you can use during your workday or in moments of overwhelm.",
    content:
      "Modern life often feels like a constant juggling act. These practical stress management techniques can help you find calm even in busy moments.\n\n**Quick Stress Relief (2-5 minutes):**\n- Box breathing (4-4-4-4 count)\n- Progressive muscle relaxation\n- Mindful hand washing or drinking water\n- Brief walk or stretching\n- Listening to calming music\n\n**Longer-term Strategies:**\n- Regular exercise routine\n- Time management and prioritization\n- Setting healthy boundaries\n- Social support networks\n- Hobbies and creative outlets\n\n**Recognizing Your Stress Signals:**\nLearn to identify early warning signs like tension, irritability, or changes in sleep or appetite.\n\n**When Stress Becomes Overwhelming:**\nChronic stress can impact both physical and mental health. Consider professional support if stress interferes with daily functioning.",
    category: "stress",
    readTime: "4 min read",
    publishedAt: "2024-01-03T13:10:00Z",
    imageUrl:
      "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?w=800&h=600&fit=crop",
  },
];

// State management
let currentPage = "home";
let currentSlide = 0;
let sliderTimer = null;
let selectedAmount = "25";
let currentTab = "donate";
let filteredPosts = [...blogPosts];
let searchQuery = "";
let activeCategory = "all";

// DOM elements
let mobileMenuBtn,
  mobileMenu,
  blogSlider,
  sliderIndicators,
  chatMessages,
  chatInput,
  sendButton;

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // Get DOM elements
  mobileMenuBtn = document.getElementById("mobileMenuBtn");
  mobileMenu = document.getElementById("mobileMenu");
  blogSlider = document.getElementById("blogSlider");
  sliderIndicators = document.getElementById("sliderIndicators");
  chatMessages = document.getElementById("chatMessages");
  chatInput = document.getElementById("chatInput");
  sendButton = document.getElementById("sendButton");

  // Set up event listeners
  setupNavigation();
  setupMobileMenu();
  setupBlogSlider();
  setupBlogFilters();
  setupChat();
  setupDonateForm();
  setupContactForm();
  setupTabSystem();

  // Initialize content
  renderBlogPosts();
  showPage("home");

  // Copy help page content from donate page
  setupHelpPage();
});

// Navigation system
function setupNavigation() {
  // Handle all navigation links
  document.addEventListener("click", function (e) {
    const link = e.target.closest("[data-page]");
    if (link) {
      e.preventDefault();
      const pageName = link.getAttribute("data-page");
      showPage(pageName);

      // Close mobile menu if open
      if (mobileMenu) {
        mobileMenu.style.display = "none";
      }
    }
  });

  // Handle browser back/forward
  window.addEventListener("popstate", function (e) {
    const page = e.state?.page || "home";
    showPage(page, false);
  });
}

function showPage(pageName, updateHistory = true) {
  // Hide all pages
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });

  // Show target page
  const targetPage = document.getElementById(pageName);
  if (targetPage) {
    targetPage.classList.add("active");
    currentPage = pageName;

    // Update navigation active states
    updateNavActiveStates(pageName);

    // Update browser history
    if (updateHistory) {
      history.pushState({ page: pageName }, "", `#${pageName}`);
    }

    // Scroll to top
    window.scrollTo(0, 0);

    // Page-specific initialization
    if (pageName === "blog") {
      renderBlogPosts();
    } else if (pageName === "donate" || pageName === "help") {
      setupTabSystem();
    }
  }
}

function updateNavActiveStates(pageName) {
  // Update desktop navigation
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("data-page") === pageName) {
      link.classList.add("active");
    }
  });

  // Update mobile navigation
  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("data-page") === pageName) {
      link.classList.add("active");
    }
  });
}

// Mobile menu
function setupMobileMenu() {
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
      if (mobileMenu) {
        const isVisible = mobileMenu.style.display === "block";
        mobileMenu.style.display = isVisible ? "none" : "block";
      }
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    if (
      mobileMenu &&
      !mobileMenu.contains(e.target) &&
      !mobileMenuBtn.contains(e.target)
    ) {
      mobileMenu.style.display = "none";
    }
  });
}

// Blog slider functionality
function setupBlogSlider() {
  if (!blogSlider) return;

  renderSliderContent();
  setupSliderControls();
  startSliderAutoplay();
}

function renderSliderContent() {
  const slidesToShow = Math.min(4, blogPosts.length);
  const slides = blogPosts.slice(0, slidesToShow);

  blogSlider.innerHTML = slides
    .map(
      (post) => `
        <div class="blog-card" data-testid="slider-card-${post.id}">
            <img src="${post.imageUrl}" alt="${
        post.title
      }" class="blog-card-image" data-testid="slider-image-${post.id}">
            <div class="blog-card-content">
                <div class="blog-card-header">
                    <span class="blog-badge" data-testid="slider-badge-${
                      post.id
                    }">
                        ${
                          post.category.charAt(0).toUpperCase() +
                          post.category.slice(1)
                        }
                    </span>
                    <span class="blog-read-time" data-testid="slider-read-time-${
                      post.id
                    }">${post.readTime}</span>
                </div>
                <h3 class="blog-card-title" data-testid="slider-title-${
                  post.id
                }">${post.title}</h3>
                <p class="blog-card-excerpt" data-testid="slider-excerpt-${
                  post.id
                }">${post.excerpt}</p>
                <div class="blog-card-footer">
                    <span class="blog-card-date" data-testid="slider-date-${
                      post.id
                    }">
                        ${new Date(post.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                    </span>
                    <a href="#blog" class="blog-read-more" data-page="blog" data-testid="slider-read-more-${
                      post.id
                    }">
                        <i data-lucide="book-open"></i>
                        Read More
                    </a>
                </div>
            </div>
        </div>
    `
    )
    .join("");

  // Create indicators
  if (sliderIndicators) {
    sliderIndicators.innerHTML = slides
      .map(
        (_, index) => `
            <button class="slider-indicator ${
              index === 0 ? "active" : ""
            }" data-slide="${index}" data-testid="slider-indicator-${index}"></button>
        `
      )
      .join("");
  }

  // Reinitialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

function setupSliderControls() {
  const prevBtn = document.getElementById("sliderPrev");
  const nextBtn = document.getElementById("sliderNext");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentSlide =
        currentSlide > 0 ? currentSlide - 1 : Math.min(3, blogPosts.length - 1);
      updateSlider();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % Math.min(4, blogPosts.length);
      updateSlider();
    });
  }

  // Indicator clicks
  if (sliderIndicators) {
    sliderIndicators.addEventListener("click", (e) => {
      const indicator = e.target.closest(".slider-indicator");
      if (indicator) {
        currentSlide = parseInt(indicator.dataset.slide);
        updateSlider();
      }
    });
  }
}

function updateSlider() {
  if (blogSlider) {
    blogSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  // Update indicators
  if (sliderIndicators) {
    sliderIndicators
      .querySelectorAll(".slider-indicator")
      .forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentSlide);
      });
  }

  // Restart autoplay
  startSliderAutoplay();
}

function startSliderAutoplay() {
  if (sliderTimer) {
    clearInterval(sliderTimer);
  }

  sliderTimer = setInterval(() => {
    currentSlide = (currentSlide + 1) % Math.min(4, blogPosts.length);
    updateSlider();
  }, 5000);
}

// Blog filtering and search
function setupBlogFilters() {
  const searchInput = document.getElementById("blogSearch");
  const filterTabs = document.getElementById("filterTabs");

  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      searchQuery = e.target.value.toLowerCase();
      filterBlogPosts();
    });
  }

  if (filterTabs) {
    filterTabs.addEventListener("click", function (e) {
      const tab = e.target.closest(".filter-tab");
      if (tab) {
        // Update active tab
        filterTabs
          .querySelectorAll(".filter-tab")
          .forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        activeCategory = tab.dataset.category;
        filterBlogPosts();
      }
    });
  }
}

function filterBlogPosts() {
  filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery) ||
      post.excerpt.toLowerCase().includes(searchQuery) ||
      post.content.toLowerCase().includes(searchQuery);

    const matchesCategory =
      activeCategory === "all" || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  renderBlogPosts();
}

function renderBlogPosts() {
  const blogGrid = document.getElementById("blogGrid");
  if (!blogGrid) return;

  if (filteredPosts.length === 0) {
    blogGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--muted-foreground);">
                <i data-lucide="search" style="width: 3rem; height: 3rem; margin-bottom: 1rem;"></i>
                <p>No resources found matching your criteria.</p>
                <p>Try adjusting your search or filter selection.</p>
            </div>
        `;
  } else {
    blogGrid.innerHTML = filteredPosts
      .map(
        (post) => `
            <article class="blog-card" data-testid="blog-card-${post.id}">
                <img src="${post.imageUrl}" alt="${
          post.title
        }" class="blog-card-image" data-testid="blog-image-${post.id}">
                <div class="blog-card-content">
                    <div class="blog-card-header">
                        <span class="blog-badge" data-testid="blog-badge-${
                          post.id
                        }">
                            ${
                              post.category.charAt(0).toUpperCase() +
                              post.category.slice(1)
                            }
                        </span>
                        <span class="blog-read-time" data-testid="blog-read-time-${
                          post.id
                        }">${post.readTime}</span>
                    </div>
                    <h3 class="blog-card-title" data-testid="blog-title-${
                      post.id
                    }">${post.title}</h3>
                    <p class="blog-card-excerpt" data-testid="blog-excerpt-${
                      post.id
                    }">${post.excerpt}</p>
                    <div class="blog-card-footer">
                        <span class="blog-card-date" data-testid="blog-date-${
                          post.id
                        }">
                            ${new Date(post.publishedAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )}
                        </span>
                        <button class="blog-read-more" onclick="openBlogPost('${
                          post.id
                        }')" data-testid="blog-read-more-${post.id}">
                            <i data-lucide="book-open"></i>
                            Read More
                        </button>
                    </div>
                </div>
            </article>
        `
      )
      .join("");
  }

  // Reinitialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

function openBlogPost(postId) {
  const post = blogPosts.find((p) => p.id === postId);
  if (!post) return;

  // Create modal or new page for full blog post
  alert(`Blog Post: ${post.title}\n\n${post.content}`);
}

// Chat functionality
function setupChat() {
  if (!chatInput || !sendButton) return;

  // Handle input changes
  chatInput.addEventListener("input", function () {
    sendButton.disabled = !this.value.trim();

    // Auto-resize textarea
    this.style.height = "auto";
    this.style.height = Math.min(this.scrollHeight, 200) + "px";
  });

  // Handle Enter key
  chatInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  // Handle send button
  sendButton.addEventListener("click", sendMessage);
}

function sendMessage() {
  const message = chatInput.value.trim();
  if (!message) return;

  // Add user message
  addMessage(message, "user");

  // Clear input
  chatInput.value = "";
  chatInput.style.height = "auto";
  sendButton.disabled = true;

  // Show typing indicator
  showTypingIndicator();

  // Generate AI response after delay
  setTimeout(() => {
    hideTypingIndicator();
    const response = generateAIResponse(message);
    addMessage(response, "bot");
  }, 1500 + Math.random() * 1000);
}

function addMessage(text, sender) {
  if (!chatMessages) return;

  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}-message`;

  const avatar = document.createElement("div");
  avatar.className = "message-avatar";
  avatar.innerHTML = `<i data-lucide="${
    sender === "bot" ? "bot" : "user"
  }"></i>`;

  const content = document.createElement("div");
  content.className = "message-content";
  content.innerHTML = `<p>${text}</p>`;

  messageDiv.appendChild(avatar);
  messageDiv.appendChild(content);

  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Reinitialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

function showTypingIndicator() {
  const typingDiv = document.createElement("div");
  typingDiv.className = "message bot-message typing-indicator";
  typingDiv.innerHTML = `
        <div class="message-avatar">
            <i data-lucide="bot"></i>
        </div>
        <div class="message-content">
            <div class="loading">
                <div class="spinner"></div>
                <span>AI Guide is typing...</span>
            </div>
        </div>
    `;

  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Reinitialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

function hideTypingIndicator() {
  const typingIndicator = chatMessages.querySelector(".typing-indicator");
  if (typingIndicator) {
    typingIndicator.remove();
  }
}

function generateAIResponse(userMessage) {
  const lowerMessage = userMessage.toLowerCase();

  // Find relevant blog posts based on message content
  const relevantPosts = blogPosts.filter((post) => {
    const postContent = (
      post.title +
      " " +
      post.excerpt +
      " " +
      post.content
    ).toLowerCase();
    return lowerMessage
      .split(" ")
      .some((word) => word.length > 3 && postContent.includes(word));
  });

  // Response templates based on keywords
  const responses = {
    anxiety: [
      "I understand you're dealing with anxiety. It's completely normal to feel this way, and you're not alone. 💙 Some helpful techniques include deep breathing (try the 4-7-8 method), grounding exercises, and gentle movement. Would you like me to guide you through a quick breathing exercise?",
      "Anxiety can feel overwhelming, but there are effective ways to manage it. 🌸 Remember that anxiety is your body's way of trying to protect you. Some strategies that many find helpful include mindfulness practices, regular exercise, and talking to someone you trust.",
    ],
    depression: [
      "Thank you for sharing with me. Depression can make everything feel heavy and difficult. 💚 Please know that what you're experiencing is valid, and healing is possible. Small steps like maintaining a routine, connecting with others, or spending time in nature can help. Have you been able to reach out to any professional support?",
      "I hear you, and I want you to know that depression is treatable and you deserve support. 🤗 Some gentle strategies include setting very small, achievable goals each day, practicing self-compassion, and staying connected with people who care about you.",
    ],
    stress: [
      "Stress is such a common experience, especially in our busy world. 🌿 It sounds like you're managing a lot right now. Some quick stress-relief techniques include deep breathing, progressive muscle relaxation, or taking a brief walk. What's been your biggest source of stress lately?",
      "I can understand feeling stressed. It's your body's natural response to challenges. 💪 Some effective stress management strategies include time management, setting boundaries, regular exercise, and making time for activities you enjoy.",
    ],
    sleep: [
      "Sleep is so important for mental health, and sleep issues are really common. 🌙 Good sleep hygiene can make a big difference - things like keeping a consistent bedtime, limiting screens before bed, and creating a calm environment. Have you noticed anything specific that affects your sleep?",
      "Sleep difficulties can really impact how we feel during the day. 😴 Some helpful strategies include establishing a relaxing bedtime routine, avoiding caffeine late in the day, and creating a comfortable sleep environment. If problems persist, it might be worth talking to a healthcare provider.",
    ],
    crisis: [
      "I'm really glad you reached out. If you're having thoughts of hurting yourself or others, please contact emergency services (911) or the National Suicide Prevention Lifeline (988) immediately. 🆘 You deserve support and care, and there are people who want to help you through this difficult time.",
      "Thank you for trusting me with this. Your safety is the most important thing right now. Please reach out to a crisis hotline (988), emergency services (911), or go to your nearest emergency room. You are valuable and deserving of help. 💙",
    ],
  };

  // Determine response category
  let category = "general";
  if (
    lowerMessage.includes("anxiety") ||
    lowerMessage.includes("anxious") ||
    lowerMessage.includes("worry") ||
    lowerMessage.includes("panic")
  ) {
    category = "anxiety";
  } else if (
    lowerMessage.includes("depression") ||
    lowerMessage.includes("depressed") ||
    lowerMessage.includes("sad") ||
    lowerMessage.includes("hopeless")
  ) {
    category = "depression";
  } else if (
    lowerMessage.includes("stress") ||
    lowerMessage.includes("stressed") ||
    lowerMessage.includes("overwhelmed")
  ) {
    category = "stress";
  } else if (
    lowerMessage.includes("sleep") ||
    lowerMessage.includes("insomnia") ||
    lowerMessage.includes("tired")
  ) {
    category = "sleep";
  } else if (
    lowerMessage.includes("suicide") ||
    lowerMessage.includes("kill myself") ||
    lowerMessage.includes("hurt myself") ||
    lowerMessage.includes("end it all")
  ) {
    category = "crisis";
  }

  // Get base response
  let response;
  if (responses[category]) {
    const categoryResponses = responses[category];
    response =
      categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
  } else {
    const generalResponses = [
      "Thank you for sharing with me. I'm here to listen and provide support. 💙 Mental wellness is a journey, and it's okay to have ups and downs. What's been on your mind lately?",
      "I appreciate you opening up. Everyone's mental health journey is unique, and it's important to be patient and kind with yourself. 🌟 Is there a particular area of wellness you'd like to explore together?",
      "I'm glad you're here and taking care of your mental wellness. 🤗 That shows real strength and self-awareness. How can I best support you today?",
      "Thank you for reaching out. It takes courage to talk about mental health, and I'm honored you're sharing with me. 💚 What would be most helpful for you right now?",
    ];
    response =
      generalResponses[Math.floor(Math.random() * generalResponses.length)];
  }

  // Add relevant blog post recommendation if any found
  if (relevantPosts.length > 0 && category !== "crisis") {
    const randomPost =
      relevantPosts[Math.floor(Math.random() * relevantPosts.length)];
    response += `\n\nYou might find our article "${
      randomPost.title
    }" helpful - it covers ${randomPost.excerpt.toLowerCase()}`;
  }

  return response;
}

// Donate form functionality
function setupDonateForm() {
  const donateForm = document.getElementById("donateForm");
  const amountButtons = document.querySelectorAll(".amount-btn");
  const customAmountInput = document.getElementById("customAmount");
  const donateButtonText = document.getElementById("donateButtonText");

  // Amount button selection
  amountButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      amountButtons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      selectedAmount = this.dataset.amount;
      if (customAmountInput) customAmountInput.value = "";
      updateDonateButton();
    });
  });

  // Custom amount input
  if (customAmountInput) {
    customAmountInput.addEventListener("input", function () {
      if (this.value) {
        amountButtons.forEach((b) => b.classList.remove("active"));
        selectedAmount = this.value;
      } else {
        document
          .querySelector('.amount-btn[data-amount="25"]')
          ?.classList.add("active");
        selectedAmount = "25";
      }
      updateDonateButton();
    });
  }

  // Form submission
  if (donateForm) {
    donateForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(this);
      const amount = customAmountInput?.value || selectedAmount;

      // Simulate donation processing
      alert(
        `Thank you for your generous donation of $${amount}! Your support helps us continue providing mental wellness resources to those who need them. 💙`
      );
    });
  }

  function updateDonateButton() {
    if (donateButtonText) {
      const amount = customAmountInput?.value || selectedAmount;
      donateButtonText.textContent = `Donate $${amount} Securely`;
    }
  }
}

// Contact form functionality
function setupContactForm() {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(this);
      const name =
        formData.get("contactName") ||
        document.getElementById("contactName")?.value;

      // Simulate form submission
      alert(
        `Thank you${
          name ? `, ${name}` : ""
        }! We've received your message and will respond within 24 hours. If this is urgent, please don't hesitate to call our crisis support hotline. 💙`
      );

      // Reset form
      this.reset();
    });
  }
}

// Tab system for donate/contact page
function setupTabSystem() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const tabName = this.dataset.tab;

      // Update button states
      tabButtons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      // Update content visibility
      tabContents.forEach((content) => {
        content.classList.remove("active");
        if (content.id === `${tabName}-tab`) {
          content.classList.add("active");
        }
      });

      currentTab = tabName;
    });
  });
}

// Setup help page (copy content from donate page)
function setupHelpPage() {
  const helpPage = document.getElementById("help");
  const donatePage = document.getElementById("donate");

  if (helpPage && donatePage) {
    // Copy the donate page content to help page
    helpPage.innerHTML = donatePage.innerHTML;

    // Set up tab system for help page too
    setTimeout(setupTabSystem, 100);
  }
}

// Utility functions
function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

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

// Handle page load
window.addEventListener("load", function () {
  // Check for hash in URL
  const hash = window.location.hash.substring(1);
  if (hash && document.getElementById(hash)) {
    showPage(hash);
  }
});

// Export functions for global access
window.showPage = showPage;
window.openBlogPost = openBlogPost;
