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
    { title: 'Our Journey', src: '/music/journey.mp3' },
    { title: 'Our Future', src: '/music/future.mp3' },
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
      image: '/images/04_01.jpg',
    },
    {
      id: 2,
      date: 'Our First Conversation',
      title: 'A Beautiful Beginning',
      description: 'Hours vanished and every word felt like a soft promise of something deeper.',
      image: '/images/04_02.jpg',
    },
    {
      id: 3,
      date: 'Our First Special Outing',
      title: 'A Memory to Keep',
      description: 'The kind of day that makes your heart feel full without even trying.',
      image: '/images/04_03.jpg',
    },
    {
      id: 4,
      date: 'Our Favourite Memory',
      title: 'The One I Cherish Most',
      description: 'A beautiful chapter in our story that still makes me smile when I think of it.',
      image: '/images/04_04.jpg',
    },
    {
      id: 5,
      date: 'The Future We Dream Of',
      title: 'A Life Together',
      description: 'The moment we chose to build a future with love, trust, laughter, and tenderness.',
      image: '/images/04_05.jpg',
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

I don't really know where to start, or how to put everything I feel for you into words. Sometimes I have so much to say, but when it comes to expressing it, I just don't know how.

But today is your day, and I don't want it to pass without telling you how much you mean to me.

I'm genuinely happy that you're a part of my life. And honestly, when I think about our future, I get excited about the smallest things. The little moments, the silly arguments, laughing together over nothing, making plans, changing those plans, and just having each other around.

I know life won't always be easy. We might have difficult days, disagreements, and moments when things don't go as planned. But one thing I want you to know is that I want to face all of it with you. I don't promise to be perfect, but I'll always try to be someone you can count on.

I want to see you achieve everything you've ever dreamed of. I want to be there when you're happy, when you're worried, when you succeed, and even when things don't work out. I want us to grow together, learn from each other, and make a life that feels like ours.

There's still so much waiting for us. So many places to visit, things to try, memories to make, and little moments that we haven't even imagined yet. And I honestly can't wait to experience all of that with you.

I don't know exactly what the future has planned for us, but I know one thing — I'm looking forward to it, because I get to share it with you.

I hope this birthday brings you lots of happiness, smiles, and everything your heart wishes for. You deserve all the good things in life.

And one last thing... I'm really looking forward to the day when I won't have to call you my future wife anymore.

Happy Birthday, My Future Wife.

Forever Yours,
${senderName} ❤️`,
};
