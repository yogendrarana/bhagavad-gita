export type VerseType = {
    verse: number;
    text: {
        english: string;
        nepali: string;
        hindi: string;
        sanskrit: string;
    };
}

export type ChapterType = {
    chapter: number;
    verses: VerseType[];
}

export type GitaDataType = ChapterType[];


// data
export const GITA_DATA: GitaDataType = [
    // Chapter 1
    {
        chapter: 1,
        verses: [
            {
                verse: 1,
                text: {
                    english: "Dhritarashtra said: O Sanjaya, after my sons and the sons of Pandu assembled in the place of pilgrimage at Kurukshetra, desiring to fight, what did they do?",
                    nepali: "धृतराष्ट्र बोले – हे संजय, धर्मक्षेत्र कुरुक्षेत्रमा भेा जम्मा भएर लड्न तयार भएका थिए । मेरा छोराहरू र पाण्डवहरूले के गरे ? ॥ १ ॥",
                    hindi: "धृतराष्ट्र बोले - हे संजय! धर्मक्षेत्र कुरुक्षेत्र में जहाँ सेनाएँ संग्रहीत थीं और युद्ध के लिए उत्सुक थीं, मेरे पुत्रों और पाण्डवों ने क्या किया? ॥ १ ॥",
                    sanskrit: "धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः । मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय || १ ||",
                },
            },
            {
                verse: 2,
                text: {
                    english: "Sanjaya said: O King! Duryodhana, having beheld the Pandava army drawn up in battle array, approached his teacher Drona and spoke these words:",
                    nepali: "संजय भन्छन् – हे राजा ! दुर्योधनले पाण्डवहरूको फौज युद्धको लागि तयार भएको देखेर आफ्ना गुरु द्रोणाचार्यकहाँ गई यी शब्दहरू भने – ॥ २ ॥",
                    hindi: "संजय बोले - हे राजन्! दुर्योधन ने पाण्डवों की सेना को युद्ध के लिए तैयार देखकर अपने गुरु द्रोणाचार्य के पास जाकर ये वचन कहे - ॥ २ ॥",
                    sanskrit: "संजय उवाच | दृष्ट्वा तु पाण्डवानांकां विष्‍णुक्रान्तमवस्थिताः | उवाच भरतश्रेष्ठः स्नेहसंरूढमीदृशम् || २ ||",
                },
            },
            {
                verse: 3,
                text: {
                    english: "'Behold, O master, the mighty army of the sons of Pandu, drawn up in battle formation by the wise son of Drupada, your disciple.'",
                    nepali: "'हे गुरु ! हेर्नुहोस्, पाण्डवका छोराहरूको विशाल फौजलाई, जुन तपाईंका शिष्य धृष्टद्युम्नले युद्धको लागि मिलाएका छन् ।' ॥ ३ ॥",
                    hindi: "'हे गुरु! देखिए, पाण्डवों की विशाल सेना को, जिसे आपके शिष्य धृष्टद्युम्न ने युद्ध के लिए सजाया है।' ॥ ३ ॥",
                    sanskrit: "पश्येदं कौरवाणांकां महत्तीं चमूं समवेताम् | द्रोणाचार्यं ममाचार्यं महात्मानं च तं विद्धि || ३ ||",
                },
            },
            {
                verse: 4,
                text: {
                    english: "'There are heroes, mighty archers, and experienced warriors. Bhimasena, Arjuna, the sons of Yudhishthira, and the valorous twins (Nakula and Sahadeva).'",
                    nepali: "'त्यहाँ वीरहरू, बलिया धनुर्धारीहरू, र अनुभवी योद्धाहरू छन् । भीमसेन, अर्जुन, युधिष्ठिरका छोराहरू, र वीर जुम्ल्याहा दाजुभाइ (नकु र सहदेव) ।' ॥ ४ ॥",
                    hindi: "'उनमें वीर, बलशाली धनुर्धारी और अनुभवी योद्धा हैं। भीमसेन, अर्जुन, युधिष्ठिर के पुत्र और शूरवीर जुड़वाँ भाई (नकुल और सहदेव)।' ॥ ४ ॥",
                    sanskrit: "भीमश्चा भीमसेनोऽर्जुनश्चैव विक्रान्तः | युधिष्ठिरस्य च सूनुजौ नासात्यौ च महाहवा ॥ ४ ||",
                },
            },
            {
                "verse": 5,
                "text": {
                    "english": "Dhrishtaketu, Chekitana, and the valiant king of Kashi, Purujit, Kuntibhoja, and Shaibya, the best among men,",
                    "nepali": "धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान् | पुरुजित्कुन्तिभोजश्च शैब्यश्च नरपुङ्गवः ||",
                    "hindi": "धृष्टकेतु, चेकितान, और काशी के वीर राजा, पुरुजित, कुंतिभोज, और शैब्य - सब मनुष्यों में श्रेष्ठ हैं।",
                    "sanskrit": "धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान् | पुरुजित्कुन्तिभोजश्च शैब्यश्च नरपुङ्गवः ||"
                }
            },
            {
                "verse": 6,
                "text": {
                    "english": "Yudhamanyu, the brave Uttamaujas, the son of Subhadra, and the sons of Draupadi, all of whom are great warriors.",
                    "nepali": "युधामन्युश्च वीर्यवान् सौभद्रो द्रौपदेयाश्च महारथाः |",
                    "hindi": "युधामन्यु, वीर उत्तमौजास, सुभद्रा के पुत्र, और द्रौपदी के पुत्र - जो सभी महान योद्धा हैं।",
                    "sanskrit": "युधामन्युश्च वीर्यवान् सौभद्रो द्रौपदेयाश्च महारथाः |"
                }
            },
            {
                "verse": 7,
                "text": {
                    "english": "O best of the brahmanas, know also the distinguished heroes who are especially qualified to lead my army, who are ever victorious in battle.",
                    "nepali": "एतान्न हन्तुमिच्छामि घ्नतोऽपि मधुसूदन | अपि त्रैलोक्यराज्यस्य हेतोः किं नु महीकृते ||",
                    "hindi": "ओ ब्राह्मणों के श्रेष्ठ, मेरी सेना का नेतृत्व करने के लिए विशेष रूप से योग्य महान योद्धाओं को भी जानो, जो युद्ध में हमेशा विजयी होते हैं।",
                    "sanskrit": "एतान्न हन्तुमिच्छामि घ्नतोऽपि मधुसूदन | अपि त्रैलोक्यराज्यस्य हेतोः किं नु महीकृते ||"
                }
            },
            {
                "verse": 8,
                "text": {
                    "english": "There are personalities like yourself, Bhisma, Karna, Kripa, Ashvatthama, Vikarna, and the son of Somadatta, who are always victorious in battle.",
                    "nepali": "भीष्मद्रोणप्रमुखतः सर्वेषामपि पाण्डवानाम् | अचार्यः पितरौ पुत्रास्तथैव च पितामहाः ||",
                    "hindi": "आपकी तरह, भीष्म, कर्ण, कृपा, अश्वत्थामा, विकर्ण, और सोमदत्त के पुत्र - जो सभी युद्ध में हमेशा विजयी होते हैं।",
                    "sanskrit": "भीष्मद्रोणप्रमुखतः सर्वेषामपि पाण्डवानाम् | अचार्यः पितरौ पुत्रास्तथैव च पितामहाः ||"
                }
            },
            {
                "verse": 9,
                "text": {
                    "english": "There are many other heroes who are prepared to lay down their lives for my sake. All of them are well equipped with different kinds of weapons, and all are experienced in military science.",
                    "nepali": "तान्समीक्ष्य स कौन्तेयः सर्वान्बन्धूनवस्थितान् | कृपया परयाविष्टो विषीदन्तमिदं वचः ||",
                    "hindi": "अपने लिए अपनी जान देने के लिए तैयार कई और वीर हैं। उन सभी के पास विभिन्न प्रकार के शस्त्र हैं, और सभी युद्ध विज्ञान में अनुभवी हैं।",
                    "sanskrit": "तान्समीक्ष्य स कौन्तेयः सर्वान्बन्धूनवस्थितान् | कृपया परयाविष्टो विषीदन्तमिदं वचः ||"
                }
            },
            {
                "verse": 10,
                "text": {
                    "english": "Our strength is immeasurable, and we are perfectly protected by Grandfather Bhisma, whereas the strength of the Pandavas, carefully protected by Bhima, is limited.",
                    "nepali": "न चैतद्विद्मः कतरन्नो गरीयो यद्वा जयेमहि | यानेव हत्वा न जिजीविषामस्त्रां प्रमुखाः स्त्रियः ||",
                    "hindi": "हमारी शक्ति अपार है, और हम भीष्म पितामह द्वारा पूरी तरह से संरक्षित हैं, जबकि पाण्डवों की शक्ति, जो भीम द्वारा सावधानी से संरक्षित है, सीमित है।",
                    "sanskrit": "न चैतद्विद्मः कतरन्नो गरीयो यद्वा जयेमहि | यानेव हत्वा न जिजीविषामस्त्रां प्रमुखाः स्त्रियः ||"
                }
            }
        ]
    },

    // Chapter 2
    {
        chapter: 2,
        verses: [
            {
                verse: 1,
                text: {
                    english: "Sanjaya continued: Having spoken thus to Drona, the king Duryodhana went to Bhishma, the son of Shantanu, and addressed him humbly:",
                    nepali: "संजय भन्छन् – यसरी द्रोणाचार्यलाई भनेपछि राजा दुर्योधन शान्तनुका छोरा भीष्मकहाँ गए र विनम्रतापूर्वक यी शब्दहरू भने – ॥ १ ॥",
                    hindi: "संजय बोले - इस प्रकार द्रोणाचार्य से कहकर राजा दुर्योधन शान्तनु के पुत्र भीष्म के पास गया और विनम्रतापूर्वक ये वचन बोला - ॥ १ ॥",
                    sanskrit: "संजय उवाच | तं तथा कृपया युक्तं दृष्ट्वा धर्मस्य तत्पराम् | सञ्जय उवाच | उवाच भरतश्रेष्ठः स्नेहसंरूढमीदृशम् || १ ||",
                },
            },
            {
                verse: 2,
                text: {
                    english: "'Behold, O best of the Bharatas! The vast army of the sons of Pandu, arrayed by the son of Drupada. What thinkest thou, O grandsire, can we conquer them in battle?'",
                    nepali: "'हे भरतवंशीहरूमा श्रेष्ठ ! पाण्डवका छोराहरूको विशाल फौज हेर्नुहोस्, जुन धृष्टद्युम्नले मिलाएका छन् । हजुर, महाराज, के हामी युद्धमा उनीहरूलाई जित्न सक्छौँ ?' ॥ २ ॥",
                    hindi: "'हे भरतश्रेष्ठ! पाण्डवों की विशाल सेना को देखो, जिसे धृष्टद्युम्न ने सजाई है। आपको क्या ख्याल है, महाराज, क्या हम युद्ध में उन्हें जीत सकते हैं?' ॥ २ ॥",
                    sanskrit: "पश्येदं द्रुपदपुत्रस्य पाण्डवानां च मम चमूम् | व्युढां द्रुपदपुत्रेण तव सभ्यासि दृष्टिपथे || २ ||",
                },
            },
            {
                verse: 3,
                text: {
                    english: "Bhishma, the grand old sire, spake unto him, considering both sides of the question, and reflecting upon the strength and weakness of both armies:",
                    nepali: "महान् वृद्ध पितामह भीष्मले दुवै पक्षको विचार गरेर र दुवै फौजको बल र कमजोरीको बारेमा सोचेर उनलाई भने – ॥ ३ ॥",
                    hindi: "महान् वृद्ध पितामह भीष्म ने दोनों पक्षों का विचार करके और दोनों सेनाओं की शक्ति और कमजोरी के बारे में सोचकर उनसे कहा - ॥ ३ ॥",
                    sanskrit: "एषा तेंड्रा च कौरवाणाम् अक्षौहिणी महीपते | नानाव्यूढा च रथानां सहस्राणि विष्णिषेव ॥ ३ ||",
                },
            },
            {
                verse: 4,
                text: {
                    english: "'There are, O king, on the side of the Kurus, eleven akshauhinis (a vast army unit) of soldiers well equipped. We have also many mighty car-warriors.'",
                    nepali: "'हे राजा ! कौरवहरूको तर्फ एघार अक्षौहिणी (सेनाको एउटा विशाल इकाई) सिपाहीहरू राम्ररी सुसज्जित छन् । हामीसँग पनि धेरै बलिया रथीहरू छन् ।' ॥ ४ ॥",
                    hindi: "'हे राजा! कौरवों की तरफ ग्यारह अक्षौहिणी (सेना की एक विशाल इकाई) सैनिक अच्छे से सुसज्जित हैं। हमारे पास भी बहुत से बलशाली रथी हैं।' ॥ ४ ॥",
                    sanskrit: "अपरे चापि सभिज्ञाः पृथक् पृथक्‌ शूरिधार्तराश्त्रा | वेकासः सारथीश्चैव सेनानां एकदा चक्रे ॥ ४ ||",
                },
            },
        ]
    }
]