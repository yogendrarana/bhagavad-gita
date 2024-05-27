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
                "verse": 1,
                "text": {
                    "english": "Dhritarashtra said: \"O Sanjay, after gathering on the holy field of Kurukshetra, and desiring to fight, what did my sons and the sons of Pandu do?\"",
                    "nepali": "धृतराष्ट्र बोले - \"हे सञ्जय, धर्मभूमि कुरुक्षेत्रमा युद्धको इच्छाले भेला भएका मेरा पुत्र र पाण्डुपुत्रहरूले के गरे?\" ॥ १ ॥",
                    "hindi": "धृतराष्ट्र बोले - \"हे सञ्जय, धर्मभूमि कुरुक्षेत्र में युद्ध की इच्छा से इकट्ठे हुए मेरेे और पाण्डु के पुत्रों ने भी क्या किया?\" ॥ १ ॥",
                    "sanskrit": "\"धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः । मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय\" || १ ||"
                }
            },
            {
                "verse": 2,
                "text": {
                    "english": "Sanjay said: \"On observing the Pandava army standing in military formation, King Duryodhan approached his teacher Dronacharya, and said the following words.\"",
                    "nepali": "सञ्जय भन्छन् - \"हे राजा! दुर्योधनले पाण्डवहरूको फौज युद्धको लागि तयार भएको देखेर आफ्ना गुरु द्रोणाचार्यकहाँ गई यी शब्दहरू भने\" – ॥ २ ॥",
                    "hindi": "सञ्जय बोले - \"हे राजन्! दुर्योधन ने पाण्डवों की सेना को युद्ध के लिए तैयार देखकर अपने गुरु द्रोणाचार्य के पास जाकर ये वचन कहे\" - ॥ २ ॥",
                    "sanskrit": "सञ्जय उवाच | दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा | आचार्यमुपसंगम्य राजा वचनमब्रवीत् || २ ||"
                }
            },
            {
                "verse": 3,
                "text": {
                    "english": "\"Behold, O Teacher, this mighty army of the sons of Pandu, arranged in military formation by your disciple, the son of Drupada.\"",
                    "nepali": "\"हे आचार्य ! पाण्डुपुत्रहरूको यस विशाल सेना हेर्नुहोस्, जसलाई तपाईंको शिष्य द्रुपद पुत्रले मिलाएको छ।\" – ॥ ३ ॥",
                    "hindi": "\"हे आचार्य! पाण्डुपुत्रों की इस विशाल सेना को देखिए, जिसे आपके बुद्धिमान शिष्य द्रुपद पुत्र ने व्यूहित किया है।\" - ॥ ३ ॥",
                    "sanskrit": "पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम् | व्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता || ३ ||"
                }
            },
            {
                "verse": 4,
                "text": {
                    "english": "\"Here in this army are many heroic bowmen equal in fighting to Bhima and Arjuna: great fighters like Yuyudhana, Virata, and Drupada.\"",
                    "nepali": "\"यस सेनामा भीम र अर्जुनसँग समान युद्ध लड्न सक्ने धेरै वीर धनुर्धारीहरू छन्: युयुधान, विराट र द्रुपद जस्ता महान् योद्धाहरू।\" – ॥ ४ ॥",
                    "hindi": "\"इस सेना में कई वीर धनुर्धारी हैं जो युद्ध में भीम और अर्जुन के बराबर हैं: जैसे युयुधान, विराट और द्रुपद।\" - ॥ ४ ॥",
                    "sanskrit": "अत्र शूरा महेष्वासा भीमार्जुनसमा युधि | युयुधानो विराटश्च द्रुपदश्च महारथः || ४ ||"
                }
            },
            {
                "verse": 5,
                "text": {
                    "english": "\"Dhrishtaketu, Chekitana, the valiant king of Kasi, Purujit, Kuntibhoja, and Saibya—the best of men.\"",
                    "nepali": "\"धृष्टकेतु, चेकितान, कासीका वीर राजा, पुरुजित, कुन्तिभोज र सैब्य – सबैभन्दा श्रेष्ठ मानिसहरू।\" – ॥ ५ ॥",
                    "hindi": "\"धृष्टकेतु, चेकितान, कासी के वीर राजा, पुरुजित, कुन्तिभोज और सैब्य - सबसे श्रेष्ठ पुरुष।\" - ॥ ५ ॥",
                    "sanskrit": "धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान्। पुरुजित्कुन्तिभोजश्च शैब्यश्च नरपुङ्गवः || ५ ||"
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
                    nepali: "सञ्जय भन्छन् – यसरी द्रोणाचार्यलाई भनेपछि राजा दुर्योधन शान्तनुका छोरा भीष्मकहाँ गए र विनम्रतापूर्वक यी शब्दहरू भने – ॥ १ ॥",
                    hindi: "सञ्जय बोले - इस प्रकार द्रोणाचार्य से कहकर राजा दुर्योधन शान्तनु के पुत्र भीष्म के पास गया और विनम्रतापूर्वक ये वचन बोला - ॥ १ ॥",
                    sanskrit: "सञ्जय उवाच | तं तथा कृपया युक्तं दृष्ट्वा धर्मस्य तत्पराम् | सञ्जय उवाच | उवाच भरतश्रेष्ठः स्नेहसंरूढमीदृशम् || १ ||",
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