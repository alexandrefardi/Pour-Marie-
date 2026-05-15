const QUIZ_CONFIG = {
  title:       "CFA Level 1 — Quantitative Methods & Economics",
  description: "50 questions couvrant l'intégralité du module : Time Value of Money, Statistiques, Probabilités, Distributions, Tests d'hypothèse, Régression, Micro et Macroéconomie, Commerce international.",
  pickRandom:  null,
  shuffle:     true,
};

const QUIZ_DATA = [

  // ══════════════════════════════════════════
  //  TIME VALUE OF MONEY
  // ══════════════════════════════════════════
  {
    category: "Time Value of Money",
    question: "Un investisseur dépose 5 000 $ aujourd'hui dans un compte rémunéré à 6 % par an, capitalisé trimestriellement. Quelle est la valeur du compte après 3 ans ?",
    answers:  ["5 955,08 $", "5 970,26 $", "5 978,09 $", "6 050,00 $"],
    correct:  2,
    explanation: "FV = 5 000 × (1 + 0,06/4)^(4×3) = 5 000 × (1,015)^12 = 5 000 × 1,19562 ≈ 5 978,09 $.",
  },
  {
    category: "Time Value of Money",
    question: "Quelle est la valeur actuelle de 10 000 $ à recevoir dans 5 ans, actualisée à un taux annuel de 8 % ?",
    answers:  ["6 805,83 $", "6 710,08 $", "7 350,26 $", "6 500,00 $"],
    correct:  0,
    explanation: "PV = 10 000 / (1,08)^5 = 10 000 / 1,46933 ≈ 6 805,83 $.",
  },
  {
    category: "Time Value of Money",
    question: "Une rente verse 2 000 $ à la fin de chaque année pendant 4 ans. Avec un taux d'actualisation de 5 %, la valeur actuelle est la plus proche de :",
    answers:  ["6 843,43 $", "7 091,90 $", "7 454,60 $", "8 000,00 $"],
    correct:  1,
    explanation: "PV = 2 000 × [1 − (1,05)^−4] / 0,05 = 2 000 × 3,546 ≈ 7 091,90 $.",
  },
  {
    category: "Time Value of Money",
    question: "Quel est le taux annuel effectif (EAR) correspondant à un taux nominal de 12 % capitalisé mensuellement ?",
    answers:  ["12,00 %", "12,36 %", "12,68 %", "12,90 %"],
    correct:  2,
    explanation: "EAR = (1 + 0,12/12)^12 − 1 = (1,01)^12 − 1 ≈ 12,68 %.",
  },
  {
    category: "Time Value of Money",
    question: "Un investisseur souhaite disposer de 100 000 $ dans 10 ans. Si le compte rapporte 7 % par an, combien doit-il déposer aujourd'hui ?",
    answers:  ["50 834,93 $", "47 500,00 $", "52 677,80 $", "45 000,00 $"],
    correct:  0,
    explanation: "PV = 100 000 / (1,07)^10 = 100 000 / 1,9672 ≈ 50 834,93 $.",
  },

  // ══════════════════════════════════════════
  //  STATISTIQUES DESCRIPTIVES
  // ══════════════════════════════════════════
  {
    category: "Statistiques descriptives",
    question: "Quelle mesure de tendance centrale est la PLUS appropriée lorsque la distribution contient des valeurs extrêmes (outliers) ?",
    answers:  ["Moyenne arithmétique", "Médiane", "Mode", "Moyenne géométrique"],
    correct:  1,
    explanation: "La médiane est insensible aux valeurs extrêmes, contrairement à la moyenne arithmétique qui en est fortement influencée.",
  },
  {
    category: "Statistiques descriptives",
    question: "Un investissement a rapporté +10 %, −5 % et +20 % sur trois années consécutives. Le rendement moyen géométrique est le plus proche de :",
    answers:  ["8,33 %", "7,82 %", "6,67 %", "9,00 %"],
    correct:  1,
    explanation: "GM = (1,10 × 0,95 × 1,20)^(1/3) − 1 = (1,254)^(1/3) − 1 ≈ 7,82 %.",
  },
  {
    category: "Statistiques descriptives",
    question: "Une distribution avec un coefficient d'asymétrie (skewness) de −0,8 est qualifiée de :",
    answers:  ["Symétrique", "Asymétrique à droite (queue longue à droite)", "Asymétrique à gauche (queue longue à gauche)", "Bimodale"],
    correct:  2,
    explanation: "Une skewness négative indique une asymétrie à gauche : la queue est longue côté gauche et la moyenne est inférieure à la médiane.",
  },
  {
    category: "Statistiques descriptives",
    question: "Pour la population {2, 4, 6, 8, 10}, la variance de population est égale à :",
    answers:  ["6,0", "8,0", "10,0", "2,83"],
    correct:  1,
    explanation: "Moyenne = 6. Variance = [(2−6)² + (4−6)² + (6−6)² + (8−6)² + (10−6)²] / 5 = 40/5 = 8.",
  },
  {
    category: "Statistiques descriptives",
    question: "L'excès de kurtosis (kurtosis excess) mesure :",
    answers:  ["La symétrie d'une distribution autour de sa moyenne", "L'aplati ou le pic de la distribution par rapport à une normale", "La dispersion des rendements autour de la moyenne", "Le coefficient de variation"],
    correct:  1,
    explanation: "L'excès de kurtosis compare la distribution à la loi normale (kurtosis = 3). Une valeur positive (leptokurtique) indique des queues épaisses et un pic plus prononcé.",
  },

  // ══════════════════════════════════════════
  //  PROBABILITÉS
  // ══════════════════════════════════════════
  {
    category: "Probabilités",
    question: "Si P(A) = 0,4 et P(B) = 0,3 et que A et B sont mutuellement exclusifs, alors P(A ou B) =",
    answers:  ["0,12", "0,52", "0,70", "0,58"],
    correct:  2,
    explanation: "Pour des événements mutuellement exclusifs : P(A ∪ B) = P(A) + P(B) = 0,4 + 0,3 = 0,70. Il n'y a pas de terme d'intersection.",
  },
  {
    category: "Probabilités",
    question: "Un portefeuille a 60 % de chances de générer un rendement positif chaque année. Quelle est la probabilité d'obtenir exactement 2 années positives sur les 3 prochaines ?",
    answers:  ["0,216", "0,288", "0,360", "0,432"],
    correct:  3,
    explanation: "P = C(3,2) × 0,6² × 0,4¹ = 3 × 0,36 × 0,4 = 0,432.",
  },
  {
    category: "Probabilités",
    question: "Le théorème de Bayes est utilisé pour :",
    answers:  ["Calculer des probabilités composées pour des événements indépendants", "Mettre à jour une probabilité a priori à la lumière de nouvelles informations", "Déterminer l'espérance d'une variable aléatoire", "Mesurer la covariance entre deux actifs"],
    correct:  1,
    explanation: "Le théorème de Bayes permet de réviser une probabilité initiale (a priori) en intégrant une nouvelle information pour obtenir une probabilité a posteriori : P(A|B) = P(B|A)×P(A) / P(B).",
  },
  {
    category: "Probabilités",
    question: "La covariance entre deux actifs est 0,018. Leurs écarts-types sont respectivement 0,15 et 0,20. Le coefficient de corrélation est :",
    answers:  ["0,40", "0,60", "0,80", "0,45"],
    correct:  1,
    explanation: "ρ = Cov(X,Y) / (σ_X × σ_Y) = 0,018 / (0,15 × 0,20) = 0,018 / 0,030 = 0,60.",
  },
  {
    category: "Probabilités",
    question: "Si X et Y sont des variables aléatoires indépendantes avec E(X) = 3 et E(Y) = 5, alors E(XY) =",
    answers:  ["8", "15", "25", "Impossible à déterminer"],
    correct:  1,
    explanation: "Pour des variables indépendantes : E(XY) = E(X) × E(Y) = 3 × 5 = 15.",
  },

  // ══════════════════════════════════════════
  //  DISTRIBUTIONS DE PROBABILITÉ
  // ══════════════════════════════════════════
  {
    category: "Distributions de probabilité",
    question: "Laquelle des affirmations suivantes décrit le mieux une distribution log-normale ?",
    answers:  ["Symétrique autour de sa moyenne", "Prend des valeurs entre −1 et +1", "Asymétrique à droite et bornée inférieurement à zéro", "A une kurtosis exactement égale à 3"],
    correct:  2,
    explanation: "La distribution log-normale est asymétrique à droite et ne peut prendre que des valeurs positives, ce qui la rend adaptée à la modélisation des prix d'actifs.",
  },
  {
    category: "Distributions de probabilité",
    question: "Une action a un rendement espéré de 12 % et un écart-type de 20 %. En supposant une distribution normale, quelle est la probabilité approximative d'un rendement inférieur à −8 % ?",
    answers:  ["5 %", "10 %", "16 %", "32 %"],
    correct:  2,
    explanation: "Z = (−8 % − 12 %) / 20 % = −1,0. P(Z < −1) ≈ 16 % selon la table de la loi normale standard.",
  },
  {
    category: "Distributions de probabilité",
    question: "Le théorème central limite stipule que :",
    answers:  ["La population doit être normalement distribuée pour que les moyennes d'échantillon le soient", "Pour de grands échantillons, la distribution des moyennes d'échantillon tend vers la normalité quelle que soit la distribution de la population", "Les grands échantillons ont toujours une variance plus faible", "La moyenne de l'échantillon est toujours égale à la moyenne de la population"],
    correct:  1,
    explanation: "Le TCL est fondamental en statistique : pour n suffisamment grand (généralement ≥ 30), la distribution de la moyenne d'échantillon est approximativement normale, peu importe la forme de la population.",
  },
  {
    category: "Distributions de probabilité",
    question: "Une distribution uniforme continue sur [0 ; 10] donne quelle probabilité pour une valeur entre 3 et 7 ?",
    answers:  ["0,30", "0,40", "0,50", "0,70"],
    correct:  1,
    explanation: "P(3 ≤ X ≤ 7) = (7 − 3) / (10 − 0) = 4/10 = 0,40.",
  },

  // ══════════════════════════════════════════
  //  ÉCHANTILLONNAGE ET ESTIMATION
  // ══════════════════════════════════════════
  {
    category: "Échantillonnage et estimation",
    question: "Un intervalle de confiance à 95 % est construit à partir d'un échantillon de 100 observations (moyenne = 50, écart-type = 10). L'intervalle est approximativement :",
    answers:  ["[45,0 ; 55,0]", "[49,0 ; 51,0]", "[48,0 ; 52,0]", "[40,2 ; 59,8]"],
    correct:  2,
    explanation: "IC = 50 ± 1,96 × (10 / √100) = 50 ± 1,96 ≈ [48,04 ; 51,96].",
  },
  {
    category: "Échantillonnage et estimation",
    question: "Un intervalle de confiance à « 90 % » signifie :",
    answers:  ["Le paramètre a 90 % de chances d'être dans l'intervalle", "90 % des observations de l'échantillon sont dans l'intervalle", "Si l'on construisait de nombreux intervalles de ce type, 90 % contiendraient le vrai paramètre", "La moyenne de l'échantillon est à moins de 10 % de la vraie valeur"],
    correct:  2,
    explanation: "C'est une interprétation fréquentiste : sur un grand nombre d'intervalles construits, 90 % contiendraient le vrai paramètre. L'intervalle donné est soit correct, soit incorrect.",
  },
  {
    category: "Échantillonnage et estimation",
    question: "Le biais de survivance (survivorship bias) dans l'analyse financière se produit lorsque :",
    answers:  ["L'échantillon n'inclut que des fonds/entreprises toujours en activité, excluant les faillites ou fonds liquidés", "Les données futures sont utilisées pour construire un modèle sur le passé", "L'échantillon est sélectionné pour sa facilité d'accès", "La période d'analyse est trop courte"],
    correct:  0,
    explanation: "Le biais de survivance surestime les performances passées car il exclut les actifs qui ont disparu (fonds liquidés, sociétés en faillite), ne conservant que les « survivants ».",
  },
  {
    category: "Échantillonnage et estimation",
    question: "Parmi les biais d'échantillonnage suivants, lequel consiste à utiliser des données disponibles seulement après la période analysée ?",
    answers:  ["Biais de survivance", "Biais de look-ahead", "Biais de sélection", "Biais de période"],
    correct:  1,
    explanation: "Le biais de look-ahead consiste à utiliser lors du backtesting des informations qui n'étaient pas disponibles au moment de la prise de décision, faussant les résultats historiques.",
  },

  // ══════════════════════════════════════════
  //  TESTS D'HYPOTHÈSE
  // ══════════════════════════════════════════
  {
    category: "Tests d'hypothèse",
    question: "Un gérant affirme que son portefeuille a un rendement annuel moyen supérieur à 10 %. Sur 36 ans, la moyenne observée est de 11,5 % et l'écart-type de 4 %. La statistique de test est :",
    answers:  ["1,50", "2,25", "3,00", "0,75"],
    correct:  1,
    explanation: "t = (11,5 % − 10 %) / (4 % / √36) = 1,5 / 0,667 ≈ 2,25.",
  },
  {
    category: "Tests d'hypothèse",
    question: "Une erreur de type I en test d'hypothèse consiste à :",
    answers:  ["Ne pas rejeter une hypothèse nulle fausse", "Rejeter une hypothèse nulle vraie", "Accepter une hypothèse alternative fausse", "Utiliser une mauvaise statistique de test"],
    correct:  1,
    explanation: "L'erreur de type I (fausse alarme) : on rejette H₀ alors qu'elle est vraie. Sa probabilité est le niveau de signification α.",
  },
  {
    category: "Tests d'hypothèse",
    question: "La p-value d'un test est 0,03. Au seuil de signification de 5 %, la conclusion est :",
    answers:  ["Ne pas rejeter l'hypothèse nulle", "Rejeter l'hypothèse nulle", "Le résultat est non concluant", "Accepter H₁ avec 97 % de confiance"],
    correct:  1,
    explanation: "Puisque p-value (0,03) < α (0,05), on rejette H₀. La p-value représente la probabilité d'observer un résultat aussi extrême si H₀ est vraie.",
  },
  {
    category: "Tests d'hypothèse",
    question: "Un test F est utilisé pour tester :",
    answers:  ["La significativité d'un coefficient de régression", "L'égalité de deux variances de population", "La différence entre deux moyennes pairées", "La normalité d'une distribution"],
    correct:  1,
    explanation: "Le test F compare le rapport de deux variances. Il est également utilisé pour tester la significativité globale d'une régression (ANOVA).",
  },
  {
    category: "Tests d'hypothèse",
    question: "Pour tester la différence de moyennes entre deux échantillons indépendants avec des variances inconnues et inégales, le test le plus approprié est :",
    answers:  ["Test Z", "Test du khi-deux", "Test t de Welch", "Test F"],
    correct:  2,
    explanation: "Le test t de Welch est conçu pour comparer deux moyennes indépendantes sans supposer l'égalité des variances.",
  },

  // ══════════════════════════════════════════
  //  RÉGRESSION LINÉAIRE
  // ══════════════════════════════════════════
  {
    category: "Régression linéaire",
    question: "Dans la régression simple Y = a + bX + ε, le coefficient b représente :",
    answers:  ["La valeur de Y quand X est nul", "La variation de Y pour une variation unitaire de X", "La corrélation entre X et Y", "La proportion de variance de Y expliquée par X"],
    correct:  1,
    explanation: "b est la pente de la droite de régression : il mesure la variation attendue de Y pour chaque augmentation d'une unité de X.",
  },
  {
    category: "Régression linéaire",
    question: "Un coefficient de détermination R² de 0,75 signifie que :",
    answers:  ["La corrélation entre X et Y est 0,75", "75 % de la variation de Y est expliquée par X", "Les coefficients sont significatifs à 75 %", "25 % de X est expliqué par Y"],
    correct:  1,
    explanation: "R² mesure la proportion de la variance totale de Y expliquée par le modèle de régression. R² = 0,75 → 75 % de la variabilité de Y est capturée par le modèle.",
  },
  {
    category: "Régression linéaire",
    question: "L'hétéroscédasticité en régression désigne :",
    answers:  ["La corrélation entre les termes d'erreur successifs", "Une variance non constante des termes d'erreur", "Une multicolinéarité parfaite entre variables", "La non-normalité de la variable dépendante"],
    correct:  1,
    explanation: "L'hétéroscédasticité viole l'hypothèse classique d'homoscédasticité. Elle ne biaise pas les coefficients mais rend les tests t et F invalides.",
  },
  {
    category: "Régression linéaire",
    question: "Laquelle des propositions suivantes N'EST PAS une hypothèse du modèle de régression linéaire classique ?",
    answers:  ["Les termes d'erreur ont une espérance nulle", "Les termes d'erreur sont homoscédastiques", "Les termes d'erreur ne sont pas autocorrélés", "La relation entre les variables doit être exponentielle"],
    correct:  3,
    explanation: "La régression classique suppose une relation linéaire dans les paramètres, pas nécessairement dans les variables (on peut transformer X). Une relation exponentielle n'est pas une hypothèse requise.",
  },

  // ══════════════════════════════════════════
  //  MICROÉCONOMIE
  // ══════════════════════════════════════════
  {
    category: "Microéconomie",
    question: "Si l'élasticité-prix de la demande d'un bien est −2,5, une hausse de prix de 10 % entraîne :",
    answers:  ["Une baisse de 2,5 % de la quantité demandée", "Une baisse de 25 % de la quantité demandée", "Une baisse de 10 % de la quantité demandée", "Une hausse de 2,5 % de la quantité demandée"],
    correct:  1,
    explanation: "Variation quantité = élasticité × variation prix = −2,5 × (+10 %) = −25 %. La demande est élastique (|ε| > 1).",
  },
  {
    category: "Microéconomie",
    question: "Une entreprise maximise son profit lorsque :",
    answers:  ["Le prix est égal au coût total moyen", "La recette marginale est égale au coût moyen", "La recette marginale est égale au coût marginal", "Le prix est égal au coût marginal uniquement en concurrence pure"],
    correct:  2,
    explanation: "La condition Rm = Cm est universelle : toute entreprise maximise son profit (ou minimise sa perte) au niveau de production où recette marginale = coût marginal.",
  },
  {
    category: "Microéconomie",
    question: "En concurrence pure et parfaite, à long terme :",
    answers:  ["Les firmes réalisent des profits économiques positifs", "Les profits économiques sont nuls", "L'entrée de nouvelles firmes est restreinte", "Le prix dépasse le coût marginal"],
    correct:  1,
    explanation: "Les profits positifs attirent de nouveaux entrants, ce qui fait baisser le prix jusqu'à l'élimination des profits économiques. À l'équilibre de long terme : P = Cm = CTMmin.",
  },
  {
    category: "Microéconomie",
    question: "Quelle structure de marché est caractérisée par quelques grandes entreprises, des barrières à l'entrée significatives et une interdépendance stratégique ?",
    answers:  ["Concurrence pure et parfaite", "Concurrence monopolistique", "Oligopole", "Monopole"],
    correct:  2,
    explanation: "L'oligopole (ex : aviation, télécoms) réunit peu de firmes dominantes qui tiennent compte mutuellement de leurs décisions, notamment via la théorie des jeux.",
  },
  {
    category: "Microéconomie",
    question: "La loi des rendements marginaux décroissants stipule que :",
    answers:  ["La production totale commence à diminuer", "L'ajout d'unités supplémentaires d'un facteur variable augmente la production à un rythme décroissant", "Les coûts moyens augmentent avec la production", "Les coûts fixes diminuent avec la production"],
    correct:  1,
    explanation: "À court terme, avec un facteur fixe, chaque unité supplémentaire du facteur variable apporte une augmentation de production de plus en plus faible (produit marginal décroissant).",
  },
  {
    category: "Microéconomie",
    question: "Un monopole naturel existe lorsque :",
    answers:  ["Le gouvernement accorde des droits exclusifs à une seule firme", "Une seule entreprise peut approvisionner tout le marché à un coût inférieur à plusieurs firmes en raison d'économies d'échelle", "Il n'y a qu'un seul acheteur sur le marché", "La firme détient un brevet sur sa technologie"],
    correct:  1,
    explanation: "Les monopoles naturels (eau, électricité, transport ferroviaire) ont des coûts fixes très élevés et des coûts marginaux faibles, rendant la duplication des infrastructures inefficace.",
  },
  {
    category: "Microéconomie",
    question: "Le surplus du consommateur représente :",
    answers:  ["Le profit total d'une entreprise", "La différence entre ce que les consommateurs sont prêts à payer et ce qu'ils paient effectivement", "L'excédent d'offre sur le marché", "Le bénéfice social net d'un bien"],
    correct:  1,
    explanation: "Le surplus du consommateur est la surface entre la courbe de demande et le prix du marché. Il mesure le gain net pour les acheteurs.",
  },

  // ══════════════════════════════════════════
  //  MACROÉCONOMIE
  // ══════════════════════════════════════════
  {
    category: "Macroéconomie",
    question: "Le PIB mesuré par l'approche des dépenses est égal à :",
    answers:  ["Salaires + Rentes + Intérêts + Profits", "C + I + G + (X − M)", "C + S + T", "PNB − Dépréciation"],
    correct:  1,
    explanation: "PIB = Consommation (C) + Investissement (I) + Dépenses publiques (G) + Exportations nettes (X − M). C'est l'identité keynésienne fondamentale.",
  },
  {
    category: "Macroéconomie",
    question: "Si le PIB nominal est de 800 milliards $ et le déflateur du PIB est de 125, le PIB réel est :",
    answers:  ["1 000 milliards $", "640 milliards $", "675 milliards $", "720 milliards $"],
    correct:  1,
    explanation: "PIB réel = PIB nominal / Déflateur × 100 = 800 / 125 × 100 = 640 milliards $.",
  },
  {
    category: "Macroéconomie",
    question: "Selon la théorie quantitative de la monnaie (MV = PQ), si la masse monétaire augmente de 5 %, la vitesse est constante et la croissance réelle est de 2 %, l'inflation est approximativement de :",
    answers:  ["5 %", "7 %", "3 %", "2 %"],
    correct:  2,
    explanation: "%ΔM + %ΔV = %ΔP + %ΔQ → 5 % + 0 = %ΔP + 2 % → Inflation ≈ 3 %.",
  },
  {
    category: "Macroéconomie",
    question: "La stagflation est caractérisée par :",
    answers:  ["Forte inflation et forte croissance", "Chômage élevé et inflation élevée simultanément", "Déflation et faible chômage", "Faible croissance et faible inflation"],
    correct:  1,
    explanation: "La stagflation (stagnation + inflation) est difficile à gérer car les politiques anti-inflationnistes aggravent le chômage, et vice versa. Elle a frappé les pays occidentaux dans les années 1970.",
  },
  {
    category: "Macroéconomie",
    question: "Une politique monétaire expansionniste implique :",
    answers:  ["Une hausse des impôts", "Une réduction des dépenses publiques", "Une baisse des taux d'intérêt ou une augmentation de la masse monétaire", "La vente de titres d'État sur le marché ouvert"],
    correct:  2,
    explanation: "La politique monétaire expansionniste stimule l'économie via des achats de titres (open market), une baisse des taux directeurs ou une réduction des réserves obligatoires.",
  },
  {
    category: "Macroéconomie",
    question: "Si la propension marginale à consommer (PMC) est de 0,8, le multiplicateur budgétaire est égal à :",
    answers:  ["0,8", "4,0", "5,0", "1,25"],
    correct:  2,
    explanation: "Multiplicateur = 1 / (1 − PMC) = 1 / (1 − 0,8) = 1 / 0,2 = 5. Une dépense publique de 1 $ génère 5 $ de PIB supplémentaire.",
  },
  {
    category: "Macroéconomie",
    question: "Quelle phase du cycle économique est caractérisée par une hausse de l'emploi, une expansion du crédit et une augmentation de la production ?",
    answers:  ["Creux (trough)", "Contraction (récession)", "Expansion", "Pic (peak)"],
    correct:  2,
    explanation: "La phase d'expansion voit la croissance du PIB, la baisse du chômage et l'amélioration des conditions de crédit. Elle se termine au pic avant une contraction.",
  },
  {
    category: "Macroéconomie",
    question: "Les stabilisateurs automatiques comprennent :",
    answers:  ["Les baisses d'impôts et hausses de dépenses discrétionnaires", "Les allocations chômage et l'impôt progressif sur le revenu", "Les opérations d'open market de la banque centrale", "Les programmes d'investissement en infrastructure"],
    correct:  1,
    explanation: "Les stabilisateurs automatiques agissent sans décision politique : en récession, les allocations chômage augmentent et les recettes fiscales baissent, soutenant automatiquement la demande.",
  },

  // ══════════════════════════════════════════
  //  COMMERCE INTERNATIONAL ET CHANGES
  // ══════════════════════════════════════════
  {
    category: "Commerce international et changes",
    question: "Selon la théorie de l'avantage comparatif, un pays devrait :",
    answers:  ["Produire tous les biens en autarcie", "Se spécialiser dans les biens où son coût d'opportunité est le plus faible", "Importer les biens pour lesquels il a un avantage absolu", "Instaurer des droits de douane pour protéger ses industries"],
    correct:  1,
    explanation: "Même si un pays est plus efficace dans tous les domaines (avantage absolu), les deux pays gagnent à l'échange en se spécialisant là où leur coût d'opportunité est le plus bas (avantage comparatif).",
  },
  {
    category: "Commerce international et changes",
    question: "Si le taux de change EUR/USD passe de 1,10 à 1,20, cela signifie que :",
    answers:  ["Le dollar s'est apprécié face à l'euro", "L'euro s'est apprécié face au dollar", "Les deux devises se sont affaiblies", "Le taux de change a diminué"],
    correct:  1,
    explanation: "EUR/USD = 1,20 signifie qu'1 euro achète 1,20 dollar (contre 1,10 avant). L'euro vaut plus de dollars → il s'est apprécié.",
  },
  {
    category: "Commerce international et changes",
    question: "La Parité des Pouvoirs d'Achat (PPA) stipule que :",
    answers:  ["Les différentiels de taux d'intérêt déterminent les taux de change", "Les taux de change s'ajustent pour que des biens identiques aient le même prix dans différents pays", "Les pays excédentaires voient leur monnaie se déprécier", "Les flux de capitaux déterminent les taux de change à long terme"],
    correct:  1,
    explanation: "La PPA (loi du prix unique à l'échelle internationale) prédit que les taux de change s'ajustent en fonction des différentiels d'inflation entre pays.",
  },
  {
    category: "Commerce international et changes",
    question: "La Parité des Taux d'Intérêt (PTI) non couverte indique que :",
    answers:  ["Les taux d'intérêt réels sont identiques dans tous les pays", "La variation attendue du taux de change compense le différentiel de taux d'intérêt entre deux pays", "Les réserves de change déterminent la valeur d'une monnaie", "Les flux commerciaux sont la principale cause des mouvements de change"],
    correct:  1,
    explanation: "Selon la PTI non couverte : la monnaie à taux d'intérêt élevé devrait se déprécier d'un montant égal au différentiel de taux, éliminant toute opportunité d'arbitrage.",
  },
];
