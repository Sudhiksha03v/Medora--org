export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-rohini.png",
    name: "Dr. Rohini Sharma – Consultant Dermatologist, MBBS, MD",
  },
  {
    image: "/assets/images/dr-richard.png",
    name: "Dr. Richard Daniel – Senior Cardiologist, MD, DM",
  },
  {
    image: "/assets/images/dr-neha.png",
    name: "Dr. Neha Singhania – Obstetrician and Gynecologist, MBBS, MS",
  },
  {
    image: "/assets/images/dr-roshni.png",
    name: "Dr. Roshni Aravind Pillai – Pediatric Surgeon, MBBS, MS, MCh",
  },
  {
    image: "/assets/images/dr-niveditha.png",
    name: "Dr. Niveditha Srinivasan – Neurologist, MD, DM",
  },
  {
    image: "/assets/images/dr-nandini.png",
    name: "Dr. Nandini Ramaswamy – Endocrinologist, MBBS, MD, DM",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Dr. Leila Cameron – Orthopedic Specialist, MBBS, MS",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Dr. David Ryan Livingston – Gastroenterologist, MD, DM",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Dr. Peter Robberts Evan – Clinical Psychologist, PhD",
  },
  {
    image: "/assets/images/dr-maya.png",
    name: "Dr. Maya Devanshi Parekh – Oncologist, MBBS, MD, DM",
  },
  {
    image: "/assets/images/dr-sandra.png",
    name: "Dr. Sandra Alyssa Cruz – Ophthalmologist, MBBS, MS" ,
  },
  {
    image: "/assets/images/dr-harsha.png",
    name: "Dr. Harsha Venkatesh – Pulmonologist, MBBS, MD",
  },
  {
    image: "/assets/images/dr-varun.png",
    name: "Dr. Varun Ghosh – Psychiatrist, MBBS, MD",
  },
  {
    image: "/assets/images/dr-jagannath.png",
    name: "Dr. Jagannath Mishra – Urologist, MBBS, MS, MCh",
  },

  {
    image: "/assets/images/dr-lakshmi.png",
    name: "Dr. Lakshmi Narayanan – Nephrologist, MD, DM",
  },
  {
    image: "/assets/images/dr-leela.png",
    name: "Dr. Leela Raghavan – Rheumatologist, MBBS, MD",
  },
  {
    image: "/assets/images/dr-rishabh.png",
    name: "Dr. Rishabh Kulkarni – Radiologist, MBBS, MD",
  },
  {
    image: "/assets/images/dr-savitri.png",
    name: "Dr. Savitri Joshi Parekh – General Physician, MBBS, MD",
  },
  {
    image: "/assets/images/dr-shankar.png",
    name: "Dr. Shankar Raghunandan Iyer – ENT Specialist, MBBS, MS",
  },
  {
    image: "/assets/images/dr-vivek.png",
    name: "Dr. Vivek Mittal – Pediatrician, MBBS, MD",
  }, 
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};