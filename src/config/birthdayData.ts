export type MemoryItem = {
  id: number;
  image: string;
  title: string;
  message: string;
};

export type QuestionItem = {
  id: number;
  question: string;
  answer: string;
  image?: string;
};

export type TimelineItem = {
  id: number;
  date: string;
  title: string;
  description: string;
  image?: string;
};

const herName = 'Soma';
const senderName = 'Aniket';

export const birthdayData = {
  herName,
  senderName,
  language: 'en',
  birthdayMessage: 'Happy Birthday, My Love!',
  // Place one audio file per chapter in public/music and set its path here.
  chapterMusic: [
    { title: 'Birthday Surprise', src: '/music/birthday-song.mp3' },
    { title: 'Our Memories', src: '/music/memories.mp3' },
    { title: 'Do You Remember?', src: '/music/remember.mp3' },
    { title: 'Our Journey', src: '/music/journey.wav' },
    { title: 'Our Future', src: '/music/future.wav' },
    { title: 'Love Letter', src: '/music/love-letter.wav' },
  ],
  // Replace this sample with a photo in public/images when ready.
  heroImage: '/images/birthday-portrait.jpeg',
  heroImageAlt: 'Illustrated sample portrait placeholder; replace with her photo',
  theme: 'romantic',
  memories: [
    {
      id: 1,
      image: '/images/1.jpg',
      title: 'Our Beautiful Beginning',
      message: 'Some people enter our lives and make everything more beautiful.',
    },
    {
      id: 2,
      image: '/images/2.jpg',
      title: 'A Moment to Remember',
      message: 'I wish I could pause time whenever I am with you.',
    },
    {
      id: 3,
      image: '/images/3.jpg',
      title: 'My Favourite Person',
      message: 'Among all the beautiful things in this world, you will always be my favourite.',
    },
    {
      id: 4,
      image: '/images/4.jpg',
      title: 'Our Story Continues',
      message: 'Every chapter with you is worth remembering.',
    },
  ],
  questions: [
    {
      id: 1,
      question: 'Do you remember our first conversation?',
      answer: 'It felt like the beginning of a love story I never wanted to end.',
      image: '/images/03_1.jpg',
    },
    {
      id: 2,
      question: 'Remember that day when we could not stop laughing?',
      answer: 'Even the smallest moments with you turned into memories I treasure more than gold.',
      image: '/images/03_2.jpg',
    },
    {
      id: 3,
      question: 'Do you remember our favourite little moment?',
      answer: 'That quiet, beautiful moment felt like the whole world had paused just for us.',
      image: '/images/03_3.jpg',
    },
    {
      id: 4,
      question: 'Remember the moment when everything felt special?',
      answer: 'That was the moment I realized how deeply you had become a part of my heart.',
      image: '/images/03_4.jpg',
    },
  ],
  timeline: [
    {
      id: 1,
      date: 'The Day We Met',
      title: 'Our First Hello',
      description: 'The moment our story began, and the first spark of something unforgettable.',
      image: '/images/03_4.jpg',
    },
    {
      id: 2,
      date: 'Our First Conversation',
      title: 'A Beautiful Beginning',
      description: 'Hours vanished and every word felt like a soft promise of something deeper.',
      image: '/images/memory-02.svg',
    },
    {
      id: 3,
      date: 'Our First Special Outing',
      title: 'A Memory to Keep',
      description: 'The kind of day that makes your heart feel full without even trying.',
      image: '/images/memory-03.svg',
    },
    {
      id: 4,
      date: 'Our Favourite Memory',
      title: 'The One I Cherish Most',
      description: 'A beautiful chapter in our story that still makes me smile when I think of it.',
      image: '/images/memory-04.svg',
    },
    {
      id: 5,
      date: 'The Future We Dream Of',
      title: 'A Life Together',
      description: 'The moment we chose to build a future with love, trust, laughter, and tenderness.',
      image: '/images/memory-01.svg',
    },
  ],
  futureMessages: [
    'Life won\'t always be perfect...',
    'But I want to face every season of life with you.',
    'I want to celebrate your happiness.',
    'I want to stand beside you on difficult days.',
    'I want us to grow, learn, laugh, and build something beautiful together.',
    'And most importantly, I want to keep choosing you, every single day.',
    'Because my favourite future is the one that has you in it.',
  ],
  finalLetter: `

Happy Birthday, my love!

I do not know if words will ever be enough to express how much you mean to me.

Today, I just want to remind you how special you are and how grateful I am to have you in my life.

As we move towards a new chapter together, I do not promise a perfect life, but I promise that I will always try to make our journey beautiful.

I want to celebrate your dreams, support your ambitions, share your happiness, and stand beside you through every challenge.

I look forward to all the little things we have not experienced yet, all the memories we have not created, and all the beautiful chapters waiting for us.

I hope your birthday is as beautiful as the happiness you bring into my life.

Happy Birthday, My Future Wife.

Forever Yours,
${senderName} ❤️`,
};
