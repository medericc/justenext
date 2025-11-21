'use client'

import React, { useEffect, useMemo, useState } from 'react'

type Category = {
  key: string
  name: string
  words: string[]
}

const CATEGORIES: Category[] = [
  {
    key: 'home',
    name: 'Accueil',
    words: [],
  },
  {
    key: 'christianisme',
    name: 'Christianisme',
    words: [
      'Marie','Jésus','Joseph','Jacques','Zacharie','Anne','Joaquim','Élisabeth','Jean','Pilate','Hérode','Auguste','Pharisien','Nazareth','Bethléem','Messie','Rédempteur','Israël','Coupe','Croix','Pâques','Ascension','Pentecôte','Nativité','Annonciation','Assomption','Visitation','Christ','Lazare','Marthe','Dieu','Trinité','Consolateur','Saul','Paul','Tarse','Pierre','Simon','Judas','Juda','Sermon','Béatitudes','Calvaire','Passion','Magdala','Zachée','Cyrus','Laïcité','Nabuchodonosor','Gabriel','Raphaël','Michel','Daniel','Ezechiel','Evangile','Testament','Alliance','Darius','Jérémie','Josias','Exil','Benjamin','Lévi','Ruben','Siméon','Adam','Eve','Serpent','Connaissance','Caël','Abel','Sett','Mathusalem','Hénoch','Noé','Sam','Chem','Japhet','Abram','Eliezer','Lot','Madian','Ammon','Isaac','Ismaël','Jacob','Ésau','Rébecca','Agar','Saraï','Hébreux','Éber','Térah','Manassé','Éphraïm','Moïse','Aaron','Marie-Madeleine','Canne','Pâque','Éxode','Agneau','Baptême','Mariage','Péché','Commandements','Sinaï','Hébron','Sion','Hor','Nébo','Koré','Fournaise','Josué','Caleb','Espion','Trompette','Ange','Jéricho','Canaan','Juges','Rois','Philistins','Samson','Yaël','Balaam','Othniel','Ehud','Deborah','Barak','Gédéon','Jéthé','David','Salomon','Roboam','Jéroboam','Athalie','Jézabel','Élie','Élisée','Achab','Isaïe','Osée','Amos','Abdias','Jonas','Esther','Judith','Joël','Saba','Aggée','Malachie','Matthieu','Marc','Luc','Apocalypse','Barabbas','Etienne','Melchisédek','Rahab','Béthel','Samarie','Jérusalem','Bethanie','Gethsémani','Golgotha','Siloé','Cénacle','Sépulcre','Babel','Babylone','Parousie','Sabbat','Esdras','Néhémie','Lamentations','Psaumes','Job','Sagesse','Arche','Eucharistie','Gaza','Galilée','Emmaüs','Nathan','Absalom','Betsabée','Urie','Adonias','Abiatar'
    ],
  },
  {
    key: 'evenements',
    name: 'Événements',
    words: [
 'Nicée',
'Constantinople',
'Éphèse',
'Chalcédoine',
'Latran',
'Trente',
'Vienne',
'Pise',
'Constance',
'Bâle',
'Florence',
'Inquisition',
'Croisades',
'Templiers',
'Hospitaliers',
'Teutoniques',
'Albigeois',
'Cathares',
'Reconquista',
'Iconoclasme',
'Schisme',
'Gallicanisme',
'Jansenisme',
'Humanisme',
'Reforme',
'Lutherisme',
'Calvinisme',
'Anglicanisme',
'Reforme',
'Jesuites',
'Oratoriens',
'Jansénistes',
'Sorbonne',
'Université',
'Avignon',
'Byzance',
'Ottomans',
'Lépante',
'Poitiers',
'Tours',
'Clovis',
'Capétiens',
'Bourbons',
'Fronde',
'Parlements',
'Bastille',
'Vendée',
'Chouans',
'Charette',
'Guillotine',
'Révolution',
'Convention',
'Montagnards',
'Girondins',
'Jacobin',
'Marseillais',
'Terreur',
'Assignats',
'Concordat',
'Céleste','Byzantins',
'Iconodules',
'Iconoclastes',
'Lombards',
'Carolingiens',
'Mérovingiens',
'Bogomiles',
'Manichéens',
'Donatistes',
'Nestoriens',
'Monophysites',
'Monothélites',
'Iconostase',
'Catacombes',
'Synagogue',
'Patriarcat',
'Latins',
'Gibelins',
'Guelfes',
'Investiture',
'Simonie',
'Nicolaïsme',
'Seldjoukides',
'Fatimides',
'Reliquaire',
'Collégiale',
'Prieuré',
'Abbaye',
'Cisterciens',
'Bénédictins',
'Chanoines',
'Gothique',
'Roman',
'Carême',
'Pentarchie',
'Graduel',
'Ordinaire',
'Rituel',
'Liturgie',
'Concile',
'Sanhedrin',
'Pharisiens',
'Esséniens',
'Sadducéens',
'Hasmonéens',
'Septante',
'Vulgate',
'Scolastique',
'Majesté',
'Iconographie',
'Alhambra',
'Grenade',
'Sarrazins',
'Croisés'
  ],
  },
  {
    key: 'saints',
    name: 'Saints',
    words: [
 'Teresa',
'Augustin',
'François',
'Benoît',
'Claire',
'Dominique',
'Ignace',
'Catherine',
'Thérèse',
'Jean',
'Paul',
'Pierre',
'André',
'Jacques',
'Thomas',
'Philippe',
'Barthélemy',
'Matthieu',
'Simon',
'Jude',
'Luc',
'Marc',
'Matthias',
'Étienne',
'Laurent',
'Polycarpe',
'Irénee',
'Athanase',
'Basile',
'Grégoire',
'Ambroise',
'Martin',
'Patrick',
'Georges',
'Louis',
'Bernard',
'Anselme',
'Bonaventure',
'Antoine',
'Isidore',
'Hilaire',
'Brigitte',
'Monique',
'Hélène',
'Élisabeth',
'Rita',
'Pio',
'Charbel',
'Maximilien',
'Faustine',
'Kateri',
'Geneviève',
'Jeanne',
'Bernadette',
'Lucie',
'Agathe',
'Agnès',
'Cécile',
'Félix',
'Damien',
'Maurice',
'Christophe',
'Nicolas',
'Valentin',
'Roch',
'Blaise',
'Henri',
'Olga',
'Vladimir',
'Bakhita',
'Scholastique',
'Hippolyte','Louis',
'Bakhita',
'Arc',
'Joséphine',
'Domrémy',
'Antioche',
'Assise',
'Nazareth',
'Bethléem',
'Jérusalem',
'Fatima',
'Lourdes',
'Padoue',
'Ars',
'Paray',
'Chartres',
'Rome',
'Byzance',
'Athènes',
'Corinthe',
'Galilée',
'Tarse',
'Damas',
'Sinaï',
'Cluny',
'Cîteaux',
'Solesmes',
'Subiaco',
'Verona',
'Sevilla',
'Avila',
'Grenade',
'Lisieux',
'Nevers',
'Turin',
'Bari',
'Loreto',
'Czestochowa',
'Kibeho',
'Akita','Clairvaux',
'Arezzo',
'Tolède',
'Fidenza',
'Vienne',
'Lyon',
'Tours',
'Reims',
'Amiens',
'Autun',
'Poitiers',
'Ravenne',
'Sienne',
'Orvieto',
'Loreto',
'Dublin',
'Canterbury',
'York',
'Cologne',
'Ulm',
'Salzbourg',
'Innsbruck',
'Zagreb',
'Split',
'Tirana',
'Mtskheta',
'Ararat',
'Odessa',
'Kiev',
'Minsk',
'Vilnius',
'Riga',
'Tallinn',
'Tartu',
'Nicea',
'Éphèse',
'Laodicée',
'Sardes',
'Pergame',
'Smyrne',
'Philadelphie',
'Antioche',
'Béthanie',
'Magdala',
'Gethsémani',
'Tabor',
'Nain',
'Joppé',
'Lydda',
'Iconium',
'Doura',
'Nisibe'



],
  },
  {
    key: 'concepts',
    name: 'Concepts',
    words: [
  'Kénose',
'Homoousios',          
'Homoiousios',      
'Théosis',
'Hypostase',
'Périchorèse',
'Économie' ,
'Anastasie',
'Parousie',
'Dynamisme',
'Logos',             
'Agapè',       
'Métanoïa',
'Hésychasme',           
'Épiclèse',
'Proskynèse',
'Sotériologie',       
'Eucharistie',
'Kérygme',
'Apocatastase',
'Anacéphaléose',   
'Enhypostasie',
'Anhypostasie',
'Taxis' ,            
'Anomie',           
'Ousia',               
'Énergie',            
'Catharsis',
'Épektasis',
'Théophanie',
'Christophanie',
'Anamnèse',
'Doxologie',
'Protologie',
'Éschaton',
'Hésychasme',
'Aséité',
'Ratio',              
'Éternité',
'Simulacre',
'teleiosis',          
'Harmonie',
'Acribie',
'Syncatabasis',        
'Deutéros',            
'Théopneustie',

'Épistrophè',
'Anaphore',


'Pauvreté',
'Divin',
'Unité',
'Offrande',
'Béatifique',
'Ravissement',
'Ascèse',
'Homélie',
'Tradition',
'Sémantique',
'Herméneutique',
'Prohairesis',   
'Théophorie',        

'Distinction',
'Concurrence',
'Essence',
'Existence',



'Theosophie',
'Agent',
'Incarnation',
'Providence',
'Grace',
'Redemption',
'Justification',
'Sanctification',
'Predestination',
'Immaculee',
'Assomption',
'Infaillibilite',
'Mystique',
'Contemplation',
'Ascese',
'Mortification',
'Discerner',
'Charite',
'Humilite',
'Depouillement',
'Arianisme',
'Nestorianisme',
'Monophysisme',
'Docetisme',
'Pelagianisme',
'Jansenisme',
'Gnosticisme',
'Montanisme',
'Iconoclasme',
'Arminianisme',
'Chrismation',
'Viatique',
'Catechumenat',
'Mystagogie',



'Onction',
'Sacerdotalisme',
'Consecration',
'Adoration',
'Hypostatique',
'Anhypostatique',
'Enhypostatique',
'Incarnation',
'Salut',
'Universel',
'Ontologie',
'Nihilo',
'Premotion',
'Pur',
'Hesychaste',
'Abandon',
'Extase',
'Rapt',
'Fidélite',
'Détachement',
'Silence',
'Deification',
'Purgatoire',
'Obeissance',
'Adoptianisme',
'Monothelisme',
'Diteisme',
'Tritheisme',
'Catharisme',
'Albigeisme',
'Donatisme',

'Marcionisme',
'Ebionisme',
'Synaxe',

'Anaphore',
'Ambon',





'Fraction',




'Apophatique',


'Consecration',
'Exegese',
'Typologie',
'Allegorie',
'Philocalie',
'Henosis',
'Engendre',
'Emanation',
'Motion',
'Traducianisme',
'Vertus',
'Impetration',
'Quietude',
'Stase',
'Offrande',
'Abaissement',
'Appolinarisme',


'Bogomilisme',
'Patripassianisme',
'Modalisme',
'Enychisme',
'Messalianisme',
'Controverse',
'Mozarabe',





'Typikon',






'Polychronion',

'Retable',
'Hierurgie',
'Hexaples',

'Cataphatisme',

'Crypto-Juif',
'Eucologe',
'Stichère',
'Kathisma',
'Martyr',
'Hérésie',
'Synaxaire',
'Antiphonaire',
'Latréutique',
'Anagôgè',
'Mysterion',
'Epibolé',
'Theodidactos',
'Aletheuein',
'Palingénésie',
'Antinomianisme',
'Onto-théologie'




    ],
  }
]

// Utility
function sampleN<T>(arr: T[], n: number) {
  const copy = arr.slice()
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy.slice(0, Math.min(n, copy.length))
}

function useWindowWidth() {
  const [w, setW] = useState<number>(typeof window === 'undefined' ? 1200 : window.innerWidth)
  useEffect(() => {
    const onResize = () => setW(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return w
}

export default function Page() {
  const [activeTab, setActiveTab] = useState<string>('home')
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [gameStarted, setGameStarted] = useState(false)
  const [deck, setDeck] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [points, setPoints] = useState(0)
  const [cardsRemaining, setCardsRemaining] = useState(13)
  const [wordVisible, setWordVisible] = useState(true)
  const [showEndModal, setShowEndModal] = useState(false)
  const [message, setMessage] = useState('')

  const width = useWindowWidth()
  const isDesktop = width >= 960
function startNewDeck() {
  if (!selectedCategory) return

  const pick = sampleN(selectedCategory.words, 13)
  setDeck(pick)
  setCurrentIndex(0)
  setPoints(0)
  setCardsRemaining(13)
  setWordVisible(false)
  setMessage('Prêt à lancer la partie')
}
 useEffect(() => {
  if (!selectedCategory) return

  // empêche le setState sync direct dans l’effet
  queueMicrotask(() => {
    startNewDeck()
  })

}, [selectedCategory])


function startGame() {
  if (!selectedCategory) return

  // créer un nouveau deck ici !
  const pick = sampleN(selectedCategory.words, 13)
  setDeck(pick)

  setCurrentIndex(0)
  setPoints(0)
  setCardsRemaining(13)
  setWordVisible(false)

  setGameStarted(true)
  setMessage('Partie en cours')
  setShowEndModal(false)
}


  function resetGame() {
    if (!selectedCategory) return
    const pick = sampleN(selectedCategory.words, 13)
    setDeck(pick)
    setCurrentIndex(0)
    setPoints(0)
    setCardsRemaining(13)
    setWordVisible(true)
    setMessage('Jeu réinitialisé')
    setGameStarted(false)
    setShowEndModal(false)
  }

  function handleResult(result: 'success' | 'fail' | 'pass') {
    if (!gameStarted) return
    let nextPoints = points
    let nextCards = cardsRemaining
    if (result === 'success') nextPoints++
    if (result === 'fail') nextCards -= 2
    else nextCards -= 1

    const nextIndex = currentIndex + 1

    if (nextCards <= 0 || nextIndex >= deck.length) {
      // end game
      setPoints(nextPoints)
      setCardsRemaining(Math.max(0, nextCards))
      setShowEndModal(true)
      setGameStarted(false)
      setMessage(`Jeu terminé ! Score final : ${nextPoints}`)
      return
    }

    setPoints(nextPoints)
    setCardsRemaining(nextCards)
    setCurrentIndex(nextIndex)
    setWordVisible(false)
  }

  const windowTitle = useMemo(() => {
    if (!selectedCategory) return 'Juste Un — Accueil'
    return `Juste Un — ${selectedCategory.name}`
  }, [selectedCategory])


  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900 flex flex-col">
    

      {/* Main content */}
  <main className="flex-1 w-full">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

    {/* ==================== ACCUEIL (catégories + choix rapide + règles) ==================== */}
    {!gameStarted && (
      <div className="flex flex-col gap-8">

        {/* TITRE */}
        {!selectedCategory && (
          <div>
            <h2 className="text-2xl font-bold">Bienvenue sur Juste Un</h2>
            <p className="mt-2 text-slate-600">
              Choisis une catégorie ci-dessous puis appuie sur <strong>Lancer</strong>.
            </p>
          </div>
        )}

        {/* CATEGORIES EN HAUT */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {CATEGORIES.filter(c => c.key !== "home").map(c => (
            <button
              key={c.key}
              onClick={() => { 
                setSelectedCategory(c); 
                setActiveTab(c.key); 
              }}
              className={`p-4 rounded-xl border shadow-sm text-center ${
                selectedCategory?.key === c.key
                  ? "bg-sky-500 text-white border-sky-600"
                  : "bg-white text-slate-700"
              }`}
            >
              <h3 className="text-sm font-semibold">{c.name}</h3>
              <p className="text-xs opacity-80 mt-1">{c.words.length} mots</p>
            </button>
          ))}
        </div>

        {/* BLOC CHOIX RAPIDE — HORIZONTAL */}
        <div className="w-full bg-white/80 rounded-xl border p-5 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-semibold">Choix rapide</h3>
            <p className="text-xs text-slate-600">Sélectionne une catégorie puis lance.</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={startGame}
              disabled={!selectedCategory}
              className="px-5 py-2 bg-sky-600 text-white text-sm rounded-lg shadow-sm disabled:bg-slate-300"
            >
              Lancer
            </button>
            <button
              onClick={resetGame}
              className="px-5 py-2 bg-white text-sm border rounded-lg shadow-sm"
            >
              Reset
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="w-full bg-white/80 rounded-xl border p-4 shadow-sm text-sm flex flex-wrap justify-between">
          <p>Statut : <span className="font-semibold">{message}</span></p>
          <p>Points : <span className="font-semibold">{points}</span></p>
          <p>Cartes restantes : <span className="font-semibold">{cardsRemaining}</span></p>
        </div>

        {/* RÈGLES COMPLETES — BAS DE PAGE */}
        <div className="w-full bg-gradient-to-r from-sky-50 to-white rounded-xl border p-5 shadow-sm">
          <h4 className="font-semibold text-lg mb-2">Règles complètes</h4>
          <ul className="text-sm text-slate-700 space-y-2 leading-relaxed">
            <li>• Le joueur actif doit deviner le mot.</li>
            <li>• Chaque autre joueur écrit un indice unique.</li>
            <li>• Les indices identiques sont supprimés.</li>
            <li>• Réussi : +1 point.</li>
            <li>• Raté : -2 cartes.</li>
            <li>• Passé : -1 carte.</li>
            <li>• La partie dure 13 cartes. Objectif : garder un maximum.</li>
          </ul>
        </div>

      </div>
    )}

    {/* ==================== PARTIE EN COURS ==================== */}
  {gameStarted && selectedCategory && (
  <div className="w-full min-h-[85vh] flex flex-col justify-start px-4 sm:px-8 py-10">

    {/* HEADER CENTRÉ */}
    <div className="w-full flex flex-col items-center text-center gap-2 mb-10 mt-10">
      <h2 className="text-5xl md:text-6xl  font-bold text-slate-800">{selectedCategory.name}</h2>
      <p className="text-sm text-slate-500">{deck.length} mots dans la sélection</p>

      <div className="flex items-center gap-3 mt-3">
        <span className="px-4 py-1 rounded-full bg-slate-200 text-sm font-semibold">
          Cartes : {cardsRemaining}
        </span>
        <span className="px-4 py-1 rounded-full bg-sky-200 text-sky-800 text-sm font-semibold">
          Points : {points}
        </span>
      </div>
    </div>

    {/* BLOC CENTRAL CENTRÉ */}
    <div className="w-full flex flex-col items-center gap-10">

      {/* CARTE AGRANDIE */}
      <button
        onClick={() => setWordVisible(v => !v)}
        className="w-full max-w-xl py-14 sm:py-20 rounded-2xl border border-slate-200 bg-white shadow text-center"
      >
        <div className="text-4xl sm:text-6xl font-black tracking-wide text-slate-900">
          {wordVisible ? deck[currentIndex] : "— CACHÉ —"}
        </div>
        <p className="text-xs text-slate-400 mt-3">
          Cliquer pour {wordVisible ? "cacher" : "afficher"}
        </p>
      </button>

      {/* BOUTONS DESCENDUS + ESPACÉS */}
      <div className="grid grid-cols-3 gap-6 w-full max-w-md">
        <button 
          onClick={() => handleResult("success")}
          className="py-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base shadow"
        >
          Réussi
        </button>

        <button 
          onClick={() => handleResult("fail")}
          className="py-5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-base shadow"
        >
          Échouer
        </button>

        <button 
          onClick={() => handleResult("pass")}
          className="py-5 rounded-xl bg-amber-400 hover:bg-amber-500 text-white font-bold text-base shadow"
        >
          Passer
        </button>
      </div>

    </div>

  </div>
)}


  </div>
</main>



     

      {/* End of game modal */}
      {showEndModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl p-6 max-w-lg mx-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center font-bold">🏆</div>
              <div>
                <h3 className="text-xl font-bold">Partie terminée</h3>
                <p className="text-slate-600">Score final: <span className="font-semibold">{points}</span></p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-slate-700">{points >= 10 ? 'Félicitations !' : points >= 5 ? "T'y es presque" : 'T\'es mauvais'}</p>
            </div>

            <div className="mt-6 flex gap-3 justify-end">
              <button className="px-4 py-2 rounded-lg border" onClick={() => { setShowEndModal(false); }}>Fermer</button>
          <button
  className="px-4 py-2 rounded-lg bg-sky-600 text-white"
  onClick={() => {
    if (selectedCategory) {
      startNewDeck();   // <-- IMPORTANT : repioche un deck neuf
    }
    setPoints(0);
    setCardsRemaining(13);
    setCurrentIndex(0);
    setWordVisible(true);
    setShowEndModal(false);
    setGameStarted(true); // recommence immédiatement
  }}
>
  Rejouer
</button>
   </div>
          </div>
        </div>
      )}

    </div>
  )
}
