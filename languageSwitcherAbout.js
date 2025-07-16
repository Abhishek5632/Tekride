document.addEventListener('DOMContentLoaded', function() {
    const language = localStorage.getItem('language') || 'en'; // Default to English if no language is set
    const translations = {
      en: {
        title: "About TekRide's Language Change Feature",
        featureHeading: "Language Flexibility at Your Fingertips",
        introText: "TekRide understands the importance of making our service accessible to everyone, regardless of their preferred language. That's why we’ve introduced a multi-language feature on our platform, enabling users to choose from multiple languages for the interface. This feature ensures a smoother and more personalized experience for all users.",
        availableLanguagesHeading: "Available Languages:",
        languages: ["English", "Hindi", "Tamil"],
        howToChangeLang: "You can easily switch between these languages using the language options available at the top of the homepage or any other page.",
        changeLangHeading: "How to Change the Language:",
        stepsIntro: "To change the language, simply follow these steps:",
        simpleText: "It’s that simple! We’re committed to ensuring you have the best experience possible in your preferred language.",
        ctaButton: "Go Back to Home"
      },
      hi: {
        title: "टेकराइड की भाषा परिवर्तन सुविधा के बारे में",
        featureHeading: "आपकी उंगलियों पर भाषा लचीलापन",
        introText: "TekRide यह समझता है कि सेवा को सभी के लिए सुलभ बनाना कितना महत्वपूर्ण है, चाहे उनकी पसंदीदा भाषा कुछ भी हो। यही कारण है कि हमने अपने प्लेटफ़ॉर्म पर एक बहु-भाषा सुविधा पेश की है, जिससे उपयोगकर्ता इंटरफ़ेस के लिए कई भाषाओं में से चयन कर सकते हैं। यह सुविधा सभी उपयोगकर्ताओं के लिए एक सुगम और व्यक्तिगत अनुभव सुनिश्चित करती है।",
        availableLanguagesHeading: "उपलब्ध भाषाएँ:",
        languages: ["अंग्रेज़ी", "हिंदी", "तमिल"],
        howToChangeLang: "आप आसानी से इन भाषाओं के बीच स्विच कर सकते हैं, जो होमपेज या किसी अन्य पृष्ठ के शीर्ष पर भाषा चयन विकल्प का उपयोग करके।",
        changeLangHeading: "भाषा कैसे बदलें:",
        stepsIntro: "भाषा बदलने के लिए, बस इन कदमों का पालन करें:",
        simpleText: "इतना आसान है! हम यह सुनिश्चित करने के लिए प्रतिबद्ध हैं कि आपको अपनी पसंदीदा भाषा में सबसे अच्छा अनुभव मिले।",
        ctaButton: "होम पर वापस जाएं"
      },
      ta: {
        title: "டெக் ரைடின் மொழி மாற்றும் அம்சம் பற்றி",
        featureHeading: "உங்கள் விருப்ப மொழியில் வசதிகள்",
        introText: "TekRide, பயனர்களுக்கு முன்னணி மொழிகளைக் கொண்ட பல மொழி மாற்றங்களை வழங்கும் என்பதை புரிந்து கொண்டது. இது நமது சேவையை அனைவருக்கும் இலவசமாக அணுகக்கூடியதாக மாற்றுகிறது.",
        availableLanguagesHeading: "கிடைக்கும் மொழிகள்:",
        languages: ["ஆங்கிலம்", "ஹிந்தி", "தமிழ்"],
        howToChangeLang: "இந்த மொழிகளில் எளிதாக மாற்றம் செய்ய முடியும். எளிய வழிமுறையை பின்பற்றவும்.",
        changeLangHeading: "மொழியை எப்படி மாற்றுவது:",
        stepsIntro: "மொழி மாற்றத்திற்கு, பின்வரும் வழிமுறைகளை பின்பற்றவும்:",
        simpleText: "இது மிகவும் எளிதானது! உங்கள் விருப்ப மொழியில் சிறந்த அனுபவத்தை பெற உறுதி செய்யப்படுகிறோம்.",
        ctaButton: "முதன்மை பக்கம் திரும்பவும்"
      }
    };
  
    // Get the current language translations
    const currentLang = translations[language] || translations['en'];
  
    // Update page content dynamically based on the current language
    document.getElementById('page-title').innerText = currentLang.title;
    document.getElementById('feature-heading').innerText = currentLang.featureHeading;
    document.getElementById('intro-text').innerText = currentLang.introText;
    document.getElementById('available-languages-heading').innerText = currentLang.availableLanguagesHeading;
  
    // Update language list
    const languagesList = document.getElementById('languages-list');
    currentLang.languages.forEach(lang => {
      const li = document.createElement('li');
      li.innerText = lang;
      languagesList.appendChild(li);
    });
  
    document.getElementById('how-to-change-lang').innerText = currentLang.howToChangeLang;
    document.getElementById('change-lang-heading').innerText = currentLang.changeLangHeading;
    document.getElementById('steps-intro').innerText = currentLang.stepsIntro;
    document.getElementById('simple-text').innerText = currentLang.simpleText;
    document.getElementById('cta-button').innerText = currentLang.ctaButton;
  });
  