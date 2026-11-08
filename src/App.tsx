import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { ChapterNavigation } from './components/ChapterNavigation';
import { FooterNavigation } from './components/FooterNavigation';
import { FutureMessages } from './components/FutureMessages';
import { LoveLetter } from './components/LoveLetter';
import { MemoryGallery } from './components/MemoryGallery';
import { MemoryQuiz } from './components/MemoryQuiz';
import { Timeline } from './components/Timeline';
import { WelcomeScreen } from './components/WelcomeScreen';
import { birthdayData } from './config/birthdayData';
import { useBackgroundMusic } from './hooks/useBackgroundMusic';

const chapterNames = ['Welcome', 'Memories', 'Remember', 'Journey', 'Future', 'Letter'];

function App() {
  const [chapter, setChapter] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [completedChapters, setCompletedChapters] = useState<Record<number, boolean>>({ 0: false });
  const currentMusic = birthdayData.chapterMusic[chapter];
  const { isPlaying, play } = useBackgroundMusic(currentMusic?.src ?? '');

  const markChapterComplete = (chapterIndex: number) => {
    setCompletedChapters((current) => ({ ...current, [chapterIndex]: true }));
  };

  const selectChapter = (next: number) => {
    if (next < 0 || next >= chapterNames.length || next === chapter || isTransitioning) {
      return;
    }

    if (next > chapter && !completedChapters[chapter]) {
      return;
    }

    setIsTransitioning(true);
    window.setTimeout(() => {
      setChapter(next);
      setIsTransitioning(false);
    }, 220);
  };

  const startJourney = async () => {
    if (isTransitioning) {
      return;
    }

    markChapterComplete(0);
    setIsTransitioning(true);
    window.setTimeout(() => {
      setChapter(1);
      setIsTransitioning(false);
    }, 220);
  };

  const replayStory = async () => {
    setChapter(0);
    setCompletedChapters({ 0: false });
    if (!isPlaying) {
      await play();
    }
  };

  const chapterContent = () => {
    switch (chapter) {
      case 0:
        return (
          <WelcomeScreen
            herName={birthdayData.herName}
            birthdayMessage={birthdayData.birthdayMessage}
            heroImage={birthdayData.heroImage}
            heroImageAlt={birthdayData.heroImageAlt}
            onSurprisePop={() => { void play(); }}
            onStart={startJourney}
          />
        );
      case 1:
        return (
          <MemoryGallery
            memories={birthdayData.memories}
            onContinue={() => {
              markChapterComplete(1);
              selectChapter(2);
            }}
          />
        );
      case 2:
        return (
          <MemoryQuiz
            questions={birthdayData.questions}
            onContinue={() => {
              markChapterComplete(2);
              selectChapter(3);
            }}
          />
        );
      case 3:
        return (
          <Timeline
            timeline={birthdayData.timeline}
            onContinue={() => {
              markChapterComplete(3);
              selectChapter(4);
            }}
          />
        );
      case 4:
        return (
          <FutureMessages
            messages={birthdayData.futureMessages}
            onContinue={() => {
              markChapterComplete(4);
              selectChapter(5);
            }}
          />
        );
      case 5:
        return (
          <LoveLetter
            finalLetter={birthdayData.finalLetter}
            herName={birthdayData.herName}
            senderName={birthdayData.senderName}
            onReplay={replayStory}
          />
        );
      default:
        return (
          <WelcomeScreen
            herName={birthdayData.herName}
            birthdayMessage={birthdayData.birthdayMessage}
            heroImage={birthdayData.heroImage}
            heroImageAlt={birthdayData.heroImageAlt}
            onSurprisePop={() => { void play(); }}
            onStart={startJourney}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#120912] text-white">
      <div className="mx-auto max-w-7xl px-3 py-4 sm:px-6">
        <ChapterNavigation
          current={chapter}
          total={chapterNames.length}
          onSelect={selectChapter}
          completedChapters={completedChapters}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.main
          key={chapter}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          {chapterContent()}
        </motion.main>
      </AnimatePresence>

      <div className="mx-auto max-w-7xl px-3 pb-8 sm:px-6">
        <FooterNavigation
          chapter={chapter}
          totalChapters={chapterNames.length}
          onSelect={selectChapter}
          canAdvance={!!completedChapters[chapter]}
        />
      </div>

    </div>
  );
}

export default App;
