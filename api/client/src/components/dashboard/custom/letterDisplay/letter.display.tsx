import React, { useEffect, useState } from 'react';

interface LetterDisplayProps {
  text: string;
  delay: number; // Délai en millisecondes entre chaque lettre
}

const LetterDisplay: React.FC<LetterDisplayProps> = ({ text, delay }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); // Réinitialiser le texte affiché lors du changement de 'text'
    if (!text) return; // Si le texte est vide ou undefined, ne rien faire

    const intervalId = setInterval(() => {
      setDisplayedText((prev) => {
        // Si toutes les lettres sont affichées, arrêter l'intervalle
        if (prev.length === text.length) {
          clearInterval(intervalId);
          return prev;
        }
        // Ajouter la lettre suivante au texte affiché
        return text.substr(0, prev.length + 1);
      });
    }, delay);

    // Nettoyer l'intervalle lorsque le composant est démonté ou le texte change
    return () => clearInterval(intervalId);
  }, [text, delay]);

  return <div>{displayedText}</div>;
};

export default LetterDisplay;
