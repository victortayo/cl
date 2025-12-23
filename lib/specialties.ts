export type Clinic = {
  name: string;
  id: string;
};

export type Specialty = {
  name: string;
  id: string;
  clinics: Clinic[];
};

export const specialties: Specialty[] = [
  {
    name: "Pediatrics",
    id: "pediatrics",
    clinics: [
      { name: "Children Emergencies", id: "pediatric-emergencies" },
      { name: "Pediatric Outpatient", id: "pediatric-outpatient" },
      { name: "Pediatric Neuro Clinic", id: "pediatric-neuro" },
      { name: "Pediatric Nephrology Clinic", id: "pediatric-nephrology" },
      { name: "Pediatric Hematooncology Clinic", id: "pediatric-hematooncology" },
      { name: "Pediatric Cardiorespiratory Clinic", id: "pediatric-cardiorespiratory" },
      { name: "Neonatology", id: "neonatology" },
    ],
  },
  {
    name: "Internal Medicine",
    id: "internal-medicine",
    clinics: [
      { name: "Medical Emergencies", id: "medical-emergencies" },
      { name: "Cardiology Clinic", id: "cardiology" },
      { name: "Endocrinology Clinic", id: "endocrinology" },
      { name: "Gastroenterology Clinic", id: "gastroenterology" },
      { name: "Nephro Clinic", id: "nephro" },
      { name: "Neurology", id: "neurology" },
      { name: "Pulmonology Clinic", id: "pulmonology" },
      { name: "Dermatology Clinic", id: "dermatology" },
      { name: "Infectious Disease Clinic", id: "infectious-disease" },
    ],
  },
  {
    name: "Obstetrics and Gynecology",
    id: "ob-gyn",
    clinics: [
      { name: "Gynecological Emergencies", id: "gyn-emergencies" },
      { name: "Gynecology Clinic", id: "gynecology" },
      { name: "Labor Ward", id: "labor-ward" },
      { name: "Antenatal Clinic", id: "antenatal" },
      { name: "Postnatal Clinic", id: "postnatal" },
    ],
  },
  {
    name: "Surgery",
    id: "surgery",
    clinics: [
      { name: "Surgical Emergencies", id: "surgical-emergencies" },
      { name: "General Surgery Clinic", id: "general-surgery" },
      { name: "Urology Clinic", id: "urology" },
      { name: "Orthopedic Clinic", id: "orthopedic" },
      { name: "Cardiothoracic Surgery Clinic", id: "cardiothoracic" },
      { name: "Pediatric Surgery Clinic", id: "pediatric-surgery" },
      { name: "Neurosurgery Clinic", id: "neurosurgery" },
    ],
  },
];
