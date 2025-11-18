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
      'Marie','Jésus','Joseph','Jacques','Zacharie','Anne','Joaquim','Élisabeth','Jean','Pilate','Hérode','Auguste','Pharisien','Nazareth','Bethléem','Messie','Rédempteur','Israël','Coupe','Croix','Pâques','Ascension','Pentecôte','Nativité','Annonciation','Assomption','Visitation','Christ','Lazare','Marthe','Dieu','Trinité','Consolateur','Saul','Paul','Tarse','Pierre','Simon','Judas','Juda','Sermon','Béatitudes','Calvaire','Passion','Magdala','Zachée','Cyrus','Laïcité','Nabuchodonosor','Gabriel','Raphaël','Michel','Daniel','Ezechiel','Evangile','Testament','Alliance','Darius','Jérémie','Josias','Exil','Benjamin','Lévi','Ruben','Siméon','Adam','Eve','Serpent','Connaissance','Caël','Abel','Sett','Mathusalem','Hénoch','Noé','Sam','Chem','Japhet','Abram','Eliezer','Lot','Madian','Ammon','Isaac','Ismaël','Jacob','Ésau','Rébecca','Agar','Saraï','Hébreux','Éber','Térah','Manassé','Éphraïm','Moïse','Aaron','Marie-Madeleine','Canne','Pâque','Éxode','Agneau','Baptême','Mariage','Péché','Commandements','Sinaï','Hébron','Sion','Hor','Nébo','Koré','Fournaise','Josué','Caleb','Espion','Trompette','Ange','Jéricho','Canaan','Juges','Rois','Philistins','Samson','Yaël','Balaam','Othniel','Ehud','Deborah','Barak','Gédéon','Jéthé','David','Salomon','Roboam','Jéroboam','Athalie','Jézabel','Élie','Élisée','Achab','Isaïe','Osée','Amos','Abdias','Jonas','Esther','Judith','Joël','Saba','Aggée','Malachie','Matthieu','Marc','Luc','Apocalypse','Église','Transsubstantiation','Barabbas','Etienne','Melchisédek','Rahab','Béthel','Samarie','Jérusalem','Bethanie','Gethsémani','Golgotha','Siloé','Cénacle','Sépulcre','Babel','Babylone','Parousie','Sabbat','Esdras','Néhémie','Lamentations','Psaumes','Job','Sagesse','Révélation','Alléluia','Arche','Eucharistie','Gaza','Galilée','Emmaüs','Nathan','Absalom','Betsabée','Urie','Adonias','Abiatar'
    ],
  },
  {
    key: 'geographie',
    name: 'Géographie',
    words: [
      'Afrique','Amérique','Asie','Europe','Océanie','France','Espagne','Italie','Vatican','Japon','Chine','Inde','Canada','Brésil','Argentine','Russie','Mexique','Australie','Égypte','Maroc','Nigeria','Kenya','Sénégal','Suisse','Belgique','Grèce','Suède','Norvège','Finlande','Bruxelles','Autriche','Pologne','Ouagadougou','Croatie','Budapest','Portugal','Irlande','Écosse','Angleterre','Galice','Israël','Turquie','Corée','Singapour','Thaïlande','Philippines','Vietnam','Malaisie','Indonésie','Pakistan','Bichkek','Irak','Iran','Arabie','Syrie','Liban','Jordanie','Algérie','Tunisie','Libye','Soudan','Mali','Chili','Pérou','Colombie','Venezuela','Cuba','Bahamas','Jamaïque','Groenland','Islande','Madagascar','Nouvelle-Zélande','Fidji','Hawaï','Alaska','Californie','Nevada','Floride','Texas','Amazonie','Himalaya','Alpes','Pyrénées','Rocky','Everest','Sahara','Gobi','Désert','Niger','Nil','Amazon','Mississippi','Volga','Thames','Danube','Seine','Garonne','Rhin','Baikal','Victoria','Titicaca','Tanganyika','Ontario','Supérieur','Huron','Erie','Michigan','Caspien'
    ],
  },
  {
    key: 'global',
    name: 'Global',
    words: [
      'Chat','Chien','Maison','Voiture','Téléphone','Ordinateur','Arbre','Fleur','Soleil','Lune','Étoile','Nuage','Pluie','Neige','Vent','Feu','Eau','Terre','Montagne','Rivière','Forêt','Pont','Route','Chemin','Pain','Fromage','Pizza','Chocolat','Gâteau','Bonbon','Bateau','Avion','Train','Bicyclette','Cahier','Livre','Stylo','Crayon','Papier','Table','Chaise','Lit','Lampe','Télévision','Radio','Horloge','Souris','Clavier','Fenêtre','Porte','Mur','Toit','Parapluie','Sac','Chapeau','Chaussure','Veste','Pantalon','Robe','Chemise','Bébé','Enfant','Adulte','Mamie','Papi','Famille','Ami','Voisin','École','Université','Travail','Fête','Voyage','Vacances','Musique','Film','Danse','Photo','Couleur','Animal','Oiseau','Poisson','Serpent','Tigre','Lion','Cheval','Lapin','Cochon','Mouton','Vache','Poule','Canard','Singe','Éléphant','Giraffe','Loup','Renard','Ours','Papillon','Fourmi','Araignée','Lunette','Montre','Clé','Argent','Billet','Pièce'
    ],
  },
  {
    key: 'sport',
    name: 'Sport',
    words: [
      'Jordan','Messi','LeBron','Kobe','Nadal','Federer','Serena','Usain','Bolt','Phelps','Tiger','Woods','Maradona','Pelé','Zidane','Neymar','Haaland','Cruyff','Beckham','Toure','Rakitic','Modric','Gerrard','Suarez','Nistelrooy','Puyol','Iniesta','Xavi','Ronaldinho','Giggs','Penalty','Dribble','Assist','Tacle','Corner','Gardien','Défenseur','Formation','Ace','Match','Break','Playoffs','Stade','Dojo','Gymnase','Volley','Ski','Essai','But','Futsal','Basketball','Soccer','Football','Tennis','Baseball','Boxe','Rugby','Hockey','Cricket','Golf','Handball','Vélo','Marathon','Sprint','Olympique','Paralympiques','Mondial','Open','Dunk','Alley-oop','Layup','Pivot','Meneur','Lancer','Marteau','Ring','Uppercut','Jab','Poids','TKO','Cage','Round','Champion','Heavyweight'
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

  useEffect(() => {
    // if category is selected, prepare deck but don't start yet
    if (selectedCategory) {
      const pick = sampleN(selectedCategory.words, 13)
      setDeck(pick)
      setCurrentIndex(0)
      setPoints(0)
      setCardsRemaining(13)
      setWordVisible(true)
      setMessage('Prêt à lancer la partie')
    }
  }, [selectedCategory])

  function startGame() {
    if (!selectedCategory) return
    setGameStarted(true)
    setMessage('Partie en cours')
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
    setWordVisible(true)
  }

  const windowTitle = useMemo(() => {
    if (!selectedCategory) return 'Juste Un — Accueil'
    return `Juste Un — ${selectedCategory.name}`
  }, [selectedCategory])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900 flex flex-col">
      {/* Header */}
      <header className="w-full sticky top-0 z-20 backdrop-blur bg-white/60 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">JU</div>
              <div>
                <h1 className="text-lg font-semibold">Juste Un</h1>
                <p className="text-xs text-slate-500">Mobile-first · responsive · Next.js 15</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <span className="text-sm text-slate-600">{windowTitle}</span>
              <button
                className="px-3 py-1 rounded-md bg-sky-100 text-sky-700 text-sm"
                onClick={() => {
                  setSelectedCategory(null)
                  setGameStarted(false)
                  setDeck([])
                }}
              >
                Réinitialiser
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left column: controls */}
            <aside className="md:col-span-1">
              <div className="bg-white/80 border rounded-2xl p-4 shadow-sm sticky top-24">
                <h2 className="text-base font-semibold mb-2">Catégories</h2>
                <div className="grid grid-cols-3 md:grid-cols-1 gap-2">
                  {CATEGORIES.map((c) => (
                    <button
                      key={c.key}
                      onClick={() => {
                        setSelectedCategory(c.key === 'home' ? null : c)
                        setActiveTab(c.key)
                        setGameStarted(false)
                        setShowEndModal(false)
                      }}
                      className={`px-3 py-2 rounded-lg text-sm text-left shadow-sm border ${selectedCategory?.key === c.key ? 'bg-sky-500 text-white border-sky-600' : 'bg-white text-slate-700'}`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>

                <div className="mt-4">
                  <h3 className="text-sm font-medium">Choix rapide</h3>
                  <p className="text-xs text-slate-500">Sélectionne une catégorie puis lance une partie de 13 mots.</p>
                  <div className="mt-3 flex gap-2">
                    <button
                      className="flex-1 px-3 py-2 rounded-lg bg-sky-600 text-white text-sm"
                      onClick={startGame}
                      disabled={!selectedCategory || gameStarted}
                    >
                      Lancer
                    </button>
                    <button
                      className="px-3 py-2 rounded-lg bg-white border text-sm"
                      onClick={resetGame}
                    >
                      Reset
                    </button>
                  </div>
                </div>

                <div className="mt-4 text-sm">
                  <p>Statut: <span className="font-medium">{message}</span></p>
                  <p>Points: <span className="font-semibold">{points}</span></p>
                  <p>Cartes restantes: <span className="font-semibold">{cardsRemaining}</span></p>
                </div>
              </div>

              {/* small help card */}
              <div className="mt-4 hidden md:block">
                <div className="bg-gradient-to-r from-sky-50 to-white border rounded-2xl p-4">
                  <h4 className="font-semibold">Règles rapides</h4>
                  <ol className="text-sm text-slate-600 mt-2 space-y-1 list-decimal list-inside">
                    <li>Un joueur devine le mot, les autres donnent un indice chacun.</li>
                    <li>Indices identiques sont éliminés.</li>
                    <li>Réussi: +1 point — Échouer: -2 cartes — Passer: -1 carte.</li>
                    <li>Objectif: garder un maximum de cartes (13 max).</li>
                  </ol>
                </div>
              </div>
            </aside>

            {/* Middle column: game / home */}
            <section className="md:col-span-2">
              {!selectedCategory && (
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h2 className="text-2xl font-bold">Bienvenue sur Juste Un</h2>
                  <p className="mt-3 text-slate-600">Choisis une catégorie sur la gauche (ou en bas sur mobile) puis clique sur <strong>Lancer</strong> pour démarrer une partie de 13 mots.</p>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {CATEGORIES.filter(c => c.key !== 'home').slice(0,6).map(c => (
                      <div key={c.key} className="p-3 rounded-xl border bg-white/50">
                        <h3 className="text-sm font-semibold">{c.name}</h3>
                        <p className="text-xs text-slate-500 mt-1">{c.words.length} mots</p>
                        <button className="mt-3 w-full py-2 rounded-md bg-sky-100 text-sky-700 text-sm" onClick={() => { setSelectedCategory(c); setActiveTab(c.key)}}>Sélectionner</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedCategory && (
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold">{selectedCategory.name}</h2>
                      <p className="text-sm text-slate-600">{deck.length} mots dans la sélection</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-sm text-slate-600">Cartes: <span className="font-semibold">{cardsRemaining}</span></div>
                      <div className="text-sm text-slate-600">Points: <span className="font-semibold">{points}</span></div>
                      <button className="px-3 py-2 rounded-lg bg-white border text-sm" onClick={resetGame}>Réinitialiser</button>
                    </div>
                  </div>

                  <div className="mt-6">
                    {/* Card with word */}
                    <div className="mx-auto max-w-3xl">
                      <div className="rounded-2xl border p-6 shadow-lg bg-gradient-to-br from-white to-sky-50">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="text-xs text-slate-500">Mot {currentIndex + 1} / {deck.length}</div>
                            <div className="mt-4">
                              <button
                                onClick={() => setWordVisible(v => !v)}
                                className="w-full text-left p-6 rounded-xl border-2 border-dashed hover:border-dashed hover:scale-[1.01] transition-all"
                                style={{ minHeight: 120 }}
                              >
                                <div className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                                  {wordVisible ? (deck[currentIndex] ?? '') : '— CACHÉ —'}
                                </div>
                                <div className="text-xs text-slate-400 mt-2 text-center">Touchez pour {wordVisible ? 'cacher' : 'montrer'}</div>
                              </button>
                            </div>
                          </div>

                          {/* controls column on wide screens */}
                          {isDesktop && (
                            <div className="w-48 flex flex-col gap-3">
                              <button onClick={() => handleResult('success')} className="py-3 rounded-lg bg-emerald-500 text-white font-semibold">Réussi</button>
                              <button onClick={() => handleResult('fail')} className="py-3 rounded-lg bg-rose-500 text-white font-semibold">Échouer</button>
                              <button onClick={() => handleResult('pass')} className="py-3 rounded-lg bg-amber-400 text-white font-semibold">Passer</button>
                            </div>
                          )}
                        </div>

                        {/* mobile controls */}
                        {!isDesktop && (
                          <div className="mt-6 grid grid-cols-3 gap-3">
                            <button onClick={() => handleResult('success')} className="py-3 rounded-lg bg-emerald-500 text-white font-semibold">Réussi</button>
                            <button onClick={() => handleResult('fail')} className="py-3 rounded-lg bg-rose-500 text-white font-semibold">Échouer</button>
                            <button onClick={() => handleResult('pass')} className="py-3 rounded-lg bg-amber-400 text-white font-semibold">Passer</button>
                          </div>
                        )}

                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>

      {/* Bottom navigation (mobile-first) */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[min(980px,calc(100%-32px))] md:hidden z-30">
        <div className="bg-white/90 border rounded-3xl shadow-lg p-2 flex justify-between">
          {CATEGORIES.slice(0,5).map((c) => (
            <button key={c.key} onClick={() => { setActiveTab(c.key); setSelectedCategory(c.key === 'home' ? null : c); setShowEndModal(false) }} className={`flex-1 py-2 px-2 rounded-xl text-xs ${activeTab === c.key ? 'bg-sky-500 text-white' : 'text-slate-700'}`}>
              <div className="text-center font-medium">{c.name}</div>
            </button>
          ))}
        </div>
      </nav>

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
              <button className="px-4 py-2 rounded-lg bg-sky-600 text-white" onClick={() => { resetGame(); setGameStarted(true); setShowEndModal(false); }}>Rejouer</button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
