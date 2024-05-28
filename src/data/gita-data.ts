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
                    "nepali": "धृतराष्ट्र बोले - \"हे सञ्जय, धर्मभूमि कुरुक्षेत्रमा युद्धको इच्छाले भेला भएका मेरा पुत्र र पाण्डुपुत्रहरूले के गरे?\"",
                    "hindi": "धृतराष्ट्र बोले - \"हे सञ्जय, धर्मभूमि कुरुक्षेत्र में युद्ध की इच्छा से इकट्ठे हुए मेरेे और पाण्डु के पुत्रों ने भी क्या किया?\"",
                    "sanskrit": "\"धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः । मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय\" ॥ १ ॥"
                }
            },
            {
                "verse": 2,
                "text": {
                    "english": "Sanjay said: \"On observing the Pandava army standing in military formation, King Duryodhan approached his teacher Dronacharya, and said the following words.\"",
                    "nepali": "सञ्जय भन्छन् - \"हे राजा! दुर्योधनले पाण्डवहरूको फौज युद्धको लागि तयार भएको देखेर आफ्ना गुरु द्रोणाचार्यकहाँ गई यी शब्दहरू भने\"",
                    "hindi": "सञ्जय बोले - \"हे राजन्! दुर्योधन ने पाण्डवों की सेना को युद्ध के लिए तैयार देखकर अपने गुरु द्रोणाचार्य के पास जाकर ये वचन कहे\"",
                    "sanskrit": "\"सञ्जय उवाच | दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा | आचार्यमुपसंगम्य राजा वचनमब्रवीत्\" ॥ २ ॥"
                }
            },
            {
                "verse": 3,
                "text": {
                    "english": "\"Behold, O Teacher, this mighty army of the sons of Pandu, arranged in military formation by your disciple, the son of Drupada.\"",
                    "nepali": "\"हे आचार्य ! पाण्डुपुत्रहरूको यस विशाल सेना हेर्नुहोस्, जसलाई तपाईंको शिष्य द्रुपद पुत्रले मिलाएको छ।\"",
                    "hindi": "\"हे आचार्य! पाण्डुपुत्रों की इस विशाल सेना को देखिए, जिसे आपके बुद्धिमान शिष्य द्रुपद पुत्र ने व्यूहित किया है।\"",
                    "sanskrit": "\"पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम् | व्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता\" ॥ ३ ॥"
                }
            },
            {
                "verse": 4,
                "text": {
                    "english": "\"Here in this army are many heroic bowmen equal in fighting to Bhima and Arjuna: great fighters like Yuyudhana, Virata, and Drupada.\"",
                    "nepali": "\"यस सेनामा भीम र अर्जुनसँग समान युद्ध लड्न सक्ने धेरै वीर धनुर्धारीहरू छन्: युयुधान, विराट र द्रुपद जस्ता महान् योद्धाहरू।\"",
                    "hindi": "\"इस सेना में कई वीर धनुर्धारी हैं जो युद्ध में भीम और अर्जुन के बराबर हैं: जैसे युयुधान, विराट और द्रुपद।\"",
                    "sanskrit": "\"अत्र शूरा महेष्वासा भीमार्जुनसमा युधि | युयुधानो विराटश्च द्रुपदश्च महारथः\" ॥ ४ ॥"
                }
            },
            {
                "verse": 5,
                "text": {
                    "english": "\"Dhrishtaketu, Chekitana, the valiant king of Kasi, Purujit, Kuntibhoja, and Saibya—the best of men.\"",
                    "nepali": "\"धृष्टकेतु, चेकितान, कासीका वीर राजा, पुरुजित, कुन्तिभोज र सैब्य – सबैभन्दा श्रेष्ठ मानिसहरू।\"",
                    "hindi": "\"धृष्टकेतु, चेकितान, कासी के वीर राजा, पुरुजित, कुन्तिभोज और सैब्य - सबसे श्रेष्ठ पुरुष।\"",
                    "sanskrit": "\"धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान्। पुरुजित्कुन्तिभोजश्च शैब्यश्च नरपुङ्गवः\" ॥ ५ ॥"
                }
            },
            {
                "verse": 6,
                "text": {
                    "english": "\"The strong Yudhamanyu and the brave Uttamaujas, the son of Subhadra (Abhimanyu, the son of Subhadra and Arjuna), and the sons of Draupadi, all of them great charioteers (great heroes).\"",
                    "nepali": "\"शक्तिशाली युधामन्यु र वीर उत्तमौजस, सुभद्रको छोरा (सुभद्रा र अर्जुनको छोरा अभिमन्यु) र द्रौपदीका छोराहरू, सबै उत्कृष्ट रथीहरू (महान वीरहरू)।\"",
                    "hindi": "\"शक्तिशाली युधामन्यु और वीर उत्तमौजस, सुभद्रा के पुत्र (सुभद्रा और अर्जुन के पुत्र अभिमन्यु) और द्रौपदी के पुत्र, सभी महान रथचालक (महान वीर)।\"",
                    "sanskrit": "\"युधामन्युश्च विक्रान्त उत्तमौजाश्च वीर्यवान्। सौभद्रो द्रौपदेयाश्च सर्व एव महारथाः\" ॥ ६ ॥"
                }
            },
            {
                "verse": 7,
                "text": {
                    "english": "\"But know, O King, those who are reckoned as the best among us. I mention them for your information. There are many other heroes who are prepared to lay down their lives for my sake. Each one of them is a hero in his own right.\"",
                    "nepali": "\"तर हे राजा, हाम्रो बीचका श्रेष्ठहरूको बारेमा तपाईंलाई जान्न चाहन्छु। म तपाईंको जानकारीका लागि उनीहरूको उल्लेख गर्दछु। मेरो लागि आफ्नो जीवन गराउन तत्पर धेरै अन्य वीरहरू छन्। प्रत्येक व्यक्ति आफ्नो अधिकारमा एक वीर हुन्।\"",
                    "hindi": "\"लेकिन जानिए, हे राजन्, जो हमारे बीच में श्रेष्ठ माने जाते हैं। मैं आपको उनके बारे में जानकारी देने के लिए उनका उल्लेख करता हूँ। मेरे लिए अपनी जान देने के लिए तैयार बहुत से अन्य वीर हैं। प्रत्येक व्यक्ति अपने अधिकार में एक वीर है।\"",
                    "sanskrit": "\"अस्माकं तु विशिष्टा ये तान्निबोध द्विजोत्तम। नायका मम सैन्यस्य संज्ञार्थं तान्ब्रवीमि ते\" ॥ ७ ॥"
                }
            },
            {
                "verse": 8,
                "text": {
                    "english": "\"There are personalities like yourself, Bheeshma, Karna, Kripa, Ashwatthama, Vikarn, and Bhurishrava, who are ever victorious in battle\"",
                    "nepali": "\"आफ्नै तर्जुमान भीष्म, कर्ण, कृपा, अश्वत्थामा, विकर्ण र भूरिश्रवा जस्ता व्यक्तित्वहरू छन्, जुन युद्धमा सँग्राम विजयी हुन्\"",
                    "hindi": "\"आपके जैसे व्यक्तित्व भीष्म, कर्ण, कृपा, अश्वत्थामा, विकर्ण और भूरिश्रवा जैसे हैं, जो हमेशा युद्ध में विजयी होते हैं\"",
                    "sanskrit": "\"भवान्भीष्मश्च कर्णश्च कृपश्च समितिञ्जयः। अश्वत्थामा विकर्णश्च सौमदत्तिस्तथैव च\" ॥ ८ ॥"
                }
            },
            {
                "verse": 9,
                "text": {
                    "english": "\"And also many other heroes, ready to give up their lives for my sake, armed with various weapons and missiles, all well-skilled in battle\"",
                    "nepali": "\"र अन्य धेरै वीरहरू पनि, मेरो लागि आफ्नो जीवन गराउन तत्पर, विभिन्न हतियारहरू र मिसाइलहरूले सज्जित, सबै युद्धमा निपुण\"",
                    "hindi": "\"और भी बहुत से वीर, जो मेरे लिए अपनी जान देने के लिए तैयार हैं, विभिन्न हथियारों और मिसाइलों से सज्जित, सभी युद्ध में निपुण\"",
                    "sanskrit": "\"अन्ये च बहव: शूरा मदर्थे त्यक्तजीविता: | नानाशस्त्रप्रहरणा: सर्वे युद्धविशारदा:\" ॥ ९ ॥"
                }
            },
            {
                "verse": 10,
                "text": {
                    "english": "\"The strength of our army is unlimited and we are safely marshalled by Grandsire Bheeshma, while the strength of the Pandava army, carefully marshalled by Bheem, is limited\"",
                    "nepali": "\"हाम्रो सेनाको बल असीम छ र हामी भीष्म द्वारा सुरक्षित छौं, जबकि पाण्डवहरूको सेनाको बल भीम द्वारा सुरक्षित छ\"",
                    "hindi": "\"हमारी सेना की शक्ति असीम है और हम बड़े पितामह भीष्म द्वारा सुरक्षित हैं, जबकि पाण्डवों की सेना की शक्ति, भीम द्वारा सुरक्षित है\"",
                    "sanskrit": "\"अपर्याप्तं तदस्माकं बलं भीष्माभिरक्षितम् | पर्याप्तं त्विदमेतेषां बलं भीमाभिरक्षितम्\" ॥ १० ॥"
                }
            },
            {
                "verse": 11,
                "text": {
                    "english": "Therefore, do all of you, stationed in your respective positions in the several divisions of the army, protect Bhishma alone.",
                    "nepali": "\"यसकारण, तपाईंहरू सबै अलग-अलग विभागहरूमा रहेका आफ्नै आवासमा रही भीष्मलाई मात्र संरक्षण गर्नुहोस्।\"",
                    "hindi": "\"इसलिए, आप सभी अपने अपने स्थानों पर अलग-अलग विभागों में रहकर भीष्म को ही संरक्षित करें।\"",
                    "sanskrit": "\"अयनेषु च सर्वेषु यथाभागमवस्थिता: | भीष्ममेवाभिरक्षन्तु भवन्त: सर्व एव हि\" ॥ ११ ॥"
                }
            },
            {
                "verse": 12,
                "text": {
                    "english": "Then Bhisma, the great valiant grandsire of the Kuru dynasty, the grandfather of the fighters, roared like a lion and blew his conchshell very loudly, giving Duryodhana joy.",
                    "nepali": "त्यसपछि कुरुवंशका महान् वीर दादाबाबु भीष्मले सिंहको रूपमा रोविन् र ध्वनि गर्दै दुर्योधनलाई आनन्द दिनुभएको छ।",
                    "hindi": "तब कुरु वंश के महान वीर दादाबाबु भीष्म ने सिंह की भाँति गरजा और अपनी शंख बजाकर बहुत जोर से ध्वनि की, जिससे दुर्योधन को आनंद मिला।",
                    "sanskrit": "\"तस्य संजनयन्हर्षं कुरुवृद्धः पितामहः। सिंहनादं विनद्योच्चैः शङ्खं दध्मौ प्रतापवान्\" ॥ १२ ॥"
                }
            },
            {
                "verse": 13,
                "text": {
                    "english": "Thereafter, conches, kettledrums, bugles, trumpets, and horns suddenly blared forth, and their combined sound was overwhelming.",
                    "nepali": "त्यसपछि शंख, ढक्का, बुगल, तुराहरू र सिरानहरू अकस्मात ध्वनि गर्दै उठ्यो, र उनीहरूको मिलाएको ध्वनि अत्यन्त भारी थियो।",
                    "hindi": "उसके बाद अचानक शंख, ढोल, बुगल, तुरही और सींगों की ध्वनि उठने लगी, और उनकी मिली ध्वनि अत्यंत भारी थी।",
                    "sanskrit": "\"तत: शङ्खाश्च भेर्यश्च पणवानकगोमुखा: | सहसैवाभ्यहन्यन्त स शब्दस्तुमुलोऽभवत्\" ॥ १३ ॥"
                }
            },
            {
                "verse": 14,
                "text": {
                    "english": "Then, Madhava (Krishna) and the son of Pandu (Arjuna), seated in the magnificent chariot yoked with white horses, blew divine conches.",
                    "nepali": "त्यसपछि माधव (कृष्ण) र पाण्डवका छोरा (अर्जुन) दिव्य शंखहरू फुकेर भए, जुन सुन्दर स्यान्डनमा बैठेका थिए र सेतो घोडाहरूले खिचेको थिए।",
                    "hindi": "उसके बाद माधव (कृष्ण) और पाण्डु के पुत्र (अर्जुन) ने दिव्य शंख बजाए, जो सुंदर रथ में बैठे हुए थे और सफेद घोड़ों से खिचवाया गया था।",
                    "sanskrit": "\"ततः श्वेतैर्हयैर्युक्ते महति स्यन्दने स्थितौ। माधवः पाण्डवश्चैव दिव्यौ शङ्खौ प्रदध्मतुः\" ॥ १४ ॥"
                }
            },
            {
                "verse": 15,
                "text": {
                    "english": "Hrishikesha blew the Panchajanya, Arjuna blew the Devadatta, and Bhima, the wolf-bellied doer of terrible deeds, blew the great conch Paundra.",
                    "nepali": "हृषीकेशले पाञ्चजन्य फुके, अर्जुनले देवदत्त फुके, र भीमकर्माले भयानक कामहरू गर्ने वृकोदरले महान् शंख पौण्ड्र फुके।",
                    "hindi": "हृषीकेश ने पांचजन्य फुका, अर्जुन ने देवदत्त फुका, और भीमकर्मा वृकोदर ने भयानक कार्य करने वाला महान शंख पौण्ड्र फुका।",
                    "sanskrit": "\"पाञ्चजन्यं हृषीकेशो देवदत्तं धनंजयः। पौण्ड्रं दध्मौ महाशङ्खं भीमकर्मा वृकोदरः\" ॥ १५ ॥"
                }
            },
            {
                "verse": 16,
                "text": {
                    "english": "King Yudhishthira, the son of Kunti, blew the Anantavijaya; Nakula and Sahadeva blew the Sughosha and the Manipushpaka.",
                    "nepali": "राजा युधिष्ठिर, कुन्तीका छोरा, अनन्तविजय फुके; नकुल र सहदेवले सुघोष र मणिपुष्पक फुके।",
                    "hindi": "राजा युधिष्ठिर, कुन्ती के पुत्र, अनन्तविजय फुका; नकुल और सहदेव ने सुघोष और मणिपुष्पक फुके।",
                    "sanskrit": "\"अनन्तविजयं राजा कुन्तीपुत्रो युधिष्ठिरः। नकुलः सहदेवश्च सुघोषमणिपुष्पकौ\" ॥ १६ ॥"
                }
            },
            {
                "verse": 17,
                "text": {
                    "english": "The king of Kasi, an excellent archer, Sikhandi, the mighty car-warrior, Dhrishtadyumna, Virata, and Satyaki, the unconquered.",
                    "nepali": "कासीका राजा, एक उत्कृष्ट धनुर्धारी, शिखण्डी, शक्तिशाली रथयोद्धा, धृष्टद्युम्न, विराट र अपराजित सत्यकी।",
                    "hindi": "कासी के राजा, एक उत्कृष्ट धनुर्धारी, शिखण्डी, शक्तिशाली रथयोद्धा, धृष्टद्युम्न, विराट और अपराजित सत्यकी।",
                    "sanskrit": "\"काश्यश्च परमेष्वासः शिखण्डी च महारथः। धृष्टद्युम्नो विराटश्च सात्यकिश्चापराजितः\" ॥ १७ ॥"
                }
            },
            {
                "verse": 18,
                "text": {
                    "english": "Drupada and the sons of Draupadi, O Lord of the Earth, and the son of Subhadra, the mighty-armed, blew their conches each separately.",
                    "nepali": "भूमिपति, द्रुपद र द्रौपदीका छोराहरू, हे पृथिवीपति, र सुभद्रको छोरा, शक्तिशाली हातवाला, उनीहरूले आफ्नो शंखहरूलाई प्रत्येकै पृथक्पृथक् फुके।",
                    "hindi": "द्रुपद और द्रौपदी के पुत्र, हे पृथ्वीपति, और सुभद्र के पुत्र, शक्तिशाली हाथी, अपने अपने शंख बजाए।",
                    "sanskrit": "\"द्रुपदो द्रौपदेयाश्च सर्वशः पृथिवीपते। सौभद्रश्च महाबाहुः शङ्खान्दध्मुः पृथक्पृथक्।\" ॥ १८ ॥"
                }
            },
            {
                "verse": 19,
                "text": {
                    "english": "The terrific sound thundered across the sky and the earth, and shattered the hearts of your sons, O Dhritarasthra.",
                    "nepali": "भयानक आवाज आकाश र पृथ्वीमा गडगडायो, र तपाईंका पुत्रहरूको हृदय चकनाचुर भयो, हे धृतराष्ट्र।",
                    "hindi": "भयानक आवाज आकाश और पृथ्वी में गूंज उठी, और आपके पुत्रों के हृदय को चकनाचूर कर दिया, हे धृतराष्ट्र",
                    "sanskrit": "\"स घोषो धार्तराष्ट्राणां हृदयानि व्यदारयत्। नभश्च पृथिवीं चैव तुमुलो व्यनुनादयन्\" ॥ १९ ॥"
                }
            },
            {
                "verse": 20,
                "text": {
                    "english": "At that time, the son of Pandu, Arjun, who had the insignia of Hanuman on the flag of his chariot, took up his bow. Seeing your sons arrayed against him, O King, Arjun then spoke the following words to Shree Krishna",
                    "nepali": "त्यस समय, पाण्डु के पुत्र अर्जुन, जिसको रथको झण्डामा हनुमानको पहिचान थियो, उनीहरूलाई विरुद्ध खडा देखेर, हे राजन्, तब अर्जुनले श्रीकृष्णलाई यी शब्द भने।",
                    "hindi": "उस समय, पाण्डु के पुत्र अर्जुन, जिसके रथ के झंडे पर हनुमान की पहचान थी, ने अपना धनुष उठाया। आपके पुत्रों को उसके विरुद्ध खड़ा देखकर, हे राजन्, तब अर्जुन ने श्रीकृष्ण को यह शब्द कहे।",
                    "sanskrit": "\"अथ व्यवस्थितान् दृष्ट्वा धार्तराष्ट्रान्कपिध्वजः। प्रवृत्ते शस्त्रसंपाते धनुरुद्यम्य पाण्डवः\" ॥ २० ॥"
                }
            },
            {
                "verse": 21,
                "text": {
                    "english": "Arjuna said, \" O Infallible One, please take my chariot to the middle of both armies, \"",
                    "nepali": "अर्जुनले भने – \"हे अच्युत! दोनों सेनाहरूको बीचमा मेरो रथ ल्याउनुहोस्, \"",
                    "hindi": "अर्जुन ने कहा, \"हे अच्युत! कृपया मेरे रथ को दोनों सेनाओं के बीच ले जाइए, \"",
                    "sanskrit": "\"अर्जुन उवाच हृषीकेशं तदा वाक्यमिदमाह महीपते। सेनयोरुभयोर्मध्ये रथं स्थापय मेऽच्युत\" ॥ २१ ॥"
                }
            },
            {
                "verse": 22,
                "text": {
                    "english": "\"- so that I may look at the warriors arrayed for battle, whom I must fight in this great combat.\"",
                    "nepali": "\"- ताकि म ती वीरहरूलाई देख्न सकूँ, जो यो महान् युद्धमा लड्नको लागि तयार भएर उभिएका छन्, जससँग मलाई लड्नुपर्छ।\"",
                    "hindi": "\"- ताकि मैं उन योद्धाओं को देख सकूं जो इस महान युद्ध में लड़ने के लिए तैयार खड़े हैं, जिनसे मुझे लड़ना है।\"",
                    "sanskrit": "\"यावदेतान्निरीक्षेऽहं योद्धुकामानवस्थितान्। कैर्मया सह योद्धव्यमस्मिन्रणसमुद्यमे\" ॥ २२ ॥"
                }
            },

            {
                "verse": 23,
                "text": {
                    "english": "\"I desire to see those who have come here to fight on the side of the evil-minded son of Dhritarasthra, wishing to please him.\"",
                    "nepali": "\"म उनीहरूलाई देख्न चाहन्छु, जुनहरू धर्तराष्ट्रका दुर्बुद्धिले युद्ध गर्न आएका छन्, जुनले उनलाई खुशी गराउन चाहन्छन्।\"",
                    "hindi": "\"मैं उन्हें देखना चाहता हूँ जो यहाँ धृतराष्ट्र के दुर्बुद्धि पुत्र के पक्ष में युद्ध करने आए हैं, जो उसे खुश करने के लिए आए हैं।\"",
                    "sanskrit": "\"योत्स्यमानानवेक्षेऽहं य एतेऽत्र समागताः। धार्तराष्ट्रस्य दुर्बुद्धेर्युद्धे प्रियचिकीर्षवः\" ॥ २३ ॥"
                }
            },

            {
                "verse": 24,
                "text": {
                    "english": "Sanjay said: \"O Dhritarasthra, having thus been addressed by Arjun, the conqueror of sleep, Shree Krishna then drew the magnificent chariot between the two armies.\"",
                    "nepali": "सञ्जय भन्छन् - \"हे धृतराष्ट्र! यसरी निद्रा जित्ने अर्जुनद्वारा भनिएको भएपछि तब भगवान श्रीकृष्णले भव्य रथ दुवै सेनाहरूको बीचमा खड़ा गर्नुभयो\"",
                    "hindi": "सञ्जय ने कहा - \"हे भरतवंशी धृतराष्ट्र! निद्रा पर विजय पाने वाले अर्जुन द्वारा इस प्रकार के वचन बोले जाने पर तब भगवान श्रीकृष्ण ने उस भव्य रथ को दोनों सेनाओं के बीच में ले जाकर खड़ा कर दिया।\"",
                    "sanskrit": "\"संजय उवाच एवमुक्तो हृषीकेशो गुडाकेशेन भारत। सेनयोरुभयोर्मध्ये स्थापयित्वा रथोत्तमम्\" ॥ २४ ॥"
                }
            },
            {
                "verse": 25,
                "text": {
                    "english": "In the presence of Bheeshma, Dronacharya, and all the other kings, Shree Krishna said: \"O Parth, behold these Kurus gathered here.\"",
                    "nepali": "भीष्म, द्रोणाचार्य र सबै अन्य राजाहरूको उपस्थितिमा, श्रीकृष्णले भने: \"हे पार्थ, यहाँ भेला भएका यी कुरूहरूलाई हेर।\"",
                    "hindi": "भीष्म, द्रोण तथा अन्य सभी राजाओं की उपस्थिति में भगवान श्रीकृष्ण ने कहा कि \"हे पार्थ! यहाँ पर एकत्रित समस्त कुरुओं को देखो।\"",
                    "sanskrit": "\"भीष्मद्रोणप्रमुखतः सर्वेषां च महीक्षिताम्। उवाच पार्थ पश्यैतान्समवेतान्कुरूनिति\" ॥ २५ ॥"
                }
            },
            {
                "verse": 26,
                "text": {
                    "english": "There, Arjun could see stationed in both armies, his fathers, grandfathers, teachers, maternal uncles, brothers, cousins, sons, nephews, grand-nephews, friends, fathers-in-law, and well-wishers.",
                    "nepali": "त्यहाँ, अर्जुनले देख्न सक्थे दुवै सेनाहरूमा लगाएका, आफ्ना पिता, पितामहहरू, शिक्षकहरू, मातुलहरू, भाइहरू, भाइबहिनीहरू, छोराहरू, भातिजहरू, पौत्रहरू, सखाहरू, श्वशुरहरू, र शुभचिन्तकहरू।",
                    "hindi": "अर्जुन ने वहाँ खड़ी दोनों पक्षों की सेनाओं के बीच अपने पिता तुल्य चाचाओं-ताऊओं, पितामहों, गुरुओं, मामाओं, भाइयों, चचेरे भाइयों, पुत्रों, भतीजों, मित्रों, ससुर, और शुभचिन्तकों को भी देखा।",
                    "sanskrit": "\"तत्रापश्यत्स्थितान् पार्थः पितृनथ पितामहान्। आचार्यान्मातुलान्भ्रातृन्पुत्रान्पौत्रान्सखींस्तथा श्वशुरान्सुहृदश्चैव सेनयोरुभयोरपि \" ॥ २६ ॥"
                }
            },
            {
                "verse": 27,
                "text": {
                    "english": "Seeing all his relatives present there, Arjun, the son of Kunti, was overwhelmed with compassion, and with deep sorrow, spoke the following words.",
                    "nepali": "त्यहाँ उपस्थित भएका आफ्ना सम्बन्धीहरूलाई देखेर, कुन्तीका छोरा अर्जुनले दयालु भएर अत्यन्त दु:खी भएर निम्न वचन भने।",
                    "hindi": "जब कुन्तिपुत्र अर्जुन ने अपने बंधु बान्धवों को वहाँ देखा तब उसका मन अत्यधिक करुणा से भर गया और फिर गहन शोक के साथ उसने निम्न वचन कहे।",
                    "sanskrit": "\"तान्समीक्ष्य स कौन्तेयः सर्वान्बन्धूनवस्थितान्। कृपया परयाविष्टो विषीदन्निदमब्रवीत्\" ॥ २७ ॥"
                }
            },
            {
                "verse": 28,
                "text": {
                    "english": "Arjun said: \"O Krishna, seeing my own kinsmen arrayed for battle here and intent on killing each other, my limbs are giving way and my mouth is drying up.\"",
                    "nepali": "अर्जुनले भने - \"हे कृष्ण! युद्धको लागि यहाँ खडा भएका मेरा आफ्नै वंशजहरूलाई देखेर र एकअर्कालाई मार्न इच्छुक देखेर मेरा शरीर दुर्बल भएको छ र मेरो मुख सुख्खा भएको छ।\"",
                    "hindi": "अर्जुन ने कहा - \"हे कृष्ण! युद्ध करने की इच्छा से एक दूसरे का वध करने के लिए यहाँ अपने वंशजों को देखकर मेरे शरीर के अंग कांप रहे हैं और मेरा मुंह सूख रहा है।\"",
                    "sanskrit": "\"अर्जुन उवाच। दृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम्। सीदन्ति मम गात्राणि मुखं च परिशुष्यति \" ॥ २८ ॥"
                }
            },
            {
                "verse": 29,
                "text": {
                    "english": "\"My whole body shudders; my hair is standing on end. My bow, the Gandiv, is slipping from my hand, and my skin is burning all over\"",
                    "nepali": "\"मेरो सम्पूर्ण शरीर थरथराउँछ; मेरो रोमहर्ष भएको छ। मेरो धनुष, गाण्डीव, मेरो हातबाट फिसलिरहेको छ, र मेरो त्वचा सबैतिर जलिरहेको छ।\"",
                    "hindi": "\"मेरा सारा शरीर काँप रहा है, मेरे शरीर के रोएं खड़े हो रहे हैं, मेरा धनुष ‘गाण्डीव' मेरे हाथ से सरक रहा है और मेरी पूरी त्वचा में जलन हो रही है। \"",
                    "sanskrit": "\"वेपथुश्च शरीरे मे रोमहर्षश्च जायते गाण्डीवं स्रंसते हस्तात्त्वक्चै व परिदह्यते।\" ॥ २९ ॥"
                }
            },
            {
                "verse": 30,
                "text": {
                    "english": "\"My mind is in quandary and whirling in confusion; I am unable to hold myself steady any longer. O Krishna, killer of the Keshi demon.\"",
                    "nepali": "\"मेरो मन द्विविधामा परेको छ र उल्झिरहेको छ; म अब आफैंलाई स्थिर राख्न सक्दिनँ। हे कृष्ण, केशी दानवका संहारक केशव!\"",
                    "hindi": "\"मेरा मन उलझ रहा है और मुझे घबराहट हो रही है। अब मैं यहाँ और अधिक खड़ा रहने में समर्थ नहीं हूँ। केशी राक्षस को मारने वाले हे केशव!\"",
                    "sanskrit": "\"न च शक्नोम्यवस्थातुं भ्रमतीव च मे मनः निमित्तानि च पश्यामि विपरीतानि केशव।\" ॥ ३० ॥"
                }
            },
            {
                "verse": 31,
                "text": {
                    "english": "\"I only see omens of misfortune. I do not foresee how any good can come from killing my own kinsmen in this battle.\"",
                    "nepali": "\"म केवल दुर्भाग्यका संकेतहरू देख्छु। म यो युद्धमा आफ्नै कुटुम्बलाई मारेर कुनै पनि राम्रो परिणाम आउने देख्दिनँ।\"",
                    "hindi": "\"मैं केवल अशुभ संकेत देख रहा हूँ। मैं नहीं समझ पा रहा हूँ कि इस युद्ध में अपने ही रिश्तेदारों को मारकर किसी भी अच्छे का उत्पन्न हो सकता है।\"",
                    "sanskrit": "\"न च श्रेयोऽनुपश्यामि हत्वा स्वजनमाहवे हूँ। न काङ्क्षे विजयं कृष्ण न च राज्यं सुखानि च \" ॥ ३१ ॥"
                }
            },


            // {
            //     "verse": 20,
            //     "text": {
            //         "english": "",
            //         "nepali": "",
            //         "hindi": "",
            //         "sanskrit": "\"\""
            //     }
            // },
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