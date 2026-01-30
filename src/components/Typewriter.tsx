import React, { useState, useEffect } from 'react';

interface TypewriterProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    delayBetweenWords?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
    words,
    typingSpeed = 100,
    deletingSpeed = 50,
    delayBetweenWords = 2000,
}) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const currentFullWord = words[currentWordIndex];

            if (!isDeleting) {
                // Typing
                setCurrentText(currentFullWord.substring(0, currentText.length + 1));

                if (currentText === currentFullWord) {
                    // Finished typing word, wait before deleting
                    setTimeout(() => setIsDeleting(true), delayBetweenWords);
                }
            } else {
                // Deleting
                setCurrentText(currentFullWord.substring(0, currentText.length - 1));

                if (currentText === '') {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

    return (
        <span className="relative">
            {currentText}
            <span className="ml-1 border-r-4 border-primary animate-pulse h-full"></span>
        </span>
    );
};

export default Typewriter;
