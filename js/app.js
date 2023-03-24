class Vrat {
  constructor() {
    this.data = {
      defaultFestivalSelection: "व्रत चुनें ",
      festivals : [' नवरात्र आरंभ',' चैती छठ',' महाष्टमी व्रत',' श्री राम नवमी',' कामदा एकादशी व्रत',' प्रदोष व्रत',' सत्तू संक्रांति',' चैत्र पूर्णिमा',' वरुथिनी एकादशी व्रत','अमावस्या','अक्षय तृतीया','मोहिनी एकादशी व्रत','बुद्ध पूर्णिमा','अचला एकादशी व्रत','सोमवती अमावस्या','वटसावित्री व्रत','श्री गंगा दशहरा','निर्जला एकादशी व्रत','पूर्णिमा','योगिनी एकादशी व्रत','रथयात्रा','श्री हरिशयनी एकादशी व्रत','सोम प्रदोष व्रत','गुरु पूर्णिमा','सोम प्रदोष व्रत','हरियाली अमावस्या','पुत्रदा एकादशी व्रत','श्रावण पूर्णिमा',' रक्षा बंधन',' संस्कृत दिवस','श्री कृष्ण जन्माष्टमी व्रत','जया एकादशी व्रत (गृहस्थ)','एकादशी व्रत (संन्यासी)','कुशोत्पाटिनी अमावस्या','हरितालिका व्रत (तीज)','श्री गणेश चतुर्थी व्रत','श्री ऋषि पंचमी व्रत','पद्मा एकादशी व्रत','अनंत चतुर्दशी व्रत','स्नान दान पूर्णिमा','पितृ पक्ष आरंभ (तर्पण)',' विश्वकर्मा पूजा ','जीवत्पुत्रिका व्रत (पारण पर दिन प्रातः)','इंदिरा एकादशी व्रत','पितृ विसर्जन',' महालया','शारदीय नवरात्र',' कलश स्थापन',' सप्तमी ',' प्रतिमा स्थापन',' महाष्टमी व्रत',' महानवमी',' विजय दशमी','नवरात्र व्रत (पारण प्रातः)','पापांकुशा एकादशी व्रत','शरद पूर्णिमा','योगिनी एकादशी व्रत','शनि प्रदोष व्रत',' धनतेरस',' धन्वन्तरि जयंती',' यम दीप','नरक चतुर्दशी',' पितृदीप','दीपावली','स्नान दान अमावस्या',' सूर्य ग्रहण',' अन्न कूट',' गोवर्धन पूजा',' भ्रातृ द्वितीया',' चित्रगुप्त पूजायमुनास्नान','सूर्य षष्ठी व्रत - सायं अर्घ्य',' सूर्य षष्ठी व्रत पारण',' प्रातः अर्घ्य','गोपाष्टमी','अक्षय नवमी','श्री हरि प्रबोधिनी एकादशी','वोत्थान',' तुलसी विवाह','कार्तिक पूर्णिमा (व्रत पूर्व दिन)','श्री गणेश चतुर्थी व्रत','उत्पन्ना एकादशी व्रत','मोक्षदा एकादशी व्रत',' गीता जयंती','स्नान दान पूर्णिमा','सफला एकादशी व्रत','मास शिवरात्रि व्रत','मकर संक्रांति','षट्तिला एकादशी व्रत','बसंत पंचमी',' अचला सप्तमी',' रथ सप्तमी','जया एकादशी व्रत',' माघी पूर्णिमा',' विजया एकादशी व्रत','महाशिवरात्रि व्रत','आमलकी एकादशी व्रत','व्रत की पूर्णिमा',' होलिका दाह','होलिकोत्सव (होली)','पाप मोचनि एकादशी व्रत'],
      months: [{
        "id": 1,
        "label": "चैत्र शुक्ल पक्ष",
        "date": "22 मार्च - 5 अप्रैल",
        "festivals": []
      }, {
        "id": 2,
        "label": "वैशाख कृष्ण पक्ष",
        "date": "6 अप्रैल - 20 अप्रैल",
        "festivals": []
      }, {
        "id": 3,
        "label": "वैशाख शुक्ल पक्ष",
        "date": "21 अप्रैल - 5 मई",
        "festivals": []
      }, {
        "id": 4,
        "label": "ज्येष्ठ कृष्ण पक्ष",
        "date": "6 मई - 19 मई",
        "festivals": []
      }, {
        "id": 5,
        "label": "ज्येष्ठ शुक्ल पक्ष",
        "date": "20 मई - 4 जून",
        "festivals": []
      }, {
        "id": 6,
        "label": "आषाढ़ कृष्ण पक्ष",
        "date": "5 जून - 18 जून",
        "festivals": []
      }, {
        "id": 7,
        "label": "आषाढ़ शुक्ल पक्ष",
        "date": "19 जून - 3 जुलाई",
        "festivals": []
      }, {
        "id": 8,
        "label": "श्रावण कृष्ण पक्ष",
        "date": "4 जुलाई - 17 जुलाई",
        "festivals": []
      }, {
        "id": 9,
        "label": "श्रावण शुक्ल पक्ष",
        "date": "18 जुलाई - 15 अगस्त",
        "festivals": []
      }, {
        "id": 10,
        "label": "भाद्र कृष्ण पक्ष",
        "date": "1 सितम्बर - 15 सितम्बर",
        "festivals": []
      }, {
        "id": 11,
        "label": "भाद्र शुक्ल पक्ष",
        "date": "16 सितम्बर - 29 सितम्बर",
        "festivals": []
      }, {
        "id": 12,
        "label": "आश्विन कृष्ण पक्ष",
        "date": "30 सितम्बर - 14 अक्टूबर",
        "festivals": []
      }, {
        "id": 13,
        "label": "आश्विन शुक्ल पक्ष",
        "date": "15 अक्टूबर - 28 अक्टूबर",
        "festivals": []
      }, {
        "id": 14,
        "label": "कार्तिक कृष्ण पक्ष",
        "date": "29 अक्टूबर - 13 नवम्बर",
        "festivals": []
      }, {
        "id": 15,
        "label": "कार्तिक शुक्ल पक्ष",
        "date": "14 नवम्बर - 27 नवम्बर",
        "festivals": []
      }, {
        "id": 16,
        "label": "मार्ग शीर्ष कृष्ण पक्ष",
        "date": "28 नवम्बर - 12 दिसम्बर",
        "festivals": []
      }, {
        "id": 17,
        "label": "मार्ग शीर्ष शुक्ल पक्ष",
        "date": "13 दिसम्बर - 26 दिसम्बर",
        "festivals": []
      }, {
        "id": 18,
        "label": "पौष कृष्ण पक्ष",
        "date": "27 दिसम्बर - 11 जनवरी",
        "festivals": []
      }, {
        "id": 19,
        "label": "पौष शुक्ल पक्ष",
        "date": "12 जनवरी - 25 जनवरी",
        "festivals": []
      }, {
        "id": 20,
        "label": "माघ कृष्ण पक्ष",
        "date": "26 जनवरी - 9 फरवरी",
        "festivals": []
      }, {
        "id": 21,
        "label": "माघ शुक्ल पक्ष",
        "date": "10 फरवरी - 24 फरवरी",
        "festivals": []
      }, {
        "id": 22,
        "label": "फ़ागुन कृष्ण पक्ष",
        "date": "25 फरवरी - 10 मार्च",
        "festivals": []
      }, {
        "id": 23,
        "label": "फ़ागुन शुक्ल पक्ष",
        "date": "11 मार्च - 25 मार्च",
        "festivals": []
      }, {
        "id": 24,
        "label": "चैत्र कृष्ण पक्ष",
        "date": "26 मार्च - 8 अप्रैल",
        "festivals": []
      }]
    }
    ;

    this.monthSelectionMenu = document.getElementById('month-selection');
    this.monthSelectionButton = document.getElementById('monthSelectionButton');
    this.vratSelectionMenu = document.getElementById('vrat-selection');
    this.vratSelectionButton = document.getElementById('vratSelectionButton');
    this.saveVratButton = document.getElementById('save-vrat');
    this.vratDisplayContainer = document.getElementById('vrat-display-container');
    this.vratDateInput = document.getElementById('vrat-date');
    this.selectedMonthTitle = document.getElementById('month-selected');

    this.render();
    this.bindEvents();
  }
  mainContent() {
    this.monthSelectionMenu.innerHTML = this.data.months.map(item => {
      return `<a class="dropdown-item" data-month-id="${item.id}" href="#">${item.label} - ${item.date}</a>`;
    }).join('');

    this.vratSelectionMenu.innerHTML = this.data.festivals.map(item => {
      return `<a class="dropdown-item" href="#">${item}</a>`;
    }).join('');
  }
  render() {
    this.mainContent();
  }
  getWeekDay(count) {
    const dayData = {
      0: "रविवार",
      1: "सोमवार",
      2: "मंगलवार",
      3: "बुधवार",
      4: "गुरुवार",
      5: "शुक्रवार",
      6: "शनिवार"
    }
    return dayData[count];
  }
  compare( a, b, key ) {
    if ( a.date < b.date ){
      return -1;
    }
    if ( a.date > b.date ){
      return 1;
    }
    return 0;
  }
  convertDate(dateValue) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(dateValue)
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/')
  }
  bindFestivalSelection() {
    const links = this.vratSelectionMenu.querySelectorAll('.dropdown-item');
    links.forEach(link => {
      link.addEventListener('click', (evt) => {
        evt.preventDefault();
        this.vratSelectionButton.innerText = evt.target.innerText;
      })
    }); 
    this.saveVratButton.addEventListener('click', () => {
      //const date = this.convertDate(this.vratDateInput.valueAsNumber);
      const date = this.vratDateInput.valueAsNumber;
      const festival = this.vratSelectionButton.innerText;
      if(this.monthSelectionButton.innerText.trim() === 'हिन्दू महीना चुनें') {
        alert('कृपया हिन्दू महीना चुनें')
      }
      if(isNaN(date)) {
        alert('कृपया तिथि चुनें')
      }
      if(festival.trim() === 'व्रत चुनें') {
        alert('कृपया व्रत चुनें')
      }
      if(!isNaN(date) && festival.trim() !== 'व्रत चुनें') {
        this.updateMonthFestivals(date, festival);
        this.vratSelectionButton.innerText = this.data.defaultFestivalSelection;
        this.vratDateInput.value = "";
      }
    })
  }
  bindMonthSelection() {
    const links = this.monthSelectionMenu.querySelectorAll('.dropdown-item');
    links.forEach(link => {
      link.addEventListener('click', (evt) => {
        evt.preventDefault();
        this.monthId = evt.target.getAttribute('data-month-id');
        this.monthSelectionButton.setAttribute('data-selected-month', evt.target.getAttribute('data-month-id'));
        this.monthSelectionButton.innerText = evt.target.innerText;
        //this.selectedMonthTitle.innerText = evt.target.innerText;
      })
    }); 
  }
  updateMonthFestivals(date, festival) {
    let selectedMonth = this.data.months.filter(month => month.id == this.monthId);
    let festivals = selectedMonth[0].festivals;
    let day = this.getWeekDay(new Date(date).getDay());
    festivals.push({'date':date , 'day': day, 'label': festival});
    festivals.sort(this.compare);
    this.updateDisplay();
  }
  updateDisplay() {
    this.vratDisplayContainer.innerHTML = this.data.months.map(month => {
      return `
      <div class="col-xl-6 pb-2">
        <strong id="month-selected" class="pb-2 dark-red">${month.label} - ${month.date}</strong>
        ${
          month.festivals.map(festival => {
            return ` <div class="pb-1 pt-1"><strong>${this.convertDate(festival.date)} (${festival.day}) - ${festival.label}</strong></div>`
          }).join('')
        }
      </div>
      `;
    }).join('');
  }
  print() {
    let mainContainer = document.querySelector('.main-content');
    let vratBody = document.querySelector(".vrat-body");
    let heading = document.createElement('h3');
    heading.innerText = 'Save below image by right clicking';
    html2canvas(vratBody).then(canvas => {
      mainContainer.insertAdjacentElement('beforeend', heading);
      mainContainer.insertAdjacentElement('beforeend', canvas);
    });
  }
  bindEvents() {
    this.bindFestivalSelection();
    this.bindMonthSelection();
    document.getElementById('print-vrat').addEventListener('click', () => {
      this.print();
    })
  }
}

new Vrat();