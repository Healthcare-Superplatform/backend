const mongoose = require('mongoose');
const Symptom = require('./models/Symptom'); // schema remains in models folder

const MONGODB_URI = 'mongodb+srv://pankajchakrabarty22:P%40nkaj2025@superplatform-backend.u6aoy.mongodb.net/superplatform-backend?retryWrites=true&w=majority';

const symptoms = [

  {
    "id": 1,
    "name": "Headache",
    "question": "Is the headache persistent?",
    "diagnosis_yes": [
      "Migraine"
    ],
    "diagnosis_no": [
      "Tension Headache"
    ]
  },
  {
    "id": 2,
    "name": "Fever",
    "question": "Is the fever higher than 101\u00b0F?",
    "diagnosis_yes": [
      "Bacterial infections/Viral infections"
    ],
    "diagnosis_no": [
      "Common Cold"
    ]
  },
  {
    "id": 3,
    "name": "Cough",
    "question": "Is the cough producing mucus?",
    "diagnosis_yes": [
      "Bronchitis"
    ],
    "diagnosis_no": [
      "Dry Cough"
    ]
  },
  {
    "id": 4,
    "name": "Shortness of breath",
    "question": "Do you feel chest tightness?",
    "diagnosis_yes": [
      "Asthma"
    ],
    "diagnosis_no": [
      "Anxiety"
    ]
  },
  {
    "id": 5,
    "name": "Chest pain",
    "question": "Is the pain sharp and on the left side?",
    "diagnosis_yes": [
      "Angina"
    ],
    "diagnosis_no": [
      "Muscle Strain"
    ]
  },
  {
    "id": 6,
    "name": "Nausea",
    "question": "Do you also have vomiting?",
    "diagnosis_yes": [
      "Gastroenteritis"
    ],
    "diagnosis_no": [
      "Motion Sickness"
    ]
  },
  {
    "id": 7,
    "name": "Vomiting",
    "question": "Is there blood in the vomit?",
    "diagnosis_yes": [
      "Ulcer"
    ],
    "diagnosis_no": [
      "Stomach Virus"
    ]
  },
  {
    "id": 8,
    "name": "Diarrhea",
    "question": "Has it lasted more than 2 days?",
    "diagnosis_yes": [
      "Infection"
    ],
    "diagnosis_no": [
      "Food Intolerance"
    ]
  },
  {
    "id": 9,
    "name": "Abdominal pain",
    "question": "Is the pain in the lower right abdomen?",
    "diagnosis_yes": [
      "Appendicitis"
    ],
    "diagnosis_no": [
      "Indigestion"
    ]
  },
  {
    "id": 10,
    "name": "Fatigue",
    "question": "Do you sleep more than 8 hours and still feel tired?",
    "diagnosis_yes": [
      "Sleep Apnea"
    ],
    "diagnosis_no": [
      "Anemia"
    ]
  },
  {
    "id": 11,
    "name": "Sore throat",
    "question": "Do you often experience sore throat?",
    "diagnosis_yes": [
      "Possible condition related to sore throat"
    ],
    "diagnosis_no": [
      "Minor or temporary sore throat"
    ]
  },
  {
    "id": 12,
    "name": "Runny nose",
    "question": "Do you often experience runny nose?",
    "diagnosis_yes": [
      "Possible condition related to runny nose"
    ],
    "diagnosis_no": [
      "Minor or temporary runny nose"
    ]
  },
  {
    "id": 13,
    "name": "Nasal congestion",
    "question": "Do you often experience nasal congestion?",
    "diagnosis_yes": [
      "Possible condition related to nasal congestion"
    ],
    "diagnosis_no": [
      "Minor or temporary nasal congestion"
    ]
  },
  {
    "id": 14,
    "name": "Sneezing",
    "question": "Do you often experience sneezing?",
    "diagnosis_yes": [
      "Possible condition related to sneezing"
    ],
    "diagnosis_no": [
      "Minor or temporary sneezing"
    ]
  },
  {
    "id": 15,
    "name": "Loss of smell",
    "question": "Do you often experience loss of smell?",
    "diagnosis_yes": [
      "Possible condition related to loss of smell"
    ],
    "diagnosis_no": [
      "Minor or temporary loss of smell"
    ]
  },
  {
    "id": 16,
    "name": "Loss of taste",
    "question": "Do you often experience loss of taste?",
    "diagnosis_yes": [
      "Possible condition related to loss of taste"
    ],
    "diagnosis_no": [
      "Minor or temporary loss of taste"
    ]
  },
  {
    "id": 17,
    "name": "Muscle pain",
    "question": "Do you often experience muscle pain?",
    "diagnosis_yes": [
      "Possible condition related to muscle pain"
    ],
    "diagnosis_no": [
      "Minor or temporary muscle pain"
    ]
  },
  {
    "id": 18,
    "name": "Joint pain",
    "question": "Do you often experience joint pain?",
    "diagnosis_yes": [
      "Possible condition related to joint pain"
    ],
    "diagnosis_no": [
      "Minor or temporary joint pain"
    ]
  },
  {
    "id": 19,
    "name": "Back pain",
    "question": "Do you often experience back pain?",
    "diagnosis_yes": [
      "Possible condition related to back pain"
    ],
    "diagnosis_no": [
      "Minor or temporary back pain"
    ]
  },
  {
    "id": 20,
    "name": "Neck pain",
    "question": "Do you often experience neck pain?",
    "diagnosis_yes": [
      "Possible condition related to neck pain"
    ],
    "diagnosis_no": [
      "Minor or temporary neck pain"
    ]
  },
  {
    "id": 21,
    "name": "Chills",
    "question": "Do you often experience chills?",
    "diagnosis_yes": [
      "Possible condition related to chills"
    ],
    "diagnosis_no": [
      "Minor or temporary chills"
    ]
  },
  {
    "id": 22,
    "name": "Sweating",
    "question": "Do you often experience sweating?",
    "diagnosis_yes": [
      "Possible condition related to sweating"
    ],
    "diagnosis_no": [
      "Minor or temporary sweating"
    ]
  },
  {
    "id": 23,
    "name": "Dizziness",
    "question": "Do you often experience dizziness?",
    "diagnosis_yes": [
      "Possible condition related to dizziness"
    ],
    "diagnosis_no": [
      "Minor or temporary dizziness"
    ]
  },
  {
    "id": 24,
    "name": "Fainting",
    "question": "Do you often experience fainting?",
    "diagnosis_yes": [
      "Possible condition related to fainting"
    ],
    "diagnosis_no": [
      "Minor or temporary fainting"
    ]
  },
  {
    "id": 25,
    "name": "Palpitations",
    "question": "Do you often experience palpitations?",
    "diagnosis_yes": [
      "Possible condition related to palpitations"
    ],
    "diagnosis_no": [
      "Minor or temporary palpitations"
    ]
  },
  {
    "id": 26,
    "name": "Rapid heartbeat",
    "question": "Do you often experience rapid heartbeat?",
    "diagnosis_yes": [
      "Possible condition related to rapid heartbeat"
    ],
    "diagnosis_no": [
      "Minor or temporary rapid heartbeat"
    ]
  },
  {
    "id": 27,
    "name": "Slow heartbeat",
    "question": "Do you often experience slow heartbeat?",
    "diagnosis_yes": [
      "Possible condition related to slow heartbeat"
    ],
    "diagnosis_no": [
      "Minor or temporary slow heartbeat"
    ]
  },
  {
    "id": 28,
    "name": "Swelling",
    "question": "Do you often experience swelling?",
    "diagnosis_yes": [
      "Possible condition related to swelling"
    ],
    "diagnosis_no": [
      "Minor or temporary swelling"
    ]
  },
  {
    "id": 29,
    "name": "Itching",
    "question": "Do you often experience itching?",
    "diagnosis_yes": [
      "Possible condition related to itching"
    ],
    "diagnosis_no": [
      "Minor or temporary itching"
    ]
  },
  {
    "id": 30,
    "name": "Skin rash",
    "question": "Do you often experience skin rash?",
    "diagnosis_yes": [
      "Possible condition related to skin rash"
    ],
    "diagnosis_no": [
      "Minor or temporary skin rash"
    ]
  },
  {
    "id": 31,
    "name": "Hives",
    "question": "Do you often experience hives?",
    "diagnosis_yes": [
      "Possible condition related to hives"
    ],
    "diagnosis_no": [
      "Minor or temporary hives"
    ]
  },
  {
    "id": 32,
    "name": "Red eyes",
    "question": "Do you often experience red eyes?",
    "diagnosis_yes": [
      "Possible condition related to red eyes"
    ],
    "diagnosis_no": [
      "Minor or temporary red eyes"
    ]
  },
  {
    "id": 33,
    "name": "Dry eyes",
    "question": "Do you often experience dry eyes?",
    "diagnosis_yes": [
      "Possible condition related to dry eyes"
    ],
    "diagnosis_no": [
      "Minor or temporary dry eyes"
    ]
  },
  {
    "id": 34,
    "name": "Blurred vision",
    "question": "Do you often experience blurred vision?",
    "diagnosis_yes": [
      "Possible condition related to blurred vision"
    ],
    "diagnosis_no": [
      "Minor or temporary blurred vision"
    ]
  },
  {
    "id": 35,
    "name": "Double vision",
    "question": "Do you often experience double vision?",
    "diagnosis_yes": [
      "Possible condition related to double vision"
    ],
    "diagnosis_no": [
      "Minor or temporary double vision"
    ]
  },
  {
    "id": 36,
    "name": "Earache",
    "question": "Do you often experience earache?",
    "diagnosis_yes": [
      "Possible condition related to earache"
    ],
    "diagnosis_no": [
      "Minor or temporary earache"
    ]
  },
  {
    "id": 37,
    "name": "Hearing loss",
    "question": "Do you often experience hearing loss?",
    "diagnosis_yes": [
      "Possible condition related to hearing loss"
    ],
    "diagnosis_no": [
      "Minor or temporary hearing loss"
    ]
  },
  {
    "id": 38,
    "name": "Ringing in ears",
    "question": "Do you often experience ringing in ears?",
    "diagnosis_yes": [
      "Possible condition related to ringing in ears"
    ],
    "diagnosis_no": [
      "Minor or temporary ringing in ears"
    ]
  },
  {
    "id": 39,
    "name": "Balance problems",
    "question": "Do you often experience balance problems?",
    "diagnosis_yes": [
      "Possible condition related to balance problems"
    ],
    "diagnosis_no": [
      "Minor or temporary balance problems"
    ]
  },
  {
    "id": 40,
    "name": "Tremors",
    "question": "Do you often experience tremors?",
    "diagnosis_yes": [
      "Possible condition related to tremors"
    ],
    "diagnosis_no": [
      "Minor or temporary tremors"
    ]
  },
  {
    "id": 41,
    "name": "Numbness",
    "question": "Do you often experience numbness?",
    "diagnosis_yes": [
      "Possible condition related to numbness"
    ],
    "diagnosis_no": [
      "Minor or temporary numbness"
    ]
  },
  {
    "id": 42,
    "name": "Tingling",
    "question": "Do you often experience tingling?",
    "diagnosis_yes": [
      "Possible condition related to tingling"
    ],
    "diagnosis_no": [
      "Minor or temporary tingling"
    ]
  },
  {
    "id": 43,
    "name": "Seizures",
    "question": "Do you often experience seizures?",
    "diagnosis_yes": [
      "Possible condition related to seizures"
    ],
    "diagnosis_no": [
      "Minor or temporary seizures"
    ]
  },
  {
    "id": 44,
    "name": "Memory loss",
    "question": "Do you often experience memory loss?",
    "diagnosis_yes": [
      "Possible condition related to memory loss"
    ],
    "diagnosis_no": [
      "Minor or temporary memory loss"
    ]
  },
  {
    "id": 45,
    "name": "Confusion",
    "question": "Do you often experience confusion?",
    "diagnosis_yes": [
      "Possible condition related to confusion"
    ],
    "diagnosis_no": [
      "Minor or temporary confusion"
    ]
  },
  {
    "id": 46,
    "name": "Mood swings",
    "question": "Do you often experience mood swings?",
    "diagnosis_yes": [
      "Possible condition related to mood swings"
    ],
    "diagnosis_no": [
      "Minor or temporary mood swings"
    ]
  },
  {
    "id": 47,
    "name": "Irritability",
    "question": "Do you often experience irritability?",
    "diagnosis_yes": [
      "Possible condition related to irritability"
    ],
    "diagnosis_no": [
      "Minor or temporary irritability"
    ]
  },
  {
    "id": 48,
    "name": "Anxiety",
    "question": "Do you often experience anxiety?",
    "diagnosis_yes": [
      "Possible condition related to anxiety"
    ],
    "diagnosis_no": [
      "Minor or temporary anxiety"
    ]
  },
  {
    "id": 49,
    "name": "Depression",
    "question": "Do you often experience depression?",
    "diagnosis_yes": [
      "Possible condition related to depression"
    ],
    "diagnosis_no": [
      "Minor or temporary depression"
    ]
  },
  {
    "id": 50,
    "name": "Panic attacks",
    "question": "Do you often experience panic attacks?",
    "diagnosis_yes": [
      "Possible condition related to panic attacks"
    ],
    "diagnosis_no": [
      "Minor or temporary panic attacks"
    ]
  },
  {
    "id": 51,
    "name": "Insomnia",
    "question": "Do you often experience insomnia?",
    "diagnosis_yes": [
      "Possible condition related to insomnia"
    ],
    "diagnosis_no": [
      "Minor or temporary insomnia"
    ]
  },
  {
    "id": 52,
    "name": "Nightmares",
    "question": "Do you often experience nightmares?",
    "diagnosis_yes": [
      "Possible condition related to nightmares"
    ],
    "diagnosis_no": [
      "Minor or temporary nightmares"
    ]
  },
  {
    "id": 53,
    "name": "Hallucinations",
    "question": "Do you often experience hallucinations?",
    "diagnosis_yes": [
      "Possible condition related to hallucinations"
    ],
    "diagnosis_no": [
      "Minor or temporary hallucinations"
    ]
  },
  {
    "id": 54,
    "name": "Paranoia",
    "question": "Do you often experience paranoia?",
    "diagnosis_yes": [
      "Possible condition related to paranoia"
    ],
    "diagnosis_no": [
      "Minor or temporary paranoia"
    ]
  },
  {
    "id": 55,
    "name": "Delusions",
    "question": "Do you often experience delusions?",
    "diagnosis_yes": [
      "Possible condition related to delusions"
    ],
    "diagnosis_no": [
      "Minor or temporary delusions"
    ]
  },
  {
    "id": 56,
    "name": "Difficulty concentrating",
    "question": "Do you often experience difficulty concentrating?",
    "diagnosis_yes": [
      "Possible condition related to difficulty concentrating"
    ],
    "diagnosis_no": [
      "Minor or temporary difficulty concentrating"
    ]
  },
  {
    "id": 57,
    "name": "Lack of motivation",
    "question": "Do you often experience lack of motivation?",
    "diagnosis_yes": [
      "Possible condition related to lack of motivation"
    ],
    "diagnosis_no": [
      "Minor or temporary lack of motivation"
    ]
  },
  {
    "id": 58,
    "name": "Sadness",
    "question": "Do you often experience sadness?",
    "diagnosis_yes": [
      "Possible condition related to sadness"
    ],
    "diagnosis_no": [
      "Minor or temporary sadness"
    ]
  },
  {
    "id": 59,
    "name": "Crying spells",
    "question": "Do you often experience crying spells?",
    "diagnosis_yes": [
      "Possible condition related to crying spells"
    ],
    "diagnosis_no": [
      "Minor or temporary crying spells"
    ]
  },
  {
    "id": 60,
    "name": "Agitation",
    "question": "Do you often experience agitation?",
    "diagnosis_yes": [
      "Possible condition related to agitation"
    ],
    "diagnosis_no": [
      "Minor or temporary agitation"
    ]
  },
  {
    "id": 61,
    "name": "Aggression",
    "question": "Do you often experience aggression?",
    "diagnosis_yes": [
      "Possible condition related to aggression"
    ],
    "diagnosis_no": [
      "Minor or temporary aggression"
    ]
  },
  {
    "id": 62,
    "name": "Hyperactivity",
    "question": "Do you often experience hyperactivity?",
    "diagnosis_yes": [
      "Possible condition related to hyperactivity"
    ],
    "diagnosis_no": [
      "Minor or temporary hyperactivity"
    ]
  },
  {
    "id": 63,
    "name": "Social withdrawal",
    "question": "Do you often experience social withdrawal?",
    "diagnosis_yes": [
      "Possible condition related to social withdrawal"
    ],
    "diagnosis_no": [
      "Minor or temporary social withdrawal"
    ]
  },
  {
    "id": 64,
    "name": "Fear",
    "question": "Do you often experience fear?",
    "diagnosis_yes": [
      "Possible condition related to fear"
    ],
    "diagnosis_no": [
      "Minor or temporary fear"
    ]
  },
  {
    "id": 65,
    "name": "Low self-esteem",
    "question": "Do you often experience low self-esteem?",
    "diagnosis_yes": [
      "Possible condition related to low self-esteem"
    ],
    "diagnosis_no": [
      "Minor or temporary low self-esteem"
    ]
  },
  {
    "id": 66,
    "name": "Hopelessness",
    "question": "Do you often experience hopelessness?",
    "diagnosis_yes": [
      "Possible condition related to hopelessness"
    ],
    "diagnosis_no": [
      "Minor or temporary hopelessness"
    ]
  },
  {
    "id": 67,
    "name": "Guilt",
    "question": "Do you often experience guilt?",
    "diagnosis_yes": [
      "Possible condition related to guilt"
    ],
    "diagnosis_no": [
      "Minor or temporary guilt"
    ]
  },
  {
    "id": 68,
    "name": "Shame",
    "question": "Do you often experience shame?",
    "diagnosis_yes": [
      "Possible condition related to shame"
    ],
    "diagnosis_no": [
      "Minor or temporary shame"
    ]
  },
  {
    "id": 69,
    "name": "Eating too much",
    "question": "Do you often experience eating too much?",
    "diagnosis_yes": [
      "Possible condition related to eating too much"
    ],
    "diagnosis_no": [
      "Minor or temporary eating too much"
    ]
  },
  {
    "id": 70,
    "name": "Loss of appetite",
    "question": "Do you often experience loss of appetite?",
    "diagnosis_yes": [
      "Possible condition related to loss of appetite"
    ],
    "diagnosis_no": [
      "Minor or temporary loss of appetite"
    ]
  },
  {
    "id": 71,
    "name": "Weight loss",
    "question": "Do you often experience weight loss?",
    "diagnosis_yes": [
      "Possible condition related to weight loss"
    ],
    "diagnosis_no": [
      "Minor or temporary weight loss"
    ]
  },
  {
    "id": 72,
    "name": "Weight gain",
    "question": "Do you often experience weight gain?",
    "diagnosis_yes": [
      "Possible condition related to weight gain"
    ],
    "diagnosis_no": [
      "Minor or temporary weight gain"
    ]
  },
  {
    "id": 73,
    "name": "Frequent urination",
    "question": "Do you often experience frequent urination?",
    "diagnosis_yes": [
      "Possible condition related to frequent urination"
    ],
    "diagnosis_no": [
      "Minor or temporary frequent urination"
    ]
  },
  {
    "id": 74,
    "name": "Painful urination",
    "question": "Do you often experience painful urination?",
    "diagnosis_yes": [
      "Possible condition related to painful urination"
    ],
    "diagnosis_no": [
      "Minor or temporary painful urination"
    ]
  },
  {
    "id": 75,
    "name": "Blood in urine",
    "question": "Do you often experience blood in urine?",
    "diagnosis_yes": [
      "Possible condition related to blood in urine"
    ],
    "diagnosis_no": [
      "Minor or temporary blood in urine"
    ]
  },
  {
    "id": 76,
    "name": "Incontinence",
    "question": "Do you often experience incontinence?",
    "diagnosis_yes": [
      "Possible condition related to incontinence"
    ],
    "diagnosis_no": [
      "Minor or temporary incontinence"
    ]
  },
  {
    "id": 77,
    "name": "Constipation",
    "question": "Do you often experience constipation?",
    "diagnosis_yes": [
      "Possible condition related to constipation"
    ],
    "diagnosis_no": [
      "Minor or temporary constipation"
    ]
  },
  {
    "id": 78,
    "name": "Bloating",
    "question": "Do you often experience bloating?",
    "diagnosis_yes": [
      "Possible condition related to bloating"
    ],
    "diagnosis_no": [
      "Minor or temporary bloating"
    ]
  },
  {
    "id": 79,
    "name": "Gas",
    "question": "Do you often experience gas?",
    "diagnosis_yes": [
      "Possible condition related to gas"
    ],
    "diagnosis_no": [
      "Minor or temporary gas"
    ]
  },
  {
    "id": 80,
    "name": "Heartburn",
    "question": "Do you often experience heartburn?",
    "diagnosis_yes": [
      "Possible condition related to heartburn"
    ],
    "diagnosis_no": [
      "Minor or temporary heartburn"
    ]
  },
  {
    "id": 81,
    "name": "Difficulty swallowing",
    "question": "Do you often experience difficulty swallowing?",
    "diagnosis_yes": [
      "Possible condition related to difficulty swallowing"
    ],
    "diagnosis_no": [
      "Minor or temporary difficulty swallowing"
    ]
  },
  {
    "id": 82,
    "name": "Lump in throat",
    "question": "Do you often experience lump in throat?",
    "diagnosis_yes": [
      "Possible condition related to lump in throat"
    ],
    "diagnosis_no": [
      "Minor or temporary lump in throat"
    ]
  },
  {
    "id": 83,
    "name": "Voice hoarseness",
    "question": "Do you often experience voice hoarseness?",
    "diagnosis_yes": [
      "Possible condition related to voice hoarseness"
    ],
    "diagnosis_no": [
      "Minor or temporary voice hoarseness"
    ]
  },
  {
    "id": 84,
    "name": "Menstrual cramps",
    "question": "Do you often experience menstrual cramps?",
    "diagnosis_yes": [
      "Possible condition related to menstrual cramps"
    ],
    "diagnosis_no": [
      "Minor or temporary menstrual cramps"
    ]
  },
  {
    "id": 85,
    "name": "Irregular periods",
    "question": "Do you often experience irregular periods?",
    "diagnosis_yes": [
      "Possible condition related to irregular periods"
    ],
    "diagnosis_no": [
      "Minor or temporary irregular periods"
    ]
  },
  {
    "id": 86,
    "name": "Heavy bleeding",
    "question": "Do you often experience heavy bleeding?",
    "diagnosis_yes": [
      "Possible condition related to heavy bleeding"
    ],
    "diagnosis_no": [
      "Minor or temporary heavy bleeding"
    ]
  },
  {
    "id": 87,
    "name": "Missed period",
    "question": "Do you often experience missed period?",
    "diagnosis_yes": [
      "Possible condition related to missed period"
    ],
    "diagnosis_no": [
      "Minor or temporary missed period"
    ]
  },
  {
    "id": 88,
    "name": "Hot flashes",
    "question": "Do you often experience hot flashes?",
    "diagnosis_yes": [
      "Possible condition related to hot flashes"
    ],
    "diagnosis_no": [
      "Minor or temporary hot flashes"
    ]
  },
  {
    "id": 89,
    "name": "Night sweats",
    "question": "Do you often experience night sweats?",
    "diagnosis_yes": [
      "Possible condition related to night sweats"
    ],
    "diagnosis_no": [
      "Minor or temporary night sweats"
    ]
  },
  {
    "id": 90,
    "name": "Breast pain",
    "question": "Do you often experience breast pain?",
    "diagnosis_yes": [
      "Possible condition related to breast pain"
    ],
    "diagnosis_no": [
      "Minor or temporary breast pain"
    ]
  },
  {
    "id": 91,
    "name": "Nipple discharge",
    "question": "Do you often experience nipple discharge?",
    "diagnosis_yes": [
      "Possible condition related to nipple discharge"
    ],
    "diagnosis_no": [
      "Minor or temporary nipple discharge"
    ]
  },
  {
    "id": 92,
    "name": "Vaginal discharge",
    "question": "Do you often experience vaginal discharge?",
    "diagnosis_yes": [
      "Possible condition related to vaginal discharge"
    ],
    "diagnosis_no": [
      "Minor or temporary vaginal discharge"
    ]
  },
  {
    "id": 93,
    "name": "Pelvic pain",
    "question": "Do you often experience pelvic pain?",
    "diagnosis_yes": [
      "Possible condition related to pelvic pain"
    ],
    "diagnosis_no": [
      "Minor or temporary pelvic pain"
    ]
  },
  {
    "id": 94,
    "name": "Erectile dysfunction",
    "question": "Do you often experience erectile dysfunction?",
    "diagnosis_yes": [
      "Possible condition related to erectile dysfunction"
    ],
    "diagnosis_no": [
      "Minor or temporary erectile dysfunction"
    ]
  },
  {
    "id": 95,
    "name": "Low libido",
    "question": "Do you often experience low libido?",
    "diagnosis_yes": [
      "Possible condition related to low libido"
    ],
    "diagnosis_no": [
      "Minor or temporary low libido"
    ]
  },
  {
    "id": 96,
    "name": "Premature ejaculation",
    "question": "Do you often experience premature ejaculation?",
    "diagnosis_yes": [
      "Possible condition related to premature ejaculation"
    ],
    "diagnosis_no": [
      "Minor or temporary premature ejaculation"
    ]
  },
  {
    "id": 97,
    "name": "Infertility",
    "question": "Do you often experience infertility?",
    "diagnosis_yes": [
      "Possible condition related to infertility"
    ],
    "diagnosis_no": [
      "Minor or temporary infertility"
    ]
  },
  {
    "id": 98,
    "name": "Testicular pain",
    "question": "Do you often experience testicular pain?",
    "diagnosis_yes": [
      "Possible condition related to testicular pain"
    ],
    "diagnosis_no": [
      "Minor or temporary testicular pain"
    ]
  },
  {
    "id": 99,
    "name": "Scrotal swelling",
    "question": "Do you often experience scrotal swelling?",
    "diagnosis_yes": [
      "Possible condition related to scrotal swelling"
    ],
    "diagnosis_no": [
      "Minor or temporary scrotal swelling"
    ]
  },
  {
    "id": 100,
    "name": "Urinary urgency",
    "question": "Do you often experience urinary urgency?",
    "diagnosis_yes": [
      "Possible condition related to urinary urgency"
    ],
    "diagnosis_no": [
      "Minor or temporary urinary urgency"
    ]
  },
  {
    "id": 101,
    "name": "Frequent thirst",
    "question": "Do you often experience frequent thirst?",
    "diagnosis_yes": [
      "Possible condition related to frequent thirst"
    ],
    "diagnosis_no": [
      "Minor or temporary frequent thirst"
    ]
  },
  {
    "id": 102,
    "name": "Dry mouth",
    "question": "Do you often experience dry mouth?",
    "diagnosis_yes": [
      "Possible condition related to dry mouth"
    ],
    "diagnosis_no": [
      "Minor or temporary dry mouth"
    ]
  },
  {
    "id": 103,
    "name": "Cold hands",
    "question": "Do you often experience cold hands?",
    "diagnosis_yes": [
      "Possible condition related to cold hands"
    ],
    "diagnosis_no": [
      "Minor or temporary cold hands"
    ]
  },
  {
    "id": 104,
    "name": "Cold feet",
    "question": "Do you often experience cold feet?",
    "diagnosis_yes": [
      "Possible condition related to cold feet"
    ],
    "diagnosis_no": [
      "Minor or temporary cold feet"
    ]
  },
  {
    "id": 105,
    "name": "Flushing",
    "question": "Do you often experience flushing?",
    "diagnosis_yes": [
      "Possible condition related to flushing"
    ],
    "diagnosis_no": [
      "Minor or temporary flushing"
    ]
  },
  {
    "id": 106,
    "name": "Bruising",
    "question": "Do you often experience bruising?",
    "diagnosis_yes": [
      "Possible condition related to bruising"
    ],
    "diagnosis_no": [
      "Minor or temporary bruising"
    ]
  },
  {
    "id": 107,
    "name": "Bleeding gums",
    "question": "Do you often experience bleeding gums?",
    "diagnosis_yes": [
      "Possible condition related to bleeding gums"
    ],
    "diagnosis_no": [
      "Minor or temporary bleeding gums"
    ]
  },
  {
    "id": 108,
    "name": "Mouth ulcers",
    "question": "Do you often experience mouth ulcers?",
    "diagnosis_yes": [
      "Possible condition related to mouth ulcers"
    ],
    "diagnosis_no": [
      "Minor or temporary mouth ulcers"
    ]
  },
  {
    "id": 109,
    "name": "Bad breath",
    "question": "Do you often experience bad breath?",
    "diagnosis_yes": [
      "Possible condition related to bad breath"
    ],
    "diagnosis_no": [
      "Minor or temporary bad breath"
    ]
  },
  {
    "id": 110,
    "name": "Toothache",
    "question": "Do you often experience toothache?",
    "diagnosis_yes": [
      "Possible condition related to toothache"
    ],
    "diagnosis_no": [
      "Minor or temporary toothache"
    ]
  },
  {
    "id": 111,
    "name": "Jaw pain",
    "question": "Do you often experience jaw pain?",
    "diagnosis_yes": [
      "Possible condition related to jaw pain"
    ],
    "diagnosis_no": [
      "Minor or temporary jaw pain"
    ]
  },
  {
    "id": 112,
    "name": "Snoring",
    "question": "Do you often experience snoring?",
    "diagnosis_yes": [
      "Possible condition related to snoring"
    ],
    "diagnosis_no": [
      "Minor or temporary snoring"
    ]
  },
  {
    "id": 113,
    "name": "Sleepwalking",
    "question": "Do you often experience sleepwalking?",
    "diagnosis_yes": [
      "Possible condition related to sleepwalking"
    ],
    "diagnosis_no": [
      "Minor or temporary sleepwalking"
    ]
  },
  {
    "id": 114,
    "name": "Sleep talking",
    "question": "Do you often experience sleep talking?",
    "diagnosis_yes": [
      "Possible condition related to sleep talking"
    ],
    "diagnosis_no": [
      "Minor or temporary sleep talking"
    ]
  },
  {
    "id": 115,
    "name": "Clumsiness",
    "question": "Do you often experience clumsiness?",
    "diagnosis_yes": [
      "Possible condition related to clumsiness"
    ],
    "diagnosis_no": [
      "Minor or temporary clumsiness"
    ]
  },
  {
    "id": 116,
    "name": "Slurred speech",
    "question": "Do you often experience slurred speech?",
    "diagnosis_yes": [
      "Possible condition related to slurred speech"
    ],
    "diagnosis_no": [
      "Minor or temporary slurred speech"
    ]
  },
  {
    "id": 117,
    "name": "Stuttering",
    "question": "Do you often experience stuttering?",
    "diagnosis_yes": [
      "Possible condition related to stuttering"
    ],
    "diagnosis_no": [
      "Minor or temporary stuttering"
    ]
  },
  {
    "id": 118,
    "name": "Lack of coordination",
    "question": "Do you often experience lack of coordination?",
    "diagnosis_yes": [
      "Possible condition related to lack of coordination"
    ],
    "diagnosis_no": [
      "Minor or temporary lack of coordination"
    ]
  },
  {
    "id": 119,
    "name": "Drooling",
    "question": "Do you often experience drooling?",
    "diagnosis_yes": [
      "Possible condition related to drooling"
    ],
    "diagnosis_no": [
      "Minor or temporary drooling"
    ]
  },
  {
    "id": 120,
    "name": "Swollen lymph nodes",
    "question": "Do you often experience swollen lymph nodes?",
    "diagnosis_yes": [
      "Possible condition related to swollen lymph nodes"
    ],
    "diagnosis_no": [
      "Minor or temporary swollen lymph nodes"
    ]
  },
  {
    "id": 121,
    "name": "Jaundice",
    "question": "Do you often experience jaundice?",
    "diagnosis_yes": [
      "Possible condition related to jaundice"
    ],
    "diagnosis_no": [
      "Minor or temporary jaundice"
    ]
  },
  {
    "id": 122,
    "name": "Yellow eyes",
    "question": "Do you often experience yellow eyes?",
    "diagnosis_yes": [
      "Possible condition related to yellow eyes"
    ],
    "diagnosis_no": [
      "Minor or temporary yellow eyes"
    ]
  },
  {
    "id": 123,
    "name": "Dark urine",
    "question": "Do you often experience dark urine?",
    "diagnosis_yes": [
      "Possible condition related to dark urine"
    ],
    "diagnosis_no": [
      "Minor or temporary dark urine"
    ]
  },
  {
    "id": 124,
    "name": "Pale stools",
    "question": "Do you often experience pale stools?",
    "diagnosis_yes": [
      "Possible condition related to pale stools"
    ],
    "diagnosis_no": [
      "Minor or temporary pale stools"
    ]
  },
  {
    "id": 125,
    "name": "Itchy skin",
    "question": "Do you often experience itchy skin?",
    "diagnosis_yes": [
      "Possible condition related to itchy skin"
    ],
    "diagnosis_no": [
      "Minor or temporary itchy skin"
    ]
  },
  {
    "id": 126,
    "name": "Nail changes",
    "question": "Do you often experience nail changes?",
    "diagnosis_yes": [
      "Possible condition related to nail changes"
    ],
    "diagnosis_no": [
      "Minor or temporary nail changes"
    ]
  },
  {
    "id": 127,
    "name": "Hair loss",
    "question": "Do you often experience hair loss?",
    "diagnosis_yes": [
      "Possible condition related to hair loss"
    ],
    "diagnosis_no": [
      "Minor or temporary hair loss"
    ]
  },
  {
    "id": 128,
    "name": "Scalp itching",
    "question": "Do you often experience scalp itching?",
    "diagnosis_yes": [
      "Possible condition related to scalp itching"
    ],
    "diagnosis_no": [
      "Minor or temporary scalp itching"
    ]
  },
  {
    "id": 129,
    "name": "Sensitivity to light",
    "question": "Do you often experience sensitivity to light?",
    "diagnosis_yes": [
      "Possible condition related to sensitivity to light"
    ],
    "diagnosis_no": [
      "Minor or temporary sensitivity to light"
    ]
  },
  {
    "id": 130,
    "name": "Sensitivity to sound",
    "question": "Do you often experience sensitivity to sound?",
    "diagnosis_yes": [
      "Possible condition related to sensitivity to sound"
    ],
    "diagnosis_no": [
      "Minor or temporary sensitivity to sound"
    ]
  },
  {
    "id": 131,
    "name": "Burning sensation",
    "question": "Do you often experience burning sensation?",
    "diagnosis_yes": [
      "Possible condition related to burning sensation"
    ],
    "diagnosis_no": [
      "Minor or temporary burning sensation"
    ]
  },
  {
    "id": 132,
    "name": "Cold intolerance",
    "question": "Do you often experience cold intolerance?",
    "diagnosis_yes": [
      "Possible condition related to cold intolerance"
    ],
    "diagnosis_no": [
      "Minor or temporary cold intolerance"
    ]
  },
  {
    "id": 133,
    "name": "Heat intolerance",
    "question": "Do you often experience heat intolerance?",
    "diagnosis_yes": [
      "Possible condition related to heat intolerance"
    ],
    "diagnosis_no": [
      "Minor or temporary heat intolerance"
    ]
  },
  {
    "id": 134,
    "name": "Frequent infections",
    "question": "Do you often experience frequent infections?",
    "diagnosis_yes": [
      "Possible condition related to frequent infections"
    ],
    "diagnosis_no": [
      "Minor or temporary frequent infections"
    ]
  },
  {
    "id": 135,
    "name": "Slow healing",
    "question": "Do you often experience slow healing?",
    "diagnosis_yes": [
      "Possible condition related to slow healing"
    ],
    "diagnosis_no": [
      "Minor or temporary slow healing"
    ]
  },
  {
    "id": 136,
    "name": "Nausea after eating",
    "question": "Do you often experience nausea after eating?",
    "diagnosis_yes": [
      "Possible condition related to nausea after eating"
    ],
    "diagnosis_no": [
      "Minor or temporary nausea after eating"
    ]
  },
  {
    "id": 137,
    "name": "Food aversion",
    "question": "Do you often experience food aversion?",
    "diagnosis_yes": [
      "Possible condition related to food aversion"
    ],
    "diagnosis_no": [
      "Minor or temporary food aversion"
    ]
  },
  {
    "id": 138,
    "name": "Cravings",
    "question": "Do you often experience cravings?",
    "diagnosis_yes": [
      "Possible condition related to cravings"
    ],
    "diagnosis_no": [
      "Minor or temporary cravings"
    ]
  },
  {
    "id": 139,
    "name": "Muscle weakness",
    "question": "Do you often experience muscle weakness?",
    "diagnosis_yes": [
      "Possible condition related to muscle weakness"
    ],
    "diagnosis_no": [
      "Minor or temporary muscle weakness"
    ]
  },
  {
    "id": 140,
    "name": "Exercise intolerance",
    "question": "Do you often experience exercise intolerance?",
    "diagnosis_yes": [
      "Possible condition related to exercise intolerance"
    ],
    "diagnosis_no": [
      "Minor or temporary exercise intolerance"
    ]
  },
  {
    "id": 141,
    "name": "Chronic pain",
    "question": "Do you often experience chronic pain?",
    "diagnosis_yes": [
      "Possible condition related to chronic pain"
    ],
    "diagnosis_no": [
      "Minor or temporary chronic pain"
    ]
  },
  {
    "id": 142,
    "name": "Stiff joints",
    "question": "Do you often experience stiff joints?",
    "diagnosis_yes": [
      "Possible condition related to stiff joints"
    ],
    "diagnosis_no": [
      "Minor or temporary stiff joints"
    ]
  },
  {
    "id": 143,
    "name": "Limited mobility",
    "question": "Do you often experience limited mobility?",
    "diagnosis_yes": [
      "Possible condition related to limited mobility"
    ],
    "diagnosis_no": [
      "Minor or temporary limited mobility"
    ]
  },
  {
    "id": 144,
    "name": "Swollen ankles",
    "question": "Do you often experience swollen ankles?",
    "diagnosis_yes": [
      "Possible condition related to swollen ankles"
    ],
    "diagnosis_no": [
      "Minor or temporary swollen ankles"
    ]
  },
  {
    "id": 145,
    "name": "Swollen wrists",
    "question": "Do you often experience swollen wrists?",
    "diagnosis_yes": [
      "Possible condition related to swollen wrists"
    ],
    "diagnosis_no": [
      "Minor or temporary swollen wrists"
    ]
  },
  {
    "id": 146,
    "name": "Eye twitching",
    "question": "Do you often experience eye twitching?",
    "diagnosis_yes": [
      "Possible condition related to eye twitching"
    ],
    "diagnosis_no": [
      "Minor or temporary eye twitching"
    ]
  },
  {
    "id": 147,
    "name": "Eye pain",
    "question": "Do you often experience eye pain?",
    "diagnosis_yes": [
      "Possible condition related to eye pain"
    ],
    "diagnosis_no": [
      "Minor or temporary eye pain"
    ]
  },
  {
    "id": 148,
    "name": "Tearing",
    "question": "Do you often experience tearing?",
    "diagnosis_yes": [
      "Possible condition related to tearing"
    ],
    "diagnosis_no": [
      "Minor or temporary tearing"
    ]
  },
  {
    "id": 149,
    "name": "Vision loss",
    "question": "Do you often experience vision loss?",
    "diagnosis_yes": [
      "Possible condition related to vision loss"
    ],
    "diagnosis_no": [
      "Minor or temporary vision loss"
    ]
  },
  {
    "id": 150,
    "name": "Color blindness",
    "question": "Do you often experience color blindness?",
    "diagnosis_yes": [
      "Possible condition related to color blindness"
    ],
    "diagnosis_no": [
      "Minor or temporary color blindness"
    ]
  },
  {
    "id": 151,
    "name": "Breath odor",
    "question": "Do you often experience breath odor?",
    "diagnosis_yes": [
      "Possible condition related to breath odor"
    ],
    "diagnosis_no": [
      "Minor or temporary breath odor"
    ]
  },
  {
    "id": 152,
    "name": "Facial pain",
    "question": "Do you often experience facial pain?",
    "diagnosis_yes": [
      "Possible condition related to facial pain"
    ],
    "diagnosis_no": [
      "Minor or temporary facial pain"
    ]
  },
  {
    "id": 153,
    "name": "Throat lump",
    "question": "Do you often experience throat lump?",
    "diagnosis_yes": [
      "Possible condition related to throat lump"
    ],
    "diagnosis_no": [
      "Minor or temporary throat lump"
    ]
  },
  {
    "id": 154,
    "name": "Hiccups",
    "question": "Do you often experience hiccups?",
    "diagnosis_yes": [
      "Possible condition related to hiccups"
    ],
    "diagnosis_no": [
      "Minor or temporary hiccups"
    ]
  },
  {
    "id": 155,
    "name": "Excessive yawning",
    "question": "Do you often experience excessive yawning?",
    "diagnosis_yes": [
      "Possible condition related to excessive yawning"
    ],
    "diagnosis_no": [
      "Minor or temporary excessive yawning"
    ]
  },
  {
    "id": 156,
    "name": "Swollen tongue",
    "question": "Do you often experience swollen tongue?",
    "diagnosis_yes": [
      "Possible condition related to swollen tongue"
    ],
    "diagnosis_no": [
      "Minor or temporary swollen tongue"
    ]
  },
  {
    "id": 157,
    "name": "Voice changes",
    "question": "Do you often experience voice changes?",
    "diagnosis_yes": [
      "Possible condition related to voice changes"
    ],
    "diagnosis_no": [
      "Minor or temporary voice changes"
    ]
  },
  {
    "id": 158,
    "name": "Hair thinning",
    "question": "Do you often experience hair thinning?",
    "diagnosis_yes": [
      "Possible condition related to hair thinning"
    ],
    "diagnosis_no": [
      "Minor or temporary hair thinning"
    ]
  },
  {
    "id": 159,
    "name": "Muscle cramps",
    "question": "Do you often experience muscle cramps?",
    "diagnosis_yes": [
      "Possible condition related to muscle cramps"
    ],
    "diagnosis_no": [
      "Minor or temporary muscle cramps"
    ]
  },
  {
    "id": 160,
    "name": "Restlessness",
    "question": "Do you often experience restlessness?",
    "diagnosis_yes": [
      "Possible condition related to restlessness"
    ],
    "diagnosis_no": [
      "Minor or temporary restlessness"
    ]
  },
  {
    "id": 161,
    "name": "Pacing",
    "question": "Do you often experience pacing?",
    "diagnosis_yes": [
      "Possible condition related to pacing"
    ],
    "diagnosis_no": [
      "Minor or temporary pacing"
    ]
  },
  {
    "id": 162,
    "name": "Repetitive behaviors",
    "question": "Do you often experience repetitive behaviors?",
    "diagnosis_yes": [
      "Possible condition related to repetitive behaviors"
    ],
    "diagnosis_no": [
      "Minor or temporary repetitive behaviors"
    ]
  },
  {
    "id": 163,
    "name": "Fear of crowds",
    "question": "Do you often experience fear of crowds?",
    "diagnosis_yes": [
      "Possible condition related to fear of crowds"
    ],
    "diagnosis_no": [
      "Minor or temporary fear of crowds"
    ]
  },
  {
    "id": 164,
    "name": "Fear of heights",
    "question": "Do you often experience fear of heights?",
    "diagnosis_yes": [
      "Possible condition related to fear of heights"
    ],
    "diagnosis_no": [
      "Minor or temporary fear of heights"
    ]
  },
  {
    "id": 165,
    "name": "Fear of flying",
    "question": "Do you often experience fear of flying?",
    "diagnosis_yes": [
      "Possible condition related to fear of flying"
    ],
    "diagnosis_no": [
      "Minor or temporary fear of flying"
    ]
  },
  {
    "id": 166,
    "name": "Obsessions",
    "question": "Do you often experience obsessions?",
    "diagnosis_yes": [
      "Possible condition related to obsessions"
    ],
    "diagnosis_no": [
      "Minor or temporary obsessions"
    ]
  },
  {
    "id": 167,
    "name": "Compulsions",
    "question": "Do you often experience compulsions?",
    "diagnosis_yes": [
      "Possible condition related to compulsions"
    ],
    "diagnosis_no": [
      "Minor or temporary compulsions"
    ]
  },
  {
    "id": 168,
    "name": "Intrusive thoughts",
    "question": "Do you often experience intrusive thoughts?",
    "diagnosis_yes": [
      "Possible condition related to intrusive thoughts"
    ],
    "diagnosis_no": [
      "Minor or temporary intrusive thoughts"
    ]
  },
  {
    "id": 169,
    "name": "Avoidance behavior",
    "question": "Do you often experience avoidance behavior?",
    "diagnosis_yes": [
      "Possible condition related to avoidance behavior"
    ],
    "diagnosis_no": [
      "Minor or temporary avoidance behavior"
    ]
  },
  {
    "id": 170,
    "name": "Flashbacks",
    "question": "Do you often experience flashbacks?",
    "diagnosis_yes": [
      "Possible condition related to flashbacks"
    ],
    "diagnosis_no": [
      "Minor or temporary flashbacks"
    ]
  },
  {
    "id": 171,
    "name": "Night terrors",
    "question": "Do you often experience night terrors?",
    "diagnosis_yes": [
      "Possible condition related to night terrors"
    ],
    "diagnosis_no": [
      "Minor or temporary night terrors"
    ]
  },
  {
    "id": 172,
    "name": "Sleep paralysis",
    "question": "Do you often experience sleep paralysis?",
    "diagnosis_yes": [
      "Possible condition related to sleep paralysis"
    ],
    "diagnosis_no": [
      "Minor or temporary sleep paralysis"
    ]
  },
  {
    "id": 173,
    "name": "Sleep disruption",
    "question": "Do you often experience sleep disruption?",
    "diagnosis_yes": [
      "Possible condition related to sleep disruption"
    ],
    "diagnosis_no": [
      "Minor or temporary sleep disruption"
    ]
  },
  {
    "id": 174,
    "name": "Low energy",
    "question": "Do you often experience low energy?",
    "diagnosis_yes": [
      "Possible condition related to low energy"
    ],
    "diagnosis_no": [
      "Minor or temporary low energy"
    ]
  },
  {
    "id": 175,
    "name": "Lethargy",
    "question": "Do you often experience lethargy?",
    "diagnosis_yes": [
      "Possible condition related to lethargy"
    ],
    "diagnosis_no": [
      "Minor or temporary lethargy"
    ]
  },
  {
    "id": 176,
    "name": "Loss of interest",
    "question": "Do you often experience loss of interest?",
    "diagnosis_yes": [
      "Possible condition related to loss of interest"
    ],
    "diagnosis_no": [
      "Minor or temporary loss of interest"
    ]
  },
  {
    "id": 177,
    "name": "Lack of pleasure",
    "question": "Do you often experience lack of pleasure?",
    "diagnosis_yes": [
      "Possible condition related to lack of pleasure"
    ],
    "diagnosis_no": [
      "Minor or temporary lack of pleasure"
    ]
  },
  {
    "id": 178,
    "name": "Hypervigilance",
    "question": "Do you often experience hypervigilance?",
    "diagnosis_yes": [
      "Possible condition related to hypervigilance"
    ],
    "diagnosis_no": [
      "Minor or temporary hypervigilance"
    ]
  },
  {
    "id": 179,
    "name": "Easily startled",
    "question": "Do you often experience easily startled?",
    "diagnosis_yes": [
      "Possible condition related to easily startled"
    ],
    "diagnosis_no": [
      "Minor or temporary easily startled"
    ]
  },
  {
    "id": 180,
    "name": "Startle response",
    "question": "Do you often experience startle response?",
    "diagnosis_yes": [
      "Possible condition related to startle response"
    ],
    "diagnosis_no": [
      "Minor or temporary startle response"
    ]
  },
  {
    "id": 181,
    "name": "Eye redness",
    "question": "Do you often experience eye redness?",
    "diagnosis_yes": [
      "Possible condition related to eye redness"
    ],
    "diagnosis_no": [
      "Minor or temporary eye redness"
    ]
  },
  {
    "id": 182,
    "name": "Ear pressure",
    "question": "Do you often experience ear pressure?",
    "diagnosis_yes": [
      "Possible condition related to ear pressure"
    ],
    "diagnosis_no": [
      "Minor or temporary ear pressure"
    ]
  },
  {
    "id": 183,
    "name": "Cheek swelling",
    "question": "Do you often experience cheek swelling?",
    "diagnosis_yes": [
      "Possible condition related to cheek swelling"
    ],
    "diagnosis_no": [
      "Minor or temporary cheek swelling"
    ]
  },
  {
    "id": 184,
    "name": "Jaw locking",
    "question": "Do you often experience jaw locking?",
    "diagnosis_yes": [
      "Possible condition related to jaw locking"
    ],
    "diagnosis_no": [
      "Minor or temporary jaw locking"
    ]
  },
  {
    "id": 185,
    "name": "Cracked lips",
    "question": "Do you often experience cracked lips?",
    "diagnosis_yes": [
      "Possible condition related to cracked lips"
    ],
    "diagnosis_no": [
      "Minor or temporary cracked lips"
    ]
  },
  {
    "id": 186,
    "name": "Tongue discoloration",
    "question": "Do you often experience tongue discoloration?",
    "diagnosis_yes": [
      "Possible condition related to tongue discoloration"
    ],
    "diagnosis_no": [
      "Minor or temporary tongue discoloration"
    ]
  },
  {
    "id": 187,
    "name": "Chest tightness",
    "question": "Do you often experience chest tightness?",
    "diagnosis_yes": [
      "Possible condition related to chest tightness"
    ],
    "diagnosis_no": [
      "Minor or temporary chest tightness"
    ]
  },
  {
    "id": 188,
    "name": "Abdominal bloating",
    "question": "Do you often experience abdominal bloating?",
    "diagnosis_yes": [
      "Possible condition related to abdominal bloating"
    ],
    "diagnosis_no": [
      "Minor or temporary abdominal bloating"
    ]
  },
  {
    "id": 189,
    "name": "Rectal pain",
    "question": "Do you often experience rectal pain?",
    "diagnosis_yes": [
      "Possible condition related to rectal pain"
    ],
    "diagnosis_no": [
      "Minor or temporary rectal pain"
    ]
  },
  {
    "id": 190,
    "name": "Anal itching",
    "question": "Do you often experience anal itching?",
    "diagnosis_yes": [
      "Possible condition related to anal itching"
    ],
    "diagnosis_no": [
      "Minor or temporary anal itching"
    ]
  },
  {
    "id": 191,
    "name": "Genital itching",
    "question": "Do you often experience genital itching?",
    "diagnosis_yes": [
      "Possible condition related to genital itching"
    ],
    "diagnosis_no": [
      "Minor or temporary genital itching"
    ]
  },
  {
    "id": 192,
    "name": "Painful intercourse",
    "question": "Do you often experience painful intercourse?",
    "diagnosis_yes": [
      "Possible condition related to painful intercourse"
    ],
    "diagnosis_no": [
      "Minor or temporary painful intercourse"
    ]
  },
  {
    "id": 193,
    "name": "Urine odor",
    "question": "Do you often experience urine odor?",
    "diagnosis_yes": [
      "Possible condition related to urine odor"
    ],
    "diagnosis_no": [
      "Minor or temporary urine odor"
    ]
  },
  {
    "id": 194,
    "name": "Sweat odor",
    "question": "Do you often experience sweat odor?",
    "diagnosis_yes": [
      "Possible condition related to sweat odor"
    ],
    "diagnosis_no": [
      "Minor or temporary sweat odor"
    ]
  },
  {
    "id": 195,
    "name": "Body odor",
    "question": "Do you often experience body odor?",
    "diagnosis_yes": [
      "Possible condition related to body odor"
    ],
    "diagnosis_no": [
      "Minor or temporary body odor"
    ]
  },
  {
    "id": 196,
    "name": "Hand tremors",
    "question": "Do you often experience hand tremors?",
    "diagnosis_yes": [
      "Possible condition related to hand tremors"
    ],
    "diagnosis_no": [
      "Minor or temporary hand tremors"
    ]
  },
  {
    "id": 197,
    "name": "Foot pain",
    "question": "Do you often experience foot pain?",
    "diagnosis_yes": [
      "Possible condition related to foot pain"
    ],
    "diagnosis_no": [
      "Minor or temporary foot pain"
    ]
  },
  {
    "id": 198,
    "name": "Heel pain",
    "question": "Do you often experience heel pain?",
    "diagnosis_yes": [
      "Possible condition related to heel pain"
    ],
    "diagnosis_no": [
      "Minor or temporary heel pain"
    ]
  },
  {
    "id": 199,
    "name": "Toe numbness",
    "question": "Do you often experience toe numbness?",
    "diagnosis_yes": [
      "Possible condition related to toe numbness"
    ],
    "diagnosis_no": [
      "Minor or temporary toe numbness"
    ]
  },
  {
    "id": 200,
    "name": "Leg cramps",
    "question": "Do you often experience leg cramps?",
    "diagnosis_yes": [
      "Possible condition related to leg cramps"
    ],
    "diagnosis_no": [
      "Minor or temporary leg cramps"
    ]
  },
  {
    "id": 201,
    "name": "Hip pain",
    "question": "Do you often experience hip pain?",
    "diagnosis_yes": [
      "Possible condition related to hip pain"
    ],
    "diagnosis_no": [
      "Minor or temporary hip pain"
    ]
  },
  {
    "id": 202,
    "name": "Knee pain",
    "question": "Do you often experience knee pain?",
    "diagnosis_yes": [
      "Possible condition related to knee pain"
    ],
    "diagnosis_no": [
      "Minor or temporary knee pain"
    ]
  },
  {
    "id": 203,
    "name": "Shoulder stiffness",
    "question": "Do you often experience shoulder stiffness?",
    "diagnosis_yes": [
      "Possible condition related to shoulder stiffness"
    ],
    "diagnosis_no": [
      "Minor or temporary shoulder stiffness"
    ]
  },
  {
    "id": 204,
    "name": "Finger stiffness",
    "question": "Do you often experience finger stiffness?",
    "diagnosis_yes": [
      "Possible condition related to finger stiffness"
    ],
    "diagnosis_no": [
      "Minor or temporary finger stiffness"
    ]
  },
  {
    "id": 205,
    "name": "Wrinkled skin",
    "question": "Do you often experience wrinkled skin?",
    "diagnosis_yes": [
      "Possible condition related to wrinkled skin"
    ],
    "diagnosis_no": [
      "Minor or temporary wrinkled skin"
    ]
  },
  {
    "id": 206,
    "name": "Freckles",
    "question": "Do you often experience freckles?",
    "diagnosis_yes": [
      "Possible condition related to freckles"
    ],
    "diagnosis_no": [
      "Minor or temporary freckles"
    ]
  },
  {
    "id": 207,
    "name": "Moles",
    "question": "Do you often experience moles?",
    "diagnosis_yes": [
      "Possible condition related to moles"
    ],
    "diagnosis_no": [
      "Minor or temporary moles"
    ]
  },
  {
    "id": 208,
    "name": "Skin peeling",
    "question": "Do you often experience skin peeling?",
    "diagnosis_yes": [
      "Possible condition related to skin peeling"
    ],
    "diagnosis_no": [
      "Minor or temporary skin peeling"
    ]
  },
  {
    "id": 209,
    "name": "Nail discoloration",
    "question": "Do you often experience nail discoloration?",
    "diagnosis_yes": [
      "Possible condition related to nail discoloration"
    ],
    "diagnosis_no": [
      "Minor or temporary nail discoloration"
    ]
  },
  {
    "id": 210,
    "name": "Splitting nails",
    "question": "Do you often experience splitting nails?",
    "diagnosis_yes": [
      "Possible condition related to splitting nails"
    ],
    "diagnosis_no": [
      "Minor or temporary splitting nails"
    ]
  },
  {
    "id": 211,
    "name": "Dry scalp",
    "question": "Do you often experience dry scalp?",
    "diagnosis_yes": [
      "Possible condition related to dry scalp"
    ],
    "diagnosis_no": [
      "Minor or temporary dry scalp"
    ]
  },
  {
    "id": 212,
    "name": "Oily scalp",
    "question": "Do you often experience oily scalp?",
    "diagnosis_yes": [
      "Possible condition related to oily scalp"
    ],
    "diagnosis_no": [
      "Minor or temporary oily scalp"
    ]
  },
  {
    "id": 213,
    "name": "Scalp sores",
    "question": "Do you often experience scalp sores?",
    "diagnosis_yes": [
      "Possible condition related to scalp sores"
    ],
    "diagnosis_no": [
      "Minor or temporary scalp sores"
    ]
  },
  {
    "id": 214,
    "name": "Ear discharge",
    "question": "Do you often experience ear discharge?",
    "diagnosis_yes": [
      "Possible condition related to ear discharge"
    ],
    "diagnosis_no": [
      "Minor or temporary ear discharge"
    ]
  },
  {
    "id": 215,
    "name": "Breast swelling",
    "question": "Do you often experience breast swelling?",
    "diagnosis_yes": [
      "Possible condition related to breast swelling"
    ],
    "diagnosis_no": [
      "Minor or temporary breast swelling"
    ]
  },
  {
    "id": 216,
    "name": "Back stiffness",
    "question": "Do you often experience back stiffness?",
    "diagnosis_yes": [
      "Possible condition related to back stiffness"
    ],
    "diagnosis_no": [
      "Minor or temporary back stiffness"
    ]
  },
  {
    "id": 217,
    "name": "Lump in breast",
    "question": "Do you often experience lump in breast?",
    "diagnosis_yes": [
      "Possible condition related to lump in breast"
    ],
    "diagnosis_no": [
      "Minor or temporary lump in breast"
    ]
  },
  {
    "id": 218,
    "name": "Groin pain",
    "question": "Do you often experience groin pain?",
    "diagnosis_yes": [
      "Possible condition related to groin pain"
    ],
    "diagnosis_no": [
      "Minor or temporary groin pain"
    ]
  },
  {
    "id": 219,
    "name": "Shooting pain",
    "question": "Do you often experience shooting pain?",
    "diagnosis_yes": [
      "Possible condition related to shooting pain"
    ],
    "diagnosis_no": [
      "Minor or temporary shooting pain"
    ]
  },
  {
    "id": 220,
    "name": "Radiating pain",
    "question": "Do you often experience radiating pain?",
    "diagnosis_yes": [
      "Possible condition related to radiating pain"
    ],
    "diagnosis_no": [
      "Minor or temporary radiating pain"
    ]
  },
  {
    "id": 221,
    "name": "Burning eyes",
    "question": "Do you often experience burning eyes?",
    "diagnosis_yes": [
      "Possible condition related to burning eyes"
    ],
    "diagnosis_no": [
      "Minor or temporary burning eyes"
    ]
  },
  {
    "id": 222,
    "name": "Frequent headaches",
    "question": "Do you often experience frequent headaches?",
    "diagnosis_yes": [
      "Possible condition related to frequent headaches"
    ],
    "diagnosis_no": [
      "Minor or temporary frequent headaches"
    ]
  },
  {
    "id": 223,
    "name": "Muscle twitching",
    "question": "Do you often experience muscle twitching?",
    "diagnosis_yes": [
      "Possible condition related to muscle twitching"
    ],
    "diagnosis_no": [
      "Minor or temporary muscle twitching"
    ]
  },
  {
    "id": 224,
    "name": "Restless legs",
    "question": "Do you often experience restless legs?",
    "diagnosis_yes": [
      "Possible condition related to restless legs"
    ],
    "diagnosis_no": [
      "Minor or temporary restless legs"
    ]
  },
  {
    "id": 225,
    "name": "Burning urination",
    "question": "Do you often experience burning urination?",
    "diagnosis_yes": [
      "Possible condition related to burning urination"
    ],
    "diagnosis_no": [
      "Minor or temporary burning urination"
    ]
  },
  {
    "id": 226,
    "name": "Frequent nightmares",
    "question": "Do you often experience frequent nightmares?",
    "diagnosis_yes": [
      "Possible condition related to frequent nightmares"
    ],
    "diagnosis_no": [
      "Minor or temporary frequent nightmares"
    ]
  },
  {
    "id": 227,
    "name": "Vivid dreams",
    "question": "Do you often experience vivid dreams?",
    "diagnosis_yes": [
      "Possible condition related to vivid dreams"
    ],
    "diagnosis_no": [
      "Minor or temporary vivid dreams"
    ]
  },
  {
    "id": 228,
    "name": "Difficulty waking",
    "question": "Do you often experience difficulty waking?",
    "diagnosis_yes": [
      "Possible condition related to difficulty waking"
    ],
    "diagnosis_no": [
      "Minor or temporary difficulty waking"
    ]
  },
  {
    "id": 229,
    "name": "Sudden sleepiness",
    "question": "Do you often experience sudden sleepiness?",
    "diagnosis_yes": [
      "Possible condition related to sudden sleepiness"
    ],
    "diagnosis_no": [
      "Minor or temporary sudden sleepiness"
    ]
  },
  {
    "id": 230,
    "name": "Involuntary movements",
    "question": "Do you often experience involuntary movements?",
    "diagnosis_yes": [
      "Possible condition related to involuntary movements"
    ],
    "diagnosis_no": [
      "Minor or temporary involuntary movements"
    ]
  },
  {
    "id": 231,
    "name": "Delayed speech",
    "question": "Do you often experience delayed speech?",
    "diagnosis_yes": [
      "Possible condition related to delayed speech"
    ],
    "diagnosis_no": [
      "Minor or temporary delayed speech"
    ]
  },
  {
    "id": 232,
    "name": "Speech loss",
    "question": "Do you often experience speech loss?",
    "diagnosis_yes": [
      "Possible condition related to speech loss"
    ],
    "diagnosis_no": [
      "Minor or temporary speech loss"
    ]
  },
  {
    "id": 233,
    "name": "Nail biting",
    "question": "Do you often experience nail biting?",
    "diagnosis_yes": [
      "Possible condition related to nail biting"
    ],
    "diagnosis_no": [
      "Minor or temporary nail biting"
    ]
  },
  {
    "id": 234,
    "name": "Teeth grinding",
    "question": "Do you often experience teeth grinding?",
    "diagnosis_yes": [
      "Possible condition related to teeth grinding"
    ],
    "diagnosis_no": [
      "Minor or temporary teeth grinding"
    ]
  },
  {
    "id": 235,
    "name": "Sore jaw",
    "question": "Do you often experience sore jaw?",
    "diagnosis_yes": [
      "Possible condition related to sore jaw"
    ],
    "diagnosis_no": [
      "Minor or temporary sore jaw"
    ]
  },
  {
    "id": 236,
    "name": "Cold intolerance",
    "question": "Do you often experience cold intolerance?",
    "diagnosis_yes": [
      "Possible condition related to cold intolerance"
    ],
    "diagnosis_no": [
      "Minor or temporary cold intolerance"
    ]
  },
  {
    "id": 237,
    "name": "Heat rash",
    "question": "Do you often experience heat rash?",
    "diagnosis_yes": [
      "Possible condition related to heat rash"
    ],
    "diagnosis_no": [
      "Minor or temporary heat rash"
    ]
  },
  {
    "id": 238,
    "name": "Skin sensitivity",
    "question": "Do you often experience skin sensitivity?",
    "diagnosis_yes": [
      "Possible condition related to skin sensitivity"
    ],
    "diagnosis_no": [
      "Minor or temporary skin sensitivity"
    ]
  },
  {
    "id": 239,
    "name": "Spots on tongue",
    "question": "Do you often experience spots on tongue?",
    "diagnosis_yes": [
      "Possible condition related to spots on tongue"
    ],
    "diagnosis_no": [
      "Minor or temporary spots on tongue"
    ]
  },
  {
    "id": 240,
    "name": "Swollen gums",
    "question": "Do you often experience swollen gums?",
    "diagnosis_yes": [
      "Possible condition related to swollen gums"
    ],
    "diagnosis_no": [
      "Minor or temporary swollen gums"
    ]
  },
  {
    "id": 241,
    "name": "Metallic taste",
    "question": "Do you often experience metallic taste?",
    "diagnosis_yes": [
      "Possible condition related to metallic taste"
    ],
    "diagnosis_no": [
      "Minor or temporary metallic taste"
    ]
  },
  {
    "id": 242,
    "name": "Ear ringing",
    "question": "Do you often experience ear ringing?",
    "diagnosis_yes": [
      "Possible condition related to ear ringing"
    ],
    "diagnosis_no": [
      "Minor or temporary ear ringing"
    ]
  },
  {
    "id": 243,
    "name": "Throat clearing",
    "question": "Do you often experience throat clearing?",
    "diagnosis_yes": [
      "Possible condition related to throat clearing"
    ],
    "diagnosis_no": [
      "Minor or temporary throat clearing"
    ]
  },
  {
    "id": 244,
    "name": "Throat tightness",
    "question": "Do you often experience throat tightness?",
    "diagnosis_yes": [
      "Possible condition related to throat tightness"
    ],
    "diagnosis_no": [
      "Minor or temporary throat tightness"
    ]
  },
  {
    "id": 245,
    "name": "Mucus in throat",
    "question": "Do you often experience mucus in throat?",
    "diagnosis_yes": [
      "Possible condition related to mucus in throat"
    ],
    "diagnosis_no": [
      "Minor or temporary mucus in throat"
    ]
  },
  {
    "id": 246,
    "name": "Bloody stool",
    "question": "Do you often experience bloody stool?",
    "diagnosis_yes": [
      "Possible condition related to bloody stool"
    ],
    "diagnosis_no": [
      "Minor or temporary bloody stool"
    ]
  },
  {
    "id": 247,
    "name": "Mucus in stool",
    "question": "Do you often experience mucus in stool?",
    "diagnosis_yes": [
      "Possible condition related to mucus in stool"
    ],
    "diagnosis_no": [
      "Minor or temporary mucus in stool"
    ]
  },
  {
    "id": 248,
    "name": "Stool odor",
    "question": "Do you often experience stool odor?",
    "diagnosis_yes": [
      "Possible condition related to stool odor"
    ],
    "diagnosis_no": [
      "Minor or temporary stool odor"
    ]
  },
  {
    "id": 249,
    "name": "Anal bleeding",
    "question": "Do you often experience anal bleeding?",
    "diagnosis_yes": [
      "Possible condition related to anal bleeding"
    ],
    "diagnosis_no": [
      "Minor or temporary anal bleeding"
    ]
  },
  {
    "id": 250,
    "name": "Hair thinning",
    "question": "Do you often experience hair thinning?",
    "diagnosis_yes": [
      "Possible condition related to hair thinning"
    ],
    "diagnosis_no": [
      "Minor or temporary hair thinning"
    ]
  },
  {
    "id": 251,
    "name": "Involuntary blinking",
    "question": "Do you often experience involuntary blinking?",
    "diagnosis_yes": [
      "Possible condition related to involuntary blinking"
    ],
    "diagnosis_no": [
      "Minor or temporary involuntary blinking"
    ]
  },
  {
    "id": 252,
    "name": "Sudden fear",
    "question": "Do you often experience sudden fear?",
    "diagnosis_yes": [
      "Possible condition related to sudden fear"
    ],
    "diagnosis_no": [
      "Minor or temporary sudden fear"
    ]
  },
  {
    "id": 253,
    "name": "Feeling detached",
    "question": "Do you often experience feeling detached?",
    "diagnosis_yes": [
      "Possible condition related to feeling detached"
    ],
    "diagnosis_no": [
      "Minor or temporary feeling detached"
    ]
  },
  {
    "id": 254,
    "name": "Lack of emotion",
    "question": "Do you often experience lack of emotion?",
    "diagnosis_yes": [
      "Possible condition related to lack of emotion"
    ],
    "diagnosis_no": [
      "Minor or temporary lack of emotion"
    ]
  },
  {
    "id": 255,
    "name": "Feeling overwhelmed",
    "question": "Do you often experience feeling overwhelmed?",
    "diagnosis_yes": [
      "Possible condition related to feeling overwhelmed"
    ],
    "diagnosis_no": [
      "Minor or temporary feeling overwhelmed"
    ]
  },
  {
    "id": 256,
    "name": "Sudden anger",
    "question": "Do you often experience sudden anger?",
    "diagnosis_yes": [
      "Possible condition related to sudden anger"
    ],
    "diagnosis_no": [
      "Minor or temporary sudden anger"
    ]
  },
  {
    "id": 257,
    "name": "Mood instability",
    "question": "Do you often experience mood instability?",
    "diagnosis_yes": [
      "Possible condition related to mood instability"
    ],
    "diagnosis_no": [
      "Minor or temporary mood instability"
    ]
  },
  {
    "id": 258,
    "name": "Speech delay",
    "question": "Do you often experience speech delay?",
    "diagnosis_yes": [
      "Possible condition related to speech delay"
    ],
    "diagnosis_no": [
      "Minor or temporary speech delay"
    ]
  },
  {
    "id": 259,
    "name": "Word repetition",
    "question": "Do you often experience word repetition?",
    "diagnosis_yes": [
      "Possible condition related to word repetition"
    ],
    "diagnosis_no": [
      "Minor or temporary word repetition"
    ]
  },
  {
    "id": 260,
    "name": "Loss of balance",
    "question": "Do you often experience loss of balance?",
    "diagnosis_yes": [
      "Possible condition related to loss of balance"
    ],
    "diagnosis_no": [
      "Minor or temporary loss of balance"
    ]
  },
  {
    "id": 261,
    "name": "Sensitivity to touch",
    "question": "Do you often experience sensitivity to touch?",
    "diagnosis_yes": [
      "Possible condition related to sensitivity to touch"
    ],
    "diagnosis_no": [
      "Minor or temporary sensitivity to touch"
    ]
  }
];

async function seedSymptoms() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    await Symptom.deleteMany({});
    console.log('🧹 Cleared existing symptom data');

    await Symptom.insertMany(symptoms);
    console.log(`✅ Inserted ${symptoms.length} symptoms`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Failed to seed symptoms:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

seedSymptoms();