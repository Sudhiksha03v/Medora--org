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
    image: "/assets/images/dr-green.png",
    name: "John Green",
    specialty: "General Practitioner",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Leila Cameron",
    specialty: "Cardiologist",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "David Livingston",
    specialty: "Orthopedic Surgeon",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Evan Peter",
    specialty: "Neurologist",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Jane Powell",
    specialty: "Pediatrician",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Alex Ramirez",
    specialty: "Radiologist",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine Lee",
    specialty: "Dermatologist",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Cruz",
    specialty: "OB-GYN",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
    specialty: "Endocrinologist",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Richard Daniel",
    specialty: "Senior Cardiologist, MD, DM",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Neha Singhania",
    specialty: "Obstetrician and Gynecologist, MBBS, MS",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Roshni Aravind Pillai",
    specialty: "Pediatric Surgeon, MBBS, MS, MCh",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Lakshmi Narayanan",
    specialty: "Nephrologist, MD, DM",
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