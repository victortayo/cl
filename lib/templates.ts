export type Template = {
  id: string;
  title: string;
  specialty: string;
  clinic: string;
  conditions: string[];
  symptoms: string[];
  content: string;
  contributor: string;
  lastModified: string;
};

export const templates: Template[] = [
  {
    id: "hypertensive-emergency-pulmonary-oedema",
    title: "Hypertensive Emergency with Acute Pulmonary Oedema",
    specialty: "internal-medicine",
    clinic: "medical-emergencies",
    conditions: ["Hypertensive emergency", "Acute pulmonary oedema", "Hypertensive heart disease"],
    symptoms: ["severe headache", "blurring of vision", "difficulty in breathing", "orthopnoea", "paroxysmal nocturnal dyspnoea"],
    content: `A 58-year-old male civil servant who resides in Abeokuta presented to the Emergency Unit on account of

severe headache × 6 hours
blurring of vision × 4 hours
difficulty in breathing × 2 hours

He was apparently well until about 6 hours prior to presentation when he developed a sudden onset frontal headache described as severe, throbbing, non-radiating, with a pain score of 9/10 and no known relieving factors. This was associated with dizziness and blurring of vision.
About 2 hours prior to presentation, he developed acute breathlessness initially on minimal exertion and later at rest, associated with orthopnoea and paroxysmal nocturnal dyspnoea. There was no associated chest pain, cough, hemoptysis or fever.
There was associated restlessness but no loss of consciousness, seizures, slurred speech or focal limb weakness.
There was no vomiting, neck stiffness or photophobia.

He is a known hypertensive of about 8 years duration with poor drug compliance. He stopped taking his antihypertensive medications about 3 months ago because he felt well. Medications previously used include amlodipine and hydrochlorothiazide. The doses could not be ascertained.
He is not a known diabetic and has no previous history of stroke, chronic kidney disease or heart failure
There are no symptoms suggestive of renal decompensation such as oliguria, facial puffiness, or frothy urine
He does not smoke cigarettes.
He takes alcohol occasionally.
He does not use herbal concoctions.
There is no known drug or food allergy.

Admitting vitals were
BP 228/138 mmHg
PR 112 bpm
RR 32 cpm
SpO₂ 92 % on room air
RBS 118 mg/dl

O/E
A middle-aged man, conscious but restless, in obvious respiratory distress with tachypnoea. Afebrile, not pale, anicteric, acyanosed, mildly diaphoretic, not dehydrated, no pedal oedema.

CVS
PR 112 bpm, regular, full volume
TAW+
LCB+
BP 220/134 mmHg (MAP ≈ 163 mmHg)
JVP mildly elevated
apex beat at 6th left intercostal space, lateral to mid-clavicular line
heart sounds S1, S2 with loud A2 and S3

Chest 
RR 32 cpm
trachea central
reduced bilateral chest expansion
vesicular breath sounds with widespread fine crepitations, worse at lung bases
SpO₂ 96% on INO2 at 6 L/min

Abdomen
full, moves with respiration
no area of tenderness
liver palpably enlarged 4 cm below right costal margin, non-tender
no splenomegaly
no demonstrable ascites

Neuro
conscious and alert
oriented in time, place and person
pupils 3 mm bilaterally, reactive to light
no focal neurological deficit
power full in all limbs
reflexes normal

ASSESSMENT
Hypertensive emergency
Acute pulmonary oedema
Hypertensive heart disease

PLAN
Nurse patient in 45-degree head-up position
Supplemental oxygen via nasal prongs at 6–8 L/min
IV furosemide 40 mg stat, then 20 mg 12-hourly
IV labetalol 20 mg slow bolus over 10 minutes, repeat based on BP response
Close BP monitoring every 15–30 minutes initially
Insert urinary catheter 
Strict input and output monitoring
Urgent ECG
Chest X-ray
Echocardiography
Full blood count
EUCr
Urinalysis
Fasting blood sugar and HbA1c
Lipid profile
Liver function tests
Cardiac enzymes
Tab amlodipine 10 mg daily
Tab telmisartan 80 mg daily
Tab atorvastatin 20 mg nocte
Tab aspirin 75 mg daily`,
    contributor: "Admin",
    lastModified: "2024-05-20"
  }
];
