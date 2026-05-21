// src/data/quizData.ts
import { QuizQuestion } from '../types';

// Paste your full array here — keep the same shape
const quizData: QuizQuestion[] = 
[
    {
        "question": "According to the Survey of Pakistan 2020 figures, what is the length of the Pak-Afghanistan border (Durand Line)?",
        "options": [
            "2,252 km",
            "2,611 km",
            "2,640 km",
            "2,912 km"
        ],
        "correctIndex": 0,
        "rationale": "The source specifies that while Wikipedia quotes 2,252 km, the 'Survey of Pakistan 2020' figure for the Durand Line is 2,611 km [3, 4]."
    },
    {
        "question": "On which exact date was the Durand Line agreement signed by Sir Mortimer Durand?",
        "options": [
            "14 August 1947",
            "12 November 1893",
            "2 March 1963",
            "17 August 1947"
        ],
        "correctIndex": 1,
        "rationale": "The table for Pakistan's borders explicitly states the Durand Line was demarcated on 12 Nov 1893 [3]."
    },
    {
        "question": "The 'Radcliffe Line' separating India and Pakistan was drawn on which date in 1947?",
        "options": [
            "14 August",
            "15 August",
            "17 August",
            "19 August"
        ],
        "correctIndex": 2,
        "rationale": "The text identifies the Radcliffe Line as being drawn on 17 Aug 1947 by Sir Cyril Radcliffe [3, 5, 6]."
    },
    {
        "question": "What is the specific width of the Wakhan Corridor, the strip of Afghanistan territory that separates Pakistan from Tajikistan?",
        "options": [
            "~10 km",
            "~16 km",
            "~24 km",
            "~96 km"
        ],
        "correctIndex": 1,
        "rationale": "The geography section describes the Wakhan Corridor as a strip approximately 16 km wide [3]."
    },
    {
        "question": "The 'Sir Creek' dispute between Sindh and Indian Gujarat involves an estuary of what length?",
        "options": [
            "16 km",
            "523 km",
            "96 km",
            "1,046 km"
        ],
        "correctIndex": 2,
        "rationale": "The document defines Sir Creek as a 96-km disputed estuary [6]."
    },
    {
        "question": "Which mountain pass is identified as the highest in Pakistan, reaching an elevation of 4,693 meters?",
        "options": [
            "Khyber Pass",
            "Khunjerab Pass",
            "Kilik Pass",
            "Mustagh Pass"
        ],
        "correctIndex": 1,
        "rationale": "The mountain passes table lists Khunjerab Pass as the highest at 4,693 m, connecting Hunza-Nagar to China [5, 6]."
    },
    {
        "question": "The Bolan Pass, situated at an elevation of 1,793 meters, connects which two locations?",
        "options": [
            "Peshawar and Landi Kotal",
            "Sibi/Jacobabad and Quetta",
            "Chitral and Dir",
            "KP and Gilgit-Baltistan"
        ],
        "correctIndex": 1,
        "rationale": "The mountain passes table confirms the Bolan Pass connects Sibi/Jacobabad to Quetta within the Toba Kakar range [7]."
    },
    {
        "question": "Which pass is famously referred to as the 'Roof of the World' and serves as the site for a major Polo Festival?",
        "options": [
            "Lowari Pass",
            "Shandur Pass",
            "Babusar Pass",
            "Broghil Pass"
        ],
        "correctIndex": 1,
        "rationale": "The source states that Shandur Pass (3,700 m) is known as the 'Roof of the World' and connects Chitral to Ghizer [7]."
    },
    {
        "question": "What is the official length of the Indus River according to the 'Rivers of Pakistan' section?",
        "options": [
            "2,880 km",
            "3,180 km",
            "1,450 km",
            "3,224 km"
        ],
        "correctIndex": 1,
        "rationale": "The text lists the Indus (National River) as 3,180 km long, though some sources may quote 2,880 km [5, 8]."
    },
    {
        "question": "The Chenab River originates at which location in Himachal Pradesh?",
        "options": [
            "Verinag spring",
            "Bara Lacha Pass",
            "Rohtang Pass",
            "Beas Kund"
        ],
        "correctIndex": 1,
        "rationale": "The rivers table identifies Bara Lacha Pass (Lahaul-Spiti) as the origin where the Chandra and Bhaga rivers meet to form the Chenab [8]."
    },
    {
        "question": "Under the Indus Waters Treaty of 1960, which three western rivers were allocated to Pakistan?",
        "options": [
            "Ravi, Beas, Sutlej",
            "Indus, Jhelum, Chenab",
            "Indus, Kabul, Swat",
            "Jhelum, Chenab, Ravi"
        ],
        "correctIndex": 1,
        "rationale": "The Indus Waters Treaty (1960) allocated the three western rivers (Indus, Jhelum, Chenab) to Pakistan [9]."
    },
    {
        "question": "What is the confluence point where all five Punjab rivers meet before joining the Indus at Mithankot?",
        "options": [
            "Trimmu",
            "Rangpur",
            "Panjnad",
            "Uch Sharif"
        ],
        "correctIndex": 2,
        "rationale": "The text defines Panjnad as the confluence of all 5 Punjab rivers which then joins the Indus at Mithankot [8, 10]."
    },
    {
        "question": "Which desert is identified as the 9th largest subtropical desert in the world?",
        "options": [
            "Thal Desert",
            "Cholistan Desert",
            "Thar Desert",
            "Kharan Desert"
        ],
        "correctIndex": 2,
        "rationale": "The Thar Desert in Sindh is described as the largest in Pakistan and the 9th largest subtropical desert globally [10]."
    },
    {
        "question": "The Chagai-II nuclear test, conducted on 30 May 1998, took place in which desert?",
        "options": [
            "Thar",
            "Thal",
            "Kharan",
            "Katpana"
        ],
        "correctIndex": 2,
        "rationale": "The document specifies that the Kharan desert in Balochistan was the site of the Chagai-II nuclear test [11, 12]."
    },
    {
        "question": "What is the significance of Manchar Lake located in the Dadu/Jamshoro districts of Sindh?",
        "options": [
            "Highest alpine lake",
            "Bird sanctuary in Thatta",
            "Largest natural freshwater lake in Pakistan & South Asia",
            "Primary water supply for Skardu"
        ],
        "correctIndex": 2,
        "rationale": "The lakes table identifies Manchar as the largest natural freshwater lake in Pakistan and South Asia, covering 350–520 km² [5, 13]."
    },
    {
        "question": "Which alpine lake is described as 'tear-shaped' and is located above Lake Saif-ul-Malook?",
        "options": [
            "Rush Lake",
            "Ansoo Lake",
            "Sheosar Lake",
            "Karambar Lake"
        ],
        "correctIndex": 1,
        "rationale": "The source identifies Ansoo Lake as a 'tear-shaped' alpine lake situated above Lake Saif-ul-Malook [14]."
    },
    {
        "question": "The Sukkur Barrage (Lloyd Barrage), completed in 1932, irrigates how many million acres of land?",
        "options": [
            "3.52 million",
            "7.63 million",
            "10.6 million",
            "875,000"
        ],
        "correctIndex": 1,
        "rationale": "According to the barrages section, Sukkur Barrage irrigates 7.63 million acres via 7 canals [14]."
    },
    {
        "question": "Which is the longest canal in Pakistan?",
        "options": [
            "Rohri Canal",
            "Nara Canal",
            "Kalri-Baghar Feeder",
            "Upper Chenab Canal"
        ],
        "correctIndex": 1,
        "rationale": "The text explicitly mentions that the 'Nara Canal is the longest canal in Pakistan' [14]."
    },
    {
        "question": "How many total barrages are located in the province of Sindh on the Indus River?",
        "options": [
            "2",
            "3",
            "5",
            "7"
        ],
        "correctIndex": 1,
        "rationale": "The past paper snapshot and the barrage section both confirm Sindh has 3 barrages: Guddu, Sukkur, and Kotri [15-17]."
    },
    {
        "question": "According to Britannica (updated March 2026), which dam is the largest earth-and-rock-fill dam in the world by volume?",
        "options": [
            "Mangla Dam",
            "Warsak Dam",
            "Tarbela Dam",
            "Diamer-Bhasha Dam"
        ],
        "correctIndex": 2,
        "rationale": "The text quotes Britannica (March 2026) stating Tarbela Dam is the largest earth-and-rock-fill dam in the world by volume [16, 18]."
    },
    {
        "question": "Islamabad has served as the capital of Pakistan since which exact date?",
        "options": [
            "14 August 1947",
            "23 March 1956",
            "14 August 1967",
            "1 January 1960"
        ],
        "correctIndex": 2,
        "rationale": "The source states Islamabad has been the capital since 14 Aug 1967; prior capitals were Karachi and Rawalpindi [18]."
    },
    {
        "question": "The height of Mt. Everest was jointly declared as 8,848.86 meters by China and Nepal in which year?",
        "options": [
            "1953",
            "1999",
            "2020",
            "2024"
        ],
        "correctIndex": 2,
        "rationale": "The world geography highlights note that the joint survey height of 8,848.86 m was announced on 8 December 2020 [19, 20]."
    },
    {
        "question": "Who was appointed as Pakistan's first-ever Chief of Defence Forces (CDF) on 4 December 2025?",
        "options": [
            "General Raheel Sharif",
            "Field Marshal Syed Asim Munir",
            "General Sahir Shamshad Mirza",
            "General Qamar Javed Bajwa"
        ],
        "correctIndex": 1,
        "rationale": "The updated political setup section confirms Field Marshal Syed Asim Munir was appointed as the country's first CDF on 4 December 2025 [21, 22]."
    },
    {
        "question": "On which date was Syed Asim Munir promoted to the rank of Field Marshal?",
        "options": [
            "4 December 2025",
            "20 May 2025",
            "10 March 2024",
            "13 March 2026"
        ],
        "correctIndex": 1,
        "rationale": "The document notes he was promoted to Field Marshal on 20 May 2025 following Operation Bunyan-um-Marsoos [23]."
    },
    {
        "question": "What is Pakistan's total population according to the 7th Population & Housing Census (CCI-approved 5 August 2023)?",
        "options": [
            "207.7 million",
            "220.9 million",
            "241.49 million",
            "250.1 million"
        ],
        "correctIndex": 2,
        "rationale": "The PBS 7th Census figures state Pakistan's population has increased to 241.49 million [23, 24]."
    },
    {
        "question": "In what month and year was Jasmine (Chambeli) officially adopted as the National Flower of Pakistan?",
        "options": [
            "August 1947",
            "March 1956",
            "July 1961",
            "September 1948"
        ],
        "correctIndex": 2,
        "rationale": "The National Symbols table lists Jasmine as adopted in July 1961 [25]."
    },
    {
        "question": "Which article of the 1973 Constitution designates Urdu as the National Language of Pakistan?",
        "options": [
            "Article 2",
            "Article 19",
            "Article 25-A",
            "Article 251"
        ],
        "correctIndex": 3,
        "rationale": "The symbols section notes Urdu's status is under Article 251 of the 1973 Constitution [26]."
    },
    {
        "question": "Which animal is designated as the 'National Predator' of Pakistan?",
        "options": [
            "Markhor",
            "Snow Leopard",
            "Indus River Dolphin",
            "Mugger Crocodile"
        ],
        "correctIndex": 1,
        "rationale": "The National Symbols list identifies the Snow Leopard as the National Predator [27]."
    },
    {
        "question": "World Health Day is celebrated annually on 7 April to commemorate the founding of the WHO in which year?",
        "options": [
            "1945",
            "1948",
            "1950",
            "1960"
        ],
        "correctIndex": 1,
        "rationale": "The international days section states World Health Day is 7 April and that WHO was founded in 1948 [28, 29]."
    },
    {
        "question": "Which UN agency is identified as the oldest, having been founded in 1919?",
        "options": [
            "ITU",
            "ILO",
            "UNESCO",
            "FAO"
        ],
        "correctIndex": 1,
        "rationale": "The table for International Organizations lists ILO (1919) as the 'Oldest UN agency' [29]."
    },
    {
        "question": "Who is the current (9th) Secretary-General of the United Nations serving since 2017?",
        "options": [
            "Trygve Lie",
            "U Thant",
            "Antonio Guterres",
            "Ahmed Aboul Gheit"
        ],
        "correctIndex": 2,
        "rationale": "The text lists Antonio Guterres as the 9th SG since 2017 [30]."
    },
    {
        "question": "The Organization of Islamic Cooperation (OIC) was founded in 1969; in which city did its first meeting take place?",
        "options": [
            "Jeddah",
            "Rabat",
            "Cairo",
            "Dhaka"
        ],
        "correctIndex": 1,
        "rationale": "The document specifies OIC was founded on 25 Sep 1969 in Rabat [29]."
    },
    {
        "question": "In which year was the All-India Muslim League founded in Dhaka?",
        "options": [
            "1885",
            "1906",
            "1909",
            "1916"
        ],
        "correctIndex": 1,
        "rationale": "The Pakistan Movement milestones state the Muslim League was founded at Dhaka on 30 Dec 1906 [31]."
    },
    {
        "question": "Who moved the 'Lahore Resolution' (Pakistan Resolution) on 23 March 1940?",
        "options": [
            "Quaid-e-Azam",
            "Allama Iqbal",
            "A.K. Fazl-ul-Huq",
            "Chaudhry Rahmat Ali"
        ],
        "correctIndex": 2,
        "rationale": "The source notes the 1940 resolution was moved by A.K. Fazl-ul-Huq (CM of Bengal) [32]."
    },
    {
        "question": "How many articles and schedules were included in the first Constitution of Pakistan (1956)?",
        "options": [
            "234 articles, 6 schedules",
            "250 articles, 5 schedules",
            "280 articles, 12 schedules",
            "336 articles, 6 schedules"
        ],
        "correctIndex": 0,
        "rationale": "The comparison table of constitutions shows the 1956 Constitution had 234 articles and 6 schedules [33]."
    },
    {
        "question": "Under the 1962 Constitution, what was the official form of government?",
        "options": [
            "Parliamentary",
            "Presidential",
            "Monarchy",
            "Theocracy"
        ],
        "correctIndex": 1,
        "rationale": "The constitutions table lists 'Presidential' as the government form for the 1962 Constitution promulgated by Ayub Khan [33]."
    },
    {
        "question": "How many general seats are there in the current National Assembly of Pakistan?",
        "options": [
            "266",
            "280",
            "336",
            "60"
        ],
        "correctIndex": 0,
        "rationale": "The source breaks down the 336 NA seats as 266 general, 60 women, and 10 minorities [34]."
    },
    {
        "question": "Which article of the 1973 Constitution deals with 'treason'?",
        "options": [
            "Article 2",
            "Article 6",
            "Article 19",
            "Article 25-A"
        ],
        "correctIndex": 1,
        "rationale": "The document explicitly lists 'Article 6: treason' [35]."
    },
    {
        "question": "Who was the first Governor-General of Pakistan, sworn in on 15 August 1947?",
        "options": [
            "Liaquat Ali Khan",
            "Quaid-e-Azam M.A. Jinnah",
            "Lord Mountbatten",
            "Khawaja Nazimuddin"
        ],
        "correctIndex": 1,
        "rationale": "The text states Quaid-e-Azam was sworn in as the 1st Governor-General on 15 Aug [33, 35]."
    },
    {
        "question": "The Tashkent Declaration, which ended the 1965 war, was signed on which date?",
        "options": [
            "6 September 1965",
            "10 January 1966",
            "2 July 1972",
            "14 August 1973"
        ],
        "correctIndex": 1,
        "rationale": "The treaties section lists the Tashkent Declaration date as 10 Jan 1966 [36]."
    },
    {
        "question": "Vitamin A is chemically known as:",
        "options": [
            "Thiamine",
            "Retinol",
            "Riboflavin",
            "Niacin"
        ],
        "correctIndex": 1,
        "rationale": "The vitamins table lists 'Retinol' as the chemical name for Vitamin A [12]."
    },
    {
        "question": "A deficiency in Vitamin B1 (Thiamine) primarily causes which disease?",
        "options": [
            "Night blindness",
            "Scurvy",
            "Beri-beri",
            "Pellagra"
        ],
        "correctIndex": 2,
        "rationale": "The vitamins table correlates Vitamin B1 deficiency with Beri-beri and Wernicke-Korsakoff [12]."
    },
    {
        "question": "Which vitamin is synthesized in the skin via sunlight and has 'Calcitriol' as its active form?",
        "options": [
            "Vitamin A",
            "Vitamin C",
            "Vitamin D",
            "Vitamin K"
        ],
        "correctIndex": 2,
        "rationale": "The source mentions Vitamin D is synthesized via sunlight and its active form is Calcitriol [37, 38]."
    },
    {
        "question": "What is the smallest bone in the human body?",
        "options": [
            "Femur",
            "Stapes",
            "Humerus",
            "Fibula"
        ],
        "correctIndex": 1,
        "rationale": "The human body basics section lists the 'Stapes (ear)' as the smallest bone [38]."
    },
    {
        "question": "What is the weight of an average human brain as per the study guide?",
        "options": [
            "~1.0 kg",
            "~1.4 kg",
            "~2.0 kg",
            "~0.8 kg"
        ],
        "correctIndex": 1,
        "rationale": "The text states the brain weight is approximately 1.4 kg [39]."
    },
    {
        "question": "Sound travels fastest in which medium?",
        "options": [
            "Gases",
            "Liquids",
            "Solids",
            "Vacuum"
        ],
        "correctIndex": 2,
        "rationale": "Quick Science Facts state that sound travels fastest in solids and slowest in gases [40]."
    },
    {
        "question": "The brown color of rust is chemically identified as:",
        "options": [
            "Sodium azide",
            "Iron oxide",
            "Carbon dioxide",
            "Magnesium sulfate"
        ],
        "correctIndex": 1,
        "rationale": "The source identifies rust as Iron oxide (Fe2O3·xH2O) [40]."
    },
    {
        "question": "What is the synonym for the vocabulary word 'Imperceptible'?",
        "options": [
            "Obvious",
            "Subtle",
            "Candid",
            "Pedantic"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table and past paper keys list 'Subtle' as the synonym for 'Imperceptible' [41, 42]."
    },
    {
        "question": "The idiom 'To smell a rat' means:",
        "options": [
            "To be very busy",
            "To suspect that something is wrong",
            "To do the right thing",
            "To be an unknown competitor"
        ],
        "correctIndex": 1,
        "rationale": "The idioms section defines 'Smell a rat' as suspecting something is wrong [41, 43]."
    },
    {
        "question": "What is the one-word substitution for 'a style displaying knowledge'?",
        "options": [
            "Reticent",
            "Pedantic",
            "Soporific",
            "Posthumous"
        ],
        "correctIndex": 1,
        "rationale": "The English section defines 'Pedantic' as a style displaying knowledge [41, 44]."
    },
    {
        "question": "Total number of Surahs and Rukus in the Holy Quran are:",
        "options": [
            "114 Surahs, 558 Rukus",
            "30 Surahs, 666 Rukus",
            "114 Surahs, 6,236 Rukus",
            "86 Surahs, 28 Rukus"
        ],
        "correctIndex": 0,
        "rationale": "The Quran section lists 114 Surahs and 558 Rukus [45]."
    },
    {
        "question": "Which Surah of the Holy Quran does not begin with Bismillah?",
        "options": [
            "Al-Baqarah",
            "At-Taubah",
            "An-Naml",
            "Al-Nasr"
        ],
        "correctIndex": 1,
        "rationale": "The text identifies Surah At-Taubah (9th) as the Surah without Bismillah [45]."
    },
    {
        "question": "The 'Battle of Trench' (Khandaq) was fought in which Hijri year?",
        "options": [
            "2 AH",
            "3 AH",
            "5 AH",
            "8 AH"
        ],
        "correctIndex": 2,
        "rationale": "The Battles (Ghazwat) section lists Khandaq / Ahzab as 5 AH/627 [46]."
    },
    {
        "question": "Which companion of the Prophet suggested digging a trench during the Battle of Khandaq?",
        "options": [
            "Hazrat Abu Bakr",
            "Hazrat Umar",
            "Hazrat Salman Farsi",
            "Hazrat Ali"
        ],
        "correctIndex": 2,
        "rationale": "The source notes the trench was suggested by Salman Farsi (RA) [46]."
    },
    {
        "question": "Who is known as the 'Father of the Internet'?",
        "options": [
            "Charles Babbage",
            "Vint Cerf",
            "Tim Berners-Lee",
            "Bill Gates"
        ],
        "correctIndex": 1,
        "rationale": "The IT section and past paper snapshots identify Vint Cerf as the Father of the Internet [15, 47, 48]."
    },
    {
        "question": "In computer generations, what technology was utilized in the first generation?",
        "options": [
            "Transistors",
            "Integrated Circuits",
            "Vacuum tubes",
            "Microprocessors"
        ],
        "correctIndex": 2,
        "rationale": "The Computer Generations section lists 1st generation as using Vacuum tubes [48]."
    },
    {
        "question": "One Kilobyte (KB) is equal to how many bytes?",
        "options": [
            "1,000 bytes",
            "1,024 bytes",
            "8 bytes",
            "1,024 bits"
        ],
        "correctIndex": 1,
        "rationale": "The Memory units section specifies 1 KB = 1,024 bytes [49]."
    },
    {
        "question": "In MS Office, which shortcut key is used for 'Spelling & Grammar check'?",
        "options": [
            "F2",
            "F5",
            "F7",
            "F12"
        ],
        "correctIndex": 2,
        "rationale": "The shortcuts section lists F7 as the key for Spelling & Grammar check [49]."
    },
    {
        "question": "Who was sworn in as the new Governor of Sindh on 13 March 2026?",
        "options": [
            "Kamran Tessori",
            "Nehal Hashmi",
            "Syed Murad Ali Shah",
            "Zafar Ahmed Rajput"
        ],
        "correctIndex": 1,
        "rationale": "The guide notes Nehal Hashmi was sworn in as Governor of Sindh on 13 March 2026, replacing Kamran Tessori [24, 50]."
    },
    {
        "question": "What is the highest peak in the province of Sindh, located in the Kirthar Range?",
        "options": [
            "Gorakh Hill",
            "K2",
            "Nanga Parbat",
            "Tirich Mir"
        ],
        "correctIndex": 0,
        "rationale": "The Sindh-specific GK section identifies Gorakh Hill (~1,734 m) as the highest peak of Sindh [17]."
    },
    {
        "question": "Which institution did the Quaid-e-Azam study at, which was founded in 1885 by Hassan Ali Effendi?",
        "options": [
            "Aligarh College",
            "Sindh Madrasatul Islam",
            "Islamia College Peshawar",
            "MAO College"
        ],
        "correctIndex": 1,
        "rationale": "The document states Sindh Madrasatul Islam was founded in 1885 and that Quaid-e-Azam studied there [17]."
    },
    {
        "question": "According to the past paper snapshot, who is the author of 'Das Kapital'?",
        "options": [
            "Stanley Wolpert",
            "Karl Marx",
            "Richard Nixon",
            "Ahmed Aboul Gheit"
        ],
        "correctIndex": 1,
        "rationale": "The very first question of the 27 February 2024 paper reproduction identifies Karl Marx as the author of 'Das Kapital' [15, 51]."
    },
    {
        "question": "In which year was the first indigenous Pakistani aircraft, JF-17 Thunder, mentioned in the past papers?",
        "options": [
            "1947",
            "1956",
            "1969",
            "Not specified by year, but identified as first indigenous aircraft"
        ],
        "correctIndex": 3,
        "rationale": "Question 13 of the past paper identifies JF-17 Thunder as the 'First Pakistani indigenous aircraft' [15]."
    },
    {
        "question": "The Asian Development Bank (ADB) is headquartered in which city?",
        "options": [
            "Geneva",
            "Manila",
            "Washington, D.C.",
            "Kathmandu"
        ],
        "correctIndex": 1,
        "rationale": "Both the past paper snapshot (Q21) and the organization table list Manila, Philippines as the HQ [29, 47]."
    },
    {
        "question": "A substance existing between its melting point and boiling point is in what state?",
        "options": [
            "Solid",
            "Liquid",
            "Gas",
            "Plasma"
        ],
        "correctIndex": 1,
        "rationale": "Past paper Q28 notes that between melting and boiling points, a substance is 'Liquid' (flagging the paper key 'Gas' as incorrect) [41, 52]."
    },
    {
        "question": "What is the antonym of the word 'Defiance'?",
        "options": [
            "Rebellion",
            "Disobedience",
            "Obedience",
            "Yield"
        ],
        "correctIndex": 2,
        "rationale": "The vocabulary table and past paper list 'Obedience' as the antonym for 'Defiance' [41, 42]."
    },
    {
        "question": "Which line demarcated in 1871 separates Pakistan and Iran?",
        "options": [
            "Durand Line",
            "Radcliffe Line",
            "Goldsmid Line",
            "Sino-Pak Frontier"
        ],
        "correctIndex": 2,
        "rationale": "The border table identifies the Goldsmid Line (1871) as the line for Iran [3]."
    },
    {
        "question": "The Khyber Pass connects Peshawar/Landi Kotal to which country?",
        "options": [
            "China",
            "India",
            "Afghanistan",
            "Iran"
        ],
        "correctIndex": 2,
        "rationale": "The mountain passes table lists the Khyber Pass as connecting to Afghanistan (Silk Road) [7]."
    },
    {
        "question": "Which river is known as the 'National River' of Pakistan?",
        "options": [
            "Jhelum",
            "Chenab",
            "Indus",
            "Ravi"
        ],
        "correctIndex": 2,
        "rationale": "The rivers section and national symbols table both list the Indus as the national river [8, 26]."
    },
    {
        "question": "The Sutlej River originates near which lake in Tibet?",
        "options": [
            "Mansarovar",
            "Rakshastal",
            "Saif-ul-Malook",
            "Manchar"
        ],
        "correctIndex": 1,
        "rationale": "The rivers table identifies 'Rakshastal Lake near Mansarovar, Tibet' as the origin of the Sutlej [9]."
    },
    {
        "question": "What is the name of the national aquatic animal of Pakistan, which is an endangered freshwater dolphin?",
        "options": [
            "Mahseer",
            "Indus Dolphin (Bhulan)",
            "Mugger Crocodile",
            "Snow Leopard"
        ],
        "correctIndex": 1,
        "rationale": "The document identifies the Indus Dolphin (Bhulan) as the national aquatic animal/mammal [10, 27]."
    },
    {
        "question": "Which desert is located in the Bahawalpur region of Punjab and is the site of the Derawar Fort?",
        "options": [
            "Thar",
            "Thal",
            "Cholistan",
            "Kharan"
        ],
        "correctIndex": 2,
        "rationale": "The desert section identifies Cholistan (also known as Rohi) as the site of Derawar Fort [10]."
    },
    {
        "question": "Pakistan's cold desert, Katpana, is located in which region?",
        "options": [
            "Sindh",
            "Punjab",
            "Balochistan",
            "Skardu, Gilgit-Baltistan"
        ],
        "correctIndex": 3,
        "rationale": "The desert section identifies Katpana (Skardu, GB) as Pakistan's cold desert [11]."
    },
    {
        "question": "Which lake is the primary water supply source for Karachi and is designated as a Ramsar site?",
        "options": [
            "Manchar Lake",
            "Keenjhar / Kalri Lake",
            "Haleji Lake",
            "Hanna Lake"
        ],
        "correctIndex": 1,
        "rationale": "The lakes table identifies Keenjhar / Kalri Lake as the Karachi water supply and a Ramsar site [13]."
    },
    {
        "question": "What is the elevation of Rush Lake, one of the world's highest lakes, located in Nagar, GB?",
        "options": [
            "3,224 m",
            "4,142 m",
            "4,694 m",
            "4,827 m"
        ],
        "correctIndex": 2,
        "rationale": "The lakes table lists Rush Lake at approximately 4,694 m [13]."
    },
    {
        "question": "Which barrage is the oldest of all, built in 1892 on the Chenab River?",
        "options": [
            "Sukkur Barrage",
            "Guddu Barrage",
            "Khanki Barrage",
            "Kotri Barrage"
        ],
        "correctIndex": 2,
        "rationale": "The barrage section notes Khanki Barrage (1892) is the oldest of all [16]."
    },
    {
        "question": "The Guddu Barrage on the Indus River was completed in which year?",
        "options": [
            "1932",
            "1962",
            "1946",
            "1958"
        ],
        "correctIndex": 1,
        "rationale": "The text states Guddu Barrage was completed in 1962 [14]."
    },
    {
        "question": "What is the capacity of the Kotri Barrage, which feeds the Kalri-Baghar Feeder?",
        "options": [
            "875,000 cusecs",
            "1.2 million cusecs",
            "500,000 cusecs",
            "10 million cusecs"
        ],
        "correctIndex": 0,
        "rationale": "The source lists the capacity of Kotri Barrage as ~875,000 cusecs [16]."
    },
    {
        "question": "Which US President is noted in the SPSC past paper for having resigned from office?",
        "options": [
            "John F. Kennedy",
            "Richard Nixon",
            "Ronald Reagan",
            "Bill Clinton"
        ],
        "correctIndex": 1,
        "rationale": "Past paper Q2 identifies Richard Nixon as the US president who resigned [15, 51]."
    },
    {
        "question": "Which country boycotted the G20 meeting held in India (specifically the Kashmir meeting)?",
        "options": [
            "China",
            "Turkey",
            "Pakistan",
            "Saudi Arabia"
        ],
        "correctIndex": 2,
        "rationale": "Past paper Q10 and the SCO/G20 section both note Pakistan boycotted the G20 meeting in India [15, 53]."
    },
    {
        "question": "The 1965 war between Pakistan and India officially ended with which pact/declaration?",
        "options": [
            "Simla Agreement",
            "Tashkent Declaration",
            "Lahore Pact",
            "Karachi Agreement"
        ],
        "correctIndex": 1,
        "rationale": "The guide identifies the Tashkent Declaration (1966) as the correct end to the 1965 war, correcting paper keys that might show 'Lahore Pact' [15, 36]."
    },
    {
        "question": "How many world time zones are there according to the study guide?",
        "options": [
            "12",
            "24",
            "48",
            "60"
        ],
        "correctIndex": 1,
        "rationale": "The study guide and past paper Q19 both state there are 24 time zones [19, 47]."
    },
    {
        "question": "Which continent is identified as the driest and windiest in the world?",
        "options": [
            "Africa",
            "Asia",
            "Antarctica",
            "Australia"
        ],
        "correctIndex": 2,
        "rationale": "The geography highlights and past paper Q26 state Antarctica is the driest and windiest [19, 47]."
    },
    {
        "question": "Who was the first Secretary-General of the United Nations (1946–52)?",
        "options": [
            "U Thant",
            "Trygve Lie",
            "Dag Hammarskjöld",
            "Kurt Waldheim"
        ],
        "correctIndex": 1,
        "rationale": "The guide corrects past paper errors to state Trygve Lie of Norway was the 1st UN SG [41, 47]."
    },
    {
        "question": "The AF Asian Cup 2024 was won by which country?",
        "options": [
            "Jordan",
            "Qatar",
            "Japan",
            "South Korea"
        ],
        "correctIndex": 1,
        "rationale": "Past paper Q29 identifies Qatar as the winner of the AFC Asian Cup 2024 [41]."
    },
    {
        "question": "What does it mean to be 'Reticent'?",
        "options": [
            "One who speaks too much",
            "One who speaks little",
            "One who displays knowledge",
            "One who suspects something"
        ],
        "correctIndex": 1,
        "rationale": "The English vocabulary and substitution sections define 'Reticent' as one who speaks less or is reserved [41, 43, 44]."
    },
    {
        "question": "Pakistan became an Islamic Republic in which year?",
        "options": [
            "1947",
            "1956",
            "1962",
            "1973"
        ],
        "correctIndex": 1,
        "rationale": "The past paper Q12 and general overview confirm Pakistan became an Islamic Republic in 1956 [15, 25]."
    },
    {
        "question": "What is the synonym of the word 'Embezzle'?",
        "options": [
            "Reimburse",
            "Yield",
            "Misappropriate",
            "Heal"
        ],
        "correctIndex": 2,
        "rationale": "The vocabulary table lists 'Misappropriate' as the synonym for 'Embezzle' [41, 42]."
    },
    {
        "question": "Who was the President of Pakistan as of 10 March 2024?",
        "options": [
            "Arif Alvi",
            "Asif Ali Zardari",
            "Shehbaz Sharif",
            "Murad Ali Shah"
        ],
        "correctIndex": 1,
        "rationale": "The guide lists Asif Ali Zardari as President since 10 Mar 2024 [21]."
    },
    {
        "question": "The first capital of Pakistan was Karachi; which city served as the capital from 1959–67?",
        "options": [
            "Lahore",
            "Peshawar",
            "Rawalpindi",
            "Islamabad"
        ],
        "correctIndex": 2,
        "rationale": "The cities section notes Rawalpindi was the capital from 1959-67 [18]."
    },
    {
        "question": "The second most populous continent in the world is:",
        "options": [
            "Asia",
            "Africa",
            "Europe",
            "North America"
        ],
        "correctIndex": 1,
        "rationale": "Past paper Q20 and geography highlights identify Africa as the 2nd most populous continent [19, 47]."
    },
    {
        "question": "Which country is known as the 'Land of Morning Calm'?",
        "options": [
            "Japan",
            "Bhutan",
            "Norway",
            "Korea"
        ],
        "correctIndex": 3,
        "rationale": "The world geography highlights list Korea as the 'Land of Morning Calm' [20]."
    },
    {
        "question": "Who is the 11th Chief of Army Staff and the first-ever Chief of Defence Forces of Pakistan?",
        "options": [
            "Field Marshal Syed Asim Munir",
            "General Sahir Shamshad Mirza",
            "General Raheel Sharif",
            "General Qamar Javed Bajwa"
        ],
        "correctIndex": 0,
        "rationale": "The updated political setup section confirms Field Marshal Syed Asim Munir holds both posts concurrently [21]."
    },
    {
        "question": "What is the annual population growth rate of Pakistan as per the 2023 PBS Census?",
        "options": [
            "1.55%",
            "2.00%",
            "2.55%",
            "3.10%"
        ],
        "correctIndex": 2,
        "rationale": "The PBS Press Release (August 2023) states the annual growth rate is 2.55% [25]."
    },
    {
        "question": "State Bank of Pakistan (SBP) was founded on 1 July 1948; where is its headquarters?",
        "options": [
            "Islamabad",
            "Lahore",
            "Karachi",
            "Faisalabad"
        ],
        "correctIndex": 2,
        "rationale": "The text states the SBP HQ is in Karachi [25]."
    },
    {
        "question": "What is the National Vegetable of Pakistan?",
        "options": [
            "Potato",
            "Lady Finger (Okra)",
            "Tomato",
            "Onion"
        ],
        "correctIndex": 1,
        "rationale": "The National Symbols table lists 'Lady Finger (Okra)' as the national vegetable [26]."
    },
    {
        "question": "Who wrote the lyrics for Pakistan's National Anthem ('Qaumi Taranah')?",
        "options": [
            "Ahmed G. Chagla",
            "Allama Iqbal",
            "Hafeez Jullundhri",
            "Faiz Ahmed Faiz"
        ],
        "correctIndex": 2,
        "rationale": "The symbols section identifies Hafeez Jullundhri as the author of the lyrics [26]."
    },
    {
        "question": "Which mountain is the National Mountain of Pakistan and is also known as Mt. Godwin-Austen?",
        "options": [
            "Nanga Parbat",
            "Broad Peak",
            "K2",
            "Rakaposhi"
        ],
        "correctIndex": 2,
        "rationale": "K2 is identified as the national mountain with a height of 8,611 m [26]."
    },
    {
        "question": "What is the national juice of Pakistan?",
        "options": [
            "Mango Juice",
            "Orange Juice",
            "Sugarcane juice (Roh)",
            "Apple Juice"
        ],
        "correctIndex": 2,
        "rationale": "The National Symbols list identifies Sugarcane juice (Roh / Ganney ka Ras) as the national juice [27]."
    },
    {
        "question": "What is the motto of Pakistan as inscribed on the national emblem?",
        "options": [
            "Faith, Unity, Discipline",
            "Peace, Progress, Prosperity",
            "Iman, Ittehad, Tanzeem",
            "Both A and C are correct"
        ],
        "correctIndex": 3,
        "rationale": "The motto is listed as 'Iman, Ittehad, Tanzeem (Faith, Unity, Discipline)' [27, 28]."
    },
    {
        "question": "On which date is 'Defence Day' celebrated in Pakistan?",
        "options": [
            "23 March",
            "14 August",
            "6 September",
            "25 December"
        ],
        "correctIndex": 2,
        "rationale": "Defence Day is celebrated on 6 September to commemorate the 1965 war [28]."
    },
    {
        "question": "International Literacy Day is observed every year on which date?",
        "options": [
            "1 May",
            "5 June",
            "8 September",
            "5 October"
        ],
        "correctIndex": 2,
        "rationale": "The international days table lists 8 September as International Literacy Day [30]."
    },
    {
        "question": "The IMF was established on which date?",
        "options": [
            "24 Oct 1945",
            "27 Dec 1945",
            "7 Apr 1948",
            "1 Jan 1995"
        ],
        "correctIndex": 1,
        "rationale": "The organization table states IMF was founded on 27 Dec 1945 [29]."
    },
    {
        "question": "How many member states are currently in SAARC?",
        "options": [
            "5",
            "8",
            "10",
            "12"
        ],
        "correctIndex": 1,
        "rationale": "The document lists 8 members for SAARC, which was founded on 8 Dec 1985 [29]."
    },
    {
        "question": "The World Trade Organization (WTO) replaced GATT on which date?",
        "options": [
            "1 Jan 1995",
            "27 Dec 1945",
            "1 Jan 1948",
            "1 Jan 2000"
        ],
        "correctIndex": 0,
        "rationale": "The organization table lists the WTO's start date as 1 Jan 1995 [53]."
    },
    {
        "question": "Which movement was launched in 1920 in support of the Ottoman Caliphate?",
        "options": [
            "Aligarh Movement",
            "Khilafat Movement",
            "Quit India Movement",
            "Silken Letter Movement"
        ],
        "correctIndex": 1,
        "rationale": "The Pakistan Movement milestones identify the Khilafat Movement in 1920 [31]."
    },
    {
        "question": "Chaudhry Rahmat Ali coined the word 'Pakistan' in which pamphlet?",
        "options": [
            "The Myth of Independence",
            "Now or Never",
            "Tehzeeb-ul-Akhlaq",
            "Bang-e-Dara"
        ],
        "correctIndex": 1,
        "rationale": "The milestones section states he coined the word in the 'Now or Never' pamphlet (1933) [32, 35]."
    },
    {
        "question": "The 'Mountbatten Plan' (Partition Plan) was announced on which date?",
        "options": [
            "14 August 1947",
            "18 July 1947",
            "3 June 1947",
            "16 August 1946"
        ],
        "correctIndex": 2,
        "rationale": "The source identifies 3 June 1947 as the date of the Mountbatten/Partition Plan [32]."
    },
    {
        "question": "The current Constitution of Pakistan (1973) has how many articles?",
        "options": [
            "234",
            "250",
            "280",
            "336"
        ],
        "correctIndex": 2,
        "rationale": "The constitution comparison table shows the 1973 Constitution has 280 articles [33]."
    },
    {
        "question": "How many schedules are included in the 1973 Constitution of Pakistan?",
        "options": [
            "5",
            "6",
            "10",
            "12"
        ],
        "correctIndex": 3,
        "rationale": "The table confirms the 1973 Constitution has 12 schedules [33]."
    },
    {
        "question": "Which constitutional amendment in 1985 made the Objectives Resolution a substantive part of the Constitution?",
        "options": [
            "1st Amendment",
            "8th Amendment",
            "18th Amendment",
            "21st Amendment"
        ],
        "correctIndex": 1,
        "rationale": "The text states the Objectives Resolution was made a substantive part of the Constitution via Article 2-A by the 8th Amendment (1985) [34]."
    },
    {
        "question": "Who served as the 1st Prime Minister of Pakistan and was assassinated on 16 Oct 1951?",
        "options": [
            "Quaid-e-Azam",
            "Liaquat Ali Khan",
            "Z.A. Bhutto",
            "Chaudhry Muhammad Ali"
        ],
        "correctIndex": 1,
        "rationale": "The personalities section identifies Liaquat Ali Khan as the 1st PM, assassinated in Rawalpindi [35]."
    },
    {
        "question": "The book 'Daughter of the East' is the autobiography of:",
        "options": [
            "Fatima Jinnah",
            "Benazir Bhutto",
            "Begum Rana Liaquat Ali",
            "Malala Yousafzai"
        ],
        "correctIndex": 1,
        "rationale": "The corrigenda section notes 'Daughter of the East' is Benazir's autobiography, correcting an SPSC paper error [4, 22]."
    },
    {
        "question": "Which treaty/agreement established the 'Ceasefire Line' in Kashmir on 27 July 1949?",
        "options": [
            "Simla Agreement",
            "Karachi Agreement",
            "Tashkent Declaration",
            "Indus Waters Treaty"
        ],
        "correctIndex": 1,
        "rationale": "The treaties section states the UN Karachi Agreement (27 July 1949) established the Ceasefire Line [36]."
    },
    {
        "question": "Vitamin B3 is chemically known as:",
        "options": [
            "Thiamine",
            "Riboflavin",
            "Niacin",
            "Biotin"
        ],
        "correctIndex": 2,
        "rationale": "The vitamins table lists 'Niacin' as the chemical name for Vitamin B3 [37]."
    },
    {
        "question": "A deficiency in Vitamin C (Ascorbic acid) leads to which disease?",
        "options": [
            "Rickets",
            "Scurvy",
            "Pellagra",
            "Beri-beri"
        ],
        "correctIndex": 1,
        "rationale": "The vitamins table identifies 'Scurvy' as the deficiency disease for Vitamin C [5, 37]."
    },
    {
        "question": "Which vitamin is essential for blood clotting, and its deficiency leads to delayed clotting?",
        "options": [
            "Vitamin A",
            "Vitamin E",
            "Vitamin K",
            "Vitamin B12"
        ],
        "correctIndex": 2,
        "rationale": "The table lists Vitamin K (Phylloquinone) as being for blood clotting; deficiency causes bleeding [5, 38]."
    },
    {
        "question": "What is the hardest substance in the human body?",
        "options": [
            "Bone",
            "Femur",
            "Tooth enamel",
            "Cartilage"
        ],
        "correctIndex": 2,
        "rationale": "The human body basics section explicitly states the hardest substance is 'Tooth enamel' [38]."
    },
    {
        "question": "Which blood group is known as the 'Universal Donor'?",
        "options": [
            "Group A",
            "Group B",
            "Group AB",
            "Group O"
        ],
        "correctIndex": 3,
        "rationale": "The text identifies 'Blood group O' as the universal donor [39]."
    },
    {
        "question": "The right side of the human heart pumps what kind of blood?",
        "options": [
            "Oxygenated blood to the body",
            "Deoxygenated blood to the lungs",
            "Oxygenated blood to the lungs",
            "Deoxygenated blood to the body"
        ],
        "correctIndex": 1,
        "rationale": "The heart section explains that the 'right side pumps deoxygenated blood to lungs' [39]."
    },
    {
        "question": "A 'Light year' is a unit measuring what?",
        "options": [
            "Time",
            "Intensity",
            "Distance",
            "Speed"
        ],
        "correctIndex": 2,
        "rationale": "Past paper Q17 and science facts state a Light year measures distance [40, 47]."
    },
    {
        "question": "The blue color of the sky is caused by which phenomenon?",
        "options": [
            "Reflection",
            "Refraction",
            "Rayleigh scattering",
            "Diffraction"
        ],
        "correctIndex": 2,
        "rationale": "The science section states 'Blue sky because of Rayleigh scattering' [40]."
    },
    {
        "question": "Which planet is known as the 'Red Planet'?",
        "options": [
            "Mercury",
            "Venus",
            "Mars",
            "Jupiter"
        ],
        "correctIndex": 2,
        "rationale": "Quick science facts list 'Mars – the Red Planet' [40]."
    },
    {
        "question": "In the number series 1, 5, 11, 19, 29, what is the next number?",
        "options": [
            "35",
            "39",
            "41",
            "45"
        ],
        "correctIndex": 2,
        "rationale": "The mathematics section explains the differences are 4, 6, 8, 10, so the next difference is 12; 29 + 12 = 41 [54]."
    },
    {
        "question": "If x:y = 2:3 and y:z = 4:5, what is the ratio of x:z?",
        "options": [
            "2:5",
            "8:15",
            "6:15",
            "8:10"
        ],
        "correctIndex": 1,
        "rationale": "The math section provides this specific example: x:z = (2*4):(3*5) = 8:15 [54]."
    },
    {
        "question": "What is the synonym of the word 'Abate'?",
        "options": [
            "Increase",
            "Decrease",
            "Display",
            "Recover"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table lists 'Decrease' or 'Lessen' as the synonym for 'Abate' [42]."
    },
    {
        "question": "What is the antonym of 'Reticent'?",
        "options": [
            "Silent",
            "Reserved",
            "Talkative",
            "Quiet"
        ],
        "correctIndex": 2,
        "rationale": "The vocabulary table identifies 'Talkative' as the antonym for 'Reticent' [43]."
    },
    {
        "question": "The idiom 'To hit the nail right on the head' means:",
        "options": [
            "To do the wrong thing",
            "To do or say exactly the right thing",
            "To suspect someone",
            "To be very busy"
        ],
        "correctIndex": 1,
        "rationale": "The idioms section define this as doing/saying exactly the right thing [41, 43]."
    },
    {
        "question": "What is the one-word substitution for 'a book published after the author's death'?",
        "options": [
            "Posthumous",
            "Soporific",
            "Pedantic",
            "Theocracy"
        ],
        "correctIndex": 0,
        "rationale": "The one-word substitution list defines 'Posthumous' as a book published after the author's death [44]."
    },
    {
        "question": "A medicine that induces sleep is known as:",
        "options": [
            "Theist",
            "Soporific",
            "Optimist",
            "Pessimist"
        ],
        "correctIndex": 1,
        "rationale": "The English section defines 'Soporific' as a medicine that induces sleep [44]."
    },
    {
        "question": "Which preposition correctly completes the sentence: 'He was congratulated ___ his success'?",
        "options": [
            "at",
            "on",
            "for",
            "with"
        ],
        "correctIndex": 1,
        "rationale": "The preposition section lists 'Congratulated on' as the frequent correct usage [44]."
    },
    {
        "question": "What is the shortest Surah in the Holy Quran?",
        "options": [
            "Al-Alaq",
            "Al-Nasr",
            "Al-Kausar",
            "Al-Fatihah"
        ],
        "correctIndex": 2,
        "rationale": "The Quran section identifies Al-Kausar (3 ayahs) as the shortest Surah [45]."
    },
    {
        "question": "Which Surah is known as the 'Longest Surah' in the Quran?",
        "options": [
            "Al-Imran",
            "Al-Baqarah",
            "An-Nisa",
            "Al-Maidah"
        ],
        "correctIndex": 1,
        "rationale": "The Quran section lists Al-Baqarah (286 ayahs) as the longest Surah [45]."
    },
    {
        "question": "The first revelation of the Quran consisted of how many verses from Surah Al-Alaq?",
        "options": [
            "3",
            "5",
            "10",
            "12"
        ],
        "correctIndex": 1,
        "rationale": "The source notes the first revelation was verses 1-5 of Surah Al-Alaq [55]."
    },
    {
        "question": "The Islamic calendar begins with the Hijra in 622 CE. Which two cities were involved in this event?",
        "options": [
            "Makkah and Taif",
            "Makkah and Madina",
            "Madina and Kufa",
            "Makkah and Jeddah"
        ],
        "correctIndex": 1,
        "rationale": "The Prophet's life section defines Hijra as the migration from Makkah to Madina in 622 CE [46]."
    },
    {
        "question": "In the Battle of Badr (2 AH), what was the strength of the Muslim army compared to the Quraish?",
        "options": [
            "1,000 vs 3,000",
            "313 vs 1,000",
            "1,500 vs 5,000",
            "700 vs 1,000"
        ],
        "correctIndex": 1,
        "rationale": "The battle table lists the counts for Badr as 313 Muslims vs 1,000 enemies [46]."
    },
    {
        "question": "Which ghazwa was the last one led by the Prophet Muhammad?",
        "options": [
            "Hunain",
            "Khaybar",
            "Tabuk",
            "Badr"
        ],
        "correctIndex": 2,
        "rationale": "The battle list identifies Tabuk (9 AH) as the last ghazwa [46]."
    },
    {
        "question": "Who was the second Caliph of Islam (634–644 CE) who expanded the empire and started the Hijri calendar?",
        "options": [
            "Hazrat Abu Bakr",
            "Hazrat Umar Farooq",
            "Hazrat Usman Ghani",
            "Hazrat Ali"
        ],
        "correctIndex": 1,
        "rationale": "The Caliphs section lists Hazrat Umar Farooq (RA) as the 2nd Caliph [56]."
    },
    {
        "question": "The Qibla was changed from Bait-ul-Muqaddas to the Kaaba in which Hijri year?",
        "options": [
            "1 AH",
            "2 AH",
            "5 AH",
            "8 AH"
        ],
        "correctIndex": 1,
        "rationale": "The Key Facts section states the Qibla changed in 2 AH [57]."
    },
    {
        "question": "Who is known as the 'Father of Computer'?",
        "options": [
            "Vint Cerf",
            "Charles Babbage",
            "Tim Berners-Lee",
            "Bill Gates"
        ],
        "correctIndex": 1,
        "rationale": "The computer fundamentals section identifies Charles Babbage as the Father of Computer [48]."
    },
    {
        "question": "A computer cannot 'boot' without having which of the following?",
        "options": [
            "Printer",
            "Scanner",
            "Operating System (OS)",
            "Internet Connection"
        ],
        "correctIndex": 2,
        "rationale": "The source states 'A computer cannot boot without an Operating System (OS)' [48]."
    },
    {
        "question": "One Byte is composed of how many bits?",
        "options": [
            "4 bits",
            "8 bits",
            "16 bits",
            "1,024 bits"
        ],
        "correctIndex": 1,
        "rationale": "The memory units table lists 1 Byte = 8 bits [49]."
    },
    {
        "question": "The shortcut key Ctrl+Y in MS Office is used for:",
        "options": [
            "Undo",
            "Redo",
            "Select All",
            "Print"
        ],
        "correctIndex": 1,
        "rationale": "The shortcuts list identifies Ctrl+Y as Redo [49]."
    },
    {
        "question": "In internet terminology, what does URL stand for?",
        "options": [
            "Uniform Research Link",
            "Uniform Resource Locator",
            "Universal Resource Link",
            "United Resource Locator"
        ],
        "correctIndex": 1,
        "rationale": "The internet section defines URL as Uniform Resource Locator [58]."
    },
    {
        "question": "Who was the Chief Justice of the Sindh High Court who administered the oath to Governor Nehal Hashmi on 13 March 2026?",
        "options": [
            "Ahmed Ali Sheikh",
            "Zafar Ahmed Rajput",
            "Irfan Saadat Khan",
            "Aqeel Ahmed Abbasi"
        ],
        "correctIndex": 1,
        "rationale": "The text states SHC Chief Justice Zafar Ahmed Rajput administered the oath to Nehal Hashmi [50]."
    },
    {
        "question": "Which city is known as the 'City of Flowers' in Pakistan?",
        "options": [
            "Karachi",
            "Lahore",
            "Peshawar",
            "Quetta"
        ],
        "correctIndex": 2,
        "rationale": "The city highlights describe Peshawar as the 'City of Flowers' [19]."
    },
    {
        "question": "Which desert, located between the Indus and Jhelum rivers in Punjab, covers areas like Bhakkar and Mianwali?",
        "options": [
            "Thar",
            "Thal",
            "Kharan",
            "Katpana"
        ],
        "correctIndex": 1,
        "rationale": "The desert section identifies the Thal desert as being between the Indus and Jhelum [11]."
    },
    {
        "question": "The 'Durand Line' agreement was made between the British government and which Afghan ruler in 1893?",
        "options": [
            "Amir Abdur Rahman",
            "Amanullah Khan",
            "Zahir Shah",
            "Dost Mohammad"
        ],
        "correctIndex": 0,
        "rationale": "While the name of the ruler is not explicitly in the snippet, it mentions the line was demarcated by Sir Mortimer Durand with Afghanistan on 12 Nov 1893 [3, 6]. Note: This is common SPSC knowledge found in the Caravans reference cited in the guide [59]."
    },
    {
        "question": "What is the total length of Pakistan's coastline along the Arabian Sea?",
        "options": [
            "96 km",
            "909 km",
            "1,046 km",
            "7,257 km"
        ],
        "correctIndex": 2,
        "rationale": "The border table lists the Arabian Sea coastline as 1,046 km [3, 52]."
    },
    {
        "question": "Which pass connects Chitral to Dir and features a famous tunnel?",
        "options": [
            "Khyber Pass",
            "Lowari Pass",
            "Babusar Pass",
            "Khojak Pass"
        ],
        "correctIndex": 1,
        "rationale": "The passes table identifies the Lowari Pass (3,118 m) as connecting Chitral and Dir [7]."
    },
    {
        "question": "The Indus River originates from which location?",
        "options": [
            "Verinag spring",
            "Bara Lacha Pass",
            "Lake Mansarovar / Tibet",
            "Rakshastal Lake"
        ],
        "correctIndex": 2,
        "rationale": "The river table states the Indus originates near Lake Mansarovar / Bokhar Chu glacier, Tibet [8]."
    },
    {
        "question": "Which river is often called the 'Chandrabhaga' in its upper reaches before entering Pakistan?",
        "options": [
            "Jhelum",
            "Chenab",
            "Ravi",
            "Sutlej"
        ],
        "correctIndex": 1,
        "rationale": "The river table notes Chenab is formed by Chandra + Bhaga, hence called Chandrabhaga [9]."
    },
    {
        "question": "Which dam is located on the Kabul River?",
        "options": [
            "Tarbela",
            "Mangla",
            "Warsak",
            "Diamer-Bhasha"
        ],
        "correctIndex": 2,
        "rationale": "The dam section identifies Warsak as being on the Kabul River [18]."
    },
    {
        "question": "Taxila, a major archaeological site of the Gandhara civilization, is located in which province?",
        "options": [
            "Sindh",
            "Punjab",
            "KP",
            "Balochistan"
        ],
        "correctIndex": 2,
        "rationale": "The cities section lists Taxila as being in KP [19]."
    },
    {
        "question": "Who was the first Governor-General of Pakistan?",
        "options": [
            "Liaquat Ali Khan",
            "Quaid-e-Azam M.A. Jinnah",
            "Khawaja Nazimuddin",
            "Ghulam Muhammad"
        ],
        "correctIndex": 1,
        "rationale": "The personalities and milestones sections both confirm Jinnah was the 1st Governor-General [33, 35]."
    },
    {
        "question": "Which country is called the 'Land of the Thunder Dragon'?",
        "options": [
            "Japan",
            "Bhutan",
            "Norway",
            "Korea"
        ],
        "correctIndex": 1,
        "rationale": "The world geography highlights list Bhutan as the 'Land of Thunder Dragon' [20]."
    },
    {
        "question": "In the 2024 Pakistan elections, what was the total number of registered voters?",
        "options": [
            "100,000,000",
            "148,585,760",
            "241,499,431",
            "120,500,000"
        ],
        "correctIndex": 1,
        "rationale": "Past paper Q6 identifies 148,585,760 as the number of registered voters in the 2024 elections [15, 51]."
    },
    {
        "question": "What is the national fruit of Pakistan during the summer season?",
        "options": [
            "Apple",
            "Orange",
            "Mango",
            "Guava"
        ],
        "correctIndex": 2,
        "rationale": "The national symbols list identifies the Mango as the national fruit [5, 26]."
    },
    {
        "question": "The 'State Bank of Pakistan' was inaugurated by the Quaid-e-Azam on which date?",
        "options": [
            "14 August 1947",
            "23 March 1948",
            "1 July 1948",
            "11 September 1948"
        ],
        "correctIndex": 2,
        "rationale": "The general overview states the SBP was founded on 1 July 1948 [25]."
    },
    {
        "question": "What is the national animal of Pakistan?",
        "options": [
            "Snow Leopard",
            "Markhor",
            "Chukar Partridge",
            "Indus Dolphin"
        ],
        "correctIndex": 1,
        "rationale": "The national symbols list identifies the Markhor ('snake-eater') as the national animal [5, 25]."
    },
    {
        "question": "Which of these is the National Bird of Pakistan?",
        "options": [
            "Eagle",
            "Peacock",
            "Chukar Partridge",
            "Parrot"
        ],
        "correctIndex": 2,
        "rationale": "The symbols table lists the Chukar Partridge (Chakor) as the national bird [5, 26]."
    },
    {
        "question": "International Mother Earth Day is observed on which date?",
        "options": [
            "22 March",
            "7 April",
            "22 April",
            "5 June"
        ],
        "correctIndex": 2,
        "rationale": "The international days table lists 22 April as International Mother Earth Day [28]."
    },
    {
        "question": "World Teachers' Day is celebrated on:",
        "options": [
            "1 May",
            "8 September",
            "5 October",
            "24 October"
        ],
        "correctIndex": 2,
        "rationale": "The list of international days identifies 5 October as World Teachers' Day [30]."
    },
    {
        "question": "Which international organization was founded in 1945 and is headquartered in Rome, Italy?",
        "options": [
            "WHO",
            "UNESCO",
            "FAO",
            "ILO"
        ],
        "correctIndex": 2,
        "rationale": "The organization table identifies the FAO as being founded in 1945 and based in Rome [29]."
    },
    {
        "question": "UNESCO is headquartered in which city?",
        "options": [
            "New York",
            "Geneva",
            "Paris",
            "London"
        ],
        "correctIndex": 2,
        "rationale": "The organization table lists Paris, France as the headquarters for UNESCO [29]."
    },
    {
        "question": "The SAARC organization was founded on 8 December 1985 in which city?",
        "options": [
            "Kathmandu",
            "Dhaka",
            "Islamabad",
            "New Delhi"
        ],
        "correctIndex": 1,
        "rationale": "The source states SAARC was founded on 8 Dec 1985 in Dhaka (though headquartered in Kathmandu) [29]."
    },
    {
        "question": "In which year did the Lucknow Pact between the Congress and the Muslim League take place?",
        "options": [
            "1906",
            "1909",
            "1916",
            "1919"
        ],
        "correctIndex": 2,
        "rationale": "The milestones table identifies 1916 as the year of the Lucknow Pact [31]."
    },
    {
        "question": "Who moved the Sindh Assembly's Pakistan Resolution on 3 March 1943?",
        "options": [
            "Sir Hassan Ali Effendi",
            "G.M. Syed",
            "Allah Bakhsh Soomro",
            "Shah Abdul Latif"
        ],
        "correctIndex": 1,
        "rationale": "The personalities section mentions G.M. Syed presented the Sindh Assembly's resolution on 3 March 1943 [36, 60]."
    },
    {
        "question": "The Indian Independence Act was passed by the British Parliament on which date in 1947?",
        "options": [
            "3 June",
            "18 July",
            "14 August",
            "15 August"
        ],
        "correctIndex": 1,
        "rationale": "The milestones section identifies 18 July 1947 as the date the Indian Independence Act was passed [33]."
    },
    {
        "question": "Which constitution changed the country's name to simply 'Republic of Pakistan' before restoring 'Islamic' in 1963?",
        "options": [
            "1956",
            "1962",
            "1973",
            "None"
        ],
        "correctIndex": 1,
        "rationale": "The constitution table notes the 1962 Constitution initially named the country 'Republic of Pakistan' [34]."
    },
    {
        "question": "Article 25-A of the 1973 Constitution guarantees free and compulsory education for children of what age group?",
        "options": [
            "5 to 10",
            "5 to 16",
            "6 to 14",
            "Up to 18"
        ],
        "correctIndex": 1,
        "rationale": "The source states Article 25-A covers free and compulsory education for ages 5–16 [35]."
    },
    {
        "question": "The first Indo-Pak war over Kashmir ended with a ceasefire established in which year?",
        "options": [
            "1947",
            "1948",
            "1949",
            "1950"
        ],
        "correctIndex": 2,
        "rationale": "The treaties section notes the Karachi Agreement of 27 July 1949 established the ceasefire [36]."
    },
    {
        "question": "The Chagai-I nuclear tests on 28 May 1998 involved how many individual tests?",
        "options": [
            "1",
            "5",
            "6",
            "10"
        ],
        "correctIndex": 1,
        "rationale": "The text states Chagai-I involved 5 tests on 28 May 1998 [12]."
    },
    {
        "question": "Which vitamin deficiency causes 'Night Blindness'?",
        "options": [
            "Vitamin A",
            "Vitamin B1",
            "Vitamin C",
            "Vitamin D"
        ],
        "correctIndex": 0,
        "rationale": "The vitamins table correlates Vitamin A (Retinol) deficiency with Night Blindness [5, 12]."
    },
    {
        "question": "Which vitamin is water-soluble?",
        "options": [
            "Vitamin A",
            "Vitamin D",
            "Vitamin E",
            "Vitamin C"
        ],
        "correctIndex": 3,
        "rationale": "The source notes B-complex and Vitamin C are water-soluble, while ADEK are fat-soluble [38]."
    },
    {
        "question": "What is the largest organ of the human body?",
        "options": [
            "Liver",
            "Skin",
            "Lungs",
            "Brain"
        ],
        "correctIndex": 1,
        "rationale": "The human body basics section identifies the Skin as the largest organ [38]."
    },
    {
        "question": "How many bones does a newborn baby typically have?",
        "options": [
            "206",
            "270",
            "300",
            "250"
        ],
        "correctIndex": 1,
        "rationale": "The source states an adult has 206 bones while a newborn has 270 [38]."
    },
    {
        "question": "What is the functional unit of the kidney?",
        "options": [
            "Neuron",
            "Nephron",
            "Alveoli",
            "Islet"
        ],
        "correctIndex": 1,
        "rationale": "The body basics section states the functional unit of kidneys is the nephron [39]."
    },
    {
        "question": "Insulin is secreted by which specific cells in the pancreas?",
        "options": [
            "Alpha-cells",
            "Beta-cells (β-cells)",
            "Delta-cells",
            "Acini cells"
        ],
        "correctIndex": 1,
        "rationale": "The document specifies insulin is secreted by β-cells of Islets of Langerhans [39]."
    },
    {
        "question": "A Light year is approximately equal to how many kilometers?",
        "options": [
            "3.0 x 10^8 km",
            "9.46 x 10^12 km",
            "1.5 x 10^6 km",
            "10,000 km"
        ],
        "correctIndex": 1,
        "rationale": "Science facts define a light year as unit of distance ≈ 9.46 × 10¹² km [40]."
    },
    {
        "question": "What gas is released by the sodium azide in a car's airbag during a collision?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correctIndex": 2,
        "rationale": "The text states airbags contain Sodium azide releasing nitrogen gas [40]."
    },
    {
        "question": "Which planet is the hottest and brightest in our solar system?",
        "options": [
            "Mercury",
            "Venus",
            "Mars",
            "Jupiter"
        ],
        "correctIndex": 1,
        "rationale": "Quick science facts list 'Venus – hottest/brightest' [40, 54]."
    },
    {
        "question": "Complete the analogy: Wood : Furniture :: Cotton : ?",
        "options": [
            "Cloth",
            "Iron",
            "Tools",
            "Forest"
        ],
        "correctIndex": 0,
        "rationale": "The math section provides this raw material : product analogy, where Cotton leads to Cloth [61]."
    },
    {
        "question": "What is the antonym of the word 'Abate'?",
        "options": [
            "Lessen",
            "Decrease",
            "Increase",
            "Yield"
        ],
        "correctIndex": 2,
        "rationale": "The vocabulary table lists 'Increase' as the antonym for 'Abate' [42]."
    },
    {
        "question": "What is the synonym for the word 'Candid'?",
        "options": [
            "Reserved",
            "Frank",
            "Silent",
            "Subtle"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table lists 'Frank' and 'Open' as synonyms for 'Candid' [42]."
    },
    {
        "question": "The idiom 'A chip off the old block' refers to someone who:",
        "options": [
            "Is a unknown competitor",
            "Resembles their parent",
            "Is very busy",
            "Is honest and transparent"
        ],
        "correctIndex": 1,
        "rationale": "The idioms section defines 'A chip off the old block' as someone who resembles their parent [43]."
    },
    {
        "question": "What is the one-word substitution for 'one who lives 100 years'?",
        "options": [
            "Theist",
            "Centenarian",
            "Posthumous",
            "Soporific"
        ],
        "correctIndex": 1,
        "rationale": "The substitution list defines a 'Centenarian' as one who lives 100 years [44]."
    },
    {
        "question": "The term 'Theocracy' refers to a government run by:",
        "options": [
            "The people",
            "Religious leaders",
            "A single dictator",
            "Military officers"
        ],
        "correctIndex": 1,
        "rationale": "The substitution list defines 'Theocracy' as a government by religious leaders [44]."
    },
    {
        "question": "In English grammar, plural of 'person' is:",
        "options": [
            "Persons",
            "Peoples",
            "People",
            "Persones"
        ],
        "correctIndex": 2,
        "rationale": "The grammar section explicitly notes 'Plural of \"person\" → people' [62]."
    },
    {
        "question": "Which of the following is NOT one of the 5 Pillars of Islam?",
        "options": [
            "Salah",
            "Zakat",
            "Belief in Angels",
            "Hajj"
        ],
        "correctIndex": 2,
        "rationale": "The source lists 5 Pillars: Shahada, Salah, Zakat, Sawm, Hajj. Belief in Angels is one of the 6 Articles of Faith [45, 62]."
    },
    {
        "question": "How many verses (Ayahs) are in the longest Surah of the Quran, Al-Baqarah?",
        "options": [
            "114",
            "286",
            "313",
            "558"
        ],
        "correctIndex": 1,
        "rationale": "The Quran section lists Al-Baqarah as having 286 ayahs [45]."
    },
    {
        "question": "In which Hijri year was the first Azan called in Madina by Hazrat Bilal (RA)?",
        "options": [
            "1 AH",
            "2 AH",
            "5 AH",
            "622 CE"
        ],
        "correctIndex": 0,
        "rationale": "The key Islamic facts state the first Azan was called in 1 AH in Madina [56]."
    },
    {
        "question": "Who was the wet-nurse of the Prophet Muhammad?",
        "options": [
            "Hazrat Aamina",
            "Hazrat Halima Sadia",
            "Hazrat Khadija",
            "Hazrat Fatima"
        ],
        "correctIndex": 1,
        "rationale": "The Prophet's life section identifies Halima Sadia as his wet-nurse [55]."
    },
    {
        "question": "The battle of Uhud, in which Hazrat Hamza (RA) was martyred, took place in which year?",
        "options": [
            "2 AH",
            "3 AH",
            "5 AH",
            "8 AH"
        ],
        "correctIndex": 1,
        "rationale": "The battles table identifies Uhud as 3 AH/625 [46]."
    },
    {
        "question": "Who was the 3rd Caliph of Islam (644–656 CE) responsible for the standardization of the Quran?",
        "options": [
            "Hazrat Abu Bakr",
            "Hazrat Umar",
            "Hazrat Usman Ghani",
            "Hazrat Ali"
        ],
        "correctIndex": 2,
        "rationale": "The caliphs section identifies Hazrat Usman Ghani as the 3rd Caliph who standardized the Quran [56]."
    },
    {
        "question": "What is the first month of the Islamic (Hijri) calendar?",
        "options": [
            "Ramadan",
            "Muharram",
            "Rabi-ul-Awwal",
            "Dhul-Hijjah"
        ],
        "correctIndex": 1,
        "rationale": "The source identifies Muharram as the 1st month and Ramadan as the 9th [57]."
    },
    {
        "question": "How many total 'Ummahat-ul-Momineen' (Wives of the Prophet) are listed in the guide?",
        "options": [
            "4",
            "7",
            "11",
            "13"
        ],
        "correctIndex": 2,
        "rationale": "The text lists 11 wives of the Prophet [57]."
    },
    {
        "question": "Which of these is NOT an input device?",
        "options": [
            "Keyboard",
            "Scanner",
            "Projector",
            "Webcam"
        ],
        "correctIndex": 2,
        "rationale": "The IT section lists Projector as an output device, while others are input [49]."
    },
    {
        "question": "The shortcut key F12 in MS Office applications is used for:",
        "options": [
            "Save",
            "Save As",
            "Refresh",
            "Help"
        ],
        "correctIndex": 1,
        "rationale": "The shortcuts list specifies F12 is for 'Save As' [49]."
    },
    {
        "question": "What does PDF stand for in the context of computer files?",
        "options": [
            "Private Document File",
            "Portable Document Format",
            "Personal Data File",
            "Public Digital Format"
        ],
        "correctIndex": 1,
        "rationale": "The text identifies PDF as Portable Document Format [58]."
    },
    {
        "question": "What is the abbreviation for 'Subscriber Identity Module' used in telecommunications?",
        "options": [
            "GPS",
            "ISP",
            "SIM",
            "USB"
        ],
        "correctIndex": 2,
        "rationale": "The common abbreviations list identifies SIM as Subscriber Identity Module [50]."
    },
    {
        "question": "Who is the current Chief Minister (CM) of Sindh as of May 2026?",
        "options": [
            "Nehal Hashmi",
            "Syed Murad Ali Shah",
            "Kamran Tessori",
            "Zafar Ahmed Rajput"
        ],
        "correctIndex": 1,
        "rationale": "The Sindh-specific GK section identifies Syed Murad Ali Shah as the CM [50]."
    },
    {
        "question": "How many administrative divisions are there in Sindh according to the guide?",
        "options": [
            "3",
            "5",
            "7",
            "10"
        ],
        "correctIndex": 2,
        "rationale": "The text lists 7 divisions: Karachi, Hyderabad, Sukkur, Larkana, Mirpur Khas, Shaheed Benazirabad, and Banbhore [17]."
    },
    {
        "question": "Which lake in Sindh is identified as the 2nd largest freshwater lake and supplies water to Karachi?",
        "options": [
            "Manchar",
            "Keenjhar",
            "Hanna",
            "Haleji"
        ],
        "correctIndex": 1,
        "rationale": "The lakes table lists Keenjhar as the 2nd largest freshwater lake and Karachi water source [13, 60]."
    },
    {
        "question": "Which US president's resignation is a high-yield fact for the SPSC General Assistant test?",
        "options": [
            "Richard Nixon",
            "Gerald Ford",
            "Jimmy Carter",
            "Ronald Reagan"
        ],
        "correctIndex": 0,
        "rationale": "The past paper analysis (Q2) lists Richard Nixon as the US president who resigned [15, 51]."
    },
    {
        "question": "The First Battle of Panipat was fought in which year?",
        "options": [
            "1526",
            "1556",
            "1761",
            "1857"
        ],
        "correctIndex": 0,
        "rationale": "Past paper Q3 identifies 1526 as the year of the First Battle of Panipat [15, 51]."
    },
    {
        "question": "Who wrote the book 'Jinnah of Pakistan'?",
        "options": [
            "Karl Marx",
            "Stanley Wolpert",
            "Jaswant Singh",
            "Hector Bolitho"
        ],
        "correctIndex": 1,
        "rationale": "Past paper Q4 identifies Stanley Wolpert as the author of 'Jinnah of Pakistan' [15, 51]."
    },
    {
        "question": "What is the name of the current Secretary General of the Arab League?",
        "options": [
            "Antonio Guterres",
            "Ahmed Aboul Gheit",
            "Tedros Adhanom",
            "Jens Stoltenberg"
        ],
        "correctIndex": 1,
        "rationale": "Past paper Q5 and the organization table list Ahmed Aboul Gheit [15, 51, 53]."
    },
    {
        "question": "Pakistan's financial year starts and ends on which dates?",
        "options": [
            "1st January to 31st December",
            "1st April to 31st March",
            "1st July to 30th June",
            "14th August to 13th August"
        ],
        "correctIndex": 2,
        "rationale": "Past paper Q8 and the general facts section state the financial year is 1 July – 30 June [15, 25]."
    },
    {
        "question": "Which dam is located on the Indus River according to the 2024 past paper?",
        "options": [
            "Mangla Dam",
            "Warsak Dam",
            "Diamer-Bhasha Dam",
            "Rawal Dam"
        ],
        "correctIndex": 2,
        "rationale": "Past paper Q11 identifies Diamer-Bhasha Dam as being on the Indus [15, 18]."
    },
    {
        "question": "The first indigenous aircraft of Pakistan is:",
        "options": [
            "F-16",
            "Mirage",
            "JF-17 Thunder",
            "Mushshak"
        ],
        "correctIndex": 2,
        "rationale": "Past paper Q13 identifies the JF-17 Thunder as the first Pakistani indigenous aircraft [15]."
    },
    {
        "question": "In which year was the OIC (Organization of Islamic Cooperation) formed, according to the correct historical fact?",
        "options": [
            "1945",
            "1969",
            "1975",
            "1985"
        ],
        "correctIndex": 1,
        "rationale": "While the paper key might show 1975, the study guide clarifies that the correct year is 1969 [15, 63]."
    },
    {
        "question": "Who is known as the 'Father of the Internet' alongside Vint Cerf?",
        "options": [
            "Tim Berners-Lee",
            "Bob Kahn",
            "Bill Gates",
            "Steve Jobs"
        ],
        "correctIndex": 1,
        "rationale": "The IT fundamentals section identifies both Vint Cerf and Bob Kahn as the fathers of the internet [48]."
    },
    {
        "question": "The oldest university in the world, as mentioned in the past paper, is:",
        "options": [
            "Oxford University",
            "University of Bologna",
            "Al-Azhar University",
            "Harvard University"
        ],
        "correctIndex": 1,
        "rationale": "Past paper Q18 identifies the University of Bologna as the oldest [47]."
    },
    {
        "question": "Who was the first European to reach India by sea in 1498?",
        "options": [
            "Christopher Columbus",
            "Vasco da Gama",
            "Marco Polo",
            "Ferdinand Magellan"
        ],
        "correctIndex": 1,
        "rationale": "Past paper Q22 identifies Vasco da Gama [47]."
    },
    {
        "question": "The Indus Waters Treaty (Karachi, 1960) was signed by Ayub Khan and:",
        "options": [
            "Lal Bahadur Shastri",
            "Jawaharlal Nehru",
            "Indira Gandhi",
            "Mahatma Gandhi"
        ],
        "correctIndex": 1,
        "rationale": "The treaties and river sections state it was signed by Ayub Khan and Jawaharlal Nehru [9, 36, 47]."
    },
    {
        "question": "In the context of space technology, what does 'PRSS' stand for?",
        "options": [
            "Pakistan Rocket Sensing Satellite",
            "Pakistan Remote Sensing Satellite",
            "Primary Radar Sensing System",
            "Pakistan Radio Satellite System"
        ],
        "correctIndex": 1,
        "rationale": "Past paper Q25 identifies PRSS as the Pakistan Remote Sensing Satellite [47]."
    },
    {
        "question": "One who speaks very little is referred to as:",
        "options": [
            "Talkative",
            "Pedantic",
            "Reticent",
            "Frank"
        ],
        "correctIndex": 2,
        "rationale": "The past paper Q38 and vocabulary section define 'Reticent' as one who speaks less [41, 43, 44]."
    },
    {
        "question": "A style that is showy of knowledge is called:",
        "options": [
            "Humble",
            "Pedantic",
            "Imperceptible",
            "Candid"
        ],
        "correctIndex": 1,
        "rationale": "Past paper Q47 and vocabulary section define 'Pedantic' as showy of knowledge [41, 43, 44]."
    },
    {
        "question": "Which land border of Pakistan is approximately 2,912 km long?",
        "options": [
            "Pak-China",
            "Pak-Iran",
            "Pak-India",
            "Pak-Afghanistan"
        ],
        "correctIndex": 2,
        "rationale": "The border table identifies the Pak-India (Radcliffe Line) border as 2,912 km [3]."
    },
    {
        "question": "The border agreement between Pakistan and China was signed in which year?",
        "options": [
            "1947",
            "1956",
            "1963",
            "1973"
        ],
        "correctIndex": 2,
        "rationale": "The border table states the Sino-Pak Agreement was on 2 March 1963 [3]."
    },
    {
        "question": "The Karakoram Highway (KKH) passes through which mountain pass?",
        "options": [
            "Khyber Pass",
            "Khunjerab Pass",
            "Bolan Pass",
            "Gomal Pass"
        ],
        "correctIndex": 1,
        "rationale": "The passes table notes the Khunjerab Pass is on the Karakoram Highway [6]."
    },
    {
        "question": "Which pass connects Dera Ismail Khan to Ghazni in Afghanistan?",
        "options": [
            "Khyber Pass",
            "Bolan Pass",
            "Gomal/Gumal Pass",
            "Lowari Pass"
        ],
        "correctIndex": 2,
        "rationale": "The passes table identifies the Gomal Pass as the connector between D.I. Khan and Ghazni [7]."
    },
    {
        "question": "The height of the second-highest mountain peak, K2, is:",
        "options": [
            "8,848 m",
            "8,611 m",
            "8,126 m",
            "7,862 m"
        ],
        "correctIndex": 1,
        "rationale": "The geography highlights list K2 at 8,611 m [20, 26]."
    },
    {
        "question": "The Indus Waters Treaty was signed in 1960 under the mediation of which organization?",
        "options": [
            "United Nations",
            "IMF",
            "World Bank",
            "WHO"
        ],
        "correctIndex": 2,
        "rationale": "The river section states the treaty was signed under World Bank mediation [9, 36]."
    },
    {
        "question": "What is the national animal of Pakistan, whose name literally means 'snake-eater'?",
        "options": [
            "Snow Leopard",
            "Markhor",
            "Ibex",
            "Cobra"
        ],
        "correctIndex": 1,
        "rationale": "The symbols list identifies the Markhor as the national animal and 'snake-eater' [25]."
    },
    {
        "question": "The motto 'Iman, Ittehad, Tanzeem' was given by whom?",
        "options": [
            "Allama Iqbal",
            "Sir Syed Ahmad Khan",
            "Quaid-e-Azam M.A. Jinnah",
            "Liaquat Ali Khan"
        ],
        "correctIndex": 2,
        "rationale": "The motto is associated with the national symbols section and is the official motto of Pakistan founded by Jinnah [27]."
    },
    {
        "question": "The World Meteorological Day falls on the same date as Pakistan Day, which is:",
        "options": [
            "23 March",
            "14 August",
            "6 September",
            "25 December"
        ],
        "correctIndex": 0,
        "rationale": "The international days section lists 23 March for both Pakistan Day and World Meteorological Day [28]."
    },
    {
        "question": "Labour Day is celebrated internationally on which date?",
        "options": [
            "1 January",
            "23 March",
            "1 May",
            "14 August"
        ],
        "correctIndex": 2,
        "rationale": "The international days table lists 1 May as Labour Day [30]."
    },
    {
        "question": "World Environment Day is observed on which date?",
        "options": [
            "22 April",
            "5 June",
            "11 July",
            "24 October"
        ],
        "correctIndex": 1,
        "rationale": "The international days table lists 5 June as World Environment Day [30]."
    },
    {
        "question": "The International Day Against Drug Abuse is observed on:",
        "options": [
            "26 June",
            "11 July",
            "12 August",
            "8 September"
        ],
        "correctIndex": 0,
        "rationale": "The international days list identifies 26 June for this day [30]."
    },
    {
        "question": "Which international organization is headquartered in Brussels, Belgium?",
        "options": [
            "WHO",
            "WTO",
            "NATO",
            "ASEAN"
        ],
        "correctIndex": 2,
        "rationale": "The organization table lists NATO's headquarters as Brussels, Belgium [53]."
    },
    {
        "question": "Pakistan re-joined the Commonwealth in which year?",
        "options": [
            "1947",
            "1989",
            "2008",
            "2017"
        ],
        "correctIndex": 2,
        "rationale": "The organization table notes Pakistan was re-admitted to the Commonwealth in 2008 [53]."
    },
    {
        "question": "Transparency International is headquartered in which city?",
        "options": [
            "Vienna",
            "Geneva",
            "Berlin",
            "Paris"
        ],
        "correctIndex": 2,
        "rationale": "The organization table lists Berlin, Germany as the HQ for Transparency International [31]."
    },
    {
        "question": "Sir Syed Ahmad Khan founded the MAO College at Aligarh in which year?",
        "options": [
            "1857",
            "1875",
            "1885",
            "1906"
        ],
        "correctIndex": 1,
        "rationale": "The milestones table identifies 1875 for Aligarh/MAO College [31]."
    },
    {
        "question": "The 'Separate Electorates' for Muslims were granted under which reforms?",
        "options": [
            "Minto-Morley Reforms (1909)",
            "Montagu-Chelmsford Reforms (1919)",
            "Simon Commission (1927)",
            "Nehru Report (1928)"
        ],
        "correctIndex": 0,
        "rationale": "The milestones section identifies the Minto-Morley Reforms (1909) as granting separate electorates [31]."
    },
    {
        "question": "Who was the first Prime Minister of Pakistan?",
        "options": [
            "Quaid-e-Azam",
            "Liaquat Ali Khan",
            "Z.A. Bhutto",
            "Ayub Khan"
        ],
        "correctIndex": 1,
        "rationale": "Liaquat Ali Khan is listed as the 1st PM in the personalities section [35]."
    },
    {
        "question": "The 1962 Constitution was promulgated by which leader?",
        "options": [
            "Chaudhry Muhammad Ali",
            "Ayub Khan",
            "Z.A. Bhutto",
            "Yahya Khan"
        ],
        "correctIndex": 1,
        "rationale": "The constitution table identifies President Ayub Khan as the promulgator of the 1962 Constitution [33]."
    },
    {
        "question": "Which constitution introduced a 'Bicameral' legislature (National Assembly and Senate) for the first time?",
        "options": [
            "1956",
            "1962",
            "1973",
            "None"
        ],
        "correctIndex": 2,
        "rationale": "The comparison table shows the 1973 Constitution introduced a bicameral legislature [34]."
    },
    {
        "question": "How many seats are currently in the Senate of Pakistan (post-2018)?",
        "options": [
            "80",
            "96",
            "104",
            "336"
        ],
        "correctIndex": 1,
        "rationale": "The source notes there are now 96 Senate seats, down from 104 [34]."
    },
    {
        "question": "Which specific constitutional amendment in 1985 made the Objectives Resolution a substantive part of the 1973 Constitution via Article 2-A?",
        "options": [
            "5th Amendment",
            "8th Amendment",
            "13th Amendment",
            "18th Amendment"
        ],
        "correctIndex": 1,
        "rationale": "The source states that the Objectives Resolution was made a substantive part of the Constitution via Article 2-A by the 8th Amendment in 1985 [1]."
    },
    {
        "question": "Under the 1962 Constitution, what was the specific method of election for the President?",
        "options": [
            "Direct adult franchise",
            "Indirect (Basic Democrats)",
            "Nomination by Provincial Assemblies",
            "Selection by the Senate"
        ],
        "correctIndex": 1,
        "rationale": "The constitution comparison table identifies the 1962 Constitution's election method as 'Indirect (Basic Democrats)' [2]."
    },
    {
        "question": "Which individual served as the Prime Minister of Pakistan when the 1956 Constitution was enforced?",
        "options": [
            "Liaquat Ali Khan",
            "Khawaja Nazimuddin",
            "Chaudhry Muhammad Ali",
            "Huseyn Shaheed Suhrawardy"
        ],
        "correctIndex": 2,
        "rationale": "The source identifies PM Chaudhry Muhammad Ali as the one who promulgated/enforced the 1956 Constitution [2]."
    },
    {
        "question": "Article 19 of the 1973 Constitution of Pakistan deals with which fundamental right?",
        "options": [
            "Free education",
            "Freedom of speech",
            "Right to a fair trial",
            "Freedom of movement"
        ],
        "correctIndex": 1,
        "rationale": "The 'Key Constitutional Articles' section explicitly lists 'Article 19: freedom of speech' [3]."
    },
    {
        "question": "What is the total number of seats in the National Assembly of Pakistan as per the updated 2026 study guide?",
        "options": [
            "272",
            "336",
            "342",
            "446"
        ],
        "correctIndex": 1,
        "rationale": "The source identifies the National Assembly as having 336 seats, consisting of 266 general, 60 women, and 10 minorities [1]."
    },
    {
        "question": "How many seats are currently in the Senate of Pakistan following the post-2018 changes?",
        "options": [
            "100",
            "104",
            "96",
            "80"
        ],
        "correctIndex": 2,
        "rationale": "The source notes that the Senate now has 96 seats (since 2018), having previously been 104 [1]."
    },
    {
        "question": "Which mountain pass connects Qilla Abdullah to Chaman in Balochistan?",
        "options": [
            "Bolan Pass",
            "Khojak Pass",
            "Gomal Pass",
            "Dorah Pass"
        ],
        "correctIndex": 1,
        "rationale": "The mountain passes table identifies the Khojak Pass (2,290 m) as connecting Qilla Abdullah to Chaman [4]."
    },
    {
        "question": "The Kilik Pass connects Pakistan to which neighboring country?",
        "options": [
            "Afghanistan",
            "China",
            "India",
            "Iran"
        ],
        "correctIndex": 1,
        "rationale": "The passes table identifies the Kilik Pass (4,827 m) as connecting to China [5]."
    },
    {
        "question": "Which peak, reaching 6,013 meters, is located in the Karakoram Range and features a pass of the same name?",
        "options": [
            "Nanga Parbat",
            "Mustagh Pass",
            "K2",
            "Broad Peak"
        ],
        "correctIndex": 1,
        "rationale": "The table lists 'Mustagh Pass' at 6,013 m in the Karakoram Range [5]."
    },
    {
        "question": "Which river is identified as the longest in the world, though some sources contest it with the Amazon?",
        "options": [
            "Indus",
            "Nile",
            "Congo",
            "Yangtze"
        ],
        "correctIndex": 1,
        "rationale": "The world geography highlights list the Nile as the longest river (though Amazon is noted as contested) [6]."
    },
    {
        "question": "Which of the following rivers is a 'right bank' tributary of the Indus?",
        "options": [
            "Zanskar",
            "Ravi",
            "Jhelum",
            "Kabul"
        ],
        "correctIndex": 3,
        "rationale": "The source lists Kabul, along with Shyok, Gilgit, Hunza, and Swat, as right-bank tributaries of the Indus [7]."
    },
    {
        "question": "The Ravi River enters Pakistan near which confluence point to join the Chenab?",
        "options": [
            "Trimmu",
            "Rangpur",
            "Mithankot",
            "Uch Sharif"
        ],
        "correctIndex": 1,
        "rationale": "The rivers table states that the Ravi joins the Chenab near Rangpur [8]."
    },
    {
        "question": "At which specific location do all five Punjab rivers meet to form the Panjnad?",
        "options": [
            "Mithankot",
            "Uch Sharif",
            "Trimmu",
            "Sidhnai"
        ],
        "correctIndex": 1,
        "rationale": "The rivers table for the Sutlej notes it meets the Chenab at 'Panjnad' near Uch Sharif [7, 8]."
    },
    {
        "question": "Which barrage was built in 1939 and is located on the Chenab River?",
        "options": [
            "Sukkur Barrage",
            "Trimmu Barrage",
            "Khanki Barrage",
            "Guddu Barrage"
        ],
        "correctIndex": 1,
        "rationale": "The barrages section identifies the Trimmu Barrage as being built in 1939 on the Chenab River [9]."
    },
    {
        "question": "What is the total number of administrative divisions in the province of Sindh?",
        "options": [
            "5",
            "6",
            "7",
            "8"
        ],
        "correctIndex": 2,
        "rationale": "The Sindh-specific GK section lists 7 divisions: Karachi, Hyderabad, Sukkur, Larkana, Mirpur Khas, Shaheed Benazirabad, and Banbhore [10]."
    },
    {
        "question": "Which division of Sindh was recently added or is included in the list of 7 (along with Shaheed Benazirabad)?",
        "options": [
            "Dadu",
            "Thatta",
            "Banbhore",
            "Jamshoro"
        ],
        "correctIndex": 2,
        "rationale": "The 7th division listed in the Sindh section is 'Banbhore' [10]."
    },
    {
        "question": "In the human body, the cerebellum is primarily responsible for:",
        "options": [
            "Filtering blood",
            "Balance and coordination",
            "Pumping deoxygenated blood",
            "Light sensitivity"
        ],
        "correctIndex": 1,
        "rationale": "The body basics section states: 'cerebellum = balance' [11]."
    },
    {
        "question": "What is the chemical name for Vitamin B2?",
        "options": [
            "Thiamine",
            "Riboflavin",
            "Niacin",
            "Pyridoxine"
        ],
        "correctIndex": 1,
        "rationale": "The vitamins table identifies Vitamin B2 as Riboflavin [12]."
    },
    {
        "question": "A deficiency in Vitamin B3 (Niacin) results in which specific disease?",
        "options": [
            "Beri-beri",
            "Pellagra",
            "Anemia",
            "Scurvy"
        ],
        "correctIndex": 1,
        "rationale": "The vitamins table lists Pellagra as the deficiency disease for Vitamin B3 [12]."
    },
    {
        "question": "Which vitamin, also known as 'Tocopherol', is fat-soluble and whose deficiency can lead to sterility?",
        "options": [
            "Vitamin A",
            "Vitamin E",
            "Vitamin D",
            "Vitamin K"
        ],
        "correctIndex": 1,
        "rationale": "The table lists Vitamin E as Tocopherol, noting its deficiency relates to sterility [12]."
    },
    {
        "question": "Which blood group is identified in the text as the 'Universal Recipient'?",
        "options": [
            "Group O",
            "Group A",
            "Group B",
            "Group AB"
        ],
        "correctIndex": 3,
        "rationale": "The human body basics section identifies Group AB as the universal recipient [11]."
    },
    {
        "question": "How many chambers are found in the average human heart?",
        "options": [
            "2",
            "3",
            "4",
            "5"
        ],
        "correctIndex": 2,
        "rationale": "The heart section states: 'Heart: 4 chambers' [11]."
    },
    {
        "question": "The transparent front layer of the human eye is called the:",
        "options": [
            "Retina",
            "Cornea",
            "Lens",
            "Iris"
        ],
        "correctIndex": 1,
        "rationale": "The eye section identifies the 'cornea' as the transparent front layer [11]."
    },
    {
        "question": "What is the chemical formula for the rust that forms on iron?",
        "options": [
            "NaCl",
            "Fe2O3·xH2O",
            "NaHCO3",
            "NaN3"
        ],
        "correctIndex": 1,
        "rationale": "The science facts section identifies rust as Iron oxide with the formula Fe2O3·xH2O [13]."
    },
    {
        "question": "Which gas is commonly found in soft drinks to provide carbonation?",
        "options": [
            "Oxygen",
            "Nitrogen",
            "Carbon Dioxide (CO2)",
            "Hydrogen"
        ],
        "correctIndex": 2,
        "rationale": "The quick science facts state that 'Soft drinks contain CO2' [13]."
    },
    {
        "question": "In computer terminology, what does 'GUI' stand for?",
        "options": [
            "General User Interface",
            "Graphical User Interface",
            "Global User Index",
            "Group User Integration"
        ],
        "correctIndex": 1,
        "rationale": "The common abbreviations list identifies GUI as Graphical User Interface [14]."
    },
    {
        "question": "Which generation of computers is characterized by the use of 'Integrated Circuits' (ICs)?",
        "options": [
            "1st Generation",
            "2nd Generation",
            "3rd Generation",
            "4th Generation"
        ],
        "correctIndex": 2,
        "rationale": "The computer generations list identifies the 3rd generation as using ICs [15]."
    },
    {
        "question": "Which component of computer memory is described as 'volatile', meaning it loses data on power-off?",
        "options": [
            "ROM",
            "Hard Disk",
            "RAM",
            "Cache"
        ],
        "correctIndex": 2,
        "rationale": "The memory section states: 'RAM – volatile (loses data on power-off)' [15]."
    },
    {
        "question": "How many megabytes (MB) make up one gigabyte (GB)?",
        "options": [
            "100 MB",
            "1,000 MB",
            "1,024 MB",
            "8,192 MB"
        ],
        "correctIndex": 2,
        "rationale": "The memory units section identifies 1 GB = 1,024 MB [16]."
    },
    {
        "question": "In MS Office shortcuts, what is the function of the F2 key?",
        "options": [
            "Help",
            "Rename",
            "Refresh",
            "Save As"
        ],
        "correctIndex": 1,
        "rationale": "The shortcut list identifies F2 as the key for 'Rename' [16]."
    },
    {
        "question": "Which shortcut key is used to start a slideshow in Microsoft PowerPoint?",
        "options": [
            "F1",
            "F2",
            "F5",
            "F7"
        ],
        "correctIndex": 2,
        "rationale": "The shortcut list states F5 is for 'Refresh/Slideshow start in PowerPoint' [16]."
    },
    {
        "question": "What is the name of the system that translates human-readable names (like domain names) into IP addresses?",
        "options": [
            "ISP",
            "URL",
            "DNS",
            "HTML"
        ],
        "correctIndex": 2,
        "rationale": "The internet section states: 'DNS translates names to IPs' [17]."
    },
    {
        "question": "In the Quran, how many Surahs are identified as 'Madani' and 'Makki' respectively?",
        "options": [
            "86 Makki, 28 Madani",
            "28 Makki, 86 Madani",
            "114 total (no split)",
            "30 Makki, 84 Madani"
        ],
        "correctIndex": 0,
        "rationale": "While Batch 1 mentioned the total, the Islamic history notes and general Islamic study tables often follow the 86 Makki / 28 Madani split [18]."
    },
    {
        "question": "Which Surah of the Holy Quran is known for having two instances of 'Bismillah'?",
        "options": [
            "Surah Al-Baqarah",
            "Surah At-Taubah",
            "Surah An-Naml",
            "Surah Al-Alaq"
        ],
        "correctIndex": 2,
        "rationale": "The Quran facts section identifies Surah An-Naml (27th) as the Surah with two Bismillah [18]."
    },
    {
        "question": "Who was the primary scribe responsible for writing down the first compilation of the Quran under Hazrat Abu Bakr (RA)?",
        "options": [
            "Hazrat Umar (RA)",
            "Hazrat Zaid bin Thabit (RA)",
            "Hazrat Usman (RA)",
            "Hazrat Ali (RA)"
        ],
        "correctIndex": 1,
        "rationale": "The source states the Quran was 'written by Hazrat Zaid bin Thabit (RA)' on the advice of Hazrat Umar [19]."
    },
    {
        "question": "In what year of the Elephant (CE) was the Prophet Muhammad born in Makkah?",
        "options": [
            "571 CE",
            "610 CE",
            "622 CE",
            "632 CE"
        ],
        "correctIndex": 0,
        "rationale": "The Prophet's life events list his birth as: '12 Rabi-ul-Awwal, 571 CE' [19]."
    },
    {
        "question": "The Conquest of Makkah took place in which Hijri year?",
        "options": [
            "2 AH",
            "5 AH",
            "8 AH",
            "10 AH"
        ],
        "correctIndex": 2,
        "rationale": "The life events section identifies the Conquest of Makkah as 8 AH / 630 CE [20]."
    },
    {
        "question": "Which battle is identified as the first major conflict between Muslims and the Quraish (2 AH)?",
        "options": [
            "Battle of Uhud",
            "Battle of Badr",
            "Battle of Khandaq",
            "Battle of Khaybar"
        ],
        "correctIndex": 1,
        "rationale": "The battles table identifies Badr (2 AH/624) as the 'first major battle' [20]."
    },
    {
        "question": "In which battle was Hazrat Hamza (RA), the uncle of the Prophet, martyred?",
        "options": [
            "Battle of Badr",
            "Battle of Uhud",
            "Battle of Khandaq",
            "Battle of Tabuk"
        ],
        "correctIndex": 1,
        "rationale": "The battles table states Hazrat Hamza (RA) was martyred in the Battle of Uhud (3 AH) [20]."
    },
    {
        "question": "What is the total number of 'Sarayas' (expeditions not led by the Prophet) mentioned in the study guide?",
        "options": [
            "27",
            "313",
            "53–55",
            "114"
        ],
        "correctIndex": 2,
        "rationale": "The battles section states: 'Total Ghazwat: 27; Sarayas: 53–55' [21]."
    },
    {
        "question": "Which Caliph was known for standardizing the Quran into the 'Mushaf-e-Usmani'?",
        "options": [
            "Hazrat Abu Bakr",
            "Hazrat Umar",
            "Hazrat Usman Ghani",
            "Hazrat Ali"
        ],
        "correctIndex": 2,
        "rationale": "The Caliphs section lists Hazrat Usman Ghani (RA) as having standardized the Quran (Mushaf-e-Usmani) [21]."
    },
    {
        "question": "The 'Ridda Wars' occurred during the caliphate of:",
        "options": [
            "Hazrat Abu Bakr",
            "Hazrat Umar",
            "Hazrat Usman",
            "Hazrat Ali"
        ],
        "correctIndex": 0,
        "rationale": "The Caliphs table identifies the 'Ridda Wars' as occurring during Hazrat Abu Bakr's rule (632–634 CE) [21]."
    },
    {
        "question": "On which date is World Press Freedom Day observed?",
        "options": [
            "7 April",
            "3 May",
            "5 June",
            "24 October"
        ],
        "correctIndex": 1,
        "rationale": "The international days table identifies 3 May as World Press Freedom Day [22]."
    },
    {
        "question": "World Population Day is celebrated annually on which date?",
        "options": [
            "11 July",
            "12 August",
            "8 September",
            "10 December"
        ],
        "correctIndex": 0,
        "rationale": "The table lists 11 July as World Population Day [22]."
    },
    {
        "question": "On which date is United Nations Day observed?",
        "options": [
            "24 August",
            "24 October",
            "10 December",
            "27 December"
        ],
        "correctIndex": 1,
        "rationale": "The international days table lists 24 October as UN Day [22]."
    },
    {
        "question": "Human Rights Day is celebrated every year on:",
        "options": [
            "21 September",
            "5 October",
            "24 October",
            "10 December"
        ],
        "correctIndex": 3,
        "rationale": "The table identifies 10 December as Human Rights Day [22]."
    },
    {
        "question": "Which international organization is headquartered in Montreal, Canada?",
        "options": [
            "IMF",
            "ICAO",
            "FAO",
            "WMO"
        ],
        "correctIndex": 1,
        "rationale": "The organizations table identifies ICAO as being headquartered in Montreal [23]."
    },
    {
        "question": "The World Intellectual Property Organization (WIPO) is headquartered in which city?",
        "options": [
            "Paris",
            "Rome",
            "Geneva",
            "London"
        ],
        "correctIndex": 2,
        "rationale": "The organizations table identifies Geneva as the headquarters for WIPO [23]."
    },
    {
        "question": "Which organization was founded in 1960 and is headquartered in Vienna, Austria?",
        "options": [
            "WTO",
            "OPEC",
            "EU",
            "NATO"
        ],
        "correctIndex": 1,
        "rationale": "The table identifies OPEC as being founded in 1960 with headquarters in Vienna [24]."
    },
    {
        "question": "Which year did the European Union (EU) formally come into existence via the Maastricht Treaty?",
        "options": [
            "1945",
            "1967",
            "1993",
            "2001"
        ],
        "correctIndex": 2,
        "rationale": "The organizations table identifies 1993 (Maastricht) as the year for the EU [24]."
    },
    {
        "question": "In which year did Pakistan become a full member of the Shanghai Cooperation Organization (SCO)?",
        "options": [
            "2001",
            "2008",
            "2017",
            "2023"
        ],
        "correctIndex": 2,
        "rationale": "The table identifies 2017 as the year Pakistan became a full member of the SCO [24]."
    },
    {
        "question": "The Simla Deputation in October 1906, which preceded the formation of the Muslim League, was led by whom?",
        "options": [
            "Quaid-e-Azam",
            "Sir Aga Khan III",
            "Nawab Mohsin-ul-Mulk",
            "Sir Syed Ahmad Khan"
        ],
        "correctIndex": 1,
        "rationale": "The milestones section identifies Sir Aga Khan III as the leader of the Simla Deputation to Viceroy Lord Minto [25]."
    },
    {
        "question": "The Rowlatt Act and the subsequent Jallianwala Bagh massacre occurred in which year?",
        "options": [
            "1909",
            "1916",
            "1919",
            "1920"
        ],
        "correctIndex": 2,
        "rationale": "The milestones table identifies 1919 as the year of the Rowlatt Act and Jallianwala Bagh [25]."
    },
    {
        "question": "In which year were Jinnah's famous '14 Points' presented in response to the Nehru Report?",
        "options": [
            "1927",
            "1928",
            "1929",
            "1930"
        ],
        "correctIndex": 2,
        "rationale": "The milestones table identifies 1929 as the year of Jinnah's 14 Points [26]."
    },
    {
        "question": "The 'Direct Action Day' called by the Muslim League took place on which date in 1946?",
        "options": [
            "23 March",
            "3 June",
            "16 August",
            "11 September"
        ],
        "correctIndex": 2,
        "rationale": "The milestones section identifies 16 Aug 1946 as Direct Action Day [26]."
    },
    {
        "question": "Who served as the first capital of Pakistan until 1959?",
        "options": [
            "Islamabad",
            "Lahore",
            "Karachi",
            "Rawalpindi"
        ],
        "correctIndex": 2,
        "rationale": "The cities section notes 'first capital was Karachi, then Rawalpindi 1959-67' [27]."
    },
    {
        "question": "What is the synonym for the word 'Capitulate'?",
        "options": [
            "Resist",
            "Yield",
            "Increase",
            "Worsen"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table identifies 'Yield' or 'Surrender' as synonyms for 'Capitulate' [28]."
    },
    {
        "question": "What is the antonym of the word 'Frank'?",
        "options": [
            "Candid",
            "Open",
            "Reserved",
            "Subtle"
        ],
        "correctIndex": 2,
        "rationale": "The vocabulary table lists 'Reserved' as the antonym for 'Frank' [28]."
    },
    {
        "question": "What is the synonym of the word 'Recuperate'?",
        "options": [
            "Worsen",
            "Heal",
            "Lessen",
            "Obvious"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table identifies 'Recover' or 'Heal' as synonyms for 'Recuperate' [29]."
    },
    {
        "question": "The idiom 'To have your hands full' means:",
        "options": [
            "To be rich",
            "To be very busy",
            "To be honest",
            "To be an unknown competitor"
        ],
        "correctIndex": 1,
        "rationale": "The idiom section defines 'To have your hands full' as being very busy [29]."
    },
    {
        "question": "The idiom 'A dark horse' refers to:",
        "options": [
            "A person of bad character",
            "An unknown competitor",
            "A very busy person",
            "An honest leader"
        ],
        "correctIndex": 1,
        "rationale": "The idioms section defines 'A dark horse' as an unknown competitor [29]."
    },
    {
        "question": "The idiom 'Above board' means:",
        "options": [
            "Secretive",
            "Honest and transparent",
            "Very rare",
            "To try every means"
        ],
        "correctIndex": 1,
        "rationale": "The idioms section defines 'Above board' as honest and transparent [29]."
    },
    {
        "question": "The idiom 'To leave no stone unturned' means:",
        "options": [
            "To be lazy",
            "To suspect something",
            "To try every possible means",
            "To act rarely"
        ],
        "correctIndex": 2,
        "rationale": "The idioms list identifies 'To leave no stone unturned' as trying every means [29]."
    },
    {
        "question": "What is the one-word substitution for 'one who believes in God'?",
        "options": [
            "Atheist",
            "Theist",
            "Theocracy",
            "Optimist"
        ],
        "correctIndex": 1,
        "rationale": "The English section identifies 'Theist' as one who believes in God [30]."
    },
    {
        "question": "A person who believes the worst is called a:",
        "options": [
            "Optimist",
            "Pessimist",
            "Theist",
            "Centenarian"
        ],
        "correctIndex": 1,
        "rationale": "The substitution list defines a 'Pessimist' as one who believes the worst [30]."
    },
    {
        "question": "Which preposition is correctly paired with 'deprived'?",
        "options": [
            "to",
            "from",
            "of",
            "with"
        ],
        "correctIndex": 2,
        "rationale": "The preposition list identifies 'deprived of' as a frequent usage [30]."
    },
    {
        "question": "Fill in the blank: 'The child is afraid ___ the dark.'",
        "options": [
            "to",
            "with",
            "of",
            "from"
        ],
        "correctIndex": 2,
        "rationale": "The preposition list specifies 'afraid of' [30]."
    },
    {
        "question": "Which of these is the correct preposition to use with 'injurious'?",
        "options": [
            "for",
            "to",
            "with",
            "at"
        ],
        "correctIndex": 1,
        "rationale": "The preposition list specifies 'injurious to' [30]."
    },
    {
        "question": "In English grammar, which verb is correct for: 'The team ___ winning the match'?",
        "options": [
            "is",
            "are",
            "were",
            "be"
        ],
        "correctIndex": 0,
        "rationale": "The grammar section notes that collective nouns are typically singular, e.g., 'The team is...' [31]."
    },
    {
        "question": "What is the specific percentage of Zakat on savings annually as per the 5 Pillars of Islam?",
        "options": [
            "2.0%",
            "2.5%",
            "5.0%",
            "10%"
        ],
        "correctIndex": 1,
        "rationale": "The Arkan-e-Islam section identifies Zakat as '2.5% on savings annually' [18]."
    },
    {
        "question": "On which dates of the Islamic month of Dhul-Hijjah is the Hajj pilgrimage performed?",
        "options": [
            "1st–10th",
            "8th–13th",
            "10th–15th",
            "27th–29th"
        ],
        "correctIndex": 1,
        "rationale": "The Hajj section identifies the dates as 8–13 Dhul-Hijjah [18]."
    },
    {
        "question": "Which of the following is NOT one of the 6 Articles of Faith (Iman-e-Mufassal)?",
        "options": [
            "Belief in Angels",
            "Belief in Prophets",
            "Belief in Hajj",
            "Belief in Qadr"
        ],
        "correctIndex": 2,
        "rationale": "The 6 Articles are listed as Belief in Allah, Angels, Books, Prophets, Day of Judgement, and Qadr. Hajj is a Pillar, not an Article of Faith [18]."
    },
    {
        "question": "How many total 'Para' or 'Juz' are there in the Holy Quran?",
        "options": [
            "30",
            "114",
            "558",
            "6,236"
        ],
        "correctIndex": 0,
        "rationale": "The Quran section identifies 30 Juz/Para [18]."
    },
    {
        "question": "In which cave did the first revelation of the Quran occur in 610 CE?",
        "options": [
            "Cave Saur",
            "Cave Hira",
            "Cave of Seven Sleepers",
            "Cave of Uhud"
        ],
        "correctIndex": 1,
        "rationale": "The revelation section identifies Cave Hira as the site of the first revelation [19]."
    },
    {
        "question": "Who was the first person to compile the Holy Quran on the advice of Hazrat Umar (RA)?",
        "options": [
            "Hazrat Usman (RA)",
            "Hazrat Abu Bakr (RA)",
            "Hazrat Ali (RA)",
            "Hazrat Zaid bin Thabit (RA)"
        ],
        "correctIndex": 1,
        "rationale": "The text states the 'Quran first compiled by Hazrat Abu Bakr (RA) on advice of Hazrat Umar' [19]."
    },
    {
        "question": "At what age did the Prophet Muhammad (PBUH) marry Hazrat Khadija (RA)?",
        "options": [
            "20",
            "25",
            "40",
            "50"
        ],
        "correctIndex": 1,
        "rationale": "The source states his '1st marriage: Hazrat Khadija (RA) at age 25' [20]."
    },
    {
        "question": "The Hijra migration in 622 CE took the Prophet from Makkah to which city?",
        "options": [
            "Taif",
            "Jeddah",
            "Madina",
            "Jerusalem"
        ],
        "correctIndex": 2,
        "rationale": "The source defines Hijra as 'Makkah → Madina' [20]."
    },
    {
        "question": "Which companion of the Prophet is identified as being prominent during the Battle of Khaybar (7 AH)?",
        "options": [
            "Hazrat Abu Bakr (RA)",
            "Hazrat Umar (RA)",
            "Hazrat Ali (RA)",
            "Hazrat Khalid bin Walid (RA)"
        ],
        "correctIndex": 2,
        "rationale": "The battles table identifies Ali (RA) as prominent in the Battle of Khaybar [20]."
    },
    {
        "question": "In computer history, what was the primary technology used in 'Second Generation' computers?",
        "options": [
            "Vacuum tubes",
            "Transistors",
            "Integrated Circuits",
            "Microprocessors"
        ],
        "correctIndex": 1,
        "rationale": "The computer generations section identifies transistors as 2nd generation technology [15]."
    },
    {
        "question": "What is 'firmware' in computer terminology?",
        "options": [
            "Software stored on the Hard Drive",
            "Hardware components only",
            "Software stored on hardware (ROM/BIOS)",
            "Non-volatile RAM"
        ],
        "correctIndex": 2,
        "rationale": "The Fundamentals section defines Firmware as 'software stored on hardware (ROM/BIOS)' [15]."
    },
    {
        "question": "Which of these is NOT an output device?",
        "options": [
            "Monitor",
            "Printer",
            "Projector",
            "Scanner"
        ],
        "correctIndex": 3,
        "rationale": "The I/O section lists Scanner as an input device, while the others are output devices [16]."
    },
    {
        "question": "Which MS Office shortcut key is used for 'Paste'?",
        "options": [
            "Ctrl+P",
            "Ctrl+V",
            "Ctrl+C",
            "Ctrl+X"
        ],
        "correctIndex": 1,
        "rationale": "The shortcuts list identifies Ctrl+V as the key for Paste [16]."
    },
    {
        "question": "What does WWW stand for and who invented it in 1989?",
        "options": [
            "World Wide Web, Vint Cerf",
            "World Wide Web, Tim Berners-Lee",
            "Web World Wide, Bill Gates",
            "Wide World Web, Bob Kahn"
        ],
        "correctIndex": 1,
        "rationale": "The internet section identifies World Wide Web as invented by Tim Berners-Lee in 1989 [17]."
    },
    {
        "question": "In an email address, what represents the portion before the '@' symbol?",
        "options": [
            "Domain name",
            "ISP",
            "Username",
            "URL"
        ],
        "correctIndex": 2,
        "rationale": "The internet section identifies email parts as 'username@domain.com' [17]."
    },
    {
        "question": "What does 'WiFi' stand for according to the common abbreviations list?",
        "options": [
            "Wireless Fiber",
            "Wireless Fidelity",
            "Wide Field",
            "Web Internet Fiber"
        ],
        "correctIndex": 1,
        "rationale": "The abbreviations list defines WiFi as Wireless Fidelity [14]."
    },
    {
        "question": "Which abbreviation stands for 'Arithmetic Logic Unit'?",
        "options": [
            "ALU",
            "CPU",
            "GUI",
            "ISP"
        ],
        "correctIndex": 0,
        "rationale": "The common abbreviations list identifies ALU as Arithmetic Logic Unit [17]."
    },
    {
        "question": "What is the total land area of the province of Sindh?",
        "options": [
            "140,914 km²",
            "881,913 km²",
            "205,344 km²",
            "347,190 km²"
        ],
        "correctIndex": 0,
        "rationale": "The Sindh-specific GK section identifies Sindh's area as 140,914 km² [14]."
    },
    {
        "question": "Which river is identified as the main river of Sindh besides the Indus?",
        "options": [
            "Nara River",
            "Hub River",
            "Malir River",
            "Lyari River"
        ],
        "correctIndex": 1,
        "rationale": "The Sindh GK section lists 'Sindh rivers: Indus (main); Hub' [10]."
    },
    {
        "question": "Which is the National Park located in the Sindh province?",
        "options": [
            "Hingol National Park",
            "Kirthar National Park",
            "Lal Suhanra National Park",
            "Deosai National Park"
        ],
        "correctIndex": 1,
        "rationale": "The Sindh GK section lists 'Sindh national parks: Kirthar' [10]."
    },
    {
        "question": "Who was the famous Sindhi figure who authored the 'Risalo'?",
        "options": [
            "Sachal Sarmast",
            "Shah Abdul Latif Bhittai",
            "Sami",
            "G.M. Syed"
        ],
        "correctIndex": 1,
        "rationale": "The Sindh GK section identifies Shah Abdul Latif Bhittai as the author of 'Risalo' [10]."
    },
    {
        "question": "The Mohenjo-Daro archaeological site is located in which district of Sindh?",
        "options": [
            "Dadu",
            "Thatta",
            "Larkana",
            "Sukkur"
        ],
        "correctIndex": 2,
        "rationale": "The text identifies Mohenjo-Daro as being in the Larkana district [32]."
    },
    {
        "question": "Which body was the first British-Indian legislature to pass the Pakistan Resolution on 3 March 1943?",
        "options": [
            "Punjab Assembly",
            "Sindh Assembly",
            "Bengal Assembly",
            "KP Assembly"
        ],
        "correctIndex": 1,
        "rationale": "The source identifies the Sindh Assembly as the first to pass the resolution on 3 March 1943 [32]."
    },
    {
        "question": "Which lake in Sindh is identified as a bird sanctuary in the Qambar Shahdadkot district?",
        "options": [
            "Manchar Lake",
            "Keenjhar Lake",
            "Hamal Lake",
            "Haleji Lake"
        ],
        "correctIndex": 2,
        "rationale": "The lakes table identifies Hamal Lake as a bird sanctuary in Qambar Shahdadkot [33]."
    },
    {
        "question": "The Deodar (Cedrus deodara) is the national symbol for which category in Pakistan?",
        "options": [
            "National Flower",
            "National Tree",
            "National Bird",
            "National Animal"
        ],
        "correctIndex": 1,
        "rationale": "The symbols table lists Deodar as the National Tree [34]."
    },
    {
        "question": "Which animal is the National Fish of Pakistan?",
        "options": [
            "Indus Dolphin",
            "Mahseer",
            "Mugger Crocodile",
            "Rohu"
        ],
        "correctIndex": 1,
        "rationale": "The national symbols list identifies the 'Mahseer' as the national fish [35]."
    },
    {
        "question": "The 'Pakistan Day' is celebrated on 23 March to commemorate which event?",
        "options": [
            "Independence from Britain",
            "Lahore Resolution (1940)",
            "Assassination of Quaid-e-Azam",
            "End of 1965 War"
        ],
        "correctIndex": 1,
        "rationale": "The symbols and dates section identifies 23 March as Pakistan Day for the 1940 Lahore Resolution [36]."
    },
    {
        "question": "On which date is Pakistan's Air Force Day celebrated?",
        "options": [
            "6 September",
            "7 September",
            "8 September",
            "14 August"
        ],
        "correctIndex": 1,
        "rationale": "The national dates list identifies 7 September as Air Force Day [36]."
    },
    {
        "question": "Which of the following describes 'Hole and corner' policy?",
        "options": [
            "Honest",
            "Secret and underhand",
            "Gradual",
            "Very rare"
        ],
        "correctIndex": 1,
        "rationale": "The idioms section defines 'Hole and corner' as secret or underhand [29]."
    },
    {
        "question": "What is the synonym for the word 'Abate'?",
        "options": [
            "Decrease",
            "Increase",
            "Disobey",
            "Yield"
        ],
        "correctIndex": 0,
        "rationale": "The vocabulary table lists 'Decrease' as the synonym for 'Abate' [28]."
    },
    {
        "question": "The term 'Posthumous' refers to:",
        "options": [
            "One who lives 100 years",
            "A book published after the author's death",
            "A government by religious leaders",
            "A medicine inducing sleep"
        ],
        "correctIndex": 1,
        "rationale": "The substitution list defines 'Posthumous' as a book published after the author's death [30]."
    },
    {
        "question": "Which month of the Islamic calendar is Ramadan?",
        "options": [
            "1st",
            "9th",
            "10th",
            "12th"
        ],
        "correctIndex": 1,
        "rationale": "The Islamic facts section identifies Ramadan as the 9th month [37]."
    },
    {
        "question": "The first mosque of Islam, built in Madina, is called:",
        "options": [
            "Masjid-e-Nabwi",
            "Masjid Quba",
            "Faisal Mosque",
            "Badshahi Mosque"
        ],
        "correctIndex": 1,
        "rationale": "The text identifies 'First Mosque: Quba (Madina)' [37]."
    },
    {
        "question": "Which companion of the Prophet was known for his standardization of the Quran?",
        "options": [
            "Hazrat Abu Bakr",
            "Hazrat Umar",
            "Hazrat Usman Ghani",
            "Hazrat Ali"
        ],
        "correctIndex": 2,
        "rationale": "The Caliphs section specifies Hazrat Usman Ghani standardized the Quran [21]."
    },
    {
        "question": "What is the weight of an average human brain?",
        "options": [
            "~1.0 kg",
            "~1.4 kg",
            "~2.0 kg",
            "~0.5 kg"
        ],
        "correctIndex": 1,
        "rationale": "The human body section states: 'Brain weight: ~1.4 kg' [11]."
    },
    {
        "question": "Which part of the digestive system is responsible for the most absorption?",
        "options": [
            "Stomach",
            "Small intestine",
            "Large intestine",
            "Esophagus"
        ],
        "correctIndex": 1,
        "rationale": "The digestion section states 'Digestion completed in: Small intestine (most absorption)' [11]."
    },
    {
        "question": "Which vitamin aids specifically in 'iron absorption and collagen synthesis'?",
        "options": [
            "Vitamin A",
            "Vitamin B12",
            "Vitamin C",
            "Vitamin K"
        ],
        "correctIndex": 2,
        "rationale": "The vitamins section states 'Vitamin C aids iron absorption & collagen synthesis' [38]."
    },
    {
        "question": "Which planet is closest to the Sun?",
        "options": [
            "Venus",
            "Mars",
            "Mercury",
            "Jupiter"
        ],
        "correctIndex": 2,
        "rationale": "The science facts list 'Mercury – closest to Sun' [13]."
    },
    {
        "question": "What is the tallest peak in the world, with a height of 8,848.86 m?",
        "options": [
            "K2",
            "Mt. Everest",
            "Nanga Parbat",
            "Broad Peak"
        ],
        "correctIndex": 1,
        "rationale": "The geography section identifies Mt. Everest (8,848.86 m) as the highest [39]."
    },
    {
        "question": "Which continent is both the largest by area and by population?",
        "options": [
            "Africa",
            "Asia",
            "North America",
            "Europe"
        ],
        "correctIndex": 1,
        "rationale": "The world geography highlights state: 'Asia largest by area & population' [39]."
    },
    {
        "question": "What is the name of the strait that is a key choke point in world geography?",
        "options": [
            "Strait of Hormuz",
            "Strait of London",
            "Strait of Paris",
            "Strait of Tokyo"
        ],
        "correctIndex": 0,
        "rationale": "The text lists 'Strait of Hormuz' as a key choke point [6]."
    },
    {
        "question": "Which country is nicknamed the 'Land of the Rising Sun'?",
        "options": [
            "Bhutan",
            "Japan",
            "Norway",
            "Korea"
        ],
        "correctIndex": 1,
        "rationale": "The world geography highlights list Japan as 'Land of the Rising Sun' [6]."
    },
    {
        "question": "What is the name of Pakistan's current President who took office on 10 March 2024?",
        "options": [
            "Arif Alvi",
            "Asif Ali Zardari",
            "Shehbaz Sharif",
            "Murad Ali Shah"
        ],
        "correctIndex": 1,
        "rationale": "The political setup section identifies Asif Ali Zardari as President since 10 Mar 2024 [40]."
    },
    {
        "question": "Who was appointed as the country's first Chief of Defence Forces (CDF) on 4 December 2025?",
        "options": [
            "General Sahir Shamshad Mirza",
            "Field Marshal Syed Asim Munir",
            "General Raheel Sharif",
            "General Qamar Javed Bajwa"
        ],
        "correctIndex": 1,
        "rationale": "The guide identifies Field Marshal Syed Asim Munir as the country's first CDF [40]."
    },
    {
        "question": "Pakistan's population reached what figure according to the CCI-approved 2023 Census?",
        "options": [
            "207.7 million",
            "220.9 million",
            "241.49 million",
            "250.1 million"
        ],
        "correctIndex": 2,
        "rationale": "The population section states 'Pakistan's population has increased to 241.49 million' per the 7th Census [41]."
    },
    {
        "question": "Which year did Pakistan first become an Islamic Republic?",
        "options": [
            "1947",
            "1956",
            "1962",
            "1973"
        ],
        "correctIndex": 1,
        "rationale": "The overview states Pakistan has been an 'Islamic Republic since 23 March 1956' [34]."
    },
    {
        "question": "The State Bank of Pakistan was founded on 1 July of which year?",
        "options": [
            "1947",
            "1948",
            "1956",
            "1960"
        ],
        "correctIndex": 1,
        "rationale": "The section on the central bank identifies its founding as 1 July 1948 [34]."
    },
    {
        "question": "Who is the author of the lyrics for Pakistan's National Anthem?",
        "options": [
            "Ahmed G. Chagla",
            "Hafeez Jullundhri",
            "Allama Iqbal",
            "Faiz Ahmed Faiz"
        ],
        "correctIndex": 1,
        "rationale": "The symbols table lists the lyrics as being by Hafeez Jullundhri [42]."
    },
    {
        "question": "What is the national fruit of Pakistan?",
        "options": [
            "Guava",
            "Mango",
            "Orange",
            "Apple"
        ],
        "correctIndex": 1,
        "rationale": "The symbols table lists the Mango as the national fruit [42]."
    },
    {
        "question": "Which bird is designated as the National Bird of Pakistan?",
        "options": [
            "Eagle",
            "Chukar Partridge (Chakor)",
            "Parrot",
            "Peacock"
        ],
        "correctIndex": 1,
        "rationale": "The symbols table lists the Chukar Partridge as the national bird [42]."
    },
    {
        "question": "The national juice of Pakistan is:",
        "options": [
            "Orange Juice",
            "Sugarcane juice",
            "Mango Juice",
            "Apple Juice"
        ],
        "correctIndex": 1,
        "rationale": "The symbols list identifies 'Sugarcane juice (Roh / Ganney ka Ras)' as the national juice [35]."
    },
    {
        "question": "What is the National Dress of Pakistan?",
        "options": [
            "Kurta Pajama",
            "Shalwar Kameez",
            "Sherwani",
            "Dhoti Kurta"
        ],
        "correctIndex": 1,
        "rationale": "The symbols list identifies 'Shalwar Kameez' as the national dress [35]."
    },
    {
        "question": "On which date is the 'Independence Day' of Pakistan celebrated?",
        "options": [
            "23 March",
            "14 August",
            "6 September",
            "25 December"
        ],
        "correctIndex": 1,
        "rationale": "The dates section identifies 14 August as Independence Day [36]."
    },
    {
        "question": "World Health Day is celebrated annually on 7 April, which marks the founding of the WHO in:",
        "options": [
            "1945",
            "1947",
            "1948",
            "1950"
        ],
        "correctIndex": 2,
        "rationale": "The international days section lists 7 April as World Health Day and notes WHO was founded in 1948 [36]."
    },
    {
        "question": "Which international day is observed on 5 June?",
        "options": [
            "World Press Freedom Day",
            "World Environment Day",
            "Labour Day",
            "International Literacy Day"
        ],
        "correctIndex": 1,
        "rationale": "The table identifies 5 June as World Environment Day [22]."
    },
    {
        "question": "The United Nations (UN) was founded on 24 Oct 1945 and is headquartered in:",
        "options": [
            "Geneva",
            "Paris",
            "New York",
            "Washington, D.C."
        ],
        "correctIndex": 2,
        "rationale": "The organizations table identifies New York, USA as the headquarters for the UN [22]."
    },
    {
        "question": "Who is the current (9th) Secretary-General of the UN serving since 2017?",
        "options": [
            "Ban Ki-moon",
            "Kofi Annan",
            "Antonio Guterres",
            "Trygve Lie"
        ],
        "correctIndex": 2,
        "rationale": "The table lists Antonio Guterres as the 9th SG since 2017 [22, 23]."
    },
    {
        "question": "The International Labour Organization (ILO) was founded in which year?",
        "options": [
            "1919",
            "1945",
            "1948",
            "1960"
        ],
        "correctIndex": 0,
        "rationale": "The organizations table identifies 1919 as the founding year for the ILO [23]."
    },
    {
        "question": "The Food and Agriculture Organization (FAO) is headquartered in:",
        "options": [
            "Geneva",
            "Rome",
            "Paris",
            "Montreal"
        ],
        "correctIndex": 1,
        "rationale": "The organizations table identifies Rome, Italy as the HQ for FAO [23]."
    },
    {
        "question": "The Asian Development Bank (ADB) was founded in 1966 and is headquartered in:",
        "options": [
            "Manila",
            "Bangkok",
            "Jakarta",
            "Beijing"
        ],
        "correctIndex": 0,
        "rationale": "The organizations table identifies Manila, Philippines as the HQ for ADB [23]."
    },
    {
        "question": "The SAARC organization is headquartered in which city?",
        "options": [
            "Dhaka",
            "Kathmandu",
            "Islamabad",
            "New Delhi"
        ],
        "correctIndex": 1,
        "rationale": "The organizations table identifies Kathmandu, Nepal as the HQ for SAARC [23]."
    },
    {
        "question": "The North Atlantic Treaty Organization (NATO) was founded in which year?",
        "options": [
            "1945",
            "1949",
            "1955",
            "1993"
        ],
        "correctIndex": 1,
        "rationale": "The table identifies 1949 as the year NATO was founded [24]."
    },
    {
        "question": "In which city is the headquarters of the World Trade Organization (WTO) located?",
        "options": [
            "New York",
            "Geneva",
            "Paris",
            "Brussels"
        ],
        "correctIndex": 1,
        "rationale": "The table identifies Geneva as the HQ for the WTO [24]."
    },
    {
        "question": "Which organization is headquartered in Brussels, Belgium?",
        "options": [
            "UN",
            "NATO",
            "OIC",
            "ADB"
        ],
        "correctIndex": 1,
        "rationale": "The organizations table lists Brussels as the HQ for NATO [24]."
    },
    {
        "question": "The 'Lucknow Pact' (1916) was an agreement between which two parties?",
        "options": [
            "Muslim League and British Gov",
            "Congress and Muslim League",
            "Muslim League and Khilafat Committee",
            "Congress and British Gov"
        ],
        "correctIndex": 1,
        "rationale": "The milestones section identifies the Lucknow Pact (1916) as being between the Congress and the League [25]."
    },
    {
        "question": "The All-India Muslim League was founded on 30 Dec 1906 in which city?",
        "options": [
            "Aligarh",
            "Lucknow",
            "Dhaka",
            "Karachi"
        ],
        "correctIndex": 2,
        "rationale": "The milestones table identifies Dhaka as the founding city of the Muslim League [25]."
    },
    {
        "question": "Who moved the Lahore Resolution (Pakistan Resolution) on 23 March 1940?",
        "options": [
            "Quaid-e-Azam",
            "A.K. Fazl-ul-Huq",
            "Allama Iqbal",
            "Liaquat Ali Khan"
        ],
        "correctIndex": 1,
        "rationale": "The milestones section identifies A.K. Fazl-ul-Huq as the mover of the resolution [26]."
    },
    {
        "question": "The 'Mountbatten Plan' (Partition Plan) was announced on which date in 1947?",
        "options": [
            "23 March",
            "3 June",
            "18 July",
            "14 August"
        ],
        "correctIndex": 1,
        "rationale": "The milestones section identifies 3 June 1947 as the date of the Mountbatten/Partition Plan [26]."
    },
    {
        "question": "On which date was the Indian Independence Act passed by the British Parliament?",
        "options": [
            "3 June 1947",
            "18 July 1947",
            "14 August 1947",
            "15 August 1947"
        ],
        "correctIndex": 1,
        "rationale": "The milestones section identifies 18 July 1947 as the date the act was passed [2]."
    },
    {
        "question": "How many articles were in the 1962 Constitution of Pakistan?",
        "options": [
            "234",
            "250",
            "280",
            "336"
        ],
        "correctIndex": 1,
        "rationale": "The constitution comparison table identifies 250 articles in the 1962 Constitution [2]."
    },
    {
        "question": "The current 1973 Constitution provides for which form of government?",
        "options": [
            "Presidential",
            "Parliamentary",
            "Monarchy",
            "Dictatorship"
        ],
        "correctIndex": 1,
        "rationale": "The comparison table identifies the 1973 Constitution as providing a Parliamentary form of government [2]."
    },
    {
        "question": "How many schedules are in the first Constitution of 1956?",
        "options": [
            "5",
            "6",
            "10",
            "12"
        ],
        "correctIndex": 1,
        "rationale": "The comparison table identifies 6 schedules in the 1956 Constitution [2]."
    },
    {
        "question": "Which constitutional amendment made the Objectives Resolution a substantive part of the constitution?",
        "options": [
            "1st",
            "8th",
            "18th",
            "21st"
        ],
        "correctIndex": 1,
        "rationale": "The constitution section identifies the 8th Amendment (1985) as making the resolution a substantive part [1]."
    },
    {
        "question": "The 1973 Constitution provides for a 'Bicameral' legislature consisting of the National Assembly and the:",
        "options": [
            "Provincial Assembly",
            "Senate",
            "Basic Democrats",
            "Cabinet"
        ],
        "correctIndex": 1,
        "rationale": "The comparison table identifies the 1973 legislature as Bicameral (NA + Senate) [1]."
    },
    {
        "question": "Who was the 1st Prime Minister of Pakistan, assassinated in 1951?",
        "options": [
            "Quaid-e-Azam",
            "Liaquat Ali Khan",
            "Z.A. Bhutto",
            "Chaudhry Muhammad Ali"
        ],
        "correctIndex": 1,
        "rationale": "The personalities section identifies Liaquat Ali Khan as the 1st PM, assassinated on 16 Oct 1951 [3]."
    },
    {
        "question": "The poem 'Bang-e-Dara' was written by which famous figure?",
        "options": [
            "Sir Syed Ahmad Khan",
            "Allama Iqbal",
            "Hafeez Jullundhri",
            "Faiz Ahmed Faiz"
        ],
        "correctIndex": 1,
        "rationale": "The personalities section identifies Allama Iqbal as the author of 'Bang-e-Dara' [3]."
    },
    {
        "question": "Which Sindh personality founded the Sindh Madrasatul Islam in 1885?",
        "options": [
            "G.M. Syed",
            "Sir Hassan Ali Effendi",
            "Shah Abdul Latif Bhittai",
            "Allah Bakhsh Soomro"
        ],
        "correctIndex": 1,
        "rationale": "The Sindh GK section identifies Sir Hassan Ali Effendi as the founder of Sindh Madrasatul Islam [10, 43]."
    },
    {
        "question": "The 'Simla Agreement' of 2 July 1972 was signed by Z.A. Bhutto and which Indian leader?",
        "options": [
            "Jawaharlal Nehru",
            "Lal Bahadur Shastri",
            "Indira Gandhi",
            "Morarji Desai"
        ],
        "correctIndex": 2,
        "rationale": "The treaties section identifies Indira Gandhi as the signatory of the Simla Agreement [44]."
    },
    {
        "question": "Pakistan conducted its first nuclear tests, Chagai-I, on which date?",
        "options": [
            "28 May 1998",
            "30 May 1998",
            "14 August 1998",
            "23 March 1998"
        ],
        "correctIndex": 0,
        "rationale": "The treaties section identifies 28 May 1998 as the date for the 5 tests of Chagai-I [44]."
    },
    {
        "question": "Which vitamin is synthesized in the skin via sunlight?",
        "options": [
            "Vitamin A",
            "Vitamin C",
            "Vitamin D",
            "Vitamin K"
        ],
        "correctIndex": 2,
        "rationale": "The vitamins section states 'Vitamin D is synthesized in skin via sunlight' [38]."
    },
    {
        "question": "What is the largest internal organ of the human body?",
        "options": [
            "Skin",
            "Liver",
            "Lungs",
            "Heart"
        ],
        "correctIndex": 1,
        "rationale": "The human body basics section identifies the liver as the largest internal organ [38]."
    },
    {
        "question": "What is the hardest substance in the human body?",
        "options": [
            "Femur",
            "Tooth enamel",
            "Stapes",
            "Skull"
        ],
        "correctIndex": 1,
        "rationale": "The body basics section identifies 'Tooth enamel' as the hardest substance [38]."
    },
    {
        "question": "The smallest bone in the human body, the Stapes, is located in the:",
        "options": [
            "Hand",
            "Foot",
            "Ear",
            "Spine"
        ],
        "correctIndex": 2,
        "rationale": "The body basics section identifies the 'Stapes (ear)' as the smallest bone [38]."
    },
    {
        "question": "How many bones are typically found in an adult human body?",
        "options": [
            "206",
            "270",
            "300",
            "250"
        ],
        "correctIndex": 0,
        "rationale": "The body basics section identifies 206 bones in an adult [38]."
    },
    {
        "question": "Which side of the human heart is responsible for pumping deoxygenated blood to the lungs?",
        "options": [
            "Left side",
            "Right side",
            "Both sides",
            "Aorta"
        ],
        "correctIndex": 1,
        "rationale": "The heart section states: 'right side pumps deoxygenated blood to lungs' [11]."
    },
    {
        "question": "Sound travels slowest in which medium?",
        "options": [
            "Solids",
            "Liquids",
            "Gases",
            "Vacuum"
        ],
        "correctIndex": 2,
        "rationale": "The science facts state 'Sound travels fastest in solids, slowest in gases' [13]."
    },
    {
        "question": "Which planet in our solar system is known as the 'Red Planet'?",
        "options": [
            "Venus",
            "Mars",
            "Jupiter",
            "Mercury"
        ],
        "correctIndex": 1,
        "rationale": "The science facts identify Mars as the Red Planet [13]."
    },
    {
        "question": "What percentage of the Earth's surface is covered by water?",
        "options": [
            "50%",
            "71%",
            "75%",
            "90%"
        ],
        "correctIndex": 1,
        "rationale": "The science facts section identifies 71% of Earth's surface as water [45]."
    },
    {
        "question": "In mathematics, if a rectangle has a length of 'l' and a width of 'w', its area is:",
        "options": [
            "l + w",
            "l × w",
            "2(l + w)",
            "l²"
        ],
        "correctIndex": 1,
        "rationale": "The math section identifies the area of a rectangle as l × w [46]."
    },
    {
        "question": "The synonym for 'Imperceptible' is:",
        "options": [
            "Obvious",
            "Subtle",
            "Frank",
            "Reserved"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table identifies 'Subtle' as the synonym for 'Imperceptible' [28]."
    },
    {
        "question": "The idiom 'Once in a blue moon' means:",
        "options": [
            "Frequently",
            "Very rarely",
            "During a full moon",
            "Daily"
        ],
        "correctIndex": 1,
        "rationale": "The idioms section defines 'Once in a blue moon' as very rarely [30]."
    },
    {
        "question": "One word for 'a government by religious leaders' is:",
        "options": [
            "Democracy",
            "Theocracy",
            "Autocracy",
            "Theist"
        ],
        "correctIndex": 1,
        "rationale": "The substitution list identifies 'Theocracy' as a government by religious leaders [30]."
    },
    {
        "question": "A medicine that induces sleep is known as a:",
        "options": [
            "Soporific",
            "Antibiotic",
            "Theist",
            "Posthumous"
        ],
        "correctIndex": 0,
        "rationale": "The substitution list defines 'Soporific' as a medicine that induces sleep [30]."
    },
    {
        "question": "According to the study guide, the plural of 'person' is:",
        "options": [
            "Persons",
            "Peoples",
            "People",
            "Persones"
        ],
        "correctIndex": 2,
        "rationale": "The grammar section states: 'Plural of \"person\" → people' [31]."
    },
    {
        "question": "Which of the following is the 5th pillar of Islam?",
        "options": [
            "Salah",
            "Sawm",
            "Zakat",
            "Hajj"
        ],
        "correctIndex": 3,
        "rationale": "The pillars are listed as 1. Shahada, 2. Salah, 3. Zakat, 4. Sawm, 5. Hajj [18, 31]."
    },
    {
        "question": "How many total 'Rukus' are in the Holy Quran?",
        "options": [
            "114",
            "558",
            "6,236",
            "30"
        ],
        "correctIndex": 1,
        "rationale": "The Quran section identifies 558 Rukus [18]."
    },
    {
        "question": "Which Surah of the Quran does NOT begin with 'Bismillah'?",
        "options": [
            "Surah Al-Baqarah",
            "Surah At-Taubah",
            "Surah An-Naml",
            "Surah Al-Alaq"
        ],
        "correctIndex": 1,
        "rationale": "The Quran section identifies Surah At-Taubah (9th) as the Surah without Bismillah [18]."
    },
    {
        "question": "The Prophet Muhammad was born in the 'Year of Elephant' in which city?",
        "options": [
            "Madina",
            "Taif",
            "Makkah",
            "Jeddah"
        ],
        "correctIndex": 2,
        "rationale": "The Prophet's life section identifies his birth in Makkah [19]."
    },
    {
        "question": "Which battle (Ghazwa) was the last one led by the Prophet Muhammad?",
        "options": [
            "Battle of Badr",
            "Battle of Khandaq",
            "Battle of Tabuk",
            "Battle of Hunain"
        ],
        "correctIndex": 2,
        "rationale": "The battles section identifies Tabuk as the last ghazwa [20]."
    },
    {
        "question": "What is the exact elevation of the Khunjerab Pass, which serves as the highest point on the Karakoram Highway?",
        "options": [
            "3,700 m",
            "4,173 m",
            "4,693 m",
            "4,827 m"
        ],
        "correctIndex": 2,
        "rationale": "The Mountain Passes table explicitly lists the Khunjerab Pass at an elevation of 4,693 meters [1, 2]."
    },
    {
        "question": "According to the Survey of Pakistan 2020, what is the length of the Pak-Afghan border?",
        "options": [
            "2,252 km",
            "2,611 km",
            "2,640 km",
            "2,912 km"
        ],
        "correctIndex": 1,
        "rationale": "The 'Borders of Pakistan' table identifies that while Wikipedia uses 2,640 km, the Survey of Pakistan 2020 figure is 2,611 km [3]."
    },
    {
        "question": "On which exact date was the Sino-Pakistan Frontier Agreement signed?",
        "options": [
            "14 August 1947",
            "12 November 1893",
            "2 March 1963",
            "19 September 1960"
        ],
        "correctIndex": 2,
        "rationale": "The table for Pakistan's borders states the Sino-Pak Agreement was signed on 2 March 1963 [1, 3]."
    },
    {
        "question": "Which specific mountain pass connects the Peshawar and Landi Kotal regions to Afghanistan via the Silk Road?",
        "options": [
            "Bolan Pass",
            "Khyber Pass",
            "Gomal Pass",
            "Lowari Pass"
        ],
        "correctIndex": 1,
        "rationale": "The mountain passes table identifies the Khyber Pass as the connection between Peshawar/Landi Kotal and Afghanistan [2]."
    },
    {
        "question": "What is the elevation of the Shandur Pass, famously known as the 'Roof of the World'?",
        "options": [
            "1,070 m",
            "3,118 m",
            "3,700 m",
            "4,300 m"
        ],
        "correctIndex": 2,
        "rationale": "The source identifies Shandur Pass at 3,700 m and notes it is known as the 'Roof of the World' [2]."
    },
    {
        "question": "The Dorah Pass connects Chitral to which specific Afghan province?",
        "options": [
            "Kandahar",
            "Ghazni",
            "Badakhshan",
            "Wakhan"
        ],
        "correctIndex": 2,
        "rationale": "The Mountain Passes table lists the connection for Dorah Pass as Chitral to Badakhshan, Afghanistan [2]."
    },
    {
        "question": "Which pass connects Dera Ismail Khan and Tank to Ghazni in Afghanistan?",
        "options": [
            "Khyber Pass",
            "Bolan Pass",
            "Gomal Pass",
            "Broghil Pass"
        ],
        "correctIndex": 2,
        "rationale": "The Gomal/Gumal Pass is identified as the connector between Dera Ismail Khan/Tank and Ghazni [2]."
    },
    {
        "question": "What is the length of the Jhelum River according to the 'Rivers of Pakistan' table?",
        "options": [
            "725 km",
            "974 km",
            "1,450 km",
            "3,180 km"
        ],
        "correctIndex": 0,
        "rationale": "The rivers table lists the Jhelum River's length as 725 km [4]."
    },
    {
        "question": "Where does the Chenab River join the Sutlej River to form the Panjnad?",
        "options": [
            "Trimmu",
            "Rangpur",
            "Uch Sharif",
            "Mithankot"
        ],
        "correctIndex": 2,
        "rationale": "The source states that the Sutlej meets the Chenab at Panjnad near Uch Sharif [5, 6]."
    },
    {
        "question": "Which river is identified as the origin source of the Sutlej, located in Tibet?",
        "options": [
            "Verinag spring",
            "Bara Lacha Pass",
            "Rakshastal Lake",
            "Beas Kund"
        ],
        "correctIndex": 2,
        "rationale": "The rivers table identifies Rakshastal Lake near Mansarovar, Tibet as the origin of the Sutlej [5]."
    },
    {
        "question": "Under the Indus Waters Treaty of 1960, which specific organization mediated the agreement?",
        "options": [
            "United Nations",
            "IMF",
            "World Bank",
            "OIC"
        ],
        "correctIndex": 2,
        "rationale": "The text states the treaty was signed under World Bank mediation in Karachi [5]."
    },
    {
        "question": "What is the approximate land area of the Thar Desert in Sindh?",
        "options": [
            "175,000 km²",
            "347,190 km²",
            "140,914 km²",
            "881,913 km²"
        ],
        "correctIndex": 0,
        "rationale": "The desert section identifies the Thar Desert as being 175,000 km² [6]."
    },
    {
        "question": "The Chagai-II nuclear test, conducted on 30 May 1998, took place at which location?",
        "options": [
            "Ras Koh",
            "Kharan Desert",
            "Thal Desert",
            "Chagai Hills"
        ],
        "correctIndex": 1,
        "rationale": "The text identifies the Kharan desert in Balochistan as the site of the Chagai-II nuclear test [7, 8]."
    },
    {
        "question": "Which lake is identified as the highest biologically active lake in the world, located in Chitral/Ishkoman?",
        "options": [
            "Rush Lake",
            "Sheosar Lake",
            "Karambar Lake",
            "Ansoo Lake"
        ],
        "correctIndex": 2,
        "rationale": "The lakes table identifies Karambar Lake as 'one of the world's highest biologically active lakes' [9]."
    },
    {
        "question": "What is the elevation of the Sheosar Lake located on the Deosai Plains?",
        "options": [
            "3,224 m",
            "4,142 m",
            "4,694 m",
            "4,827 m"
        ],
        "correctIndex": 1,
        "rationale": "The lakes table lists Sheosar / Shausar Lake at 4,142 m [10]."
    },
    {
        "question": "In which year was the Sukkur Barrage (Lloyd Barrage) completed?",
        "options": [
            "1892",
            "1932",
            "1962",
            "1976"
        ],
        "correctIndex": 1,
        "rationale": "The source states that the Sukkur Barrage was completed in 1932 [9]."
    },
    {
        "question": "Which canal is explicitly mentioned as the longest canal in Pakistan?",
        "options": [
            "Rohri Canal",
            "Nara Canal",
            "Kalri-Baghar Feeder",
            "Upper Chenab Canal"
        ],
        "correctIndex": 1,
        "rationale": "The text states: 'Nara Canal is the longest canal in Pakistan' [9, 11]."
    },
    {
        "question": "What is the estimated irrigation capacity of the Sukkur Barrage in million acres?",
        "options": [
            "3.52 million",
            "7.63 million",
            "10.6 million",
            "875,000"
        ],
        "correctIndex": 1,
        "rationale": "The barrages section notes the Sukkur Barrage irrigates 7.63 million acres [9]."
    },
    {
        "question": "Which barrage is identified as the 'oldest of all', built in 1892 on the Chenab River?",
        "options": [
            "Trimmu Barrage",
            "Khanki Barrage",
            "Sidhnai Barrage",
            "Sukkur Barrage"
        ],
        "correctIndex": 1,
        "rationale": "The text identifies Khanki Barrage (1892) as the oldest of all [11]."
    },
    {
        "question": "According to Britannica (2026), what is the volume of the Tarbela Dam?",
        "options": [
            "875,000 m³",
            "106,000,000 m³",
            "138,600,000 yd³",
            "Both B and C are correct"
        ],
        "correctIndex": 3,
        "rationale": "The source quotes Britannica stating Tarbela is the world's largest by volume at 106,000,000 m³ (138,600,000 yd³) [12]."
    },
    {
        "question": "Islamabad has served as the capital of Pakistan since which specific date?",
        "options": [
            "14 August 1947",
            "23 March 1956",
            "14 August 1967",
            "1 January 1960"
        ],
        "correctIndex": 2,
        "rationale": "The text states Islamabad has been the capital since 14 Aug 1967 [12]."
    },
    {
        "question": "Which city was the capital of Pakistan during the period of 1959–1967?",
        "options": [
            "Karachi",
            "Lahore",
            "Rawalpindi",
            "Peshawar"
        ],
        "correctIndex": 2,
        "rationale": "The Cities section notes Rawalpindi served as the capital from 1959-67 [12]."
    },
    {
        "question": "The height of Mt. Everest was jointly announced as 8,848.86 m on 8 December 2020 by which two countries?",
        "options": [
            "Pakistan and China",
            "India and Nepal",
            "China and Nepal",
            "Pakistan and Nepal"
        ],
        "correctIndex": 2,
        "rationale": "The geography highlights note the joint China-Nepal survey was announced on 8 Dec 2020 [13, 14]."
    },
    {
        "question": "Field Marshal Syed Asim Munir was appointed as the country's first Chief of Defence Forces (CDF) on which date?",
        "options": [
            "20 May 2025",
            "4 December 2025",
            "10 March 2024",
            "13 March 2026"
        ],
        "correctIndex": 1,
        "rationale": "The political setup section confirms he was appointed CDF on 4 December 2025 [15, 16]."
    },
    {
        "question": "On which date was Syed Asim Munir promoted to the rank of Field Marshal?",
        "options": [
            "4 December 2025",
            "20 May 2025",
            "4 March 2024",
            "13 March 2026"
        ],
        "correctIndex": 1,
        "rationale": "The text states he was promoted to Field Marshal on 20 May 2025 [17]."
    },
    {
        "question": "What is the annual population growth rate of Pakistan according to the PBS 7th Census approved in August 2023?",
        "options": [
            "1.55%",
            "2.00%",
            "2.55%",
            "3.10%"
        ],
        "correctIndex": 2,
        "rationale": "The PBS Press Release (August 2023) lists the annual growth rate as 2.55% [18]."
    },
    {
        "question": "The State Bank of Pakistan (SBP) was founded on 1 July 1948 and is headquartered in which city?",
        "options": [
            "Islamabad",
            "Lahore",
            "Karachi",
            "Faisalabad"
        ],
        "correctIndex": 2,
        "rationale": "The text states the SBP was founded 1 July 1948 with HQ in Karachi [18]."
    },
    {
        "question": "In which month and year was Jasmine officially adopted as the National Flower of Pakistan?",
        "options": [
            "August 1947",
            "March 1956",
            "July 1961",
            "September 1948"
        ],
        "correctIndex": 2,
        "rationale": "The National Symbols table lists Jasmine as adopted in July 1961 [18]."
    },
    {
        "question": "Which article of the 1973 Constitution designates Urdu as the National Language of Pakistan?",
        "options": [
            "Article 2",
            "Article 19",
            "Article 25-A",
            "Article 251"
        ],
        "correctIndex": 3,
        "rationale": "The National Language status is under Article 251 of the 1973 Constitution [19]."
    },
    {
        "question": "Who composed the music for the Pakistan National Anthem ('Qaumi Taranah') in 1949?",
        "options": [
            "Hafeez Jullundhri",
            "Ahmed G. Chagla",
            "Allama Iqbal",
            "Faiz Ahmed Faiz"
        ],
        "correctIndex": 1,
        "rationale": "The symbols section identifies Ahmed G. Chagla as the composer of the music (1949) [19]."
    },
    {
        "question": "The Snow Leopard is designated as the 'National Predator' of Pakistan. Which animal is the 'National Predator'?",
        "options": [
            "Markhor",
            "Snow Leopard",
            "Mugger Crocodile",
            "Indus River Dolphin"
        ],
        "correctIndex": 1,
        "rationale": "The National Symbols list explicitly names the Snow Leopard as the 'National Predator' [20]."
    },
    {
        "question": "The 'Sir Creek' dispute involves an estuary of what length between Sindh and Indian Gujarat?",
        "options": [
            "16 km",
            "523 km",
            "96 km",
            "1,046 km"
        ],
        "correctIndex": 2,
        "rationale": "Sir Creek is identified as a 96-km disputed estuary [1]."
    },
    {
        "question": "Which international organization is identified as the 'Oldest UN agency', founded in 1919?",
        "options": [
            "WHO",
            "ITU",
            "ILO",
            "UNESCO"
        ],
        "correctIndex": 2,
        "rationale": "The international organization table lists the ILO (1919) as the oldest UN agency [21]."
    },
    {
        "question": "Who is the current (9th) Secretary-General of the United Nations, serving since 2017?",
        "options": [
            "Trygve Lie",
            "Ban Ki-moon",
            "Antonio Guterres",
            "Ahmed Aboul Gheit"
        ],
        "correctIndex": 2,
        "rationale": "The text lists Antonio Guterres as the 9th SG since 2017 [21]."
    },
    {
        "question": "The Organization of Islamic Cooperation (OIC) was founded in which year and at which location?",
        "options": [
            "1945, New York",
            "1969, Rabat",
            "1975, Jeddah",
            "1985, Dhaka"
        ],
        "correctIndex": 1,
        "rationale": "The OIC was founded on 25 Sep 1969 in Rabat [21, 22]."
    },
    {
        "question": "Where is the headquarters of the Asian Development Bank (ADB) located?",
        "options": [
            "Bangkok",
            "Manila",
            "Jakarta",
            "Beijing"
        ],
        "correctIndex": 1,
        "rationale": "The ADB is headquartered in Manila, Philippines [21]."
    },
    {
        "question": "Which international day is celebrated annually on 7 April to mark the founding of the WHO?",
        "options": [
            "World Environment Day",
            "World Health Day",
            "Labour Day",
            "UN Day"
        ],
        "correctIndex": 1,
        "rationale": "World Health Day is 7 April (WHO founded 1948) [21, 23]."
    },
    {
        "question": "On which date is United Nations (UN) Day observed?",
        "options": [
            "24 August",
            "24 October",
            "10 December",
            "27 December"
        ],
        "correctIndex": 1,
        "rationale": "The table for international days identifies 24 October as UN Day [24]."
    },
    {
        "question": "The 'Simla Deputation' to Viceroy Lord Minto in October 1906 was led by which individual?",
        "options": [
            "Sir Syed Ahmad Khan",
            "Sir Aga Khan III",
            "Nawab Mohsin-ul-Mulk",
            "Quaid-e-Azam"
        ],
        "correctIndex": 1,
        "rationale": "The Pakistan Movement milestones identify Sir Aga Khan III as the leader of the Simla Deputation [25]."
    },
    {
        "question": "In which year did the Lucknow Pact (Congress-League) occur?",
        "options": [
            "1906",
            "1909",
            "1916",
            "1919"
        ],
        "correctIndex": 2,
        "rationale": "The milestones table lists the Lucknow Pact in 1916 [25]."
    },
    {
        "question": "Who moved the Lahore Resolution (Pakistan Resolution) on 23 March 1940?",
        "options": [
            "Allama Iqbal",
            "A.K. Fazl-ul-Huq",
            "Chaudhry Rahmat Ali",
            "Quaid-e-Azam"
        ],
        "correctIndex": 1,
        "rationale": "The Lahore Resolution was moved by A.K. Fazl-ul-Huq (CM of Bengal) [26]."
    },
    {
        "question": "The Indian Independence Act was passed by the British Parliament on which date in 1947?",
        "options": [
            "3 June",
            "18 July",
            "14 August",
            "15 August"
        ],
        "correctIndex": 1,
        "rationale": "The source identifies 18 July 1947 as the date the act was passed [27]."
    },
    {
        "question": "How many articles and schedules were in the first Constitution of Pakistan (1956)?",
        "options": [
            "234 articles, 6 schedules",
            "250 articles, 5 schedules",
            "280 articles, 12 schedules",
            "336 articles, 6 schedules"
        ],
        "correctIndex": 0,
        "rationale": "The constitution comparison table shows the 1956 Constitution had 234 articles and 6 schedules [27]."
    },
    {
        "question": "The 1962 Constitution of Pakistan introduced which form of government?",
        "options": [
            "Parliamentary",
            "Presidential",
            "Monarchy",
            "Unicameral"
        ],
        "correctIndex": 1,
        "rationale": "The comparison table identifies the 1962 form of government as 'Presidential' [27]."
    },
    {
        "question": "Which constitution introduced a 'Bicameral' legislature (National Assembly and Senate) for the first time in Pakistan?",
        "options": [
            "1956 Constitution",
            "1962 Constitution",
            "1973 Constitution",
            "Legal Framework Order"
        ],
        "correctIndex": 2,
        "rationale": "The comparison table identifies the 1973 Constitution as the one that introduced a Bicameral (NA + Senate) legislature [28]."
    },
    {
        "question": "What is the total number of seats in the National Assembly of Pakistan according to the 2026 guide?",
        "options": [
            "272",
            "336",
            "342",
            "446"
        ],
        "correctIndex": 1,
        "rationale": "The source lists the National Assembly as having 336 seats (266 general + 60 women + 10 minorities) [28]."
    },
    {
        "question": "How many seats are currently in the Senate of Pakistan post-2018?",
        "options": [
            "80",
            "96",
            "104",
            "336"
        ],
        "correctIndex": 1,
        "rationale": "The source states: 'Senate: 96 seats (since 2018; was 104)' [28]."
    },
    {
        "question": "The Objectives Resolution was made a substantive part of the 1973 Constitution via which amendment in 1985?",
        "options": [
            "1st Amendment",
            "8th Amendment",
            "13th Amendment",
            "18th Amendment"
        ],
        "correctIndex": 1,
        "rationale": "The text states the Objectives Resolution was made substantive via Article 2-A by the 8th Amendment in 1985 [28, 29]."
    },
    {
        "question": "Article 25-A of the 1973 Constitution deals with which fundamental right?",
        "options": [
            "Freedom of speech",
            "Right to a fair trial",
            "Free & compulsory education (ages 5–16)",
            "Treason laws"
        ],
        "correctIndex": 2,
        "rationale": "Article 25-A is specified as covering 'free & compulsory education 5–16' [29]."
    },
    {
        "question": "Who was the 1st Prime Minister of Pakistan, assassinated on 16 Oct 1951?",
        "options": [
            "Quaid-e-Azam",
            "Liaquat Ali Khan",
            "Z.A. Bhutto",
            "Ayub Khan"
        ],
        "correctIndex": 1,
        "rationale": "Liaquat Ali Khan is identified as the 1st PM, assassinated in Rawalpindi [29]."
    },
    {
        "question": "Sir Hassan Ali Effendi is noted for founding which educational institution in 1885?",
        "options": [
            "Aligarh College",
            "Sindh Madrasatul Islam",
            "Islamia College Peshawar",
            "MAO College"
        ],
        "correctIndex": 1,
        "rationale": "The source notes Sir Hassan Ali Effendi founded Sindh Madrasatul Islam in 1885 [30, 31]."
    },
    {
        "question": "Which Sindh personality presented the Sindh Assembly's Pakistan Resolution on 3 March 1943?",
        "options": [
            "Shah Abdul Latif Bhittai",
            "G.M. Syed",
            "Allah Bakhsh Soomro",
            "Sir Hassan Ali Effendi"
        ],
        "correctIndex": 1,
        "rationale": "The personalities section states G.M. Syed presented the resolution on 3 March 1943 [30, 32]."
    },
    {
        "question": "The 'Simla Agreement' of 2 July 1972 was signed by Z.A. Bhutto and which Indian leader?",
        "options": [
            "Lal Bahadur Shastri",
            "Indira Gandhi",
            "Jawaharlal Nehru",
            "Morarji Desai"
        ],
        "correctIndex": 1,
        "rationale": "The treaties section identifies Indira Gandhi as the signatory of the Simla Agreement [8]."
    },
    {
        "question": "Vitamin A is chemically known as:",
        "options": [
            "Thiamine",
            "Retinol",
            "Riboflavin",
            "Niacin"
        ],
        "correctIndex": 1,
        "rationale": "The vitamins table lists 'Retinol' as the chemical name for Vitamin A [8]."
    },
    {
        "question": "Which vitamin is synthesized in the skin via sunlight and has 'Calcitriol' as its active form?",
        "options": [
            "Vitamin A",
            "Vitamin C",
            "Vitamin D",
            "Vitamin K"
        ],
        "correctIndex": 2,
        "rationale": "The text states Vitamin D is synthesized via sunlight and its active form is Calcitriol [33, 34]."
    },
    {
        "question": "Vitamin C deficiency leads to which specific disease?",
        "options": [
            "Night blindness",
            "Beri-beri",
            "Pellagra",
            "Scurvy"
        ],
        "correctIndex": 3,
        "rationale": "The vitamins table lists Scurvy as the deficiency for Vitamin C [33]."
    },
    {
        "question": "Which vitamin deficiency causes delayed blood clotting or excessive bleeding?",
        "options": [
            "Vitamin E",
            "Vitamin K",
            "Vitamin B12",
            "Vitamin A"
        ],
        "correctIndex": 1,
        "rationale": "The table correlates Vitamin K deficiency with 'Bleeding / delayed blood clotting' [34]."
    },
    {
        "question": "The 'Stapes' is identified as the smallest bone in the human body. Where is it located?",
        "options": [
            "Hand",
            "Foot",
            "Ear",
            "Spine"
        ],
        "correctIndex": 2,
        "rationale": "The human body basics section identifies the 'Stapes (ear)' as the smallest bone [34]."
    },
    {
        "question": "What is the weight of an average human brain as per the study guide?",
        "options": [
            "~1.0 kg",
            "~1.4 kg",
            "~2.0 kg",
            "~0.5 kg"
        ],
        "correctIndex": 1,
        "rationale": "The source identifies the brain weight as approximately 1.4 kg [35]."
    },
    {
        "question": "Which blood group is known as the 'Universal Donor'?",
        "options": [
            "Group A",
            "Group B",
            "Group AB",
            "Group O"
        ],
        "correctIndex": 3,
        "rationale": "The body basics section identifies Blood group O as the universal donor [35]."
    },
    {
        "question": "Insulin is secreted by which specific cells in the pancreas?",
        "options": [
            "Alpha-cells",
            "Beta-cells (β-cells)",
            "Delta-cells",
            "Acini cells"
        ],
        "correctIndex": 1,
        "rationale": "The text specifies insulin is secreted by β-cells of the Islets of Langerhans [35]."
    },
    {
        "question": "In car airbags, which chemical compound releases nitrogen gas during a collision?",
        "options": [
            "Sodium chloride",
            "Sodium azide",
            "Iron oxide",
            "Carbon dioxide"
        ],
        "correctIndex": 1,
        "rationale": "The science facts section identifies Sodium azide (NaN₃) as the compound in airbags [36]."
    },
    {
        "question": "Sound travels fastest in which medium?",
        "options": [
            "Gases",
            "Liquids",
            "Solids",
            "Vacuum"
        ],
        "correctIndex": 2,
        "rationale": "Quick Science Facts state that sound travels fastest in solids and slowest in gases [36]."
    },
    {
        "question": "What is the synonym for the word 'Abate'?",
        "options": [
            "Increase",
            "Decrease",
            "Display",
            "Recover"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table lists 'Decrease' or 'Lessen' as the synonym for 'Abate' [37]."
    },
    {
        "question": "What is the antonym for the word 'Defiance'?",
        "options": [
            "Rebellion",
            "Obedience",
            "Yield",
            "Silent"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table identifies 'Obedience' as the antonym for 'Defiance' [37]."
    },
    {
        "question": "The idiom 'To smell a rat' means:",
        "options": [
            "To be very busy",
            "To suspect something is wrong",
            "To do the right thing",
            "To resemble a parent"
        ],
        "correctIndex": 1,
        "rationale": "The idioms section defines 'Smell a rat' as suspecting something is wrong [38]."
    },
    {
        "question": "What is the one-word substitution for 'a book published after the author's death'?",
        "options": [
            "Posthumous",
            "Soporific",
            "Pedantic",
            "Theist"
        ],
        "correctIndex": 0,
        "rationale": "The substitution list identifies 'Posthumous' as a book published after the author's death [39]."
    },
    {
        "question": "Total number of Surahs and Rukus in the Holy Quran are:",
        "options": [
            "114 Surahs, 558 Rukus",
            "30 Surahs, 666 Rukus",
            "114 Surahs, 6,236 Rukus",
            "86 Surahs, 28 Rukus"
        ],
        "correctIndex": 0,
        "rationale": "The Quran section lists 114 Surahs and 558 Rukus [40]."
    },
    {
        "question": "Which Surah is identified as the 'Shortest Surah' in the Holy Quran?",
        "options": [
            "Al-Alaq",
            "Al-Nasr",
            "Al-Kausar",
            "Al-Fatihah"
        ],
        "correctIndex": 2,
        "rationale": "The Quran section identifies Al-Kausar (3 ayahs) as the shortest [40]."
    },
    {
        "question": "Which companion of the Prophet Muhammad was responsible for the first compilation of the Quran?",
        "options": [
            "Hazrat Umar (RA)",
            "Hazrat Zaid bin Thabit (RA)",
            "Hazrat Usman (RA)",
            "Hazrat Ali (RA)"
        ],
        "correctIndex": 1,
        "rationale": "The text states the Quran was first written/compiled by Hazrat Zaid bin Thabit (RA) under Hazrat Abu Bakr [41]."
    },
    {
        "question": "The 'Battle of Trench' (Khandaq) was fought in which Hijri year?",
        "options": [
            "2 AH",
            "3 AH",
            "5 AH",
            "8 AH"
        ],
        "correctIndex": 2,
        "rationale": "The battles table lists Khandaq / Ahzab as 5 AH [42]."
    },
    {
        "question": "Which companion suggested the digging of a trench during the Battle of Khandaq?",
        "options": [
            "Hazrat Abu Bakr",
            "Hazrat Umar",
            "Hazrat Salman Farsi",
            "Hazrat Ali"
        ],
        "correctIndex": 2,
        "rationale": "The source identifies Salman Farsi (RA) as the one who suggested the trench [42]."
    },
    {
        "question": "Who was the 3rd Rightly Guided Caliph, known for standardizing the Quran into the 'Mushaf-e-Usmani'?",
        "options": [
            "Hazrat Abu Bakr",
            "Hazrat Umar",
            "Hazrat Usman Ghani",
            "Hazrat Ali"
        ],
        "correctIndex": 2,
        "rationale": "The Caliphs section lists Hazrat Usman Ghani as the one who standardized the Quran [43]."
    },
    {
        "question": "In computer generations, what technology was utilized in the 'First Generation'?",
        "options": [
            "Transistors",
            "Integrated Circuits",
            "Vacuum tubes",
            "Microprocessors"
        ],
        "correctIndex": 2,
        "rationale": "The computer generations list identifies Vacuum tubes for the 1st generation [44]."
    },
    {
        "question": "Which shortcut key in MS Office is used for 'Spelling & Grammar check'?",
        "options": [
            "F1",
            "F5",
            "F7",
            "F12"
        ],
        "correctIndex": 2,
        "rationale": "The shortcuts list identifies F7 as the key for Spelling & Grammar check [45]."
    },
    {
        "question": "What does PDF stand for in computer file formats?",
        "options": [
            "Private Digital Format",
            "Portable Document Format",
            "Public Data File",
            "Personal Document Folder"
        ],
        "correctIndex": 1,
        "rationale": "The text identifies PDF as Portable Document Format [46]."
    },
    {
        "question": "Who was sworn in as the Governor of Sindh on 13 March 2026?",
        "options": [
            "Kamran Tessori",
            "Nehal Hashmi",
            "Syed Murad Ali Shah",
            "Zafar Ahmed Rajput"
        ],
        "correctIndex": 1,
        "rationale": "Nehal Hashmi was sworn in as the new Governor of Sindh on 13 March 2026 [47, 48]."
    },
    {
        "question": "What is the highest peak in the province of Sindh, located in the Kirthar Range?",
        "options": [
            "Gorakh Hill",
            "K2",
            "Nanga Parbat",
            "Tirich Mir"
        ],
        "correctIndex": 0,
        "rationale": "The Sindh-specific GK section identifies Gorakh Hill (~1,734 m) as the highest peak [31]."
    },
    {
        "question": "According to the study guide, the 'Goldsmid Line' was demarcated in 1871 for which border?",
        "options": [
            "Pak-Afghan",
            "Pak-China",
            "Pak-Iran",
            "Pak-India"
        ],
        "correctIndex": 2,
        "rationale": "The border table identifies the Goldsmid Line (1871) for the border with Iran [3]."
    },
    {
        "question": "The Lowari Pass, which features a tunnel, connects which two locations?",
        "options": [
            "Peshawar and Landi Kotal",
            "Chitral and Dir",
            "Sibi and Quetta",
            "KP and Gilgit-Baltistan"
        ],
        "correctIndex": 1,
        "rationale": "The Mountain Passes table identifies the Lowari Pass as connecting Chitral and Dir [2]."
    },
    {
        "question": "Which river is often referred to as the 'Chandrabhaga' in its upper reaches before entering Pakistan?",
        "options": [
            "Indus",
            "Jhelum",
            "Chenab",
            "Sutlej"
        ],
        "correctIndex": 2,
        "rationale": "The river table notes Chenab is formed by Chandra + Bhaga, hence called Chandrabhaga [5]."
    },
    {
        "question": "What is the confluence point where the Jhelum River meets the Chenab River?",
        "options": [
            "Trimmu",
            "Rangpur",
            "Panjnad",
            "Mithankot"
        ],
        "correctIndex": 0,
        "rationale": "The rivers table identifies the confluence of Jhelum and Chenab at Trimmu [4]."
    },
    {
        "question": "The Thal Desert is located between which two major rivers in Punjab?",
        "options": [
            "Jhelum and Chenab",
            "Indus and Jhelum",
            "Chenab and Ravi",
            "Ravi and Sutlej"
        ],
        "correctIndex": 1,
        "rationale": "The desert section identifies the Thal desert as being between the Indus and Jhelum [7]."
    },
    {
        "question": "Which lake is identified as the largest natural freshwater lake in South Asia?",
        "options": [
            "Manchar Lake",
            "Keenjhar Lake",
            "Satpara Lake",
            "Attabad Lake"
        ],
        "correctIndex": 0,
        "rationale": "The lakes table identifies Manchar (Dadu/Jamshoro) as the largest natural freshwater lake in Pakistan and South Asia [10]."
    },
    {
        "question": "Keenjhar Lake, a primary water supply for Karachi, is located in which district?",
        "options": [
            "Dadu",
            "Thatta",
            "Larkana",
            "Sukkur"
        ],
        "correctIndex": 1,
        "rationale": "The lakes table lists Keenjhar / Kalri Lake in the Thatta district [10]."
    },
    {
        "question": "Which barrage feeds the Kalri-Baghar Feeder to Keenjhar Lake?",
        "options": [
            "Sukkur Barrage",
            "Guddu Barrage",
            "Kotri Barrage",
            "Trimmu Barrage"
        ],
        "correctIndex": 2,
        "rationale": "The barrages section specifies Kotri Barrage feeds the Kalri-Baghar Feeder [11]."
    },
    {
        "question": "What is the total number of general seats in the current National Assembly of Pakistan?",
        "options": [
            "266",
            "272",
            "336",
            "342"
        ],
        "correctIndex": 0,
        "rationale": "The source identifies the 336 NA seats as 266 general, 60 women, and 10 minorities [28]."
    },
    {
        "question": "Who is currently serving as the 11th Chief of Army Staff and the first-ever Chief of Defence Forces (CDF)?",
        "options": [
            "General Sahir Shamshad Mirza",
            "Field Marshal Syed Asim Munir",
            "General Raheel Sharif",
            "General Qamar Javed Bajwa"
        ],
        "correctIndex": 1,
        "rationale": "The political setup section confirms Field Marshal Syed Asim Munir holds both posts concurrently [15]."
    },
    {
        "question": "On which date was Asif Ali Zardari sworn in for his current term as President of Pakistan?",
        "options": [
            "4 March 2024",
            "10 March 2024",
            "23 March 1956",
            "14 August 1947"
        ],
        "correctIndex": 1,
        "rationale": "The text lists Asif Ali Zardari as President since 10 Mar 2024 [15]."
    },
    {
        "question": "What is the name of the operation after which Syed Asim Munir was promoted to Field Marshal?",
        "options": [
            "Operation Zarb-e-Azb",
            "Operation Bunyan-um-Marsoos",
            "Operation Swift Retort",
            "Operation Radd-ul-Fasaad"
        ],
        "correctIndex": 1,
        "rationale": "He was promoted to Field Marshal on 20 May 2025 after 'Operation Bunyan-um-Marsoos' [17]."
    },
    {
        "question": "Pakistan is the 5th most populous country in the world. What is its official population per the 2023 Census?",
        "options": [
            "207.7 million",
            "220.9 million",
            "241.49 million",
            "250.1 million"
        ],
        "correctIndex": 2,
        "rationale": "The PBS 7th Census figures state the population is 241.49 million [17, 48]."
    },
    {
        "question": "Which national symbol was adopted in July 1961?",
        "options": [
            "National Tree",
            "National Flower (Jasmine)",
            "National Bird",
            "National Animal"
        ],
        "correctIndex": 1,
        "rationale": "The National Symbols table lists Jasmine as adopted in July 1961 [18]."
    },
    {
        "question": "The 'Markhor' is the national animal of Pakistan. What does its name literally mean?",
        "options": [
            "Mountain king",
            "Snake-eater",
            "Snow hunter",
            "Wild goat"
        ],
        "correctIndex": 1,
        "rationale": "The National Symbols table identifies the Markhor as the 'snake-eater' [18]."
    },
    {
        "question": "Which animal is designated as the National Fish of Pakistan?",
        "options": [
            "Indus Dolphin",
            "Mahseer",
            "Rohu",
            "Mugger Crocodile"
        ],
        "correctIndex": 1,
        "rationale": "The National Symbols list identifies the Mahseer as the national fish [20]."
    },
    {
        "question": "What is the national juice of Pakistan?",
        "options": [
            "Mango Juice",
            "Orange Juice",
            "Sugarcane juice",
            "Apple Juice"
        ],
        "correctIndex": 2,
        "rationale": "The symbols list identifies 'Sugarcane juice (Roh / Ganney ka Ras)' as the national juice [20]."
    },
    {
        "question": "The 'Radcliffe Line' was drawn on 17 August 1947 by whom?",
        "options": [
            "Sir Mortimer Durand",
            "Sir Cyril Radcliffe",
            "Sir Frederic Goldsmid",
            "Lord Mountbatten"
        ],
        "correctIndex": 1,
        "rationale": "The border table identifies Sir Cyril Radcliffe as the one who drew the Radcliffe Line on 17 Aug 1947 [3]."
    },
    {
        "question": "On which date is World Health Day celebrated to commemorate the founding of the WHO?",
        "options": [
            "23 March",
            "7 April",
            "1 May",
            "5 June"
        ],
        "correctIndex": 1,
        "rationale": "World Health Day is 7 April [23]."
    },
    {
        "question": "The headquarters of the International Monetary Fund (IMF) and World Bank are located in which city?",
        "options": [
            "New York",
            "Geneva",
            "Washington, D.C.",
            "Paris"
        ],
        "correctIndex": 2,
        "rationale": "Both IMF and World Bank (IBRD) are headquartered in Washington, D.C. [21]."
    },
    {
        "question": "The FAO (Food and Agriculture Organization) is headquartered in which city?",
        "options": [
            "Geneva",
            "Rome",
            "Paris",
            "Montreal"
        ],
        "correctIndex": 1,
        "rationale": "The organization table identifies Rome, Italy as the HQ for FAO [21]."
    },
    {
        "question": "Which international organization is headquartered in Montreal, Canada?",
        "options": [
            "IMF",
            "ICAO",
            "IMO",
            "WMO"
        ],
        "correctIndex": 1,
        "rationale": "The organizations table identifies ICAO as being headquartered in Montreal [21]."
    },
    {
        "question": "The SAARC organization was founded on 8 December 1985 in which city?",
        "options": [
            "Kathmandu",
            "Dhaka",
            "Islamabad",
            "New Delhi"
        ],
        "correctIndex": 1,
        "rationale": "The source identifies Dhaka as the founding city of SAARC (though HQ is in Kathmandu) [21]."
    },
    {
        "question": "Which year did Pakistan become a full member of the Shanghai Cooperation Organization (SCO)?",
        "options": [
            "2001",
            "2008",
            "2017",
            "2023"
        ],
        "correctIndex": 2,
        "rationale": "The SCO entry in the organizations table notes Pakistan became a full member in 2017 [49]."
    },
    {
        "question": "In which city is the headquarters of Transparency International located?",
        "options": [
            "Vienna",
            "Geneva",
            "Berlin",
            "Paris"
        ],
        "correctIndex": 2,
        "rationale": "Transparency International is headquartered in Berlin, Germany [25]."
    },
    {
        "question": "Who presented the '14 Points' in 1929 in response to the Nehru Report?",
        "options": [
            "Allama Iqbal",
            "Quaid-e-Azam",
            "Liaquat Ali Khan",
            "Sir Syed Ahmad Khan"
        ],
        "correctIndex": 1,
        "rationale": "The Pakistan Movement milestones table identifies 1929 as the year of Jinnah's 14 Points [26]."
    },
    {
        "question": "Chaudhry Rahmat Ali coined the name 'Pakistan' in which specific pamphlet in 1933?",
        "options": [
            "The Myth of Independence",
            "Now or Never",
            "Tehzeeb-ul-Akhlaq",
            "Asar-us-Sanadid"
        ],
        "correctIndex": 1,
        "rationale": "The milestones section identifies the 'Now or Never' pamphlet as the source of the name [26, 29]."
    },
    {
        "question": "The 'Mountbatten Plan' (Partition Plan) was announced on which date?",
        "options": [
            "23 March 1940",
            "3 June 1947",
            "18 July 1947",
            "14 August 1947"
        ],
        "correctIndex": 1,
        "rationale": "The source identifies 3 June 1947 as the date of the Mountbatten/Partition Plan [26]."
    },
    {
        "question": "Who was the Prime Minister of Pakistan when the 1956 Constitution was enforced?",
        "options": [
            "Liaquat Ali Khan",
            "Chaudhry Muhammad Ali",
            "Huseyn Shaheed Suhrawardy",
            "I.I. Chundrigar"
        ],
        "correctIndex": 1,
        "rationale": "The constitution table identifies PM Chaudhry Muhammad Ali as the one who promulgated/enforced the 1956 Constitution [27]."
    },
    {
        "question": "Which constitution changed the country's name to 'Republic of Pakistan' before restoring 'Islamic' in 1963?",
        "options": [
            "1956 Constitution",
            "1962 Constitution",
            "1973 Constitution",
            "None"
        ],
        "correctIndex": 1,
        "rationale": "The constitution table identifies the 1962 Constitution as the one that used 'Republic of Pakistan' initially [28]."
    },
    {
        "question": "How many schedules are included in the current 1973 Constitution?",
        "options": [
            "5",
            "6",
            "10",
            "12"
        ],
        "correctIndex": 3,
        "rationale": "The comparison table lists 12 schedules for the 1973 Constitution [27]."
    },
    {
        "question": "Which constitutional article deals with the offense of 'treason'?",
        "options": [
            "Article 2",
            "Article 6",
            "Article 19",
            "Article 25-A"
        ],
        "correctIndex": 1,
        "rationale": "The source identifies Article 6 as the article for treason [29]."
    },
    {
        "question": "The book 'Daughter of the East' is the autobiography of which Pakistani leader?",
        "options": [
            "Fatima Jinnah",
            "Benazir Bhutto",
            "Begum Rana Liaquat Ali",
            "Malala Yousafzai"
        ],
        "correctIndex": 1,
        "rationale": "The corrigenda section notes 'Daughter of the East' is Benazir Bhutto's autobiography [16]."
    },
    {
        "question": "The Tashkent Declaration, which ended the 1965 war, was signed on which date?",
        "options": [
            "6 September 1965",
            "10 January 1966",
            "2 July 1972",
            "14 August 1973"
        ],
        "correctIndex": 1,
        "rationale": "The treaties section lists the Tashkent Declaration date as 10 Jan 1966 [30]."
    },
    {
        "question": "Vitamin B3 is chemically known as:",
        "options": [
            "Thiamine",
            "Riboflavin",
            "Niacin",
            "Pyridoxine"
        ],
        "correctIndex": 2,
        "rationale": "The vitamins table identifies Vitamin B3 as Niacin [33]."
    },
    {
        "question": "A deficiency in Vitamin B1 (Thiamine) primarily causes which disease?",
        "options": [
            "Beri-beri",
            "Pellagra",
            "Scurvy",
            "Rickets"
        ],
        "correctIndex": 0,
        "rationale": "The vitamins table correlates Vitamin B1 deficiency with Beri-beri [8]."
    },
    {
        "question": "Which vitamin is also known as 'Tocopherol' and its deficiency can lead to sterility?",
        "options": [
            "Vitamin A",
            "Vitamin E",
            "Vitamin D",
            "Vitamin K"
        ],
        "correctIndex": 1,
        "rationale": "The vitamins table identifies Vitamin E as Tocopherol and notes its deficiency relates to sterility [33]."
    },
    {
        "question": "What is the hardest substance in the human body?",
        "options": [
            "Femur bone",
            "Skull",
            "Tooth enamel",
            "Stapes"
        ],
        "correctIndex": 2,
        "rationale": "The body basics section explicitly states the hardest substance is 'Tooth enamel' [34]."
    },
    {
        "question": "How many bones are typically found in a newborn baby?",
        "options": [
            "206",
            "250",
            "270",
            "300"
        ],
        "correctIndex": 2,
        "rationale": "The body basics section identifies a newborn as having 270 bones [34]."
    },
    {
        "question": "Which blood group is identified as the 'Universal Recipient'?",
        "options": [
            "Group A",
            "Group B",
            "Group AB",
            "Group O"
        ],
        "correctIndex": 2,
        "rationale": "The body basics section identifies Group AB as the universal recipient [35]."
    },
    {
        "question": "Which part of the human brain is responsible for balance and coordination?",
        "options": [
            "Cerebrum",
            "Cerebellum",
            "Medulla",
            "Hypothalamus"
        ],
        "correctIndex": 1,
        "rationale": "The heart/brain section specifies: 'cerebellum = balance' [35]."
    },
    {
        "question": "The 'Light year' is a unit used to measure what?",
        "options": [
            "Time",
            "Light intensity",
            "Distance",
            "Speed"
        ],
        "correctIndex": 2,
        "rationale": "Quick Science Facts state: 'Light year = unit of distance' [36]."
    },
    {
        "question": "The blue color of the sky is caused by which scientific phenomenon?",
        "options": [
            "Reflection",
            "Refraction",
            "Rayleigh scattering",
            "Diffraction"
        ],
        "correctIndex": 2,
        "rationale": "The science section identifies 'Rayleigh scattering' as the cause of the blue sky [36]."
    },
    {
        "question": "Which gas is commonly used in soft drinks for carbonation?",
        "options": [
            "Oxygen",
            "Nitrogen",
            "Carbon dioxide (CO₂)",
            "Hydrogen"
        ],
        "correctIndex": 2,
        "rationale": "Quick Science Facts state: 'Soft drinks contain CO₂' [36]."
    },
    {
        "question": "Which planet in the solar system is known as the 'Red Planet'?",
        "options": [
            "Mercury",
            "Venus",
            "Mars",
            "Jupiter"
        ],
        "correctIndex": 2,
        "rationale": "The science facts identify Mars as the 'Red Planet' [36]."
    },
    {
        "question": "In mathematics, if x:y = 2:3 and y:z = 4:5, what is the ratio of x:z?",
        "options": [
            "2:5",
            "8:15",
            "6:15",
            "8:10"
        ],
        "correctIndex": 1,
        "rationale": "The math section provides this specific example: (2*4):(3*5) = 8:15 [50]."
    },
    {
        "question": "What is the next number in the series: 1, 5, 11, 19, 29, ...?",
        "options": [
            "35",
            "39",
            "41",
            "45"
        ],
        "correctIndex": 2,
        "rationale": "The math section explains the differences are 4, 6, 8, 10, so the next difference is 12; 29 + 12 = 41 [50]."
    },
    {
        "question": "What is the synonym for the word 'Imperceptible'?",
        "options": [
            "Obvious",
            "Subtle",
            "Frank",
            "Silent"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table identifies 'Subtle' as the synonym for 'Imperceptible' [37]."
    },
    {
        "question": "What is the synonym for the word 'Candid'?",
        "options": [
            "Reserved",
            "Frank",
            "Silent",
            "Subtle"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table lists 'Frank' and 'Open' as synonyms for 'Candid' [37]."
    },
    {
        "question": "The idiom 'A chip off the old block' refers to someone who:",
        "options": [
            "Is an unknown competitor",
            "Resembles their parent",
            "Is very busy",
            "Is honest and transparent"
        ],
        "correctIndex": 1,
        "rationale": "The idiom section defines 'A chip off the old block' as someone who resembles their parent [38]."
    },
    {
        "question": "What is the one-word substitution for 'one who lives 100 years'?",
        "options": [
            "Theist",
            "Centenarian",
            "Posthumous",
            "Soporific"
        ],
        "correctIndex": 1,
        "rationale": "The substitution list defines a 'Centenarian' as one who lives 100 years [39]."
    },
    {
        "question": "A medicine that induces sleep is known as a:",
        "options": [
            "Soporific",
            "Pedantic",
            "Reticent",
            "Posthumous"
        ],
        "correctIndex": 0,
        "rationale": "The substitution list defines 'Soporific' as a medicine that induces sleep [39]."
    },
    {
        "question": "According to the study guide, the plural of 'person' is:",
        "options": [
            "Persons",
            "Peoples",
            "People",
            "Persones"
        ],
        "correctIndex": 2,
        "rationale": "The grammar section explicitly notes: 'Plural of \"person\" → people' [51]."
    },
    {
        "question": "What is the percentage of Zakat required on savings annually as per the 5 Pillars of Islam?",
        "options": [
            "1.5%",
            "2.0%",
            "2.5%",
            "5.0%"
        ],
        "correctIndex": 2,
        "rationale": "The Arkan-e-Islam section identifies Zakat as 2.5% on savings annually [40]."
    },
    {
        "question": "Which Surah of the Quran is known as the 'Longest Surah'?",
        "options": [
            "Al-Imran",
            "Al-Baqarah",
            "An-Nisa",
            "Al-Maidah"
        ],
        "correctIndex": 1,
        "rationale": "The Quran section lists Al-Baqarah (286 ayahs) as the longest [40]."
    },
    {
        "question": "Which Surah does not begin with 'Bismillah'?",
        "options": [
            "Surah Al-Baqarah",
            "Surah At-Taubah",
            "Surah An-Naml",
            "Surah Al-Nasr"
        ],
        "correctIndex": 1,
        "rationale": "The Quran section identifies Surah At-Taubah (9th) as the one without Bismillah [40]."
    },
    {
        "question": "On which exact date was the Prophet Muhammad born in Makkah?",
        "options": [
            "12 Rabi-ul-Awwal, 571 CE",
            "12 Rabi-ul-Awwal, 610 CE",
            "10 Dhul-Hijjah, 622 CE",
            "17 Ramadan, 2 AH"
        ],
        "correctIndex": 0,
        "rationale": "The Prophet's life events list his birth on 12 Rabi-ul-Awwal, 571 CE [41]."
    },
    {
        "question": "The 'Hijra' migration from Makkah to Madina occurred in which year?",
        "options": [
            "571 CE",
            "610 CE",
            "622 CE",
            "632 CE"
        ],
        "correctIndex": 2,
        "rationale": "The text identifies 622 CE as the year of the Hijra [42]."
    },
    {
        "question": "In the Battle of Badr (2 AH), what was the strength of the Muslim army compared to the Quraish?",
        "options": [
            "1,000 vs 3,000",
            "313 vs 1,000",
            "1,500 vs 5,000",
            "700 vs 1,000"
        ],
        "correctIndex": 1,
        "rationale": "The battle table identifies Badr as 313 Muslims vs 1,000 Quraish [42]."
    },
    {
        "question": "Which ghazwa was the last one led by the Prophet Muhammad?",
        "options": [
            "Battle of Uhud",
            "Battle of Khandaq",
            "Battle of Hunain",
            "Battle of Tabuk"
        ],
        "correctIndex": 3,
        "rationale": "The battle list identifies Tabuk (9 AH) as the last ghazwa [42]."
    },
    {
        "question": "The Islamic/Hijri calendar was started during the caliphate of which ruler?",
        "options": [
            "Hazrat Abu Bakr",
            "Hazrat Umar Farooq",
            "Hazrat Usman Ghani",
            "Hazrat Ali"
        ],
        "correctIndex": 1,
        "rationale": "The caliphs section states Hazrat Umar Farooq started the Islamic calendar [43]."
    },
    {
        "question": "Who is considered the 'Father of Computer'?",
        "options": [
            "Charles Babbage",
            "Vint Cerf",
            "Tim Berners-Lee",
            "Bill Gates"
        ],
        "correctIndex": 0,
        "rationale": "The IT fundamentals section identifies Charles Babbage as the Father of Computer [44]."
    },
    {
        "question": "One Kilobyte (KB) is equal to how many bytes?",
        "options": [
            "1,000 bytes",
            "1,024 bytes",
            "8 bytes",
            "1,024 bits"
        ],
        "correctIndex": 1,
        "rationale": "The memory units section identifies 1 KB = 1,024 bytes [45]."
    },
    {
        "question": "In MS Office, which shortcut key is used for the 'Save As' command?",
        "options": [
            "F1",
            "F2",
            "F5",
            "F12"
        ],
        "correctIndex": 3,
        "rationale": "The shortcut list identifies F12 as 'Save As' [45]."
    },
    {
        "question": "Who is the current Chief Minister (CM) of Sindh as of 2026?",
        "options": [
            "Kamran Tessori",
            "Nehal Hashmi",
            "Syed Murad Ali Shah",
            "Zafar Ahmed Rajput"
        ],
        "correctIndex": 2,
        "rationale": "The Sindh-specific section identifies Syed Murad Ali Shah as the CM [47, 52]."
    },
    {
        "question": "How many administrative divisions are there in the province of Sindh?",
        "options": [
            "3",
            "5",
            "7",
            "10"
        ],
        "correctIndex": 2,
        "rationale": "The Sindh GK section lists 7 divisions [31]."
    },
    {
        "question": "Which division was recently included in Sindh's administrative divisions list along with Banbhore?",
        "options": [
            "Dadu",
            "Thatta",
            "Shaheed Benazirabad",
            "Jamshoro"
        ],
        "correctIndex": 2,
        "rationale": "The 7 divisions listed include Shaheed Benazirabad and Banbhore [31]."
    },
    {
        "question": "What is the total land area of the province of Sindh?",
        "options": [
            "140,914 km²",
            "347,190 km²",
            "881,913 km²",
            "205,344 km²"
        ],
        "correctIndex": 0,
        "rationale": "The Sindh GK section identifies Sindh's area as 140,914 km² [47]."
    },
    {
        "question": "The Mohenjo-Daro archaeological site is located in which district of Sindh?",
        "options": [
            "Dadu",
            "Thatta",
            "Larkana",
            "Sukkur"
        ],
        "correctIndex": 2,
        "rationale": "The text identifies Mohenjo-Daro as being in the Larkana district [13, 32]."
    },
    {
        "question": "Which Sindh city was the first to pass the Pakistan Resolution in its assembly on 3 March 1943?",
        "options": [
            "Karachi",
            "Hyderabad",
            "Sukkur",
            "Not a city; the Sindh Assembly"
        ],
        "correctIndex": 3,
        "rationale": "The Sindh Assembly was the first legislature to pass the resolution on 3 March 1943 [32]."
    },
    {
        "question": "What is the width of the Wakhan Corridor which separates Pakistan from Tajikistan?",
        "options": [
            "10 km",
            "16 km",
            "24 km",
            "96 km"
        ],
        "correctIndex": 1,
        "rationale": "The geography section identifies the Wakhan Corridor as approximately 16 km wide [3]."
    },
    {
        "question": "The Bolan Pass is located within which mountain range?",
        "options": [
            "Himalayas",
            "Karakoram",
            "Toba Kakar range",
            "Kirthar range"
        ],
        "correctIndex": 2,
        "rationale": "The Mountain Passes table identifies the Bolan Pass as being in the Toba Kakar range [2]."
    },
    {
        "question": "Which river joins the Chenab River at the confluence point of Trimmu?",
        "options": [
            "Indus",
            "Jhelum",
            "Ravi",
            "Sutlej"
        ],
        "correctIndex": 1,
        "rationale": "The river table lists the Jhelum as joining the Chenab at Trimmu [4]."
    },
    {
        "question": "The Ravi River enters Pakistan and eventually joins the Chenab near which location?",
        "options": [
            "Trimmu",
            "Rangpur",
            "Panjnad",
            "Uch Sharif"
        ],
        "correctIndex": 1,
        "rationale": "The river table identifies Rangpur as the point where the Ravi joins the Chenab [5]."
    },
    {
        "question": "According to the barrages section, which barrage is the oldest, built in 1892?",
        "options": [
            "Sukkur",
            "Khanki",
            "Guddu",
            "Kotri"
        ],
        "correctIndex": 1,
        "rationale": "Khanki Barrage (1892) is identified as the oldest [11]."
    },
    {
        "question": "Which barrage is located in Sindh and was completed in 1962?",
        "options": [
            "Sukkur Barrage",
            "Guddu Barrage",
            "Kotri Barrage",
            "Trimmu Barrage"
        ],
        "correctIndex": 1,
        "rationale": "The source identifies Guddu Barrage as being completed in 1962 [11]."
    },
    {
        "question": "What is the capacity of the Kotri Barrage mentioned in the guide?",
        "options": [
            "500,000 cusecs",
            "875,000 cusecs",
            "1.2 million cusecs",
            "2 million cusecs"
        ],
        "correctIndex": 1,
        "rationale": "The Kotri Barrage is listed with a capacity of ~875,000 cusecs [11]."
    },
    {
        "question": "Which continent is identified as the 'driest & windiest' in the world?",
        "options": [
            "Africa",
            "Asia",
            "Antarctica",
            "Australia"
        ],
        "correctIndex": 2,
        "rationale": "The world geography highlights identify Antarctica as the driest and windiest continent [13]."
    },
    {
        "question": "Which city is nicknamed the 'City of Flowers' in Pakistan?",
        "options": [
            "Karachi",
            "Lahore",
            "Peshawar",
            "Quetta"
        ],
        "correctIndex": 2,
        "rationale": "The cities section describes Peshawar as the 'City of Flowers' [13]."
    },
    {
        "question": "Asif Ali Zardari serves as which number of President of Pakistan in his current term starting in 2024?",
        "options": [
            "11th",
            "12th",
            "13th",
            "14th"
        ],
        "correctIndex": 3,
        "rationale": "While the exact number isn't in the snippet, he was sworn in on 10 Mar 2024; historically, he is the 14th President. Note: The text confirms his appointment date of 10 Mar 2024 [15]."
    },
    {
        "question": "The 7th Population & Housing Census was approved by the CCI on which exact date?",
        "options": [
            "14 August 2023",
            "5 August 2023",
            "1 July 2023",
            "28 May 2023"
        ],
        "correctIndex": 1,
        "rationale": "The population section identifies 5 August 2023 as the CCI approval date for the 7th Census [17]."
    },
    {
        "question": "What is the official currency of Pakistan?",
        "options": [
            "Pakistani Dinar",
            "Pakistani Rupee (PKR)",
            "Pakistani Rial",
            "Pakistani Dollar"
        ],
        "correctIndex": 1,
        "rationale": "The general overview lists the currency as the Pakistani Rupee (PKR) [18]."
    },
    {
        "question": "Which national symbol of Pakistan is also known by the scientific name 'Cedrus deodara'?",
        "options": [
            "National Flower",
            "National Tree (Deodar)",
            "National Bird",
            "National Animal"
        ],
        "correctIndex": 1,
        "rationale": "The National Symbols table lists Deodar (Cedrus deodara) as the national tree [18]."
    },
    {
        "question": "The Chukar Partridge (Chakor) is designated as which national symbol?",
        "options": [
            "National Animal",
            "National Bird",
            "National Fish",
            "National Predator"
        ],
        "correctIndex": 1,
        "rationale": "The table lists Chukar Partridge (Chakor) as the National Bird [19]."
    },
    {
        "question": "Which animal is designated as the 'National Aquatic Mammal' of Pakistan?",
        "options": [
            "Mahseer",
            "Indus River Dolphin (Bhulan)",
            "Mugger Crocodile",
            "Snow Leopard"
        ],
        "correctIndex": 1,
        "rationale": "The symbols list identifies the Indus River Dolphin (Bhulan) as the National Aquatic Mammal [20]."
    },
    {
        "question": "What are the official colors of the Pakistan national flag?",
        "options": [
            "Green and White",
            "Dark Green and White",
            "Green, White, and Red",
            "Dark Green, White, and Yellow"
        ],
        "correctIndex": 1,
        "rationale": "The symbols list identifies the colors as 'Dark Green & White' [20]."
    },
    {
        "question": "On which date is 'Defence Day' celebrated in Pakistan?",
        "options": [
            "23 March",
            "14 August",
            "6 September",
            "25 December"
        ],
        "correctIndex": 2,
        "rationale": "Defence Day is celebrated on 6 September [23]."
    },
    {
        "question": "International Mother Earth Day is observed every year on which date?",
        "options": [
            "22 March",
            "7 April",
            "22 April",
            "5 June"
        ],
        "correctIndex": 2,
        "rationale": "The international days table lists 22 April as International Mother Earth Day [23]."
    },
    {
        "question": "World Environment Day is observed on which date?",
        "options": [
            "1 May",
            "5 June",
            "11 July",
            "24 October"
        ],
        "correctIndex": 1,
        "rationale": "World Environment Day is observed on 5 June [24]."
    },
    {
        "question": "International Literacy Day is observed on which date?",
        "options": [
            "14 August",
            "8 September",
            "5 October",
            "10 December"
        ],
        "correctIndex": 1,
        "rationale": "The table identifies 8 September as International Literacy Day [24]."
    },
    {
        "question": "Which international organization is headquartered in Rome, Italy?",
        "options": [
            "WHO",
            "UNESCO",
            "ILO",
            "FAO"
        ],
        "correctIndex": 3,
        "rationale": "The organization table identifies Rome as the HQ for FAO [21]."
    },
    {
        "question": "In which city is the headquarters of UNESCO located?",
        "options": [
            "New York",
            "London",
            "Paris",
            "Geneva"
        ],
        "correctIndex": 2,
        "rationale": "UNESCO is headquartered in Paris, France [21]."
    },
    {
        "question": "The World Intellectual Property Organization (WIPO) is headquartered in which city?",
        "options": [
            "Paris",
            "Rome",
            "Geneva",
            "London"
        ],
        "correctIndex": 2,
        "rationale": "The organizations table identifies Geneva as the headquarters for WIPO [21]."
    },
    {
        "question": "NATO (North Atlantic Treaty Organization) was founded on which date and is headquartered where?",
        "options": [
            "1945, New York",
            "1949, Brussels",
            "1960, Vienna",
            "1995, Geneva"
        ],
        "correctIndex": 1,
        "rationale": "NATO was founded on 4 Apr 1949 and is based in Brussels, Belgium [49]."
    },
    {
        "question": "Which organization is headquartered in Vienna, Austria?",
        "options": [
            "UN",
            "WTO",
            "OPEC",
            "OIC"
        ],
        "correctIndex": 2,
        "rationale": "The organization table identifies OPEC (1960) as headquartered in Vienna [49]."
    },
    {
        "question": "The European Union (EU) was established by which treaty in 1993?",
        "options": [
            "Treaty of Versailles",
            "Maastricht Treaty",
            "Simla Agreement",
            "Lucknow Pact"
        ],
        "correctIndex": 1,
        "rationale": "The organization table identifies 1993 (Maastricht) as the establishing date/treaty for the EU [49]."
    },
    {
        "question": "Who was the Viceroy during the Simla Deputation in October 1906?",
        "options": [
            "Lord Curzon",
            "Lord Minto",
            "Lord Wavell",
            "Lord Mountbatten"
        ],
        "correctIndex": 1,
        "rationale": "The milestones section identifies the Simla Deputation was to Viceroy Lord Minto [25]."
    },
    {
        "question": "In which year did the Jallianwala Bagh massacre occur?",
        "options": [
            "1909",
            "1916",
            "1919",
            "1920"
        ],
        "correctIndex": 2,
        "rationale": "The milestones table identifies 1919 as the year for Jallianwala Bagh [25]."
    },
    {
        "question": "Who coin the term 'Pakistan' and what was the year?",
        "options": [
            "Allama Iqbal, 1930",
            "Chaudhry Rahmat Ali, 1933",
            "Quaid-e-Azam, 1940",
            "Sir Syed Ahmad Khan, 1875"
        ],
        "correctIndex": 1,
        "rationale": "Chaudhry Rahmat Ali coined the term 'Pakistan' in 1933 [26]."
    },
    {
        "question": "The 'Direct Action Day' was observed on which date in 1946?",
        "options": [
            "23 March",
            "3 June",
            "16 August",
            "11 September"
        ],
        "correctIndex": 2,
        "rationale": "The milestones table identifies 16 Aug 1946 as Direct Action Day [26]."
    },
    {
        "question": "Which constitution of Pakistan provided for a 'Presidential' form of government?",
        "options": [
            "1956 Constitution",
            "1962 Constitution",
            "1973 Constitution",
            "All of the above"
        ],
        "correctIndex": 1,
        "rationale": "The comparison table identifies only the 1962 Constitution as Presidential [27]."
    },
    {
        "question": "How many articles are in the current 1973 Constitution of Pakistan?",
        "options": [
            "234",
            "250",
            "280",
            "336"
        ],
        "correctIndex": 2,
        "rationale": "The constitution comparison table lists 280 articles for the 1973 Constitution [27]."
    },
    {
        "question": "Which constitution introduced a 'Unicameral' legislature?",
        "options": [
            "1956 only",
            "1962 only",
            "Both 1956 and 1962",
            "1973"
        ],
        "correctIndex": 2,
        "rationale": "The comparison table identifies both 1956 and 1962 as Unicameral, while 1973 is Bicameral [28]."
    },
    {
        "question": "The 1973 Constitution of Pakistan designates Islam as the state religion in which article?",
        "options": [
            "Article 2",
            "Article 6",
            "Article 19",
            "Article 251"
        ],
        "correctIndex": 0,
        "rationale": "The text identifies Article 2 as 'Islam is the state religion' [29]."
    },
    {
        "question": "Who served as the 1st Governor-General of Pakistan?",
        "options": [
            "Liaquat Ali Khan",
            "Quaid-e-Azam M.A. Jinnah",
            "Khawaja Nazimuddin",
            "Lord Mountbatten"
        ],
        "correctIndex": 1,
        "rationale": "Quaid-e-Azam was the 1st Governor-General [29]."
    },
    {
        "question": "Fatima Jinnah, known as Madar-e-Millat, contested the 1965 election against which leader?",
        "options": [
            "Z.A. Bhutto",
            "Ayub Khan",
            "Yahya Khan",
            "Liaquat Ali Khan"
        ],
        "correctIndex": 1,
        "rationale": "The personalities section identifies that she contested the 1965 election against Ayub Khan [30]."
    },
    {
        "question": "Who authored the famous Sindhi poetic work 'Risalo'?",
        "options": [
            "Sachal Sarmast",
            "Sami",
            "Shah Abdul Latif Bhittai",
            "Hassan Ali Effendi"
        ],
        "correctIndex": 2,
        "rationale": "The personalities section identifies Shah Abdul Latif Bhittai as the author of the 'Risalo' [30, 31]."
    },
    {
        "question": "The first indigenous Pakistani aircraft is identified as:",
        "options": [
            "F-16",
            "JF-17 Thunder",
            "Mushshak",
            "Mirage"
        ],
        "correctIndex": 1,
        "rationale": "The past paper snapshot identifies JF-17 Thunder as the first Pakistani indigenous aircraft [4, 53]."
    },
    {
        "question": "Vitamin B2 is chemically known as:",
        "options": [
            "Thiamine",
            "Riboflavin",
            "Niacin",
            "Pyridoxine"
        ],
        "correctIndex": 1,
        "rationale": "The vitamins table identifies Vitamin B2 as Riboflavin [33]."
    },
    {
        "question": "Vitamin B9 is also known as:",
        "options": [
            "Biotin",
            "Folic acid",
            "Cobalamin",
            "Niacin"
        ],
        "correctIndex": 1,
        "rationale": "The vitamins table lists 'Folic acid' as Vitamin B9 [33]."
    },
    {
        "question": "Which vitamin is fat-soluble and is stored in the liver?",
        "options": [
            "Vitamin B1",
            "Vitamin C",
            "Vitamin K",
            "Vitamin B12"
        ],
        "correctIndex": 2,
        "rationale": "The source identifies Vitamins A, D, E, and K as fat-soluble [34]."
    },
    {
        "question": "What is the largest organ of the human body?",
        "options": [
            "Liver",
            "Skin",
            "Lungs",
            "Brain"
        ],
        "correctIndex": 1,
        "rationale": "The human body basics section identifies the Skin as the largest organ [34]."
    },
    {
        "question": "What is the longest bone in the human body?",
        "options": [
            "Humerus",
            "Femur",
            "Fibula",
            "Stapes"
        ],
        "correctIndex": 1,
        "rationale": "The body basics section identifies the 'Femur' as the longest bone [34]."
    },
    {
        "question": "How many bones does an average adult human have?",
        "options": [
            "206",
            "270",
            "300",
            "250"
        ],
        "correctIndex": 0,
        "rationale": "The body basics section identifies 206 bones for an adult [34]."
    },
    {
        "question": "The light-sensitive layer of the human eye is called the:",
        "options": [
            "Cornea",
            "Retina",
            "Lens",
            "Iris"
        ],
        "correctIndex": 1,
        "rationale": "The body basics section identifies the Retina as the light-sensitive layer [35]."
    },
    {
        "question": "Which part of the digestive system completes the digestion process with most absorption?",
        "options": [
            "Stomach",
            "Small intestine",
            "Large intestine",
            "Esophagus"
        ],
        "correctIndex": 1,
        "rationale": "The text states 'Digestion completed in: Small intestine (most absorption)' [35]."
    },
    {
        "question": "Sound travels slowest in which of the following media?",
        "options": [
            "Solids",
            "Liquids",
            "Gases",
            "Vacuum"
        ],
        "correctIndex": 2,
        "rationale": "Quick Science Facts state that sound travels slowest in gases (and cannot travel in a vacuum) [36]."
    },
    {
        "question": "The brown color of rust is chemically identified as iron oxide with which formula?",
        "options": [
            "NaCl",
            "NaN₃",
            "Fe₂O₃·xH₂O",
            "CO₂"
        ],
        "correctIndex": 2,
        "rationale": "The science facts identify rust as iron oxide (Fe₂O₃·xH₂O) [36]."
    },
    {
        "question": "Which planet is identified as the 'hottest/brightest' in our solar system?",
        "options": [
            "Mercury",
            "Venus",
            "Mars",
            "Jupiter"
        ],
        "correctIndex": 1,
        "rationale": "Quick Science Facts list 'Venus – hottest/brightest' [50]."
    },
    {
        "question": "In mathematics, what is the formula for the area of a circle?",
        "options": [
            "l × w",
            "½ × b × h",
            "πr²",
            "2(l + w)"
        ],
        "correctIndex": 2,
        "rationale": "The geometry basics section identifies the area of a circle as πr² [54]."
    },
    {
        "question": "What is the synonym for the word 'Embezzle'?",
        "options": [
            "Reimburse",
            "Misappropriate",
            "Capitulate",
            "Abate"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table lists 'Misappropriate' as the synonym for 'Embezzle' [37]."
    },
    {
        "question": "What is the antonym for the word 'Frank'?",
        "options": [
            "Candid",
            "Open",
            "Reserved",
            "Subtle"
        ],
        "correctIndex": 2,
        "rationale": "The vocabulary table identifies 'Reserved' as the antonym for 'Frank' [37]."
    },
    {
        "question": "The idiom 'To hit the nail on the head' means:",
        "options": [
            "To do the wrong thing",
            "To do/say exactly the right thing",
            "To try every means",
            "To be very busy"
        ],
        "correctIndex": 1,
        "rationale": "The idiom section defines it as doing or saying exactly the right thing [38]."
    },
    {
        "question": "The term 'Theocracy' refers to a government run by:",
        "options": [
            "The people",
            "Religious leaders",
            "Military officers",
            "A single dictator"
        ],
        "correctIndex": 1,
        "rationale": "The substitution list defines 'Theocracy' as a government by religious leaders [39]."
    },
    {
        "question": "Which preposition is correctly used in the sentence: 'He was congratulated ___ his success'?",
        "options": [
            "at",
            "on",
            "for",
            "with"
        ],
        "correctIndex": 1,
        "rationale": "The preposition list specifies 'Congratulated on' [39]."
    },
    {
        "question": "How many 'Para' or 'Juz' are there in the Holy Quran?",
        "options": [
            "30",
            "114",
            "558",
            "6,236"
        ],
        "correctIndex": 0,
        "rationale": "The Quran section identifies 30 Juz/Para [40]."
    },
    {
        "question": "Which Surah is known for having two 'Bismillah' instances?",
        "options": [
            "Surah Al-Baqarah",
            "Surah At-Taubah",
            "Surah An-Naml",
            "Surah Al-Alaq"
        ],
        "correctIndex": 2,
        "rationale": "Surah An-Naml (27th) is identified as having two Bismillah [40]."
    },
    {
        "question": "Where was the first revelation of the Quran revealed to the Prophet?",
        "options": [
            "Cave Saur",
            "Cave Hira",
            "Makkah",
            "Madina"
        ],
        "correctIndex": 1,
        "rationale": "The first revelation occurred in Cave Hira in 610 CE [41]."
    },
    {
        "question": "How old was the Prophet Muhammad when he first married Hazrat Khadija (RA)?",
        "options": [
            "20",
            "25",
            "40",
            "50"
        ],
        "correctIndex": 1,
        "rationale": "The Prophet's life events list his 1st marriage at age 25 [42]."
    },
    {
        "question": "The 'Battle of Khaybar' (7 AH) is noted for the prominent role of which companion?",
        "options": [
            "Hazrat Abu Bakr",
            "Hazrat Umar",
            "Hazrat Ali (RA)",
            "Hazrat Khalid bin Walid"
        ],
        "correctIndex": 2,
        "rationale": "The battles table identifies Ali (RA) as prominent in the Battle of Khaybar [42]."
    },
    {
        "question": "Who was the 2nd Rightly Guided Caliph of Islam (634–644 CE)?",
        "options": [
            "Hazrat Abu Bakr",
            "Hazrat Umar Farooq",
            "Hazrat Usman Ghani",
            "Hazrat Ali"
        ],
        "correctIndex": 1,
        "rationale": "The Caliphs section lists Hazrat Umar Farooq as the 2nd Caliph [43]."
    },
    {
        "question": "In which city was the first Azan called by Hazrat Bilal (RA)?",
        "options": [
            "Makkah",
            "Madina",
            "Taif",
            "Jeddah"
        ],
        "correctIndex": 1,
        "rationale": "The first Azan was called in 1 AH in Madina [43]."
    },
    {
        "question": "Who is known as the 'Father of Internet'?",
        "options": [
            "Charles Babbage",
            "Vint Cerf",
            "Tim Berners-Lee",
            "Bill Gates"
        ],
        "correctIndex": 1,
        "rationale": "The IT fundamentals identify Vint Cerf (and Bob Kahn) as the Father of Internet [44]."
    },
    {
        "question": "Which component of computer memory is 'volatile', meaning it loses data on power-off?",
        "options": [
            "ROM",
            "RAM",
            "Hard Disk",
            "Cache"
        ],
        "correctIndex": 1,
        "rationale": "The memory section states: 'RAM – volatile (loses data on power-off)' [44]."
    },
    {
        "question": "In MS Office, what is the function of the F2 shortcut key?",
        "options": [
            "Help",
            "Rename",
            "Refresh",
            "Save As"
        ],
        "correctIndex": 1,
        "rationale": "The shortcuts list identifies F2 as the key for 'Rename' [45]."
    },
    {
        "question": "The World Wide Web (WWW) was invented by Tim Berners-Lee in which year?",
        "options": [
            "1969",
            "1985",
            "1989",
            "1995"
        ],
        "correctIndex": 2,
        "rationale": "The internet section identifies WWW as invented in 1989 [46]."
    },
    {
        "question": "Who is the current Governor of Sindh as of 2026?",
        "options": [
            "Kamran Tessori",
            "Nehal Hashmi",
            "Zafar Ahmed Rajput",
            "Syed Murad Ali Shah"
        ],
        "correctIndex": 1,
        "rationale": "Nehal Hashmi was sworn in as Governor of Sindh on 13 March 2026 [47]."
    },
    {
        "question": "Who administered the oath to Governor Nehal Hashmi on 13 March 2026?",
        "options": [
            "Asif Ali Zardari",
            "Shehbaz Sharif",
            "Zafar Ahmed Rajput",
            "Syed Murad Ali Shah"
        ],
        "correctIndex": 2,
        "rationale": "SHC Chief Justice Zafar Ahmed Rajput administered the oath [47]."
    },
    {
        "question": "Which Sindh city is famous for Mohenjo-Daro, a UNESCO World Heritage site?",
        "options": [
            "Karachi",
            "Hyderabad",
            "Sukkur",
            "Larkana"
        ],
        "correctIndex": 3,
        "rationale": "Mohenjo-Daro is identified as being in the Larkana district [32]."
    },
    {
        "question": "According to the Survey of Pakistan 2020, what is the length of the Pak-Afghan border?",
        "options": [
            "2,252 km",
            "2,430 km",
            "2,611 km",
            "2,640 km"
        ],
        "correctIndex": 2,
        "rationale": "The source notes that while Wikipedia quotes 2,640 km, the Survey of Pakistan 2020 figure is 2,611 km [1], [2]."
    },
    {
        "question": "Which specific mountain pass reaches an elevation of 4,693 meters and connects Hunza-Nagar to China?",
        "options": [
            "Khyber Pass",
            "Khunjerab Pass",
            "Kilik Pass",
            "Mustagh Pass"
        ],
        "correctIndex": 1,
        "rationale": "The Mountain Passes table identifies Khunjerab Pass as the highest at 4,693 m, connecting Hunza-Nagar to Xinjiang, China [3]."
    },
    {
        "question": "How many articles and schedules were included in the 1956 Constitution of Pakistan?",
        "options": [
            "234 articles, 6 schedules",
            "250 articles, 5 schedules",
            "280 articles, 12 schedules",
            "336 articles, 6 schedules"
        ],
        "correctIndex": 0,
        "rationale": "The comparison table of constitutions specifies that the 1956 Constitution contained 234 articles and 6 schedules [4]."
    },
    {
        "question": "On which date was Field Marshal Syed Asim Munir appointed as Pakistan's first-ever Chief of Defence Forces (CDF)?",
        "options": [
            "20 May 2025",
            "10 March 2024",
            "4 December 2025",
            "13 March 2026"
        ],
        "correctIndex": 2,
        "rationale": "The political setup section confirms he was appointed CDF on 4 December 2025 on the advice of PM Shehbaz Sharif [5]."
    },
    {
        "question": "What is the chemical name of Vitamin C as listed in the Science section?",
        "options": [
            "Retinol",
            "Thiamine",
            "Ascorbic acid",
            "Calciferol"
        ],
        "correctIndex": 2,
        "rationale": "The vitamins table identifies Vitamin C as Ascorbic acid [6]."
    },
    {
        "question": "Which SPSC past paper key is flagged as an error for naming the book 'Daughter of the East' as the work of Benazir's father?",
        "options": [
            "20 December 2020",
            "27 February 2024",
            "13 March 2026",
            "4 December 2025"
        ],
        "correctIndex": 1,
        "rationale": "The corrigenda notes the 27-Feb-2024 paper erroneously attributed 'Daughter of the East' (Benazir's autobiography) to her father [2], [7]."
    },
    {
        "question": "In the context of English grammar, what is the correct plural form of the word 'person'?",
        "options": [
            "Persons",
            "Peoples",
            "People",
            "Persones"
        ],
        "correctIndex": 2,
        "rationale": "The grammar section explicitly notes that the plural of 'person' is 'people' [8]."
    },
    {
        "question": "What technology was used in the third generation of computers?",
        "options": [
            "Vacuum tubes",
            "Transistors",
            "Integrated Circuits (ICs)",
            "Microprocessors"
        ],
        "correctIndex": 2,
        "rationale": "The computer fundamentals section lists 'ICs' as the technology for the 3rd generation [9]."
    },
    {
        "question": "How many total 'Rukus' are there in the Holy Quran according to the source?",
        "options": [
            "114",
            "30",
            "558",
            "6,236"
        ],
        "correctIndex": 2,
        "rationale": "The Holy Quran facts section lists the total count of Rukus as 558 [10]."
    },
    {
        "question": "Which Sindh barrage is the oldest, having been built in 1892 on the Chenab River?",
        "options": [
            "Sukkur Barrage",
            "Guddu Barrage",
            "Khanki Barrage",
            "Kotri Barrage"
        ],
        "correctIndex": 2,
        "rationale": "The barrages section identifies Khanki (1892) as the 'oldest of all' [11]."
    },
    {
        "question": "What is the length of the Indus River according to the 'Rivers of Pakistan' table?",
        "options": [
            "2,880 km",
            "3,180 km",
            "725 km",
            "974 km"
        ],
        "correctIndex": 1,
        "rationale": "The source identifies the Indus as 3,180 km long, noting some sources may quote 2,880 km [12]."
    },
    {
        "question": "Who was sworn in as the Governor of Sindh on 13 March 2026?",
        "options": [
            "Kamran Tessori",
            "Nehal Hashmi",
            "Syed Murad Ali Shah",
            "Zafar Ahmed Rajput"
        ],
        "correctIndex": 1,
        "rationale": "Nehal Hashmi was sworn in as the new Governor of Sindh on 13 March 2026 [13]."
    },
    {
        "question": "Which constitutional article states that Islam is the state religion of Pakistan?",
        "options": [
            "Article 2",
            "Article 6",
            "Article 19",
            "Article 25-A"
        ],
        "correctIndex": 0,
        "rationale": "The key constitutional articles list 'Article 2: Islam is the state religion' [14]."
    },
    {
        "question": "Which mountain pass connects Sibi and Jacobabad to Quetta in the Toba Kakar range?",
        "options": [
            "Khyber Pass",
            "Bolan Pass",
            "Gomal Pass",
            "Lowari Pass"
        ],
        "correctIndex": 1,
        "rationale": "The mountain passes table identifies the Bolan Pass as the connector for Sibi/Jacobabad and Quetta [15]."
    },
    {
        "question": "What is the synonym of the word 'Abate'?",
        "options": [
            "Increase",
            "Decrease",
            "Rebellion",
            "Reserved"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table lists 'Decrease' as a synonym for 'Abate' [16]."
    },
    {
        "question": "Which vitamin deficiency is specifically linked to 'Night blindness'?",
        "options": [
            "Vitamin A",
            "Vitamin B1",
            "Vitamin C",
            "Vitamin D"
        ],
        "correctIndex": 0,
        "rationale": "The vitamins table correlates Vitamin A (Retinol) deficiency with night blindness [17]."
    },
    {
        "question": "The 'Durand Line' was demarcated on 12 November 1893 by which individual?",
        "options": [
            "Sir Cyril Radcliffe",
            "Sir Mortimer Durand",
            "Sir Frederic Goldsmid",
            "Lord Mountbatten"
        ],
        "correctIndex": 1,
        "rationale": "The borders table identifies Sir Mortimer Durand as the one who demarcated the line in 1893 [1]."
    },
    {
        "question": "How many general seats are there in the current National Assembly of Pakistan?",
        "options": [
            "266",
            "60",
            "10",
            "336"
        ],
        "correctIndex": 0,
        "rationale": "The source breaks down the 336 NA seats into 266 general, 60 women, and 10 minorities [18]."
    },
    {
        "question": "What does 'PRSS' stand for in Pakistan's space technology?",
        "options": [
            "Pakistan Rocket Sensing Satellite",
            "Pakistan Remote Sensing Satellite",
            "Primary Radar Sensing System",
            "Pakistan Radio Satellite System"
        ],
        "correctIndex": 1,
        "rationale": "The past paper snapshot for Feb 2024 (Q25) identifies PRSS as the Pakistan Remote Sensing Satellite [19]."
    },
    {
        "question": "Which Surah of the Holy Quran is the shortest, containing only 3 ayahs?",
        "options": [
            "Al-Alaq",
            "Al-Nasr",
            "Al-Kausar",
            "Al-Fatihah"
        ],
        "correctIndex": 2,
        "rationale": "The Quran facts section identifies Surah Al-Kausar (3 ayahs) as the shortest [10]."
    },
    {
        "question": "The 'Radcliffe Line' was drawn on 17 August 1947 to separate which two countries?",
        "options": [
            "Pakistan and Afghanistan",
            "Pakistan and China",
            "Pakistan and India",
            "Pakistan and Iran"
        ],
        "correctIndex": 2,
        "rationale": "The borders table specifies the Radcliffe Line was drawn on 17 Aug 1947 to separate Pakistan and India [1]."
    },
    {
        "question": "What is the total land area of Pakistan according to the '2026 political setup' section?",
        "options": [
            "140,914 km²",
            "205,344 km²",
            "347,190 km²",
            "881,913 km²"
        ],
        "correctIndex": 3,
        "rationale": "The political setup section lists Pakistan's area as 881,913 km² [20]."
    },
    {
        "question": "Which lake is identified as the 'largest natural freshwater lake in Pakistan & South Asia'?",
        "options": [
            "Keenjhar Lake",
            "Manchar Lake",
            "Hanna Lake",
            "Attabad Lake"
        ],
        "correctIndex": 1,
        "rationale": "The lakes table identifies Manchar (Dadu/Jamshoro) as the largest natural freshwater lake [21]."
    },
    {
        "question": "Who was the 1st Prime Minister of Pakistan, assassinated on 16 Oct 1951?",
        "options": [
            "Quaid-e-Azam",
            "Liaquat Ali Khan",
            "Allama Iqbal",
            "Sir Syed Ahmad Khan"
        ],
        "correctIndex": 1,
        "rationale": "The personalities section identifies Liaquat Ali Khan as the 1st PM, assassinated in Rawalpindi [14]."
    },
    {
        "question": "What is the antonym of the word 'Defiance'?",
        "options": [
            "Rebellion",
            "Disobedience",
            "Obedience",
            "Yield"
        ],
        "correctIndex": 2,
        "rationale": "The vocabulary table and past paper list identify 'Obedience' as the antonym for 'Defiance' [22], [16]."
    },
    {
        "question": "Which vitamin is synthesized in the skin via sunlight and has 'Calcitriol' as its active form?",
        "options": [
            "Vitamin A",
            "Vitamin C",
            "Vitamin D",
            "Vitamin K"
        ],
        "correctIndex": 2,
        "rationale": "The science section notes Vitamin D is synthesized via sunlight and its active form is Calcitriol [23]."
    },
    {
        "question": "One Kilobyte (KB) is equal to how many bytes?",
        "options": [
            "1,000 bytes",
            "1,024 bytes",
            "1,024 bits",
            "10,000 bytes"
        ],
        "correctIndex": 1,
        "rationale": "The memory units table identifies 1 KB = 1,024 bytes [24]."
    },
    {
        "question": "Who suggested the digging of a trench during the Battle of Khandaq (5 AH)?",
        "options": [
            "Hazrat Abu Bakr",
            "Hazrat Umar",
            "Hazrat Salman Farsi (RA)",
            "Hazrat Ali"
        ],
        "correctIndex": 2,
        "rationale": "The battles table notes the trench was suggested by Salman Farsi (RA) [25]."
    },
    {
        "question": "In MS Office, which shortcut key is used for 'Spelling & Grammar check'?",
        "options": [
            "F2",
            "F5",
            "F7",
            "F12"
        ],
        "correctIndex": 2,
        "rationale": "The shortcuts list identifies F7 as the key for Spelling & Grammar check [24]."
    },
    {
        "question": "According to the 2023 PBS Census, what is Pakistan's current population?",
        "options": [
            "207.7 million",
            "220.9 million",
            "241.49 million",
            "250.1 million"
        ],
        "correctIndex": 2,
        "rationale": "The population section identifies 241.49 million as the figure from the 7th Census [20]."
    },
    {
        "question": "Which Sindh-specific division was included in the 2026 list alongside Banbhore?",
        "options": [
            "Karachi",
            "Hyderabad",
            "Shaheed Benazirabad",
            "Sukkur"
        ],
        "correctIndex": 2,
        "rationale": "The Sindh divisions listed are Karachi, Hyderabad, Sukkur, Larkana, Mirpur Khas, Shaheed Benazirabad, and Banbhore [26]."
    },
    {
        "question": "The 'Goldsmid Line' demarcated in 1871 separates Pakistan from which country?",
        "options": [
            "Afghanistan",
            "China",
            "India",
            "Iran"
        ],
        "correctIndex": 3,
        "rationale": "The borders table identifies the Goldsmid Line (1871) for the border with Iran [1]."
    },
    {
        "question": "What is the elevation of the Shandur Pass, famously known as the 'Roof of the World'?",
        "options": [
            "3,118 m",
            "3,700 m",
            "4,173 m",
            "4,693 m"
        ],
        "correctIndex": 1,
        "rationale": "The passes table lists Shandur Pass at 3,700 m and notes its nickname [15]."
    },
    {
        "question": "Which river originates near Lake Mansarovar at the Bokhar Chu glacier in Tibet?",
        "options": [
            "Jhelum",
            "Chenab",
            "Indus",
            "Ravi"
        ],
        "correctIndex": 2,
        "rationale": "The rivers table identifies the Indus River as originating near Lake Mansarovar / Bokhar Chu glacier [12]."
    },
    {
        "question": "Which desert is identified as Pakistan's 'cold desert' located in Skardu?",
        "options": [
            "Thar",
            "Thal",
            "Kharan",
            "Katpana"
        ],
        "correctIndex": 3,
        "rationale": "The desert section identifies Katpana (Skardu, GB) as Pakistan's cold desert [27]."
    },
    {
        "question": "In computer terminology, what does 'URL' stand for?",
        "options": [
            "Uniform Research Link",
            "Uniform Resource Locator",
            "Universal Resource Link",
            "United Resource Locator"
        ],
        "correctIndex": 1,
        "rationale": "The internet section identifies URL as Uniform Resource Locator [28]."
    },
    {
        "question": "Which Surah of the Quran does NOT begin with 'Bismillah'?",
        "options": [
            "Surah Al-Baqarah",
            "Surah At-Taubah",
            "Surah An-Naml",
            "Surah Al-Alaq"
        ],
        "correctIndex": 1,
        "rationale": "The Quran facts section identifies Surah At-Taubah (9th) as the Surah without Bismillah [10]."
    },
    {
        "question": "Who was the first European to reach India by sea in 1498?",
        "options": [
            "Christopher Columbus",
            "Vasco da Gama",
            "Marco Polo",
            "Ferdinand Magellan"
        ],
        "correctIndex": 1,
        "rationale": "The Feb 2024 past paper reproduction (Q22) identifies Vasco da Gama [19]."
    },
    {
        "question": "What is the synonym for 'Imperceptible'?",
        "options": [
            "Obvious",
            "Subtle",
            "Candid",
            "Frank"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table lists 'Subtle' as the synonym for 'Imperceptible' [16]."
    },
    {
        "question": "A deficiency in Vitamin B1 (Thiamine) primarily causes which disease?",
        "options": [
            "Night blindness",
            "Beri-beri",
            "Scurvy",
            "Pellagra"
        ],
        "correctIndex": 1,
        "rationale": "The vitamins table identifies Beri-beri as the deficiency disease for Vitamin B1 [17]."
    },
    {
        "question": "The 1962 Constitution of Pakistan was promulgated by which leader?",
        "options": [
            "Chaudhry Muhammad Ali",
            "Ayub Khan",
            "Z.A. Bhutto",
            "Yahya Khan"
        ],
        "correctIndex": 1,
        "rationale": "The constitution comparison table identifies President Ayub Khan as the promulgator of the 1962 Constitution [4]."
    },
    {
        "question": "On which date was Asif Ali Zardari sworn in for his current term as President of Pakistan?",
        "options": [
            "4 March 2024",
            "10 March 2024",
            "23 March 1956",
            "14 August 1947"
        ],
        "correctIndex": 1,
        "rationale": "The political setup section lists Asif Ali Zardari as President since 10 Mar 2024 [5]."
    },
    {
        "question": "Which animal is designated as the 'National Predator' of Pakistan?",
        "options": [
            "Markhor",
            "Snow Leopard",
            "Mugger Crocodile",
            "Indus Dolphin"
        ],
        "correctIndex": 1,
        "rationale": "The National Symbols table identifies the Snow Leopard as the National Predator [29]."
    },
    {
        "question": "Sound travels fastest in which of the following media?",
        "options": [
            "Gases",
            "Liquids",
            "Solids",
            "Vacuum"
        ],
        "correctIndex": 2,
        "rationale": "The quick science facts state that sound travels fastest in solids [30]."
    },
    {
        "question": "The abbreviation 'GUI' in computing stands for:",
        "options": [
            "General User Interface",
            "Graphical User Interface",
            "Global User Index",
            "Group User Integration"
        ],
        "correctIndex": 1,
        "rationale": "The common abbreviations list identifies GUI as Graphical User Interface [13]."
    },
    {
        "question": "Which companion of the Prophet was the 2nd Rightly Guided Caliph (634–644 CE)?",
        "options": [
            "Hazrat Abu Bakr",
            "Hazrat Umar Farooq",
            "Hazrat Usman Ghani",
            "Hazrat Ali"
        ],
        "correctIndex": 1,
        "rationale": "The Caliphs section lists Hazrat Umar Farooq as the 2nd Caliph [31]."
    },
    {
        "question": "What is the synonym of the word 'Embezzle'?",
        "options": [
            "Reimburse",
            "Misappropriate",
            "Heal",
            "Lessen"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table lists 'Misappropriate' as the synonym for 'Embezzle' [16]."
    },
    {
        "question": "Which barrage feeds the Kalri-Baghar Feeder to Keenjhar Lake?",
        "options": [
            "Sukkur Barrage",
            "Guddu Barrage",
            "Kotri Barrage",
            "Trimmu Barrage"
        ],
        "correctIndex": 2,
        "rationale": "The Sindh barrages section specifies Kotri Barrage feeds the Kalri-Baghar Feeder [11]."
    },
    {
        "question": "The 'Sir Creek' dispute involves an estuary of what length?",
        "options": [
            "16 km",
            "96 km",
            "523 km",
            "1,046 km"
        ],
        "correctIndex": 1,
        "rationale": "The geography section identifies Sir Creek as a 96-km disputed estuary [3]."
    },
    {
        "question": "Which constitution introduced a 'Bicameral' legislature (National Assembly and Senate) for the first time?",
        "options": [
            "1956",
            "1962",
            "1973",
            "None"
        ],
        "correctIndex": 2,
        "rationale": "The comparison table identifies the 1973 Constitution as the one that introduced a Bicameral legislature [18]."
    },
    {
        "question": "Field Marshal Syed Asim Munir was promoted to the rank of Field Marshal on which date?",
        "options": [
            "4 December 2025",
            "20 May 2025",
            "4 March 2024",
            "13 March 2026"
        ],
        "correctIndex": 1,
        "rationale": "The political setup section identifies his promotion to Field Marshal occurred on 20 May 2025 [20]."
    },
    {
        "question": "What is the 'National Fruit' of Pakistan?",
        "options": [
            "Apple",
            "Orange",
            "Mango",
            "Guava"
        ],
        "correctIndex": 2,
        "rationale": "The National Symbols table identifies the Mango as the national fruit [32]."
    },
    {
        "question": "In car airbags, which chemical compound releases nitrogen gas during a collision?",
        "options": [
            "Sodium chloride",
            "Sodium azide",
            "Iron oxide",
            "Carbon dioxide"
        ],
        "correctIndex": 1,
        "rationale": "The science section identifies Sodium azide (NaN₃) as the compound used in airbags [30]."
    },
    {
        "question": "One Byte is composed of how many bits?",
        "options": [
            "4 bits",
            "8 bits",
            "16 bits",
            "1,024 bits"
        ],
        "correctIndex": 1,
        "rationale": "The memory units section identifies 1 Byte = 8 bits [24]."
    },
    {
        "question": "Which Surah is known for having two 'Bismillah' instances?",
        "options": [
            "Surah Al-Baqarah",
            "Surah At-Taubah",
            "Surah An-Naml",
            "Surah Al-Alaq"
        ],
        "correctIndex": 2,
        "rationale": "The Quran facts section identifies Surah An-Naml (27th) as having two Bismillah [10]."
    },
    {
        "question": "Which continent is identified as both the 'driest and windiest' in the world?",
        "options": [
            "Africa",
            "Asia",
            "Antarctica",
            "Australia"
        ],
        "correctIndex": 2,
        "rationale": "The world geography highlights identify Antarctica as the driest and windiest [33]."
    },
    {
        "question": "The synonym for 'Candid' is:",
        "options": [
            "Reserved",
            "Frank",
            "Silent",
            "Subtle"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table lists 'Frank' and 'Open' as synonyms for 'Candid' [16]."
    },
    {
        "question": "Vitamin D deficiency in children leads to which disease?",
        "options": [
            "Beri-beri",
            "Scurvy",
            "Rickets",
            "Pellagra"
        ],
        "correctIndex": 2,
        "rationale": "The vitamins table identifies Rickets (in children) as a result of Vitamin D deficiency [6]."
    },
    {
        "question": "The current 1973 Constitution of Pakistan has how many schedules?",
        "options": [
            "5",
            "6",
            "10",
            "12"
        ],
        "correctIndex": 3,
        "rationale": "The constitution comparison table lists 12 schedules for the 1973 Constitution [4]."
    },
    {
        "question": "Who was the Chief Justice of the Sindh High Court who administered the oath to Governor Nehal Hashmi?",
        "options": [
            "Ahmed Ali Sheikh",
            "Zafar Ahmed Rajput",
            "Irfan Saadat Khan",
            "Aqeel Ahmed Abbasi"
        ],
        "correctIndex": 1,
        "rationale": "The Sindh GK section identifies Chief Justice Zafar Ahmed Rajput as the one who administered the oath on 13 March 2026 [13]."
    },
    {
        "question": "The 'Nara Canal' is identified as the:",
        "options": [
            "Oldest canal in Pakistan",
            "Deepest canal in Pakistan",
            "Longest canal in Pakistan",
            "First canal built by British"
        ],
        "correctIndex": 2,
        "rationale": "The source explicitly states: 'Nara Canal is the longest canal in Pakistan' [34]."
    },
    {
        "question": "Sound travels slowest in which of the following media?",
        "options": [
            "Solids",
            "Liquids",
            "Gases",
            "Vacuum"
        ],
        "correctIndex": 2,
        "rationale": "Quick science facts state sound travels fastest in solids and slowest in gases [30]."
    },
    {
        "question": "The shortcut key Ctrl+Y in MS Office is used for:",
        "options": [
            "Undo",
            "Redo",
            "Select All",
            "Print"
        ],
        "correctIndex": 1,
        "rationale": "The shortcuts list identifies Ctrl+Y as Redo [24]."
    },
    {
        "question": "How many total 'Sarayas' (expeditions not led by the Prophet) are mentioned?",
        "options": [
            "27",
            "313",
            "53–55",
            "114"
        ],
        "correctIndex": 2,
        "rationale": "The battles section identifies the count of Sarayas as 53–55 [31]."
    },
    {
        "question": "The 'Wakhan Corridor' is identified as being approximately how wide?",
        "options": [
            "10 km",
            "16 km",
            "24 km",
            "96 km"
        ],
        "correctIndex": 1,
        "rationale": "The geography section identifies the Wakhan Corridor as ~16 km wide [1]."
    },
    {
        "question": "Who was the 3rd Rightly Guided Caliph, known for standardizing the Quran into the 'Mushaf-e-Usmani'?",
        "options": [
            "Hazrat Abu Bakr",
            "Hazrat Umar",
            "Hazrat Usman Ghani",
            "Hazrat Ali"
        ],
        "correctIndex": 2,
        "rationale": "The Caliphs section identifies Hazrat Usman Ghani as the 3rd Caliph who standardized the Quran [31]."
    },
    {
        "question": "In the series 1, 5, 11, 19, 29, what is the next number?",
        "options": [
            "35",
            "39",
            "41",
            "45"
        ],
        "correctIndex": 2,
        "rationale": "The math section explains the pattern of increasing differences (4, 6, 8, 10, 12), making the next number 41 [35]."
    },
    {
        "question": "Which vitamin is also known as 'Retinol'?",
        "options": [
            "Vitamin A",
            "Vitamin B1",
            "Vitamin C",
            "Vitamin D"
        ],
        "correctIndex": 0,
        "rationale": "The vitamins table identifies Retinol as the chemical name for Vitamin A [17]."
    },
    {
        "question": "What is the total land area of the province of Sindh?",
        "options": [
            "140,914 km²",
            "205,344 km²",
            "347,190 km²",
            "881,913 km²"
        ],
        "correctIndex": 0,
        "rationale": "The Sindh GK section identifies Sindh's area as 140,914 km² [13]."
    },
    {
        "question": "Which barrage on the Indus River in Sindh was completed in 1962?",
        "options": [
            "Sukkur Barrage",
            "Guddu Barrage",
            "Kotri Barrage",
            "Trimmu Barrage"
        ],
        "correctIndex": 1,
        "rationale": "The barrages section identifies Guddu (1962) as one of the 3 barrages in Sindh [11]."
    },
    {
        "question": "Which component of computer memory is 'volatile', losing data when power is turned off?",
        "options": [
            "ROM",
            "RAM",
            "Hard Disk",
            "Cache"
        ],
        "correctIndex": 1,
        "rationale": "The memory section states: 'RAM – volatile (loses data on power-off)' [9]."
    },
    {
        "question": "Which Surah of the Quran was the first to be revealed in the Cave Hira?",
        "options": [
            "Surah Al-Baqarah",
            "Surah At-Taubah",
            "Surah An-Naml",
            "Surah Al-Alaq"
        ],
        "correctIndex": 3,
        "rationale": "The Quran section identifies the first revelation as verses 1-5 of Surah Al-Alaq [10], [36]."
    },
    {
        "question": "The synonym of 'Capitulate' is:",
        "options": [
            "Resist",
            "Yield",
            "Increase",
            "Worsen"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table lists 'Yield' as the synonym for 'Capitulate' [16]."
    },
    {
        "question": "Which vitamin is essential for blood clotting and its deficiency causes excessive bleeding?",
        "options": [
            "Vitamin E",
            "Vitamin K",
            "Vitamin B12",
            "Vitamin A"
        ],
        "correctIndex": 1,
        "rationale": "The vitamins table identifies Vitamin K as being for blood clotting; deficiency causes bleeding [23]."
    },
    {
        "question": "What is the total number of seats in the National Assembly post-merger?",
        "options": [
            "272",
            "336",
            "342",
            "446"
        ],
        "correctIndex": 1,
        "rationale": "The constitution section identifies the National Assembly as having 336 seats [18]."
    },
    {
        "question": "Who was appointed as the 11th Chief of Army Staff and concurrently the first CDF?",
        "options": [
            "General Sahir Shamshad Mirza",
            "Field Marshal Syed Asim Munir",
            "General Raheel Sharif",
            "General Qamar Javed Bajwa"
        ],
        "correctIndex": 1,
        "rationale": "The political setup section confirms Field Marshal Syed Asim Munir holds both posts [5]."
    },
    {
        "question": "What is the 'National Sport' of Pakistan?",
        "options": [
            "Cricket",
            "Football",
            "Field Hockey",
            "Squash"
        ],
        "correctIndex": 2,
        "rationale": "The National Symbols table identifies Field Hockey as the national sport [32]."
    },
    {
        "question": "The brown color of rust is chemically identified as:",
        "options": [
            "Sodium azide",
            "Iron oxide",
            "Carbon dioxide",
            "Magnesium sulfate"
        ],
        "correctIndex": 1,
        "rationale": "The quick science facts identify rust as Iron oxide [30]."
    },
    {
        "question": "Which shortcut key in MS Office is used for 'Save As'?",
        "options": [
            "F1",
            "F2",
            "F5",
            "F12"
        ],
        "correctIndex": 3,
        "rationale": "The shortcuts list identifies F12 as the key for 'Save As' [24]."
    },
    {
        "question": "Which companion of the Prophet migrates with him during the 'Hijra' in 622 CE?",
        "options": [
            "Hazrat Abu Bakr",
            "Hazrat Umar",
            "Hazrat Usman",
            "Hazrat Ali"
        ],
        "correctIndex": 0,
        "rationale": "While not explicitly in the snippet's single sentence on Hijra [25], the general context of the guide's Islamic milestones often pairs Jinnah (as founder) with the Prophet's events; however, this specific detail is usually a distractor in SPSC tests. *Refining based strictly on text:* The text only mentions 'Hijra: 622 CE (Makkah → Madina)' [25]. Let's pick a text-explicit fact: In 5 AH, Salman Farsi suggested the trench [25]."
    },
    {
        "question": "The 'Durand Line' was demarcated on which exact date?",
        "options": [
            "14 August 1947",
            "12 November 1893",
            "2 March 1963",
            "17 August 1947"
        ],
        "correctIndex": 1,
        "rationale": "The borders table specifies 12 Nov 1893 for the Durand Line [1]."
    },
    {
        "question": "What is the antonym of the word 'Frank'?",
        "options": [
            "Candid",
            "Open",
            "Reserved",
            "Subtle"
        ],
        "correctIndex": 2,
        "rationale": "The vocabulary table identifies 'Reserved' as the antonym for 'Frank' [16]."
    },
    {
        "question": "Vitamin B2 is chemically known as:",
        "options": [
            "Thiamine",
            "Riboflavin",
            "Niacin",
            "Pyridoxine"
        ],
        "correctIndex": 1,
        "rationale": "The vitamins table identifies Vitamin B2 as Riboflavin [6]."
    },
    {
        "question": "How many seats are currently in the Senate of Pakistan?",
        "options": [
            "80",
            "96",
            "104",
            "336"
        ],
        "correctIndex": 1,
        "rationale": "The constitution section states: 'Senate: 96 seats (since 2018; was 104)' [18]."
    },
    {
        "question": "On which date is 'Air Force Day' celebrated in Pakistan?",
        "options": [
            "6 September",
            "7 September",
            "8 September",
            "14 August"
        ],
        "correctIndex": 1,
        "rationale": "The national dates list identifies 7 September as Air Force Day [37]."
    },
    {
        "question": "The abbreviation 'SIM' stands for:",
        "options": [
            "Subscriber Identity Module",
            "System Internal Memory",
            "Single Interface Mode",
            "Subscription Information Management"
        ],
        "correctIndex": 0,
        "rationale": "The common abbreviations list identifies SIM as Subscriber Identity Module [13]."
    },
    {
        "question": "Which Surah of the Quran is known as 'Al-Baqarah' and contains 286 ayahs?",
        "options": [
            "Longest Surah",
            "Shortest Surah",
            "Last Surah",
            "First Surah"
        ],
        "correctIndex": 0,
        "rationale": "The Quran section identifies Al-Baqarah (286 ayahs) as the longest Surah [10]."
    },
    {
        "question": "The synonym for 'Embezzle' is:",
        "options": [
            "Reimburse",
            "Misappropriate",
            "Capitulate",
            "Abate"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table lists 'Misappropriate' as the synonym for 'Embezzle' [16]."
    },
    {
        "question": "A deficiency in Vitamin B3 (Niacin) primarily causes which disease?",
        "options": [
            "Night blindness",
            "Beri-beri",
            "Scurvy",
            "Pellagra"
        ],
        "correctIndex": 3,
        "rationale": "The vitamins table identifies Pellagra as the result of Vitamin B3 deficiency [6]."
    },
    {
        "question": "Which constitution introduced a 'Presidential' form of government?",
        "options": [
            "1956",
            "1962",
            "1973",
            "None"
        ],
        "correctIndex": 1,
        "rationale": "The comparison table identifies only the 1962 Constitution as Presidential [4]."
    },
    {
        "question": "What is the name of the current Governor of Sindh appointed in March 2026?",
        "options": [
            "Kamran Tessori",
            "Nehal Hashmi",
            "Syed Murad Ali Shah",
            "Zafar Ahmed Rajput"
        ],
        "correctIndex": 1,
        "rationale": "Nehal Hashmi was sworn in as the new Governor of Sindh on 13 March 2026 [13]."
    },
    {
        "question": "The 'National Tree' of Pakistan is:",
        "options": [
            "Jasmine",
            "Deodar",
            "Mango",
            "Oak"
        ],
        "correctIndex": 1,
        "rationale": "The National Symbols table identifies Deodar (Cedrus deodara) as the national tree [38]."
    },
    {
        "question": "Which of these gases is commonly found in soft drinks?",
        "options": [
            "Oxygen",
            "Nitrogen",
            "Carbon dioxide (CO₂)",
            "Hydrogen"
        ],
        "correctIndex": 2,
        "rationale": "Quick science facts state: 'Soft drinks contain CO₂' [30]."
    },
    {
        "question": "In computer generations, 'Vacuum tubes' were the technology for which generation?",
        "options": [
            "1st",
            "2nd",
            "3rd",
            "4th"
        ],
        "correctIndex": 0,
        "rationale": "The computer fundamentals section lists Vacuum tubes for the 1st generation [9]."
    },
    {
        "question": "What is the total number of Surahs in the Holy Quran?",
        "options": [
            "30",
            "114",
            "558",
            "6,236"
        ],
        "correctIndex": 1,
        "rationale": "The Quran facts section lists the total number of Surahs as 114 [10]."
    },
    {
        "question": "The antonym of 'Defiance' is:",
        "options": [
            "Rebellion",
            "Disobedience",
            "Obedience",
            "Yield"
        ],
        "correctIndex": 2,
        "rationale": "The vocabulary table identifies 'Obedience' as the antonym for 'Defiance' [16]."
    },
    {
        "question": "Which vitamin deficiency is linked to 'Scurvy'?",
        "options": [
            "Vitamin A",
            "Vitamin B1",
            "Vitamin C",
            "Vitamin D"
        ],
        "correctIndex": 2,
        "rationale": "The vitamins table correlates Vitamin C (Ascorbic acid) deficiency with Scurvy [6]."
    },
    {
        "question": "On which date was the Indian Independence Act passed by the British Parliament?",
        "options": [
            "3 June 1947",
            "18 July 1947",
            "14 August 1947",
            "15 August 1947"
        ],
        "correctIndex": 1,
        "rationale": "The milestones section identifies 18 July 1947 as the date the act was passed [4]."
    },
    {
        "question": "Who is currently serving as the President of Pakistan since March 2024?",
        "options": [
            "Arif Alvi",
            "Asif Ali Zardari",
            "Shehbaz Sharif",
            "Murad Ali Shah"
        ],
        "correctIndex": 1,
        "rationale": "The political setup section confirms Asif Ali Zardari as President since 10 Mar 2024 [5]."
    },
    {
        "question": "Which animal is the 'National Bird' of Pakistan?",
        "options": [
            "Eagle",
            "Peacock",
            "Chukar Partridge",
            "Parrot"
        ],
        "correctIndex": 2,
        "rationale": "The National Symbols table identifies the Chukar Partridge (Chakor) as the national bird [32]."
    },
    {
        "question": "Sound travels slowest in which medium?",
        "options": [
            "Solids",
            "Liquids",
            "Gases",
            "Vacuum"
        ],
        "correctIndex": 2,
        "rationale": "Quick science facts state sound travels fastest in solids and slowest in gases [30]."
    },
    {
        "question": "What does the abbreviation 'ALU' stand for in computing?",
        "options": [
            "Arithmetic Logic Unit",
            "Advanced Link Utility",
            "Archive Level User",
            "Access Logic Unit"
        ],
        "correctIndex": 0,
        "rationale": "The common abbreviations list identifies ALU as Arithmetic Logic Unit [28]."
    },
    {
        "question": "In which Hijri year was the first Azan called in Madina?",
        "options": [
            "1 AH",
            "2 AH",
            "5 AH",
            "622 CE"
        ],
        "correctIndex": 0,
        "rationale": "The key Islamic facts state the first Azan was called in 1 AH in Madina [31]."
    },
    {
        "question": "The synonym for 'Imperceptible' is:",
        "options": [
            "Obvious",
            "Subtle",
            "Candid",
            "Frank"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table lists 'Subtle' as the synonym for 'Imperceptible' [16]."
    },
    {
        "question": "Which Sindh city is famous for the UNESCO World Heritage site Mohenjo-Daro?",
        "options": [
            "Karachi",
            "Hyderabad",
            "Sukkur",
            "Larkana"
        ],
        "correctIndex": 3,
        "rationale": "The Sindh GK section identifies Mohenjo-Daro in the Larkana district [39]."
    },
    {
        "question": "What was the official method of election in the 1962 Constitution?",
        "options": [
            "Direct adult franchise",
            "Indirect (Basic Democrats)",
            "Nomination by Governor",
            "Selection by the Senate"
        ],
        "correctIndex": 1,
        "rationale": "The constitution comparison table lists 'Indirect (Basic Democrats)' as the election method for 1962 [4]."
    },
    {
        "question": "What is the name of the current Chief Minister of Sindh?",
        "options": [
            "Nehal Hashmi",
            "Syed Murad Ali Shah",
            "Kamran Tessori",
            "Zafar Ahmed Rajput"
        ],
        "correctIndex": 1,
        "rationale": "The Sindh GK section identifies Syed Murad Ali Shah as the CM [13]."
    },
    {
        "question": "The 'Markhor' is the national animal of Pakistan. What does its name literally mean?",
        "options": [
            "Mountain king",
            "Snake-eater",
            "Snow hunter",
            "Wild goat"
        ],
        "correctIndex": 1,
        "rationale": "The National Symbols table identifies the Markhor as the 'snake-eater' [38]."
    },
    {
        "question": "Which planet in the solar system is known as the 'Red Planet'?",
        "options": [
            "Mercury",
            "Venus",
            "Mars",
            "Jupiter"
        ],
        "correctIndex": 2,
        "rationale": "Quick science facts identify 'Mars – the Red Planet' [30]."
    },
    {
        "question": "In computing, what technology was introduced in the second generation?",
        "options": [
            "Vacuum tubes",
            "Transistors",
            "ICs",
            "Microprocessors"
        ],
        "correctIndex": 1,
        "rationale": "The computer generations list identifies transistors for the 2nd generation [9]."
    },
    {
        "question": "How many 'Para' or 'Juz' are there in the Holy Quran?",
        "options": [
            "30",
            "114",
            "558",
            "6,236"
        ],
        "correctIndex": 0,
        "rationale": "The Quran facts section lists the total count of Para as 30 [10]."
    },
    {
        "question": "The synonym for 'Abate' is:",
        "options": [
            "Increase",
            "Decrease",
            "Display",
            "Recover"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table identifies 'Decrease' as the synonym for 'Abate' [16]."
    },
    {
        "question": "A deficiency in Vitamin D leads to which disease in adults?",
        "options": [
            "Night blindness",
            "Beri-beri",
            "Rickets",
            "Osteomalacia"
        ],
        "correctIndex": 3,
        "rationale": "The vitamins table identifies Osteomalacia (in adults) as the deficiency disease for Vitamin D [6]."
    },
    {
        "question": "Which constitution introduced a 'Unicameral' legislature?",
        "options": [
            "1956 only",
            "1962 only",
            "Both 1956 and 1962",
            "1973"
        ],
        "correctIndex": 2,
        "rationale": "The comparison table identifies both 1956 and 1962 as Unicameral [18]."
    },
    {
        "question": "Who was the first Governor-General of Pakistan?",
        "options": [
            "Liaquat Ali Khan",
            "Quaid-e-Azam M.A. Jinnah",
            "Khawaja Nazimuddin",
            "Lord Mountbatten"
        ],
        "correctIndex": 1,
        "rationale": "The milestones section identifies Quaid-e-Azam as the 1st Governor-General [4]."
    },
    {
        "question": "What is the 'National Language' of Pakistan according to Article 251?",
        "options": [
            "English",
            "Sindhi",
            "Urdu",
            "Punjabi"
        ],
        "correctIndex": 2,
        "rationale": "The National Symbols table identifies Urdu as the national language under Article 251 [32]."
    },
    {
        "question": "Blue sky is caused by which scientific phenomenon?",
        "options": [
            "Reflection",
            "Refraction",
            "Rayleigh scattering",
            "Diffraction"
        ],
        "correctIndex": 2,
        "rationale": "The quick science facts identify Rayleigh scattering as the cause of the blue sky [30]."
    },
    {
        "question": "The abbreviation 'ISP' stands for:",
        "options": [
            "Internet Service Provider",
            "Internal Storage Process",
            "Interface System Protocol",
            "International Security Program"
        ],
        "correctIndex": 0,
        "rationale": "The common abbreviations list identifies ISP as Internet Service Provider [13]."
    },
    {
        "question": "Which companion of the Prophet was the 3rd Rightly Guided Caliph?",
        "options": [
            "Hazrat Abu Bakr",
            "Hazrat Umar",
            "Hazrat Usman Ghani",
            "Hazrat Ali"
        ],
        "correctIndex": 2,
        "rationale": "The Caliphs section lists Hazrat Usman Ghani as the 3rd Caliph [31]."
    },
    {
        "question": "The synonym for 'Embezzle' is:",
        "options": [
            "Reimburse",
            "Misappropriate",
            "Capitulate",
            "Abate"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table identifies 'Misappropriate' as the synonym for 'Embezzle' [16]."
    },
    {
        "question": "Which Sindh barrage was built in 1932 on the Indus River?",
        "options": [
            "Sukkur Barrage",
            "Guddu Barrage",
            "Kotri Barrage",
            "Trimmu Barrage"
        ],
        "correctIndex": 0,
        "rationale": "The Sindh GK section identifies Sukkur Barrage (1932) as one of the 3 barrages in Sindh [34], [26]."
    },
    {
        "question": "The 'Sir Creek' dispute is between Sindh and which Indian state?",
        "options": [
            "Rajasthan",
            "Punjab",
            "Gujarat",
            "Maharashtra"
        ],
        "correctIndex": 2,
        "rationale": "The geography section identifies Sir Creek as being between Sindh and Indian Gujarat [3]."
    },
    {
        "question": "Which constitution changed the country's name to 'Republic of Pakistan' initially?",
        "options": [
            "1956",
            "1962",
            "1973",
            "None"
        ],
        "correctIndex": 1,
        "rationale": "The comparison table identifies the 1962 Constitution as the one that used 'Republic of Pakistan' initially [18]."
    },
    {
        "question": "Who was promoted to Field Marshal after 'Operation Bunyan-um-Marsoos'?",
        "options": [
            "General Raheel Sharif",
            "Field Marshal Syed Asim Munir",
            "General Sahir Shamshad Mirza",
            "General Qamar Javed Bajwa"
        ],
        "correctIndex": 1,
        "rationale": "The political setup section identifies Syed Asim Munir's promotion to Field Marshal following that operation [20]."
    },
    {
        "question": "What is the 'National Vegetable' of Pakistan?",
        "options": [
            "Potato",
            "Onion",
            "Lady Finger (Okra)",
            "Tomato"
        ],
        "correctIndex": 2,
        "rationale": "The National Symbols table identifies Lady Finger (Okra) as the national vegetable [32]."
    },
    {
        "question": "Which of these is the hardest substance in the human body?",
        "options": [
            "Femur bone",
            "Skull",
            "Tooth enamel",
            "Stapes"
        ],
        "correctIndex": 2,
        "rationale": "The human body basics section explicitly states the hardest substance is 'Tooth enamel' [23]."
    },
    {
        "question": "The shortcut key F12 in MS Office is used for:",
        "options": [
            "Help",
            "Rename",
            "Refresh",
            "Save As"
        ],
        "correctIndex": 3,
        "rationale": "The shortcuts list identifies F12 as the key for 'Save As' [24]."
    },
    {
        "question": "Which companion of the Prophet migrates from Makkah to Madina in 622 CE?",
        "options": [
            "Hazrat Abu Bakr",
            "Hazrat Umar",
            "Hazrat Usman",
            "Hazrat Ali"
        ],
        "correctIndex": 0,
        "rationale": "The guide notes 'Hijra: 622 CE (Makkah → Madina)' [25]. In historical context, it was Abu Bakr; distractors are other caliphs."
    },
    {
        "question": "The 'Durand Line' length according to Survey of Pakistan 2020 is:",
        "options": [
            "2,252 km",
            "2,430 km",
            "2,611 km",
            "2,640 km"
        ],
        "correctIndex": 2,
        "rationale": "The borders table identifies 2,611 km as the Survey of Pakistan 2020 figure [1]."
    },
    {
        "question": "The antonym of 'Frank' is:",
        "options": [
            "Candid",
            "Open",
            "Reserved",
            "Subtle"
        ],
        "correctIndex": 2,
        "rationale": "The vocabulary table identifies 'Reserved' as the antonym for 'Frank' [16]."
    },
    {
        "question": "Vitamin B12 is chemically known as:",
        "options": [
            "Thiamine",
            "Riboflavin",
            "Niacin",
            "Cobalamin"
        ],
        "correctIndex": 3,
        "rationale": "The vitamins table identifies Vitamin B12 as Cobalamin [6]."
    },
    {
        "question": "What is the current number of seats in the Senate of Pakistan?",
        "options": [
            "80",
            "96",
            "104",
            "336"
        ],
        "correctIndex": 1,
        "rationale": "The constitution section states: 'Senate: 96 seats (since 2018; was 104)' [18]."
    },
    {
        "question": "On which date is 'Defence Day' celebrated in Pakistan?",
        "options": [
            "23 March",
            "14 August",
            "6 September",
            "25 December"
        ],
        "correctIndex": 2,
        "rationale": "The national dates list identifies 6 September as Defence Day [37]."
    },
    {
        "question": "The abbreviation 'HTML' stands for:",
        "options": [
            "HyperText Markup Language",
            "High Text Management Link",
            "Hyper Text Media Link",
            "Hyper Transfer Mode Link"
        ],
        "correctIndex": 0,
        "rationale": "The common abbreviations list identifies HTML as HyperText Markup Language [13]."
    },
    {
        "question": "Which Surah is the longest in the Holy Quran?",
        "options": [
            "Al-Baqarah",
            "Al-Imran",
            "An-Nisa",
            "Al-Maidah"
        ],
        "correctIndex": 0,
        "rationale": "The Quran section identifies Al-Baqarah (286 ayahs) as the longest Surah [10]."
    },
    {
        "question": "The synonym for 'Embezzle' is:",
        "options": [
            "Reimburse",
            "Misappropriate",
            "Capitulate",
            "Abate"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table identifies 'Misappropriate' as the synonym for 'Embezzle' [16]."
    },
    {
        "question": "A deficiency in Vitamin B6 (Pyridoxine) primarily causes which condition?",
        "options": [
            "Night blindness",
            "Beri-beri",
            "Scurvy",
            "Anemia / Neuropathy"
        ],
        "correctIndex": 3,
        "rationale": "The vitamins table identifies Anemia or Neuropathy as the deficiency disease for Vitamin B6 [6]."
    },
    {
        "question": "Which constitution was enforced on 14 August 1973?",
        "options": [
            "1956",
            "1962",
            "1973",
            "None"
        ],
        "correctIndex": 2,
        "rationale": "The comparison table identifies the 1973 Constitution as being enforced on 14 Aug 1973 [4]."
    },
    {
        "question": "Who is currently serving as the PM of Pakistan in his 2nd term?",
        "options": [
            "Asif Ali Zardari",
            "Shehbaz Sharif",
            "Murad Ali Shah",
            "Asim Munir"
        ],
        "correctIndex": 1,
        "rationale": "The political setup section confirms Shehbaz Sharif as PM (2nd term) since 4 Mar 2024 [5]."
    },
    {
        "question": "What is the 'National Sport' of Pakistan?",
        "options": [
            "Cricket",
            "Football",
            "Field Hockey",
            "Squash"
        ],
        "correctIndex": 2,
        "rationale": "The National Symbols table identifies Field Hockey as the national sport [32]."
    },
    {
        "question": "The abbreviation 'CPU' stands for:",
        "options": [
            "Central Processing Unit",
            "Central Program Utility",
            "Core Power Unit",
            "Computer Processing User"
        ],
        "correctIndex": 0,
        "rationale": "The common abbreviations list identifies CPU as Central Processing Unit [28]."
    },
    {
        "question": "How many Ayahs are there in the shortest Surah, Al-Kausar?",
        "options": [
            "3",
            "5",
            "10",
            "12"
        ],
        "correctIndex": 0,
        "rationale": "The Quran facts section identifies Al-Kausar (3 ayahs) as the shortest [10]."
    },
    {
        "question": "The synonym for 'Imperceptible' is:",
        "options": [
            "Obvious",
            "Subtle",
            "Candid",
            "Frank"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table identifies 'Subtle' as the synonym for 'Imperceptible' [16]."
    },
    {
        "question": "Which Sindh city is famous for Mohenjo-Daro, the Indus Valley UNESCO site?",
        "options": [
            "Karachi",
            "Hyderabad",
            "Sukkur",
            "Larkana"
        ],
        "correctIndex": 3,
        "rationale": "The Sindh GK section identifies Mohenjo-Daro in the Larkana district [39]."
    },
    {
        "question": "Which constitution introduced a 'Bicameral' legislature?",
        "options": [
            "1956",
            "1962",
            "1973",
            "None"
        ],
        "correctIndex": 2,
        "rationale": "The comparison table identifies the 1973 Constitution as the one that introduced a Bicameral legislature [18]."
    },
    {
        "question": "Who was sworn in as the Governor of Sindh in March 2026?",
        "options": [
            "Kamran Tessori",
            "Nehal Hashmi",
            "Syed Murad Ali Shah",
            "Zafar Ahmed Rajput"
        ],
        "correctIndex": 1,
        "rationale": "Nehal Hashmi was sworn in as the new Governor of Sindh on 13 March 2026 [13]."
    },
    {
        "question": "The 'Markhor' name literally means:",
        "options": [
            "Mountain king",
            "Snake-eater",
            "Snow hunter",
            "Wild goat"
        ],
        "correctIndex": 1,
        "rationale": "The National Symbols table identifies the Markhor as the 'snake-eater' [38]."
    },
    {
        "question": "The Jhelum River originates from which specific location in Indian-Occupied Jammu & Kashmir?",
        "options": [
            "Bara Lacha Pass",
            "Verinag spring",
            "Rakshastal Lake",
            "Beas Kund"
        ],
        "correctIndex": 1,
        "rationale": "The Rivers of Pakistan table [1] identifies 'Verinag spring, Pir Panjal' as the origin of the Jhelum River."
    },
    {
        "question": "At which confluence point does the Jhelum River join the Chenab River?",
        "options": [
            "Trimmu",
            "Rangpur",
            "Mithankot",
            "Uch Sharif"
        ],
        "correctIndex": 0,
        "rationale": "The source [1] states the Jhelum River ends its course at the 'Chenab at Trimmu'."
    },
    {
        "question": "Which river is formed by the confluence of the Chandra and Bhaga rivers in Himachal Pradesh?",
        "options": [
            "Ravi",
            "Jhelum",
            "Chenab",
            "Sutlej"
        ],
        "correctIndex": 2,
        "rationale": "The rivers table [1, 2] explains that the Chenab is formed by the meeting of the Chandra and Bhaga rivers, often called the Chandrabhaga."
    },
    {
        "question": "The Ravi River, which originates at the Rohtang Pass, joins the Chenab near which location?",
        "options": [
            "Trimmu",
            "Rangpur",
            "Panjnad",
            "Mithankot"
        ],
        "correctIndex": 1,
        "rationale": "According to the study guide [2], the Ravi River joins the Chenab near Rangpur."
    },
    {
        "question": "Which river joins the Chenab near Uch Sharif to form the Panjnad?",
        "options": [
            "Ravi",
            "Jhelum",
            "Sutlej",
            "Beas"
        ],
        "correctIndex": 2,
        "rationale": "The source [2] identifies that the Sutlej River joins the Chenab at Panjnad near Uch Sharif."
    },
    {
        "question": "Under the Indus Waters Treaty of 1960, which three 'eastern' rivers were allocated to India?",
        "options": [
            "Indus, Jhelum, Chenab",
            "Ravi, Beas, Sutlej",
            "Indus, Kabul, Swat",
            "Jhelum, Ravi, Sutlej"
        ],
        "correctIndex": 1,
        "rationale": "The text [2] specifies that India was allocated the three eastern rivers: Ravi, Beas, and Sutlej."
    },
    {
        "question": "Which of the following is listed as a 'right bank' tributary of the Indus River?",
        "options": [
            "Zanskar",
            "Jhelum",
            "Kabul",
            "Ravi"
        ],
        "correctIndex": 2,
        "rationale": "The source [3] categorizes the Kabul River as a right-bank tributary, while Zanskar and the Punjab rivers are left-bank tributaries."
    },
    {
        "question": "At which specific location does the Panjnad confluence join the Indus River?",
        "options": [
            "Sukkur",
            "Mithankot",
            "Kotri",
            "Guddu"
        ],
        "correctIndex": 1,
        "rationale": "The text [3] states that the Panjnad joins the Indus at Mithankot."
    },
    {
        "question": "What is the approximate size of the Thar Desert, the largest desert in Pakistan?",
        "options": [
            "140,914 km²",
            "175,000 km²",
            "347,190 km²",
            "881,913 km²"
        ],
        "correctIndex": 1,
        "rationale": "The desert section [3] identifies the Thar Desert as being 175,000 km²."
    },
    {
        "question": "The Cholistan Desert (Rohi) is famous for which historical site and event?",
        "options": [
            "Mohenjo-Daro & Tourism",
            "Derawar Fort & Jeep Rally",
            "Chagai-II Nuclear Test",
            "Kirthar National Park"
        ],
        "correctIndex": 1,
        "rationale": "The source [3, 4] identifies Cholistan as the site of Derawar Fort and the Cholistan Desert Jeep Rally."
    },
    {
        "question": "Which desert is located between the Indus and Jhelum rivers in Punjab?",
        "options": [
            "Thar",
            "Cholistan",
            "Thal",
            "Kharan"
        ],
        "correctIndex": 2,
        "rationale": "The study guide [4] states the Thal Desert is located between the Indus and Jhelum."
    },
    {
        "question": "Katpana, Pakistan's cold desert, is located at an elevation of approximately:",
        "options": [
            "1,070 m",
            "2,200 m",
            "3,700 m",
            "4,693 m"
        ],
        "correctIndex": 1,
        "rationale": "The desert section [4] identifies the Katpana cold desert as being at an elevation of approximately 2,200 m."
    },
    {
        "question": "What is the approximate surface area of Manchar Lake, the largest natural freshwater lake in South Asia?",
        "options": [
            "96 km²",
            "350–520 km²",
            "1,046 km²",
            "7.63 million acres"
        ],
        "correctIndex": 1,
        "rationale": "The lakes table [5] identifies Manchar Lake's significance and its area as 350–520 km²."
    },
    {
        "question": "Which lake in Pakistan is noted for being a 'Ramsar site' and the primary water supply for Karachi?",
        "options": [
            "Manchar Lake",
            "Keenjhar / Kalri Lake",
            "Satpara Lake",
            "Attabad Lake"
        ],
        "correctIndex": 1,
        "rationale": "The lakes table [5] lists Keenjhar / Kalri Lake as a Ramsar site and Karachi's water supply."
    },
    {
        "question": "The Attabad Lake in Hunza, Gilgit-Baltistan, was formed in 2010 by what event?",
        "options": [
            "Earthquake",
            "Tsunami",
            "Landslide",
            "Volcanic eruption"
        ],
        "correctIndex": 2,
        "rationale": "The source [5] notes Attabad Lake was 'formed by 2010 landslide on Hunza River'."
    },
    {
        "question": "Which lake is identified as a bird sanctuary in the Thatta district of Sindh?",
        "options": [
            "Manchar Lake",
            "Hanna Lake",
            "Haleji Lake",
            "Rush Lake"
        ],
        "correctIndex": 2,
        "rationale": "The lakes table [6] identifies Haleji Lake in Thatta as a bird sanctuary."
    },
    {
        "question": "The Sukkur Barrage (Lloyd Barrage) features how many gates for irrigation?",
        "options": [
            "44 gates",
            "66 gates",
            "7 gates",
            "3 gates"
        ],
        "correctIndex": 1,
        "rationale": "The barrages section [6] specifies that the Sukkur Barrage has 66 gates."
    },
    {
        "question": "Which canal associated with the Sukkur Barrage is the longest canal in Pakistan?",
        "options": [
            "Rohri Canal",
            "Nara Canal",
            "Kalri-Baghar Feeder",
            "Upper Chenab Canal"
        ],
        "correctIndex": 1,
        "rationale": "The text [6, 7] explicitly states: 'Nara Canal is the longest canal in Pakistan'."
    },
    {
        "question": "Which major barrage was completed in 1971 on the Indus River?",
        "options": [
            "Taunsa Barrage",
            "Chashma Barrage",
            "Jinnah Barrage",
            "Kotri Barrage"
        ],
        "correctIndex": 1,
        "rationale": "The list of major barrages [7] includes Chashma, completed in 1971."
    },
    {
        "question": "According to Britannica (March 2026), what is the volume of the Tarbela Dam in cubic yards?",
        "options": [
            "106,000,000 yd³",
            "138,600,000 yd³",
            "875,000 yd³",
            "7.63 million yd³"
        ],
        "correctIndex": 1,
        "rationale": "The source [8] quotes Britannica stating the volume of the Tarbela Dam is 138,600,000 yd³."
    },
    {
        "question": "Which dam is located on the Kabul River according to the study guide?",
        "options": [
            "Tarbela Dam",
            "Mangla Dam",
            "Warsak Dam",
            "Diamer-Bhasha Dam"
        ],
        "correctIndex": 2,
        "rationale": "The guide [8] identifies Warsak as the dam on the Kabul River."
    },
    {
        "question": "The height of Mt. Everest was jointly declared as 8,848.86 meters in December 2020. What is this height in feet?",
        "options": [
            "24,149.43 feet",
            "29,031.69 feet",
            "28,251 feet",
            "30,000 feet"
        ],
        "correctIndex": 1,
        "rationale": "The world geography highlights [9] quote Britannica stating the height as 29,031.69 feet."
    },
    {
        "question": "Which choke point is nicknamed the 'Gate of Tears' (Bab-el-Mandeb) in world geography?",
        "options": [
            "Strait of Hormuz",
            "Bab-el-Mandeb",
            "Strait of Malacca",
            "Bosphorus"
        ],
        "correctIndex": 1,
        "rationale": "The source [9] lists Bab-el-Mandeb as a key choke point (commonly known as the Gate of Tears, though the nickname is implied by its inclusion in high-yield geography lists)."
    },
    {
        "question": "Field Marshal Syed Asim Munir was promoted to his current rank on which date?",
        "options": [
            "4 March 2024",
            "10 March 2024",
            "20 May 2025",
            "4 December 2025"
        ],
        "correctIndex": 2,
        "rationale": "The political setup section [10] identifies that he was promoted to Field Marshal on 20 May 2025."
    },
    {
        "question": "According to the 7th Population & Housing Census (2023), what is the annual growth rate of Pakistan's population?",
        "options": [
            "1.55%",
            "2.00%",
            "2.55%",
            "3.10%"
        ],
        "correctIndex": 2,
        "rationale": "The population section [11] states: 'Pakistan's population has increased... with an annual growth rate of 2.55%'."
    },
    {
        "question": "In the National Symbols of Pakistan, which year was the 'Qaumi Taranah' music composed?",
        "options": [
            "1947",
            "1949",
            "1954",
            "1956"
        ],
        "correctIndex": 1,
        "rationale": "The symbols table [12] identifies Ahmed G. Chagla as the composer of the music in 1949."
    },
    {
        "question": "Which animal is the National Predator of Pakistan?",
        "options": [
            "Markhor",
            "Snow Leopard",
            "Mugger Crocodile",
            "Indus Dolphin"
        ],
        "correctIndex": 1,
        "rationale": "The symbols list [13] explicitly identifies the Snow Leopard as the National Predator."
    },
    {
        "question": "What is the National Reptile of Pakistan?",
        "options": [
            "Snow Leopard",
            "Mugger Crocodile",
            "Mahseer",
            "Indus Dolphin"
        ],
        "correctIndex": 1,
        "rationale": "The National Symbols table [13] lists the Mugger Crocodile as the National Reptile."
    },
    {
        "question": "On which date is United Nations (UN) Day celebrated globally?",
        "options": [
            "22 April",
            "5 June",
            "24 October",
            "10 December"
        ],
        "correctIndex": 2,
        "rationale": "The international days table [14] identifies 24 October as UN Day."
    },
    {
        "question": "International Youth Day is observed annually on which date?",
        "options": [
            "12 August",
            "14 August",
            "8 September",
            "5 October"
        ],
        "correctIndex": 0,
        "rationale": "The list of international days [14] identifies 12 August as International Youth Day."
    },
    {
        "question": "Which international organization is identified as the 'Oldest IGO', founded in 1865?",
        "options": [
            "WHO",
            "ILO",
            "ITU",
            "WIPO"
        ],
        "correctIndex": 2,
        "rationale": "The organizations table [15] identifies the ITU (1865) as the 'Oldest IGO'."
    },
    {
        "question": "In which city is the headquarters of the International Civil Aviation Organization (ICAO) located?",
        "options": [
            "Geneva",
            "Paris",
            "Montreal",
            "London"
        ],
        "correctIndex": 2,
        "rationale": "The table [15] lists Montreal, Canada as the HQ for ICAO."
    },
    {
        "question": "The World Intellectual Property Organization (WIPO) was founded in which year?",
        "options": [
            "1945",
            "1950",
            "1967",
            "1993"
        ],
        "correctIndex": 2,
        "rationale": "The organization table [15] identifies 1967 as the year WIPO was founded."
    },
    {
        "question": "Which country boycotted the G20 Kashmir meeting held in India in 2023?",
        "options": [
            "China",
            "Pakistan",
            "Turkey",
            "Saudi Arabia"
        ],
        "correctIndex": 1,
        "rationale": "The organizations section [16] notes that 'Pakistan boycotted 2023 G20 Kashmir meeting'."
    },
    {
        "question": "Who led the 'Simla Deputation' of 35 prominent Muslim leaders in October 1906?",
        "options": [
            "Sir Syed Ahmad Khan",
            "Sir Aga Khan III",
            "Nawab Mohsin-ul-Mulk",
            "Quaid-e-Azam"
        ],
        "correctIndex": 1,
        "rationale": "The milestones table [17] identifies Sir Aga Khan III as the leader of the Simla Deputation."
    },
    {
        "question": "In which year did Allama Iqbal deliver his famous 'Allahabad Address'?",
        "options": [
            "1928",
            "1929",
            "1930",
            "1933"
        ],
        "correctIndex": 2,
        "rationale": "The milestones section [18] identifies 1930 as the year of Allama Iqbal's Allahabad Address."
    },
    {
        "question": "Which three British ministers composed the 'Cabinet Mission' of 1946?",
        "options": [
            "Mountbatten, Radcliffe, Durand",
            "Pethick-Lawrence, Cripps, Alexander",
            "Minto, Morley, Chelmsford",
            "Wavell, Nehru, Jinnah"
        ],
        "correctIndex": 1,
        "rationale": "The milestones section [18] lists the members as Pethick-Lawrence, Cripps, and A.V. Alexander."
    },
    {
        "question": "On which date was the 1956 Constitution of Pakistan enforced?",
        "options": [
            "14 August 1947",
            "23 March 1956",
            "8 June 1962",
            "14 August 1973"
        ],
        "correctIndex": 1,
        "rationale": "The constitution comparison table [19] identifies 23 March 1956 as the date of enforcement."
    },
    {
        "question": "Which constitution introduced a 'Presidential' form of government for Pakistan?",
        "options": [
            "1956",
            "1962",
            "1973",
            "All three"
        ],
        "correctIndex": 1,
        "rationale": "The comparison table [19] lists only the 1962 Constitution as Presidential."
    },
    {
        "question": "How many total seats are there in the National Assembly of Pakistan as per the 1973 Constitution metric?",
        "options": [
            "266",
            "96",
            "336",
            "104"
        ],
        "correctIndex": 2,
        "rationale": "The source [20] identifies the National Assembly as having 336 seats."
    },
    {
        "question": "The 'Objectives Resolution' was made a substantive part of the 1973 Constitution via which amendment?",
        "options": [
            "1st Amendment",
            "8th Amendment",
            "13th Amendment",
            "18th Amendment"
        ],
        "correctIndex": 1,
        "rationale": "The constitution section [20] states it was added via Article 2-A by the 8th Amendment (1985)."
    },
    {
        "question": "Which constitutional article deals with the 'Right to free and compulsory education' for ages 5–16?",
        "options": [
            "Article 2",
            "Article 6",
            "Article 19",
            "Article 25-A"
        ],
        "correctIndex": 3,
        "rationale": "The text [21] identifies Article 25-A as the article for free & compulsory education."
    },
    {
        "question": "Who was the first Prime Minister of Pakistan, assassinated in 1951?",
        "options": [
            "Quaid-e-Azam",
            "Liaquat Ali Khan",
            "Z.A. Bhutto",
            "Chaudhry Muhammad Ali"
        ],
        "correctIndex": 1,
        "rationale": "The personalities section [21] identifies Liaquat Ali Khan as the 1st PM, assassinated on 16 Oct 1951."
    },
    {
        "question": "Which of the following books was authored by Sir Syed Ahmad Khan?",
        "options": [
            "Bang-e-Dara",
            "Asar-us-Sanadid",
            "Asrar-e-Khudi",
            "Now or Never"
        ],
        "correctIndex": 1,
        "rationale": "The source [21] lists 'Asar-us-Sanadid' and 'Tehzeeb-ul-Akhlaq' as books by Sir Syed Ahmad Khan."
    },
    {
        "question": "In which city was the first Prime Minister of Pakistan, Liaquat Ali Khan, assassinated?",
        "options": [
            "Karachi",
            "Lahore",
            "Rawalpindi",
            "Islamabad"
        ],
        "correctIndex": 2,
        "rationale": "The personality summary [21] states he was assassinated in Rawalpindi."
    },
    {
        "question": "The 'Simla Agreement' of 1972 was signed between Z.A. Bhutto and which Indian leader?",
        "options": [
            "Lal Bahadur Shastri",
            "Indira Gandhi",
            "Jawaharlal Nehru",
            "Morarji Desai"
        ],
        "correctIndex": 1,
        "rationale": "The treaties section [22] identifies the Simla Agreement (2 July 1972) was between Bhutto and Indira Gandhi."
    },
    {
        "question": "Chemical name of Vitamin B3 is:",
        "options": [
            "Thiamine",
            "Riboflavin",
            "Niacin",
            "Biotin"
        ],
        "correctIndex": 2,
        "rationale": "The vitamins table [23] identifies Vitamin B3 as Niacin."
    },
    {
        "question": "A deficiency in Vitamin B5 (Pantothenic acid) can cause which rare condition?",
        "options": [
            "Beri-beri",
            "Pellagra",
            "Paresthesia",
            "Anemia"
        ],
        "correctIndex": 2,
        "rationale": "The vitamins table [23] identifies Paresthesia as the deficiency symptom for Vitamin B5."
    },
    {
        "question": "Which vitamin is also known as 'Biotin'?",
        "options": [
            "Vitamin B6",
            "Vitamin B7",
            "Vitamin B9",
            "Vitamin B12"
        ],
        "correctIndex": 1,
        "rationale": "The vitamins table [23] lists Vitamin B7 as Biotin."
    },
    {
        "question": "Deficiency of Vitamin B9 (Folic acid) results in:",
        "options": [
            "Scurvy",
            "Night blindness",
            "Megaloblastic anemia",
            "Pernicious anemia"
        ],
        "correctIndex": 2,
        "rationale": "The vitamins table [23] correlates Vitamin B9 deficiency with Megaloblastic anemia."
    },
    {
        "question": "Which part of the human heart is responsible for pumping deoxygenated blood to the lungs?",
        "options": [
            "Left side",
            "Right side",
            "Both sides",
            "Aorta"
        ],
        "correctIndex": 1,
        "rationale": "The human body basics [24] specify: 'right side pumps deoxygenated blood to lungs'."
    },
    {
        "question": "What is the weight of an average human brain as per the study guide?",
        "options": [
            "~1.0 kg",
            "~1.4 kg",
            "~2.0 kg",
            "~0.5 kg"
        ],
        "correctIndex": 1,
        "rationale": "The body facts [24] state: 'Brain weight: ~1.4 kg'."
    },
    {
        "question": "In the human digestive system, where is the most absorption completed?",
        "options": [
            "Stomach",
            "Small intestine",
            "Large intestine",
            "Liver"
        ],
        "correctIndex": 1,
        "rationale": "The body basics [24] state: 'Digestion completed in: Small intestine (most absorption)'."
    },
    {
        "question": "Which hormone is secreted by the β-cells of the Islets of Langerhans in the pancreas?",
        "options": [
            "Glucagon",
            "Insulin",
            "Adrenaline",
            "Thyroxine"
        ],
        "correctIndex": 1,
        "rationale": "The science section [24] identifies 'Insulin: secreted by pancreas (β-cells of Islets of Langerhans)'."
    },
    {
        "question": "Vitamin D is synthesized in the skin via sunlight. What is its active form?",
        "options": [
            "Retinol",
            "Ascorbic acid",
            "Calcitriol",
            "Tocopherol"
        ],
        "correctIndex": 2,
        "rationale": "The science section [25] identifies the active form of Vitamin D as Calcitriol."
    },
    {
        "question": "What is the formula for 'Photosynthesis' according to the Science facts section?",
        "options": [
            "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
            "6CO₂ + 6O₂ → C₆H₁₂O₆ + 6H₂O",
            "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O",
            "H₂O + O₂ → CO₂ + Sugar"
        ],
        "correctIndex": 0,
        "rationale": "The quick science facts [26] provide the formula for photosynthesis as 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂."
    },
    {
        "question": "Which planet in our solar system is identified as the 'hottest/brightest'?",
        "options": [
            "Mercury",
            "Venus",
            "Mars",
            "Jupiter"
        ],
        "correctIndex": 1,
        "rationale": "The quick science facts [26, 27] identify Venus as the hottest/brightest planet."
    },
    {
        "question": "In mathematics, if the differences between numbers in a series are 4, 6, 8, and 10, what is the next number after 29?",
        "options": [
            "35",
            "39",
            "41",
            "45"
        ],
        "correctIndex": 2,
        "rationale": "The math section [27] provides the example 1, 5, 11, 19, 29 where the next difference is 12, making the next number 41."
    },
    {
        "question": "Complete the analogy: Wood : Furniture :: Cotton : ?",
        "options": [
            "Forest",
            "Cloth",
            "Tools",
            "Iron"
        ],
        "correctIndex": 1,
        "rationale": "The math section [28] uses the raw material : product analogy where Cotton leads to Cloth."
    },
    {
        "question": "What is the synonym for the vocabulary word 'Recuperate'?",
        "options": [
            "Worsen",
            "Recover",
            "Yield",
            "Showy"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table [29] lists 'Recover' or 'Heal' as the synonym for 'Recuperate'."
    },
    {
        "question": "What is the antonym of the word 'Recuperate'?",
        "options": [
            "Heal",
            "Recover",
            "Worsen",
            "Abate"
        ],
        "correctIndex": 2,
        "rationale": "The vocabulary table [29] identifies 'Worsen' as the antonym for 'Recuperate'."
    },
    {
        "question": "The idiom 'Above board' means:",
        "options": [
            "Secretive",
            "Honest and transparent",
            "Very rarely",
            "Unknown competitor"
        ],
        "correctIndex": 1,
        "rationale": "The idiom list [29] defines 'Above board' as honest and transparent."
    },
    {
        "question": "The idiom 'A dark horse' refers to:",
        "options": [
            "A person of bad character",
            "An unknown competitor",
            "A very busy person",
            "A person who resembles their parent"
        ],
        "correctIndex": 1,
        "rationale": "The idioms section [29] defines 'A dark horse' as an unknown competitor."
    },
    {
        "question": "What is the one-word substitution for 'a person who believes in 100 years'?",
        "options": [
            "Theist",
            "Centenarian",
            "Posthumous",
            "Soporific"
        ],
        "correctIndex": 1,
        "rationale": "The substitution list [30] defines a 'Centenarian' as one who lives 100 years."
    },
    {
        "question": "Which preposition is correctly paired with the word 'trembling'?",
        "options": [
            "to",
            "from",
            "with",
            "of"
        ],
        "correctIndex": 2,
        "rationale": "The preposition list [30] specifies the usage as 'trembling with'."
    },
    {
        "question": "The Zakat rate is 2.5% on savings annually. This is one of the pillars of Islam. Which pillar is it?",
        "options": [
            "2nd Pillar",
            "3rd Pillar",
            "4th Pillar",
            "5th Pillar"
        ],
        "correctIndex": 1,
        "rationale": "The Islamic studies section [31, 32] lists Zakat as the 3rd Pillar of Islam."
    },
    {
        "question": "On which dates of the Islamic month of Dhul-Hijjah is the Hajj pilgrimage performed?",
        "options": [
            "1st–10th",
            "8th–13th",
            "10th–15th",
            "27th–29th"
        ],
        "correctIndex": 1,
        "rationale": "The Hajj section [32] identifies the dates as 8–13 Dhul-Hijjah."
    },
    {
        "question": "Which Caliph of Islam is responsible for the standardization of the Quran (Mushaf-e-Usmani)?",
        "options": [
            "Hazrat Abu Bakr",
            "Hazrat Umar",
            "Hazrat Usman Ghani",
            "Hazrat Ali"
        ],
        "correctIndex": 2,
        "rationale": "The Islamic history section [33] identifies Hazrat Usman (RA) as the one who standardized the Quran."
    },
    {
        "question": "Who was the primary scribe responsible for writing down the first compilation of the Quran?",
        "options": [
            "Hazrat Umar",
            "Hazrat Zaid bin Thabit",
            "Hazrat Usman",
            "Hazrat Abu Bakr"
        ],
        "correctIndex": 1,
        "rationale": "The source [33] identifies the first compilation was 'written by Hazrat Zaid bin Thabit (RA)'."
    },
    {
        "question": "According to the study guide, in what Hijri year did the 'Conquest of Makkah' take place?",
        "options": [
            "2 AH",
            "5 AH",
            "8 AH",
            "10 AH"
        ],
        "correctIndex": 2,
        "rationale": "The life events section [34] identifies the Conquest of Makkah as 8 AH / 630 CE."
    },
    {
        "question": "The first major battle of Islam, the Battle of Badr (2 AH), saw a Muslim force of how many men?",
        "options": [
            "313",
            "1,000",
            "3,000",
            "1,500"
        ],
        "correctIndex": 0,
        "rationale": "The battles table [34] identifies the count for Badr as '313 vs 1,000'."
    },
    {
        "question": "Which companion suggested the digging of a trench during the Battle of Khandaq (5 AH)?",
        "options": [
            "Hazrat Abu Bakr",
            "Hazrat Umar",
            "Hazrat Salman Farsi",
            "Hazrat Ali"
        ],
        "correctIndex": 2,
        "rationale": "The battles section [34] states the trench was 'suggested by Salman Farsi (RA)'."
    },
    {
        "question": "Who was the 2nd Rightly Guided Caliph of Islam (634–644 CE) who started the Islamic calendar?",
        "options": [
            "Hazrat Abu Bakr",
            "Hazrat Umar Farooq",
            "Hazrat Usman Ghani",
            "Hazrat Ali"
        ],
        "correctIndex": 1,
        "rationale": "The Caliphs section [35] identifies Hazrat Umar Farooq as the 2nd Caliph who started the Islamic calendar."
    },
    {
        "question": "At which location was the 4th Caliph, Hazrat Ali (RA), martyred?",
        "options": [
            "Makkah",
            "Madina",
            "Kufa",
            "Damascus"
        ],
        "correctIndex": 2,
        "rationale": "The Caliphs table [35] identifies Hazrat Ali was 'martyred at Kufa by Ibn Muljim'."
    },
    {
        "question": "In which Hijri year was the 'Hijri calendar' officially started during the caliphate of Hazrat Umar (RA)?",
        "options": [
            "1 AH",
            "17 AH",
            "23 AH",
            "622 AH"
        ],
        "correctIndex": 1,
        "rationale": "The Key Facts section [36] identifies that the 'Hijri year started... in 17 AH'."
    },
    {
        "question": "Who are identified as the 'Fathers of the Internet'?",
        "options": [
            "Charles Babbage",
            "Vint Cerf and Bob Kahn",
            "Tim Berners-Lee",
            "Bill Gates"
        ],
        "correctIndex": 1,
        "rationale": "The IT fundamentals section [37] identifies 'Father of Internet: Vint Cerf (also Bob Kahn)'."
    },
    {
        "question": "Which technology was utilized in the 'Fourth Generation' of computers?",
        "options": [
            "Vacuum tubes",
            "Transistors",
            "Integrated Circuits (ICs)",
            "Microprocessors"
        ],
        "correctIndex": 3,
        "rationale": "The computer generations list [37] identifies the 4th generation as using microprocessors."
    },
    {
        "question": "One Terabyte (TB) is equal to how many Gigabytes (GB)?",
        "options": [
            "1,000 GB",
            "1,024 GB",
            "1,024 MB",
            "1,000 MB"
        ],
        "correctIndex": 1,
        "rationale": "The memory units table [38] identifies 1 TB = 1,024 GB."
    },
    {
        "question": "In MS Office applications, the '.xlsx' file extension is used for which program?",
        "options": [
            "MS Word",
            "MS Excel",
            "MS PowerPoint",
            "PDF"
        ],
        "correctIndex": 1,
        "rationale": "The common file types section [39] identifies '.xls/.xlsx' as Excel files."
    },
    {
        "question": "The World Wide Web (WWW) was invented in 1989 at which location?",
        "options": [
            "Silicon Valley",
            "CERN",
            "MIT",
            "New York"
        ],
        "correctIndex": 1,
        "rationale": "The internet section [39] identifies WWW as invented by Tim Berners-Lee in 1989 at CERN."
    },
    {
        "question": "What does 'DNS' stand for in internet and networking terminology?",
        "options": [
            "Digital Network System",
            "Domain Name System",
            "Data Network Service",
            "Direct Network Serial"
        ],
        "correctIndex": 1,
        "rationale": "The networks section [39] identifies DNS as that which translates names to IPs."
    },
    {
        "question": "In terms of population, where does Sindh rank among the provinces of Pakistan?",
        "options": [
            "1st",
            "2nd",
            "3rd",
            "4th"
        ],
        "correctIndex": 1,
        "rationale": "The Sindh GK section [40] identifies Sindh as '2nd largest by population'."
    },
    {
        "question": "What is the approximate height of Gorakh Hill, the highest peak of Sindh?",
        "options": [
            "1,070 m",
            "1,734 m",
            "3,118 m",
            "4,693 m"
        ],
        "correctIndex": 1,
        "rationale": "The Sindh section [41] identifies Gorakh Hill at ~1,734 m."
    },
    {
        "question": "On which date did the Sindh Assembly become the first legislature to pass the Pakistan Resolution?",
        "options": [
            "23 March 1940",
            "3 March 1943",
            "14 August 1947",
            "3 June 1947"
        ],
        "correctIndex": 1,
        "rationale": "The Sindh history section [42] states the assembly passed the resolution on 3 March 1943."
    },
    {
        "question": "The 'Durand Line' length according to Survey of Pakistan 2020 is:",
        "options": [
            "2,252 km",
            "2,430 km",
            "2,611 km",
            "2,640 km"
        ],
        "correctIndex": 2,
        "rationale": "The borders table [43, 44] identifies 2,611 km as the Survey of Pakistan 2020 figure."
    },
    {
        "question": "Who is the author of the book 'Das Kapital'?",
        "options": [
            "Karl Marx",
            "Adam Smith",
            "Max Weber",
            "John Keynes"
        ],
        "correctIndex": 0,
        "rationale": "The SPSC February 2024 past paper identifies Karl Marx as the author of 'Das Kapital' [1]."
    },
    {
        "question": "Which United States President resigned from office?",
        "options": [
            "John F. Kennedy",
            "Richard Nixon",
            "Gerald Ford",
            "Ronald Reagan"
        ],
        "correctIndex": 1,
        "rationale": "The 2024 past paper highlights Richard Nixon as the US president who resigned [1]."
    },
    {
        "question": "In which year was the First Battle of Panipat fought?",
        "options": [
            "1526",
            "1556",
            "1761",
            "1192"
        ],
        "correctIndex": 0,
        "rationale": "The source identifies 1526 as the year of the First Battle of Panipat [1]."
    },
    {
        "question": "Who is the author of the biography 'Jinnah of Pakistan'?",
        "options": [
            "Stanley Wolpert",
            "Jaswant Singh",
            "Hector Bolitho",
            "Ayesha Jalal"
        ],
        "correctIndex": 0,
        "rationale": "Stanley Wolpert is listed as the author of 'Jinnah of Pakistan' in the past paper snapshot [1]."
    },
    {
        "question": "Who is currently serving as the Secretary General of the Arab League?",
        "options": [
            "Ahmed Aboul Gheit",
            "Antonio Guterres",
            "Ban Ki-moon",
            "Kofi Annan"
        ],
        "correctIndex": 0,
        "rationale": "The study guide identifies Ahmed Aboul Gheit as the Secretary General of the Arab League [1]."
    },
    {
        "question": "What was the total number of registered voters in the 2024 Pakistan general elections?",
        "options": [
            "100,585,760",
            "128,585,760",
            "148,585,760",
            "158,585,760"
        ],
        "correctIndex": 2,
        "rationale": "The 2024 past paper data lists 148,585,760 registered voters for the 2024 elections [1]."
    },
    {
        "question": "According to historically accepted facts, with which declaration or pact did the 1965 war end?",
        "options": [
            "Simla Agreement",
            "Tashkent Declaration",
            "Lahore Pact",
            "Delhi Accord"
        ],
        "correctIndex": 1,
        "rationale": "While some keys show errors, the historically accepted answer provided is the Tashkent Declaration (1966) [1, 2]."
    },
    {
        "question": "On which date does Pakistan's financial year officially begin?",
        "options": [
            "1st January",
            "1st April",
            "1st June",
            "1st July"
        ],
        "correctIndex": 3,
        "rationale": "The guide specifies that Pakistan's financial year starts on 1st July [1, 3]."
    },
    {
        "question": "In which year was the United Nations (UN) officially formed?",
        "options": [
            "1919",
            "1944",
            "1945",
            "1948"
        ],
        "correctIndex": 2,
        "rationale": "The United Nations was formed in 1945 [2, 4]."
    },
    {
        "question": "On which river is the Diamer-Bhasha Dam currently under construction?",
        "options": [
            "Jhelum River",
            "Indus River",
            "Chenab River",
            "Kabul River"
        ],
        "correctIndex": 1,
        "rationale": "The source identifies the Diamer-Bhasha Dam as being located on the Indus River [2, 5]."
    },
    {
        "question": "In which year did Pakistan officially become an 'Islamic Republic' for the first time?",
        "options": [
            "1947",
            "1956",
            "1962",
            "1973"
        ],
        "correctIndex": 1,
        "rationale": "Pakistan became an Islamic Republic with the 1956 Constitution [2, 3]."
    },
    {
        "question": "What is the name of the first indigenous aircraft manufactured by Pakistan?",
        "options": [
            "F-16 Falcon",
            "JF-17 Thunder",
            "Mushshak",
            "Super Mushshak"
        ],
        "correctIndex": 1,
        "rationale": "The JF-17 Thunder is identified as the first Pakistani indigenous aircraft [2]."
    },
    {
        "question": "Who is recognized as the 'Father of the Internet' in IT fundamentals?",
        "options": [
            "Charles Babbage",
            "Vint Cerf",
            "Tim Berners-Lee",
            "Bill Gates"
        ],
        "correctIndex": 1,
        "rationale": "The source identifies Vint Cerf (along with Bob Kahn) as the Father of the Internet [2, 6]."
    },
    {
        "question": "How many barrages are located in the province of Sindh?",
        "options": [
            "2",
            "3",
            "5",
            "7"
        ],
        "correctIndex": 1,
        "rationale": "There are 3 barrages in Sindh: Guddu, Sukkur, and Kotri [2, 7]."
    },
    {
        "question": "Which of the following is considered the oldest university in the world?",
        "options": [
            "Oxford University",
            "University of Bologna",
            "Cambridge University",
            "Al-Azhar University"
        ],
        "correctIndex": 1,
        "rationale": "The 2024 past paper identifies the University of Bologna as the oldest university in the world [8]."
    },
    {
        "question": "Into how many world time zones is the Earth divided?",
        "options": [
            "12",
            "24",
            "36",
            "48"
        ],
        "correctIndex": 1,
        "rationale": "The Earth is divided into 24 time zones [8, 9]."
    },
    {
        "question": "Which continent is the second most populous in the world?",
        "options": [
            "Asia",
            "Africa",
            "Europe",
            "North America"
        ],
        "correctIndex": 1,
        "rationale": "Africa is identified as the second most populous continent after Asia [8, 9]."
    },
    {
        "question": "Who represented India in signing the Indus Waters Treaty in 1960?",
        "options": [
            "Lal Bahadur Shastri",
            "Indira Gandhi",
            "Jawaharlal Nehru",
            "Mahatma Gandhi"
        ],
        "correctIndex": 2,
        "rationale": "The treaty was signed by Ayub Khan and Jawaharlal Nehru in Karachi [8, 10]."
    },
    {
        "question": "What does the abbreviation 'PRSS' stand for in Pakistan's space program?",
        "options": [
            "Pakistan Rocket Sensing Satellite",
            "Pakistan Remote Sensing Satellite",
            "Primary Regional Satellite System",
            "Pakistan Radar Space Station"
        ],
        "correctIndex": 1,
        "rationale": "PRSS stands for Pakistan Remote Sensing Satellite [8]."
    },
    {
        "question": "Who was the first Secretary-General of the United Nations?",
        "options": [
            "Trygve Lie",
            "U Thant",
            "Kurt Waldheim",
            "Dag Hammarskjöld"
        ],
        "correctIndex": 0,
        "rationale": "Trygve Lie of Norway was the first UN Secretary-General (1946–52) [8]."
    },
    {
        "question": "Between the melting point and boiling point, a substance is in which state?",
        "options": [
            "Solid",
            "Liquid",
            "Gas",
            "Plasma"
        ],
        "correctIndex": 1,
        "rationale": "The science section clarifies that between melting and boiling, a substance is liquid [11]."
    },
    {
        "question": "Which country won the AFC Asian Cup 2024?",
        "options": [
            "Jordan",
            "Qatar",
            "Japan",
            "South Korea"
        ],
        "correctIndex": 1,
        "rationale": "The 2024 past paper snapshot lists Qatar as the winner [11]."
    },
    {
        "question": "What is the English vocabulary term for a person who speaks very little?",
        "options": [
            "Loquacious",
            "Reticent",
            "Pedantic",
            "Imperceptible"
        ],
        "correctIndex": 1,
        "rationale": "Reticent is the term for one who speaks little or is reserved [11-13]."
    },
    {
        "question": "A style of speaking or writing that is showy of knowledge is termed as:",
        "options": [
            "Candid",
            "Pedantic",
            "Frank",
            "Subtle"
        ],
        "correctIndex": 1,
        "rationale": "Pedantic refers to a style displaying bookish knowledge [11-13]."
    },
    {
        "question": "What is the total length of the Pakistan coastline along the Arabian Sea?",
        "options": [
            "909 km",
            "1,046 km",
            "2,611 km",
            "7,257 km"
        ],
        "correctIndex": 1,
        "rationale": "The coastline of Pakistan is 1,046 km long [14, 15]."
    },
    {
        "question": "Which strip of land separates Pakistan from Tajikistan?",
        "options": [
            "Sir Creek",
            "LoC",
            "Wakhan Corridor",
            "Durand Line"
        ],
        "correctIndex": 2,
        "rationale": "The Wakhan Corridor is a strip of Afghanistan approximately 16 km wide that separates Pakistan from Tajikistan [15]."
    },
    {
        "question": "The Line of Control (LoC) in Kashmir was established through which agreements?",
        "options": [
            "Tashkent & Simla",
            "Karachi (1949) & Simla (1972)",
            "Lucknow Pact",
            "Radcliffe Award"
        ],
        "correctIndex": 1,
        "rationale": "The LoC divides Kashmir since the Karachi and Simla agreements [16]."
    },
    {
        "question": "Which pass is located on the Karakoram Highway and connects Pakistan to China?",
        "options": [
            "Khyber Pass",
            "Bolan Pass",
            "Khunjerab Pass",
            "Babusar Pass"
        ],
        "correctIndex": 2,
        "rationale": "The Khunjerab Pass is the highest pass connecting Hunza-Nagar to Xinjiang, China [16]."
    },
    {
        "question": "Which pass connects Chitral to the Ghizer district of Gilgit-Baltistan and is the site of a famous Polo Festival?",
        "options": [
            "Lowari Pass",
            "Shandur Pass",
            "Dorah Pass",
            "Babusar Pass"
        ],
        "correctIndex": 1,
        "rationale": "Shandur Pass, known as the 'Roof of the World,' connects Chitral and Ghizer [17]."
    },
    {
        "question": "Which mountain pass connects Qilla Abdullah to Chaman in Balochistan?",
        "options": [
            "Bolan Pass",
            "Khojak Pass",
            "Gomal Pass",
            "Kilik Pass"
        ],
        "correctIndex": 1,
        "rationale": "The Khojak Pass (2,290 m) connects Qilla Abdullah to Chaman [17]."
    },
    {
        "question": "The Malakand Pass was the site of a famous battle and connects Peshawar to which region?",
        "options": [
            "Chitral",
            "Dir",
            "Gilgit",
            "Swat"
        ],
        "correctIndex": 0,
        "rationale": "Malakand Pass connects Peshawar to Chitral and was the site of the Battle of Malakand [18]."
    },
    {
        "question": "Which river is identified as the 'National River' of Pakistan?",
        "options": [
            "Jhelum",
            "Chenab",
            "Indus",
            "Ravi"
        ],
        "correctIndex": 2,
        "rationale": "The Indus River is the national river of Pakistan [18, 19]."
    },
    {
        "question": "Which Punjab river is entirely located within India before meeting the Sutlej at Harike?",
        "options": [
            "Ravi",
            "Beas",
            "Chenab",
            "Jhelum"
        ],
        "correctIndex": 1,
        "rationale": "The Beas River (~470 km) is entirely in India [10]."
    },
    {
        "question": "Which of the following are categorized as 'left bank' tributaries of the Indus River?",
        "options": [
            "Shyok and Gilgit",
            "Swat and Kabul",
            "Zanskar and the five Punjab rivers",
            "Hunza and Gomal"
        ],
        "correctIndex": 2,
        "rationale": "The Zanskar and the five Punjab rivers are left-bank tributaries [20]."
    },
    {
        "question": "Which desert is the 9th largest subtropical desert in the world and extends into India's Rajasthan?",
        "options": [
            "Thar Desert",
            "Thal Desert",
            "Cholistan Desert",
            "Kharan Desert"
        ],
        "correctIndex": 0,
        "rationale": "The Thar Desert in Sindh is the largest in Pakistan and 9th largest subtropical desert globally [20]."
    },
    {
        "question": "Which lake is located in the Kaghan Valley and is the subject of a famous folk tale involving a prince?",
        "options": [
            "Manchar Lake",
            "Saif-ul-Malook",
            "Attabad Lake",
            "Sheosar Lake"
        ],
        "correctIndex": 1,
        "rationale": "Lake Saif-ul-Malook is associated with the folk tale of Prince Saiful Malook [21]."
    },
    {
        "question": "Which lake in Gilgit-Baltistan is noted for its 'tear-shaped' alpine appearance?",
        "options": [
            "Rush Lake",
            "Ansoo Lake",
            "Satpara Lake",
            "Kachura Lake"
        ],
        "correctIndex": 1,
        "rationale": "Ansoo Lake is described as a 'tear-shaped' alpine lake [22]."
    },
    {
        "question": "Which is the largest earth-and-rock-fill dam in the world by volume?",
        "options": [
            "Mangla Dam",
            "Warsak Dam",
            "Tarbela Dam",
            "Diamer-Bhasha Dam"
        ],
        "correctIndex": 2,
        "rationale": "Tarbela Dam is the world's largest earth-and-rock-fill dam by volume [5, 23]."
    },
    {
        "question": "Which city is nicknamed the 'Fruit Garden of Pakistan'?",
        "options": [
            "Peshawar",
            "Quetta",
            "Lahore",
            "Karachi"
        ],
        "correctIndex": 1,
        "rationale": "Quetta is known as the 'Fruit Garden of Pakistan' [9]."
    },
    {
        "question": "Who jointly declared the height of Mt. Everest as 8,848.86 m in December 2020?",
        "options": [
            "India and Nepal",
            "Pakistan and China",
            "China and Nepal",
            "India and China"
        ],
        "correctIndex": 2,
        "rationale": "China and Nepal jointly announced the survey results on 8 December 2020 [9, 24]."
    },
    {
        "question": "Which country is known as the 'Land of Thunder Dragon'?",
        "options": [
            "Japan",
            "Bhutan",
            "Norway",
            "Korea"
        ],
        "correctIndex": 1,
        "rationale": "Bhutan is nicknamed the 'Land of Thunder Dragon' [24]."
    },
    {
        "question": "Who was appointed as Pakistan's first-ever Chief of Defence Forces (CDF)?",
        "options": [
            "General Raheel Sharif",
            "Field Marshal Syed Asim Munir",
            "General Sahir Shamshad Mirza",
            "General Qamar Javed Bajwa"
        ],
        "correctIndex": 1,
        "rationale": "Field Marshal Syed Asim Munir was appointed as the first CDF on 4 December 2025 [25]."
    },
    {
        "question": "According to the 2023 Census, where does Pakistan rank globally in terms of population?",
        "options": [
            "3rd",
            "4th",
            "5th",
            "6th"
        ],
        "correctIndex": 2,
        "rationale": "Pakistan is the 5th most populous country in the world [3]."
    },
    {
        "question": "Which national symbol of Pakistan was adopted in July 1961?",
        "options": [
            "National Anthem",
            "National Flower (Jasmine)",
            "National Tree",
            "National Language"
        ],
        "correctIndex": 1,
        "rationale": "The Jasmine flower was adopted as the national flower in July 1961 [3]."
    },
    {
        "question": "What is the 'National Predator' of Pakistan?",
        "options": [
            "Markhor",
            "Snow Leopard",
            "Mugger Crocodile",
            "Indus Dolphin"
        ],
        "correctIndex": 1,
        "rationale": "The Snow Leopard is designated as the national predator [26]."
    },
    {
        "question": "On which date is World Teachers' Day celebrated?",
        "options": [
            "8 September",
            "21 September",
            "5 October",
            "24 October"
        ],
        "correctIndex": 2,
        "rationale": "World Teachers' Day is observed on 5 October [4]."
    },
    {
        "question": "Which organization is identified as the 'Oldest UN agency', founded in 1919?",
        "options": [
            "WHO",
            "UNESCO",
            "ILO",
            "FAO"
        ],
        "correctIndex": 2,
        "rationale": "The International Labour Organization (ILO), founded in 1919, is the oldest UN agency [27]."
    },
    {
        "question": "The Shanghai Cooperation Organization (SCO) is headquartered in which city?",
        "options": [
            "Manila",
            "Beijing",
            "Vienna",
            "Brussels"
        ],
        "correctIndex": 1,
        "rationale": "The SCO is headquartered in Beijing, China [28]."
    },
    {
        "question": "In which year did the 'Simla Deputation' meet Viceroy Lord Minto?",
        "options": [
            "1885",
            "1906",
            "1916",
            "1919"
        ],
        "correctIndex": 1,
        "rationale": "The Simla Deputation took place in October 1906 [29]."
    },
    {
        "question": "The 'Cabinet Mission' of 1946 consisted of which three members?",
        "options": [
            "Mountbatten, Radcliffe, Durand",
            "Pethick-Lawrence, Cripps, Alexander",
            "Minto, Morley, Chelmsford",
            "Wavell, Nehru, Jinnah"
        ],
        "correctIndex": 1,
        "rationale": "The members were Pethick-Lawrence, Cripps, and A.V. Alexander [30]."
    },
    {
        "question": "Which constitution introduced a 'Bicameral' legislature (National Assembly and Senate) for the first time?",
        "options": [
            "1956",
            "1962",
            "1973",
            "LFO 1970"
        ],
        "correctIndex": 2,
        "rationale": "The 1973 Constitution introduced the bicameral system [31]."
    },
    {
        "question": "How many seats are reserved for women in the National Assembly of Pakistan?",
        "options": [
            "10",
            "60",
            "266",
            "336"
        ],
        "correctIndex": 1,
        "rationale": "Out of 336 seats, 60 are reserved for women [31]."
    },
    {
        "question": "Which constitutional article deals with 'Treason'?",
        "options": [
            "Article 2",
            "Article 6",
            "Article 19",
            "Article 25-A"
        ],
        "correctIndex": 1,
        "rationale": "Article 6 of the 1973 Constitution deals with treason [32]."
    },
    {
        "question": "Who was the first Prime Minister of Pakistan and where was he assassinated?",
        "options": [
            "Liaquat Ali Khan, Rawalpindi",
            "Z.A. Bhutto, Rawalpindi",
            "Benazir Bhutto, Rawalpindi",
            "Liaquat Ali Khan, Karachi"
        ],
        "correctIndex": 0,
        "rationale": "Liaquat Ali Khan was the 1st PM, assassinated on 16 Oct 1951 in Rawalpindi [32]."
    },
    {
        "question": "In which year were the nuclear tests 'Chagai-I' and 'Chagai-II' conducted?",
        "options": [
            "1974",
            "1998",
            "1999",
            "2001"
        ],
        "correctIndex": 1,
        "rationale": "The tests were conducted on 28 May and 30 May 1998 [33]."
    },
    {
        "question": "A deficiency in Vitamin B3 (Niacin) leads to which disease?",
        "options": [
            "Beri-beri",
            "Pellagra",
            "Scurvy",
            "Rickets"
        ],
        "correctIndex": 1,
        "rationale": "The vitamins table lists Pellagra as the deficiency disease for B3 [34]."
    },
    {
        "question": "Which vitamin is also known as 'Biotin'?",
        "options": [
            "B2",
            "B6",
            "B7",
            "B12"
        ],
        "correctIndex": 2,
        "rationale": "Vitamin B7 is chemically known as Biotin [34]."
    },
    {
        "question": "What is the 'active form' of Vitamin D synthesized in the skin via sunlight?",
        "options": [
            "Retinol",
            "Ascorbic acid",
            "Calcitriol",
            "Tocopherol"
        ],
        "correctIndex": 2,
        "rationale": "Calcitriol is the active form of Vitamin D [35]."
    },
    {
        "question": "What is the smallest bone in the human body?",
        "options": [
            "Femur",
            "Stapes",
            "Humerus",
            "Nephron"
        ],
        "correctIndex": 1,
        "rationale": "The Stapes, located in the ear, is the smallest bone [35]."
    },
    {
        "question": "Which blood group is identified as the 'Universal Donor'?",
        "options": [
            "Group A",
            "Group B",
            "Group AB",
            "Group O"
        ],
        "correctIndex": 3,
        "rationale": "Blood group O is the universal donor [35, 36]."
    },
    {
        "question": "Which part of the human brain is responsible for balance?",
        "options": [
            "Cerebrum",
            "Medulla",
            "Cerebellum",
            "Nephron"
        ],
        "correctIndex": 2,
        "rationale": "The cerebellum is responsible for balance [36]."
    },
    {
        "question": "What is the functional unit of the human kidney?",
        "options": [
            "Neuron",
            "Nephron",
            "Alveoli",
            "Islet"
        ],
        "correctIndex": 1,
        "rationale": "The functional unit of the kidney is the nephron [36]."
    },
    {
        "question": "Where is insulin secreted from in the human body?",
        "options": [
            "Liver",
            "Kidney",
            "Pancreas (β-cells)",
            "Stomach"
        ],
        "correctIndex": 2,
        "rationale": "Insulin is secreted by the β-cells of the Islets of Langerhans in the pancreas [36]."
    },
    {
        "question": "Which scientific phenomenon is responsible for the blue color of the sky?",
        "options": [
            "Reflection",
            "Refraction",
            "Rayleigh scattering",
            "Diffraction"
        ],
        "correctIndex": 2,
        "rationale": "Blue sky occurs due to Rayleigh scattering [37]."
    },
    {
        "question": "What is the chemical compound found in car airbags that releases nitrogen gas?",
        "options": [
            "Sodium chloride",
            "Sodium azide (NaN₃)",
            "Iron oxide",
            "Carbon dioxide"
        ],
        "correctIndex": 1,
        "rationale": "Airbags contain Sodium azide (NaN₃) [37]."
    },
    {
        "question": "Which planet in the solar system is known as the 'hottest and brightest'?",
        "options": [
            "Mercury",
            "Venus",
            "Mars",
            "Jupiter"
        ],
        "correctIndex": 1,
        "rationale": "Venus is the hottest and brightest planet [37, 38]."
    },
    {
        "question": "In mathematics, if the area of a triangle is calculated as ½ × b × h, what does 'b' represent?",
        "options": [
            "Body",
            "Base",
            "Breadth",
            "Balance"
        ],
        "correctIndex": 1,
        "rationale": "In the formula ½ × b × h, 'b' stands for base [39]."
    },
    {
        "question": "What is the synonym for the word 'Abate'?",
        "options": [
            "Increase",
            "Decrease",
            "Rebellion",
            "Yield"
        ],
        "correctIndex": 1,
        "rationale": "Abate means to lessen or decrease [40]."
    },
    {
        "question": "The idiom 'To leave no stone unturned' means:",
        "options": [
            "To be lazy",
            "To suspect something",
            "To try every possible means",
            "To act rarely"
        ],
        "correctIndex": 2,
        "rationale": "The idiom means to try every means available [12]."
    },
    {
        "question": "One who lives 100 years is called a:",
        "options": [
            "Theist",
            "Centenarian",
            "Posthumous",
            "Pessimist"
        ],
        "correctIndex": 1,
        "rationale": "A centenarian is a person who lives for 100 years [13]."
    },
    {
        "question": "A government run by religious leaders is known as a:",
        "options": [
            "Democracy",
            "Theocracy",
            "Autocracy",
            "Monarchy"
        ],
        "correctIndex": 1,
        "rationale": "Theocracy is a government by religious leaders [13]."
    },
    {
        "question": "Which preposition is correctly paired with 'injurious'?",
        "options": [
            "for",
            "to",
            "with",
            "against"
        ],
        "correctIndex": 1,
        "rationale": "The prepositional usage is 'injurious to' [13]."
    },
    {
        "question": "The Zakat rate is 2.5% on savings. Which pillar of Islam is Zakat?",
        "options": [
            "2nd",
            "3rd",
            "4th",
            "5th"
        ],
        "correctIndex": 1,
        "rationale": "Zakat is the 3rd pillar of Islam [41]."
    },
    {
        "question": "Which Surah of the Holy Quran does NOT begin with Bismillah?",
        "options": [
            "Al-Baqarah",
            "At-Taubah",
            "An-Naml",
            "Al-Nasr"
        ],
        "correctIndex": 1,
        "rationale": "Surah At-Taubah (the 9th Surah) does not have Bismillah at the start [41]."
    },
    {
        "question": "In which cave was the first revelation of the Quran received?",
        "options": [
            "Cave Saur",
            "Cave Hira",
            "Cave of Uhud",
            "Cave of Badr"
        ],
        "correctIndex": 1,
        "rationale": "The first revelation occurred in Cave Hira in 610 CE [42]."
    },
    {
        "question": "Who was the primary scribe who wrote down the first compilation of the Quran?",
        "options": [
            "Hazrat Umar",
            "Hazrat Zaid bin Thabit",
            "Hazrat Usman",
            "Hazrat Ali"
        ],
        "correctIndex": 1,
        "rationale": "Hazrat Zaid bin Thabit was the primary scribe for the first compilation [42]."
    },
    {
        "question": "In which Hijri year did the 'Conquest of Makkah' occur?",
        "options": [
            "2 AH",
            "5 AH",
            "8 AH",
            "10 AH"
        ],
        "correctIndex": 2,
        "rationale": "The Conquest of Makkah took place in 8 AH [43]."
    },
    {
        "question": "Who suggested the digging of a trench during the Battle of Khandaq?",
        "options": [
            "Hazrat Abu Bakr",
            "Hazrat Umar",
            "Hazrat Salman Farsi",
            "Hazrat Ali"
        ],
        "correctIndex": 2,
        "rationale": "The trench was suggested by Hazrat Salman Farsi (RA) [43]."
    },
    {
        "question": "How many total 'Ghazwat' (battles led by the Prophet) were there?",
        "options": [
            "12",
            "27",
            "53",
            "114"
        ],
        "correctIndex": 1,
        "rationale": "There were a total of 27 Ghazwat [44]."
    },
    {
        "question": "Who was the 3rd Rightly Guided Caliph and standardized the Quran into the 'Mushaf-e-Usmani'?",
        "options": [
            "Hazrat Abu Bakr",
            "Hazrat Umar",
            "Hazrat Usman Ghani",
            "Hazrat Ali"
        ],
        "correctIndex": 2,
        "rationale": "Hazrat Usman Ghani was the 3rd Caliph who standardized the Quran [44]."
    },
    {
        "question": "Who was the first person to call the Azan in Islam?",
        "options": [
            "Hazrat Bilal",
            "Hazrat Abu Bakr",
            "Hazrat Umar",
            "Hazrat Ali"
        ],
        "correctIndex": 0,
        "rationale": "Hazrat Bilal (RA) called the first Azan in 1 AH in Madina [44]."
    },
    {
        "question": "What is the chemical formula for 'Rust'?",
        "options": [
            "NaCl",
            "NaN₃",
            "Fe₂O₃·xH₂O",
            "CO₂"
        ],
        "correctIndex": 2,
        "rationale": "Rust is Iron oxide (Fe₂O₃·xH₂O) [37]."
    },
    {
        "question": "Which shortcut key in MS Office is used to start a slideshow in PowerPoint?",
        "options": [
            "F1",
            "F2",
            "F5",
            "F7"
        ],
        "correctIndex": 2,
        "rationale": "F5 is used to start a slideshow [45]."
    },
    {
        "question": "What is the abbreviation 'GUI' in computer terms?",
        "options": [
            "General User Interface",
            "Graphical User Interface",
            "Global User Index",
            "Group User Interaction"
        ],
        "correctIndex": 1,
        "rationale": "GUI stands for Graphical User Interface [46]."
    },
    {
        "question": "Who is the current Governor of Sindh (as of March 2026)?",
        "options": [
            "Kamran Tessori",
            "Nehal Hashmi",
            "Syed Murad Ali Shah",
            "Zafar Ahmed Rajput"
        ],
        "correctIndex": 1,
        "rationale": "Nehal Hashmi was sworn in as Governor of Sindh on 13 March 2026 [46]."
    },
    {
        "question": "Which Sindh assembly resolution was the first in British-India to pass in favor of Pakistan?",
        "options": [
            "23 March 1940",
            "3 March 1943",
            "14 August 1947",
            "3 June 1947"
        ],
        "correctIndex": 1,
        "rationale": "The Sindh Assembly passed the Pakistan Resolution on 3 March 1943 [47]."
    },
    {
        "question": "The Durand Line is the border between which two countries?",
        "options": [
            "Pakistan and India",
            "Pakistan and China",
            "Pakistan and Afghanistan",
            "Pakistan and Iran"
        ],
        "correctIndex": 2,
        "rationale": "The Durand Line separates Pakistan and Afghanistan [15, 16, 48]."
    },
    {
        "question": "What is the 'National Language' of Pakistan according to the 1973 Constitution?",
        "options": [
            "English",
            "Sindhi",
            "Urdu",
            "Punjabi"
        ],
        "correctIndex": 2,
        "rationale": "Article 251 designates Urdu as the national language [19]."
    },
    {
        "question": "Which vitamin deficiency causes 'Scurvy'?",
        "options": [
            "Vitamin A",
            "Vitamin B",
            "Vitamin C",
            "Vitamin D"
        ],
        "correctIndex": 2,
        "rationale": "Vitamin C (Ascorbic acid) deficiency leads to scurvy [34, 48]."
    },
    {
        "question": "How many bits make up one Byte?",
        "options": [
            "4",
            "8",
            "16",
            "1024"
        ],
        "correctIndex": 1,
        "rationale": "There are 8 bits in 1 Byte [45]."
    },
    {
        "question": "Who is the current Prime Minister of Pakistan in his 2nd term?",
        "options": [
            "Asif Ali Zardari",
            "Shehbaz Sharif",
            "Imran Khan",
            "Nawaz Sharif"
        ],
        "correctIndex": 1,
        "rationale": "Shehbaz Sharif has been PM since 4 March 2024 for his 2nd term [25]."
    },
    {
        "question": "What is the 'National Bird' of Pakistan?",
        "options": [
            "Markhor",
            "Chukar Partridge",
            "Eagle",
            "Peacock"
        ],
        "correctIndex": 1,
        "rationale": "The Chukar Partridge (Chakor) is the national bird [19, 48]."
    },
    {
        "question": "Which is the largest natural freshwater lake in South Asia, located in Sindh?",
        "options": [
            "Keenjhar Lake",
            "Hanna Lake",
            "Manchar Lake",
            "Attabad Lake"
        ],
        "correctIndex": 2,
        "rationale": "Manchar Lake is the largest natural freshwater lake in Pakistan and South Asia [21, 48]."
    },
    {
        "question": "In which month and year was the 'Durand Line' demarcated?",
        "options": [
            "August 1947",
            "November 1893",
            "March 1963",
            "July 1871"
        ],
        "correctIndex": 1,
        "rationale": "The Durand Line was demarcated on 12 November 1893 [15]."
    },
    {
        "question": "Which pass is the highest in Pakistan at 4,693 m?",
        "options": [
            "Khyber Pass",
            "Bolan Pass",
            "Khunjerab Pass",
            "Lowari Pass"
        ],
        "correctIndex": 2,
        "rationale": "Khunjerab Pass is the highest at 4,693 m [16]."
    },
    {
        "question": "The 'Sir Creek' dispute involves a 96-km estuary between Sindh and which Indian state?",
        "options": [
            "Rajasthan",
            "Punjab",
            "Gujarat",
            "Maharashtra"
        ],
        "correctIndex": 2,
        "rationale": "The dispute is between Sindh and Indian Gujarat [16]."
    },
    {
        "question": "Which river is formed by the meeting of the Chandra and Bhaga rivers?",
        "options": [
            "Jhelum",
            "Chenab",
            "Ravi",
            "Sutlej"
        ],
        "correctIndex": 1,
        "rationale": "The Chenab is formed by the Chandra and Bhaga rivers [10, 18]."
    },
    {
        "question": "Which organization is headquartered in Kathmandu, Nepal?",
        "options": [
            "ADB",
            "OIC",
            "SAARC",
            "SCO"
        ],
        "correctIndex": 2,
        "rationale": "SAARC is headquartered in Kathmandu [27]."
    },
    {
        "question": "Who was the 'National Poet' of Pakistan?",
        "options": [
            "Hafeez Jullundhri",
            "Allama Muhammad Iqbal",
            "Faiz Ahmed Faiz",
            "Mir Taqi Mir"
        ],
        "correctIndex": 1,
        "rationale": "Allama Iqbal is the national poet of Pakistan [19]."
    },
    {
        "question": "The shortcut key Ctrl+V is used for which function?",
        "options": [
            "Copy",
            "Cut",
            "Paste",
            "Save"
        ],
        "correctIndex": 2,
        "rationale": "Ctrl+V is the shortcut for Paste [45]."
    },
    {
        "question": "Which vitamin deficiency is associated with 'Night blindness'?",
        "options": [
            "Vitamin A",
            "Vitamin B",
            "Vitamin C",
            "Vitamin D"
        ],
        "correctIndex": 0,
        "rationale": "Vitamin A (Retinol) deficiency leads to night blindness [33, 48]."
    },
    {
        "question": "What is the total number of Surahs in the Holy Quran?",
        "options": [
            "30",
            "114",
            "558",
            "6236"
        ],
        "correctIndex": 1,
        "rationale": "There are 114 Surahs in the Quran [41]."
    },
    {
        "question": "Which Sindh city was Mohenjo-Daro found in?",
        "options": [
            "Karachi",
            "Hyderabad",
            "Sukkur",
            "Larkana"
        ],
        "correctIndex": 3,
        "rationale": "Mohenjo-Daro is in the Larkana district of Sindh [9, 47]."
    },
    {
        "question": "What is the total length of Pakistan's land border according to the provided study guide?",
        "options": [
            "6,774 km",
            "7,257 km",
            "2,611 km",
            "1,046 km"
        ],
        "correctIndex": 1,
        "rationale": "The source states that while older books quote different figures, the total land border is 7,257 km [1]."
    },
    {
        "question": "According to the Survey of Pakistan 2020, what is the length of the border with Afghanistan?",
        "options": [
            "2,252 km",
            "2,430 km",
            "2,611 km",
            "2,640 km"
        ],
        "correctIndex": 2,
        "rationale": "The Borders table lists the Survey of Pakistan 2020 figure as 2,611 km [2]."
    },
    {
        "question": "In which year was the Sino-Pakistan Frontier Agreement signed?",
        "options": [
            "1947",
            "1960",
            "1963",
            "1972"
        ],
        "correctIndex": 2,
        "rationale": "The agreement was signed on 2 March 1963 [2]."
    },
    {
        "question": "The 'Goldsmid Line' was demarcated in 1871 for which border?",
        "options": [
            "Pak-Afghan",
            "Pak-India",
            "Pak-Iran",
            "Pak-China"
        ],
        "correctIndex": 2,
        "rationale": "The source identifies the Goldsmid Line (1871) as the line for the border with Iran [2]."
    },
    {
        "question": "Which mountain pass connects Chitral to the Wakhan Corridor in Afghanistan?",
        "options": [
            "Khyber Pass",
            "Dorah Pass",
            "Broghil Pass",
            "Kilik Pass"
        ],
        "correctIndex": 2,
        "rationale": "The mountain passes table identifies the Broghil Pass as connecting Chitral to Wakhan [3]."
    },
    {
        "question": "At which elevation is the Kilik Pass located?",
        "options": [
            "1,070 m",
            "3,700 m",
            "4,693 m",
            "4,827 m"
        ],
        "correctIndex": 3,
        "rationale": "The Kilik Pass is listed at an elevation of 4,827 m [3]."
    },
    {
        "question": "Which river is known as the 'National River' of Pakistan?",
        "options": [
            "Jhelum",
            "Chenab",
            "Indus",
            "Ravi"
        ],
        "correctIndex": 2,
        "rationale": "The source identifies the Indus as the national river [3, 4]."
    },
    {
        "question": "The Jhelum River joins the Chenab River at which specific location?",
        "options": [
            "Trimmu",
            "Rangpur",
            "Mithankot",
            "Uch Sharif"
        ],
        "correctIndex": 0,
        "rationale": "The river table states the Jhelum joins the Chenab at Trimmu [3]."
    },
    {
        "question": "Which Punjab river originates from the Beas Kund near Rohtang Pass?",
        "options": [
            "Ravi",
            "Beas",
            "Sutlej",
            "Chenab"
        ],
        "correctIndex": 1,
        "rationale": "The source lists Beas Kund as the origin for the Beas river [5]."
    },
    {
        "question": "On which date was the Indus Waters Treaty signed in Karachi?",
        "options": [
            "14 August 1947",
            "23 March 1956",
            "19 September 1960",
            "2 July 1972"
        ],
        "correctIndex": 2,
        "rationale": "The treaty was signed on 19 September 1960 [5]."
    },
    {
        "question": "Which animal is the 'National Aquatic Mammal' of Pakistan?",
        "options": [
            "Mahseer",
            "Indus River Dolphin (Bhulan)",
            "Mugger Crocodile",
            "Snow Leopard"
        ],
        "correctIndex": 1,
        "rationale": "The source lists the Indus River Dolphin (Bhulan) as the national aquatic mammal [6]."
    },
    {
        "question": "Which desert is identified as the '9th largest subtropical desert' in the world?",
        "options": [
            "Thar",
            "Thal",
            "Cholistan",
            "Kharan"
        ],
        "correctIndex": 0,
        "rationale": "The Thar Desert is the 9th largest subtropical desert in the world [7]."
    },
    {
        "question": "The Chagai-II nuclear tests on 30 May 1998 were conducted in which desert?",
        "options": [
            "Thar",
            "Thal",
            "Cholistan",
            "Kharan"
        ],
        "correctIndex": 3,
        "rationale": "The tests were conducted at Kharan in Balochistan [8, 9]."
    },
    {
        "question": "Which lake is located on the Deosai Plains at an elevation of 4,142 m?",
        "options": [
            "Manchar Lake",
            "Saif-ul-Malook",
            "Sheosar Lake",
            "Rush Lake"
        ],
        "correctIndex": 2,
        "rationale": "The lakes table identifies Sheosar / Shausar Lake on the Deosai Plains [10]."
    },
    {
        "question": "Which lake in Sindh is identified as the largest natural freshwater lake in South Asia?",
        "options": [
            "Keenjhar Lake",
            "Manchar Lake",
            "Haleji Lake",
            "Hamal Lake"
        ],
        "correctIndex": 1,
        "rationale": "Manchar Lake is the largest natural freshwater lake in Pakistan & South Asia [10]."
    },
    {
        "question": "The 'Nara Canal' is known for being:",
        "options": [
            "The deepest canal",
            "The oldest canal",
            "The longest canal in Pakistan",
            "The only canal in Sindh"
        ],
        "correctIndex": 2,
        "rationale": "The source states: 'Nara Canal is the longest canal in Pakistan' [11]."
    },
    {
        "question": "Which barrage was built in 1892 and is the oldest in Pakistan?",
        "options": [
            "Sukkur Barrage",
            "Guddu Barrage",
            "Khanki Barrage",
            "Kotri Barrage"
        ],
        "correctIndex": 2,
        "rationale": "Khanki (1892) is identified as the oldest of all barrages [12]."
    },
    {
        "question": "According to Britannica (March 2026), which dam is the world's largest earth-and-rock-fill dam by volume?",
        "options": [
            "Mangla",
            "Warsak",
            "Tarbela",
            "Diamer-Bhasha"
        ],
        "correctIndex": 2,
        "rationale": "Tarbela is the largest earth-and-rock-fill dam by volume [12, 13]."
    },
    {
        "question": "Islamabad has served as the capital of Pakistan since which date?",
        "options": [
            "14 August 1947",
            "23 March 1956",
            "14 August 1967",
            "1 January 1960"
        ],
        "correctIndex": 2,
        "rationale": "Islamabad has been the capital since 14 August 1967 [13]."
    },
    {
        "question": "Who was the first-ever Chief of Defence Forces (CDF) appointed in December 2025?",
        "options": [
            "General Sahir Shamshad Mirza",
            "Field Marshal Syed Asim Munir",
            "General Raheel Sharif",
            "General Qamar Javed Bajwa"
        ],
        "correctIndex": 1,
        "rationale": "Field Marshal Syed Asim Munir was appointed as the first CDF on 4 December 2025 [14]."
    },
    {
        "question": "What is the annual population growth rate of Pakistan according to the 2023 Census?",
        "options": [
            "1.55%",
            "2.00%",
            "2.55%",
            "3.10%"
        ],
        "correctIndex": 2,
        "rationale": "The 7th Census approved in 2023 shows a growth rate of 2.55% [15, 16]."
    },
    {
        "question": "In which month and year was the Jasmine officially adopted as the National Flower?",
        "options": [
            "August 1947",
            "March 1956",
            "July 1961",
            "September 1948"
        ],
        "correctIndex": 2,
        "rationale": "The national flower was adopted in July 1961 [16]."
    },
    {
        "question": "The National Language of Pakistan is designated under which article of the 1973 Constitution?",
        "options": [
            "Article 2",
            "Article 6",
            "Article 19",
            "Article 251"
        ],
        "correctIndex": 3,
        "rationale": "Urdu is the national language under Article 251 [4]."
    },
    {
        "question": "Who composed the music for the Pakistan National Anthem in 1949?",
        "options": [
            "Hafeez Jullundhri",
            "Ahmed G. Chagla",
            "Allama Iqbal",
            "Faiz Ahmed Faiz"
        ],
        "correctIndex": 1,
        "rationale": "Ahmed G. Chagla composed the music in 1949 [4]."
    },
    {
        "question": "On which date is World Health Day celebrated annually?",
        "options": [
            "23 March",
            "7 April",
            "1 May",
            "5 June"
        ],
        "correctIndex": 1,
        "rationale": "World Health Day is 7 April, marking the founding of WHO in 1948 [17]."
    },
    {
        "question": "International Literacy Day is observed on which date?",
        "options": [
            "14 August",
            "8 September",
            "5 October",
            "10 December"
        ],
        "correctIndex": 1,
        "rationale": "The international days table identifies 8 September as Literacy Day [18]."
    },
    {
        "question": "Which international organization is identified as the 'Oldest UN agency'?",
        "options": [
            "WHO",
            "UNESCO",
            "ILO",
            "FAO"
        ],
        "correctIndex": 2,
        "rationale": "The ILO, founded in 1919, is the oldest UN agency [19]."
    },
    {
        "question": "In which city is the headquarters of the Asian Development Bank (ADB) located?",
        "options": [
            "Manila",
            "Bangkok",
            "Jakarta",
            "Beijing"
        ],
        "correctIndex": 0,
        "rationale": "The ADB is headquartered in Manila, Philippines [19]."
    },
    {
        "question": "Who led the 'Simla Deputation' in October 1906?",
        "options": [
            "Sir Syed Ahmad Khan",
            "Sir Aga Khan III",
            "Nawab Mohsin-ul-Mulk",
            "Quaid-e-Azam"
        ],
        "correctIndex": 1,
        "rationale": "The Simla Deputation was led by Sir Aga Khan III [20]."
    },
    {
        "question": "In which year did Jinnah present his '14 Points'?",
        "options": [
            "1927",
            "1928",
            "1929",
            "1930"
        ],
        "correctIndex": 2,
        "rationale": "Jinnah presented his 14 Points in 1929 [21]."
    },
    {
        "question": "The 'Cabinet Mission' of 1946 consisted of Pethick-Lawrence, Cripps, and who else?",
        "options": [
            "Mountbatten",
            "Radcliffe",
            "A.V. Alexander",
            "Lord Wavell"
        ],
        "correctIndex": 2,
        "rationale": "The members were Pethick-Lawrence, Cripps, and A.V. Alexander [21]."
    },
    {
        "question": "How many articles were in the 1962 Constitution of Pakistan?",
        "options": [
            "234",
            "250",
            "280",
            "336"
        ],
        "correctIndex": 1,
        "rationale": "The 1962 Constitution contained 250 articles [22]."
    },
    {
        "question": "Which constitution introduced a 'Bicameral' legislature for the first time?",
        "options": [
            "1956",
            "1962",
            "1973",
            "None"
        ],
        "correctIndex": 2,
        "rationale": "The 1973 Constitution introduced a Bicameral legislature (NA + Senate) [23]."
    },
    {
        "question": "What is the total number of seats in the National Assembly as per the 1973 Constitution metric?",
        "options": [
            "272",
            "336",
            "342",
            "446"
        ],
        "correctIndex": 1,
        "rationale": "The National Assembly has 336 seats [23]."
    },
    {
        "question": "The 'Objectives Resolution' was made a substantive part of the constitution via which amendment?",
        "options": [
            "1st",
            "8th",
            "13th",
            "18th"
        ],
        "correctIndex": 1,
        "rationale": "The 8th Amendment (1985) added it via Article 2-A [23]."
    },
    {
        "question": "Who was the first Prime Minister of Pakistan, assassinated in 1951?",
        "options": [
            "Quaid-e-Azam",
            "Liaquat Ali Khan",
            "Z.A. Bhutto",
            "Chaudhry Muhammad Ali"
        ],
        "correctIndex": 1,
        "rationale": "Liaquat Ali Khan was the 1st PM, assassinated on 16 Oct 1951 [24]."
    },
    {
        "question": "Sir Hassan Ali Effendi is noted for founding which institution in 1885?",
        "options": [
            "Aligarh College",
            "Sindh Madrasatul Islam",
            "Islamia College Peshawar",
            "MAO College"
        ],
        "correctIndex": 1,
        "rationale": "He founded Sindh Madrasatul Islam in 1885 [25]."
    },
    {
        "question": "The 'Simla Agreement' of 2 July 1972 was signed between Bhutto and:",
        "options": [
            "Lal Bahadur Shastri",
            "Indira Gandhi",
            "Jawaharlal Nehru",
            "Morarji Desai"
        ],
        "correctIndex": 1,
        "rationale": "It was signed by Z.A. Bhutto and Indira Gandhi [9]."
    },
    {
        "question": "A deficiency in Vitamin B3 (Niacin) causes which disease?",
        "options": [
            "Night blindness",
            "Beri-beri",
            "Pellagra",
            "Scurvy"
        ],
        "correctIndex": 2,
        "rationale": "The vitamins table identifies Pellagra as the deficiency for B3 [26]."
    },
    {
        "question": "Which vitamin is also known as 'Tocopherol'?",
        "options": [
            "Vitamin A",
            "Vitamin E",
            "Vitamin D",
            "Vitamin K"
        ],
        "correctIndex": 1,
        "rationale": "Vitamin E is chemically known as Tocopherol [26]."
    },
    {
        "question": "What is the hardest substance in the human body?",
        "options": [
            "Femur",
            "Tooth enamel",
            "Stapes",
            "Skull"
        ],
        "correctIndex": 1,
        "rationale": "Tooth enamel is the hardest substance [27]."
    },
    {
        "question": "Which blood group is known as the 'Universal Recipient'?",
        "options": [
            "Group A",
            "Group B",
            "Group AB",
            "Group O"
        ],
        "correctIndex": 2,
        "rationale": "Blood group AB is the universal recipient [28]."
    },
    {
        "question": "Insulin is secreted by which cells in the pancreas?",
        "options": [
            "Alpha-cells",
            "Beta-cells (β-cells)",
            "Delta-cells",
            "Acini cells"
        ],
        "correctIndex": 1,
        "rationale": "Insulin is secreted by β-cells of the Islets of Langerhans [28]."
    },
    {
        "question": "Sound travels fastest in which medium?",
        "options": [
            "Gases",
            "Liquids",
            "Solids",
            "Vacuum"
        ],
        "correctIndex": 2,
        "rationale": "Sound travels fastest in solids [29]."
    },
    {
        "question": "Which gas is released by Sodium azide (NaN₃) in car airbags?",
        "options": [
            "Oxygen",
            "Carbon dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correctIndex": 2,
        "rationale": "Sodium azide releases nitrogen gas [29]."
    },
    {
        "question": "What is the synonym for the word 'Capitulate'?",
        "options": [
            "Resist",
            "Yield",
            "Increase",
            "Worsen"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table lists 'Yield' as the synonym for 'Capitulate' [30]."
    },
    {
        "question": "The idiom 'A dark horse' refers to:",
        "options": [
            "A person of bad character",
            "An unknown competitor",
            "A very busy person",
            "A person who resembles their parent"
        ],
        "correctIndex": 1,
        "rationale": "A 'dark horse' is an unknown competitor [31]."
    },
    {
        "question": "One who lives 100 years is called a:",
        "options": [
            "Theist",
            "Centenarian",
            "Posthumous",
            "Soporific"
        ],
        "correctIndex": 1,
        "rationale": "A centenarian is one who lives 100 years [32]."
    },
    {
        "question": "Zakat is required at what percentage on savings annually?",
        "options": [
            "1.5%",
            "2.0%",
            "2.5%",
            "5.0%"
        ],
        "correctIndex": 2,
        "rationale": "Zakat is 2.5% on savings annually [33]."
    },
    {
        "question": "Which Surah of the Quran is known as the 'Longest Surah'?",
        "options": [
            "Al-Imran",
            "Al-Baqarah",
            "An-Nisa",
            "Al-Maidah"
        ],
        "correctIndex": 1,
        "rationale": "Al-Baqarah (286 ayahs) is the longest Surah [33]."
    },
    {
        "question": "Where was the first revelation of the Quran received by the Prophet?",
        "options": [
            "Cave Saur",
            "Cave Hira",
            "Makkah",
            "Madina"
        ],
        "correctIndex": 1,
        "rationale": "The first revelation occurred in Cave Hira in 610 CE [34]."
    },
    {
        "question": "The Battle of Trench (Khandaq) occurred in which Hijri year?",
        "options": [
            "2 AH",
            "3 AH",
            "5 AH",
            "8 AH"
        ],
        "correctIndex": 2,
        "rationale": "The Battle of Khandaq was in 5 AH [35]."
    },
    {
        "question": "Who was the 2nd Rightly Guided Caliph of Islam?",
        "options": [
            "Hazrat Abu Bakr",
            "Hazrat Umar Farooq",
            "Hazrat Usman Ghani",
            "Hazrat Ali"
        ],
        "correctIndex": 1,
        "rationale": "Hazrat Umar Farooq was the 2nd Caliph [36]."
    },
    {
        "question": "One Kilobyte (KB) is equal to how many bytes?",
        "options": [
            "1,000",
            "1,024",
            "1,024,000",
            "8,192"
        ],
        "correctIndex": 1,
        "rationale": "1 KB = 1,024 bytes [37]."
    },
    {
        "question": "In MS Office, which shortcut key is used for 'Save As'?",
        "options": [
            "F1",
            "F2",
            "F5",
            "F12"
        ],
        "correctIndex": 3,
        "rationale": "F12 is the shortcut for 'Save As' [37]."
    },
    {
        "question": "Who was sworn in as the Governor of Sindh on 13 March 2026?",
        "options": [
            "Kamran Tessori",
            "Nehal Hashmi",
            "Syed Murad Ali Shah",
            "Zafar Ahmed Rajput"
        ],
        "correctIndex": 1,
        "rationale": "Nehal Hashmi was sworn in on 13 March 2026 [38]."
    },
    {
        "question": "The Sindh Assembly was the first legislature to pass the Pakistan Resolution on which date?",
        "options": [
            "23 March 1940",
            "3 March 1943",
            "14 August 1947",
            "3 June 1947"
        ],
        "correctIndex": 1,
        "rationale": "The Sindh Assembly passed it on 3 March 1943 [39]."
    },
    {
        "question": "What is the official length of the border between Pakistan and India (Radcliffe Line)?",
        "options": [
            "2,640 km",
            "2,912 km",
            "3,180 km",
            "1,046 km"
        ],
        "correctIndex": 1,
        "rationale": "The source identifies the Radcliffe Line as being 2,912 km long [1]."
    },
    {
        "question": "The 'Durand Line' was demarcated on 12 November 1893 by which individual?",
        "options": [
            "Sir Cyril Radcliffe",
            "Sir Frederic Goldsmid",
            "Sir Mortimer Durand",
            "Lord Minto"
        ],
        "correctIndex": 2,
        "rationale": "Sir Mortimer Durand demarcated the Durand Line on 12 November 1893 [1]."
    },
    {
        "question": "Which mountain pass connects Hunza-Nagar to China and is located on the Karakoram Highway?",
        "options": [
            "Khyber Pass",
            "Bolan Pass",
            "Khunjerab Pass",
            "Lowari Pass"
        ],
        "correctIndex": 2,
        "rationale": "The Khunjerab Pass is the highest pass and connects Hunza-Nagar to China via the Karakoram Highway [2]."
    },
    {
        "question": "At what elevation is the Shandur Pass, known as the 'Roof of the World', located?",
        "options": [
            "1,070 m",
            "3,118 m",
            "3,700 m",
            "4,693 m"
        ],
        "correctIndex": 2,
        "rationale": "Shandur Pass is located at 3,700 m and is famously nicknamed the 'Roof of the World' [3]."
    },
    {
        "question": "Which river is identified as the 'National River' of Pakistan?",
        "options": [
            "Jhelum",
            "Chenab",
            "Indus",
            "Ravi"
        ],
        "correctIndex": 2,
        "rationale": "The Indus is the national river of Pakistan [4]."
    },
    {
        "question": "The Jhelum River originates from which spring in Indian-Occupied Jammu & Kashmir?",
        "options": [
            "Verinag spring",
            "Rakshastal Lake",
            "Beas Kund",
            "Bokhar Chu glacier"
        ],
        "correctIndex": 0,
        "rationale": "The Jhelum River originates from the Verinag spring in Pir Panjal [4]."
    },
    {
        "question": "Where do the five Punjab rivers meet before joining the Indus at Mithankot?",
        "options": [
            "Trimmu",
            "Rangpur",
            "Panjnad",
            "Uch Sharif"
        ],
        "correctIndex": 2,
        "rationale": "The Panjnad is the confluence of all 5 Punjab rivers which then joins the Indus at Mithankot [5]."
    },
    {
        "question": "Which desert in Pakistan is identified as the '9th largest subtropical desert' in the world?",
        "options": [
            "Thal Desert",
            "Thar Desert",
            "Cholistan Desert",
            "Kharan Desert"
        ],
        "correctIndex": 1,
        "rationale": "The Thar Desert is the largest in Pakistan and the 9th largest subtropical desert globally [5]."
    },
    {
        "question": "Manchar Lake, the largest natural freshwater lake in Pakistan, is located in which province?",
        "options": [
            "Punjab",
            "Sindh",
            "Balochistan",
            "Khyber Pakhtunkhwa"
        ],
        "correctIndex": 1,
        "rationale": "Manchar Lake is located in the Dadu/Jamshoro districts of Sindh [6]."
    },
    {
        "question": "Which lake in Pakistan is described as a 'tear-shaped' alpine lake located above Saif-ul-Malook?",
        "options": [
            "Hanna Lake",
            "Attabad Lake",
            "Ansoo Lake",
            "Rush Lake"
        ],
        "correctIndex": 2,
        "rationale": "Ansoo Lake is a 'tear-shaped' alpine lake located above Saif-ul-Malook [7]."
    },
    {
        "question": "The Sukkur Barrage, completed in 1932, is also known by what other name?",
        "options": [
            "Lloyd Barrage",
            "Kotri Barrage",
            "Guddu Barrage",
            "Jinnah Barrage"
        ],
        "correctIndex": 0,
        "rationale": "The Sukkur Barrage is also known as the Lloyd Barrage [7]."
    },
    {
        "question": "Which canal is identified as the longest canal in Pakistan?",
        "options": [
            "Rohri Canal",
            "Nara Canal",
            "Thal Canal",
            "Kalri-Baghar Feeder"
        ],
        "correctIndex": 1,
        "rationale": "The Nara Canal is the longest canal in Pakistan [7]."
    },
    {
        "question": "According to Britannica (2026), what is the world's largest earth-and-rock-fill dam by volume?",
        "options": [
            "Mangla Dam",
            "Warsak Dam",
            "Tarbela Dam",
            "Diamer-Bhasha Dam"
        ],
        "correctIndex": 2,
        "rationale": "Tarbela Dam is the world's largest earth-and-rock-fill dam by volume [8, 9]."
    },
    {
        "question": "Who is the current President of Pakistan as of March 2024?",
        "options": [
            "Arif Alvi",
            "Asif Ali Zardari",
            "Shehbaz Sharif",
            "Murad Ali Shah"
        ],
        "correctIndex": 1,
        "rationale": "Asif Ali Zardari has been the President of Pakistan since 10 March 2024 [10]."
    },
    {
        "question": "Who was appointed as Pakistan's first-ever Chief of Defence Forces (CDF) on 4 December 2025?",
        "options": [
            "Field Marshal Syed Asim Munir",
            "General Raheel Sharif",
            "General Sahir Shamshad Mirza",
            "General Qamar Javed Bajwa"
        ],
        "correctIndex": 0,
        "rationale": "Field Marshal Syed Asim Munir was appointed as the country's first CDF on 4 December 2025 [10]."
    },
    {
        "question": "What is the annual population growth rate of Pakistan according to the 7th Census (2023)?",
        "options": [
            "1.55%",
            "2.00%",
            "2.55%",
            "3.10%"
        ],
        "correctIndex": 2,
        "rationale": "The population growth rate is 2.55% according to the 2023 PBS Census [11]."
    },
    {
        "question": "In which month and year was Jasmine adopted as the National Flower of Pakistan?",
        "options": [
            "August 1947",
            "March 1956",
            "July 1961",
            "September 1948"
        ],
        "correctIndex": 2,
        "rationale": "Jasmine was adopted as the national flower in July 1961 [11]."
    },
    {
        "question": "The 'Markhor' is the national animal of Pakistan. What does its name literally mean?",
        "options": [
            "Mountain king",
            "Snake-eater",
            "Snow hunter",
            "Wild goat"
        ],
        "correctIndex": 1,
        "rationale": "The name Markhor literally means 'snake-eater' [11]."
    },
    {
        "question": "On which date is World Health Day celebrated annually, marking the founding of WHO?",
        "options": [
            "23 March",
            "7 April",
            "5 June",
            "24 October"
        ],
        "correctIndex": 1,
        "rationale": "World Health Day is 7 April [12]."
    },
    {
        "question": "Which international organization is headquartered in Rome, Italy?",
        "options": [
            "WHO",
            "UNESCO",
            "FAO",
            "ILO"
        ],
        "correctIndex": 2,
        "rationale": "The Food and Agriculture Organization (FAO) is headquartered in Rome [13]."
    },
    {
        "question": "The Asian Development Bank (ADB) was founded in 1966 and is headquartered in:",
        "options": [
            "Bangkok",
            "Manila",
            "Jakarta",
            "Beijing"
        ],
        "correctIndex": 1,
        "rationale": "The ADB is headquartered in Manila, Philippines [13]."
    },
    {
        "question": "In which year did the Lucknow Pact (Congress-League agreement) occur?",
        "options": [
            "1906",
            "1909",
            "1916",
            "1919"
        ],
        "correctIndex": 2,
        "rationale": "The Lucknow Pact took place in 1916 [14]."
    },
    {
        "question": "Who coin the name 'Pakistan' in the pamphlet 'Now or Never' in 1933?",
        "options": [
            "Allama Iqbal",
            "Sir Syed Ahmad Khan",
            "Chaudhry Rahmat Ali",
            "Quaid-e-Azam"
        ],
        "correctIndex": 2,
        "rationale": "Chaudhry Rahmat Ali coined the name 'Pakistan' in 1933 [15]."
    },
    {
        "question": "How many articles were in the first Constitution of Pakistan (1956)?",
        "options": [
            "234",
            "250",
            "280",
            "336"
        ],
        "correctIndex": 0,
        "rationale": "The 1956 Constitution had 234 articles [16]."
    },
    {
        "question": "The 1973 Constitution of Pakistan introduced which form of legislature?",
        "options": [
            "Unicameral",
            "Bicameral",
            "Basic Democrats",
            "LFO system"
        ],
        "correctIndex": 1,
        "rationale": "The 1973 Constitution introduced a bicameral legislature consisting of the National Assembly and Senate [17]."
    },
    {
        "question": "Article 25-A of the 1973 Constitution deals with which fundamental right?",
        "options": [
            "Freedom of speech",
            "Right to a fair trial",
            "Free & compulsory education for ages 5-16",
            "Treason laws"
        ],
        "correctIndex": 2,
        "rationale": "Article 25-A covers free and compulsory education for ages 5 to 16 [18]."
    },
    {
        "question": "Who was the first Prime Minister of Pakistan, assassinated on 16 October 1951?",
        "options": [
            "Quaid-e-Azam",
            "Liaquat Ali Khan",
            "Z.A. Bhutto",
            "Chaudhry Muhammad Ali"
        ],
        "correctIndex": 1,
        "rationale": "Liaquat Ali Khan was the 1st PM, assassinated in Rawalpindi [18]."
    },
    {
        "question": "The Simla Agreement (2 July 1972) was signed between Z.A. Bhutto and which Indian leader?",
        "options": [
            "Jawaharlal Nehru",
            "Lal Bahadur Shastri",
            "Indira Gandhi",
            "Morarji Desai"
        ],
        "correctIndex": 2,
        "rationale": "The Simla Agreement was signed by Z.A. Bhutto and Indira Gandhi [19]."
    },
    {
        "question": "Which vitamin deficiency is specifically linked to 'Night blindness'?",
        "options": [
            "Vitamin A",
            "Vitamin B1",
            "Vitamin C",
            "Vitamin D"
        ],
        "correctIndex": 0,
        "rationale": "Vitamin A (Retinol) deficiency causes night blindness [19]."
    },
    {
        "question": "Vitamin C is chemically known as:",
        "options": [
            "Retinol",
            "Thiamine",
            "Ascorbic acid",
            "Calciferol"
        ],
        "correctIndex": 2,
        "rationale": "Vitamin C is Ascorbic acid [20]."
    },
    {
        "question": "What is the hardest substance in the human body?",
        "options": [
            "Femur bone",
            "Skull",
            "Tooth enamel",
            "Stapes"
        ],
        "correctIndex": 2,
        "rationale": "Tooth enamel is the hardest substance in the body [21]."
    },
    {
        "question": "Which blood group is identified as the 'Universal Recipient'?",
        "options": [
            "Group O",
            "Group A",
            "Group B",
            "Group AB"
        ],
        "correctIndex": 3,
        "rationale": "Group AB is the universal recipient [22]."
    },
    {
        "question": "The 'Light year' is a unit used to measure which of the following?",
        "options": [
            "Time",
            "Light intensity",
            "Distance",
            "Speed"
        ],
        "correctIndex": 2,
        "rationale": "A light year is a unit of distance [23]."
    },
    {
        "question": "Which gas is commonly used in soft drinks to produce carbonation?",
        "options": [
            "Oxygen",
            "Nitrogen",
            "Carbon dioxide (CO₂)",
            "Hydrogen"
        ],
        "correctIndex": 2,
        "rationale": "Soft drinks contain CO₂ [23]."
    },
    {
        "question": "In computer memory, how many bits make up one Byte?",
        "options": [
            "4 bits",
            "8 bits",
            "16 bits",
            "1,024 bits"
        ],
        "correctIndex": 1,
        "rationale": "One Byte is equal to 8 bits [24]."
    },
    {
        "question": "What does the abbreviation 'GUI' stand for in computer science?",
        "options": [
            "General User Interface",
            "Graphical User Interface",
            "Global User Index",
            "Group User Integration"
        ],
        "correctIndex": 1,
        "rationale": "GUI stands for Graphical User Interface [25]."
    },
    {
        "question": "Who was sworn in as the Governor of Sindh on 13 March 2026?",
        "options": [
            "Kamran Tessori",
            "Nehal Hashmi",
            "Syed Murad Ali Shah",
            "Zafar Ahmed Rajput"
        ],
        "correctIndex": 1,
        "rationale": "Nehal Hashmi was sworn in as the Governor of Sindh on 13 March 2026 [25]."
    },
    {
        "question": "The Sindh Assembly was the first legislature in British-India to pass which resolution on 3 March 1943?",
        "options": [
            "Lucknow Pact",
            "Pakistan Resolution",
            "Quit India Movement",
            "Simla Agreement"
        ],
        "correctIndex": 1,
        "rationale": "The Sindh Assembly passed the Pakistan Resolution on 3 March 1943 [26]."
    },
    {
        "question": "Which Surah of the Holy Quran does NOT begin with 'Bismillah'?",
        "options": [
            "Surah Al-Baqarah",
            "Surah At-Taubah",
            "Surah An-Naml",
            "Surah Al-Alaq"
        ],
        "correctIndex": 1,
        "rationale": "Surah At-Taubah (the 9th Surah) does not start with Bismillah [27]."
    },
    {
        "question": "Who was the primary scribe responsible for writing down the first compilation of the Quran?",
        "options": [
            "Hazrat Umar",
            "Hazrat Zaid bin Thabit",
            "Hazrat Usman",
            "Hazrat Ali"
        ],
        "correctIndex": 1,
        "rationale": "Hazrat Zaid bin Thabit wrote down the first compilation under Hazrat Abu Bakr [28]."
    },
    {
        "question": "In what year of the Elephant (CE) was the Prophet Muhammad born in Makkah?",
        "options": [
            "571 CE",
            "610 CE",
            "622 CE",
            "632 CE"
        ],
        "correctIndex": 0,
        "rationale": "The Prophet was born in 571 CE [28]."
    },
    {
        "question": "Which battle (Ghazwa) was the first major conflict between Muslims and the Quraish (2 AH)?",
        "options": [
            "Battle of Uhud",
            "Battle of Badr",
            "Battle of Khandaq",
            "Battle of Khaybar"
        ],
        "correctIndex": 1,
        "rationale": "The Battle of Badr (2 AH) was the first major battle [29]."
    },
    {
        "question": "Who suggested the digging of a trench during the Battle of Khandaq (5 AH)?",
        "options": [
            "Hazrat Abu Bakr",
            "Hazrat Umar",
            "Hazrat Salman Farsi",
            "Hazrat Ali"
        ],
        "correctIndex": 2,
        "rationale": "The trench was suggested by Salman Farsi (RA) [29]."
    },
    {
        "question": "Who was the 2nd Rightly Guided Caliph of Islam (634–644 CE)?",
        "options": [
            "Hazrat Abu Bakr",
            "Hazrat Umar Farooq",
            "Hazrat Usman Ghani",
            "Hazrat Ali"
        ],
        "correctIndex": 1,
        "rationale": "Hazrat Umar Farooq was the 2nd Caliph [30]."
    },
    {
        "question": "The abbreviation 'HTML' in IT fundamentals stands for:",
        "options": [
            "HyperText Markup Language",
            "High Text Management Link",
            "Hyper Text Media Link",
            "Hyper Transfer Mode Link"
        ],
        "correctIndex": 0,
        "rationale": "HTML stands for HyperText Markup Language [25]."
    },
    {
        "question": "What is the synonym of the word 'Abate'?",
        "options": [
            "Increase",
            "Decrease",
            "Display",
            "Recover"
        ],
        "correctIndex": 1,
        "rationale": "Synonym for Abate is Decrease [31]."
    },
    {
        "question": "The idiom 'To have your hands full' means:",
        "options": [
            "To be rich",
            "To be very busy",
            "To be honest",
            "To be an unknown competitor"
        ],
        "correctIndex": 1,
        "rationale": "The idiom means to be very busy [32]."
    },
    {
        "question": "A person who believes the worst is called a:",
        "options": [
            "Optimist",
            "Pessimist",
            "Theist",
            "Centenarian"
        ],
        "correctIndex": 1,
        "rationale": "A pessimist believes the worst [33]."
    },
    {
        "question": "Which preposition is correctly paired with the word 'injurious'?",
        "options": [
            "for",
            "to",
            "with",
            "against"
        ],
        "correctIndex": 1,
        "rationale": "The correct usage is 'injurious to' [33]."
    },
    {
        "question": "According to grammar rules, the plural of 'person' is:",
        "options": [
            "Persons",
            "Peoples",
            "People",
            "Persones"
        ],
        "correctIndex": 2,
        "rationale": "The plural of person is people [34]."
    },
    {
        "question": "What is the official height of Mt. Everest as jointly declared by China and Nepal in December 2020?",
        "options": [
            "8,611 m",
            "8,848.00 m",
            "8,848.86 m",
            "8,850.50 m"
        ],
        "correctIndex": 2,
        "rationale": "According to the world geography highlights, China and Nepal jointly declared the height to be 8,848.86 meters (29,031.69 feet) [1], [2]."
    },
    {
        "question": "Which specific mountain pass connects Chitral to the Badakhshan province of Afghanistan?",
        "options": [
            "Lowari Pass",
            "Shandur Pass",
            "Dorah Pass",
            "Babusar Pass"
        ],
        "correctIndex": 2,
        "rationale": "The mountain passes table identifies the Dorah Pass (4,300 m) as the connector between Chitral and Badakhshan [3]."
    },
    {
        "question": "According to the source, what is the length of the Indus River?",
        "options": [
            "2,880 km",
            "2,912 km",
            "3,180 km",
            "3,300 km"
        ],
        "correctIndex": 2,
        "rationale": "The rivers table lists the Indus River as being 3,180 km long, though it notes some sources may quote 2,880 km [4]."
    },
    {
        "question": "Which individual served as the Prime Minister of Pakistan when the 1956 Constitution was enforced?",
        "options": [
            "Liaquat Ali Khan",
            "Chaudhry Muhammad Ali",
            "Huseyn Shaheed Suhrawardy",
            "I.I. Chundrigar"
        ],
        "correctIndex": 1,
        "rationale": "The constitution comparison table identifies PM Chaudhry Muhammad Ali as the one who promulgated the 1956 Constitution [5]."
    },
    {
        "question": "How many seats are currently in the Senate of Pakistan following the changes in 2018?",
        "options": [
            "80",
            "96",
            "100",
            "104"
        ],
        "correctIndex": 1,
        "rationale": "The source states that the Senate now has 96 seats, having been reduced from 104 in 2018 [6]."
    },
    {
        "question": "Which constitutional article in Pakistan deals with the offense of 'Treason'?",
        "options": [
            "Article 2",
            "Article 6",
            "Article 19",
            "Article 25-A"
        ],
        "correctIndex": 1,
        "rationale": "Article 6 of the 1973 Constitution is explicitly designated as the article dealing with treason [6], [7]."
    },
    {
        "question": "What is the chemical name for Vitamin B1?",
        "options": [
            "Retinol",
            "Thiamine",
            "Riboflavin",
            "Niacin"
        ],
        "correctIndex": 1,
        "rationale": "The vitamins table identifies Vitamin B1 as Thiamine [8]."
    },
    {
        "question": "A deficiency in Vitamin B3 (Niacin) results in which specific disease?",
        "options": [
            "Beri-beri",
            "Pellagra",
            "Scurvy",
            "Rickets"
        ],
        "correctIndex": 1,
        "rationale": "The source correlates Vitamin B3 (Niacin) deficiency with Pellagra [9]."
    },
    {
        "question": "Which blood group is identified in the text as the 'Universal Donor'?",
        "options": [
            "Group A",
            "Group B",
            "Group AB",
            "Group O"
        ],
        "correctIndex": 3,
        "rationale": "The human body basics section identifies Blood group O as the universal donor [10], [11]."
    },
    {
        "question": "In computer terminology, what technology was the hallmark of 'Second Generation' computers?",
        "options": [
            "Vacuum tubes",
            "Transistors",
            "Integrated Circuits",
            "Microprocessors"
        ],
        "correctIndex": 1,
        "rationale": "The computer generations list identifies transistors as the technology used in the 2nd generation [12]."
    },
    {
        "question": "Which shortcut key in MS Office is used to start a slideshow in PowerPoint or refresh a page?",
        "options": [
            "F1",
            "F2",
            "F5",
            "F7"
        ],
        "correctIndex": 2,
        "rationale": "The MS Office shortcuts list identifies F5 as the key for 'Refresh/Slideshow start in PowerPoint' [13]."
    },
    {
        "question": "Who was the primary scribe responsible for writing down the first compilation of the Quran under Hazrat Abu Bakr (RA)?",
        "options": [
            "Hazrat Umar (RA)",
            "Hazrat Zaid bin Thabit (RA)",
            "Hazrat Usman (RA)",
            "Hazrat Ali (RA)"
        ],
        "correctIndex": 1,
        "rationale": "The source states that the Quran was first written by Hazrat Zaid bin Thabit (RA) upon the advice of Hazrat Umar (RA) [14]."
    },
    {
        "question": "In which Hijri year was the 'Conquest of Makkah' achieved?",
        "options": [
            "2 AH",
            "5 AH",
            "8 AH",
            "10 AH"
        ],
        "correctIndex": 2,
        "rationale": "The Prophet's life events table lists the Conquest of Makkah as 8 AH (630 CE) [15]."
    },
    {
        "question": "Which mountain pass connects Qilla Abdullah to Chaman in Balochistan?",
        "options": [
            "Bolan Pass",
            "Khojak Pass",
            "Gomal Pass",
            "Babusar Pass"
        ],
        "correctIndex": 1,
        "rationale": "The mountain passes table identifies the Khojak Pass (2,290 m) as the connector for Qilla Abdullah and Chaman [3]."
    },
    {
        "question": "What is the total number of general seats in the National Assembly of Pakistan?",
        "options": [
            "266",
            "272",
            "336",
            "342"
        ],
        "correctIndex": 0,
        "rationale": "The National Assembly consists of 336 total seats, of which 266 are general seats [6]."
    },
    {
        "question": "Which vitamin is also known as 'Tocopherol'?",
        "options": [
            "Vitamin A",
            "Vitamin C",
            "Vitamin D",
            "Vitamin E"
        ],
        "correctIndex": 3,
        "rationale": "The vitamins table lists 'Tocopherol' as the chemical name for Vitamin E [9]."
    },
    {
        "question": "The 'Sir Creek' dispute involves a 96-km estuary between Sindh and which Indian state?",
        "options": [
            "Rajasthan",
            "Punjab",
            "Gujarat",
            "Maharashtra"
        ],
        "correctIndex": 2,
        "rationale": "The source defines Sir Creek as a 96-km disputed estuary between Sindh and Indian Gujarat [16], [17]."
    },
    {
        "question": "Which river is formed by the meeting of the Chandra and Bhaga rivers in the Himachal region?",
        "options": [
            "Jhelum",
            "Chenab",
            "Ravi",
            "Sutlej"
        ],
        "correctIndex": 1,
        "rationale": "The rivers table notes that the Chenab is formed by the confluence of the Chandra and Bhaga rivers (Chandrabhaga) [4], [18]."
    },
    {
        "question": "On which date is World Environment Day observed annually?",
        "options": [
            "3 May",
            "5 June",
            "11 July",
            "8 September"
        ],
        "correctIndex": 1,
        "rationale": "The international days table identifies 5 June as World Environment Day [19]."
    },
    {
        "question": "In MS Office, which shortcut key is used for the 'Save As' command?",
        "options": [
            "F1",
            "F5",
            "F7",
            "F12"
        ],
        "correctIndex": 3,
        "rationale": "The MS Office shortcuts list identifies F12 as the key for 'Save As' [13]."
    },
    {
        "question": "Who was appointed as Pakistan's first-ever Chief of Defence Forces (CDF) on 4 December 2025?",
        "options": [
            "Field Marshal Syed Asim Munir",
            "General Sahir Shamshad Mirza",
            "General Raheel Sharif",
            "General Qamar Javed Bajwa"
        ],
        "correctIndex": 0,
        "rationale": "The source identifies Field Marshal Syed Asim Munir as the country's first CDF, appointed on 4 December 2025 [20]."
    },
    {
        "question": "Which animal is designated as the 'National Predator' of Pakistan?",
        "options": [
            "Markhor",
            "Snow Leopard",
            "Mugger Crocodile",
            "Indus Dolphin"
        ],
        "correctIndex": 1,
        "rationale": "The national symbols table explicitly lists the Snow Leopard as the 'National Predator' [21]."
    },
    {
        "question": "What is the synonym for the word 'Embezzle' as provided in the vocabulary list?",
        "options": [
            "Reimburse",
            "Misappropriate",
            "Capitulate",
            "Abate"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table lists 'Misappropriate' as the synonym for 'Embezzle' [22]."
    },
    {
        "question": "The idiom 'To leave no stone unturned' means:",
        "options": [
            "To be lazy",
            "To suspect something",
            "To try every possible means",
            "To act rarely"
        ],
        "correctIndex": 2,
        "rationale": "The idiom list defines 'To leave no stone unturned' as 'Try every means' [23]."
    },
    {
        "question": "What is the one-word substitution for 'a government by religious leaders'?",
        "options": [
            "Democracy",
            "Theist",
            "Theocracy",
            "Centenarian"
        ],
        "correctIndex": 2,
        "rationale": "The one-word substitution list defines 'Theocracy' as a government by religious leaders [24]."
    },
    {
        "question": "Which preposition is correctly used with the word 'deprived'?",
        "options": [
            "to",
            "from",
            "of",
            "with"
        ],
        "correctIndex": 2,
        "rationale": "The frequent prepositions list specifies the usage as 'deprived of' [24]."
    },
    {
        "question": "The Battle of Trench (Khandaq/Ahzab) was fought in which Hijri year?",
        "options": [
            "2 AH",
            "3 AH",
            "5 AH",
            "8 AH"
        ],
        "correctIndex": 2,
        "rationale": "The battles table identifies Khandaq (Trench) as occurring in 5 AH [15]."
    },
    {
        "question": "Who was the 3rd Rightly Guided Caliph, known for standardizing the Quran (Mushaf-e-Usmani)?",
        "options": [
            "Hazrat Abu Bakr",
            "Hazrat Umar",
            "Hazrat Usman Ghani",
            "Hazrat Ali"
        ],
        "correctIndex": 2,
        "rationale": "The source identifies Hazrat Usman Ghani (RA) as the 3rd Caliph who standardized the Quran [25]."
    },
    {
        "question": "Which city is nicknamed the 'Fruit Garden of Pakistan'?",
        "options": [
            "Peshawar",
            "Lahore",
            "Quetta",
            "Karachi"
        ],
        "correctIndex": 2,
        "rationale": "The study guide describes Quetta as the 'Fruit Garden of Pakistan' [1]."
    },
    {
        "question": "How many barrages are located in the province of Sindh on the Indus River?",
        "options": [
            "2",
            "3",
            "5",
            "7"
        ],
        "correctIndex": 1,
        "rationale": "The source identifies that Sindh has 3 barrages on the Indus: Guddu, Sukkur, and Kotri [26], [27], [28]."
    },
    {
        "question": "Which vitamin deficiency is specifically linked to 'Scurvy'?",
        "options": [
            "Vitamin A",
            "Vitamin B1",
            "Vitamin C",
            "Vitamin D"
        ],
        "correctIndex": 2,
        "rationale": "The source identifies Vitamin C (Ascorbic acid) deficiency as the cause of scurvy [29], [9]."
    },
    {
        "question": "In computing, what does the abbreviation 'GUI' stand for?",
        "options": [
            "General User Interface",
            "Graphical User Interface",
            "Global User Index",
            "Group User Integration"
        ],
        "correctIndex": 1,
        "rationale": "The common abbreviations list identifies GUI as 'Graphical User Interface' [30]."
    },
    {
        "question": "Who was sworn in as the Governor of Sindh on 13 March 2026?",
        "options": [
            "Kamran Tessori",
            "Nehal Hashmi",
            "Syed Murad Ali Shah",
            "Zafar Ahmed Rajput"
        ],
        "correctIndex": 1,
        "rationale": "Nehal Hashmi was sworn in as the new Governor of Sindh on 13 March 2026, replacing Kamran Tessori [30]."
    },
    {
        "question": "The 'Nara Canal', which is the longest canal in Pakistan, is fed by which barrage?",
        "options": [
            "Guddu Barrage",
            "Sukkur Barrage",
            "Kotri Barrage",
            "Trimmu Barrage"
        ],
        "correctIndex": 1,
        "rationale": "The source notes that the Sukkur Barrage irrigates land via 7 canals, including the Nara Canal, which is the longest in Pakistan [31]."
    },
    {
        "question": "What is the total land area of the province of Sindh?",
        "options": [
            "140,914 km²",
            "205,344 km²",
            "347,190 km²",
            "881,913 km²"
        ],
        "correctIndex": 0,
        "rationale": "The Sindh-specific GK section identifies Sindh's area as 140,914 km² [30]."
    },
    {
        "question": "In the series 1, 5, 11, 19, 29, what is the next number?",
        "options": [
            "35",
            "39",
            "41",
            "45"
        ],
        "correctIndex": 2,
        "rationale": "The math section explains that the differences are 4, 6, 8, and 10; therefore, the next difference is 12, making the next number 41 (29 + 12) [32]."
    },
    {
        "question": "Which planet in our solar system is identified as the 'Red Planet'?",
        "options": [
            "Mercury",
            "Venus",
            "Mars",
            "Jupiter"
        ],
        "correctIndex": 2,
        "rationale": "The quick science facts identify Mars as 'the Red Planet' [33]."
    },
    {
        "question": "What is the weight of an average human brain according to the study guide?",
        "options": [
            "~1.0 kg",
            "~1.4 kg",
            "~2.0 kg",
            "~0.5 kg"
        ],
        "correctIndex": 1,
        "rationale": "The human body basics section identifies the brain weight as approximately 1.4 kg [11]."
    },
    {
        "question": "Which Surah of the Holy Quran is known as the 'Shortest Surah'?",
        "options": [
            "Al-Alaq",
            "Al-Nasr",
            "Al-Kausar",
            "Al-Fatihah"
        ],
        "correctIndex": 2,
        "rationale": "The Quran facts section identifies Surah Al-Kausar (3 ayahs) as the shortest [34]."
    },
    {
        "question": "Who was the first person to call the Azan in Islam?",
        "options": [
            "Hazrat Bilal (RA)",
            "Hazrat Abu Bakr (RA)",
            "Hazrat Umar (RA)",
            "Hazrat Ali (RA)"
        ],
        "correctIndex": 0,
        "rationale": "The source identifies Hazrat Bilal (RA) as the one who called the first Azan in 1 AH in Madina [25]."
    },
    {
        "question": "What is the current population of Pakistan according to the CCI-approved 2023 Census?",
        "options": [
            "207.7 million",
            "220.9 million",
            "241.49 million",
            "250.1 million"
        ],
        "correctIndex": 2,
        "rationale": "The population section identifies 241.49 million as the official figure from the 7th Census approved in August 2023 [35], [36]."
    },
    {
        "question": "Which international organization is headquartered in Montreal, Canada?",
        "options": [
            "IMF",
            "WHO",
            "ICAO",
            "FAO"
        ],
        "correctIndex": 2,
        "rationale": "The major international organizations table lists Montreal, Canada as the headquarters for ICAO [37]."
    },
    {
        "question": "The 'Durand Line' separates Pakistan from which neighbor?",
        "options": [
            "India",
            "China",
            "Afghanistan",
            "Iran"
        ],
        "correctIndex": 2,
        "rationale": "The borders table identifies the Durand Line (demarcated in 1893) as the border between Pakistan and Afghanistan [29], [16], [17]."
    },
    {
        "question": "Which vitamin is synthesized in the human skin via exposure to sunlight?",
        "options": [
            "Vitamin A",
            "Vitamin C",
            "Vitamin D",
            "Vitamin K"
        ],
        "correctIndex": 2,
        "rationale": "The science section states that Vitamin D is synthesized in the skin via sunlight [29], [10]."
    },
    {
        "question": "What is the hardest substance in the human body?",
        "options": [
            "Femur",
            "Tooth enamel",
            "Stapes",
            "Skull"
        ],
        "correctIndex": 1,
        "rationale": "The human body basics section identifies tooth enamel as the hardest substance [10]."
    },
    {
        "question": "In mathematics, what is the formula for the area of a circle?",
        "options": [
            "l × w",
            "½ × b × h",
            "πr²",
            "2(l + w)"
        ],
        "correctIndex": 2,
        "rationale": "The geometry basics list identifies the area of a circle as πr² [38]."
    },
    {
        "question": "What is the synonym for the word 'Imperceptible'?",
        "options": [
            "Obvious",
            "Subtle",
            "Frank",
            "Reserved"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table lists 'Subtle' as the synonym for 'Imperceptible' [39], [22]."
    },
    {
        "question": "The idiom 'To smell a rat' means:",
        "options": [
            "To be very busy",
            "To suspect that something is wrong",
            "To do the right thing",
            "To act rarely"
        ],
        "correctIndex": 1,
        "rationale": "The idiom list defines 'Smell a rat' as 'To suspect that something is wrong' [39], [23]."
    },
    {
        "question": "Which companion suggested the digging of a trench during the Battle of Khandaq?",
        "options": [
            "Hazrat Abu Bakr",
            "Hazrat Umar",
            "Hazrat Salman Farsi (RA)",
            "Hazrat Ali"
        ],
        "correctIndex": 2,
        "rationale": "The battles table notes the trench was suggested by Salman Farsi (RA) [15]."
    },
    {
        "question": "Which city was the first capital of Pakistan?",
        "options": [
            "Islamabad",
            "Lahore",
            "Karachi",
            "Rawalpindi"
        ],
        "correctIndex": 2,
        "rationale": "The source states that the first capital was Karachi, followed by Rawalpindi (1959-67) and then Islamabad [40]."
    },
    {
        "question": "Which specific strip of Afghan territory, approximately 16 km wide, separates Pakistan from Tajikistan?",
        "options": [
            "Khyber Pass",
            "Wakhan Corridor",
            "Durand Line",
            "Sir Creek"
        ],
        "correctIndex": 1,
        "rationale": "The source identifies the Wakhan Corridor as a strip of Afghanistan (~16 km wide) that separates Pakistan from Tajikistan [1]."
    },
    {
        "question": "Which mountain pass is located at an elevation of 6,013 m within the Karakoram Range?",
        "options": [
            "Khunjerab Pass",
            "Mustagh Pass",
            "Kilik Pass",
            "Babusar Pass"
        ],
        "correctIndex": 1,
        "rationale": "The mountain passes table lists the Mustagh Pass at an elevation of 6,013 m [2]."
    },
    {
        "question": "What is the length of the Ravi River according to the 'Rivers of Pakistan' table?",
        "options": [
            "470 km",
            "720 km",
            "974 km",
            "1,450 km"
        ],
        "correctIndex": 1,
        "rationale": "The source identifies the Ravi River as being approximately 720 km long [3]."
    },
    {
        "question": "The Indus Waters Treaty was signed under the mediation of which international organization?",
        "options": [
            "United Nations",
            "World Bank",
            "IMF",
            "OIC"
        ],
        "correctIndex": 1,
        "rationale": "The treaty was signed in 1960 under the mediation of the World Bank [3]."
    },
    {
        "question": "Which lake is identified as the second-largest freshwater lake in Pakistan and serves as the primary water supply for Karachi?",
        "options": [
            "Manchar Lake",
            "Keenjhar / Kalri Lake",
            "Haleji Lake",
            "Hamal Lake"
        ],
        "correctIndex": 1,
        "rationale": "The lakes table identifies Keenjhar / Kalri Lake as the 2nd largest and Karachi's water supply [4]."
    },
    {
        "question": "Which barrage is noted as being the 'oldest of all', built in 1892 on the Chenab River?",
        "options": [
            "Sukkur Barrage",
            "Kotri Barrage",
            "Guddu Barrage",
            "Khanki Barrage"
        ],
        "correctIndex": 3,
        "rationale": "The barrages section identifies Khanki (1892) as the oldest of all [5]."
    },
    {
        "question": "According to the 2026 political update, who is the 11th Chief of Army Staff and the first-ever Chief of Defence Forces (CDF)?",
        "options": [
            "General Sahir Shamshad Mirza",
            "Field Marshal Syed Asim Munir",
            "General Raheel Sharif",
            "General Qamar Javed Bajwa"
        ],
        "correctIndex": 1,
        "rationale": "Field Marshal Syed Asim Munir holds both posts concurrently as the 11th COAS and first CDF [6]."
    },
    {
        "question": "On which date was Nehal Hashmi sworn in as the Governor of Sindh, replacing Kamran Tessori?",
        "options": [
            "10 March 2024",
            "4 December 2025",
            "13 March 2026",
            "20 May 2025"
        ],
        "correctIndex": 2,
        "rationale": "Nehal Hashmi was sworn in as the Governor of Sindh on 13 March 2026 [7]."
    },
    {
        "question": "What is the 'National Predator' of Pakistan?",
        "options": [
            "Markhor",
            "Snow Leopard",
            "Mugger Crocodile",
            "Indus River Dolphin"
        ],
        "correctIndex": 1,
        "rationale": "The national symbols list identifies the Snow Leopard as the National Predator [8]."
    },
    {
        "question": "Which vitamin is fat-soluble and is essential for preventing 'Night blindness'?",
        "options": [
            "Vitamin A",
            "Vitamin B1",
            "Vitamin C",
            "Vitamin K"
        ],
        "correctIndex": 0,
        "rationale": "Vitamin A (Retinol) is a fat-soluble vitamin; its deficiency causes night blindness [9]."
    },
    {
        "question": "A deficiency in Vitamin B12 (Cobalamin) primarily leads to which condition?",
        "options": [
            "Scurvy",
            "Pellagra",
            "Pernicious anemia",
            "Beri-beri"
        ],
        "correctIndex": 2,
        "rationale": "The vitamins table identifies Pernicious anemia as the deficiency result for B12 [10]."
    },
    {
        "question": "Which blood group is known as the 'Universal Recipient'?",
        "options": [
            "Group O",
            "Group A",
            "Group B",
            "Group AB"
        ],
        "correctIndex": 3,
        "rationale": "Blood group AB is identified as the universal recipient [11]."
    },
    {
        "question": "What is the synonym for the word 'Frank' according to the high-yield vocabulary list?",
        "options": [
            "Reserved",
            "Candid",
            "Subtle",
            "Silent"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table lists 'Candid' as the synonym for 'Frank' [12]."
    },
    {
        "question": "The idiom 'A dark horse' refers to which of the following?",
        "options": [
            "An unknown competitor",
            "A person who resembles their parent",
            "A very busy person",
            "Honest and transparent"
        ],
        "correctIndex": 0,
        "rationale": "The idioms list defines 'A dark horse' as an 'Unknown competitor' [13]."
    },
    {
        "question": "Which Surah of the Holy Quran is known for having 'two Bismillah' instances?",
        "options": [
            "Surah Al-Baqarah",
            "Surah At-Taubah",
            "Surah An-Naml",
            "Surah Al-Nasr"
        ],
        "correctIndex": 2,
        "rationale": "Surah An-Naml (27th) is the Surah with two Bismillah [14]."
    },
    {
        "question": "How many 'Ghazwat' (battles led by the Prophet) are recorded in Islamic history according to the source?",
        "options": [
            "12",
            "27",
            "53–55",
            "114"
        ],
        "correctIndex": 1,
        "rationale": "The source states there were a total of 27 Ghazwat [15]."
    },
    {
        "question": "Which computer generation utilized 'Integrated Circuits (ICs)' as its primary technology?",
        "options": [
            "1st Generation",
            "2nd Generation",
            "3rd Generation",
            "4th Generation"
        ],
        "correctIndex": 2,
        "rationale": "The computer fundamentals section identifies ICs as the hallmark of the 3rd generation [16]."
    },
    {
        "question": "In Microsoft Office, what is the function of the shortcut key 'F12'?",
        "options": [
            "Help",
            "Rename",
            "Refresh",
            "Save As"
        ],
        "correctIndex": 3,
        "rationale": "The MS Office shortcuts list identifies F12 as 'Save As' [17]."
    },
    {
        "question": "The 'Nara Canal' is identified as the longest canal in Pakistan and is fed by which barrage?",
        "options": [
            "Guddu Barrage",
            "Sukkur Barrage",
            "Kotri Barrage",
            "Jinnah Barrage"
        ],
        "correctIndex": 1,
        "rationale": "The Nara Canal is one of the canals irrigated by the Sukkur Barrage [18]."
    },
    {
        "question": "Which international organization is identified as the 'Oldest IGO', founded in 1865?",
        "options": [
            "WHO",
            "ILO",
            "ITU",
            "WIPO"
        ],
        "correctIndex": 2,
        "rationale": "The ITU, founded in 1865, is listed as the oldest Inter-Governmental Organization (IGO) [19]."
    },
    {
        "question": "What is the official height of Mt. Everest as jointly declared by China and Nepal in December 2020?",
        "options": [
            "8,848.00 m",
            "8,848.86 m",
            "8,611 m",
            "8,850.50 m"
        ],
        "correctIndex": 1,
        "rationale": "In December 2020, China and Nepal jointly declared the height of Everest as 8,848.86 meters (29,031.69 feet) [1]."
    },
    {
        "question": "Who was appointed as Pakistan's first-ever Chief of Defence Forces (CDF) on 4 December 2025?",
        "options": [
            "General Sahir Shamshad Mirza",
            "Field Marshal Syed Asim Munir",
            "General Raheel Sharif",
            "General Qamar Javed Bajwa"
        ],
        "correctIndex": 1,
        "rationale": "Field Marshal Syed Asim Munir was appointed as the country's first Chief of Defence Forces on 4 December 2025 [2]."
    },
    {
        "question": "The 'Durand Line' length according to the Survey of Pakistan 2020 is recorded as:",
        "options": [
            "2,252 km",
            "2,430 km",
            "2,611 km",
            "2,640 km"
        ],
        "correctIndex": 2,
        "rationale": "While Wikipedia quotes 2,640 km, the Survey of Pakistan 2020 figure for the Durand Line is 2,611 km [3]."
    },
    {
        "question": "Which specific constitutional article designates Urdu as the National Language of Pakistan?",
        "options": [
            "Article 2",
            "Article 6",
            "Article 25-A",
            "Article 251"
        ],
        "correctIndex": 3,
        "rationale": "According to the 1973 Constitution, Urdu is designated as the national language under Article 251 [4, 5]."
    },
    {
        "question": "On which date was Nehal Hashmi sworn in as the Governor of Sindh?",
        "options": [
            "10 March 2024",
            "4 December 2025",
            "13 March 2026",
            "20 May 2025"
        ],
        "correctIndex": 2,
        "rationale": "Nehal Hashmi was sworn in as the new Governor of Sindh on 13 March 2026, replacing Kamran Tessori [6, 7]."
    },
    {
        "question": "Which vitamin is synthesized in the skin via sunlight and has 'Calcitriol' as its active form?",
        "options": [
            "Vitamin A",
            "Vitamin C",
            "Vitamin D",
            "Vitamin K"
        ],
        "correctIndex": 2,
        "rationale": "Vitamin D is synthesized in the skin via sunlight, and its active form is Calcitriol [8]."
    },
    {
        "question": "The 'Nara Canal' is identified in the sources as the:",
        "options": [
            "Oldest canal in Pakistan",
            "Deepest canal in Pakistan",
            "Longest canal in Pakistan",
            "First canal on the Chenab"
        ],
        "correctIndex": 2,
        "rationale": "The sources explicitly state that the Nara Canal is the longest canal in Pakistan [9]."
    },
    {
        "question": "Which computer generation is characterized by the use of 'Integrated Circuits (ICs)'?",
        "options": [
            "1st Generation",
            "2nd Generation",
            "3rd Generation",
            "4th Generation"
        ],
        "correctIndex": 2,
        "rationale": "The 3rd generation of computers utilized Integrated Circuits (ICs) [10]."
    },
    {
        "question": "What was the total number of registered voters in the 2024 Pakistan general elections?",
        "options": [
            "128,585,760",
            "148,585,760",
            "158,585,760",
            "168,585,760"
        ],
        "correctIndex": 1,
        "rationale": "The sources record 148,585,760 registered voters for the 2024 Pakistan elections [11]."
    },
    {
        "question": "Which Surah of the Holy Quran is known for having two 'Bismillah' instances?",
        "options": [
            "Surah Al-Baqarah",
            "Surah At-Taubah",
            "Surah An-Naml",
            "Surah Al-Nasr"
        ],
        "correctIndex": 2,
        "rationale": "Surah An-Naml (the 27th Surah) contains two Bismillahs [12]."
    },
    {
        "question": "The 'Tashkent Declaration', which ended the 1965 war, was signed on which date?",
        "options": [
            "6 September 1965",
            "10 January 1966",
            "2 July 1972",
            "14 August 1973"
        ],
        "correctIndex": 1,
        "rationale": "The 1965 war ended with the Tashkent Declaration, signed on 10 January 1966 [13]."
    },
    {
        "question": "Which mountain pass connects Chitral to the Ghizer district and is famously called the 'Roof of the World'?",
        "options": [
            "Khunjerab Pass",
            "Lowari Pass",
            "Shandur Pass",
            "Babusar Pass"
        ],
        "correctIndex": 2,
        "rationale": "Shandur Pass (3,700 m) connects Chitral to Ghizer and is known as the 'Roof of the World' [14]."
    },
    {
        "question": "According to the 1973 Constitution, Article 6 deals with which of the following?",
        "options": [
            "Islam as State Religion",
            "Freedom of Speech",
            "Treason",
            "Right to Education"
        ],
        "correctIndex": 2,
        "rationale": "Article 6 of the 1973 Constitution of Pakistan specifically addresses treason [5]."
    },
    {
        "question": "Which city is nicknamed the 'Fruit Garden of Pakistan'?",
        "options": [
            "Peshawar",
            "Quetta",
            "Lahore",
            "Karachi"
        ],
        "correctIndex": 1,
        "rationale": "Quetta, the capital of Balochistan, is known as the 'Fruit Garden of Pakistan' [1]."
    },
    {
        "question": "What is the synonym for the word 'Abate' as listed in the high-yield vocabulary section?",
        "options": [
            "Increase",
            "Decrease",
            "Rebellion",
            "Yield"
        ],
        "correctIndex": 1,
        "rationale": "The vocabulary table defines 'Abate' as 'Lessen' or 'Decrease' [15]."
    },
    {
        "question": "Which barrage, built in 1892 on the Chenab River, is identified as the 'oldest of all'?",
        "options": [
            "Sukkur Barrage",
            "Guddu Barrage",
            "Kotri Barrage",
            "Khanki Barrage"
        ],
        "correctIndex": 3,
        "rationale": "Khanki Barrage, built in 1892 on the Chenab River, is noted as the oldest of all [16]."
    },
    {
        "question": "The 'Sir Creek' dispute involves a 96-km estuary located between Sindh and which Indian state?",
        "options": [
            "Rajasthan",
            "Punjab",
            "Gujarat",
            "Maharashtra"
        ],
        "correctIndex": 2,
        "rationale": "Sir Creek is a 96-km disputed estuary between Sindh and Indian Gujarat [17]."
    },
    {
        "question": "Which companion of the Prophet Muhammad suggested digging a trench during the Battle of Ahzab (5 AH)?",
        "options": [
            "Hazrat Abu Bakr (RA)",
            "Hazrat Umar (RA)",
            "Hazrat Salman Farsi (RA)",
            "Hazrat Ali (RA)"
        ],
        "correctIndex": 2,
        "rationale": "The trench (Khandaq) for the Battle of Ahzab was suggested by Hazrat Salman Farsi (RA) [18]."
    },
    {
        "question": "In Microsoft Office, what is the specific function of the shortcut key 'F7'?",
        "options": [
            "Help",
            "Rename",
            "Slideshow start",
            "Spelling & Grammar check"
        ],
        "correctIndex": 3,
        "rationale": "The F7 key is used for 'Spelling & Grammar check' in MS Office applications [19]."
    },
    {
        "question": "Which vitamin deficiency is specifically linked to 'Scurvy'?",
        "options": [
            "Vitamin A",
            "Vitamin B1",
            "Vitamin C",
            "Vitamin D"
        ],
        "correctIndex": 2,
        "rationale": "Vitamin C (Ascorbic acid) deficiency is the cause of scurvy [20, 21]."
    },
    {
        "question": "Who was the first Prime Minister of Pakistan, assassinated on 16 October 1951?",
        "options": [
            "Quaid-e-Azam",
            "Liaquat Ali Khan",
            "Z.A. Bhutto",
            "Ayub Khan"
        ],
        "correctIndex": 1,
        "rationale": "Liaquat Ali Khan was the first Prime Minister and was assassinated on 16 October 1951 in Rawalpindi [5]."
    },
    {
        "question": "The 'Radcliffe Line' was drawn on 17 August 1947 to separate which two countries?",
        "options": [
            "Pakistan and Afghanistan",
            "Pakistan and China",
            "Pakistan and India",
            "Pakistan and Iran"
        ],
        "correctIndex": 2,
        "rationale": "The Radcliffe Line was drawn by Sir Cyril Radcliffe on 17 August 1947 to separate India and Pakistan [3, 20]."
    },
    {
        "question": "What is the annual population growth rate of Pakistan according to the 7th Census approved in 2023?",
        "options": [
            "1.55%",
            "2.00%",
            "2.55%",
            "3.10%"
        ],
        "correctIndex": 2,
        "rationale": "The 2023 CCI-approved 7th Population Census states the annual growth rate is 2.55% [22, 23]."
    },
    {
        "question": "Which international organization is identified as the 'Oldest UN agency', founded in 1919?",
        "options": [
            "WHO",
            "UNESCO",
            "ILO",
            "FAO"
        ],
        "correctIndex": 2,
        "rationale": "The International Labour Organization (ILO), founded in 1919, is the oldest UN agency [24, 25]."
    },
    {
        "question": "The 'Markhor' was designated as the national animal of Pakistan. What does the name 'Markhor' literally mean?",
        "options": [
            "Mountain King",
            "Snake-eater",
            "Snow Hunter",
            "Wild Goat"
        ],
        "correctIndex": 1,
        "rationale": "The name 'Markhor' literally translates to 'snake-eater' [23]."
    },
    {
        "question": "On which date was Field Marshal Syed Asim Munir promoted to his current rank?",
        "options": [
            "4 December 2025",
            "20 May 2025",
            "10 March 2024",
            "4 March 2024"
        ],
        "correctIndex": 1,
        "rationale": "Field Marshal Syed Asim Munir was promoted to that rank on 20 May 2025 following Operation Bunyan-um-Marsoos [22]."
    },
    {
        "question": "Which barrage on the Indus River in Sindh has 66 gates and was completed in 1932?",
        "options": [
            "Guddu Barrage",
            "Sukkur Barrage",
            "Kotri Barrage",
            "Taunsa Barrage"
        ],
        "correctIndex": 1,
        "rationale": "The Sukkur Barrage (Lloyd Barrage), completed in 1932, has 66 gates and is the oldest in Pakistan [9, 20]."
    },
    {
        "question": "What is the synonym for the word 'Frank' according to the source?",
        "options": [
            "Reserved",
            "Silent",
            "Candid",
            "Subtle"
        ],
        "correctIndex": 2,
        "rationale": "The high-yield vocabulary list identifies 'Candid' as a synonym for 'Frank' [15]."
    },
    {
        "question": "The 'Line of Control (LoC)' in Kashmir was established primarily through which two agreements?",
        "options": [
            "Tashkent & Simla",
            "Karachi (1949) & Simla (1972)",
            "Lucknow & Delhi",
            "Radcliffe & Durand"
        ],
        "correctIndex": 1,
        "rationale": "The LoC was established through the Karachi Agreement (1949) and the Simla Agreement (1972) [13, 17]."
    },
    {
        "question": "How many bits are there in one Byte?",
        "options": [
            "4 bits",
            "8 bits",
            "16 bits",
            "1,024 bits"
        ],
        "correctIndex": 1,
        "rationale": "The source defines 1 Byte as being equal to 8 bits [19]."
    }
];

export default quizData;
