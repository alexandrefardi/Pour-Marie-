// ─────────────────────────────────────────────────────────────
//  DONNÉES DU QUIZ — à remplir à partir du document de révision
// ─────────────────────────────────────────────────────────────

const QUIZ_CONFIG = {
  title:       "Quiz de Révision",
  description: "Testez vos connaissances !",
  // Nombre de questions à tirer aléatoirement (null = toutes)
  pickRandom:  null,
  // Mélanger l'ordre des questions ?
  shuffle:     true,
};

// Format d'une question :
// {
//   category:    "Nom du chapitre",          // optionnel
//   question:    "Texte de la question ?",
//   answers:     ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
//   correct:     0,                          // index de la bonne réponse (0 = A)
//   explanation: "Explication de la bonne réponse.", // optionnel
// }

const QUIZ_DATA = [
  // ── Exemple 1 ──────────────────────────────────────────────
  {
    category:    "Exemple",
    question:    "Quelle est la capitale de la France ?",
    answers:     ["Lyon", "Marseille", "Paris", "Bordeaux"],
    correct:     2,
    explanation: "Paris est la capitale et la plus grande ville de France.",
  },
  // ── Exemple 2 ──────────────────────────────────────────────
  {
    category:    "Exemple",
    question:    "Combien font 7 × 8 ?",
    answers:     ["54", "56", "64", "48"],
    correct:     1,
    explanation: "7 multiplié par 8 est égal à 56.",
  },
];
