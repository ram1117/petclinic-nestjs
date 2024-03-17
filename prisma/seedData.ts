export const petType = [
  { type: 'Dog' },
  { type: 'Cat' },
  { type: 'Reptile' },
  { type: 'Bird' },
  { type: 'Others' },
];

export const vetData = [
  {
    id: '3f36a3c6-6c1e-4934-b13a-8b048342bf61',
    name: 'Dr. Emily Smith',
    degree: 'DVM',
    experience: 8,
    about:
      'Dr. Emily Smith is a passionate veterinarian with 8 years of experience. She specializes in small animal medicine and surgery.',
  },
  {
    id: '9f4e0a29-e8a4-4dbf-af7c-ff5aece0b3e7',
    name: 'Dr. Michael Johnson',
    degree: 'BVSc',
    experience: 12,
    about:
      'Dr. Michael Johnson has 12 years of experience in veterinary medicine. He has a keen interest in large animal health and welfare.',
  },
  {
    id: '764d5c72-0e7c-4cb5-b2e1-d810e051c22b',
    name: 'Dr. Samantha Lee',
    degree: 'VMD',
    experience: 10,
    about:
      'With 10 years of experience, Dr. Samantha Lee is dedicated to providing compassionate care to all animals. She has expertise in emergency and critical care.',
  },
  {
    id: 'a49724c2-89dc-4621-b422-f0b76f94354d',
    name: 'Dr. David Martinez',
    degree: 'DVM',
    experience: 6,
    about:
      'Dr. David Martinez is a skilled veterinarian with 6 years of experience. He focuses on preventive medicine and client education.',
  },
  {
    id: 'd53ee96a-3db5-4960-8919-154e25bf73cc',
    name: 'Dr. Jessica Wang',
    degree: 'BVetMed',
    experience: 15,
    about:
      'Dr. Jessica Wang brings 15 years of experience to her practice. She is committed to promoting animal welfare and has a special interest in exotic pets.',
  },
];

export const treatmentData = [
  {
    title: 'Annual Wellness Exam',
    description:
      'Comprehensive physical examination including weight check, dental evaluation, and vaccinations for common diseases.',
    price: 75.0,
    doctors: [vetData[0], vetData[1], vetData[3]],
  },
  {
    title: 'Dental Cleaning',
    description:
      'Professional cleaning to remove plaque and tartar buildup, including polishing and fluoride treatment.',
    price: 150.0,
    doctors: [vetData[0], vetData[3]],
  },

  {
    title: 'Chemotherapy',
    description:
      'Medical treatment for cancer, including administration of drugs to slow or stop the growth of cancer cells.',
    price: 500.0,
    doctors: [vetData[4]],
  },
  {
    title: 'Spaying/Neutering',
    description:
      'Surgical procedure to sterilize pets, preventing unwanted litters and providing health benefits.',
    price: 250.0,
    doctors: [vetData[1], vetData[2]],
  },
  {
    title: 'Orthopedic Surgery',
    description:
      'Surgical correction of bone and joint problems, including fractures, ligament tears, and hip dysplasia.',
    price: 1000.0,
    doctors: [vetData[0], vetData[1], vetData[2]],
  },
];

const createDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toISOString();
};

export const slotsData = [
  {
    slot: createDate('2024-03-21 10:00'),
    doctorId: '3f36a3c6-6c1e-4934-b13a-8b048342bf61',
  },
  {
    slot: createDate('2024-03-21 08:00'),
    doctorId: '3f36a3c6-6c1e-4934-b13a-8b048342bf61',
  },
  {
    slot: createDate('2024-03-21 14:00'),
    doctorId: '3f36a3c6-6c1e-4934-b13a-8b048342bf61',
  },
  {
    slot: createDate('2024-03-20 14:00'),
    doctorId: '9f4e0a29-e8a4-4dbf-af7c-ff5aece0b3e7',
  },
  {
    slot: createDate('2024-03-20 08:00'),
    doctorId: '9f4e0a29-e8a4-4dbf-af7c-ff5aece0b3e7',
  },
  {
    slot: createDate('2024-03-20 14:00'),
    doctorId: '9f4e0a29-e8a4-4dbf-af7c-ff5aece0b3e7',
  },
];

export const workDays = [
  { doctorId: '3f36a3c6-6c1e-4934-b13a-8b048342bf61', days: [1, 3] },
  { doctorId: '9f4e0a29-e8a4-4dbf-af7c-ff5aece0b3e7', days: [2, 4] },
  { doctorId: '764d5c72-0e7c-4cb5-b2e1-d810e051c22b', days: [3, 4] },
  { doctorId: 'a49724c2-89dc-4621-b422-f0b76f94354d', days: [2, 5] },
  { doctorId: 'd53ee96a-3db5-4960-8919-154e25bf73cc', days: [1, 5] },
];
