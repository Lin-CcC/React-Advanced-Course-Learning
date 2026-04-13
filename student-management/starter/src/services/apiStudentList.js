import { faker } from '@faker-js/faker';
const mockStudentList = [
  {
    id: 1,
    name: 'Liam Chen',
    class: 'Class A',
    subject: 'Mathematics',
    semester: '2024 Fall',
    score: 91,
  },
  {
    id: 2,
    name: 'Emma Zhang',
    class: 'Class B',
    subject: 'English',
    semester: '2024 Fall',
    score: 87,
  },
  {
    id: 3,
    name: 'Noah Wang',
    class: 'Class A',
    subject: 'Physics',
    semester: '2024 Spring',
    score: 84,
  },
  {
    id: 4,
    name: 'Olivia Liu',
    class: 'Class C',
    subject: 'Chemistry',
    semester: '2024 Fall',
    score: 89,
  },
  {
    id: 5,
    name: 'William Zhao',
    class: 'Class B',
    subject: 'Biology',
    semester: '2024 Spring',
    score: 76,
  },
  {
    id: 6,
    name: 'Sophia Sun',
    class: 'Class A',
    subject: 'History',
    semester: '2024 Fall',
    score: 93,
  },
  {
    id: 7,
    name: 'James Li',
    class: 'Class C',
    subject: 'Geography',
    semester: '2024 Spring',
    score: 81,
  },
  {
    id: 8,
    name: 'Isabella Zhou',
    class: 'Class B',
    subject: 'Mathematics',
    semester: '2024 Fall',
    score: 95,
  },
  {
    id: 9,
    name: 'Benjamin Xu',
    class: 'Class A',
    subject: 'English',
    semester: '2024 Spring',
    score: 88,
  },
  {
    id: 10,
    name: 'Mia Huang',
    class: 'Class C',
    subject: 'Physics',
    semester: '2024 Fall',
    score: 90,
  },
];
export function getStudentList() {
  return mockStudentList.map((student) => {
    return {
      ...student,
      avatar: faker.image.avatar(),
    };
  });
}
