// // Define translations
// document.addEventListener("DOMContentLoaded", function () {
//   var translations = {
//     en: {
//       about_us: "About",
//       team: "Team",
//       focus: "Focus",
//       founderandhistory: "Founder and History",
//       careers: "Careers",
//       contact: "Contact",
//       about_footer: "About",
//       team_footer: "Team",
//       focus_footer: "Focus",
//       founderandhistory_footer: "Founder and History",
//       careers_footer: "Careers",
//       contact_footer: "Contact",
//       harness: "Harness the science of Banevolence for a Better Tomorrow",
//       learnmore: "Learn More",
//       founder: "Foundery and History",
//       legacy: "The legacy of Mutib Bin Abdulaziz",
//       text: "The Mutib Foundation uses the Science of Benevolence to bring ever more improvement to peoples’ lives. We are a new kind of foundation; open, energetic, curious and professional, operating objective, data-driven ways of delivering evermore benefit to ever more people.",
//       readmore: "Read More",
//       ourfocus: "Our Focus",
//       activeprogams: "Active Programs",
//       text2:
//         "This section highlights the foundation's tangible contributions. This can include stories of initiatives in community, education and access to clean water.",
//       readstories: "Read Our Stories",
//       number7: "07",
//       milliondonated: "Million Donated",
//       number26: "26",
//       schoolsbuilt: "Schools Built",
//       number76: "76",
//       millionwater: "Million Water",
//       getinvolved: "Get Involved",
//       contribute: "Contribute",
//       career: "Career",
//       connect: "Connect",
//       founderslegacy: "Founder’s Legacy",
//       ourjourney: "Our Journey",
//       narrativetime: "The Narative of our Time",
//       humble: "Humble Beginnings",
//       legacyabout: "The legacy of Mutib Bin Abdulaziz",
//       readmoreabout: "Read More",
//       readmoreabout2: "Read More",
//       textactivefirst:
//         "The Mutib Foundation uses the Science of Benevolence to bring ever more improvement to peoples’ lives. We are a new kind of foundation; open, energetic, curious and professional, operating objective, data-driven ways of delivering evermore benefit to ever more people.",
//       readourstories: "Read Our Stories",
//       textactivesecond:
//         "The Mutib Foundation uses the Science of Benevolence to bring ever more improvement to peoples’ lives. We are a new kind of foundation; open, energetic, curious and professional, operating objective, data-driven ways of delivering evermore benefit to ever more people.",
//       ourjourneyabout: "Our Journey",
//       attributeandvalues: "Attributes & Values",
//       attributevalue1: "Attribute/value",
//       attributevalue2: "Attribute/value",
//       attributvalue3: "Attribute/value",
//       attributevalue4: "Attribute/value",
//     },
//     ar: {
//       about_us: "عن",
//       team: "فريق",
//       focus: "ركز",
//       founderandhistory: "المؤسس والتاريخ",
//       careers: "وظائف",
//       contact: "اتصال",
//       about_footer: "عن",
//       team_footer: "فريق",
//       focus_footer: "ركز",
//       founderandhistory_footer: "المؤسس والتاريخ",
//       careers_footer: "وظائف",
//       contact_footer: "اتصال",
//       harness: "تسخير علم الإحسان من أجل غد أفضل",
//       learnmore: "يتعلم أكثر",
//       founder: "التأسيس والتاريخ",
//       legacy: "تراث متعب بن عبد العزيز",
//       text: "تستخدم مؤسسة متعب علم الخير لتحقيق الخير على الإطلاق مزيد من التحسن في حياة الناس. نحن نوع جديد من مؤسسة؛ منفتح وحيوي وفضولي ومحترف وعامل طرق موضوعية تعتمد على البيانات لتقديم فائدة دائمة إلى الأبد المزيد من الناس.",
//       readmore: "اقرأ أكثر",
//       ourfocus: "تركيزنا",
//       activeprogams: "البرامج النشطة",
//       text2:
//         "يسلط هذا القسم الضوء على المساهمات الملموسة للمؤسسة. يمكن أن يشمل ذلك قصص المبادرات في المجتمع والتعليم والحصول على المياه النظيفة.",
//       readstories: "اقرأ قصصنا",
//       number7: "٧",
//       milliondonated: "تم التبرع بمليون",
//       number26: "٢٦",
//       schoolsbuilt: "المدارس بنيت",
//       number76: "٧٦",
//       millionwater: "مليون لتر من المياه النظيفة",
//       getinvolved: "شارك",
//       contribute: "يساهم",
//       career: "حياة مهنية",
//       connect: "يتصل",
//       founderslegacy: "إرث المؤسس",
//       ourjourney: "رحلتنا",
//       narrativetime: "رواية عصرنا",
//       humble: "بدايات متواضعة",
//       achievement: "الإنجاز / المبادرة",
//       founderhistory: "التأسيس والتاريخ",

//       legacyabout: "تراث متعب بن عبد العزيز",
//       readmoreabout: "اقرأ أكثر",
//       readmoreabout2: "اقرأ أكثر",

//       textactivefirst:
//         "تستخدم مؤسسة متعب علم الخير لتحقيق المزيد من التحسن في حياة الناس. نحن نوع جديد من الأساس؛ طرق مفتوحة وحيوية وفضولية ومهنية وموضوعية تشغيلية تعتمد على البيانات لتقديم فائدة دائمة لعدد أكبر من الأشخاص.",
//       readourstories: "اقرأ قصصنا",
//       textactivesecond:
//         "تستخدم مؤسسة متعب علم الخير لتحقيق المزيد من التحسن في حياة الناس. نحن نوع جديد من الأساس؛ طرق مفتوحة وحيوية وفضولية ومهنية وموضوعية تشغيلية تعتمد على البيانات لتقديم فائدة دائمة لعدد أكبر من الأشخاص.",
//       ourjourneyabout: "رحلتنا",
//       attributeandvalues: "السمات والقيم",
//       attributevalue1: "السمة/القيمة",
//       attributevalue2: "السمة/القيمة",
//       attributevalue3: "السمة/القيمة",
//       attributevalue4: "السمة/القيمة",
//     },
//   };

//   function storeSelectedLanguage(language) {
//     localStorage.setItem("selectedLanguage", language);
//   }

//   function retrieveSelectedLanguage() {
//     return localStorage.getItem("selectedLanguage") || "en";
//   }

//   function translatePage(language) {
//     storeSelectedLanguage(language);

//     for (var key in translations[language]) {
//       if (translations[language].hasOwnProperty(key)) {
//         var element = document.getElementById(key);
//         if (element) {
//           element.textContent = translations[language][key];
//         }
//       }
//     }

//     document.body.className = language;
//   }

//   // Update popover parent image based on selected language
//   function updatePopoverParentImage(language) {
//     var selectedImage = document.querySelector(".selected-image");
//     if (language === "en") {
//       selectedImage.src = "/assets/images/united-states-of-america (1).png";
//     } else if (language === "ar") {
//       selectedImage.src = "/assets/images/artwork.png";
//     }
//   }

//   var popoverParent = document.querySelector(".popover-parent");
//   var popoverLang = document.getElementById("popover-lang");
//   var arrowIcon = document.getElementById("arrow-icon");
//   var selectedLanguage = retrieveSelectedLanguage();

//   popoverParent.addEventListener("click", function (event) {
//     popoverLang.classList.toggle("show");
//     arrowIcon.classList.toggle("rotate");
//   });

//   // Close the popover when the user clicks outside of it
//   window.addEventListener("click", function (event) {
//     if (!popoverParent.contains(event.target)) {
//       popoverLang.classList.remove("show");
//       arrowIcon.classList.remove("rotate");
//     }
//   });

//   // Set selected popover when clicked
//   var popoverItems = document.querySelectorAll(".popover-hover");
//   popoverItems.forEach(function (item) {
//     item.addEventListener("click", function () {
//       popoverItems.forEach(function (item) {
//         item.classList.remove("selected");
//       });
//       this.classList.add("selected");
//       selectedLanguage = this.getAttribute("value");
//       updatePopoverParentImage(selectedLanguage);
//       translatePage(selectedLanguage);
//     });
//   });

//   // Update popover parent image with default selected language
//   updatePopoverParentImage(selectedLanguage);
//   translatePage(selectedLanguage);
// });
document.addEventListener("DOMContentLoaded", function () {
  var translations = {
    en: {
      about_us: "About",
      team: "Team",
      focus: "Focus",
      founderandhistory: "Founder and History",
      careers: "Careers",
      contact: "Contact",
      about_footer: "About",
      team_footer: "Team",
      focus_footer: "Focus",
      founderandhistory_footer: "Founder and History",
      careers_footer: "Careers",
      contact_footer: "Contact",
      harness: "Harness the science of Benevolence for a Better Tomorrow",
      learnmore: "Learn More",
      founder: "Foundery and History",
      legacy: "The legacy of Mutib Bin Abdulaziz",
      text: "The Mutib Foundation uses the Science of Benevolence to bring ever more improvement to peoples’ lives. We are a new kind of foundation; open, energetic, curious and professional, operating objective, data-driven ways of delivering evermore benefit to ever more people.",
      readmore: "Read More",
      ourfocus: "Our Focus",
      activeprogams: "Active Programs",
      text2:
        "This section highlights the foundation's tangible contributions. This can include stories of initiatives in community, education and access to clean water.",
      readstories: "Read Our Stories",
      number7: "07",
      milliondonated: "Million Donated",
      number26: "26",
      schoolsbuilt: "Schools Built",
      number76: "76",
      millionwater: "Million Water",
      getinvolved: "Get Involved",
      contribute: "Contribute",
      career: "Career",
      connect: "Connect",
      founderslegacy: "Founder’s Legacy",
      ourjourney: "Our Journey",
      narrativetime: "The Narative of our Time",
      humble: "Humble Beginnings",
      legacyabout: "The legacy of Mutib Bin Abdulaziz",
      readmoreabout: "Read More",
      readmoreabout2: "Read More",
      textactivefirst:
        "The Mutib Foundation uses the Science of Benevolence to bring ever more improvement to peoples’ lives. We are a new kind of foundation; open, energetic, curious and professional, operating objective, data-driven ways of delivering evermore benefit to ever more people.",
      readourstories: "Read Our Stories",
      textactivesecond:
        "The Mutib Foundation uses the Science of Benevolence to bring ever more improvement to peoples’ lives. We are a new kind of foundation; open, energetic, curious and professional, operating objective, data-driven ways of delivering evermore benefit to ever more people.",
      ourjourneyabout: "Our Journey",
      attributeandvalues: "Attributes & Values",
      attributevalue1: "Attribute/value",
      attributevalue2: "Attribute/value",
      attributvalue3: "Attribute/value",
      attributevalue4: "Attribute/value",
    },
    ar: {
      about_us: "عن",
      team: "فريق",
      focus: "ركز",
      founderandhistory: "المؤسس والتاريخ",
      careers: "وظائف",
      contact: "اتصال",
      about_footer: "عن",
      team_footer: "فريق",
      focus_footer: "ركز",
      founderandhistory_footer: "المؤسس والتاريخ",
      careers_footer: "وظائف",
      contact_footer: "اتصال",
      harness: "تسخير علم الإحسان من أجل غد أفضل",
      learnmore: "يتعلم أكثر",
      founder: "التأسيس والتاريخ",
      legacy: "تراث متعب بن عبد العزيز",
      text: "تستخدم مؤسسة متعب علم الخير لتحقيق الخير على الإطلاق مزيد من التحسن في حياة الناس. نحن نوع جديد من مؤسسة؛ منفتح وحيوي وفضولي ومحترف وعامل طرق موضوعية تعتمد على البيانات لتقديم فائدة دائمة إلى الأبد المزيد من الناس.",
      readmore: "اقرأ أكثر",
      ourfocus: "تركيزنا",
      activeprogams: "البرامج النشطة",
      text2:
        "يسلط هذا القسم الضوء على المساهمات الملموسة للمؤسسة. يمكن أن يشمل ذلك قصص المبادرات في المجتمع والتعليم والحصول على المياه النظيفة.",
      readstories: "اقرأ قصصنا",
      number7: "٧",
      milliondonated: "تم التبرع بمليون",
      number26: "٢٦",
      schoolsbuilt: "المدارس بنيت",
      number76: "٧٦",
      millionwater: "مليون لتر من المياه النظيفة",
      getinvolved: "شارك",
      contribute: "يساهم",
      career: "حياة مهنية",
      connect: "يتصل",
      founderslegacy: "إرث المؤسس",
      ourjourney: "رحلتنا",
      narrativetime: "رواية عصرنا",
      humble: "بدايات متواضعة",
      achievement: "الإنجاز / المبادرة",
      founderhistory: "التأسيس والتاريخ",

      legacyabout: "تراث متعب بن عبد العزيز",
      readmoreabout: "اقرأ أكثر",
      readmoreabout2: "اقرأ أكثر",

      textactivefirst:
        "تستخدم مؤسسة متعب علم الخير لتحقيق المزيد من التحسن في حياة الناس. نحن نوع جديد من الأساس؛ طرق مفتوحة وحيوية وفضولية ومهنية وموضوعية تشغيلية تعتمد على البيانات لتقديم فائدة دائمة لعدد أكبر من الأشخاص.",
      readourstories: "اقرأ قصصنا",
      textactivesecond:
        "تستخدم مؤسسة متعب علم الخير لتحقيق المزيد من التحسن في حياة الناس. نحن نوع جديد من الأساس؛ طرق مفتوحة وحيوية وفضولية ومهنية وموضوعية تشغيلية تعتمد على البيانات لتقديم فائدة دائمة لعدد أكبر من الأشخاص.",
      ourjourneyabout: "رحلتنا",
      attributeandvalues: "السمات والقيم",
      attributevalue1: "السمة/القيمة",
      attributevalue2: "السمة/القيمة",
      attributvalue3: "السمة/القيمة",
      attributevalue4: "السمة/القيمة",
    },
  };

  // Function to store the selected language in local storage
  function storeSelectedLanguage(language) {
    localStorage.setItem("selectedLanguage", language);
  }

  // Function to retrieve the selected language from local storage
  function retrieveSelectedLanguage() {
    return localStorage.getItem("selectedLanguage") || "en"; // Default to English if no language is selected
  }

  // Function to translate the page based on the selected language
  function translatePage(language) {
    storeSelectedLanguage(language);

    for (var key in translations[language]) {
      if (translations[language].hasOwnProperty(key)) {
        var element = document.getElementById(key);
        if (element) {
          element.textContent = translations[language][key];
        }
      }
    }

    document.body.className = language;
  }

  // Update popover parent image based on selected language
  function updatePopoverParentImage(language) {
    var selectedImage = document.querySelector(".selected-image");
    if (language === "en") {
      selectedImage.src = "/assets/images/united-states-of-america (1).png";
    } else if (language === "ar") {
      selectedImage.src = "/assets/images/artwork.png";
    }
  }

  var popoverParent = document.querySelector(".popover-parent");
  var popoverLang = document.getElementById("popover-lang");
  var arrowIcon = document.getElementById("arrow-icon");
  var selectedLanguage = retrieveSelectedLanguage();

  popoverParent.addEventListener("click", function (event) {
    popoverLang.classList.toggle("show");
    arrowIcon.classList.toggle("rotate");
  });

  // Close the popover when the user clicks outside of it
  window.addEventListener("click", function (event) {
    if (!popoverParent.contains(event.target)) {
      popoverLang.classList.remove("show");
      arrowIcon.classList.remove("rotate");
    }
  });

  // Set selected popover when clicked
  var popoverItems = document.querySelectorAll(".popover-hover");
  popoverItems.forEach(function (item) {
    item.addEventListener("click", function () {
      popoverItems.forEach(function (item) {
        item.classList.remove("selected");
      });
      this.classList.add("selected");
      selectedLanguage = this.getAttribute("value");
      updatePopoverParentImage(selectedLanguage);
      translatePage(selectedLanguage);
    });
  });

  // Update popover parent image with default selected language
  updatePopoverParentImage(selectedLanguage);
  translatePage(selectedLanguage);
});
