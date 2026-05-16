/* ════════════════════════════════════════
   SUPERA RX — ANÁLISE ESTRATÉGICA
   script.js v3 — share real Supera vs Concorrentes + header fixo ordenável
   ════════════════════════════════════════ */

/* ===== MAPA OFICIAL: 87 MERCADOS (Supera × Concorrentes) =====
   Gerado a partir da planilha MARCASCONCORRENTES-SUPERA-MERCADOS.
   A chave é o nome do mercado (UPPER). Cada entrada traz a lista de
   marcas Supera e concorrentes daquele mercado.                      */
const MARKETS_BRANDS_MAP = { "ALEVO": { "supera": ["ALEVO (SP0)"], "concorrentes": ["LEVOXIN (AS2)", "LIVEPAX (A4H)", "TAMIRAM (EUF)", "TAVOK (EUF)"] }, "ALONG-C": { "supera": ["ALONG-C (SP0)"], "concorrentes": ["COLFLEX CURCUMA (MF+)", "CONDRES LONGBIO (EMS)", "CURC (MF+)", "MOTORE (A4H)"] }, "ALPES XL": { "supera": ["ALPES XL (SP0)"], "concorrentes": ["BUP XL (EUF)", "BUPIUM (EMS)", "BUPIUM XL (EMS)", "WELLBUTRIN XL (GSK)", "ZETRON XL (LIB)"] }, "AMYTRIL": { "supera": ["AMYTRIL (SP0)"], "concorrentes": ["ANAFRANIL (SDZ)", "ANAFRANIL SR (SDZ)", "CLO (B3H)", "IMIPRA (CT6)", "MITRIP (MYL)", "PAMELOR (CLR)"] }, "ANDES": { "supera": ["ANDES (SP0)"], "concorrentes": ["DELLER (A4H)", "DESDUO (TNT)", "DESVE (EUF)", "ELIFORE (PFZ)", "IMENSE (EMS)", "PRISTIQ (PFZ)"] }, "APICE": { "supera": ["APICE (SP0)"], "concorrentes": ["DORENE (A4H)", "INSIT (AS2)", "LIMIAR (EUF)", "LYRICA (VI/)"] }, "ASEA": { "supera": ["ASEA (SP0)"], "concorrentes": ["BENICAR (DCS)", "OLMECOR (TNT)", "OLMETEC (PFZ)"] }, "ASEA HCT": { "supera": ["ASEA HCT (SP0)"], "concorrentes": ["BENICAR HCT (DCS)", "HOLMES H (EUF)"] }, "ATEROMA": { "supera": ["ATEROMA (SP0)"], "concorrentes": ["CITALOR (VI/)", "LIPITOR (VI/)", "VAST (EUF)"] }, "ATESTO": { "supera": ["ATESTO (SP0)"], "concorrentes": ["DAEM (EUF)", "DURATESTON (A3N)", "HORMUS (EUF)", "NEBIDO (GRT)", "UND TESTOSTERON MG (EUF)"] }, "ATIP": { "supera": ["ATIP (SP0)"], "concorrentes": ["QUET (EUF)", "QUETIPIN (CT6)", "QUETROS (A4H)", "SEROQUEL IR (MA8)"] }, "ATIP XR": { "supera": ["ATIP XR (SP0)"], "concorrentes": ["QUEPSIA LP (EUF)", "QUET XR (EUF)", "SEROQUEL XRO (MA8)"] }, "AVAL": { "supera": ["AVAL (SP0)"], "concorrentes": ["BRASART (EMS)", "BRAVAN (A4H)", "DIOVAN (FQM)"] }, "AZOD": { "supera": ["AZOD (SP0)"], "concorrentes": ["DONAREN (AS2)", "LOREDON (TNT)", "MOTRAZ (EUF)", "SONIC (EUF)"] }, "BARIAT XR": { "supera": ["BARIAT XR (SP0)"], "concorrentes": ["BARIATRON (A4I)", "BARISTAR (CLR)", "QUELATUS BARI (EUF)"] }, "BARIAT XR CALCIO": { "supera": ["BARIAT XR CALCIO (SP0)"], "concorrentes": ["CALDE MDK (MJA)", "MOBILITY OSCAL (O/P)", "MOBILITY OSCAL D (O/P)", "OSTEONUTRI (A3N)"] }, "BENZETACIL": { "supera": ["BENZETACIL (SP0)", "BIOFLAC (SP0)"], "concorrentes": [] }, "BIQUIZ": { "supera": ["BIQUIZ (SP0)", "CARLIT (SP0)"], "concorrentes": ["AIPRI (MF+)", "ARISTAB (A4H)", "TOARIP (TNT)", "CARBOLITIUM (EUF)", "CARBOLITIUM CR (EUF)"] }, "CIBEX": { "supera": ["CIBEX (SP0)"], "concorrentes": ["CELEBRA (VI/)", "COQUES (EUF)", "DUCOX (EUF)", "FOXIS (A4H)"] }, "COD": { "supera": ["COD (SP0)"], "concorrentes": ["CODEIN (CT6)", "NOVOTRAM (MF+)", "TRAMADON (CT6)", "TRAMAL (GRT)", "TRAMAL RETARD (GRT)"] }, "COD PAR": { "supera": ["COD PAR (SP0)"], "concorrentes": ["ALGICOD (EUF)", "PACO (EUF)", "TYLEX (CLR)"] }, "DBRIZ": { "supera": ["DBRIZ (SP0)"], "concorrentes": ["IRUXOL (ABD)", "KOLLAGENASE C/CLOR (CT6)"] }, "DBRIZ GINO": { "supera": ["DBRIZ GINO (SP0)"], "concorrentes": ["GINO KOLLAGENASE (CT6)", "GYNO-IRUXOL (ABD)", "KOLPOCERVIX (ZY-)"] }, "DBRIZ UNO": { "supera": ["DBRIZ UNO (SP0)"], "concorrentes": ["IRUXOL MONO (ABD)", "KOLLAGENASE (CT6)"] }, "DEKSA": { "supera": ["DEKSA (SP0)"], "concorrentes": ["JUNEVE (TAK)", "LIND (EUF)", "LISDEV (EUF)", "LISVENX (TNT)", "LYBERDIA (EMS)", "LYSDEXA (LIB)", "VENVANSE (TAK)"] }, "DELA COLIN": { "supera": ["DELA COLIN (SP0)", "DENYL (SP0)"], "concorrentes": ["FEMIBION (PGH)", "MEGA MATER (U.Q)", "NEUTROFER FOLATO D (EMS)", "OFOLATO D FER (MF+)", "OFOLATO FER (MF+)", "CITTA (EUF)", "MAXAPRAN (A4H)", "PROCIMAX (LIB)"] }, "DHIVAS": { "supera": ["DHIVAS (SP0)"], "concorrentes": ["DAFLON 1000 (SVR)", "DAFLON 1000 FLEX (SVR)", "DIOSMIN (A4H)", "PERIVASC (EUF)", "VENAFLON (TTB)"] }, "DIOLESS": { "supera": ["DIOLESS (SP0)"], "concorrentes": ["FEMINA (A4H)", "MERCILON (ORG)", "MINIAN (LIB)", "PRIMERA (EUF)"] }, "DIUPRESS": { "supera": ["DIUPRESS (SP0)"], "concorrentes": ["CLOR.AMILO+HCT MG (EMS)", "CLORANA (S.A)", "DIURIX (TTB)", "INDAPAMIDA MG (EMS)", "INDAPAMIDA MG (EUF)", "INDAPAMIDA MG (GM2)", "INDAPAMIDA MG (GOB)", "INDAPAMIDA MG (PZ8)", "INDAPAMIDA MG (TNT)", "INDAPEN SR (TNT)", "NATRILIX SR (SVR)"] }, "DUOFLAM": { "supera": ["DUOFLAM (SP0)"], "concorrentes": ["BETATRINTA (EUF)", "DIPROSPAN (MF+)", "PERMESE (EUF)"] }, "FIBRINASE 15G": { "supera": ["FIBRINASE (SP0)"], "concorrentes": ["IRUXOL MONO (ABD)", "KOLLAGENASE C/CLOR (CT6)", "IRUXOL (ABD)", "KOLLAGENASE (CT6)"] }, "FILINAR": { "supera": ["FILINAR (SP0)"], "concorrentes": ["BRONDILAT (A4H)", "MELYSSE (A4H)"] }, "FLUXENE": { "supera": ["FLUXENE (SP0)"], "concorrentes": ["DAFORIN (EMS)", "PROZAC 20 (LLY)", "VEROTINA (LIB)"] }, "GAZIA": { "supera": ["GAZIA (SP0)"], "concorrentes": ["ADIPEPT (A4H)", "DIVENA (A4H)", "INILOK (AS2)", "PRAZY (LR8)", "RESTITUE (EMS)"] }, "HELLEVA": { "supera": ["HELLEVA (SP0)"], "concorrentes": ["VIAGRA (VI/)"] }, "HEZO": { "supera": ["HEZO (SP0)"], "concorrentes": ["EZONIA (EUF)", "PRYSMA (EUF)", "STILNOX CR (S.A)"] }, "HIXIZINE": { "supera": ["HIXIZINE (SP0)", "IBANUNO (SP0)"], "concorrentes": ["FENERGAN (O/P)", "PERGO (EUF)", "POLARAMINE (HCH)", "AFRAT (CT6)", "OSTEOBAN (A4H)", "RISEDROSS (EMS)"] }, "KETALGI": { "supera": ["KETALGI (SP0)"], "concorrentes": ["ETOD (CT6)", "ETODOLACO MG (AH/)", "ETODOLACO MG (GM2)", "FLANCOX (AS2)"] }, "LANICO COMP": { "supera": ["LANICO (SP0)"], "concorrentes": ["ATAK CLAV (EUF)", "CLAVULIN BD (GSK)", "NOVAMOX (A4H)", "SINOT CLAV (EUF)"] }, "LANICO SUSP": { "supera": ["LANICO (SP0)"], "concorrentes": ["ATAK CLAV (EUF)", "CLAVULIN BD (GSK)", "NOVAMOX (A4H)", "SINOT CLAV (EUF)"] }, "LONGFLEX": { "supera": ["LONGFLEX (SP0)"], "concorrentes": ["COLFLEX HIALU (MF+)", "FORTICE (EUF)", "MOTILEX HA (AS2)"] }, "MINERGI": { "supera": ["MINERGI (SP0)"], "concorrentes": ["PISA (EUF)", "QUERA LP (CT6)"] }, "MULTI BI": { "supera": ["MULTI-BI (SP0)"], "concorrentes": ["20 BI (EUF)", "BIOTTA 25BI (MJA)", "PROBIATOP (FQM)", "PROBID (AS2)", "PROLIVE (A4H)"] }, "MULTI BI FIBRAS": { "supera": ["MULTI-BI FIBRAS (SP0)"], "concorrentes": ["20 BI FIBRAS (EUF)", "PROHN (A4H)", "PROHN FIBRAS (A4H)", "SIMBIOFLORA (FQM)", "SIMBIOFLORA MULTI (FQM)"] }, "MULTI-BI GOTAS": { "supera": ["MULTI-BI (SP0)"], "concorrentes": ["COLIDIS (A4H)", "CULTURELLE (CLR)", "FLORIPA (EUF)", "KOLLIS (EMS)"] }, "NAZZO": { "supera": ["NAZZO (SP0)"], "concorrentes": ["MARESIS FLEX (FQM)", "NARIDRIN ALTO VOLU (EMS)", "NASOAR (MYL)", "RINOSORO (MF+)"] }, "NAZZO H": { "supera": ["NAZZO H (SP0)"], "concorrentes": ["MAXIDRATE (LIB)", "PENETRO (MLB)", "SINUSEC (BS2)", "SINUSTRAT (BS2)"] }, "NAZZO HIALUJET": { "supera": ["NAZZO HIALUJET (SP0)"], "concorrentes": ["MARESIS (FQM)", "RINOSORO (MF+)", "SALSEP JET (LIB)", "SORINE (A4H)"] }, "NAZZO INF": { "supera": ["NAZZO INFANTIL (SP0)"], "concorrentes": ["MARESIS FLEX (FQM)", "NASOAR (MYL)", "RESPIR KIDS (U.Q)", "RINOSORO (MF+)"] }, "NAZZO NEBULIZE": { "supera": ["NAZZO NEBULIZE (SP0)"], "concorrentes": ["ATROVENT (B.I)", "PULMICORT (FQM)"] }, "NAZZO OTO": { "supera": ["NAZZO OTO (SP0)"], "concorrentes": ["ACERATUM (CLR)", "CERUMIN (NVR)", "OTODRAT (AEE)"] }, "NAZZO XT": { "supera": ["NAZZO XT (SP0)", "NEUMOSIN (SP0)"], "concorrentes": ["NASOAR (MYL)", "RINOSORO (MF+)", "AVALOX (BYP)", "PRAIVA (EUF)"] }, "NIMEGON": { "supera": ["NIMEGON (SP0)"], "concorrentes": ["GALVUS (FQM)", "JANUVIA (MSD)", "NESINA (HYQ)", "SITGLU (B3H)", "SUGANON (EUF)"] }, "NIMEGON MET": { "supera": ["NIMEGON MET (SP0)"], "concorrentes": ["GALVUS MET (FQM)", "JANUMET (MSD)", "JANUMET XR (MSD)", "NESINA MET (HYQ)", "SITGLU MET (B3H)"] }, "OKOTICO": { "supera": ["OKOTICO (SP0)"], "concorrentes": ["LEPONEX (VI/)", "PINAZAN (CT6)"] }, "PEN VE ORAL": { "supera": ["PEN-VE-ORAL (SP0)"], "concorrentes": [] }, "PERCOF": { "supera": ["PERCOF (SP0)"], "concorrentes": ["ANTUX (A4H)", "NOTUSS TSS (A4H)", "VIBRAL (ABD)"] }, "PHOSFOENEMA": { "supera": ["PHOSFOENEMA (SP0)"], "concorrentes": ["L-ENEMA (NAU)"] }, "PROMIM": { "supera": ["PROMIM (SP0)"], "concorrentes": ["ANTROFI (EUF)", "COLPOTROFINE (TRM)", "COLTRIENO (MYL)"] }, "PROS": { "supera": ["PROS (SP0)"], "concorrentes": ["DOXAPROST (U.Q)", "DUOMO (EUF)"] }, "PROS HP": { "supera": ["PROS HP (SP0)"], "concorrentes": ["DUOMO HP (EUF)", "HOMINUS (EUF)"] }, "RENOVI B": { "supera": ["RENOVI B (SP0)"], "concorrentes": ["BETRAT (MYL)", "CITOBE (EUF)", "CITONEURIN 5000 (PGH)", "CRONOBE COMPLEX (BS2)", "NEO B (EUF)", "NEVRIX (AEE)"] }, "RENOVI B PLUS": { "supera": ["RENOVI B PLUS (SP0)"], "concorrentes": ["CRONOBE COMPLEX (BS2)", "DEXA-CITONEURI NFF (PGH)", "DEXADOR (AEE)"] }, "RISPERIDON": { "supera": ["RISPERIDON (SP0)"], "concorrentes": ["RISS (EUF)", "VIVERDAL (U.Q)", "ZARGUS (A4H)"] }, "RISPERIDON SOL": { "supera": ["RISPERIDON (SP0)"], "concorrentes": ["PERLID (PZ8)", "RISPERDAL (CLR)", "RISPERIDONA MG (EMS)", "RISPERIDONA MG (GM2)", "RISPERIDONA MG (NQA)", "RISPERIDONA MG (PZ8)"] }, "ROXETIN": { "supera": ["ROXETIN (SP0)"], "concorrentes": ["AROPAX (GSK)", "MORATUS (A4H)", "PONDERA (EUF)"] }, "ROXETIN XR": { "supera": ["ROXETIN XR (SP0)"], "concorrentes": ["PAXIL CR (GSK)", "PONDERA XR (EUF)", "SINCRO XR (EUF)"] }, "SENES": { "supera": ["SENES (SP0)"], "concorrentes": ["DON (EUF)", "DONILA (A4H)", "EPEZ (TNT)"] }, "SIMECO PLUS": { "supera": ["SIMECO PLUS (SP0)"], "concorrentes": ["GASTROBION (HTZ)", "GASTROGEL (MDQ)", "MAGNAZIA (CM5)", "MYLANTA PLUS (KVU)", "PEPSOGEL (LR8)", "STOMALIV STC (GOB)"] }, "SOPI": { "supera": ["SOPI (SP0)"], "concorrentes": ["FERTISOP (MYL)", "FOLIA SOP (GRO)", "OFOLATO SOP (MF+)"] }, "SOPI H": { "supera": ["SOPI H (SP0)"], "concorrentes": ["ANDRACTIV (B4I)", "VITERGAN ZINCO PL (MJA)", "VITERGAN ZINCO PLD (MJA)", "ANSITEC (LIB)", "APRAZ (MF+)", "DIAZEPAM NQ (MB9)", "FRISIUM (MA8)", "FRONTAL (VI/)", "LEXOTAN (MA8)", "SOMALIUM (A4H)"] }, "TAM": { "supera": ["TAM (SP0)"], "concorrentes": ["ANTARA (EUF)", "ETIRA (A4H)", "KEPPRA (UCB)"] }, "TAM SOL": { "supera": ["TAM (SP0)"], "concorrentes": ["ANTARA (EUF)", "ETIRA (A4H)", "KEPPRA (UCB)", "SPARK (EUF)"] }, "TAM XR": { "supera": ["TAM XR (SP0)"], "concorrentes": ["ANTARA XR (EUF)", "KEPPRA XR (UCB)", "SPARK XR (EUF)"] }, "TRIPLOA": { "supera": ["TRIPLOA (SP0)"], "concorrentes": ["ALGIE (EUF)", "ARTROSIL (A4H)", "BICERTO (EUF)", "BI-PROFENID (S.A)"] }, "TROL": { "supera": ["TROL (SP0)"], "concorrentes": ["GESICO RETARD (EUF)", "TRAMADON (CT6)", "TRAMAL RETARD (GRT)", "TRAUM RETARD (A4H)"] }, "TROL PAR": { "supera": ["TROL PAR (SP0)"], "concorrentes": ["ATRACE (EUF)", "GESICO DUO (EUF)", "PARATRAM (A5U)", "REVANGE (A4H)"] }, "TYNNA": { "supera": ["TYNNA (SP0)"], "concorrentes": ["ALEKTOS (HYQ)", "HISBILA (EUF)", "NAIRE (EUF)"] }, "ULTROX": { "supera": ["ULTROX (SP0)"], "concorrentes": ["CETROLAC SL (U.Q)", "SYMDULOR SL (A5U)", "TORAGESIC (EMS)", "TORMIV SL (A4H)", "TOTTI SL (A4H)"] }, "VAGICAND": { "supera": ["VAGICAND (SP0)"], "concorrentes": [] }, "VALASKI": { "supera": ["VALASKI (SP0)"], "concorrentes": ["DENPRYX (FQM)", "HERPSTAL (UKT)", "VALTREX (GSK)", "VILAXY (EUF)"] }, "VITA COLIN": { "supera": ["VITA COLIN (SP0)"], "concorrentes": ["DAYVIT KIDS (A4H)", "FERROVITAN COLINA (EUF)", "NEUTROFER POLI (EMS)", "NEUTROFER PREV (EMS)", "PURAVIT IMUNE (MYL)", "ZIRVIT KIDS (AEE)", "ZIRVIT KIDS MAX (AEE)"] }, "VIVAMENT": { "supera": ["VIVAMENT (SP0)"], "concorrentes": ["COGMAX (EUF)", "COGMAX FOS (EUF)", "COGNI MAIS (FQM)", "COGNICX (U.Q)", "LOGNIS (AS2)", "QUELATUS MIND (EUF)"] }, "VIVOSSO": { "supera": ["VIVOSSO (SP0)"], "concorrentes": ["CALDE (MJA)", "CALDE MAX (MJA)", "CALTRATE D NF (HE4)", "MOBILITY OSCAL (O/P)", "MOBILITY OSCAL D (O/P)", "OS-CAL D (O/P)", "OSSOTRAT-D (CLR)", "OSTEONUTRI (A3N)", "PROSSO (EUF)"] }, "VIVOSSO PRO": { "supera": ["VIVOSSO PRO (SP0)"], "concorrentes": ["ADDERA CAL (MF+)", "CALDE K2 (MJA)", "CALDE MDK (MJA)", "FIXARE (EMS)", "OS-CAL D (O/P)", "PROSSO (EUF)", "PROSSO D+KM (EUF)"] }, "VORXE": { "supera": ["VORXE (SP0)"], "concorrentes": ["BRINTELLIX (LUN)", "EVORTIA (MF+)", "VOEXTOR (LIB)", "VOGNUS (EMS)", "VURTUOSO (LUN)"] }, "ZOUP SL": { "supera": ["ZOUP SL (SP0)"], "concorrentes": ["LUNE SL (MF+)", "PATZ SL (EMS)", "RIPOSO SL (EUF)", "TURNO SL (EUF)"] } };

/* ===== EXCLUSÕES DE CONCORRENTES POR MERCADO =====
   Concorrentes listados aqui são ignorados no ranking de bricks e nos badges
   do Resumo Geral, mas mantidos no modal "Ver" (visão completa).
   Formato: { 'MERCADO': Set(['PRODUTO (LAB)', ...]) }
================================================================== */
const MARKET_BRICK_EXCLUSIONS = {
    'ATESTO': new Set(['DURATESTON (A3N)'])
};

function getExclusionsForMarket(market) {
    return MARKET_BRICK_EXCLUSIONS[normU(market)] || MARKET_BRICK_EXCLUSIONS[market] || null;
}


/* Lookup rápido normalizado: nome do produto (upper, sem acento) → 'SUPERA' | 'CONCORRENTE' */
const PRODUCT_ROLE = (() => {
    const map = new Map();
    const _n = s => String(s || '').toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
    for (const mkt in MARKETS_BRANDS_MAP) {
        const v = MARKETS_BRANDS_MAP[mkt];
        v.supera.forEach(p => map.set(_n(p), 'SUPERA'));
        v.concorrentes.forEach(p => map.set(_n(p), 'CONCORRENTE'));
    }
    return map;
})();

/* ===== PERSISTÊNCIA INDEXEDDB (v6.2) ===== */
const DBPersist = (() => {
    const DB_NAME = 'SuperaRX';
    const STORE_NAME = 'dashboardData';
    const KEY = 'savedData';
    let db = null;

    const init = async () => {
        /* v6.11 — Abre com versão 2 (compatível com upgrade prévio que criou
           outro objectStore). Em onupgradeneeded garantimos que o store
           primário sempre existe; em VersionError, descartamos e recriamos. */
        const tryOpen = (version) => new Promise((resolve, reject) => {
            const req = indexedDB.open(DB_NAME, version);
            req.onupgradeneeded = e => {
                const _db = e.target.result;
                if (!_db.objectStoreNames.contains(STORE_NAME)) {
                    _db.createObjectStore(STORE_NAME);
                }
            };
            req.onsuccess = () => { db = req.result; resolve(db); };
            req.onerror = () => reject(req.error);
            req.onblocked = () => reject(new Error('blocked'));
        });
        try {
            return await tryOpen(2);
        } catch (e) {
            /* Se falhar, tenta sem versao (abre na versão atual existente) */
            return await new Promise((resolve, reject) => {
                const req = indexedDB.open(DB_NAME);
                req.onsuccess = () => {
                    db = req.result;
                    if (!db.objectStoreNames.contains(STORE_NAME)) {
                        /* Store primário não existe — recria o banco */
                        db.close();
                        const delReq = indexedDB.deleteDatabase(DB_NAME);
                        delReq.onsuccess = async () => {
                            try { resolve(await tryOpen(1)); } catch (er) { reject(er); }
                        };
                        delReq.onerror = () => reject(delReq.error);
                        return;
                    }
                    resolve(db);
                };
                req.onerror = () => reject(req.error);
            });
        }
    };

    const save = async (data) => {
        if (!db) await init();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            const req = store.put(data, KEY);
            req.onsuccess = () => resolve();
            req.onerror = () => reject(req.error);
        });
    };

    const load = async () => {
        if (!db) await init();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(STORE_NAME, 'readonly');
            const store = tx.objectStore(STORE_NAME);
            const req = store.get(KEY);
            req.onsuccess = () => resolve(req.result || null);
            req.onerror = () => reject(req.error);
        });
    };

    const clear = async () => {
        if (!db) await init();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            const req = store.delete(KEY);
            req.onsuccess = () => resolve();
            req.onerror = () => reject(req.error);
        });
    };

    return { init, save, load, clear };
})();

/* ===== STATE ===== */
let DB = {
    rows: [],
    rowsByValueMode: { UN: [], RS: [] },
    sectors: [],
    markets: [],
    /* v3.16 — hierarquia: regionais e distritais carregadas da planilha. */
    regionals: [],
    distritais: [],
};

let UI = {
    periodMode: 'MAT',
    /* v3.16 — níveis hierárquicos acima de Setor. */
    regional: 'all',
    distrital: 'all',
    sector: 'all',
    market: 'all',
    rec: 'all',
    search: '',
    unitMode: 'UN',
    expandedRows: new Set(),
    sortKey: 'current',
    sortDir: 'desc',
    /* v3.9 — ordenação da tabela Detalhe por Brick (sort por coluna). */
    brickSortKey: 'totalCur',
    brickSortDir: 'desc',
    /* Exclusões temporárias de concorrentes por mercado (toggle pelo usuário) */
    marketExclusions: {}   // { 'ATESTO': true/false, ... }
};

/* Alterna exclusão de concorrente em um mercado e re-renderiza o Resumo */
function toggleMarketExclusion(market) {
    const key = normU(market);
    // Se não existe na configuração base, não há o que toglar
    const base = MARKET_BRICK_EXCLUSIONS[key] || MARKET_BRICK_EXCLUSIONS[market];
    if (!base) return;
    // false = excluído ativo (padrão), true = incluído (toggle ligado)
    UI.marketExclusions[key] = !UI.marketExclusions[key];
    renderResumo();
}

/* Retorna exclusões efetivas considerando o toggle do usuário */
function getEffectiveExclusions(market) {
    const key = normU(market);
    const base = MARKET_BRICK_EXCLUSIONS[key] || MARKET_BRICK_EXCLUSIONS[market];
    if (!base) return null;
    // Se o usuário ativou o toggle (incluir tudo), retorna null (sem exclusão)
    if (UI.marketExclusions[key]) return null;
    return base;
}

/* ===== HELPERS ===== */
const $ = id => document.getElementById(id);
const norm = s => String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
const normU = s => String(s || '').toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
const fmtN = n => n == null || n === 0 ? '—' : Math.round(n).toLocaleString('pt-BR');
const fmtCurrency = n => n == null || n === 0 ? '—' : 'R$ ' + Number(n).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtValue = n => UI.unitMode === 'RS' ? fmtCurrency(n) : fmtN(n);
const fmtPct = n => n == null ? '—' : (n >= 0 ? '+' : '') + (n * 100).toFixed(1) + '%';

/* Classifica produto via mapa; fallback no sufixo (SP0) para Supera */
function productRole(productName) {
    const key = normU(productName);
    if (PRODUCT_ROLE.has(key)) return PRODUCT_ROLE.get(key);
    if (/\(SP0\)/i.test(productName || '')) return 'SUPERA';
    return 'CONCORRENTE';
}
const isSupera = name => productRole(name) === 'SUPERA';

function toast(msg, type, duration) {
    // type: 'info' (padrão) | 'warn' | 'error' | 'success'
    // duration: ms (padrão: 3000; warn/error: 6000)
    const kind = type || 'info';
    const ms = duration != null ? duration : (kind === 'warn' || kind === 'error' ? 6000 : 3000);
    const d = document.createElement('div');
    d.className = 'toast toast-' + kind;
    // Ícone por tipo
    const icons = { info: 'ℹ️', warn: '⚠️', error: '❌', success: '✅' };
    const icon = document.createElement('span');
    icon.className = 'toast-icon';
    icon.textContent = icons[kind] || 'ℹ️';
    const text = document.createElement('span');
    text.className = 'toast-text';
    text.textContent = msg;
    d.appendChild(icon);
    d.appendChild(text);
    document.body.appendChild(d);
    setTimeout(() => {
        d.style.animation = 'fadeOutDown .25s ease forwards';
        setTimeout(() => d.remove(), 260);
    }, ms);
}

/* ===== PARSE NUMBER ===== */
/* parseNum v3.3 — robusto p/ números BR e US, com 0..6 casas decimais.
   Regra: se houver vírgula → vírgula é decimal, ponto é milhar.
          se houver só ponto(s) → o ÚLTIMO ponto é decimal SEMPRE QUE
            (a) só existir 1 ponto, OU
            (b) os pontos não estiverem em posição de milhar (3 dígitos).
   Caso contrário pontos são separadores de milhar. */
function parseNum(v) {
    if (v == null || v === '') return 0;
    if (typeof v === 'number') return isNaN(v) ? 0 : v;
    let s = String(v).trim().replace(/[^\d.,-]/g, '');
    if (!s) return 0;
    const hasComma = s.indexOf(',') >= 0;
    const hasDot = s.indexOf('.') >= 0;
    if (hasComma && hasDot) {
        // formato BR "1.234,56" → vírgula = decimal
        s = s.replace(/\./g, '').replace(',', '.');
    } else if (hasComma) {
        // só vírgula → decimal BR
        s = s.replace(/\./g, '').replace(',', '.');
    } else if (hasDot) {
        // só ponto(s) — pode ser "1234.567" (decimal US c/ 3 casas) ou
        // "1.234.567" (milhar BR sem decimal). Se houver mais de UM ponto e
        // todos forem em posição válida de milhar, tratamos como milhar; caso
        // contrário o último ponto é decimal.
        const parts = s.split('.');
        const allMilharShape = parts.length > 1 && parts.slice(1).every(p => p.length === 3);
        if (parts.length > 2 && allMilharShape) {
            s = parts.join('');
        } else {
            // Último ponto é decimal
            s = parts.slice(0, -1).join('') + '.' + parts[parts.length - 1];
        }
    }
    const n = parseFloat(s);
    return isNaN(n) ? 0 : n;
}

/* ===== PARSE FILE =====
   v3.1 — detecção Un./R$ mais robusta:
     1) usuário pode forçar manualmente via `forceUnit` (botão # Un. / $ R$ ativo)
     2) nome do ARQUIVO (REAIS, R$, VALOR, FATUR, FATURAMENTO → RS; UNID, UN → UN)
     3) nome da ABA
     4) nome dos HEADERS da coluna MAT (MAT R$ → RS)
     5) fallback: UN                                                   */
function detectUnitMode({ fileName, sheetName, matHeader, forceUnit }) {
    const blob = (fileName + ' | ' + sheetName + ' | ' + (matHeader || '')).toLowerCase();
    const b = blob.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // O nome do arquivo tem PRIORIDADE MÁXIMA — se indica claramente o modo,
    // ignora o forceUnit do botão da UI para não classificar errado.
    const fileOnly = (fileName || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // VALOR/R$: reais, r$, $, ppp, valor
    if (/reais?|r\$|\$|\bppp\b|valor/.test(fileOnly)) return 'RS';
    // UNIDADES: unidades, uni, \bun\b (evita falso positivo em "função", "conjun", etc.)
    if (/unidades?|\buni\b|\bun\b|dddunid/.test(fileOnly)) return 'UN';

    // Sem indicação clara no nome: respeita o modo forçado pelo usuário (botão # Un. / $ R$)
    if (forceUnit === 'UN' || forceUnit === 'RS') return forceUnit;

    // Fallback: verifica aba e header da coluna MAT
    if (/reais?|r\$|\$|\bppp\b|valor/.test(b)) return 'RS';
    if (/unidades?|\buni\b|\bun\b|# ?un|dddunid/.test(b)) return 'UN';
    return 'UN';
}
/* v3.19 — Parser streaming + pré-agregação.
   Motivação: planilhas regionais podem ter centenas de milhares de linhas
   (ex.: REGIONALSULDDDR$.xlsx → 893k linhas). O parser anterior usava
   sheet_to_json() materializando TODOS os objetos antes de filtrar, o que
   estourava memória do navegador e travava a UI. Agora:
     - Usamos sheet_to_json com header:1 (matriz, sem objetos por linha).
     - Localizamos cada coluna pelo header.
     - Pré-agregamos por (regional|distrital|setor|mercado|marca|brick|cidade)
       somando MAT/YTD/TRI atual+anterior. O dashboard sempre soma isso adiante,
       então o resultado é IDÊNTICO — só evita criar objetos duplicados.
     - Liberamos o controle ao navegador a cada 50k linhas processadas
       (await yield) para não congelar a aba e atualizar progresso.
   Sem limite de linhas: processa tudo o que vier.                       */
function _yield() { return new Promise(r => setTimeout(r, 0)); }
function _setProgress(text) {
    const el = document.getElementById('uploadProgress');
    if (el) el.textContent = text;
    else console.log('[SUPERA]', text);
}

async function parseFiles(files, forceUnit) {
    if (typeof XLSX === 'undefined') throw new Error('Biblioteca XLSX não carregada.');

    const rowsByMode = { UN: [], RS: [] };
    const diagnostics = [];

    for (const file of files) {
        try {
            _setProgress('Lendo ' + file.name + '...');
            await _yield();
            const buf = await file.arrayBuffer();
            /* dense:true é obrigatório para planilhas grandes (>~600k linhas);
               sem ele, SheetJS retorna Sheets[name]=undefined silenciosamente. */
            const wb = XLSX.read(buf, { type: 'array', raw: false, dense: true, cellDates: false, cellNF: false, cellText: false });

            for (const sheetName of wb.SheetNames) {
                const ws = wb.Sheets[sheetName];
                if (!ws) continue;
                _setProgress('Processando aba ' + sheetName + '...');
                await _yield();

                /* AOA evita criar objeto por linha; muito mais leve em memória. */
                const aoa = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '', raw: false, blankrows: false });
                if (!aoa.length) continue;
                const headers = aoa[0].map(h => String(h || '').trim());
                if (!headers.length) continue;

                const findIdx = patterns => {
                    for (let i = 0; i < headers.length; i++) {
                        const n = norm(headers[i]);
                        if (patterns.some(p => p.test(n))) return i;
                    }
                    return -1;
                };
                const iRegional = findIdx([/^regional$/, /regional/]);
                const iDistrital = findIdx([/^distrital$/, /distrital/]);
                const iSetor = findIdx([/^setor(\s*\(gd\))?$/, /^gd$/, /^setor\s*gd$/]);
                const iMercado = findIdx([/^mercado$/, /^mercado\s*montado$/, /^mercado\s*terapeutico$/, /mercado/]);
                const iProduto = findIdx([/^produto$/, /^marca$/, /^produto\/marca$/, /^nome\s*(do\s*)?produto$/]);
                const iCidade = findIdx([/^cidade$/, /^municipio$/, /^munic[íi]pio$/, /cidade/]);
                const iBrick = findIdx([/^brick$/, /^cod\.?\s*brick$/, /^codigo\s*brick$/, /brick/]);

                const iMAT = findIdx([/^mat$/, /^mat\s*un\.?$/, /^mat\s*r\$?$/, /^mat\s*valor$/, /^mat\s*reais$/, /^mat\s*unidades?$/]);
                const iMATAnt = findIdx([/^mat\s+ant/, /^mat\s*anterior/]);
                const iCrescMAT = findIdx([/^cresc\.?\s*mat$/, /^crescimento\s*mat$/]);
                const iYTD = findIdx([/^ytd$/, /^ytd\s*un\.?$/, /^ytd\s*r\$?$/, /^ytd\s*valor$/, /^ytd\s*unidades?$/]);
                const iYTDAnt = findIdx([/^ytd\s+ant/, /^ytd\s*anterior/]);
                const iCrescYTD = findIdx([/^cresc\.?\s*ytd$/, /^crescimento\s*ytd$/]);
                const iTRI = findIdx([/^tri$/, /^tri\s*un\.?$/, /^tri\s*r\$?$/, /^tri\s*valor$/, /^tri\s*unidades?$/]);
                const iTRIAnt = findIdx([/^tri\s+ant/, /^tri\s*anterior/]);
                const iCrescTRI = findIdx([/^cresc\.?\s*tri$/, /^crescimento\s*tri$/]);

                if (iMAT < 0 && iYTD < 0 && iTRI < 0) {
                    console.warn('[SUPERA] Aba', sheetName, '— nenhuma coluna MAT/YTD/TRI detectada. Headers encontrados:', headers.join(' | '));
                    continue;
                }
                if (iMercado < 0) {
                    console.warn('[SUPERA] Aba', sheetName, '— coluna MERCADO não detectada. Headers:', headers.join(' | '));
                }

                const unitMode = detectUnitMode({
                    fileName: file.name,
                    sheetName,
                    matHeader: (iMAT >= 0 ? headers[iMAT] : (iYTD >= 0 ? headers[iYTD] : (iTRI >= 0 ? headers[iTRI] : ''))),
                    forceUnit
                });
                diagnostics.push({ file: file.name, sheet: sheetName, mode: unitMode, forced: !!forceUnit });
                console.log('[SUPERA] Aba', sheetName, '— colunas detectadas:', {
                    Regional: iRegional >= 0 ? headers[iRegional] : '❌ NÃO ENCONTRADO',
                    Distrital: iDistrital >= 0 ? headers[iDistrital] : '❌ NÃO ENCONTRADO',
                    Setor: iSetor >= 0 ? headers[iSetor] : '❌ NÃO ENCONTRADO',
                    Mercado: iMercado >= 0 ? headers[iMercado] : '❌ NÃO ENCONTRADO',
                    Produto: iProduto >= 0 ? headers[iProduto] : '❌ NÃO ENCONTRADO',
                    Cidade: iCidade >= 0 ? headers[iCidade] : '❌ NÃO ENCONTRADO',
                    Brick: iBrick >= 0 ? headers[iBrick] : '❌ NÃO ENCONTRADO',
                    MAT: iMAT >= 0 ? headers[iMAT] : '❌ NÃO ENCONTRADO',
                    MATAnt: iMATAnt >= 0 ? headers[iMATAnt] : '(sem coluna anterior)',
                    YTD: iYTD >= 0 ? headers[iYTD] : '(sem YTD)',
                    TRI: iTRI >= 0 ? headers[iTRI] : '(sem TRI)',
                    Modo: unitMode
                });

                /* Pré-agregação: chave = regional|distrital|setor|mercado|marca|brick|cidade */
                const agg = new Map();
                const total = aoa.length - 1;
                let processed = 0;
                let kept = 0;
                const CHUNK = 50000;

                /* ── VALIDAÇÃO: uso exclusivo da Regional Sul ──────────────────────────
                   Lê a primeira linha de dados e bloqueia se algum campo de hierarquia
                   não começar com o dígito 1.                                          */
                if (aoa.length > 1) {
                    const firstRow = aoa[1];
                    const chkReg = iRegional >= 0 ? String(firstRow[iRegional] || '').trim() : '';
                    const chkDist = iDistrital >= 0 ? String(firstRow[iDistrital] || '').trim() : '';
                    const chkSec = iSetor >= 0 ? String(firstRow[iSetor] || '').trim() : '';
                    const startsWithOne = v => !v || /^1/.test(String(v).replace(/\D/, ''));
                    if (!startsWithOne(chkReg) || !startsWithOne(chkDist) || !startsWithOne(chkSec)) {
                        showRegionalSulBlock();
                        return;
                    }
                }

                for (let r = 1; r < aoa.length; r++) {
                    const row = aoa[r];
                    if (!row || row.length === 0) continue;
                    const regional = iRegional >= 0 ? String(row[iRegional] || '').trim() : '';
                    const distrital = iDistrital >= 0 ? String(row[iDistrital] || '').trim() : '';
                    const sector = iSetor >= 0 ? String(row[iSetor] || '').trim() : 'Geral';
                    const market = iMercado >= 0 ? String(row[iMercado] || '').trim() : '';
                    const product = iProduto >= 0 ? String(row[iProduto] || '').trim() : '';
                    const cidade = iCidade >= 0 ? String(row[iCidade] || '').trim() : '';
                    const brickName = iBrick >= 0 ? String(row[iBrick] || '').trim() : '';

                    processed++;
                    if (!market || (!brickName && !product)) continue;

                    const mat = iMAT >= 0 ? parseNum(row[iMAT]) : 0;
                    const ytd = iYTD >= 0 ? parseNum(row[iYTD]) : 0;
                    const tri = iTRI >= 0 ? parseNum(row[iTRI]) : 0;
                    const matAnt = iMATAnt >= 0 ? parseNum(row[iMATAnt]) : 0;
                    const ytdAnt = iYTDAnt >= 0 ? parseNum(row[iYTDAnt]) : 0;
                    const triAnt = iTRIAnt >= 0 ? parseNum(row[iTRIAnt]) : 0;
                    if (mat === 0 && ytd === 0 && tri === 0 && matAnt === 0 && ytdAnt === 0 && triAnt === 0) continue;

                    const key = regional + '|' + distrital + '|' + sector + '|' + market + '|' + product + '|' + brickName + '|' + cidade;
                    let bucket = agg.get(key);
                    if (!bucket) {
                        bucket = {
                            regional, distrital, sector, market, product, cidade,
                            brickName, brickCode: brickName, unitMode,
                            role: productRole(product),
                            data: {
                                MAT: { current: 0, previous: 0, growth: null },
                                YTD: { current: 0, previous: 0, growth: null },
                                TRI: { current: 0, previous: 0, growth: null }
                            }
                        };
                        agg.set(key, bucket);
                        kept++;
                    }
                    bucket.data.MAT.current += mat;
                    bucket.data.MAT.previous += matAnt;
                    bucket.data.YTD.current += ytd;
                    bucket.data.YTD.previous += ytdAnt;
                    bucket.data.TRI.current += tri;
                    bucket.data.TRI.previous += triAnt;

                    /* libera o event-loop a cada CHUNK linhas */
                    if ((processed % CHUNK) === 0) {
                        const pct = Math.round((processed / Math.max(1, total)) * 100);
                        _setProgress('Lendo ' + sheetName + '... ' + processed.toLocaleString('pt-BR') + ' / ' + total.toLocaleString('pt-BR') + ' linhas (' + pct + '%) — ' + kept.toLocaleString('pt-BR') + ' bricks únicos');
                        await _yield();
                    }
                }

                /* Calcula crescimento por bucket */
                for (const b of agg.values()) {
                    ['MAT', 'YTD', 'TRI'].forEach(p => {
                        const d = b.data[p];
                        d.growth = d.previous !== 0 ? (d.current / d.previous - 1) : null;
                    });
                    rowsByMode[unitMode].push(b);
                }
                console.log('[SUPERA] Aba', sheetName, '(', unitMode, ')', kept, 'buckets agregados de', total, 'linhas brutas.');
                _setProgress('Aba ' + sheetName + ': ' + kept.toLocaleString('pt-BR') + ' bricks únicos a partir de ' + total.toLocaleString('pt-BR') + ' linhas.');
                await _yield();
            }
        } catch (e) {
            console.error('[SUPERA] Erro:', e.message);
            toast('Erro ao processar ' + file.name + ': ' + e.message);
        }
    }
    _setProgress('');
    return { rowsByMode, diagnostics };
}

/* ===== BUILD DATABASE =====
   v3.16 — mantém UNIVERSE em DB.allRowsByValueMode e aplica recorte
           Regional/Distrital sobre DB.rowsByValueMode. Toda lógica downstream
           continua usando DB.rows como antes. */
function buildDB(rowsByMode) {
    DB.allRowsByValueMode = rowsByMode;
    applyHierarchy();
}

/* ── Bloqueio de acesso: uso exclusivo da Regional Sul ── */
function showRegionalSulBlock() {
    const uploadView = document.getElementById('uploadView');
    const dashView = document.getElementById('dashView');
    const kpiStrip = document.getElementById('kpiStrip');
    if (dashView) dashView.style.display = 'none';
    if (kpiStrip) kpiStrip.style.display = 'none';
    if (uploadView) uploadView.style.display = 'block';
    const existing = document.getElementById('regionalSulBlock');
    if (existing) existing.remove();
    const overlay = document.createElement('div');
    overlay.id = 'regionalSulBlock';
    overlay.innerHTML = `
        <div class="rsul-box">
            <div class="rsul-icon">🔒</div>
            <div class="rsul-title">DESCULPE, USO EXCLUSIVO DA REGIONAL SUL.</div>
            <div class="rsul-sub">O arquivo carregado pertence a outra regional.<br>
            Este dashboard é de uso exclusivo da Regional Sul.</div>
            <button class="rsul-btn" onclick="document.getElementById('regionalSulBlock').remove()">Entendido</button>
        </div>`;
    document.body.appendChild(overlay);
}

/* v3.16 — reconstrói DB.rows aplicando filtro Regional + Distrital sobre
   o universo carregado. Usado tanto ao trocar Un/R$ quanto ao trocar o nível. */
function applyHierarchy() {
    const all = (DB.allRowsByValueMode && DB.allRowsByValueMode[UI.unitMode]) || [];
    let rows = all;
    if (UI.regional && UI.regional !== 'all') rows = rows.filter(r => r.regional === UI.regional);
    if (UI.distrital && UI.distrital !== 'all') rows = rows.filter(r => r.distrital === UI.distrital);
    DB.rows = rows;
    /* listas auxiliares: regional sempre baseada no universo; distritais filtradas pela regional ativa. */
    DB.regionals = [...new Set(all.map(r => r.regional).filter(Boolean))].sort();
    const distSrc = (UI.regional === 'all') ? all : all.filter(r => r.regional === UI.regional);
    DB.distritais = [...new Set(distSrc.map(r => r.distrital).filter(Boolean))].sort();
    DB.sectors = [...new Set(rows.map(r => r.sector).filter(Boolean))].sort();
    DB.markets = [...new Set(rows.map(r => r.market))].sort();
}

/* Retorna DB.rows filtrado pelo setor ativo, excluindo mercados sem venda
   Supera quando há recorte de distrital ou setor ativo. Isso impede que
   mercados de outras linhas apareçam ao filtrar por GD/distrital. */
function getFilteredRows(extraSector) {
    let rows = DB.rows;
    const sec = extraSector || (UI.sector !== 'all' ? UI.sector : null);
    if (sec) rows = rows.filter(r => r.sector === sec);
    if ((UI.distrital && UI.distrital !== 'all') || sec) {
        const superaMkts = new Set(rows.filter(r => r.role === 'SUPERA').map(r => r.market));
        rows = rows.filter(r => superaMkts.has(r.market));
    }
    return rows;
}

/* ===== RECOMENDAÇÃO POR BRICK (Supera × Mercado)
        Regra alinhada ao layout do usuário:
        - ENTRAR     → Supera = 0 no brick
        - LÍDER      → Supera é maior vendedor do brick (share ≥ qualquer concorrente)
        - CRESCER    → Supera crescendo > 20% vs período anterior
        - ACOMPANHAR → Supera caindo < -10%
        - OPORTUNIDADE → caso contrário                                ===== */
/* v7.0 — Recomendação por brick: critério único baseado em gap
   ────────────────────────────────────────────────────────────────
   Regra simples e consistente para TODOS os mercados, em R$ e Unidades:
     • Supera sem venda                              → ENTRAR
     • Posição 1ª                                    → LÍDER
     • Posição 2ª                                    → CRESCER
     • Supera entrando (superaPrev = 0)              → OPORTUNIDADE
     • gap p/ posição imediatamente acima ≤ 3× Supera → OPORTUNIDADE
     • gap p/ posição imediatamente acima > 3× Supera → ACOMPANHAR

   Usa sempre o gap para a posição ACIMA (não o gap para o líder),
   o que torna o critério independente do tamanho do mercado e do
   preço médio do produto — funciona igualmente em R$ e Unidades.
*/
function calcRecBrick(superaCur, superaPrev, concMax, growth, pos, gapLider, liderGrowth, shareBrick, gapProximo) {
    if (!superaCur || superaCur <= 0) return 'ENTRAR';
    if (pos === 1) return 'LÍDER';
    if (pos === 2) return 'CRESCER';

    // Supera entrando no brick (sem histórico anterior) → sempre OPORTUNIDADE
    if (!superaPrev || superaPrev <= 0) return 'OPORTUNIDADE';

    // Gap para a posição imediatamente acima
    // Fallback para gapLider apenas se gapProximo não estiver disponível
    const gapRef = (gapProximo != null && gapProximo > 0) ? gapProximo : (gapLider || 0);
    const alcancavel = gapRef <= superaCur * 3;  // gap ≤ 3× venda Supera

    return alcancavel ? 'OPORTUNIDADE' : 'ACOMPANHAR';
}
function recColorVar(rec) {
    return ({
        'LÍDER': 'var(--c-lider)',
        'CRESCER': 'var(--c-crescer)',
        'OPORTUNIDADE': 'var(--c-oport)',
        'ACOMPANHAR': 'var(--c-acomp)',
        'ENTRAR': 'var(--c-entrar)'
    })[rec] || 'var(--c-acomp)';
}

/* ===== AGREGAÇÃO POR BRICK DENTRO DE UM MERCADO =====
        Cada brick vira um "ponto" no qual decidimos a recomendação. */
function aggBricksOfMarket(rows, pd, excludeProducts) {
    // excludeProducts: Set opcional de nomes de produtos a ignorar no ranking/totalCur
    const excl = excludeProducts || null;
    const map = new Map();
    rows.forEach(r => {
        const k = (r.brickName || '—') + '||' + (r.cidade || '');
        if (!map.has(k)) {
            map.set(k, {
                brick: r.brickName || '—',
                cidade: r.cidade || '',
                sector: r.sector || '',
                superaCur: 0, superaPrev: 0,
                concorrentes: new Map(),  // produto → {cur,prev}
                totalCur: 0, totalPrev: 0,
                rows: []
            });
        }
        const b = map.get(k);
        const d = r.data[pd];
        b.rows.push(r);
        if (r.role === 'SUPERA') {
            b.superaCur += d.current || 0;
            b.superaPrev += d.previous || 0;
            b.totalCur += d.current || 0;
            b.totalPrev += d.previous || 0;
        } else {
            // Se o produto está na lista de exclusão, não entra no ranking nem no total
            if (excl && excl.has(r.product)) return;
            const c = b.concorrentes.get(r.product) || { cur: 0, prev: 0 };
            c.cur += d.current || 0;
            c.prev += d.previous || 0;
            b.concorrentes.set(r.product, c);
            b.totalCur += d.current || 0;
            b.totalPrev += d.previous || 0;
        }
    });

    return [...map.values()].map(b => {
        const concMax = b.concorrentes.size
            ? Math.max(...[...b.concorrentes.values()].map(c => c.cur))
            : 0;
        b.growth = b.superaPrev !== 0 ? ((b.superaCur / b.superaPrev) - 1) : null;
        b.share = b.totalCur ? (b.superaCur / b.totalCur) * 100 : 0;
        b.concMax = concMax;
        /* v3.11 — calcula a posição da Supera dentro do brick e usa-a para a classificação */
        const rk = brickRanking(b);
        b.posSupera = rk.posSupera;
        b.gapLider = rk.gap1;   // gap para o 1º colocado
        b.gapProximo = rk.posSupera > 1
            ? (rk.ranking[rk.posSupera - 2] ? rk.ranking[rk.posSupera - 2].cur - b.superaCur : 0)
            : 0;                    // gap para a posição imediatamente acima
        const liderGrowth = rk.leader ? rk.leader.growth : null;
        b.liderGrowth = liderGrowth;
        b.rec = calcRecBrick(b.superaCur, b.superaPrev, concMax, b.growth,
            rk.posSupera, rk.gap1, liderGrowth, b.share, b.gapProximo);
        return b;
    });
}

/* ===== AGREGAÇÃO POR MERCADO (com contagens de bricks por recomendação) ===== */
function aggMarkets(rows, pd) {
    const byMkt = new Map();
    rows.forEach(r => {
        if (!byMkt.has(r.market)) byMkt.set(r.market, []);
        byMkt.get(r.market).push(r);
    });

    const out = [];
    byMkt.forEach((rs, market) => {
        const excl = (typeof getEffectiveExclusions === 'function')
            ? getEffectiveExclusions(market)
            : getExclusionsForMarket(market);
        const bricks = aggBricksOfMarket(rs, pd, excl);
        const current = bricks.reduce((s, b) => s + b.totalCur, 0);
        const previous = bricks.reduce((s, b) => s + b.totalPrev, 0);
        const supera = bricks.reduce((s, b) => s + b.superaCur, 0);
        const superaPrev = bricks.reduce((s, b) => s + b.superaPrev, 0);
        const recs = { 'LÍDER': [], 'CRESCER': [], 'OPORTUNIDADE': [], 'ACOMPANHAR': [], 'ENTRAR': [] };
        bricks.forEach(b => recs[b.rec].push(b));
        const growth = previous !== 0 ? ((current / previous) - 1) : null;
        const superaGrowth = superaPrev !== 0 ? ((supera / superaPrev) - 1) : null;
        const share = current ? (supera / current) * 100 : 0;
        const bricksCount = bricks.length;
        out.push({
            market, bricks, bricksCount,
            current, previous, growth,
            supera, superaPrev, superaGrowth, share, recs, rows: rs
        });
    });
    return out;
}

/* ===== Ranking COMPLETO de um mercado (Supera + concorrentes) =====
   Soma por marca todos os bricks/cidades, ordena por volume DESC e devolve
   um array com share calculado sobre o total do mercado. A Supera fica em
   sua posição real (sem privilégio).                                  */
function aggMarketRanking(rows, pd, limit) {
    const map = new Map();
    let total = 0;
    rows.forEach(r => {
        const key = r.product || '(s/ produto)';
        if (!map.has(key)) {
            map.set(key, { name: key, role: r.role, cur: 0, prev: 0 });
        }
        const c = map.get(key);
        c.cur += r.data[pd].current || 0;
        c.prev += r.data[pd].previous || 0;
        total += r.data[pd].current || 0;
    });
    const arr = [...map.values()].sort((a, b) => b.cur - a.cur);
    const denom = total || 1;
    arr.forEach(c => {
        c.share = (c.cur / denom) * 100;
        c.growth = c.prev !== 0 ? (c.cur / c.prev - 1) : null;
    });
    return limit ? arr.slice(0, limit) : arr;
}

/* Mantemos um alias para não quebrar chamadas legadas. */
function aggTopConcorrentes(rows, pd, limit) {
    return aggMarketRanking(rows, pd, limit).filter(c => c.role !== 'SUPERA');
}

/* ===== RENDER RESUMO ===== */
function renderResumo() {
    const el = $('tab-resumo');
    if (!el) return;

    const pd = UI.periodMode;
    const searchStr = norm(UI.search);

    const fRows = getFilteredRows().filter(r => {
        if (UI.market !== 'all' && r.market !== UI.market) return false;
        if (searchStr) {
            const blob = norm(r.market + ' ' + r.cidade + ' ' + r.brickName + ' ' + r.product);
            if (!blob.includes(searchStr)) return false;
        }
        return true;
    });

    // Agregação por mercado
    let mktAgg = aggMarkets(fRows, pd);

    // Filtro de recomendação (ao menos 1 brick naquela categoria)
    if (UI.rec !== 'all') mktAgg = mktAgg.filter(m => m.recs[UI.rec].length > 0);

    // === KPIs globais ===
    const totalMkt = mktAgg.reduce((s, m) => s + m.current, 0);
    const superaTotal = mktAgg.reduce((s, m) => s + m.supera, 0);
    const superaShare = totalMkt ? (superaTotal / totalMkt) * 100 : 0;
    $('ks-mercado').textContent = fmtValue(totalMkt);
    $('ks-supera').textContent = fmtValue(superaTotal);
    $('ks-share').textContent = totalMkt ? superaShare.toFixed(1) + '%' : '—';

    // (v3.6) KPIs do header agora contam BRICKS FÍSICOS ÚNICOS (Brick + Cidade)
    // em vez de ocorrências brick × mercado. Um mesmo brick pode aparecer em
    // mais de uma categoria de recomendação (ex.: líder em um mercado e
    // oportunidade em outro), mas é contado UMA vez por categoria. O card
    // "BRICKS" mostra o total de bricks físicos distintos no recorte filtrado.
    const recBrickSets = {
        'LÍDER': new Set(),
        'CRESCER': new Set(),
        'OPORTUNIDADE': new Set(),
        'ACOMPANHAR': new Set(),
        'ENTRAR': new Set()
    };
    const allBricksSet = new Set();
    mktAgg.forEach(m => {
        Object.keys(recBrickSets).forEach(r => {
            m.recs[r].forEach(b => {
                const key = (b.brick || '—') + '||' + (b.cidade || '');
                recBrickSets[r].add(key);
            });
        });
        m.bricks.forEach(b => {
            const key = (b.brick || '—') + '||' + (b.cidade || '');
            allBricksSet.add(key);
        });
    });
    $('ks-lider').textContent = recBrickSets['LÍDER'].size.toLocaleString('pt-BR');
    $('ks-crescer').textContent = recBrickSets['CRESCER'].size.toLocaleString('pt-BR');
    $('ks-oport').textContent = recBrickSets['OPORTUNIDADE'].size.toLocaleString('pt-BR');
    $('ks-acomp').textContent = recBrickSets['ACOMPANHAR'].size.toLocaleString('pt-BR');
    $('ks-entrar').textContent = recBrickSets['ENTRAR'].size.toLocaleString('pt-BR');
    $('ks-mkts').textContent = mktAgg.length.toLocaleString('pt-BR');
    $('ks-bricks').textContent = allBricksSet.size.toLocaleString('pt-BR');
    $('hdrPeriodLabel').textContent = pd + ' — ' + (UI.unitMode === 'RS' ? 'R$' : 'Unidades');

    // === SORT ===
    const k = UI.sortKey, dir = UI.sortDir === 'asc' ? 1 : -1;
    const cmp = (a, b) => {
        let va, vb;
        switch (k) {
            case 'market': va = a.market; vb = b.market; break;
            case 'superaname': va = a.superaLabel || ''; vb = b.superaLabel || ''; break;
            case 'bricks': va = a.bricksCount; vb = b.bricksCount; break;
            case 'current': va = a.current; vb = b.current; break;
            case 'previous': va = a.previous; vb = b.previous; break;
            case 'delta': va = a.current - a.previous; vb = b.current - b.previous; break;
            case 'growth': va = a.growth ?? -Infinity; vb = b.growth ?? -Infinity; break;
            case 'mktGrowth': va = a.growth ?? -Infinity; vb = b.growth ?? -Infinity; break;
            case 'supera': va = a.supera; vb = b.supera; break;
            case 'superaGrowth': va = a.superaGrowth ?? -Infinity; vb = b.superaGrowth ?? -Infinity; break;
            case 'share': va = a.share; vb = b.share; break;
            case 'lider': va = a.recs['LÍDER'].length; vb = b.recs['LÍDER'].length; break;
            case 'crescer': va = a.recs['CRESCER'].length; vb = b.recs['CRESCER'].length; break;
            case 'oport': va = a.recs['OPORTUNIDADE'].length; vb = b.recs['OPORTUNIDADE'].length; break;
            case 'acomp': va = a.recs['ACOMPANHAR'].length; vb = b.recs['ACOMPANHAR'].length; break;
            case 'entrar': va = a.recs['ENTRAR'].length; vb = b.recs['ENTRAR'].length; break;
            default: va = a.current; vb = b.current;
        }
        if (typeof va === 'string') return va.localeCompare(vb) * dir;
        return (va - vb) * dir;
    };
    mktAgg.sort(cmp);

    // === HEADER fixo — v3.2 colunas simplificadas (print 2 do usuário) ===
    const arr = key => {
        if (UI.sortKey !== key) return '<span class="sort-arr">⇅</span>';
        return '<span class="sort-arr on">' + (UI.sortDir === 'asc' ? '▲' : '▼') + '</span>';
    };

    let html = '<div class="tbl-wrap"><table class="main-tbl"><thead class="tbl-head-fixed"><tr>';
    html += '<th style="width:34px"></th>';
    html += `<th class="sortable" data-key="market">MERCADO ${arr('market')}</th>`;
    html += `<th class="c sortable" data-key="bricks">BRICKS ${arr('bricks')}</th>`;
    html += `<th class="c sortable" data-key="current">MERCADO TOTAL ${arr('current')}</th>`;
    html += `<th class="c sortable c-evol-mkt" data-key="mktGrowth">EVOL. MKT ${arr('mktGrowth')}</th>`;
    html += `<th class="c sortable c-supera" data-key="supera">TOTAL SUPERA ${arr('supera')}</th>`;
    html += `<th class="c sortable c-evol-sup" data-key="superaGrowth">EVOL. SUP ${arr('superaGrowth')}</th>`;
    html += `<th class="r sortable" data-key="share">SHARE % ${arr('share')}</th>`;
    html += `<th class="c sortable c-lider" data-key="lider">LÍDER ${arr('lider')}</th>`;
    html += `<th class="c sortable c-crescer" data-key="crescer">CRESCER ${arr('crescer')}</th>`;
    html += `<th class="c sortable c-oport" data-key="oport">OPORT. ${arr('oport')}</th>`;
    html += `<th class="c sortable c-acomp" data-key="acomp">ACOMP. ${arr('acomp')}</th>`;
    html += `<th class="c sortable c-entrar" data-key="entrar">ENTRAR ${arr('entrar')}</th>`;
    html += `<th class="c">AÇÃO</th>`;
    html += '</tr></thead><tbody>';

    if (!mktAgg.length) {
        html += '<tr><td colspan="14" class="tbl-empty">Nenhum mercado encontrado para os filtros selecionados.</td></tr>';
    }

    // Pré-cálculo: label da marca Supera por mercado (usado no sort)
    mktAgg.forEach(m => {
        const lst = (MARKETS_BRANDS_MAP[normU(m.market)] || {}).supera || [];
        m.superaLabel = lst.length ? lst[0].replace(/\s*\(SP0\)\s*/i, '') : m.market;
    });

    mktAgg.forEach((m, idx) => {
        const rowId = 'mkt_' + norm(m.market).replace(/\s+/g, '_');
        const isExpanded = UI.expandedRows.has(rowId);

        // Toggle de exclusão de concorrentes (ex: DURATESTON no ATESTO)
        const mktExcl = MARKET_BRICK_EXCLUSIONS[normU(m.market)] || MARKET_BRICK_EXCLUSIONS[m.market];
        const exclActive = mktExcl && !UI.marketExclusions[normU(m.market)];
        const toggleBtn = mktExcl ? ` <button
            class="excl-toggle-btn ${exclActive ? 'excl-on' : 'excl-off'}"
            onclick="toggleMarketExclusion('${escStr(m.market)}')"
            title="${exclActive
                ? 'Clique para incluir: ' + [...mktExcl].join(', ')
                : 'Clique para excluir: ' + [...mktExcl].join(', ')}"
        >${exclActive
                ? '⊘ ' + [...mktExcl].map(p => p.replace(/\s*\([^)]+\)/, '')).join(', ')
                : '＋ ' + [...mktExcl].map(p => p.replace(/\s*\([^)]+\)/, '')).join(', ')
            }</button>` : '';

        html += `<tr class="mkt-row" id="row_${rowId}">
            <td class="expand-cell"><button class="expand-btn" onclick="toggleExpand('${rowId}')">${isExpanded ? '−' : '+'}</button></td>
            <td><div class="mkt-name">${m.market}${toggleBtn}</div></td>
            <td class="c"><span class="bricks-count">${m.bricksCount}</span></td>
            <td class="c">${fmtValue(m.current)}</td>
            <td class="c c-evol-mkt ${m.growth == null ? '' : m.growth >= 0 ? 'vpos' : 'vneg'}">${m.growth == null ? '—' : (m.growth >= 0 ? '+' : '') + (m.growth * 100).toFixed(1) + '%'}</td>
            <td class="c c-supera vacc">${fmtValue(m.supera)}</td>
            <td class="c c-evol-sup ${m.superaGrowth == null ? '' : m.superaGrowth >= 0 ? 'vpos' : 'vneg'}">${m.superaGrowth == null ? '—' : (m.superaGrowth >= 0 ? '+' : '') + (m.superaGrowth * 100).toFixed(1) + '%'}</td>
            <td class="c c-share">${m.share.toFixed(1)}%</td>
            ${recCell(m, 'LÍDER', 'rb-lider')}
            ${recCell(m, 'CRESCER', 'rb-crescer')}
            ${recCell(m, 'OPORTUNIDADE', 'rb-oport')}
            ${recCell(m, 'ACOMPANHAR', 'rb-acomp')}
            ${recCell(m, 'ENTRAR', 'rb-entrar')}
            <td class="c"><button class="ver-btn" onclick="showVerModal('${escStr(m.market)}')">👁 Ver</button></td>
        </tr>`;

        if (isExpanded) {
            // Ranking como tabela full-width, sem coluna de bricks lateral
            const ranking = aggMarketRanking(m.rows, pd, 30);
            const totPrev = ranking.reduce((s, c) => s + (c.prev || 0), 0);
            const totCur  = ranking.reduce((s, c) => s + (c.cur  || 0), 0);
            const totG    = totPrev ? ((totCur / totPrev) - 1) : null;
            const totGCls = totG == null ? 'vnull' : (totG >= 0 ? 'vpos' : 'vneg');
            const totGTxt = totG == null ? '—' : ((totG >= 0 ? '+' : '') + (totG * 100).toFixed(1) + '%');
            const rankRows = ranking.map((c, i) => {
                const isSup = c.role === 'SUPERA';
                const g = c.growth;
                const gCls = g == null ? 'vnull' : (g >= 0 ? 'vpos' : 'vneg');
                const gTxt = g == null ? '—' : ((g >= 0 ? '+' : '') + (g * 100).toFixed(1) + '%');
                const displayName = isSup ? c.name.replace(/\s*\(SP0\)\s*/i, '').trim() : c.name;
                return `<tr class="rank-row${isSup ? ' rank-supera' : ''}">
                    <td class="c rank-pos">${i + 1}º</td>
                    <td class="rank-name">${displayName}${isSup ? ' <span class="rank-sup-badge">SUPERA</span>' : ''}</td>
                    <td class="r rank-prev">${fmtValue(c.prev)}</td>
                    <td class="r">${fmtValue(c.cur)}</td>
                    <td class="r ${gCls}"><strong>${gTxt}</strong></td>
                    <td class="r"><span class="rank-share">${c.share.toFixed(1)}%</span></td>
                </tr>`;
            }).join('');
            html += `<tr class="concs-row"><td colspan="14" class="concs-wrap">
                <div class="concs-title">🏆 Ranking neste mercado — ${pd} · ${UI.unitMode === 'RS' ? 'R$' : 'Unidades'}</div>
                <table class="rank-tbl">
                    <thead><tr>
                        <th class="c" style="width:54px">POS.</th>
                        <th>MARCA</th>
                        <th class="r">${pd} ANTERIOR</th>
                        <th class="r">${pd} ATUAL</th>
                        <th class="r">EVOL.</th>
                        <th class="r">SHARE ATUAL</th>
                    </tr></thead>
                    <tbody>${rankRows}</tbody>
                    <tfoot><tr class="rank-total-row">
                        <td colspan="2" class="rank-total-label">📊 TOTAL DO MERCADO</td>
                        <td class="r rank-prev">${fmtValue(totPrev)}</td>
                        <td class="r">${fmtValue(totCur)}</td>
                        <td class="r ${totGCls}"><strong>${totGTxt}</strong></td>
                        <td class="r"><span class="rank-share">100%</span></td>
                    </tr></tfoot>
                </table>
            </td></tr>`;
        }
    });
    html += '</tbody></table></div>';
    el.innerHTML = html;

    // Ativa clique nos cabeçalhos ordenáveis
    el.querySelectorAll('th.sortable').forEach(th => {
        th.addEventListener('click', () => {
            const key = th.getAttribute('data-key');
            if (UI.sortKey === key) UI.sortDir = UI.sortDir === 'asc' ? 'desc' : 'asc';
            else { UI.sortKey = key; UI.sortDir = (key === 'market') ? 'asc' : 'desc'; }
            renderResumo();
        });
    });
}

function recCell(mkt, rec, cls) {
    const count = mkt.recs[rec].length;
    if (count === 0) return '<td class="c"><span class="rec-badge zero">—</span></td>';
    return `<td class="c"><span class="rec-badge ${cls}" onclick="showBrickModal('${escStr(mkt.market)}','${rec}')">${count}</span></td>`;
}

function recPillCls(rec) {
    return ({
        'LÍDER': 'rb-lider',
        'CRESCER': 'rb-crescer',
        'OPORTUNIDADE': 'rb-oport',
        'ACOMPANHAR': 'rb-acomp',
        'ENTRAR': 'rb-entrar'
    })[rec] || 'rb-acomp';
}

function escStr(s) { return String(s).replace(/'/g, "\\'"); }

/* ===== Limpa sufixo "(GD)" / "(01)" do nome do setor ===== */
function cleanSectorName(s) {
    if (!s) return '';
    return String(s).replace(/\s*\((gd|\d{1,3})\)\s*$/i, '').trim();
}

/* ===== RANKING COMPLETO POR BRICK: calcula posição Supera + GAP =====
   Recebe um agregado de brick (com superaCur, concorrentes Map) e retorna:
     ranking = [{name, role, cur, prev, growth}, ...] ordenado desc por cur
     posSupera = posição (1, 2, 3, …) da marca Supera na lista
     leader   = objeto líder (posição 1)
     gap1, gap2, gap3 = diferença (em unidades/R$) para a 1ª/2ª/3ª marca
======================================================================= */
function brickRanking(b) {
    const arr = [];
    if (b.superaCur > 0) {
        arr.push({ name: 'SUPERA', role: 'SUPERA', cur: b.superaCur, prev: b.superaPrev });
    } else {
        arr.push({ name: 'SUPERA', role: 'SUPERA', cur: 0, prev: b.superaPrev });
    }
    b.concorrentes.forEach((v, k) => {
        arr.push({ name: k, role: 'CONCORRENTE', cur: v.cur, prev: v.prev });
    });
    // Ordena desc por cur; critério de desempate estabiliza Supera se empatar
    arr.sort((a, bb) => (bb.cur - a.cur) || (a.role === 'SUPERA' ? -1 : 1));
    const posSupera = arr.findIndex(x => x.role === 'SUPERA') + 1;
    const leader = arr[0];
    const supera = arr[posSupera - 1] || { cur: 0 };
    const get = p => arr[p - 1] ? arr[p - 1].cur : null;
    const gap1 = supera.cur < (get(1) || 0) ? (get(1) - supera.cur) : 0;
    const gap2 = supera.cur < (get(2) || 0) ? (get(2) - supera.cur) : 0;
    const gap3 = supera.cur < (get(3) || 0) ? (get(3) - supera.cur) : 0;
    arr.forEach(x => { x.growth = x.prev !== 0 ? (x.cur / x.prev - 1) : null; });
    return { ranking: arr, posSupera, leader, gap1, gap2, gap3, supera };
}

/* ===== TOGGLE ROW EXPANSION ===== */
function toggleExpand(rowId) {
    if (UI.expandedRows.has(rowId)) UI.expandedRows.delete(rowId);
    else UI.expandedRows.add(rowId);
    renderResumo();
}

/* ===== MODAL DE BRICKS POR RECOMENDAÇÃO ===== */
// Estado de sort do modal
const _brickModalSort = { key: 'superaCur', dir: 'desc' };

function _sortBricks(bricks) {
    const { key, dir } = _brickModalSort;
    const m = dir === 'asc' ? 1 : -1;
    return [...bricks].sort((a, b) => {
        let av, bv;
        if (key === 'brick') return m * a.brick.localeCompare(b.brick);
        if (key === 'sector') return m * (a.sector || '').localeCompare(b.sector || '');
        if (key === 'superaPrev') { av = a.superaPrev; bv = b.superaPrev; }
        else if (key === 'superaCur') { av = a.superaCur; bv = b.superaCur; }
        else if (key === 'totalPrev') { av = a.totalPrev; bv = b.totalPrev; }
        else if (key === 'totalCur') { av = a.totalCur; bv = b.totalCur; }
        else if (key === 'share') { av = a.share; bv = b.share; }
        else if (key === 'growth') { av = a.growth ?? -Infinity; bv = b.growth ?? -Infinity; }
        else if (key === 'gap') { av = a.gapProximo ?? Infinity; bv = b.gapProximo ?? Infinity; }
        else { av = a.superaCur; bv = b.superaCur; }
        return m * (av - bv);
    });
}

function _thSort(key, label, cls) {
    const { key: ck, dir } = _brickModalSort;
    const arrow = ck === key ? (dir === 'asc' ? ' ↑' : ' ↓') : ' ↕';
    return `<th class="${cls || 'c'} bm-sortable" data-sort="${key}" style="cursor:pointer;user-select:none">${label}<span style="opacity:.5;font-size:.8em">${arrow}</span></th>`;
}

function showBrickModal(market, rec) {
    const pd = UI.periodMode;
    let rows = getFilteredRows().filter(r => r.market === market);
    const excl = getEffectiveExclusions(market);
    const allBricks = aggBricksOfMarket(rows, pd, excl).filter(b => b.rec === rec);
    // pre-calc gapProximo para sort
    allBricks.forEach(b => {
        const rk = brickRanking(b);
        if (rk.posSupera > 1) {
            const acima = rk.ranking[rk.posSupera - 2];
            b.gapProximo = acima ? Math.max(0, acima.cur - b.superaCur + 1) : 0;
        } else { b.gapProximo = 0; }
    });
    const bricks = _sortBricks(allBricks);
    const sectorLabel = UI.sector !== 'all' ? ` · ${cleanSectorName(UI.sector)}` : '';

    const titleMap = {
        'LÍDER': 'DEFENDER LIDERANÇA',
        'CRESCER': 'ACELERAR CRESCIMENTO',
        'OPORTUNIDADE': 'CAPTURAR OPORTUNIDADE',
        'ACOMPANHAR': 'ACOMPANHAR DE PERTO',
        'ENTRAR': 'ENTRAR NO MERCADO'
    };
    // Badge de exclusão visível no título quando há produtos excluídos
    const exclBadge = excl && excl.size
        ? ` <span class="excl-badge" title="Concorrentes excluídos desta visão: ${[...excl].join(', ')}">⚠ excl. ${[...excl].map(p => p.replace(/\s*\([^)]+\)/, '')).join(', ')}</span>`
        : '';
    $('brickModalTitle').innerHTML = `<span class="mmodal-mkt">${market}</span>
        <span class="mmodal-sep">—</span>
        <span class="mmodal-rec ${recPillCls(rec)}">${titleMap[rec]} (${bricks.length} bricks)</span>${sectorLabel ? `<span class="mmodal-sub">${sectorLabel}</span>` : ''}${exclBadge}`;

    let html = `<table class="modal-tbl bm-table" id="brickModalTable"><thead><tr>
        <th class="w-hash">#</th>
        ${_thSort('brick', 'Brick', 'col-brick')}
        ${_thSort('sector', 'Setor', 'col-setor')}
        ${_thSort('superaPrev', 'Sup. Ant.', 'c th-supera')}
        ${_thSort('superaCur', 'Sup. Atual', 'c th-supera')}
        ${_thSort('totalPrev', 'Mkt. Ant.', 'c')}
        ${_thSort('totalCur', 'Mkt. Atual', 'c')}
        ${_thSort('share', 'Share', 'c')}
        ${_thSort('growth', 'Evol. Sup.', 'c')}
        ${_thSort('gap', 'Gap próx.', 'c')}
        <th class="c">Líder</th>
    </tr></thead><tbody>`;

    if (!bricks.length) {
        html += '<tr><td colspan="11" class="tbl-empty">Nenhum brick nessa categoria.</td></tr>';
    } else {
        bricks.forEach((b, i) => {
            const gCls = b.growth != null && b.growth >= 0 ? 'vpos' : 'vneg';
            const rk = brickRanking(b);
            // Nome do líder do brick
            const leader = rk.ranking[0];
            const leaderName = leader ? leader.name.replace(/\s*\([^)]+\)/, '') : '—';
            const leaderIsSupera = leader && leader.role === 'SUPERA';
            // Gap para ultrapassar a próxima posição acima da Supera
            let gapLabel = '—';
            let gapCls = '';
            if (rk.posSupera === 1) {
                gapLabel = '🥇 Líder';
                gapCls = 'vpos';
            } else if (rk.posSupera > 1) {
                const nextAbove = rk.ranking[rk.posSupera - 2];
                if (nextAbove) {
                    const gap = nextAbove.cur - b.superaCur + 1;
                    const nextName = nextAbove.name.replace(/\s*\([^)]+\)/, '');
                    gapLabel = `+${fmtValue(gap)} p/ ${nextName}`;
                    gapCls = 'vneg';
                }
            }
            // Gap para a posição imediatamente acima
            let gapProxLabel = '—', gapProxCls = '';
            if (rk.posSupera === 1) {
                gapProxLabel = '<span class="vpos">🥇 Líder</span>';
            } else {
                const acima = rk.ranking[rk.posSupera - 2];
                if (acima) {
                    const gp = Math.max(0, acima.cur - b.superaCur + 1);
                    const multRaw = b.superaCur > 0 ? gp / b.superaCur : null;
                    const multRounded = multRaw != null ? Math.round(multRaw * 10) / 10 : null;
                    const mult = multRounded == null ? '∞'
                        : Number.isInteger(multRounded) ? String(multRounded)
                            : multRounded.toFixed(1);
                    const nomeAcima = acima.name.replace(/\s*\([^)]+\)/, '');
                    gapProxCls = gp <= b.superaCur * 3 ? 'vpos' : 'vneg';
                    gapProxLabel = `+${fmtValue(gp)} <span style="font-size:.7em;opacity:.7">(${mult}×) p/ ${nomeAcima}</span>`;
                }
            }
            html += `<tr>
                <td class="w-hash">${i + 1}</td>
                <td class="col-brick"><code class="brick-code-mono">${b.brick}</code></td>
                <td class="col-setor">${cleanSectorName(b.sector) || '—'}</td>
                <td class="c td-supera vacc">${fmtValue(b.superaPrev)}</td>
                <td class="c td-supera vacc">${fmtValue(b.superaCur)}</td>
                <td class="c">${fmtValue(b.totalPrev)}</td>
                <td class="c">${fmtValue(b.totalCur)}</td>
                <td class="c"><strong>${b.share.toFixed(1)}%</strong></td>
                <td class="c ${gCls}">${fmtPct(b.growth)}</td>
                <td class="c ${gapProxCls}" style="font-size:.78rem;white-space:nowrap">${gapProxLabel}</td>
                <td class="c"><small>${leaderIsSupera ? '<span class="vpos">✓ SUPERA</span>' : leaderName}</small></td>
            </tr>`;
        });
    }
    html += '</tbody></table>';
    $('brickModalBody').innerHTML = html;
    $('brickModalFooter').textContent = allBricks.length + ' bricks';
    $('brickModal').classList.add('open');

    // Eventos de sort nos cabeçalhos
    const tbl = document.getElementById('brickModalTable');
    if (tbl) {
        tbl.querySelectorAll('th.bm-sortable').forEach(th => {
            th.addEventListener('click', () => {
                const k = th.getAttribute('data-sort');
                if (_brickModalSort.key === k) {
                    _brickModalSort.dir = _brickModalSort.dir === 'asc' ? 'desc' : 'asc';
                } else {
                    _brickModalSort.key = k;
                    _brickModalSort.dir = 'desc';
                }
                showBrickModal(market, rec);
            });
        });
    }
}

/* ===== MODAL DE "VER" — detalhe do mercado (print 3) ===== */
function showVerModal(market) {
    const pd = UI.periodMode;
    const rows = getFilteredRows().filter(r => r.market === market);
    const mktEntry = MARKETS_BRANDS_MAP[normU(market)] || { supera: [], concorrentes: [] };

    // Agrega por produto
    const prodMap = new Map();
    rows.forEach(r => {
        const key = r.product || '(s/ produto)';
        if (!prodMap.has(key)) prodMap.set(key, { product: key, role: r.role, cur: 0, prev: 0, bricks: new Set() });
        const p = prodMap.get(key);
        p.cur += r.data[pd].current || 0;
        p.prev += r.data[pd].previous || 0;
        p.bricks.add(r.brickName + '|' + r.cidade);
    });
    const prods = [...prodMap.values()].map(p => ({
        ...p,
        growth: p.prev !== 0 ? ((p.cur / p.prev) - 1) : null,
        bricksCount: p.bricks.size
    }));

    // Ordena: Supera primeiro, depois concorrentes por volume desc
    prods.sort((a, b) => {
        if (a.role === 'SUPERA' && b.role !== 'SUPERA') return -1;
        if (b.role === 'SUPERA' && a.role !== 'SUPERA') return 1;
        return b.cur - a.cur;
    });

    const totalCur = prods.reduce((s, p) => s + p.cur, 0);

    // Bricks agregados + recomendação
    const bricks = aggBricksOfMarket(rows, pd);
    const recSummary = { 'LÍDER': 0, 'CRESCER': 0, 'OPORTUNIDADE': 0, 'ACOMPANHAR': 0, 'ENTRAR': 0 };
    bricks.forEach(b => recSummary[b.rec]++);

    $('verModalTitle').innerHTML = `📊 <strong>${market}</strong>
        <span class="mmodal-sub">${bricks.length} bricks · ${pd} · ${UI.unitMode === 'RS' ? 'R$' : 'Unidades'}</span>`;

    let html = `<div class="ver-rec-summary">`;
    ['LÍDER', 'CRESCER', 'OPORTUNIDADE', 'ACOMPANHAR', 'ENTRAR'].forEach(r => {
        html += `<div class="ver-rec-item ${recPillCls(r)}">
            <div class="ver-rec-n">${recSummary[r]}</div>
            <div class="ver-rec-l">${r}</div>
        </div>`;
    });
    html += `</div>`;

    html += `<h4 class="ver-h4">Ranking de Produtos</h4>`;
    const unitTxt = UI.unitMode === 'RS' ? 'R$' : 'UN';
    html += `<table class="modal-tbl"><thead><tr>
        <th class="w-hash">#</th>
        <th>Produto</th>
        <th>Tipo</th>
        <th class="r">${unitTxt} ${pd} Ant.</th>
        <th class="r">${unitTxt} ${pd} Atual</th>
        <th class="r">Share</th>
        <th class="r">Crescimento</th>
        <th class="r">Bricks</th>
    </tr></thead><tbody>`;
    prods.forEach((p, i) => {
        const isSup = p.role === 'SUPERA';
        const share = totalCur ? (p.cur / totalCur) * 100 : 0;
        const gCls = p.growth != null && p.growth >= 0 ? 'vpos' : 'vneg';
        const prodDisplayName = isSup ? p.product.replace(/\s*\(SP0\)\s*/i, '').trim() : p.product;
        html += `<tr class="${isSup ? 'row-supera' : ''}">
            <td class="w-hash">${i + 1}</td>
            <td>${isSup ? '⭐ ' : ''}<strong>${prodDisplayName}</strong></td>
            <td><span class="tag ${isSup ? 'tag-supera' : 'tag-conc'}">${isSup ? 'SUPERA' : 'CONCORRENTE'}</span></td>
            <td class="r">${fmtValue(p.prev)}</td>
            <td class="r">${fmtValue(p.cur)}</td>
            <td class="r">${share.toFixed(1)}%</td>
            <td class="r ${gCls}">${fmtPct(p.growth)}</td>
            <td class="r">${p.bricksCount}</td>
        </tr>`;
    });
    html += '</tbody></table>';

    html += `<h4 class="ver-h4">Bricks desse mercado</h4>`;
    bricks.sort((a, b) => b.superaCur - a.superaCur);
    html += `<table class="modal-tbl"><thead><tr>
        <th class="w-hash">#</th>
        <th>Brick</th>
        <th>Setor</th>
        <th class="r">Supera ${pd} Ant.</th>
        <th class="r">Supera ${pd} Atual</th>
        <th class="r">Mercado ${pd} Ant.</th>
        <th class="r">Mercado ${pd} Atual</th>
        <th class="r">Share</th>
        <th class="r">POS.</th>
        <th class="c">Recomendação</th>
    </tr></thead><tbody>`;
    bricks.forEach((b, i) => {
        const ranked = brickRanking(b);
        const pos = ranked.posSupera;
        html += `<tr>
            <td class="w-hash">${i + 1}</td>
            <td><code class="brick-code-mono">${b.brick}</code><br><small style="color:#8a96b8">${b.cidade || ''}</small></td>
            <td>${cleanSectorName(b.sector) || '—'}</td>
            <td class="r vacc">${fmtValue(b.superaPrev)}</td>
            <td class="r vacc">${fmtValue(b.superaCur)}</td>
            <td class="r">${fmtValue(b.totalPrev)}</td>
            <td class="r">${fmtValue(b.totalCur)}</td>
            <td class="r"><strong>${b.share.toFixed(1)}%</strong></td>
            <td class="r"><strong>${pos || '—'}ª</strong></td>
            <td class="c"><span class="rec-pill ${recPillCls(b.rec)}">${b.rec}</span></td>
        </tr>`;
    });
    html += '</tbody></table>';

    $('verModalBody').innerHTML = html;
    $('verModal').classList.add('open');
}

/* ===== FILTROS / INTERAÇÃO =====
   onFilterChange é o ponto único de entrada para qualquer mudança em
   Setor / Mercado / Recomendação / Busca. Ela atualiza UI.* e re-renderiza
   a aba ATIVA (não só o Resumo). Assim os filtros ficam globais. */
function getActiveTab() {
    const ids = ['resumo', 'brick', 'oport', 'entrar', 'graficos', 'pdv'];
    for (const k of ids) {
        const el = $('tab-' + k);
        if (el && el.style.display !== 'none') return k;
    }
    return 'resumo';
}
function renderActiveTab() {
    const t = getActiveTab();
    /* v5.9 — mantém o select global #fbMkt sincronizado com a aba ativa
       (Marca quando aba=pdv, Mercado para as demais). */
    if (typeof refreshGlobalMarketFilter === 'function') refreshGlobalMarketFilter(t);
    if (t === 'resumo') renderResumo();
    else if (t === 'brick') renderBrick();
    else if (t === 'oport') renderOport();
    else if (t === 'entrar') renderEntrar();
    else if (t === 'graficos') renderGraficos();
    else if (t === 'pdv') renderPDV();
}
function onFilterChange() {
    UI.sector = $('fbSec').value;
    UI.market = $('fbMkt').value;
    UI.rec = $('fbRec').value;
    UI.search = $('fbSearch').value || '';
    UI.expandedRows.clear();
    BRICK_PAGE = 1;
    // Reflete o setor selecionado nas abas (highlight da aba do setor)
    document.querySelectorAll('.tab-sector').forEach(t => {
        t.classList.toggle('active-sector', t.getAttribute('data-sector') === UI.sector);
    });
    // v5: sincroniza a busca global com a aba PDV (busca compartilhada)
    if (typeof PDV !== 'undefined' && PDV.filter) {
        PDV.filter.search = UI.search;
    }
    renderActiveTab();
}
function setPeriodMode(mode) {
    UI.periodMode = mode;
    document.querySelectorAll('.period-btn').forEach(b => b.classList.remove('active'));
    $('btn' + mode).classList.add('active');
    UI.expandedRows.clear();
    BRICK_PAGE = 1;
    renderActiveTab();
}
function setUnitMode(mode) {
    /* v3.16 — base de checagem agora é o universo (allRowsByValueMode).
       v5.5 — também considera a base de PDVs (independente de DDD consolidada). */
    const all = DB.allRowsByValueMode || { UN: [], RS: [] };
    const hasDB = all[mode] && all[mode].length;
    const hasPDV = (typeof PDV !== 'undefined' && PDV.rowsByValueMode && PDV.rowsByValueMode[mode] && PDV.rowsByValueMode[mode].length);
    const hasData = hasDB || hasPDV;
    const otherMode = mode === 'UN' ? 'RS' : 'UN';
    const hasAnyOther = (all[otherMode] && all[otherMode].length) || (PDV && PDV.rowsByValueMode && PDV.rowsByValueMode[otherMode] && PDV.rowsByValueMode[otherMode].length);
    if (!hasData && hasAnyOther) {
        toast('Nenhuma planilha de ' + (mode === 'RS' ? 'R$' : 'Unidades') + ' carregada ainda. Clique em "Carregar Dados" para adicionar.');
    }
    /* Marca que o usuário escolheu explicitamente o modo (para o próximo upload) */
    window._unitForced = mode;
    UI.unitMode = mode;
    if (typeof PDV !== 'undefined') PDV.viewMode = null; // segue o modo global
    applyHierarchy();
    document.querySelectorAll('.unit-btn').forEach(b => b.classList.remove('active'));
    $('btn' + mode).classList.add('active');
    rebuildSelectors();
    buildSectorTabs();
    updateDistritalHeader();
    UI.expandedRows.clear();
    BRICK_PAGE = 1;
    renderActiveTab();
    requestAnimationFrame(() => recomputeStickyOffsets());
}
function gotoMarket(m) {
    if (!m) return;
    const id = 'row_mkt_' + norm(m).replace(/\s+/g, '_');
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('flash');
        setTimeout(() => el.classList.remove('flash'), 1500);
    }
}

function rebuildSelectors() {
    /* v3.16 — popula também fbReg e fbDist se existirem. */
    const fbReg = $('fbReg'); const fbDist = $('fbDist');
    if (fbReg) {
        const cur = UI.regional;
        while (fbReg.children.length > 1) fbReg.removeChild(fbReg.lastChild);
        DB.regionals.forEach(r => {
            const o = document.createElement('option'); o.value = r; o.textContent = r; fbReg.appendChild(o);
        });
        fbReg.value = DB.regionals.includes(cur) ? cur : 'all';
        if (fbReg.value !== cur) UI.regional = fbReg.value;
        /* esconde se só há 0 ou 1 opção */
        const wrap = fbReg.closest('.fbar-group');
        if (wrap) wrap.style.display = (DB.regionals.length > 1) ? '' : 'none';
    }
    if (fbDist) {
        const cur = UI.distrital;
        while (fbDist.children.length > 1) fbDist.removeChild(fbDist.lastChild);
        DB.distritais.forEach(d => {
            const o = document.createElement('option'); o.value = d; o.textContent = cleanSectorName(d) || d; fbDist.appendChild(o);
        });
        fbDist.value = DB.distritais.includes(cur) ? cur : 'all';
        if (fbDist.value !== cur) UI.distrital = fbDist.value;
        const wrap = fbDist.closest('.fbar-group');
        if (wrap) wrap.style.display = (DB.distritais.length > 1) ? '' : 'none';
    }
    const fbSec = $('fbSec'); const fbMkt = $('fbMkt'); const fbGoto = $('fbGoto');
    [fbSec, fbMkt, fbGoto].filter(Boolean).forEach(sel => { while (sel.children.length > 1) sel.removeChild(sel.lastChild); });
    // Setores e mercados: une os da base consolidada com os da base PDV (se houver)
    let sectors = [...DB.sectors];
    let markets = [...DB.markets];
    if (typeof PDV !== 'undefined' && PDV.pdvsByValueMode) {
        const pdvList = PDV.pdvsByValueMode[UI.unitMode] || PDV.pdvsByValueMode.UN || [];
        const sSet = new Set(sectors);
        const mSet = new Set(markets);
        pdvList.forEach(p => {
            (p.setores || []).forEach(x => sSet.add(x));
            (p.marcas || []).forEach(x => mSet.add(x));
        });
        sectors = [...sSet].sort();
        markets = [...mSet].sort();
    }
    sectors.forEach(s => { const o = document.createElement('option'); o.value = s; o.textContent = s; fbSec.appendChild(o); });
    markets.forEach(m => {
        const o = document.createElement('option'); o.value = m; o.textContent = m; fbMkt.appendChild(o);
        if (fbGoto) { const o2 = o.cloneNode(true); fbGoto.appendChild(o2); }
    });
    /* mantém seleções atuais quando ainda existirem na nova lista */
    if ($('fbSec')) $('fbSec').value = sectors.includes(UI.sector) ? UI.sector : 'all';
    if ($('fbMkt')) $('fbMkt').value = markets.includes(UI.market) ? UI.market : 'all';
    if (!sectors.includes(UI.sector)) UI.sector = 'all';
    if (!markets.includes(UI.market)) UI.market = 'all';
    /* v5.9 — após reconstruir o universo, reaplica a transformação
       Mercado→Marca quando a aba ativa for PDV; nas demais, mantém mercados. */
    if (typeof refreshGlobalMarketFilter === 'function') {
        try { refreshGlobalMarketFilter(getActiveTab()); } catch (e) { }
    }
}

/* v3.16 — disparado quando o usuário troca Regional ou Distrital. */
function onHierarchyChange() {
    const fbReg = $('fbReg'); const fbDist = $('fbDist');
    if (fbReg) UI.regional = fbReg.value;
    if (fbDist) UI.distrital = fbDist.value;
    /* Reset filtros dependentes (setor/mercado podem não existir mais no recorte). */
    UI.sector = 'all';
    UI.market = 'all';
    applyHierarchy();
    rebuildSelectors();
    buildSectorTabs();
    updateDistritalHeader();
    UI.expandedRows.clear();
    BRICK_PAGE = 1;
    renderActiveTab();
}

/* ===== RENDER DETALHE POR BRICK (aba "Detalhe por Brick") =====
   1 linha por brick × mercado × cidade, conforme slide 4 do PPT.
   Colunas: Setor | Mercado | Cidade | Brick | Mkt Total | Marca Supera |
            MAT Supera | Share% | POS. | Líder | MAT Líder | Gap 1ª | Gap 2ª |
            Gap 3ª | Cresc. Mkt | Cresc. Supera | Recomendação
=============================================================== */
let BRICK_PAGE = 1;
const BRICK_PAGE_SIZE = 100;

function renderBrick() {
    const el = $('tab-brick'); if (!el) return;
    const pd = UI.periodMode;
    const searchStr = norm(UI.search);

    const fRows = getFilteredRows().filter(r => {
        if (UI.market !== 'all' && r.market !== UI.market) return false;
        if (searchStr) {
            const blob = norm(r.market + ' ' + r.cidade + ' ' + r.brickName + ' ' + r.product);
            if (!blob.includes(searchStr)) return false;
        }
        return true;
    });

    // Monta lista de bricks (por mercado) agregados
    const byMkt = new Map();
    fRows.forEach(r => {
        if (!byMkt.has(r.market)) byMkt.set(r.market, []);
        byMkt.get(r.market).push(r);
    });

    const lines = [];
    byMkt.forEach((rs, market) => {
        const excl = (typeof getEffectiveExclusions === 'function')
            ? getEffectiveExclusions(market)
            : getExclusionsForMarket(market);
        const bricks = aggBricksOfMarket(rs, pd, excl);
        bricks.forEach(b => {
            if (UI.rec !== 'all' && b.rec !== UI.rec) return;
            const rk = brickRanking(b);
            const superaLabelLst = (MARKETS_BRANDS_MAP[normU(market)] || {}).supera || [];
            const superaLabel = superaLabelLst.length ? superaLabelLst[0].replace(/\s*\(SP0\)\s*/i, '') : market;
            lines.push({
                market,
                superaLabel,
                sector: cleanSectorName(b.sector),
                cidade: b.cidade,
                brick: b.brick,
                totalCur: b.totalCur,
                totalPrev: b.totalPrev,
                superaCur: b.superaCur,
                superaPrev: b.superaPrev,
                share: b.share,
                pos: rk.posSupera,
                leader: rk.leader ? rk.leader.name : '—',
                leaderVol: rk.leader ? rk.leader.cur : 0,
                leaderVolPrev: rk.leader ? rk.leader.prev : 0,
                gap1: rk.gap1,
                gap2: rk.gap2,
                gap3: rk.gap3,
                growthMkt: b.totalPrev !== 0 ? (b.totalCur / b.totalPrev - 1) : null,
                growthSup: b.superaPrev !== 0 ? (b.superaCur / b.superaPrev - 1) : null,
                rec: b.rec,
                /* v3.13 — ranking completo (Supera + concorrentes) p/ painel expansível */
                ranking: rk.ranking
            });
        });
    });

    /* v3.9 — ordenação por coluna (sort interativo)
       NADA é alterado nos cálculos: apenas a ordem de exibição.       */
    const sortKey = UI.brickSortKey || 'totalCur';
    const sortDir = UI.brickSortDir === 'asc' ? 1 : -1;
    lines.sort((a, bb) => {
        const va = a[sortKey];
        const vb = bb[sortKey];
        if (typeof va === 'number' || typeof vb === 'number') {
            const na = (va == null || isNaN(va)) ? -Infinity : va;
            const nb = (vb == null || isNaN(vb)) ? -Infinity : vb;
            return (na - nb) * sortDir;
        }
        const sa = String(va == null ? '' : va);
        const sb = String(vb == null ? '' : vb);
        return sa.localeCompare(sb, 'pt-BR') * sortDir;
    });

    const total = lines.length;
    const maxPage = Math.max(1, Math.ceil(total / BRICK_PAGE_SIZE));
    if (BRICK_PAGE > maxPage) BRICK_PAGE = maxPage;
    const start = (BRICK_PAGE - 1) * BRICK_PAGE_SIZE;
    const page = lines.slice(start, start + BRICK_PAGE_SIZE);

    /* helper: renderiza <th> sortável com seta */
    const arr = k => k === sortKey ? (UI.brickSortDir === 'asc' ? '▲' : '▼') : '⇅';
    const sh = (k, label, cls) => `<th class="sortable ${cls || ''}" onclick="sortBrickBy('${k}')">${label} <span class="sort-arr ${k === sortKey ? 'on' : ''}">${arr(k)}</span></th>`;

    /* v3.10 — labels do cabeçalho refletem o período ativo (TRI/YTD/MAT).
       Os valores das linhas já vêm calculados por período via
       aggBricksOfMarket(rows, pd) — só os títulos eram fixos.            */
    const pdLbl = pd; // 'TRI' | 'YTD' | 'MAT'
    const pdCresc = pd === 'MAT' ? 'CRESC. MAT' : (pd === 'YTD' ? 'CRESC. YTD' : 'CRESC. TRI');

    let html = '<div class="brick-view-wrap"><div class="tbl-wrap"><table class="main-tbl brick-detail-tbl"><thead class="tbl-head-fixed brick-head-dark"><tr>';
    /* v3.13 — coluna 'expand' (botão +/−) na primeira posição */
    html += '<th class="col-expand" aria-label="Expandir"></th>';
    html += sh('sector', 'SETOR');
    html += sh('market', 'MERCADO');
    html += sh('cidade', 'CIDADE');
    html += sh('brick', 'BRICK');
    html += sh('totalPrev', `MKT ${pdLbl} ANT.`, 'r');
    html += sh('totalCur', `MKT ${pdLbl} ATUAL`, 'r');
    html += sh('superaLabel', 'SUPERA', 'c-supera');
    html += sh('superaPrev', `${pdLbl} SUP Ant.`, 'r c-supera');
    html += sh('superaCur', `${pdLbl} SUP Atual`, 'r c-supera');
    html += sh('share', 'SHARE %', 'r');
    html += sh('pos', 'POS.', 'c');
    html += sh('leader', 'LÍDER');
    html += sh('gap1', 'GAP 1ª', 'r');
    html += sh('gap2', 'GAP 2ª', 'r');
    html += sh('gap3', 'GAP 3ª', 'r');
    html += sh('growthMkt', pdCresc + ' MKT', 'r');
    html += sh('growthSup', pdCresc + ' SUPERA', 'r');
    html += sh('rec', 'RECOMENDAÇÃO', 'c');
    html += '</tr></thead><tbody>';

    if (!page.length) {
        html += '<tr><td colspan="21" class="tbl-empty">Nenhum brick encontrado para os filtros selecionados.</td></tr>';
    } else {
        page.forEach((l, idx) => {
            const recCls = recPillCls(l.rec);
            const cMkt = l.growthMkt != null && l.growthMkt >= 0 ? 'vpos' : 'vneg';
            const cSup = l.growthSup != null && l.growthSup >= 0 ? 'vpos' : 'vneg';
            const expandId = `brick-exp-${idx}`;
            html += `<tr class="brick-detail-row row-${recCls}" data-exp="${expandId}">
                <td class="col-expand"><button class="btn-expand" type="button" onclick="toggleBrickExpand('${expandId}', this)" aria-label="Detalhar" title="Ver concorrentes do brick">+</button></td>
                <td><strong>${l.sector || '—'}</strong></td>
                <td><strong>${l.market}</strong></td>
                <td>${l.cidade || '—'}</td>
                <td><code class="brick-code-mono">${l.brick}</code></td>
                <td class="r">${fmtValue(l.totalPrev)}</td>
                <td class="r">${fmtValue(l.totalCur)}</td>
                <td class="c-supera">${l.superaLabel}</td>
                <td class="r vacc c-supera">${fmtValue(l.superaPrev)}</td>
                <td class="r vacc c-supera">${fmtValue(l.superaCur)}</td>
                <td class="r"><strong>${l.share.toFixed(1)}%</strong></td>
                <td class="c"><strong>${l.pos ? `${l.pos}ª` : '—'}</strong></td>
                <td><strong>${l.leader.replace(/\s*\([^)]+\)/, '')}</strong></td>
                <td class="r">${l.gap1 ? fmtValue(l.gap1) : '—'}</td>
                <td class="r">${l.gap2 ? fmtValue(l.gap2) : '—'}</td>
                <td class="r">${l.gap3 ? fmtValue(l.gap3) : '—'}</td>
                <td class="r ${cMkt}"><strong>${fmtPct(l.growthMkt)}</strong></td>
                <td class="r ${cSup}"><strong>${fmtPct(l.growthSup)}</strong></td>
                <td class="c"><span class="rec-pill ${recCls}">${l.rec}</span></td>
            </tr>`;
            /* v3.13 — linha expansível (oculta por padrão) com painel de concorrentes */
            html += renderBrickExpandRow(l, expandId, pdLbl);
        });
    }
    html += '</tbody></table></div>';

    // Paginação + Legenda (dentro do brick-view-wrap)
    html += `<div class="brick-footer">
        <div class="brick-legend">
            <strong>LEGENDA:</strong>
            <span class="rec-pill rb-lider">DEFENDER (1ª)</span>
            <span class="rec-pill rb-crescer">CRESCER (2ª)</span>
            <span class="rec-pill rb-oport">OPORTUNIDADE (3ª)</span>
            <span class="rec-pill rb-acomp">ACOMPANHAR (4ª+)</span>
            <span class="rec-pill rb-entrar">ENTRAR (0%)</span>
        </div>
        <div class="brick-pager">
            <button class="pager-btn" onclick="goBrickPage(1)" ${BRICK_PAGE === 1 ? 'disabled' : ''}>«</button>
            <button class="pager-btn" onclick="goBrickPage(${BRICK_PAGE - 1})" ${BRICK_PAGE === 1 ? 'disabled' : ''}>‹</button>
            <span class="pager-lbl">${total ? (start + 1) + '–' + Math.min(start + BRICK_PAGE_SIZE, total) : 0} de ${total}</span>
            <button class="pager-btn" onclick="goBrickPage(${BRICK_PAGE + 1})" ${BRICK_PAGE >= maxPage ? 'disabled' : ''}>›</button>
            <button class="pager-btn" onclick="goBrickPage(${maxPage})" ${BRICK_PAGE >= maxPage ? 'disabled' : ''}>»</button>
        </div>
    </div></div>`;

    el.innerHTML = html;
}

/* ============================================================
   v3.13 — Painel expansível de concorrentes do brick
   Renderiza uma <tr> oculta por padrão com mini-tabela do ranking
   completo do brick (Supera + concorrentes).
   ============================================================ */
function renderBrickExpandRow(l, expandId, pdLbl) {
    const ranking = l.ranking || [];
    const totalCur = l.totalCur || 0;
    const totalPrev = l.totalPrev || 0;
    const cnt = ranking.length;

    let inner = '';
    inner += `<div class="brick-exp-header">`;
    inner += `<span class="brick-exp-title">Concorrentes — <strong>${l.market}</strong> — ${l.cidade || '—'}</span>`;
    inner += `<span class="brick-exp-meta"><code>${l.brick}</code> &middot; ${cnt} marca${cnt === 1 ? '' : 's'} &middot; Mercado total: ${fmtValue(totalCur)} un.</span>`;
    inner += `</div>`;

    inner += `<table class="brick-exp-tbl">`;
    inner += `<colgroup>`;
    inner += `<col style="width:42px"><col><col style="width:78px"><col style="width:78px"><col style="width:72px"><col style="width:64px">`;
    inner += `</colgroup>`;
    inner += `<thead><tr>`;
    inner += `<th class="r">POS.</th>`;
    inner += `<th>MARCA</th>`;
    inner += `<th class="r">${pdLbl} ANT.</th>`;
    inner += `<th class="r">${pdLbl} ATUAL</th>`;
    inner += `<th class="r">EVOL. %</th>`;
    inner += `<th class="r">SHARE %</th>`;
    inner += `</tr></thead><tbody>`;

    ranking.forEach((m, i) => {
        const isSupera = m.role === 'SUPERA';
        const evol = (m.prev && m.prev !== 0) ? ((m.cur / m.prev) - 1) : null;
        const evolCls = evol == null ? '' : (evol >= 0 ? 'vpos' : 'vneg');
        const shr = totalCur > 0 ? (m.cur / totalCur) * 100 : 0;
        /* Se for Supera, usa o superaLabel do brick (nome real da marca, sem sufixo SP0).
           Se for concorrente, remove o sufixo de laboratório entre parênteses do nome. */
        const cleanName = isSupera
            ? (l.superaLabel || String(m.name || '').replace(/\s*\(SP0\)\s*/i, '').trim())
            : String(m.name || '').replace(/\s*\([^)]+\)\s*$/, '').trim();
        const tag = isSupera ? null : String(m.name || '').match(/\(([^)]+)\)\s*$/);
        const tagTxt = tag ? tag[1] : '';
        inner += `<tr class="${isSupera ? 'is-supera' : ''}">`;
        inner += `<td class="r pos-cell"><strong>${i + 1}ª</strong></td>`;
        inner += `<td>${isSupera ? '<span class="dot-supera"></span>' : ''}<strong>${cleanName}</strong>${tagTxt ? ` <span class="brand-tag">(${tagTxt})</span>` : ''}${isSupera ? ' <span class="badge-supera">SUPERA</span>' : ''}</td>`;
        inner += `<td class="r">${fmtValue(m.prev)}</td>`;
        inner += `<td class="r ${isSupera ? 'is-supera-val' : ''}">${fmtValue(m.cur)}</td>`;
        inner += `<td class="r ${evolCls}"><strong>${fmtPct(evol)}</strong></td>`;
        const shrCls = shr >= 30 ? 'shr-hi' : (shr >= 10 ? 'shr-mid' : 'shr-lo');
        inner += `<td class="r ${shrCls}"><strong>${shr.toFixed(1)}%</strong></td>`;
        inner += `</tr>`;
    });

    if (totalPrev > 0) {
        const evolMkt = (totalCur / totalPrev) - 1;
        const cls = evolMkt >= 0 ? 'vpos' : 'vneg';
        inner += `<tr class="brick-exp-total">`;
        inner += `<td colspan="2" class="r"><strong>TOTAL DO MERCADO</strong></td>`;
        inner += `<td class="r"><strong>${fmtValue(totalPrev)}</strong></td>`;
        inner += `<td class="r"><strong>${fmtValue(totalCur)}</strong></td>`;
        inner += `<td class="r ${cls}"><strong>${fmtPct(evolMkt)}</strong></td>`;
        inner += `<td class="r"><strong>100.0%</strong></td>`;
        inner += `</tr>`;
    }

    inner += `</tbody></table>`;

    return `<tr class="brick-expand-row" id="${expandId}" hidden>
        <td colspan="18" class="brick-exp-cell">${inner}</td>
    </tr>`;
}

function toggleBrickExpand(expandId, btn) {
    const row = document.getElementById(expandId);
    if (!row) return;
    const isHidden = row.hasAttribute('hidden');
    if (isHidden) {
        row.removeAttribute('hidden');
        if (btn) { btn.textContent = '−'; btn.classList.add('is-open'); }
    } else {
        row.setAttribute('hidden', '');
        if (btn) { btn.textContent = '+'; btn.classList.remove('is-open'); }
    }
}

function goBrickPage(n) {
    BRICK_PAGE = Math.max(1, n);
    renderBrick();
}

/* v3.9 — callback do clique no <th> sortável da tabela Detalhe por Brick.
   Alterna asc/desc na mesma chave; troca para nova chave em desc.       */
function sortBrickBy(key) {
    if (UI.brickSortKey === key) {
        UI.brickSortDir = UI.brickSortDir === 'asc' ? 'desc' : 'asc';
    } else {
        UI.brickSortKey = key;
        UI.brickSortDir = 'desc';
    }
    BRICK_PAGE = 1;
    renderBrick();
}
window.sortBrickBy = sortBrickBy;

/* ===== ABAS DINÂMICAS POR SETOR (GD) =====
   Após carregar dados, cria uma aba por setor dentro do tab-rail.
   Clicar em uma aba de setor filtra a visualização de Detalhe por Brick.
============================================================================ */
/* v3.5 — rotula cada aba de setor com "NNNNNN - PRIMEIRO_NOME" para
   caber todas as abas na tela sem overflow.                              */
function shortSectorLabel(sec) {
    const cleaned = cleanSectorName(sec) || sec;
    // Tenta identificar padrão "NNNNNN - NOME COMPLETO"
    const m = cleaned.match(/^(\d{4,6})\s*[\-–—]\s*(.+)$/);
    if (m) {
        const firstName = m[2].trim().split(/\s+/)[0];
        return m[1] + ' — ' + firstName;
    }
    // Sem padrão numérico: devolve só o primeiro token
    return cleaned.split(/\s+/).slice(0, 2).join(' ');
}

function buildSectorTabs() {
    /* v3.17 — quando a base tem mais de uma Distrital, o tab rail mostra
       Distritais (clicar filtra `UI.distrital`); quando há apenas uma
       Distrital, mostra os Setores como antes (clicar filtra `UI.sector`). */
    const host = $('sectorTabs');
    if (!host) return;
    host.innerHTML = '';

    /* universo de Distritais conforme o recorte de Regional ativo */
    const universe = (DB.allRowsByValueMode && DB.allRowsByValueMode[UI.unitMode]) || [];
    const distList = (DB.distritais || []).filter(d => {
        if (UI.regional && UI.regional !== 'all') {
            return universe.some(r => r.regional === UI.regional && r.distrital === d);
        }
        return true;
    });

    if (distList.length > 1) {
        /* === modo "Distritais" === */
        distList.forEach(d => {
            const label = shortSectorLabel(d);
            const btn = document.createElement('button');
            btn.className = 'tab tab-sector tab-distrital';
            btn.setAttribute('data-tab', 'brick');
            btn.setAttribute('data-distrital', d);
            btn.setAttribute('title', cleanSectorName(d) || d);
            btn.innerHTML = '<span class="tab-sector-dot"></span>' + label;
            if (UI.distrital === d) btn.classList.add('active-sector');
            btn.addEventListener('click', () => {
                const wasActive = btn.classList.contains('active-sector');
                document.querySelectorAll('.tab-sector').forEach(t => t.classList.remove('active-sector'));
                if (wasActive) {
                    UI.distrital = 'all';
                    const sel = $('fbDist'); if (sel) sel.value = 'all';
                } else {
                    btn.classList.add('active-sector');
                    UI.distrital = d;
                    const sel = $('fbDist'); if (sel) sel.value = d;
                }
                onHierarchyChange();
            });
            host.appendChild(btn);
        });
    } else {
        /* === modo "Setores" (clássico) === */
        DB.sectors.forEach(sec => {
            const label = shortSectorLabel(sec);
            const btn = document.createElement('button');
            btn.className = 'tab tab-sector';
            btn.setAttribute('data-tab', 'brick');
            btn.setAttribute('data-sector', sec);
            btn.setAttribute('title', cleanSectorName(sec) || sec);
            btn.innerHTML = '<span class="tab-sector-dot"></span>' + label;
            if (UI.sector === sec) btn.classList.add('active-sector');
            btn.addEventListener('click', () => {
                const wasActive = btn.classList.contains('active-sector');
                document.querySelectorAll('.tab-sector').forEach(t => t.classList.remove('active-sector'));
                if (wasActive) {
                    UI.sector = 'all';
                    $('fbSec').value = 'all';
                } else {
                    btn.classList.add('active-sector');
                    UI.sector = sec;
                    $('fbSec').value = sec;
                }
                UI.expandedRows.clear();
                BRICK_PAGE = 1;
                renderActiveTab();
            });
            host.appendChild(btn);
        });
    }
}

/* v3.5 — calcula a distrital automaticamente a partir do primeiro setor
   carregado. Regra: 4 primeiros dígitos do setor + "00".
   Ex.: setor 101101 → distrital 101100; setor 201005 → distrital 201000. */
/* v3.5 — mede as alturas reais das barras sticky (header, KPI, tab-rail,
   filter-bar) e grava em CSS vars para que `top: var(--sticky-tbl)` do
   thead acompanhe qualquer quebra de linha da tab-rail.                   */
function recomputeStickyOffsets() {
    const root = document.documentElement;
    const hdr = document.getElementById('mainHeader');
    const kpi = document.getElementById('kpiStrip');
    const tab = document.getElementById('tabRail');
    const fil = document.getElementById('filterBar');
    /* v5.6 — Defesa contra leituras prematuras (offsetHeight == 1)
       Se o elemento ainda não foi totalmente pintado, mantém o valor
       atual ao invés de gravar um valor inválido que colapsaria a barra. */
    const safeH = (el, fallback, current, min) => {
        if (!el) return fallback;
        const h = el.offsetHeight;
        if (h < (min || 20)) return current || fallback;
        return h;
    };
    const cur = {
        hdr: parseInt(getComputedStyle(root).getPropertyValue('--hdr-h')) || 0,
        kpi: parseInt(getComputedStyle(root).getPropertyValue('--kpi-h')) || 0,
        tab: parseInt(getComputedStyle(root).getPropertyValue('--tab-h')) || 0,
        fb: parseInt(getComputedStyle(root).getPropertyValue('--fb-h')) || 0
    };
    const hH = safeH(hdr, 60, cur.hdr, 30);
    /* kpi: se está oculto, valor = 0; senão usa scrollHeight como tamanho
       real do conteúdo, com fallback de 40px (que é o min-height) */
    /* v6.10 — KPI strip agora tem height fixo (= --kpi-h). Lemos o
       offsetHeight real, mas com fallback para o valor atual em caso de
       leitura prematura. Não forçamos mínimo de 40, para não criar gap. */
    let kH = 0;
    if (kpi && kpi.style.display !== 'none' && getComputedStyle(kpi).display !== 'none') {
        const h = kpi.offsetHeight;
        kH = (h >= 20) ? h : (cur.kpi || 32);
    }
    const tH = safeH(tab, 38, cur.tab, 20);
    // v7 — quando o filter-bar global está oculto (aba PDV), gravar 0 para --fb-h
    // para que --sticky-tbl não inclua a altura do painel oculto.
    let fH = 0;
    if (fil && fil.style.display !== 'none' && getComputedStyle(fil).display !== 'none') {
        const h = fil.offsetHeight;
        fH = (h >= 20) ? h : (cur.fb || 32);
    }
    root.style.setProperty('--hdr-h', hH + 'px');
    root.style.setProperty('--kpi-h', kH + 'px');
    root.style.setProperty('--tab-h', tH + 'px');
    root.style.setProperty('--fb-h', fH + 'px');
    // Grava --pdv-fb-h = altura APENAS da filterbar PDV (sem toolbar),
    // para que o thead sticky fique colado logo abaixo da filterbar.
    // (--pdv-extra-h continua incluindo o toolbar para outros usos legados.)
    var pdvFb = document.querySelector('.pdv-filterbar');
    var pdvTb = document.querySelector('.pdv-toolbar');
    var pdvFbH = 0;
    var pdvExtra = 0;
    if (pdvFb && getComputedStyle(pdvFb).display !== 'none') {
        pdvFbH = pdvFb.offsetHeight;
        pdvExtra += pdvFbH;
    }
    if (pdvTb && getComputedStyle(pdvTb).display !== 'none') pdvExtra += pdvTb.offsetHeight + 4;
    root.style.setProperty('--pdv-fb-h', pdvFbH + 'px');
    root.style.setProperty('--pdv-extra-h', pdvExtra + 'px');
}

/* Dispara recomputação após cada render/resize. */
window.addEventListener('resize', () => recomputeStickyOffsets());

/* v5.5 — Atualiza o badge de status das planilhas (Unidades / R$) considerando
   tanto a base consolidada (DB) quanto a base de PDVs (PDV). */
function updateDatasetStatus() {
    const statusEl = $('datasetStatus');
    if (!statusEl) return;
    const allMM = DB.allRowsByValueMode || { UN: [], RS: [] };
    const hasUN = (allMM.UN && allMM.UN.length) || (typeof PDV !== 'undefined' && PDV.rowsByValueMode && PDV.rowsByValueMode.UN && PDV.rowsByValueMode.UN.length);
    const hasRS = (allMM.RS && allMM.RS.length) || (typeof PDV !== 'undefined' && PDV.rowsByValueMode && PDV.rowsByValueMode.RS && PDV.rowsByValueMode.RS.length);
    const unOk = hasUN ? '<span class="ds-ok">Unidades</span>' : '<span class="ds-off">Unidades</span>';
    const rsOk = hasRS ? '<span class="ds-ok">R$</span>' : '<span class="ds-off">R$</span>';
    statusEl.innerHTML = `Planilhas: ${unOk} · ${rsOk}`;
}

function updateDistritalHeader() {
    const el = $('hdrDistrital');
    if (!el) return;
    if (!DB.sectors.length) { el.textContent = 'Análise Estratégica'; return; }
    /* v3.16 — mostra o nível agregado ativo (Regional / Distrital). */
    const parts = [];
    if (UI.regional && UI.regional !== 'all') {
        parts.push('Regional ' + cleanSectorName(UI.regional));
    } else if (DB.regionals.length > 1) {
        parts.push('Todas as Regionais (' + DB.regionals.length + ')');
    }
    if (UI.distrital && UI.distrital !== 'all') {
        parts.push('Distrital ' + cleanSectorName(UI.distrital));
    } else if (DB.distritais.length > 1) {
        parts.push('Todas as Distritais (' + DB.distritais.length + ')');
    } else if (DB.distritais.length === 1) {
        parts.push('Distrital ' + cleanSectorName(DB.distritais[0]));
    } else {
        /* fallback: deriva do código do setor */
        for (const sec of DB.sectors) {
            const mm = String(sec).match(/(\d{4,6})/);
            if (mm) { parts.push('Distrital ' + mm[1].slice(0, 4) + '00'); break; }
        }
    }
    el.textContent = parts.length ? parts.join(' · ') : 'Análise Estratégica';
}

function switchTab(tn) {
    ['resumo', 'brick', 'oport', 'entrar', 'graficos', 'pdv'].forEach(k => {
        const v = $('tab-' + k);
        if (v) v.style.display = (k === tn) ? 'block' : 'none';
    });
    /* v5.8 — quando estiver na aba PDV, transforma o filtro 'Mercado'
       global em filtro 'Marca', listando as marcas presentes nos PDVs.
       Em qualquer outra aba, restaura o comportamento original. */
    refreshGlobalMarketFilter(tn);
    if (tn === 'brick') renderBrick();
    if (tn === 'oport') renderOport();
    if (tn === 'entrar') renderEntrar();
    if (tn === 'graficos') renderGraficos();
    if (tn === 'resumo') renderResumo();
    if (tn === 'pdv') renderPDV();
}

/* v5.8 — Reconstrói o select global #fbMkt conforme a aba ativa.
   - Aba 'pdv'   → lista MARCAS (únicas dos PDVs carregados)
   - Outras abas → lista MERCADOS (consolidada + PDVs) */
function refreshGlobalMarketFilter(tabName) {
    const lbl = document.getElementById('fbMktLabel');
    const sel = document.getElementById('fbMkt');
    const goto = document.getElementById('fbGoto');
    if (!sel) return;
    const isPdv = tabName === 'pdv';
    if (lbl) lbl.textContent = isPdv ? 'Marca' : 'Mercado';
    /* v6.11 — Busca unificada na aba PDV: esconde a busca global da
       filter-bar e a busca CNPJ rápida do header (linha 2). A única caixa
       de busca ativa passa a ser a interna da pdv-filterbar. */
    const fbSearchWrap = document.querySelector('.fb-search-wrap');
    const cnpjQuickWrap = document.querySelector('.cnpj-quick-wrap');
    if (fbSearchWrap) fbSearchWrap.style.display = isPdv ? 'none' : '';
    if (cnpjQuickWrap) cnpjQuickWrap.style.display = isPdv ? 'none' : '';
    // Oculta a filterbar superior na aba PDV e recomputa offsets sticky
    const filterBar = document.getElementById('filterBar');
    if (filterBar) filterBar.style.display = isPdv ? 'none' : '';
    // Na aba PDV, esconde os botões Carregar e Exportar do header principal
    // (substituídos pelos botões próprios do cabeçalho de PDVs)
    const btnUploadHdr = document.getElementById('btnUpload');
    const btnEnviarHdr = document.getElementById('btnEnviar');
    if (btnUploadHdr) btnUploadHdr.style.display = isPdv ? 'none' : '';
    if (btnEnviarHdr) btnEnviarHdr.style.display = isPdv ? 'none' : '';
    requestAnimationFrame(function () {
        if (typeof recomputeStickyOffsets === 'function') recomputeStickyOffsets();
        requestAnimationFrame(function () {
            if (typeof recomputeStickyOffsets === 'function') recomputeStickyOffsets();
        });
    });
    /* limpa opções exceto a primeira ("Todos…") */
    while (sel.children.length > 1) sel.removeChild(sel.lastChild);
    sel.firstElementChild.textContent = isPdv ? 'Todas as Marcas' : 'Todos os Mercados';
    let items;
    if (isPdv) {
        const mode = (typeof UI !== 'undefined' && UI.unitMode) ? UI.unitMode : 'UN';
        const pdvs = (PDV && PDV.pdvsByValueMode && PDV.pdvsByValueMode[mode]) || [];
        const set = new Set();
        pdvs.forEach(p => (p.marcas || []).forEach(m => set.add(m)));
        items = [...set].sort();
    } else {
        items = [...(DB.markets || [])];
        /* também une mercados de PDV (que coincidem com marcas) para evitar buracos */
        try {
            const all = new Set(items);
            ['UN', 'RS'].forEach(m => (PDV.pdvsByValueMode[m] || []).forEach(p => (p.marcas || []).forEach(b => {
                const base = String(b).replace(/\s*\(.*?\)\s*$/, '').trim();
                if (base) all.add(base);
            })));
            items = [...all].sort();
        } catch (e) { }
    }
    items.forEach(v => {
        const o = document.createElement('option');
        o.value = v; o.textContent = v;
        sel.appendChild(o);
    });
    /* preserva seleção se ainda válida */
    const cur = (UI && UI.market) || 'all';
    sel.value = items.includes(cur) ? cur : 'all';
    if (UI) UI.market = sel.value;
}

/* ===== EXPORT XLSX ===== */
/* smartExport — detecta a aba/view ativa e chama a função de exportação correta */
function smartExport() {
    // Verifica se a view de Projeção está aberta
    const projView = document.getElementById('projecaoView');
    if (projView && projView.style.display !== 'none' && projView.style.display !== '') {
        const projExportBtn = document.getElementById('proj-btnExportCSV');
        if (projExportBtn && !projExportBtn.disabled) {
            projExportBtn.click();
        } else {
            toast('Nenhum dado de projeção para exportar');
        }
        return;
    }
    // Verifica a aba ativa no menu principal
    const activeTabEl = document.querySelector('.tab.active');
    const activeTabName = activeTabEl ? activeTabEl.dataset.tab : null;
    if (activeTabName === 'pdv') {
        exportPDVXLSX();
    } else {
        exportXLSX();
    }
}

function exportXLSX() {
    if (!DB.rows.length) { toast('Nenhum dado para exportar'); return; }
    const pd = UI.periodMode;
    const isRS = UI.unitMode === 'RS';
    const FMT_CONTABIL = '_("R$"* #,##0.00_);_("R$"* \\(#,##0.00\\);_("R$"* "-"??_);_(@_)';
    const FMT_PCT = '0.00%';
    const lbl = isRS ? 'R$' : 'Un.';

    // Monta linhas com valores numéricos reais (não strings formatadas)
    const data = DB.rows.map(r => {
        const d = r.data[pd] || {};
        const obj = {
            'Setor (GD)': r.sector,
            'Mercado': r.market,
            'Produto': r.product,
            'Tipo': r.role,
            'Brick': r.brickName,
            'Cidade': r.cidade,
        };
        obj[lbl + ' ' + pd + ' Anterior'] = d.previous || 0;
        obj[lbl + ' ' + pd + ' Atual'] = d.current || 0;
        obj['Crescimento %'] = d.growth != null ? d.growth : '';
        return obj;
    });

    try {
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();

        // Descobre índices das colunas numéricas pelo header
        const headers = Object.keys(data[0] || {});
        const numCols = [lbl + ' ' + pd + ' Anterior', lbl + ' ' + pd + ' Atual'];
        const pctCols = ['Crescimento %'];

        // Aplica formato e alinhamento em cada célula de dados
        const range = XLSX.utils.decode_range(ws['!ref'] || 'A1');
        for (let R = range.s.r; R <= range.e.r; R++) {
            for (let C = range.s.c; C <= range.e.c; C++) {
                const addr = XLSX.utils.encode_cell({ r: R, c: C });
                if (!ws[addr]) continue;
                const colName = headers[C];
                const isHeader = R === 0;
                const isNumCol = numCols.includes(colName);
                const isPctCol = pctCols.includes(colName);

                if (!ws[addr].s) ws[addr].s = {};
                if (isNumCol || isPctCol) {
                    ws[addr].s.alignment = { horizontal: 'center', vertical: 'center' };
                }
                if (!isHeader) {
                    if (isNumCol && isRS) ws[addr].z = FMT_CONTABIL;
                    if (isPctCol && ws[addr].t === 'n') ws[addr].z = FMT_PCT;
                }
            }
        }

        XLSX.utils.book_append_sheet(wb, ws, 'Dados');

        // Usa Blob + <a> para download — funciona em todos os browsers
        const fileName = 'supera_rx_' + pd + '_' + UI.unitMode + '.xlsx';
        const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array', cellStyles: true });
        const blob = new Blob([wbout], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 1000);
        toast('Arquivo exportado');
    } catch (err) {
        console.error('[exportXLSX] erro:', err);
        toast('Erro ao exportar: ' + (err.message || err));
    }
}

/* ===== INIT =====
   - Se o usuário clicou em `$ R$` ANTES de subir, `UI.unitMode === 'RS'`
     → consideramos isso como "forçar RS" para essa planilha específica.
   - Se já há dados carregados (append), mesclamos os dois datasets.          */
async function init(files, opts) {
    try {
        const forceUnit = (opts && opts.forceUnit) ? opts.forceUnit : null;
        toast('Processando planilhas...');
        const { rowsByMode, diagnostics } = await parseFiles(files, forceUnit);
        if (!rowsByMode.UN.length && !rowsByMode.RS.length) {
            toast('Nenhuma linha encontrada. Verifique o cabeçalho das planilhas (veja o console para detalhes).');
            console.error('[SUPERA] Nenhuma linha processada. Verifique se a planilha tem as colunas: Mercado, Produto/Marca, Brick, MAT/YTD/TRI.');
            return;
        }

        // Substitui dados do mesmo modo (não acumula uploads do mesmo tipo)
        // Isso evita duplicação quando o usuário carrega a mesma planilha mais de uma vez
        const prev = DB.allRowsByValueMode || { UN: [], RS: [] };
        const merged = {
            UN: rowsByMode.UN.length ? rowsByMode.UN : (prev.UN || []),
            RS: rowsByMode.RS.length ? rowsByMode.RS : (prev.RS || [])
        };
        /* v3.16 — ao subir uma nova planilha, reseta hierarquia para 'all'
           para o usuário ver o universo carregado. */
        UI.regional = 'all';
        UI.distrital = 'all';
        buildDB(merged);

        /* v5.5 — Ajusta UI.unitMode automaticamente para o modo que tem dados,
           garantindo que o Resumo Geral não fique vazio independente da ordem de upload.
           Prioridade: respeita modo forçado pelo usuário; senão, usa o modo do upload
           atual; senão mantém o atual se ainda válido. */
        const hasMergedUN = (merged.UN || []).length > 0;
        const hasMergedRS = (merged.RS || []).length > 0;
        if (forceUnit === 'UN' || forceUnit === 'RS') {
            UI.unitMode = forceUnit;
        } else if (rowsByMode.RS.length && !rowsByMode.UN.length) {
            UI.unitMode = 'RS';
        } else if (rowsByMode.UN.length && !rowsByMode.RS.length) {
            UI.unitMode = 'UN';
        } else if (UI.unitMode === 'UN' && !hasMergedUN && hasMergedRS) {
            UI.unitMode = 'RS';
        } else if (UI.unitMode === 'RS' && !hasMergedRS && hasMergedUN) {
            UI.unitMode = 'UN';
        }
        applyHierarchy();
        document.querySelectorAll('.unit-btn').forEach(b => b.classList.remove('active'));
        const btn = $('btn' + UI.unitMode);
        if (btn) btn.classList.add('active');

        $('uploadView').style.display = 'none';
        $('dashView').style.display = 'block';
        $('kpiStrip').style.display = 'flex';
        rebuildSelectors();
        buildSectorTabs();
        updateDistritalHeader();
        /* v5.4 — Se a aba ativa for 'pdv' (caso usuário tenha carregado PDV antes),
           devolve o foco para 'Resumo Geral' ao chegar a base consolidada, evitando
           sobreposição visual. Caso contrário, mantém a aba atual. */
        const activeTabEl = document.querySelector('.tab.active');
        const activeTabName = activeTabEl ? activeTabEl.dataset.tab : null;
        if (!activeTabName || activeTabName === 'pdv') {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            const resumoTab = document.querySelector('.tab[data-tab="resumo"]');
            if (resumoTab) resumoTab.classList.add('active');
            switchTab('resumo');
        } else {
            /* Re-renderiza a aba ativa atual com os novos dados */
            switchTab(activeTabName);
        }
        // Recomputa alturas após primeiro render (e novamente após o paint completo,
        // pois o kpiStrip e o filterBar podem ter mudado de altura).
        requestAnimationFrame(() => recomputeStickyOffsets());
        setTimeout(() => recomputeStickyOffsets(), 120);

        const msg = diagnostics.map(d => `${d.file}${d.forced ? ' (forçada)' : ''}: ${d.mode === 'RS' ? 'R$' : 'Unidades'}`).join(' · ');
        updateDatasetStatus();
        toast(DB.markets.length + ' mercados · ' + msg);

        /* v6.2 — Salvar dados no IndexedDB para persistência */
        const dataToSave = {
            DB: DB,
            UI: { periodMode: UI.periodMode, unitMode: UI.unitMode, regional: UI.regional, distrital: UI.distrital },
            timestamp: new Date().toISOString()
        };
        DBPersist.save(dataToSave).catch(e => console.warn('[SUPERA] Erro ao salvar dados:', e));
    } catch (e) {
        console.error('[SUPERA] Erro init:', e);
        toast('Erro: ' + e.message);
    }
}

/* ===== EVENTOS ===== */
document.addEventListener('DOMContentLoaded', async () => {
    /* v6.2 — Carregar dados salvos do IndexedDB ao iniciar */
    try {
        const savedData = await DBPersist.load();
        if (savedData && savedData.DB && savedData.DB.rows && savedData.DB.rows.length > 0) {
            DB = savedData.DB;
            UI.periodMode = savedData.UI?.periodMode || 'MAT';
            UI.unitMode = savedData.UI?.unitMode || 'UN';
            UI.regional = savedData.UI?.regional || 'all';
            UI.distrital = savedData.UI?.distrital || 'all';

            $('uploadView').style.display = 'none';
            $('dashView').style.display = 'block';
            $('kpiStrip').style.display = 'flex';

            rebuildSelectors();
            buildSectorTabs();
            updateDistritalHeader();
            applyHierarchy();

            document.querySelectorAll('.period-btn').forEach(b => b.classList.remove('active'));
            const periodBtn = $('btn' + UI.periodMode);
            if (periodBtn) periodBtn.classList.add('active');

            document.querySelectorAll('.unit-btn').forEach(b => b.classList.remove('active'));
            const unitBtn = $('btn' + UI.unitMode);
            if (unitBtn) unitBtn.classList.add('active');

            switchTab('resumo');
            updateDatasetStatus();

            /* Mostrar indicador de dados salvos */
            const historyInd = $('historyIndicator');
            if (historyInd) historyInd.style.display = 'flex';

            requestAnimationFrame(() => recomputeStickyOffsets());
            setTimeout(() => recomputeStickyOffsets(), 120);

            console.log('[SUPERA] Dados restaurados do historico');
        }
    } catch (e) {
        console.warn('[SUPERA] Erro ao carregar dados salvos:', e);
    }

    const fileInput = $('fileInput');
    $('btnUpload').addEventListener('click', () => fileInput.click());
    $('btnSelectFile').addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', e => {
        if (!e.target.files.length) return;
        const forceUnit = window._unitForced || null;
        smartUpload(e.target.files, { forceUnit });
        e.target.value = '';
    });

    const uploadZone = $('uploadZone');
    if (uploadZone) {
        uploadZone.addEventListener('dragover', e => { e.preventDefault(); uploadZone.classList.add('drag'); });
        uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('drag'));
        uploadZone.addEventListener('drop', e => {
            e.preventDefault();
            uploadZone.classList.remove('drag');
            const forceUnit = window._unitForced || null;
            if (e.dataTransfer.files.length) smartUpload(e.dataTransfer.files, { forceUnit });
        });
    }

    // Botão opcional para limpar base (se existir na UI)
    const clrBtn = $('btnClearData');
    if (clrBtn) {
        clrBtn.addEventListener('click', () => {
            DB.allRowsByValueMode = { UN: [], RS: [] };
            DB.rowsByValueMode = { UN: [], RS: [] };
            DB.rows = [];
            DB.regionals = [];
            DB.distritais = [];
            UI.regional = 'all';
            UI.distrital = 'all';
            $('dashView').style.display = 'none';
            $('kpiStrip').style.display = 'none';
            $('uploadView').style.display = 'flex';
            toast('Base limpa');
        });
    }

    /* v6.2 — Botão para limpar histórico (IndexedDB) */
    const clrHistBtn = $('btnClearHistory');
    if (clrHistBtn) {
        clrHistBtn.addEventListener('click', () => {
            if (confirm('Tem certeza que deseja limpar o historico de dados salvos?')) {
                DBPersist.clear().then(() => {
                    $('historyIndicator').style.display = 'none';
                    toast('Historico limpo');
                }).catch(e => {
                    console.error('[SUPERA] Erro ao limpar historico:', e);
                    toast('Erro ao limpar historico');
                });
            }
        });
    }

    /* v3.16 — listeners para os novos seletores Regional / Distrital */
    ['fbReg', 'fbDist'].forEach(id => {
        const el = $(id);
        if (el) el.addEventListener('change', onHierarchyChange);
    });

    $('brickModalClose').addEventListener('click', () => $('brickModal').classList.remove('open'));
    $('verModalClose').addEventListener('click', () => $('verModal').classList.remove('open'));
    [$('brickModal'), $('verModal')].forEach(m => {
        m.addEventListener('click', e => { if (e.target === m) m.classList.remove('open'); });
    });

    document.querySelectorAll('#tabRail > .tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tn = tab.getAttribute('data-tab');
            if (!tn) return;
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            switchTab(tn);
        });
    });

    /* Filtros globais — qualquer mudança propaga para a aba ATIVA */
    ['fbSec', 'fbMkt', 'fbRec'].forEach(id => {
        const el = $(id);
        if (el) el.addEventListener('change', onFilterChange);
    });
    const searchEl = $('fbSearch');
    if (searchEl) {
        // input dispara em tempo real; debounce leve para tabelas grandes
        let t; searchEl.addEventListener('input', () => {
            clearTimeout(t); t = setTimeout(onFilterChange, 120);
        });
    }
    const fbGoto = $('fbGoto');
    if (fbGoto) fbGoto.addEventListener('change', () => { gotoMarket(fbGoto.value); fbGoto.value = ''; });
});

/* ===== ABAS AUXILIARES ===== */
function renderOport() {
    const el = $('tab-oport'); if (!el) return;
    const pd = UI.periodMode;
    const mkts = aggMarkets(getFilteredRows(), pd);
    const medianCur = median(mkts.map(m => m.current));
    const totalSuperaGlobal = mkts.reduce((s, m) => s + m.supera, 0);
    const mktsComSupera = mkts.filter(m => m.supera > 0);
    const avgShare = mktsComSupera.length
        ? mktsComSupera.reduce((s, m) => s + m.share, 0) / mktsComSupera.length : 20;
    const shareAlertaLimite = avgShare / 2;

    function superaELider(m) {
        const ranking = aggMarketRanking(m.rows, pd);
        return ranking.length > 0 && ranking[0].role === 'SUPERA';
    }

    /* OPORTUNIDADES: share 10–49%, não líder, volume ≥ mediana */
    const oport = mkts
        .filter(m => m.current >= medianCur && m.share >= 10 && m.share <= 49 && !superaELider(m))
        .map(m => ({ ...m, gapTo50: m.current * 0.5 - m.supera }))
        .sort((a, b) => b.gapTo50 - a.gapTo50);

    /* ACOMPANHAR ALERTA: volume ≥ R$1M + share < metade da média */
    const acompAlerta = mkts
        .filter(m => m.current >= 1_000_000 && m.share > 0 && m.share < shareAlertaLimite)
        .sort((a, b) => b.current - a.current);

    /* ACOMPANHAR ROTINA: representatividade < 0,5% do total Supera */
    const REPRES_CORTE = 0.005;
    const acompRotina = mkts
        .filter(m => {
            if (m.supera <= 0) return false;
            const repres = totalSuperaGlobal > 0 ? m.supera / totalSuperaGlobal : 0;
            return repres < REPRES_CORTE;
        })
        .filter(m => !(m.current >= 1_000_000 && m.share > 0 && m.share < shareAlertaLimite))
        .sort((a, b) => b.current - a.current);

    function buildOportTable(rows) {
        if (!rows.length) return '<p class="panel-sub" style="padding:12px 0;color:var(--text-secondary)">Nenhum mercado encontrado com esses critérios nos filtros ativos.</p>';
        let t = `<table class="modal-tbl"><thead><tr>
            <th>Mercado</th><th class="r">Vol. Mercado</th><th class="r">Supera</th>
            <th class="r">Share</th><th class="r">Cresc. Mercado</th>
            <th class="r">Gap p/ 50%</th><th class="c">Potencial</th>
        </tr></thead><tbody>`;
        rows.forEach(m => {
            const potLabel = m.share <= 20 ? 'Alta' : m.share <= 35 ? 'Média' : 'Moderada';
            const potStyle = m.share <= 20 ? 'background:#d1fae5;color:#065f46'
                : m.share <= 35 ? 'background:#fef3c7;color:#92400e'
                    : 'background:#e0f2fe;color:#075985';
            const gCls = (m.growth != null && m.growth >= 0) ? 'vpos' : 'vneg';
            const gTxt = m.growth != null ? ((m.growth >= 0 ? '+' : '') + fmtPct(m.growth)) : '—';
            t += `<tr>
                <td><strong>${m.market}</strong></td>
                <td class="r">${fmtValue(m.current)}</td>
                <td class="r vacc">${fmtValue(m.supera)}</td>
                <td class="r"><strong>${m.share.toFixed(1)}%</strong></td>
                <td class="r ${gCls}">${gTxt}</td>
                <td class="r">${fmtValue(m.gapTo50)}</td>
                <td class="c"><span class="pot-pill" style="${potStyle}">${potLabel}</span></td>
            </tr>`;
        });
        return t + '</tbody></table>';
    }

    function buildAcompTable(rows, showRepres) {
        if (!rows.length) return '<p class="panel-sub" style="padding:12px 0;color:var(--text-secondary)">Nenhum mercado nesta categoria.</p>';
        const extraTh = showRepres ? '<th class="r">Represent.</th>' : '';
        let t = `<table class="modal-tbl"><thead><tr>
            <th>Mercado</th><th class="r">Vol. Mercado</th><th class="r">Supera</th>
            <th class="r">Share</th><th class="r">Cresc. Mercado</th>${extraTh}
        </tr></thead><tbody>`;
        rows.forEach(m => {
            const gCls = (m.growth != null && m.growth >= 0) ? 'vpos' : 'vneg';
            const gTxt = m.growth != null ? ((m.growth >= 0 ? '+' : '') + fmtPct(m.growth)) : '—';
            const represTd = showRepres
                ? `<td class="r" style="color:var(--text-secondary)">${totalSuperaGlobal > 0 ? ((m.supera / totalSuperaGlobal) * 100).toFixed(2) + '%' : '—'}</td>`
                : '';
            t += `<tr>
                <td><strong>${m.market}</strong></td>
                <td class="r">${fmtValue(m.current)}</td>
                <td class="r vacc">${fmtValue(m.supera)}</td>
                <td class="r">${m.share.toFixed(1)}%</td>
                <td class="r ${gCls}">${gTxt}</td>
                ${represTd}
            </tr>`;
        });
        return t + '</tbody></table>';
    }

    let html = '';
    html += '<div class="panel-block">';
    html += '<h3 class="panel-h3">🎯 Oportunidades</h3>';
    html += `<p class="panel-sub">Mercados <strong>relevantes</strong> (volume ≥ mediana) onde a Supera tem <strong>share entre 10% e 49%</strong> e <strong>não é líder</strong>. Ordenados pelo maior gap absoluto até 50% de share.</p>`;
    html += buildOportTable(oport);
    html += `<p class="panel-sub" style="margin-top:10px;font-size:.72rem;color:var(--text-secondary)">
        <strong style="color:#065f46">Alta</strong>: share ≤ 20% &nbsp;|&nbsp;
        <strong style="color:#92400e">Média</strong>: share 21–35% &nbsp;|&nbsp;
        <strong style="color:#075985">Moderada</strong>: share 36–49%
    </p></div>`;

    html += '<div class="panel-block" style="margin-top:24px">';
    html += '<h3 class="panel-h3" style="color:var(--c-oport,#f59e0b)">⚠️ Acompanhar — Alerta</h3>';
    html += `<p class="panel-sub">Mercados com <strong>volume ≥ R$ 1 milhão</strong> onde o share da Supera está abaixo de <strong>${shareAlertaLimite.toFixed(1)}%</strong> (metade da média geral de ${avgShare.toFixed(1)}%). Alto volume, presença muito fraca — exigem decisão estratégica.</p>`;
    html += buildAcompTable(acompAlerta, false);
    html += '</div>';

    html += '<div class="panel-block" style="margin-top:24px">';
    html += '<h3 class="panel-h3" style="color:var(--text-secondary,#6b7280)">📋 Acompanhar — Rotina</h3>';
    html += `<p class="panel-sub">Mercados onde a venda Supera representa <strong>menos de 0,5%</strong> do total da equipe. A coluna <em>Represent.</em> mostra o peso real de cada mercado.</p>`;
    html += buildAcompTable(acompRotina.slice(0, 60), true);
    if (acompRotina.length > 60) html += `<p class="panel-sub" style="margin-top:6px;font-size:.72rem">... e mais ${acompRotina.length - 60} mercados.</p>`;
    html += '</div>';
    el.innerHTML = html;
}


function renderEntrar() {
    const el = $('tab-entrar'); if (!el) return;
    const pd = UI.periodMode;
    const mkts = aggMarkets(getFilteredRows(), pd);
    const entrar = [];
    mkts.forEach(m => m.recs['ENTRAR'].forEach(b => entrar.push({ market: m.market, brick: b })));
    entrar.sort((a, b) => b.brick.totalCur - a.brick.totalCur);

    let html = '<div class="panel-block"><h3 class="panel-h3">Entrar no Mercado</h3>';
    html += '<p class="panel-sub">Bricks em que a Supera hoje tem vendas zeradas mas o mercado existe.</p>';
    html += '<table class="modal-tbl"><thead><tr><th>Mercado</th><th>Brick</th><th>Setor</th><th class="r">Mercado ' + pd + ' Ant.</th><th class="r">Mercado ' + pd + ' Atual</th><th class="r">Maior concorrente</th></tr></thead><tbody>';
    if (!entrar.length) html += '<tr><td colspan="6" class="tbl-empty">Nenhum brick em "Entrar".</td></tr>';
    entrar.slice(0, 300).forEach(e => {
        html += `<tr>
            <td><strong>${e.market}</strong></td>
            <td><code class="brick-code-mono">${e.brick.brick}</code> <small>${e.brick.cidade || ''}</small></td>
            <td>${e.brick.sector || '—'}</td>
            <td class="r">${fmtValue(e.brick.totalPrev)}</td>
            <td class="r">${fmtValue(e.brick.totalCur)}</td>
            <td class="r">${fmtValue(e.brick.concMax)}</td>
        </tr>`;
    });
    html += '</tbody></table></div>';
    el.innerHTML = html;
}

function renderGraficos() {
    const el = $('tab-graficos'); if (!el) return;
    const pd = UI.periodMode;
    const mkts = aggMarkets(getFilteredRows(), pd).sort((a, b) => b.current - a.current);
    const top = mkts.slice(0, 15);
    const max = Math.max(...top.map(m => m.current), 1);

    let html = '<div class="charts-grid">';
    // Top mercados
    html += '<div class="chart-card"><div class="chart-card-title">Top 15 mercados (' + pd + ')</div>';
    top.forEach(m => {
        html += `<div class="bar-row">
            <div class="bar-label" title="${m.market}">${m.market}</div>
            <div class="bar-track"><div class="bar-fill" style="width:${(m.current / max * 100).toFixed(1)}%;background:var(--c-crescer)"></div></div>
            <div class="bar-val">${fmtValue(m.current)}</div>
        </div>`;
    });
    html += '</div>';

    // Share Supera por mercado (top 15 onde Supera tem presença)
    // v6.9 — Excluir produtos específicos solicitados pelo usuário
    const SHARE_EXCLUDE = ['BENZETACIL', 'PEN VE ORAL', 'PEN-VE ORAL', 'PENVE ORAL', 'VAGICAND', 'BIOFLAC', 'PHOSFOENEMA'];
    const isExcluded = (name) => {
        const up = String(name || '').toUpperCase();
        return SHARE_EXCLUDE.some(ex => up.includes(ex));
    };
    const withSupera = mkts
        .filter(m => m.supera > 0 && !isExcluded(m.market))
        .sort((a, b) => b.share - a.share)
        .slice(0, 15);
    html += '<div class="chart-card"><div class="chart-card-title">Maiores shares Supera (' + pd + ')</div>';
    withSupera.forEach(m => {
        html += `<div class="bar-row">
            <div class="bar-label" title="${m.market}">${m.market}</div>
            <div class="bar-track"><div class="bar-fill" style="width:${Math.min(m.share, 100).toFixed(1)}%;background:var(--c-lider)"></div></div>
            <div class="bar-val">${m.share.toFixed(1)}%</div>
        </div>`;
    });
    html += '</div>';

    // Resumo recomendações
    const recTotals = { 'LÍDER': 0, 'CRESCER': 0, 'OPORTUNIDADE': 0, 'ACOMPANHAR': 0, 'ENTRAR': 0 };
    mkts.forEach(m => Object.keys(recTotals).forEach(r => recTotals[r] += m.recs[r].length));
    html += '<div class="chart-card"><div class="chart-card-title">Bricks por recomendação</div><div class="rec-summary">';
    Object.entries(recTotals).forEach(([k, v]) => {
        html += `<div class="rec-sum-item"><div class="rec-sum-count" style="color:${recColorVar(k)}">${v}</div><div class="rec-sum-label">${k}</div></div>`;
    });
    html += '</div></div>';

    html += '</div>';
    el.innerHTML = html;
}

function median(arr) {
    if (!arr.length) return 0;
    const s = [...arr].sort((a, b) => a - b);
    const m = Math.floor(s.length / 2);
    return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

/* ════════════════════════════════════════════════════════════════
   v3.17 — MÓDULO PDVs por BRICK
   ────────────────────────────────────────────────────────────────
   Carrega planilhas do tipo "UNIDADESPORPDVS-DISTRITAL..." (e a
   futura versão em R$), agrega por CNPJ × Brick × Produto e
   permite consultar dados públicos de cada farmácia (BrasilAPI).
   ════════════════════════════════════════════════════════════════ */

const PDV = {
    viewMode: null,  // modo da aba PDV (null = usa UI.unitMode global)
    rowsByValueMode: { UN: [], RS: [] },  // todas as linhas brutas (uma por CNPJ × Marca × Brick)
    pdvsByValueMode: { UN: [], RS: [] },  // agregadas: 1 obj por CNPJ
    cnpjCache: {},                         // cache local de respostas BrasilAPI
    sortKey: 'mat_cur',
    sortDir: 'desc',
    filter: { brick: [], cidade: [], setor: [], marca: [], classe: 'all', search: '' }
};

/* ----- Helpers ----- */
const onlyDigits = s => String(s || '').replace(/\D/g, '');

function maskCNPJ(c) {
    const d = onlyDigits(c);
    if (d.length !== 14) return c;
    return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}/${d.slice(8, 12)}-${d.slice(12)}`;
}

function isValidCNPJ(c) {
    return onlyDigits(c).length === 14;
}

/* ----- LocalStorage de cache CNPJ ----- */
function loadCnpjCache() {
    try {
        const raw = localStorage.getItem('SUPERA_CNPJ_CACHE_v1');
        if (raw) PDV.cnpjCache = JSON.parse(raw) || {};
    } catch (e) { PDV.cnpjCache = {}; }
}

function saveCnpjCache() {
    try { localStorage.setItem('SUPERA_CNPJ_CACHE_v1', JSON.stringify(PDV.cnpjCache)); }
    catch (e) { /* ignore quota */ }
}

/* ----- Parser da planilha "UNIDADES POR PDVS" ----- */
/*
   Estrutura esperada (1 linha de header + dados):
   Setor | Marca | Brick | PDV | MAT(p.p) | MAT | Cresc.MAT |
   YTD(p.p.) | YTD | Cresc.YTD | TRI(p.y.) | TRI(p.p.) | TRI |
   Cresc.TRI(p.y.) | Cresc.TRI(p.p.)

   PDV = "CNPJ | RAZAO SOCIAL | BAIRRO - CIDADE / UF"
*/
async function parsePDVFile(file, forceUnit) {
    const setProgress = (msg) => {
        ['uploadProgress', 'pdvUploadProgress', 'pdvWorkerProgress'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = msg;
        });
    };

    setProgress('Lendo arquivo...');
    await new Promise(r => setTimeout(r, 0));

    const data = await file.arrayBuffer();

    const fname = (file.name || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    let unitMode = /reais?|r\$|\$|\bppp\b|valor/.test(fname) ? 'RS'
                 : /unidades?|\buni\b|\bun\b|dddunid/.test(fname) ? 'UN'
                 : forceUnit || null;

    // ── Abre o XLSX como ZIP e extrai XMLs ───────────────────────────────
    setProgress('Abrindo arquivo...');
    await new Promise(r => setTimeout(r, 0));

    let sheetXml, ssXml;
    try {
        const zip = await JSZip.loadAsync(data);
        const ssFile = zip.file('xl/sharedStrings.xml');
        ssXml = ssFile ? await ssFile.async('string') : '';
        const sheetKey = Object.keys(zip.files).find(k => /xl\/worksheets\/sheet\d+\.xml$/.test(k));
        if (!sheetKey) throw new Error('Sheet não encontrada.');
        setProgress('Descompactando...');
        await new Promise(r => setTimeout(r, 0));
        sheetXml = await zip.files[sheetKey].async('string');
    } catch (e) {
        console.warn('[PDV] JSZip falhou:', e.message);
        setProgress('Modo alternativo...');
        await new Promise(r => setTimeout(r, 100));
        const wb = XLSX.read(data, { type:'array', dense:true, raw:true, cellDates:false, cellNF:false, cellText:false });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const aoa = XLSX.utils.sheet_to_json(ws, { header:1, defval:'', raw:true });
        if (!aoa || !aoa.length) throw new Error('Planilha vazia.');
        return _parsePDVFromAoa(aoa, unitMode, forceUnit, file.name, setProgress);
    }

    // ── Parse SharedStrings (tabela de strings do Excel) ─────────────────
    setProgress('Carregando strings...');
    await new Promise(r => setTimeout(r, 0));

    const sharedStrings = [];
    const tRe = /<t(?:\s[^>]*)?>([^<]*)<\/t>/g;
    let tm;
    while ((tm = tRe.exec(ssXml)) !== null) {
        sharedStrings.push(tm[1]
            .replace(/&amp;/g,'&').replace(/&lt;/g,'<')
            .replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#xD;/g,''));
    }

    // ── Regex de célula — sem backtracking ────────────────────────────────
    const cellRe = /<c r="([A-Z]+)\d+"([^>]*)>(?:<v>([^<]*)<\/v>)?/g;

    const parseRow = (rowContent) => {
        const cells = {};
        cellRe.lastIndex = 0;
        let cm;
        while ((cm = cellRe.exec(rowContent)) !== null) {
            const col = cm[1], attrs = cm[2] || '', val = cm[3] || '';
            cells[col] = (attrs.indexOf('t="s"') >= 0 && val !== '')
                ? (sharedStrings[parseInt(val)] || '') : val;
        }
        return cells;
    };

    // ── SPLIT por <row  — NUNCA usa regex no XML de 45MB inteiro ─────────
    // split('<row ') parte o XML em fragmentos; cada fragmento começa com
    // os atributos da row (r="N" ...) e termina antes do próximo <row.
    setProgress('Indexando linhas...');
    await new Promise(r => setTimeout(r, 0));

    const rowParts = sheetXml.split('<row ');
    // rowParts[0] = cabeçalho XML (antes da 1ª row) — ignorar
    // rowParts[i] = 'r="N" ...>CÉLULAS</row>...'  para i >= 1

    // ── Detecta colunas no header (r="1") ────────────────────────────────
    let headerContent = '';
    for (let i = 1; i < rowParts.length; i++) {
        if (rowParts[i].startsWith('r="1"') || rowParts[i].startsWith("r='1'")) {
            const gt = rowParts[i].indexOf('>');
            const end = rowParts[i].indexOf('</row>');
            if (gt >= 0 && end > gt) { headerContent = rowParts[i].slice(gt + 1, end); break; }
        }
    }
    if (!headerContent) throw new Error('Linha de cabeçalho não encontrada.');

    const headerCells = parseRow(headerContent);
    const colMap = {};
    for (const [col, val] of Object.entries(headerCells)) {
        colMap[col] = String(val).toLowerCase().trim();
    }

    const colByName = (patterns) => {
        for (const [col, name] of Object.entries(colMap)) {
            if (patterns.some(p => p.test(name))) return col;
        }
        return null;
    };

    const cReg  = colByName([/^regional$/]);
    const cDst  = colByName([/^distrital$/]);
    const cSet  = colByName([/^setor$/, /setor/]);
    const cMrc  = colByName([/^marca$/, /marca/]);
    const cBrk  = colByName([/^brick$/, /brick/]);
    const cPdv  = colByName([/^pdv$/, /pdv/, /cnpj/]);
    const cMatA = colByName([/^mat$/]);
    const cMatP = colByName([/^mat\s*\(p\.?p\.?\)/]);
    const cYtdA = colByName([/^ytd$/]);
    const cYtdP = colByName([/^ytd\s*\(p\.?p\.?\)/]);
    const cTriA = colByName([/^tri$/]);
    const cTriP = colByName([/^tri\s*\(p\.?p\.?\)/]);
    const cTriY = colByName([/^tri\s*\(p\.?y\.?\)/]);

    if (!cPdv || !cBrk) {
        throw new Error('Colunas PDV/Brick não encontradas. Colunas: ' + Object.values(colMap).join(', '));
    }

    // ── Detecta R$/Un. por amostra ───────────────────────────────────────
    if (!unitMode) {
        let total = 0, decimals = 0;
        const numCols = [cMatA, cMatP, cYtdA, cYtdP, cTriA, cTriP].filter(Boolean);
        for (let i = 1; i < Math.min(202, rowParts.length); i++) {
            const gt = rowParts[i].indexOf('>');
            const end = rowParts[i].indexOf('</row>');
            if (gt < 0 || end <= gt) continue;
            const cells = parseRow(rowParts[i].slice(gt + 1, end));
            for (const col of numCols) {
                const v = parseFloat(cells[col] || 0);
                if (v && Math.abs(v) > 0.0001) { total++; if (Math.abs(v - Math.round(v)) > 0.001) decimals++; }
            }
        }
        unitMode = (total && decimals / total > 0.25) ? 'RS' : 'UN';
    }

    // ── Loop principal — processa cada parte com yield ────────────────────
    const rows = [];
    const CHUNK = 3000;
    const total = rowParts.length - 1;

    for (let i = 1; i < rowParts.length; i++) {
        // Yield a cada CHUNK para não travar a UI
        if ((i - 1) % CHUNK === 0) {
            setProgress('Processando... ' + (i - 1).toLocaleString('pt-BR') + ' / ' + total.toLocaleString('pt-BR'));
            await new Promise(r => setTimeout(r, 0));
        }

        // Extrai rowNum do atributo r="N"
        const rMatch = rowParts[i].match(/^r="(\d+)"/);
        if (!rMatch || parseInt(rMatch[1]) <= 1) continue;

        const gt = rowParts[i].indexOf('>');
        const end = rowParts[i].indexOf('</row>');
        if (gt < 0 || end <= gt) continue;

        const cells = parseRow(rowParts[i].slice(gt + 1, end));

        const pdvStr = (cells[cPdv] || '').trim();
        if (!pdvStr) continue;
        const parts = pdvStr.split('|').map(s => s.trim());
        const cnpjRaw = onlyDigits(parts[0] || '');
        if (cnpjRaw.length !== 14) continue;

        const razao = parts[1] || '';
        const local  = parts[2] || '';
        let bairro = '', cidade = '', uf = '';
        const lm = local.match(/^(.*?)\s*-\s*(.*?)\s*\/\s*([A-Z]{2})\s*$/);
        if (lm) { bairro = lm[1].trim(); cidade = lm[2].trim(); uf = lm[3].trim(); }

        const setor = cSet ? (cells[cSet] || '').trim() : '';
        const scm = setor.match(/(\d{4,6})/), setorCode = scm ? scm[1] : '';
        let distrital = cDst ? (cells[cDst] || '').trim() : '';
        if (!distrital && setorCode.length >= 4) distrital = setorCode.slice(0, 4) + '00';
        let regional = cReg ? (cells[cReg] || '').trim() : '';
        if (!regional && setorCode.length >= 3) regional = setorCode.slice(0, 3) + '000';

        const marca = cMrc ? (cells[cMrc] || '').trim() : '';
        const brick = cBrk ? (cells[cBrk] || '').trim() : '';
        const matA = parseNum(cMatA ? cells[cMatA] : 0);
        const matP = parseNum(cMatP ? cells[cMatP] : 0);
        const ytdA = parseNum(cYtdA ? cells[cYtdA] : 0);
        const ytdP = parseNum(cYtdP ? cells[cYtdP] : 0);
        const triA = parseNum(cTriA ? cells[cTriA] : 0);
        const triP = parseNum(cTriP ? cells[cTriP] : 0);
        const triY = parseNum(cTriY ? cells[cTriY] : 0);

        if (matA + matP + ytdA + ytdP + triA + triP === 0) continue;

        rows.push({
            cnpj: cnpjRaw, razao, bairro, cidade, uf,
            regional, distrital, setor, marca, brick,
            mat_cur: matA, mat_prev: matP,
            ytd_cur: ytdA, ytd_prev: ytdP,
            tri_cur: triA, tri_prev: triY, tri_qprev: triP,
            unitMode
        });
    }

    setProgress('');
    return { rows, unitMode };
}

/* Fallback AOA quando JSZip não disponível */
async function _parsePDVFromAoa(aoa, unitMode, forceUnit, fileName, setProgress) {
    const fname = (fileName||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    if (!unitMode) unitMode = /reais?|r\$|\$|\bppp\b|valor/.test(fname)?'RS':/unidades?|\buni\b|\bun\b|dddunid/.test(fname)?'UN':forceUnit||'UN';
    let headerIdx=0;
    for(let i=0;i<Math.min(5,aoa.length);i++){const row=aoa[i].map(c=>String(c||'').toLowerCase());if(row.some(c=>c.includes('pdv'))&&row.some(c=>c.includes('brick'))){headerIdx=i;break;}}
    const header=aoa[headerIdx].map(c=>String(c||'').toLowerCase().trim());
    const ix=(pats)=>header.findIndex(h=>pats.some(p=>p.test(h)));
    const iReg=ix([/^regional$/]),iDst=ix([/^distrital$/]),iSet=ix([/^setor$/,/setor/]);
    const iMrc=ix([/^marca$/,/marca/]),iBrk=ix([/^brick$/,/brick/]),iPdv=ix([/^pdv$/,/pdv/,/cnpj/]);
    const iMatA=header.findIndex(h=>/^mat$/i.test(h)),iMatP=header.findIndex(h=>/^mat\s*\(p\.?p\.?\)/i.test(h));
    const iYtdA=header.findIndex(h=>/^ytd$/i.test(h)),iYtdP=header.findIndex(h=>/^ytd\s*\(p\.?p\.?\)/i.test(h));
    const iTriA=header.findIndex(h=>/^tri$/i.test(h)),iTriP=header.findIndex(h=>/^tri\s*\(p\.?p\.?\)/i.test(h));
    const iTriY=header.findIndex(h=>/^tri\s*\(p\.?y\.?\)/i.test(h));
    if(iPdv<0||iBrk<0) throw new Error('Colunas PDV/Brick não encontradas.');
    const rows=[];const tot=aoa.length-headerIdx-1;
    for(let r=headerIdx+1;r<aoa.length;r++){
        if((r-headerIdx-1)%3000===0){setProgress('Processando... '+(r-headerIdx-1).toLocaleString('pt-BR')+' / '+tot.toLocaleString('pt-BR'));await new Promise(res=>setTimeout(res,0));}
        const row=aoa[r];if(!row||!row.length)continue;
        const pdvStr=String(row[iPdv]||'').trim();if(!pdvStr)continue;
        const parts=pdvStr.split('|').map(s=>s.trim());
        const cnpjRaw=onlyDigits(parts[0]||'');if(cnpjRaw.length!==14)continue;
        const razao=parts[1]||'',local=parts[2]||'';
        let bairro='',cidade='',uf='';
        const lm=local.match(/^(.*?)\s*-\s*(.*?)\s*\/\s*([A-Z]{2})\s*$/);
        if(lm){bairro=lm[1].trim();cidade=lm[2].trim();uf=lm[3].trim();}
        const setor=iSet>=0?String(row[iSet]||'').trim():'';
        const scm=setor.match(/(\d{4,6})/),setorCode=scm?scm[1]:'';
        let distrital=iDst>=0?String(row[iDst]||'').trim():'';if(!distrital&&setorCode.length>=4)distrital=setorCode.slice(0,4)+'00';
        let regional=iReg>=0?String(row[iReg]||'').trim():'';if(!regional&&setorCode.length>=3)regional=setorCode.slice(0,3)+'000';
        const marca=String(row[iMrc]||'').trim(),brick=String(row[iBrk]||'').trim();
        const matA=iMatA>=0?parseNum(row[iMatA]):0,matP=iMatP>=0?parseNum(row[iMatP]):0;
        const ytdA=iYtdA>=0?parseNum(row[iYtdA]):0,ytdP=iYtdP>=0?parseNum(row[iYtdP]):0;
        const triA=iTriA>=0?parseNum(row[iTriA]):0,triP=iTriP>=0?parseNum(row[iTriP]):0;
        const triY=iTriY>=0?parseNum(row[iTriY]):0;
        if(matA+matP+ytdA+ytdP+triA+triP===0)continue;
        rows.push({cnpj:cnpjRaw,razao,bairro,cidade,uf,regional,distrital,setor,marca,brick,
            mat_cur:matA,mat_prev:matP,ytd_cur:ytdA,ytd_prev:ytdP,
            tri_cur:triA,tri_prev:triY,tri_qprev:triP,unitMode});
    }
    setProgress('');
    return {rows,unitMode};
}


/* Agrega rows brutas em 1 entrada por CNPJ — com lista de produtos por dentro */
function aggregatePDVs(rows) {
    const map = new Map();
    rows.forEach(r => {
        let p = map.get(r.cnpj);
        if (!p) {
            p = {
                cnpj: r.cnpj, razao: r.razao, bairro: r.bairro,
                cidade: r.cidade, uf: r.uf,
                bricks: new Set(), setores: new Set(), marcas: new Set(),
                regionais: new Set(), distritais: new Set(),
                mat_cur: 0, mat_prev: 0, ytd_cur: 0, ytd_prev: 0,
                tri_cur: 0, tri_prev: 0, tri_qprev: 0,
                products: []
            };
            map.set(r.cnpj, p);
        }
        if (r.brick) p.bricks.add(r.brick);
        if (r.setor) p.setores.add(r.setor);
        if (r.marca) p.marcas.add(r.marca);
        if (r.regional) p.regionais.add(r.regional);
        if (r.distrital) p.distritais.add(r.distrital);
        p.mat_cur += r.mat_cur; p.mat_prev += r.mat_prev;
        p.ytd_cur += r.ytd_cur; p.ytd_prev += r.ytd_prev;
        p.tri_cur += r.tri_cur; p.tri_prev += r.tri_prev; p.tri_qprev += (r.tri_qprev || 0);
        p.products.push({
            marca: r.marca, brick: r.brick, setor: r.setor,
            regional: r.regional, distrital: r.distrital,
            mat_cur: r.mat_cur, mat_prev: r.mat_prev,
            ytd_cur: r.ytd_cur, ytd_prev: r.ytd_prev,
            tri_cur: r.tri_cur, tri_prev: r.tri_prev
        });
    });
    return [...map.values()].map(p => ({
        ...p,
        bricks: [...p.bricks].sort(),
        setores: [...p.setores].sort(),
        marcas: [...p.marcas].sort(),
        regionais: [...p.regionais].sort(),
        distritais: [...p.distritais].sort()
    }));
}

/* =================================================================
   CLASSIFICACAO AA / A / B / C  (100% volume MAT por setor)
   -----------------------------------------------------------------
   Score = percentil de volume MAT da farmacia dentro do seu setor
   dominante (setor onde ela tem maior venda).
   Cortes: AA >= 90 | A >= 70 | B >= 40 | C < 40
   ================================================================= */
function classificarPDVs(pdvs) {
    if (!pdvs || !pdvs.length) return pdvs;

    /* Setor dominante: aquele onde a farmacia tem maior venda MAT */
    var setorDominante = function (p) {
        if (!p.setores || !p.setores.length) return '__geral__';
        if (p.setores.length === 1) return p.setores[0];
        var acc = new Map();
        (p.products || []).forEach(function (pr) {
            var s = pr.setor || p.setores[0];
            acc.set(s, (acc.get(s) || 0) + (pr.mat_cur || 0));
        });
        var best = p.setores[0], bestVal = -1;
        acc.forEach(function (v, s) { if (v > bestVal) { bestVal = v; best = s; } });
        return best;
    };

    /* Agrupa por setor dominante */
    var porSetor = new Map();
    pdvs.forEach(function (p) {
        var setor = setorDominante(p);
        p._setorClassif = setor;
        if (!porSetor.has(setor)) porSetor.set(setor, []);
        porSetor.get(setor).push(p);
    });

    /* Percentil: quantas farmácias do setor vendem MENOS que esta */
    var percentila = function (arr, val) {
        if (!arr.length) return 0;
        return (arr.filter(function (v) { return v < val; }).length / arr.length) * 100;
    };

    /* Classifica cada setor */
    porSetor.forEach(function (lista) {
        var volumes = lista.map(function (p) { return p.mat_cur || 0; }).sort(function (a, b) { return a - b; });
        lista.forEach(function (p) {
            var score = percentila(volumes, p.mat_cur || 0);
            p.percVolume = Math.round(score);
            p.percPotencial = null;
            p.scoreClasse = Math.round(score);
            p.potencialMkt = null;
            p._potMatchDB = false;
            if (score >= 90) p.classe = 'AA';
            else if (score >= 70) p.classe = 'A';
            else if (score >= 40) p.classe = 'B';
            else p.classe = 'C';
        });
    });

    return pdvs;
}


/* ----- Persist em localStorage (PDV) -----
   v6.11 — Conforme decisão do usuário, não persistimos PDVs caso ultrapassem
   a quota de localStorage (~5MB). Os dados de R$/Un. da análise principal
   continuam persistindo em IndexedDB (DBPersist) sem limite de tamanho.
   Quando a quota é excedida, mostramos um aviso amigável ao usuário. */
let _pdvQuotaWarned = false;
function savePDVData() {
    // Planilhas de PDV com >10k linhas são muito grandes para localStorage (~33MB vs limite 5MB).
    // Não tentamos salvar para evitar travar o browser. O usuário recarrega ao reabrir.
    const totalRows = (PDV.rowsByValueMode.UN || []).length + (PDV.rowsByValueMode.RS || []).length;
    if (totalRows > 10000) {
        console.info('[PDV] Base grande (' + totalRows + ' linhas) — não persiste em localStorage.');
        try { localStorage.removeItem('SUPERA_PDV_DATA_v1'); } catch (_) { }
        return;
    }
    try {
        const data = JSON.stringify({ UN: PDV.rowsByValueMode.UN, RS: PDV.rowsByValueMode.RS });
        localStorage.setItem('SUPERA_PDV_DATA_v1', data);
    } catch (e) {
        try { localStorage.removeItem('SUPERA_PDV_DATA_v1'); } catch (_) { }
        console.warn('[PDV] Quota localStorage excedida.');
    }
}

function loadPDVData() {
    try {
        const raw = localStorage.getItem('SUPERA_PDV_DATA_v1');
        if (raw) {
            const obj = JSON.parse(raw);
            PDV.rowsByValueMode.UN = obj.UN || [];
            PDV.rowsByValueMode.RS = obj.RS || [];
            PDV.pdvsByValueMode.UN = classificarPDVs(aggregatePDVs(PDV.rowsByValueMode.UN));
            PDV.pdvsByValueMode.RS = classificarPDVs(aggregatePDVs(PDV.rowsByValueMode.RS));
        }
    } catch (e) { /* ignore */ }
}

/* ----- Upload da planilha PDV ----- */
async function handlePDVUpload(files, opts) {
    const forceUnit = (opts && opts.forceUnit) || null;
    let countOk = 0, errors = [];
    // Mostra banner de loading enquanto o Worker processa
    const _showPDVLoading = (fname) => {
        const pdvTab = document.getElementById('tab-pdv');
        if (pdvTab) {
            pdvTab.innerHTML = `
                <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:320px;gap:18px;">
                    <div style="font-size:2.5rem;animation:spin 1.2s linear infinite">⚙️</div>
                    <div style="font-size:1.1rem;font-weight:700;color:#1d4ed8">Processando ${fname}</div>
                    <div id="pdvWorkerProgress" style="font-size:0.92rem;color:#475569;min-height:1.4em">Iniciando...</div>
                    <div style="font-size:0.82rem;color:#94a3b8">Arquivo grande — aguarde, pode levar alguns segundos</div>
                </div>`;
        }
    };

    for (const f of files) {
        try {
            _showPDVLoading(f.name);
            const { rows, unitMode } = await parsePDVFile(f, forceUnit);
            // Substitui (não acumula) o conjunto correspondente — comportamento mais previsível.
            PDV.rowsByValueMode[unitMode] = rows;
            PDV.pdvsByValueMode[unitMode] = classificarPDVs(aggregatePDVs(rows));
            countOk++;
        } catch (e) {
            console.error('[PDV] Erro parse:', e);
            errors.push(f.name + ': ' + e.message);
        }
    }
    savePDVData();
    if (countOk) {
        // Determina qual modo foi carregado agora
        const lastMode = (PDV.rowsByValueMode.UN.length > 0 && PDV.rowsByValueMode.RS.length > 0)
            ? UI.unitMode
            : (PDV.rowsByValueMode.RS.length ? 'RS' : 'UN');
        const tot = PDV.pdvsByValueMode[lastMode].length;
        toast(`${tot} PDV(s) carregados em ${lastMode === 'RS' ? 'R$' : 'Unidades'}.`);

        // Garante que a aba PDV mostre o modo recém-carregado.
        // A aba PDV tem modo próprio (PDV.viewMode) independente do modo global da análise.
        PDV.viewMode = lastMode;
    }
    if (errors.length) toast('Erros: ' + errors.join(' | '));
    if (typeof updateDatasetStatus === 'function') updateDatasetStatus();
    renderPDV();
}

function clearPDVData() {
    PDV.rowsByValueMode = { UN: [], RS: [] };
    PDV.pdvsByValueMode = { UN: [], RS: [] };
    try { localStorage.removeItem('SUPERA_PDV_DATA_v1'); } catch (e) { }
    PDV.filter = { brick: [], cidade: [], setor: [], marca: [], classe: 'all', search: '', distrital: 'all' };
    PDV.viewMode = null; // null = usa UI.unitMode global
    toast('Base de PDVs limpa.');
    renderPDV();
}

/* ----- RENDER PRINCIPAL DA ABA ----- */
function renderPDV() {
    const el = $('tab-pdv');
    if (!el) return;
    el.classList.add('pdv-view');

    // PDV.viewMode é definido ao carregar uma planilha de PDV.
    // Permite que a aba PDV mostre UN mesmo quando a análise principal está em R$, e vice-versa.
    const mode = PDV.viewMode || UI.unitMode;
    const pdvs = PDV.pdvsByValueMode[mode] || [];
    const otherMode = mode === 'UN' ? 'RS' : 'UN';
    const hasOther = (PDV.pdvsByValueMode[otherMode] || []).length > 0;

    if (!pdvs.length) {
        const otherLabel = otherMode === 'RS' ? 'R$' : 'Unidades';
        const switchBtnLabel = otherMode === 'RS' ? '$ R$' : '# Un.';
        const switchBtnId = 'btn' + otherMode;
        el.innerHTML = `
            ${hasOther ? `
                <div class="pdv-switch-banner">
                    <span class="pdv-switch-icon">ℹ️</span>
                    <span class="pdv-switch-msg">
                        Você já carregou a planilha de PDVs em <b>${otherLabel}</b>.
                    </span>
                    <button class="pdv-switch-btn" data-target="${switchBtnId}">Visualizar em ${switchBtnLabel} →</button>
                </div>` : ''}
            <div class="pdv-empty-state">
                <div class="pdv-empty-icon">🏥</div>
                <h2>Cadastro de farmácias por Brick — ${mode === 'RS' ? 'R$' : 'Unidades'}</h2>
                <p>
                    Carregue a planilha <strong>UNIDADES POR PDVS em ${mode === 'RS' ? 'R$' : 'Unidades'}</strong>
                    (extraída do IQVIA – SUPERA MDTR – GR) para ativar a consulta detalhada das farmácias por CNPJ.
                    Após o carregamento, a busca rápida no cabeçalho e o pop-up com endereço, telefone, razão social
                    e vendas ficarão disponíveis.
                </p>
                <input type="file" id="pdvFileInput" accept=".xlsx,.xls,.csv" hidden multiple>
                <button class="pdv-empty-btn" id="pdvEmptyBtn">📁 Carregar planilha em ${mode === 'RS' ? 'R$' : 'Unidades'}</button>
            </div>`;
        /* Botão do banner para alternar para o outro modo */
        const swBtn = el.querySelector('.pdv-switch-btn');
        if (swBtn) swBtn.onclick = () => {
            const target = swBtn.dataset.target;
            const targetEl = document.getElementById(target);
            if (targetEl) targetEl.click();
        };
        const inp = $('pdvFileInput');
        const btn = $('pdvEmptyBtn');
        if (btn && inp) {
            btn.onclick = () => inp.click();
            inp.onchange = e => { if (e.target.files.length) handlePDVUpload(e.target.files, { forceUnit: window._unitForced || null }); e.target.value = ''; };
        }
        return;
    }

    // Toolbar + filtros
    const totalUN = (PDV.pdvsByValueMode.UN || []).length;
    const totalRS = (PDV.pdvsByValueMode.RS || []).length;
    const periodLblHeader = (typeof UI !== 'undefined' && UI.periodMode) ? UI.periodMode : 'MAT';
    /* v6.0 — detecta antecipadamente as marcas filtradas para mostrar no badge da toolbar */
    const _gMkt = (typeof UI !== 'undefined' && UI.market && UI.market !== 'all') ? UI.market : null;
    const _localMkts = (PDV.filter && PDV.filter.marca && PDV.filter.marca.length) ? PDV.filter.marca : null;
    const _activeBrandHdr = _localMkts ? (_localMkts.length === 1 ? _localMkts[0] : `${_localMkts.length} marcas`) : _gMkt;

    // ── Filtros globais do header (distrital / setor / regional) ──────────────
    // Aplicados PRIMEIRO sobre o universo completo de PDVs do modo atual.
    // Isso garante que os dropdowns e o contador reflitam apenas o recorte ativo.
    const f = PDV.filter;
    const gSector = (typeof UI !== 'undefined' && UI.sector && UI.sector !== 'all') ? UI.sector : null;
    const gMarket = (typeof UI !== 'undefined' && UI.market && UI.market !== 'all') ? UI.market : null;
    const gDistrital = (typeof UI !== 'undefined' && UI.distrital && UI.distrital !== 'all') ? UI.distrital : null;
    const gRegional = (typeof UI !== 'undefined' && UI.regional && UI.regional !== 'all') ? UI.regional : null;
    // Helpers para casar nomes (planilha PDV usa código numérico; consolidada pode usar "101100 - NOME")
    // Extrai o código numérico de uma string e o normaliza para 6 dígitos
    const extractCode = (s) => {
        const m = String(s || '').match(/(\d{4,6})/);
        return m ? m[1].padEnd(6, '0').slice(0, 6) : '';
    };
    const matchSector = (sectArr, target) => {
        if (!target) return true;
        const t = String(target).toUpperCase().trim();
        const tCode = extractCode(t);
        return sectArr.some(s => {
            const u = String(s).toUpperCase().trim();
            const uCode = extractCode(u);
            // Compara primeiro pelo código numérico (mais confiável)
            if (tCode && uCode && tCode === uCode) return true;
            // Fallback: compara pela string completa
            return u === t || u.includes(t) || t.includes(u);
        });
    };
    const matchMarket = (marcArr, target) => {
        if (!target) return true;
        const t = String(target).toUpperCase().trim();
        return marcArr.some(m => {
            const u = String(m).toUpperCase().trim();
            const uBase = u.replace(/\s*\(.*?\)\s*$/, '').trim();
            const tBase = t.replace(/\s*\(.*?\)\s*$/, '').trim();
            return u === t || uBase === tBase;
        });
    };

    // Pré-filtragem pelos filtros do header (distrital/setor/regional/mercado)
    const pdvsGlobal = pdvs.filter(p => {
        if (gDistrital && !matchSector(p.distritais, gDistrital)) return false;
        if (gRegional && !matchSector(p.regionais, gRegional)) return false;
        if (gSector && !matchSector(p.setores, gSector)) return false;
        if (gMarket && !matchMarket(p.marcas, gMarket)) return false;
        return true;
    });
    // Coleta distritais disponíveis (para seletor local da aba PDV)
    const distritalSet = new Set();
    pdvsGlobal.forEach(p => { if (p.distritais) p.distritais.forEach(d => { if (d) distritalSet.add(d); }); });
    const distritalArr = [...distritalSet].sort();

    // Filtro LOCAL de Distrital (filterbar da aba PDV - independente do header global)
    const localDistrital = f.distrital && f.distrital !== 'all' ? f.distrital : null;
    const pdvsAfterDist = localDistrital
        ? pdvsGlobal.filter(p => p.distritais && matchSector([...p.distritais], localDistrital))
        : pdvsGlobal;

    const totalPdvs = pdvsAfterDist.length;

    // Coleta opções de filtro local a partir do universo recortado (distrital + header)
    const bricksSet = new Set(), citySet = new Set(), secSet = new Set(), marcaSet = new Set();
    pdvsAfterDist.forEach(p => {
        p.bricks.forEach(b => bricksSet.add(b));
        if (p.cidade) citySet.add(p.cidade);
        p.setores.forEach(s => secSet.add(s));
        p.marcas.forEach(m => marcaSet.add(m));
    });
    const optList = (s, all) => {
        const arr = [...s].sort();
        return `<option value="all">${all}</option>` + arr.map(v => `<option value="${escapeHTML(v)}">${escapeHTML(v)}</option>`).join('');
    };

    // ── Helper: monta opções com estado multi-select ──────────────────────────
    // f.brick, f.cidade, f.setor, f.marca são arrays; [] = tudo selecionado
    const isAll = (arr) => !arr || !arr.length;
    const isSelected = (arr, v) => isAll(arr) || arr.includes(v);
    const labelFor = (key) => {
        const arr = f[key] || [];
        if (isAll(arr)) return { txt: key === 'brick' ? 'Todos os Bricks' : key === 'cidade' ? 'Todas as Cidades' : key === 'setor' ? 'Todos os Setores' : 'Todas as Marcas', active: false };
        if (arr.length === 1) return { txt: arr[0].length > 22 ? arr[0].slice(0, 22) + '…' : arr[0], active: true };
        return { txt: `${arr.length} selecionados`, active: true };
    };
    const buildMultiOpts = (set, key) => {
        const arr = [...set].sort();
        const cur = f[key] || [];
        return arr.map(v => {
            const checked = isAll(cur) || cur.includes(v);
            return `<label class="pdv-ms-item${checked ? ' checked' : ''}"><input type="checkbox" value="${escapeHTML(v)}"${checked ? ' checked' : ''}><span>${escapeHTML(v)}</span></label>`;
        }).join('');
    };

    const mkDropdown = (id, key, set, allLabel) => {
        const lbl = labelFor(key);
        return `
        <div class="pdv-ms-wrap" id="${id}Wrap">
            <button class="pdv-ms-btn${lbl.active ? ' pdv-ms-active' : ''}" id="${id}Btn" type="button">
                <span class="pdv-ms-lbl">${escapeHTML(lbl.txt)}</span>
                <span class="pdv-ms-arrow">▾</span>
            </button>
            <div class="pdv-ms-panel" id="${id}Panel" style="display:none">
                <div class="pdv-ms-search-wrap"><input class="pdv-ms-search" placeholder="🔍 Buscar..." autocomplete="off"></div>
                <label class="pdv-ms-item pdv-ms-all"><input type="checkbox" value="__all__"${isAll(f[key]) ? ' checked' : ''}><span>${allLabel}</span></label>
                <div class="pdv-ms-list">${buildMultiOpts(set, key)}</div>
                ${lbl.active ? `<button class="pdv-ms-clear" data-key="${key}">✕ Limpar seleção</button>` : ''}
            </div>
        </div>`;
    };

    // Monta opções de Distrital para o select local
    const distritalOpts = distritalArr.map(d => {
        const namePart = d.replace(/^\d+\s*-?\s*/, '').trim();
        const lbl = namePart || d;
        return `<option value="${d}" ${f.distrital === d ? 'selected' : ''}>${lbl}</option>`;
    }).join('');

    let html = `
        <div class="pdv-filterbar">
            ${distritalArr.length > 1 ? `
            <label class="pdv-dist-label">Distrital</label>
            <div class="pdv-dist-wrap">
                <select id="pdvFilterDistrital" class="pdv-dist-select${localDistrital ? ' pdv-dist-active' : ''}">
                    <option value="all"${!localDistrital ? ' selected' : ''}>🌐 Todas</option>
                    ${distritalOpts}
                </select>
                ${localDistrital ? `<button class="pdv-dist-clear" id="pdvDistClear" title="Ver todas as distritais">✕</button>` : ''}
            </div>` : ''}
            <label>Brick</label>${mkDropdown('pdvFilterBrick', 'brick', bricksSet, 'Todos os Bricks')}
            <label>Cidade</label>${mkDropdown('pdvFilterCidade', 'cidade', citySet, 'Todas as Cidades')}
            <label>Setor</label>${mkDropdown('pdvFilterSetor', 'setor', secSet, 'Todos os Setores')}
            <label>Marca</label>${mkDropdown('pdvFilterMarca', 'marca', marcaSet, 'Todas as Marcas')}
            <label>Classe</label>
            <select id="pdvFilterClasse">
                <option value="all"${!f.classe || f.classe === 'all' ? ' selected' : ''}>Todas as Classes</option>
                <option value="AA"${f.classe === 'AA' ? ' selected' : ''}>AA — Estratégica</option>
                <option value="A"${f.classe === 'A' ? ' selected' : ''}>A — Prioritária</option>
                <option value="B"${f.classe === 'B' ? ' selected' : ''}>B — Desenvolvimento</option>
                <option value="C"${f.classe === 'C' ? ' selected' : ''}>C — Monitoramento</option>
            </select>
            <input type="text" id="pdvFilterSearch" placeholder="🔍 Buscar CNPJ, razão social..." value="${escapeHTML(PDV.filter.search)}">
            <span class="pdv-fb-count" id="pdvCount"></span>
        </div>`;

    // Banner DEPOIS da filterbar — inclui badges de contexto para filtros do header ativos
    const localDistName = localDistrital ? (localDistrital.replace(/^\d+\s*-?\s*/, '').trim() || localDistrital) : null;
    const _ctxBadges = [
        localDistrital ? `<span class="pdv-ctx-badge pdv-ctx-dist-local" title="Filtro de Distrital (aba PDV)">🏢 ${escapeHTML(localDistName)}</span>` : '',
        gDistrital ? `<span class="pdv-ctx-badge pdv-ctx-dist" title="Filtro de Distrital ativo">📍 ${escapeHTML(gDistrital)}</span>` : '',
        gSector ? `<span class="pdv-ctx-badge pdv-ctx-setor" title="Filtro de Setor ativo">🏢 ${escapeHTML(gSector)}</span>` : '',
        gRegional ? `<span class="pdv-ctx-badge pdv-ctx-reg" title="Filtro de Regional ativo">🌐 ${escapeHTML(gRegional)}</span>` : '',
    ].filter(Boolean).join('');
    html += `
        <div class="pdv-toolbar">
            <h3>🏥 PDVs por Brick <span class="pdv-period-badge">${periodLblHeader}</span>${_ctxBadges}${_activeBrandHdr ? `<span class="pdv-brand-badge" title="A tabela exibe apenas as vendas da marca selecionada">Marca: ${escapeHTML(_activeBrandHdr)}</span>` : ''}</h3>
            <div class="pdv-tb-info">
                Visualizando <b>${totalPdvs}</b> farmácia(s) em <b>${mode === 'RS' ? 'R$' : 'Unidades'}</b>
                · Período: <b>${periodLblHeader}</b>
                ${localDistrital ? `<br><span style="color:#0369a1;font-weight:600">🏢 Distrital: ${escapeHTML(localDistName)}</span>` : ''}
                ${(gDistrital || gSector || gRegional) ? `<br><span style="color:#1d4ed8;font-weight:600">⚑ Dados filtrados pelo recorte do header</span>` : ''}
                ${_activeBrandHdr ? `<br><span style="color:#0a4ea3;font-weight:600">⚠ Valores exibidos são apenas da marca <b>${escapeHTML(_activeBrandHdr)}</b> (não o total do PDV)</span>` : ''}
            </div>
            <input type="file" id="pdvFileInput" accept=".xlsx,.xls,.csv" hidden multiple>
            <button class="pdv-upload-btn" id="pdvUploadBtn">📁 Carregar/Trocar planilha</button>
            <span class="pdv-upload-progress" id="pdvUploadProgress" style="font-size:11px;color:#0369a1;font-weight:600;margin-left:8px;"></span>
            <button class="pdv-clear-btn" id="pdvClearBtn">🗑 Limpar PDVs</button>
            <button class="pdv-export-btn" id="pdvExportBtn" onclick="exportPDVXLSX()" title="Exportar PDVs filtrados para Excel">⬇ Excel</button>
        </div>`;

    // ── Filtros locais da aba PDV (brick / cidade / setor / marca / busca) ──────
    // activeBrands: array de marcas selecionadas (vazio = todas)
    // Quando há marcas selecionadas, reprojecta volumes somando só essas marcas.
    const activeBrands = (f.marca && f.marca.length) ? f.marca : (gMarket ? [gMarket] : []);
    const matchProductBrand = (prodMarca, brandsArr) => {
        if (!brandsArr || !brandsArr.length) return true;
        const a = String(prodMarca || '').toUpperCase().trim();
        const aBase = a.replace(/\s*\(.*?\)\s*$/, '').trim();
        return brandsArr.some(target => {
            const t = String(target).toUpperCase().trim();
            const tBase = t.replace(/\s*\(.*?\)\s*$/, '').trim();
            return a === t || aBase === tBase;
        });
    };
    /* Reprojecta volumes de um PDV somando apenas as marcas do array */
    const projectByBrands = (p, brandsArr) => {
        const items = (p.products || []).filter(pr => matchProductBrand(pr.marca, brandsArr));
        if (!items.length) return null;
        const acc = { ...p, mat_cur: 0, mat_prev: 0, ytd_cur: 0, ytd_prev: 0, tri_cur: 0, tri_prev: 0, _brandView: brandsArr.join(', '), _brandBricks: new Set() };
        items.forEach(it => {
            acc.mat_cur += +it.mat_cur || 0; acc.mat_prev += +it.mat_prev || 0;
            acc.ytd_cur += +it.ytd_cur || 0; acc.ytd_prev += +it.ytd_prev || 0;
            acc.tri_cur += +it.tri_cur || 0; acc.tri_prev += +it.tri_prev || 0;
            if (it.brick) acc._brandBricks.add(it.brick);
        });
        acc.bricks = [...acc._brandBricks].sort();
        return acc;
    };
    // Mantém compatibilidade com chamadas que ainda passam string única
    const projectByBrand = (p, brand) => projectByBrands(p, [brand]);

    /* Reprojecta volumes de um PDV somando apenas os produtos do setor/distrital ativo.
       Necessário porque aggregatePDVs soma TODOS os setores de um PDV;
       quando filtramos por distrital/setor, os volumes devem refletir apenas
       os produtos pertencentes àquele recorte. */
    const matchProductSector = (prodSetor) => {
        if (!gSector && !gDistrital && !localDistrital) return true;
        const u = String(prodSetor || '').toUpperCase().trim();
        const uCode = extractCode(u);
        if (gSector) {
            const t = String(gSector).toUpperCase().trim();
            const tCode = extractCode(t);
            return (tCode && uCode && tCode === uCode) || u === t || u.includes(t) || t.includes(u);
        }
        const activeDist = gDistrital || localDistrital;
        if (activeDist) {
            const distCode = extractCode(String(activeDist)).slice(0, 4);
            return distCode && uCode && uCode.slice(0, 4) === distCode;
        }
        return true;
    };
    const projectBySector = (p) => {
        const items = (p.products || []).filter(pr => matchProductSector(pr.setor));
        if (!items.length) return null;
        const acc = { ...p, mat_cur: 0, mat_prev: 0, ytd_cur: 0, ytd_prev: 0, tri_cur: 0, tri_prev: 0 };
        const brickSet = new Set();
        items.forEach(it => {
            acc.mat_cur += +it.mat_cur || 0; acc.mat_prev += +it.mat_prev || 0;
            acc.ytd_cur += +it.ytd_cur || 0; acc.ytd_prev += +it.ytd_prev || 0;
            acc.tri_cur += +it.tri_cur || 0; acc.tri_prev += +it.tri_prev || 0;
            if (it.brick) brickSet.add(it.brick);
        });
        acc.bricks = [...brickSet].sort();
        return acc;
    };

    let filtered = pdvsAfterDist.filter(p => {
        if (f.brick && f.brick.length && !f.brick.some(v => p.bricks.includes(v))) return false;
        if (f.cidade && f.cidade.length && !f.cidade.includes(p.cidade)) return false;
        if (f.setor && f.setor.length && !f.setor.some(v => p.setores.includes(v))) return false;
        if (f.marca && f.marca.length && !f.marca.some(v => p.marcas.includes(v))) return false;
        if (f.classe && f.classe !== 'all' && p.classe !== f.classe) return false;
        if (f.search) {
            const blob = norm([p.cnpj, p.razao, p.cidade, p.bairro, p.bricks.join(' '), p.uf].join(' '));
            if (!blob.includes(norm(f.search))) return false;
        }
        return true;
    });

    /* Reprojecta volumes pelo setor/distrital ativo (antes do filtro de marca,
       para que a projeção de setor já esteja incorporada nos totais) */
    if (gSector || gDistrital || localDistrital) {
        filtered = filtered
            .map(p => projectBySector(p))
            .filter(p => p && (p.mat_cur || p.mat_prev || p.ytd_cur || p.ytd_prev || p.tri_cur || p.tri_prev));
    }

    /* v6.0 — substitui cada PDV pela projeção das marcas selecionadas */
    if (activeBrands.length) {
        filtered = filtered
            .map(p => projectByBrands(p, activeBrands))
            .filter(p => p && (p.mat_cur || p.mat_prev || p.ytd_cur || p.ytd_prev || p.tri_cur || p.tri_prev));
    }

    // Ordenação (suporta crescimento mat_g/ytd_g/tri_g e GAP mat_gap/ytd_gap/tri_gap calculados on the fly)
    const dir = PDV.sortDir === 'asc' ? 1 : -1;
    const k = PDV.sortKey;
    const calcG = (p, prefix) => {
        const cur = p[prefix + '_cur'] || 0, prev = p[prefix + '_prev'] || 0;
        return prev > 0 ? (cur - prev) / prev : -Infinity;
    };
    // v6.11 — GAP absoluto = atual − anterior
    const calcGap = (p, prefix) => (p[prefix + '_cur'] || 0) - (p[prefix + '_prev'] || 0);
    filtered.sort((a, b) => {
        let av, bv;
        if (k === 'razao' || k === 'cidade' || k === 'cnpj') {
            return String(a[k] || '').localeCompare(String(b[k] || '')) * dir;
        }
        if (k === 'bricks') { av = a.bricks.length; bv = b.bricks.length; }
        else if (k === 'mat_g') { av = calcG(a, 'mat'); bv = calcG(b, 'mat'); }
        else if (k === 'ytd_g') { av = calcG(a, 'ytd'); bv = calcG(b, 'ytd'); }
        else if (k === 'tri_g') { av = calcG(a, 'tri'); bv = calcG(b, 'tri'); }
        else if (k === 'mat_gap') { av = calcGap(a, 'mat'); bv = calcGap(b, 'mat'); }
        else if (k === 'ytd_gap') { av = calcGap(a, 'ytd'); bv = calcGap(b, 'ytd'); }
        else if (k === 'tri_gap') { av = calcGap(a, 'tri'); bv = calcGap(b, 'tri'); }
        else { av = a[k]; bv = b[k]; }
        return ((av || 0) - (bv || 0)) * dir;
    });

    // Cabeçalho da tabela
    const sh = (key, label, cls, hint) => {
        const sorted = PDV.sortKey === key;
        const arrow = sorted ? (PDV.sortDir === 'desc' ? '▼' : '▲') : '↕';
        return `<th class="${cls || ''} ${sorted ? 'sorted' : ''}" data-sort="${key}" ${hint ? 'title="' + hint + '"' : ''}>${label}<span class="sort-arrow">${arrow}</span></th>`;
    };

    // v5: período ativo do header (TRI/YTD/MAT) define a coluna "Atual" e "Anterior" em destaque
    const pd = (typeof UI !== 'undefined' && UI.periodMode) ? UI.periodMode : 'MAT';
    const periodLbl = pd === 'TRI' ? 'TRI' : pd === 'YTD' ? 'YTD' : 'MAT';
    const keyAnt = pd.toLowerCase() + '_prev';
    const keyCur = pd.toLowerCase() + '_cur';

    // Monta a ordem de exibição dos períodos: ativo primeiro, depois os outros
    const periodOrder = pd === 'MAT' ? ['MAT', 'YTD', 'TRI']
        : pd === 'YTD' ? ['YTD', 'MAT', 'TRI']
            : ['TRI', 'MAT', 'YTD'];

    const thDefs = {
        MAT: [
            sh('mat_prev', 'MAT Ano Ant.', 'r', 'MAT do mesmo período do ano anterior'),
            sh('mat_cur', 'MAT', 'r', 'MAT atual (últimos 12 meses)'),
            sh('mat_gap', 'GAP MAT', 'r', 'Diferença absoluta MAT (atual − anterior)'),
            sh('mat_g', 'Cresc. MAT', 'r mark', 'Crescimento MAT vs ano anterior'),
        ],
        YTD: [
            sh('ytd_prev', 'YTD Ano Ant.', 'r', 'YTD do mesmo período do ano anterior'),
            sh('ytd_cur', 'YTD', 'r', 'YTD atual (acumulado do ano)'),
            sh('ytd_gap', 'GAP YTD', 'r', 'Diferença absoluta YTD (atual − anterior)'),
            sh('ytd_g', 'Cresc. YTD', 'r mark', 'Crescimento YTD vs ano anterior'),
        ],
        TRI: [
            sh('tri_prev', 'TRI Ano Ant.', 'r', 'TRI do mesmo trimestre do ano anterior'),
            sh('tri_cur', 'TRI', 'r', 'TRI atual (último trimestre fechado)'),
            sh('tri_gap', 'GAP TRI', 'r', 'Diferença absoluta TRI (atual − anterior)'),
            sh('tri_g', 'Cresc. TRI', 'r mark', 'Crescimento TRI vs mesmo trimestre do ano anterior'),
        ],
    };

    html += `
        <div class="pdv-tbl-wrap">
            <table class="pdv-tbl">
                <thead><tr>
                    ${sh('classe', 'Classe', 'pdv-col-classe', 'Classificação estratégica AA/A/B/C (70% volume MAT no setor + 30% potencial de mercado do brick)')}
                    ${sh('cnpj', 'CNPJ', '', 'CNPJ da farmácia (clique para abrir detalhes)')}
                    ${sh('razao', 'Razão Social', '', 'Nome registrado na Receita Federal')}
                    ${sh('cidade', 'Cidade / Brick', '', 'Cidade e Brick atendido(s)')}
                    ${periodOrder.flatMap(p2 => thDefs[p2]).join('')}
                </tr></thead>
                <tbody>`;

    const colCount = 15;
    if (!filtered.length) {
        html += `<tr><td colspan="${colCount}" class="pdv-empty">Nenhuma farmácia encontrada com os filtros atuais.</td></tr>`;
    } else {
        filtered.forEach(p => {
            const gMAT = p.mat_prev > 0 ? (p.mat_cur - p.mat_prev) / p.mat_prev : null;
            const gYTD = p.ytd_prev > 0 ? (p.ytd_cur - p.ytd_prev) / p.ytd_prev : null;
            const gTRI = p.tri_prev > 0 ? (p.tri_cur - p.tri_prev) / p.tri_prev : null;
            // v6.11 — GAP absoluto = atual − anterior
            const gapMAT = (p.mat_cur || 0) - (p.mat_prev || 0);
            const gapYTD = (p.ytd_cur || 0) - (p.ytd_prev || 0);
            const gapTRI = (p.tri_cur || 0) - (p.tri_prev || 0);
            const gC = (g) => g == null ? '' : (g >= 0 ? 'pdv-growth-pos' : 'pdv-growth-neg');
            const gapC = (v) => v > 0 ? 'pdv-growth-pos' : (v < 0 ? 'pdv-growth-neg' : '');
            const fmtG = (g) => g == null ? '—' : fmtPct(g);
            const fmtGap = (v) => {
                if (!v) return '—';
                const sign = v > 0 ? '+' : '';
                return sign + fmtValue(v);
            };
            const brickShort = p.bricks.length === 1 ? p.bricks[0].split(' - ')[0] : (p.bricks.length + ' bricks');

            // Células de cada período (ativo recebe classes de destaque)
            const tdGroups = {
                MAT: [
                    `<td class="r ${pd === 'MAT' ? 'period-active' : ''}">${fmtValue(p.mat_prev)}</td>`,
                    `<td class="r ${pd === 'MAT' ? 'period-active' : ''}">${fmtValue(p.mat_cur)}</td>`,
                    `<td class="r ${gapC(gapMAT)} ${pd === 'MAT' ? 'period-active period-sub' : ''}">${fmtGap(gapMAT)}</td>`,
                    `<td class="r mark ${gC(gMAT)} ${pd === 'MAT' ? 'period-active period-sub' : ''}">${fmtG(gMAT)}</td>`,
                ],
                YTD: [
                    `<td class="r ${pd === 'YTD' ? 'period-active' : ''}">${fmtValue(p.ytd_prev)}</td>`,
                    `<td class="r ${pd === 'YTD' ? 'period-active' : ''}">${fmtValue(p.ytd_cur)}</td>`,
                    `<td class="r ${gapC(gapYTD)} ${pd === 'YTD' ? 'period-active period-sub' : ''}">${fmtGap(gapYTD)}</td>`,
                    `<td class="r mark ${gC(gYTD)} ${pd === 'YTD' ? 'period-active period-sub' : ''}">${fmtG(gYTD)}</td>`,
                ],
                TRI: [
                    `<td class="r ${pd === 'TRI' ? 'period-active' : ''}">${fmtValue(p.tri_prev)}</td>`,
                    `<td class="r ${pd === 'TRI' ? 'period-active' : ''}">${fmtValue(p.tri_cur)}</td>`,
                    `<td class="r ${gapC(gapTRI)} ${pd === 'TRI' ? 'period-active period-sub' : ''}">${fmtGap(gapTRI)}</td>`,
                    `<td class="r mark ${gC(gTRI)} ${pd === 'TRI' ? 'period-active period-sub' : ''}">${fmtG(gTRI)}</td>`,
                ],
            };

            const classeInfo = {
                AA: { label: 'AA', cls: 'pdv-classe-aa', title: `Score ${p.scoreClasse}/100 · Vol. percentil ${p.percVolume}% · Potencial percentil ${p.percPotencial}% · Estratégica` },
                A: { label: 'A', cls: 'pdv-classe-a', title: `Score ${p.scoreClasse}/100 · Vol. percentil ${p.percVolume}% · Potencial percentil ${p.percPotencial}% · Prioritária` },
                B: { label: 'B', cls: 'pdv-classe-b', title: `Score ${p.scoreClasse}/100 · Vol. percentil ${p.percVolume}% · Potencial percentil ${p.percPotencial}% · Desenvolvimento` },
                C: { label: 'C', cls: 'pdv-classe-c', title: `Score ${p.scoreClasse}/100 · Vol. percentil ${p.percVolume}% · Potencial percentil ${p.percPotencial}% · Monitoramento` },
            };
            const ci = classeInfo[p.classe] || { label: '—', cls: '', title: 'Sem classificação' };

            html += `<tr class="pdv-row-data">
                <td class="pdv-col-classe"><span class="pdv-classe-badge ${ci.cls}" title="${ci.title}">${ci.label}</span></td>
                <td class="pdv-cnpj-cell" data-cnpj="${p.cnpj}" title="Abrir detalhes">${maskCNPJ(p.cnpj)}</td>
                <td class="pdv-razao-cell">${escapeHTML(p.razao)}</td>
                <td class="pdv-cidade-cell">${escapeHTML(p.cidade)}${p.uf ? ' / ' + p.uf : ''}<br><span class="pdv-brick-cell">${escapeHTML(brickShort)}</span></td>
                ${periodOrder.flatMap(p2 => tdGroups[p2]).join('')}
            </tr>`;
        });
    }

    html += `</tbody></table></div>`;
    el.innerHTML = html;

    // Listeners
    const setSel = (id, key) => { const s = $(id); if (s) { s.value = (f[key] && f[key] !== 'all') ? f[key] : 'all'; s.onchange = () => { PDV.filter[key] = s.value; renderPDV(); }; } };
    setSel('pdvFilterClasse', 'classe');

    // Listener do seletor Distrital local
    const distSel = $('pdvFilterDistrital');
    if (distSel) {
        distSel.onchange = () => {
            PDV.filter.distrital = distSel.value;
            PDV.filter.setor = []; // limpa setores ao trocar distrital
            renderPDV();
        };
    }
    const distClear = $('pdvDistClear');
    if (distClear) {
        distClear.onclick = () => {
            PDV.filter.distrital = 'all';
            PDV.filter.setor = [];
            renderPDV();
        };
    }

    // Multi-select dropdowns (Brick, Cidade, Setor, Marca)
    // IMPORTANTE: renderPDV() só é chamado ao FECHAR o painel, nunca a cada checkbox.
    // Isso evita que o DOM seja recriado enquanto o usuário ainda está selecionando.
    const wireMultiSelect = (id, key) => {
        const wrap = document.getElementById(id + 'Wrap');
        const btn = document.getElementById(id + 'Btn');
        const panel = document.getElementById(id + 'Panel');
        if (!wrap || !btn || !panel) return;

        // Aplica o filtro e fecha o painel
        const applyAndClose = () => {
            const allCb = panel.querySelector('input[value="__all__"]');
            const itemCbs = [...panel.querySelectorAll('.pdv-ms-list input[type=checkbox]')];
            const visible = itemCbs.filter(c => c.closest('.pdv-ms-item') && c.closest('.pdv-ms-item').style.display !== 'none');
            const selected = itemCbs.filter(c => c.checked).map(c => c.value);
            PDV.filter[key] = (selected.length === 0 || selected.length === itemCbs.length) ? [] : selected;
            panel.style.display = 'none';
            renderPDV();
        };

        // Botão "Aplicar" no rodapé do painel — confirma seleção
        let applyBtn = panel.querySelector('.pdv-ms-apply');
        if (!applyBtn) {
            applyBtn = document.createElement('button');
            applyBtn.className = 'pdv-ms-apply';
            applyBtn.textContent = '✓ Aplicar';
            panel.appendChild(applyBtn);
        }
        applyBtn.onclick = (e) => { e.stopPropagation(); applyAndClose(); };

        // Toggle panel (abre/fecha)
        btn.onclick = (e) => {
            e.stopPropagation();
            const isOpen = panel.style.display !== 'none';
            // Fechar outros painéis aplicando seus filtros primeiro
            document.querySelectorAll('.pdv-ms-panel:not([style*="display: none"])').forEach(p => {
                if (p !== panel) {
                    const otherWrap = p.closest('.pdv-ms-wrap');
                    if (otherWrap) {
                        const otherKey = otherWrap.id.replace('Wrap', '').replace('pdvFilter', '').toLowerCase();
                        const keyMap = { brick: 'brick', cidade: 'cidade', setor: 'setor', marca: 'marca' };
                        const k = keyMap[otherKey];
                        if (k) {
                            const itemCbs = [...p.querySelectorAll('.pdv-ms-list input[type=checkbox]')];
                            const sel = itemCbs.filter(c => c.checked).map(c => c.value);
                            PDV.filter[k] = (sel.length === 0 || sel.length === itemCbs.length) ? [] : sel;
                        }
                    }
                    p.style.display = 'none';
                }
            });
            if (isOpen) {
                applyAndClose();
            } else {
                panel.style.display = 'block';
                const si = panel.querySelector('.pdv-ms-search');
                if (si) { si.value = ''; si.focus(); }
                // Garantir que todos os items visíveis
                panel.querySelectorAll('.pdv-ms-list .pdv-ms-item').forEach(l => { l.style.display = ''; });
            }
        };

        // Busca dentro do painel (sem renderPDV — só filtra visualmente a lista)
        const searchInput = panel.querySelector('.pdv-ms-search');
        if (searchInput) {
            searchInput.oninput = () => {
                const q = searchInput.value.toLowerCase();
                panel.querySelectorAll('.pdv-ms-list .pdv-ms-item').forEach(lbl => {
                    lbl.style.display = lbl.textContent.toLowerCase().includes(q) ? '' : 'none';
                });
            };
            // Enter aplica
            searchInput.onkeydown = (e) => { if (e.key === 'Enter') { e.preventDefault(); applyAndClose(); } };
        }

        // Checkbox change — apenas atualiza visual, SEM renderPDV
        panel.addEventListener('change', (e) => {
            const cb = e.target;
            if (cb.type !== 'checkbox') return;
            const allCb = panel.querySelector('input[value="__all__"]');
            const itemCbs = [...panel.querySelectorAll('.pdv-ms-list input[type=checkbox]')];

            if (cb.value === '__all__') {
                // Marcar/desmarcar tudo visualmente
                itemCbs.forEach(c => { c.checked = cb.checked; c.closest('.pdv-ms-item').classList.toggle('checked', cb.checked); });
            } else {
                cb.closest('.pdv-ms-item').classList.toggle('checked', cb.checked);
                const anyChecked = itemCbs.some(c => c.checked);
                const allChecked = itemCbs.every(c => c.checked);
                if (allCb) allCb.checked = allChecked;
                if (allCb) allCb.closest('.pdv-ms-item').classList.toggle('checked', allChecked);
            }
        });

        // Clear button — limpa e aplica imediatamente
        const clearBtn = panel.querySelector('.pdv-ms-clear');
        if (clearBtn) clearBtn.onclick = (e) => {
            e.stopPropagation();
            const allCb = panel.querySelector('input[value="__all__"]');
            const itemCbs = [...panel.querySelectorAll('.pdv-ms-list input[type=checkbox]')];
            itemCbs.forEach(c => { c.checked = true; c.closest('.pdv-ms-item').classList.add('checked'); });
            if (allCb) { allCb.checked = true; allCb.closest('.pdv-ms-item').classList.add('checked'); }
            PDV.filter[key] = [];
            panel.style.display = 'none';
            renderPDV();
        };
    };

    wireMultiSelect('pdvFilterBrick', 'brick');
    wireMultiSelect('pdvFilterCidade', 'cidade');
    wireMultiSelect('pdvFilterSetor', 'setor');
    wireMultiSelect('pdvFilterMarca', 'marca');

    // Fechar painel ao clicar fora — aplica o filtro antes de fechar
    const _pdvOutsideClose = (e) => {
        if (e.target.closest('.pdv-ms-wrap')) return;
        let changed = false;
        document.querySelectorAll('.pdv-ms-panel').forEach(panel => {
            if (panel.style.display === 'none') return;
            const wrap = panel.closest('.pdv-ms-wrap');
            if (!wrap) return;
            const keyRaw = wrap.id.replace('Wrap', '').replace('pdvFilter', '').toLowerCase();
            const keyMap = { brick: 'brick', cidade: 'cidade', setor: 'setor', marca: 'marca' };
            const k = keyMap[keyRaw];
            if (k) {
                const itemCbs = [...panel.querySelectorAll('.pdv-ms-list input[type=checkbox]')];
                const sel = itemCbs.filter(c => c.checked).map(c => c.value);
                PDV.filter[k] = (sel.length === 0 || sel.length === itemCbs.length) ? [] : sel;
                changed = true;
            }
            panel.style.display = 'none';
        });
        if (changed) renderPDV();
    };
    // Remove listener antigo se existir e adiciona novo
    document.removeEventListener('click', window._pdvOutsideClose);
    window._pdvOutsideClose = _pdvOutsideClose;
    document.addEventListener('click', _pdvOutsideClose);
    const sEl = $('pdvFilterSearch');
    if (sEl) {
        /* v6.11 — Corrige bug de digitação: ao re-renderizar, o input é destruído
           e o usuário perde o foco. Solução: salvar selectionStart/End antes do
           render e restaurá-los logo após, mantendo o cursor onde estava. */
        let t;
        sEl.oninput = () => {
            clearTimeout(t);
            t = setTimeout(() => {
                const focusedId = (document.activeElement && document.activeElement.id) || null;
                const selStart = sEl.selectionStart;
                const selEnd = sEl.selectionEnd;
                PDV.filter.search = sEl.value;
                renderPDV();
                if (focusedId === 'pdvFilterSearch') {
                    const newEl = document.getElementById('pdvFilterSearch');
                    if (newEl) {
                        newEl.focus();
                        try { newEl.setSelectionRange(selStart, selEnd); } catch (e) { /* noop */ }
                    }
                }
            }, 200);
        };
    }
    const cnt = $('pdvCount');
    if (cnt) cnt.innerHTML = `<b>${filtered.length}</b> de ${pdvs.length}`;

    // Sort headers
    document.querySelectorAll('.pdv-tbl thead th[data-sort]').forEach(th => {
        th.onclick = () => {
            const key = th.getAttribute('data-sort');
            if (PDV.sortKey === key) PDV.sortDir = PDV.sortDir === 'desc' ? 'asc' : 'desc';
            else { PDV.sortKey = key; PDV.sortDir = (key === 'razao' || key === 'cidade' || key === 'cnpj') ? 'asc' : 'desc'; }
            renderPDV();
        };
    });

    // Click CNPJ → modal
    document.querySelectorAll('.pdv-cnpj-cell[data-cnpj]').forEach(td => {
        td.onclick = () => openPDVModal(td.getAttribute('data-cnpj'));
    });

    // Upload/Clear
    const upBtn = $('pdvUploadBtn'), upInp = $('pdvFileInput'), clrBtn2 = $('pdvClearBtn');
    if (upBtn && upInp) {
        upBtn.onclick = () => upInp.click();
        upInp.onchange = e => { if (e.target.files.length) handlePDVUpload(e.target.files, { forceUnit: window._unitForced || null }); e.target.value = ''; };
    }
    if (clrBtn2) clrBtn2.onclick = () => {
        if (confirm('Tem certeza que deseja remover todas as farmácias carregadas?')) clearPDVData();
    };

    // Recalcula offsets sticky depois do render (a tab-rail pode ter rolado p/ 2 linhas)
    requestAnimationFrame(() => {
        if (typeof recomputeStickyOffsets === 'function') recomputeStickyOffsets();
    });
}

/* ════════════════════════════════════════
   EXPORTAÇÃO PDV → EXCEL  (ExcelJS)
   Respeita todos os filtros ativos incluindo setor/distrital do header.
   Quando distrital/setor está ativo, reprojecta volumes de cada PDV
   somando apenas os produtos daquele recorte (igual à tabela na tela).
════════════════════════════════════════ */
async function exportPDVXLSX() {
    if (typeof ExcelJS === 'undefined') { toast('Biblioteca ExcelJS não carregada.'); return; }

    const mode = (typeof UI !== 'undefined') ? UI.unitMode : 'UN';
    const pd = (typeof UI !== 'undefined' && UI.periodMode) ? UI.periodMode : 'MAT';
    const pdvs = (PDV && PDV.pdvsByValueMode && PDV.pdvsByValueMode[mode]) || [];
    if (!pdvs.length) { toast('Nenhum dado de PDV carregado.'); return; }

    const f = PDV.filter || {};
    const gSector = (typeof UI !== 'undefined' && UI.sector && UI.sector !== 'all') ? UI.sector : null;
    const gMarket = (typeof UI !== 'undefined' && UI.market && UI.market !== 'all') ? UI.market : null;
    const gDistrital = (typeof UI !== 'undefined' && UI.distrital && UI.distrital !== 'all') ? UI.distrital : null;
    const gRegional = (typeof UI !== 'undefined' && UI.regional && UI.regional !== 'all') ? UI.regional : null;

    const _ec = s => { const m = String(s || '').match(/(\d{4,6})/); return m ? m[1].padEnd(6, '0').slice(0, 6) : ''; };
    const _matchSect = (arr, target) => {
        if (!target) return true;
        const t = String(target).toUpperCase().trim(), tCode = _ec(t);
        return arr.some(s => {
            const u = String(s).toUpperCase().trim(), uCode = _ec(u);
            return (tCode && uCode && tCode === uCode) || u === t || u.includes(t) || t.includes(u);
        });
    };
    const _matchMkt = (arr, target) => {
        if (!target) return true;
        const t = String(target).toUpperCase().trim();
        return arr.some(m => {
            const u = String(m).toUpperCase().trim();
            return u === t || u.replace(/\s*\(.*?\)\s*$/, '').trim() === t.replace(/\s*\(.*?\)\s*$/, '').trim();
        });
    };
    const _matchProdSect = (prodSetor) => {
        if (!gSector && !gDistrital) return true;
        const u = String(prodSetor || '').toUpperCase().trim(), uCode = _ec(u);
        if (gSector) {
            const t = String(gSector).toUpperCase().trim(), tCode = _ec(t);
            return (tCode && uCode && tCode === uCode) || u === t || u.includes(t) || t.includes(u);
        }
        const distCode = _ec(String(gDistrital)).slice(0, 4);
        return distCode && uCode && uCode.slice(0, 4) === distCode;
    };
    const _matchProdMkt = (prodMarca, target) => {
        if (!target) return false;
        const a = String(prodMarca || '').toUpperCase().trim(), t = String(target).toUpperCase().trim();
        return a === t || a.replace(/\s*\(.*?\)\s*$/, '').trim() === t.replace(/\s*\(.*?\)\s*$/, '').trim();
    };
    const _projectSect = (p) => {
        const items = (p.products || []).filter(pr => _matchProdSect(pr.setor));
        if (!items.length) return null;
        const acc = { ...p, mat_cur: 0, mat_prev: 0, ytd_cur: 0, ytd_prev: 0, tri_cur: 0, tri_prev: 0 };
        const bs = new Set();
        items.forEach(it => {
            acc.mat_cur += +it.mat_cur || 0; acc.mat_prev += +it.mat_prev || 0;
            acc.ytd_cur += +it.ytd_cur || 0; acc.ytd_prev += +it.ytd_prev || 0;
            acc.tri_cur += +it.tri_cur || 0; acc.tri_prev += +it.tri_prev || 0;
            if (it.brick) bs.add(it.brick);
        });
        acc.bricks = [...bs].sort();
        return acc;
    };
    const _projectMkt = (p, brand) => {
        const items = (p.products || []).filter(pr => _matchProdMkt(pr.marca, brand));
        if (!items.length) return null;
        const acc = { ...p, mat_cur: 0, mat_prev: 0, ytd_cur: 0, ytd_prev: 0, tri_cur: 0, tri_prev: 0 };
        const bs = new Set();
        items.forEach(it => {
            acc.mat_cur += +it.mat_cur || 0; acc.mat_prev += +it.mat_prev || 0;
            acc.ytd_cur += +it.ytd_cur || 0; acc.ytd_prev += +it.ytd_prev || 0;
            acc.tri_cur += +it.tri_cur || 0; acc.tri_prev += +it.tri_prev || 0;
            if (it.brick) bs.add(it.brick);
        });
        acc.bricks = [...bs].sort();
        return acc;
    };
    const norm2 = s => String(s || '').toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();

    let filtered = pdvs.filter(p => {
        if (gDistrital && !_matchSect(p.distritais, gDistrital)) return false;
        if (gRegional && !_matchSect(p.regionais, gRegional)) return false;
        if (gSector && !_matchSect(p.setores, gSector)) return false;
        if (gMarket && !_matchMkt(p.marcas, gMarket)) return false;
        if (f.brick && f.brick.length && !f.brick.some(v => p.bricks.includes(v))) return false;
        if (f.cidade && f.cidade.length && !f.cidade.includes(p.cidade)) return false;
        if (f.setor && f.setor.length && !f.setor.some(v => p.setores.includes(v))) return false;
        if (f.marca && f.marca.length && !f.marca.some(v => p.marcas.includes(v))) return false;
        if (f.classe && f.classe !== 'all' && p.classe !== f.classe) return false;
        if (f.search) {
            const blob = norm2([p.cnpj, p.razao, p.cidade, p.bairro, (p.bricks || []).join(' '), p.uf].join(' '));
            if (!blob.includes(norm2(f.search))) return false;
        }
        return true;
    });

    // Reprojecta volumes pelo setor/distrital ativo
    if (gSector || gDistrital) {
        filtered = filtered.map(p => _projectSect(p)).filter(p => p && (p.mat_cur || p.mat_prev || p.ytd_cur || p.ytd_prev || p.tri_cur || p.tri_prev));
    }
    // Reprojecta pela(s) marca(s) ativa(s) — suporta múltiplas
    const activeBrandsXL = (f.marca && f.marca.length) ? f.marca : (gMarket ? [gMarket] : []);
    if (activeBrandsXL.length) {
        filtered = filtered.map(p => {
            const items = (p.products || []).filter(pr => {
                const a = String(pr.marca || '').toUpperCase().trim();
                const aBase = a.replace(/\s*\(.*?\)\s*$/, '').trim();
                return activeBrandsXL.some(t => { const tb = String(t).toUpperCase().trim().replace(/\s*\(.*?\)\s*$/, '').trim(); return a === String(t).toUpperCase().trim() || aBase === tb; });
            });
            if (!items.length) return null;
            const acc = { ...p, mat_cur: 0, mat_prev: 0, ytd_cur: 0, ytd_prev: 0, tri_cur: 0, tri_prev: 0 };
            const bs = new Set();
            items.forEach(it => { acc.mat_cur += +it.mat_cur || 0; acc.mat_prev += +it.mat_prev || 0; acc.ytd_cur += +it.ytd_cur || 0; acc.ytd_prev += +it.ytd_prev || 0; acc.tri_cur += +it.tri_cur || 0; acc.tri_prev += +it.tri_prev || 0; if (it.brick) bs.add(it.brick); });
            acc.bricks = [...bs].sort();
            return acc;
        }).filter(p => p && (p.mat_cur || p.mat_prev || p.ytd_cur || p.ytd_prev || p.tri_cur || p.tri_prev));
    }
    if (!filtered.length) { toast('Nenhuma farmácia encontrada com os filtros atuais.'); return; }

    const periodOrder = pd === 'MAT' ? ['MAT', 'YTD', 'TRI'] : pd === 'YTD' ? ['YTD', 'MAT', 'TRI'] : ['TRI', 'MAT', 'YTD'];
    const COL = {};
    periodOrder.forEach((p2, pi) => {
        const base = 7 + pi * 4, key = p2.toLowerCase();
        COL[key + '_prev'] = base; COL[key + '_cur'] = base + 1; COL[key + '_gap'] = base + 2; COL[key + '_cresc'] = base + 3;
    });
    const TOTAL_COLS = 18;
    const FIXED_HDRS = ['Classe', 'CNPJ', 'Razão Social', 'Cidade', 'UF', 'Brick'];
    const PERIOD_HDRS = {
        MAT: ['MAT Ano Ant.', 'MAT', 'GAP MAT', 'Cresc. MAT'],
        YTD: ['YTD Ano Ant.', 'YTD', 'GAP YTD', 'Cresc. YTD'],
        TRI: ['TRI Ano Ant.', 'TRI', 'GAP TRI', 'Cresc. TRI'],
    };
    const allHdrs = [...FIXED_HDRS, ...periodOrder.flatMap(p2 => PERIOD_HDRS[p2])];

    const _fmtArr = (arr) => arr && arr.length ? arr.join(', ') : null;
    const activeBrandXL = activeBrandsXL.length === 1 ? activeBrandsXL[0] : (activeBrandsXL.length > 1 ? activeBrandsXL.join(', ') : null);
    const activeFilters = [
        activeBrandXL ? `Marca: ${activeBrandXL}` : (_fmtArr(f.marca) ? `Marcas: ${_fmtArr(f.marca)}` : ''),
        _fmtArr(f.brick) ? `Brick: ${_fmtArr(f.brick)}` : '',
        _fmtArr(f.cidade) ? `Cidade: ${_fmtArr(f.cidade)}` : '',
        _fmtArr(f.setor) ? `Setor: ${_fmtArr(f.setor)}` : '',
        f.classe && f.classe !== 'all' ? `Classe: ${f.classe}` : '',
        gDistrital ? `Distrital: ${gDistrital}` : '',
        gSector ? `Setor: ${gSector}` : '',
    ].filter(Boolean).join(' | ') || 'Todos os setores';
    const ctxText = ` Período: ${pd}   |   Base: ${mode === 'RS' ? 'R$' : 'Unidades'}   |   Registros: ${filtered.length}   |   Filtros: ${activeFilters}`;

    const wb = new ExcelJS.Workbook();
    wb.creator = 'Supera Farma';
    const sheetRaw = activeBrandXL ? `Marca ${activeBrandXL}` : `PDVs ${pd} ${mode}`;
    const sheetName = sheetRaw.replace(/[:\\/?*\[\]]/g, '').slice(0, 31);
    const ws = wb.addWorksheet(sheetName);
    [8.83, 20.83, 36.83, 22.83, 5.83, 47.83, 11.75, 4.0, 8.0, 9.41, 12.5, 4.75, 8.75, 13.75, 11.16, 3.41, 7.41, 8.83]
        .forEach((w, i) => { ws.getColumn(i + 1).width = w; });

    const isRS = mode === 'RS';
    const ACCOUNTING = '_("R$"* #,##0.00_);_("R$"* \\(#,##0.00\\);_("R$"* "-"??_);_(@_)';
    const HDR_FILL = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF002060' } };
    const HDR_FONT = { bold: true, size: 12, color: { argb: 'FFFFFFFF' }, name: 'Aptos Narrow' };
    const CENTER = { horizontal: 'center', vertical: 'middle' };
    const LEFT = { horizontal: 'left', vertical: 'middle' };
    const THIN = { right: { style: 'thin', color: { argb: 'FFE2E8F0' } } };

    const styleFor = (val, isPercent) => {
        const numFmt = isPercent ? '0.0%' : (isRS ? ACCOUNTING : 'General');
        if (val > 0) return { font: { bold: true, size: 11, name: 'Aptos Narrow', color: { argb: 'FF006100' } }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFC6EFCE' } }, numFmt };
        if (val < 0) return { font: { bold: true, size: 11, name: 'Aptos Narrow', color: { argb: 'FF9C0006' } }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFC7CE' } }, numFmt };
        return { font: { bold: true, size: 11, name: 'Aptos Narrow' }, numFmt };
    };

    ws.getRow(1).height = 18;
    const ctxCell = ws.getCell(1, 1);
    ctxCell.value = ctxText;
    ctxCell.font = { bold: true, size: 12, name: 'Aptos Narrow' };
    ws.mergeCells(1, 1, 1, TOTAL_COLS);

    ws.getRow(2).height = 22;
    allHdrs.forEach((h, i) => {
        const cell = ws.getCell(2, i + 1);
        cell.value = h; cell.fill = HDR_FILL; cell.font = HDR_FONT;
        cell.alignment = (i >= 6) ? CENTER : LEFT;
        cell.border = { bottom: { style: 'medium', color: { argb: 'FF3B82F6' } }, right: { style: 'thin', color: { argb: 'FF2A4A73' } } };
    });

    filtered.forEach((p, idx) => {
        const xlRow = idx + 3;
        const row = ws.getRow(xlRow);
        ['classe', 'cnpj', 'razao', 'cidade', 'uf', 'bricks'].forEach((k, i) => {
            const cell = row.getCell(i + 1);
            cell.value = k === 'cnpj' ? maskCNPJ(p.cnpj) : k === 'bricks' ? (p.bricks || []).join(', ') : (p[k] || '');
            cell.font = { size: 11, name: 'Aptos Narrow' }; cell.alignment = LEFT; cell.border = THIN;
        });
        periodOrder.forEach(p2 => {
            const key = p2.toLowerCase();
            const prevVal = +(p[key + '_prev'] || 0), curVal = +(p[key + '_cur'] || 0);
            const gapVal = curVal - prevVal;
            const crescVal = prevVal !== 0 ? curVal / prevVal - 1 : null;

            const cPrev = row.getCell(COL[key + '_prev']);
            cPrev.value = prevVal; cPrev.font = { size: 11, name: 'Aptos Narrow' }; cPrev.alignment = CENTER; cPrev.border = THIN;
            if (isRS) cPrev.numFmt = ACCOUNTING;

            const cCur = row.getCell(COL[key + '_cur']);
            cCur.value = curVal; cCur.font = { size: 11, name: 'Aptos Narrow' }; cCur.alignment = CENTER; cCur.border = THIN;
            if (isRS) cCur.numFmt = ACCOUNTING;

            const gapS = styleFor(gapVal, false);
            const cGap = row.getCell(COL[key + '_gap']);
            cGap.value = gapVal; cGap.font = gapS.font; if (gapS.fill) cGap.fill = gapS.fill;
            cGap.numFmt = isRS ? ACCOUNTING : 'General'; cGap.alignment = CENTER; cGap.border = THIN;

            const cCrsc = row.getCell(COL[key + '_cresc']);
            if (crescVal !== null) {
                const crS = styleFor(crescVal, true);
                cCrsc.value = crescVal; cCrsc.font = crS.font; if (crS.fill) cCrsc.fill = crS.fill;
                cCrsc.numFmt = '0.0%';
            } else {
                cCrsc.value = ''; cCrsc.font = { bold: true, size: 11, name: 'Aptos Narrow' }; cCrsc.numFmt = '0.0%';
            }
            cCrsc.alignment = CENTER; cCrsc.border = THIN;
        });
    });

    ws.views = [{ state: 'frozen', ySplit: 2, xSplit: 0 }];

    const modeLabel = mode === 'RS' ? 'RS' : 'UN';
    const date = new Date().toISOString().slice(0, 10);
    const fileName = `PDVs_${pd}_${modeLabel}_${date}.xlsx`;
    const buffer = await wb.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = fileName; document.body.appendChild(a); a.click();
    document.body.removeChild(a); URL.revokeObjectURL(url);
    toast(`✅ ${filtered.length} farmácias exportadas — ${fileName}`);
}

/* ----- Modal de detalhes da farmácia ----- */
async function openPDVModal(cnpjRaw) {
    const cnpj = onlyDigits(cnpjRaw);
    if (cnpj.length !== 14) { toast('CNPJ inválido (14 dígitos).'); return; }

    const modal = $('pdvModal');
    const body = $('pdvModalBody');
    const title = $('pdvModalTitle');
    if (!modal || !body) return;
    modal.classList.add('open');
    title.innerHTML = `Farmácia · <code style="font-size:13px;background:#f0f4fa;padding:2px 8px;border-radius:4px;color:#1d4ed8;">${maskCNPJ(cnpj)}</code>`;

    body.innerHTML = `<div class="pdv-loading"><div class="pdv-spinner"></div><div>Buscando dados da farmácia...</div></div>`;

    // Dados de venda da minha base
    const localPdv = findLocalPDV(cnpj);

    // Dados públicos via cache → BrasilAPI (fallback ReceitaWS)
    let info = PDV.cnpjCache[cnpj];
    let fromCache = false;
    if (info) { fromCache = true; }
    else {
        try { info = await fetchCNPJData(cnpj); PDV.cnpjCache[cnpj] = info; saveCnpjCache(); }
        catch (e) {
            body.innerHTML = renderPDVModalContent(cnpj, null, localPdv, false, e.message);
            wirePDVModalActions();
            return;
        }
    }
    body.innerHTML = renderPDVModalContent(cnpj, info, localPdv, fromCache, null);
    wirePDVModalActions();
}

function findLocalPDV(cnpj) {
    const mode = UI.unitMode;
    const list = PDV.pdvsByValueMode[mode] || [];
    let found = list.find(p => p.cnpj === cnpj);
    // Se não está no modo atual, procura no outro modo só pra termos algum dado
    if (!found) {
        const other = mode === 'UN' ? 'RS' : 'UN';
        found = (PDV.pdvsByValueMode[other] || []).find(p => p.cnpj === cnpj);
    }
    return found || null;
}

async function fetchCNPJData(cnpj) {
    // Primeiro: BrasilAPI (CORS friendly, gratuita, oficial Receita)
    try {
        const r = await fetch('https://brasilapi.com.br/api/cnpj/v1/' + cnpj);
        if (r.ok) {
            const d = await r.json();
            return normalizeCNPJData(d, 'BrasilAPI');
        }
        if (r.status === 404) throw new Error('CNPJ não encontrado na Receita Federal.');
    } catch (e) {
        console.warn('[CNPJ] BrasilAPI falhou:', e);
        // Fallback: ReceitaWS via JSONP-like proxy nao ha; tenta direto (pode falhar por CORS)
        try {
            const r = await fetch('https://publica.cnpj.ws/cnpj/' + cnpj);
            if (r.ok) {
                const d = await r.json();
                return normalizeCNPJData(d, 'CNPJ.ws');
            }
        } catch (e2) { /* ignore */ }
        throw e;
    }
    throw new Error('Erro inesperado ao consultar CNPJ.');
}

function normalizeCNPJData(d, source) {
    // Aceita formato BrasilAPI ou cnpj.ws (estrutura aninhada)
    if (d && d.estabelecimento) {
        // cnpj.ws
        const e = d.estabelecimento;
        return {
            source,
            cnpj: (d.cnpj_raiz || e.cnpj || '') + '',
            razao_social: d.razao_social || '',
            nome_fantasia: e.nome_fantasia || '',
            situacao: e.situacao_cadastral || '',
            data_situacao: e.data_situacao_cadastral || '',
            data_inicio: e.data_inicio_atividade || '',
            cnae: (e.atividade_principal && e.atividade_principal.descricao) || '',
            telefone: [e.ddd1 ? '(' + e.ddd1 + ') ' + (e.telefone1 || '') : '', e.ddd2 ? '(' + e.ddd2 + ') ' + (e.telefone2 || '') : ''].filter(s => s.trim()).join(' / '),
            email: e.email || '',
            logradouro: ((e.tipo_logradouro || '') + ' ' + (e.logradouro || '')).trim(),
            numero: e.numero || '',
            complemento: e.complemento || '',
            bairro: e.bairro || '',
            cep: e.cep || '',
            municipio: (e.cidade && e.cidade.nome) || '',
            uf: (e.estado && e.estado.sigla) || '',
            porte: (d.porte && d.porte.descricao) || '',
            natureza: (d.natureza_juridica && d.natureza_juridica.descricao) || ''
        };
    }
    // BrasilAPI (flat)
    const tel = (d.ddd_telefone_1 || '').toString();
    let telFmt = tel;
    if (tel.length >= 10) {
        telFmt = '(' + tel.slice(0, 2) + ') ' + tel.slice(2, tel.length - 4) + '-' + tel.slice(-4);
    }
    return {
        source,
        cnpj: d.cnpj || '',
        razao_social: d.razao_social || '',
        nome_fantasia: d.nome_fantasia || '',
        situacao: d.descricao_situacao_cadastral || '',
        data_situacao: d.data_situacao_cadastral || '',
        data_inicio: d.data_inicio_atividade || '',
        cnae: d.cnae_fiscal_descricao || '',
        telefone: telFmt,
        email: d.email || '',
        logradouro: ((d.descricao_tipo_de_logradouro || '') + ' ' + (d.logradouro || '')).trim(),
        numero: d.numero || '',
        complemento: d.complemento || '',
        bairro: d.bairro || '',
        cep: d.cep || '',
        municipio: d.municipio || '',
        uf: d.uf || '',
        porte: d.porte || '',
        natureza: d.natureza_juridica || ''
    };
}

function renderPDVModalContent(cnpj, info, localPdv, fromCache, err) {
    if (err) {
        return `<div class="pdv-error">⚠ ${escapeHTML(err)}<br><small style="font-weight:400">A consulta pública pode ter falhado por instabilidade ou bloqueio. Tente novamente em alguns segundos.</small></div>`;
    }

    const mode = UI.unitMode;
    const modeLbl = mode === 'RS' ? 'R$' : 'Un.';

    // KPIs — será reconstruído dentro do bloco venHTML com filtro de setor aplicado
    let kpisHTML = localPdv ? '' : `<div style="background:#fef3c7;color:#92400e;padding:10px 14px;border-radius:8px;margin-bottom:14px;font-size:12px;font-weight:600;">⚠ Esta farmácia não consta na sua planilha IQVIA carregada (sem dados de venda).</div>`;

    // Card cadastro Receita (layout compacto)
    let cadHTML = '';
    if (info) {
        const sit = (info.situacao || '').toLowerCase();
        const sitCls = sit.includes('ativa') ? 's-ativa' : (sit.includes('baix') ? 's-baixada' : (sit.includes('inapta') ? 's-inapta' : (sit.includes('suspen') ? 's-suspensa' : 's-nula')));
        const enderecoLinha = [info.logradouro, info.numero, info.complemento].filter(Boolean).join(', ');
        const cidadeUf = info.municipio && info.uf ? info.municipio + ' / ' + info.uf : (info.municipio || '');
        const enderecoFull = [enderecoLinha, info.bairro, cidadeUf, info.cep ? 'CEP ' + info.cep : ''].filter(Boolean).join(' · ');
        const telDigits = onlyDigits(info.telefone);
        const nomeDisplay = info.nome_fantasia || info.razao_social || '—';
        const razaoSecundaria = info.nome_fantasia && info.razao_social ? info.razao_social : '';

        cadHTML = `
            <div class="pdv-card pdv-card-compact">
                <div class="pdv-card-h"><span class="pdv-card-h-ico">🏛️</span> Dados Cadastrais
                    <span class="pdv-source-badge ${fromCache ? 'cache' : ''}">${fromCache ? 'Cache' : info.source || 'API'}</span>
                </div>
                <div class="pdv-name">${escapeHTML(nomeDisplay)}</div>
                ${razaoSecundaria ? `<div class="pdv-name-sub">${escapeHTML(razaoSecundaria)}</div>` : ''}
                <div class="pdv-meta-line">
                    <code class="pdv-cnpj-pill">${maskCNPJ(cnpj)}</code>
                    <span class="pdv-status ${sitCls}">${escapeHTML(info.situacao || '—')}</span>
                    ${info.data_situacao ? `<span class="pdv-meta-since">desde ${fmtBRDate(info.data_situacao)}</span>` : ''}
                </div>
                <div class="pdv-info-grid">
                    ${info.telefone ? `<div class="pdv-info-cell"><span class="pdv-info-ico">📞</span><div><div class="pdv-info-lbl">Telefone</div><div class="pdv-info-val">${escapeHTML(info.telefone)}</div></div></div>` : ''}
                    ${info.email ? `<div class="pdv-info-cell"><span class="pdv-info-ico">✉️</span><div><div class="pdv-info-lbl">E-mail</div><div class="pdv-info-val">${escapeHTML(info.email)}</div></div></div>` : ''}
                    <div class="pdv-info-cell pdv-info-cell-full"><span class="pdv-info-ico">📍</span><div><div class="pdv-info-lbl">Endereço</div><div class="pdv-info-val">${escapeHTML(enderecoFull) || '—'}</div></div></div>
                </div>
                <div class="pdv-chips">
                    ${info.cnae ? `<span class="pdv-chip" title="CNAE"><b>CNAE:</b> ${escapeHTML(info.cnae)}</span>` : ''}
                    ${info.data_inicio ? `<span class="pdv-chip"><b>Abertura:</b> ${fmtBRDate(info.data_inicio)}</span>` : ''}
                    ${info.porte ? `<span class="pdv-chip"><b>Porte:</b> ${escapeHTML(info.porte)}</span>` : ''}
                </div>
                <div class="pdv-actions">
                    ${info.telefone ? `<button class="pdv-action-btn" data-act="copy-tel" data-val="${escapeHTML(info.telefone)}">📋 Copiar telefone</button>` : ''}
                    ${telDigits ? `<a class="pdv-action-btn" href="https://wa.me/55${telDigits}" target="_blank">💬 WhatsApp</a>` : ''}
                    <a class="pdv-action-btn" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(enderecoFull + ' Brasil')}" target="_blank">🗺️ Maps</a>
                    <button class="pdv-action-btn" data-act="copy-cnpj" data-val="${cnpj}">📋 CNPJ</button>
                </div>
            </div>`;
    }

    // Card vendas (sua planilha)
    let venHTML = '';
    if (localPdv) {
        // Período ativo: define quais colunas aparecem na tabela de produtos
        const periodUpper = (UI && UI.periodMode) || 'MAT';
        const period = periodUpper.toLowerCase();
        const pdLbl = periodUpper;
        const curK = period + '_cur';
        const prevK = period + '_prev';

        // ── Filtro de setor/distrital ativo no header ─────────────────────────
        const gSector = (typeof UI !== 'undefined' && UI.sector && UI.sector !== 'all') ? UI.sector : null;
        const gDistrital = (typeof UI !== 'undefined' && UI.distrital && UI.distrital !== 'all') ? UI.distrital : null;
        // Filtro LOCAL de distrital da aba PDV (seletor "Distrital" na filterbar)
        const localDistFilter = (typeof PDV !== 'undefined' && PDV.filter && PDV.filter.distrital && PDV.filter.distrital !== 'all')
            ? PDV.filter.distrital : null;
        // Distrital efetiva: local tem prioridade sobre global
        const activeDistrital = localDistFilter || gDistrital;

        const extractCode = s => { const m = String(s || '').match(/(\d{4,6})/); return m ? m[1].padEnd(6, '0').slice(0, 6) : ''; };
        const matchesSectorFilter = (prodSetor, prodDistrital) => {
            if (gSector) {
                const t = String(gSector).toUpperCase().trim(), tCode = extractCode(t);
                const u = String(prodSetor || '').toUpperCase().trim(), uCode = extractCode(u);
                if (tCode && uCode && tCode === uCode) return true;
                if (u === t || u.includes(t) || t.includes(u)) return true;
                return false;
            }
            if (activeDistrital) {
                // Compara pela distrital do produto diretamente (mais preciso)
                if (prodDistrital) {
                    const dA = String(prodDistrital).toUpperCase().trim();
                    const dB = String(activeDistrital).toUpperCase().trim();
                    if (dA === dB) return true;
                    const codeA = extractCode(dA).slice(0, 4);
                    const codeB = extractCode(dB).slice(0, 4);
                    if (codeA && codeB && codeA === codeB) return true;
                    return false;
                }
                // Fallback: compara pelo código do setor
                const distCode = extractCode(activeDistrital).slice(0, 4);
                const sectCode = extractCode(prodSetor || '').slice(0, 4);
                return distCode && sectCode && distCode === sectCode;
            }
            return true;
        };

        // ── Filtro de marca(s) ativa(s) no filterbar ──────────────────────────
        const activeMarcas = (typeof PDV !== 'undefined' && PDV.filter && PDV.filter.marca && PDV.filter.marca.length)
            ? PDV.filter.marca : [];
        const matchesBrandFilter = (prodMarca) => {
            if (!activeMarcas.length) return true;
            const a = String(prodMarca || '').toUpperCase().trim();
            const aBase = a.replace(/\s*\(.*?\)\s*$/, '').trim();
            return activeMarcas.some(t => {
                const tb = String(t).toUpperCase().trim();
                const tbBase = tb.replace(/\s*\(.*?\)\s*$/, '').trim();
                return a === tb || aBase === tbBase;
            });
        };

        const activeSectorFilter = gSector || activeDistrital;
        const activeBrandFilter = activeMarcas.length > 0;
        const activeFilter = activeSectorFilter || activeBrandFilter;

        const activeFilterLabel = activeSectorFilter
            ? (gSector || activeDistrital).replace(/^\d+\s*-\s*/, '').trim()
            : activeBrandFilter
                ? (activeMarcas.length === 1 ? activeMarcas[0] : `${activeMarcas.length} marcas`)
                : null;

        // Filtra produtos aplicando setor E marca simultaneamente
        const filteredProducts = activeFilter
            ? localPdv.products.filter(pr => matchesSectorFilter(pr.setor, pr.distrital) && matchesBrandFilter(pr.marca))
            : localPdv.products;

        // Recalcula KPIs totais com base nos produtos filtrados
        let kpiData = localPdv; // fallback: usa o PDV inteiro
        if (activeFilter && filteredProducts.length > 0) {
            const acc = { mat_cur: 0, mat_prev: 0, ytd_cur: 0, ytd_prev: 0, tri_cur: 0, tri_prev: 0 };
            filteredProducts.forEach(pr => {
                acc.mat_cur += pr.mat_cur || 0; acc.mat_prev += pr.mat_prev || 0;
                acc.ytd_cur += pr.ytd_cur || 0; acc.ytd_prev += pr.ytd_prev || 0;
                acc.tri_cur += pr.tri_cur || 0; acc.tri_prev += pr.tri_prev || 0;
            });
            kpiData = { ...localPdv, ...acc };
        }

        // Reconstrói os KPIs com os valores filtrados
        const gMAT2 = kpiData.mat_prev > 0 ? (kpiData.mat_cur - kpiData.mat_prev) / kpiData.mat_prev : null;
        const gYTD2 = kpiData.ytd_prev > 0 ? (kpiData.ytd_cur - kpiData.ytd_prev) / kpiData.ytd_prev : null;
        const gTRI2 = kpiData.tri_prev > 0 ? (kpiData.tri_cur - kpiData.tri_prev) / kpiData.tri_prev : null;
        const sub2 = (g) => g == null ? '<div class="pdv-kpi-sub">—</div>' : `<div class="pdv-kpi-sub ${g < 0 ? 'neg' : ''}">${fmtPct(g)}</div>`;
        const classeLabels = { AA: '⭐⭐ AA · Estratégica', A: '⭐ A · Prioritária', B: 'B · Desenvolvimento', C: 'C · Monitoramento' };
        const classeCls = { AA: 'pdv-classe-aa', A: 'pdv-classe-a', B: 'pdv-classe-b', C: 'pdv-classe-c' };
        const potLabel = localPdv._potMatchDB === false ? ' (estimado — brick sem match no DB)' : '';
        const setorLabel = localPdv._setorClassif ? ` · Setor de referência: ${localPdv._setorClassif}` : '';
        const classeTooltip = localPdv.classe
            ? `Score ${localPdv.scoreClasse}/100 · Volume percentil ${localPdv.percVolume}% no setor · Potencial percentil ${localPdv.percPotencial}%${potLabel}${setorLabel}`
            : 'Classificação não disponível';

        const filterBadge = activeFilterLabel
            ? `<span style="display:inline-block;margin-left:8px;padding:1px 8px;background:#1d4ed8;color:#fff;font-size:9.5px;font-weight:700;border-radius:10px;letter-spacing:.3px;vertical-align:middle;" title="Exibindo apenas produtos do setor/distrital ativo">📍 ${escapeHTML(activeFilterLabel)}</span>`
            : '';
        const filterNote = activeFilter && filteredProducts.length === 0
            ? `<div style="background:#fef3c7;color:#92400e;padding:8px 12px;border-radius:6px;margin-bottom:8px;font-size:12px;">⚠ Nenhum produto desta farmácia pertence ao setor/distrital selecionado.</div>` : '';
        const filterInfo = activeFilter && filteredProducts.length > 0
            ? `<div style="background:#eff6ff;border:1px solid #bfdbfe;color:#1e40af;padding:6px 10px;border-radius:6px;margin-bottom:8px;font-size:11px;font-weight:600;">🔍 Exibindo <b>${filteredProducts.length}</b> de ${localPdv.products.length} produto(s) — filtrado por <b>${escapeHTML(activeFilterLabel || activeFilter)}</b>. Os KPIs refletem apenas este recorte.</div>` : '';

        kpisHTML = `
            <div class="pdv-kpis pdv-kpis-tight">
                <div class="pdv-kpi pdv-kpi-classe" style="min-width:110px">
                    <div class="pdv-kpi-lbl">Classificação</div>
                    <div class="pdv-kpi-val">
                        <span class="pdv-classe-badge ${classeCls[localPdv.classe] || ''}" title="${classeTooltip}" style="font-size:15px;padding:3px 12px;">
                            ${localPdv.classe || '—'}
                        </span>
                    </div>
                    <div class="pdv-kpi-sub" title="${classeTooltip}">${localPdv.classe ? classeLabels[localPdv.classe] : '—'}</div>
                </div>
                <div class="pdv-kpi" style="min-width:110px"><div class="pdv-kpi-lbl">MAT (${modeLbl})</div><div class="pdv-kpi-val" style="font-size:14px">${fmtValue(kpiData.mat_cur)}</div>${sub2(gMAT2)}</div>
                <div class="pdv-kpi" style="min-width:110px"><div class="pdv-kpi-lbl">YTD (${modeLbl})</div><div class="pdv-kpi-val" style="font-size:14px">${fmtValue(kpiData.ytd_cur)}</div>${sub2(gYTD2)}</div>
                <div class="pdv-kpi" style="min-width:110px"><div class="pdv-kpi-lbl">TRI (${modeLbl})</div><div class="pdv-kpi-val" style="font-size:14px">${fmtValue(kpiData.tri_cur)}</div>${sub2(gTRI2)}</div>
            </div>`;

        // Lista produtos agrupados por marca, usando APENAS os produtos filtrados
        const prodMap = new Map();
        filteredProducts.forEach(p => {
            const k = p.marca + '||' + p.brick;
            const cur = prodMap.get(k) || { marca: p.marca, brick: p.brick, mat_cur: 0, mat_prev: 0, ytd_cur: 0, ytd_prev: 0, tri_cur: 0, tri_prev: 0 };
            cur.mat_cur += p.mat_cur; cur.mat_prev += p.mat_prev;
            cur.ytd_cur += p.ytd_cur; cur.ytd_prev += p.ytd_prev || 0;
            cur.tri_cur += p.tri_cur; cur.tri_prev += p.tri_prev || 0;
            prodMap.set(k, cur);
        });

        // Helper para montar a tabela de produtos com ordenação
        const buildProdTbl = (list, sortKey, sortDir) => {
            // Enriquece cada item com gap e crescimento calculados
            const enriched = list.map(p => {
                const prev = p[prevK] || 0, cur = p[curK] || 0;
                return { ...p, _prev: prev, _cur: cur, _gap: cur - prev, _g: prev > 0 ? (cur - prev) / prev : null };
            });
            // Ordena
            enriched.sort((a, b) => {
                let av, bv;
                if (sortKey === 'marca') return String(a.marca).localeCompare(String(b.marca)) * (sortDir === 'asc' ? 1 : -1);
                if (sortKey === 'brick') return String(a.brick).localeCompare(String(b.brick)) * (sortDir === 'asc' ? 1 : -1);
                if (sortKey === 'prev') { av = a._prev; bv = b._prev; }
                else if (sortKey === 'cur') { av = a._cur; bv = b._cur; }
                else if (sortKey === 'gap') { av = a._gap; bv = b._gap; }
                else if (sortKey === 'g') { av = a._g == null ? -Infinity : a._g; bv = b._g == null ? -Infinity : b._g; }
                else { av = a._cur; bv = b._cur; }
                return (av - bv) * (sortDir === 'asc' ? 1 : -1);
            });
            const arr = (key) => {
                if (sortKey !== key) return '<span style="opacity:.45;margin-left:3px;font-size:9px">↕</span>';
                return `<span style="margin-left:3px;font-size:9px;color:#6ee7b7">${sortDir === 'desc' ? '▼' : '▲'}</span>`;
            };
            const thStyle = 'cursor:pointer;user-select:none;white-space:nowrap;';
            let tbl = `<table class="pdv-prod-tbl" id="pdvProdTbl">
                <thead><tr>
                    <th style="${thStyle}" data-sort="marca">Marca${arr('marca')}</th>
                    <th class="r" style="${thStyle}" data-sort="prev">${pdLbl} Ant.${arr('prev')}</th>
                    <th class="r" style="${thStyle}" data-sort="cur">${pdLbl}${arr('cur')}</th>
                    <th class="r" style="${thStyle}" data-sort="gap">GAP${arr('gap')}</th>
                    <th class="r" style="${thStyle}" data-sort="g">Cresc.${arr('g')}</th>
                </tr></thead><tbody>`;
            enriched.forEach(p => {
                const gapCls = p._gap > 0 ? 'pdv-growth-pos' : (p._gap < 0 ? 'pdv-growth-neg' : '');
                const gCls = p._g == null ? '' : (p._g >= 0 ? 'pdv-growth-pos' : 'pdv-growth-neg');
                const gapFmt = p._gap === 0 ? '—' : (p._gap > 0 ? '+' : '') + fmtValue(p._gap);
                const sup = isSupera(p.marca);
                tbl += `<tr class="${sup ? 'is-supera' : ''}">
                    <td><strong>${escapeHTML(p.marca)}</strong></td>
                    <td class="r">${fmtValue(p._prev)}</td>
                    <td class="r">${fmtValue(p._cur)}</td>
                    <td class="r ${gapCls}">${gapFmt}</td>
                    <td class="r ${gCls}">${p._g == null ? '—' : fmtPct(p._g)}</td>
                </tr>`;

            });
            tbl += '</tbody></table>';
            return tbl;
        };

        // Estado de sort (começa por cur desc)
        let prodSortKey = 'cur', prodSortDir = 'desc';
        const prodList = [...prodMap.values()];
        const prodTbl = buildProdTbl(prodList, prodSortKey, prodSortDir);

        venHTML = `
            <div class="pdv-card">
                <div class="pdv-card-h">
                    <span class="pdv-card-h-ico">📊</span> Vendas IQVIA — ${modeLbl}${filterBadge}
                    <button class="pdv-action-btn" style="margin-left:auto;background:#0f4ea3;color:#fff;border-color:#0f4ea3;" data-act="export-pdv" data-val="${cnpj}">⬇ Exportar Excel</button>
                </div>
                ${filterNote}${filterInfo}
                <div class="pdv-row"><span class="pdv-k">Bricks</span><span class="pdv-v">${localPdv.bricks.map(b => `<code>${escapeHTML(b)}</code>`).join('<br>')}</span></div>
                <div class="pdv-row"><span class="pdv-k">Setor(es)</span><span class="pdv-v"><small>${localPdv.setores.map(s => escapeHTML(s)).join('<br>') || '—'}</small></span></div>
                <div class="pdv-row"><span class="pdv-k">Marcas</span><span class="pdv-v"><small>${filteredProducts.length > 0 ? [...new Set(filteredProducts.map(p => p.marca))].length : 0} marca(s)${activeFilter ? ' no filtro ativo' : ' com venda'}</small></span></div>
                <div style="margin-top:10px;border-top:1px dashed #e0e7f1;padding-top:8px;" id="pdvProdWrap">
                    <div style="font-size:10.5px;color:#6b7a99;font-weight:700;text-transform:uppercase;letter-spacing:.4px;margin-bottom:4px;">Produtos vendidos por essa farmácia</div>
                    ${prodTbl}
                </div>
            </div>`;

        // Wiring sort — event delegation no wrap (persiste após re-renders da tabela)
        setTimeout(() => {
            const wrap = document.getElementById('pdvProdWrap');
            if (!wrap) return;
            wrap.addEventListener('click', function handleProdSort(e) {
                const th = e.target.closest('th[data-sort]');
                if (!th) return;
                const key = th.getAttribute('data-sort');
                if (prodSortKey === key) prodSortDir = prodSortDir === 'desc' ? 'asc' : 'desc';
                else { prodSortKey = key; prodSortDir = key === 'marca' ? 'asc' : 'desc'; }
                const newTbl = buildProdTbl(prodList, prodSortKey, prodSortDir);
                const tmp = document.createElement('div');
                tmp.innerHTML = newTbl;
                const oldTbl = wrap.querySelector('#pdvProdTbl');
                if (oldTbl) oldTbl.replaceWith(tmp.firstElementChild);
                // wrap e o listener permanecem; nenhum re-wire necessário
            });
        }, 50);
    } // end if (localPdv) — venHTML

    return kpisHTML + `<div class="pdv-modal-grid" data-export-cnpj="${cnpj}">${cadHTML}${venHTML}</div>`;


}

function wirePDVModalActions() {
    document.querySelectorAll('#pdvModalBody [data-act]').forEach(el => {
        el.onclick = () => {
            const act = el.getAttribute('data-act');
            const val = el.getAttribute('data-val');
            if (act === 'copy-tel' || act === 'copy-cnpj') {
                navigator.clipboard.writeText(val).then(() => toast('Copiado: ' + val));
            }
            if (act === 'export-pdv') {
                exportPDVModal(val);
            }
        };
    });
}

/* ===== EXPORTAÇÃO DO MODAL DE PDV PARA EXCEL ===== */
async function exportPDVModal(cnpjRaw) {
    const mode = UI.unitMode;
    const modeLbl = mode === 'RS' ? 'R$' : 'Un.';
    const pdvs = PDV.pdvsByValueMode[mode] || [];
    const p = pdvs.find(x => x.cnpj === onlyDigits(cnpjRaw));
    if (!p) { toast('Dados do PDV nao encontrados.'); return; }

    const info = PDV.cnpjCache[onlyDigits(cnpjRaw)] || null;
    const fmtPct2 = g => g == null ? '' : ((g >= 0 ? '+' : '') + (g * 100).toFixed(1) + '%');
    const toNum = v => (v == null || v === '') ? 0 : Number(v);

    const gMAT = p.mat_prev > 0 ? (p.mat_cur - p.mat_prev) / p.mat_prev : null;
    const gYTD = p.ytd_prev > 0 ? (p.ytd_cur - p.ytd_prev) / p.ytd_prev : null;
    const gTRI = p.tri_prev > 0 ? (p.tri_cur - p.tri_prev) / p.tri_prev : null;
    const gapMAT = (p.mat_cur || 0) - (p.mat_prev || 0);
    const gapYTD = (p.ytd_cur || 0) - (p.ytd_prev || 0);
    const gapTRI = (p.tri_cur || 0) - (p.tri_prev || 0);

    const endFull = info ? [
        [info.logradouro, info.numero, info.complemento].filter(Boolean).join(', '),
        info.bairro,
        (info.municipio && info.uf ? info.municipio + ' / ' + info.uf : info.municipio || ''),
        info.cep ? 'CEP ' + info.cep : ''
    ].filter(Boolean).join(' - ')
        : (p.bairro ? p.bairro + ' - ' + p.cidade + ' / ' + p.uf : p.cidade + ' / ' + p.uf);

    // Produtos — filtra pelo setor/distrital ativo E pelas marcas selecionadas
    const periodUpper = (UI && UI.periodMode) || 'MAT';
    const curK = periodUpper.toLowerCase() + '_cur';
    const _gSector2 = (typeof UI !== 'undefined' && UI.sector && UI.sector !== 'all') ? UI.sector : null;
    const _gDistrital2 = (typeof UI !== 'undefined' && UI.distrital && UI.distrital !== 'all') ? UI.distrital : null;
    const _activeMarcas2 = (typeof PDV !== 'undefined' && PDV.filter && PDV.filter.marca && PDV.filter.marca.length) ? PDV.filter.marca : [];
    const _extractCode2 = s => { const m = String(s || '').match(/(\d{4,6})/); return m ? m[1].padEnd(6, '0').slice(0, 6) : ''; };
    const _matchesSector2 = (prodSetor) => {
        if (!_gSector2 && !_gDistrital2) return true;
        if (_gSector2) {
            const t = String(_gSector2).toUpperCase().trim(), tCode = _extractCode2(t);
            const u = String(prodSetor || '').toUpperCase().trim(), uCode = _extractCode2(u);
            return (tCode && uCode && tCode === uCode) || u === t || u.includes(t) || t.includes(u);
        }
        const distCode = _extractCode2(_gDistrital2).slice(0, 4);
        const sectCode = _extractCode2(prodSetor || '').slice(0, 4);
        return distCode && sectCode && distCode === sectCode;
    };
    const _matchesBrand2 = (prodMarca) => {
        if (!_activeMarcas2.length) return true;
        const a = String(prodMarca || '').toUpperCase().trim();
        const aBase = a.replace(/\s*\(.*?\)\s*$/, '').trim();
        return _activeMarcas2.some(t => { const tb = String(t).toUpperCase().trim().replace(/\s*\(.*?\)\s*$/, '').trim(); return a === String(t).toUpperCase().trim() || aBase === tb; });
    };
    const prodMap = new Map();
    p.products.filter(pr => _matchesSector2(pr.setor) && _matchesBrand2(pr.marca)).forEach(pr => {
        const k = pr.marca + '||' + pr.brick;
        const c = prodMap.get(k) || {
            marca: pr.marca, brick: pr.brick,
            mat_cur: 0, mat_prev: 0, ytd_cur: 0, ytd_prev: 0, tri_cur: 0, tri_prev: 0
        };
        c.mat_cur += pr.mat_cur; c.mat_prev += pr.mat_prev;
        c.ytd_cur += pr.ytd_cur; c.ytd_prev += pr.ytd_prev || 0;
        c.tri_cur += pr.tri_cur; c.tri_prev += pr.tri_prev || 0;
        prodMap.set(k, c);
    });
    const prodList = [...prodMap.values()].sort((a, b) => b[curK] - a[curK]);

    // Carrega ExcelJS se necessario
    if (!window.ExcelJS) {
        toast('Carregando exportador...');
        await new Promise((ok, fail) => {
            const s = document.createElement('script');
            s.src = 'https://cdn.jsdelivr.net/npm/exceljs@4.4.0/dist/exceljs.min.js';
            s.onload = ok;
            s.onerror = () => fail(new Error('Falha ao carregar ExcelJS'));
            document.head.appendChild(s);
        });
    }

    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet('PDV');

    // Larguras — exatamente como na planilha modelo aprovada
    ws.getColumn(1).width = 28;  // A  - Marca/Label
    ws.getColumn(2).width = 16;  // B  - Ant. período 1
    // C e D: largura default do Excel (colunas do meio de cada grupo)
    ws.getColumn(5).width = 13;  // E  - Cresc. %
    ws.getColumn(6).width = 16;  // F  - Ant. período 2
    // G e H: largura default
    ws.getColumn(9).width = 13;  // I  - Cresc. %
    ws.getColumn(10).width = 16;  // J  - Ant. período 3
    // K e L: largura default
    ws.getColumn(13).width = 13;  // M  - Cresc. %

    // Estilos — idênticos ao modelo PLANILHA_EXPORTADA_MODELO_.xlsx
    const FONT = 'Aptos Narrow';
    const FONT_SZ = 11;
    const NAVY_FILL = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1A3A6B' } };
    const GREEN_FILL = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFC6EFCE' } };
    const RED_FILL = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFC7CE' } };
    const THIN_B = () => ({ style: 'thin', color: { argb: 'FFD0D7E3' } });
    const ALL_BORDER = { top: THIN_B(), left: THIN_B(), bottom: THIN_B(), right: THIN_B() };
    const FMT_CONTABIL = '_("R$"* #,##0.00_);_("R$"* \\(#,##0.00\\);_("R$"* "-"??_);_(@_)';
    const isRS = mode === 'RS';

    // Header (fundo navy, texto branco, centralizado)
    const setHdr = (cell, v) => {
        cell.value = v;
        cell.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: FONT_SZ, name: FONT };
        cell.fill = NAVY_FILL;
        cell.alignment = { horizontal: 'center', vertical: 'middle' };
        cell.border = ALL_BORDER;
    };
    // Label (col A — navy bold, alinhado à esquerda, sem fundo)
    const setLbl = (cell, v) => {
        cell.value = v;
        cell.font = { bold: true, color: { argb: 'FF1A3A6B' }, size: FONT_SZ, name: FONT };
        cell.alignment = { horizontal: 'left', vertical: 'middle' };
        cell.border = ALL_BORDER;
    };
    // Dado cadastral (texto normal, alinhado à esquerda)
    const setDat = (cell, v) => {
        cell.value = v;
        cell.font = { bold: false, size: FONT_SZ, name: FONT };
        cell.alignment = { horizontal: 'left', vertical: 'middle', wrapText: false };
        cell.border = ALL_BORDER;
    };
    // Número (bold=false no modelo, centralizado, formato contábil em RS)
    const setNum = (cell, v) => {
        cell.value = toNum(v);
        cell.font = { bold: false, size: FONT_SZ, name: FONT };
        cell.alignment = { horizontal: 'center', vertical: 'middle' };
        cell.border = ALL_BORDER;
        if (isRS) cell.numFmt = FMT_CONTABIL;
    };
    // GAP (bold, cor e fundo verde/vermelho, formato contábil em RS)
    const setGap = (cell, v) => {
        const val = toNum(v);
        cell.value = val;
        const pos = val >= 0;
        cell.font = { bold: true, color: { argb: pos ? 'FF276221' : 'FF9C0006' }, size: FONT_SZ, name: FONT };
        cell.fill = pos ? GREEN_FILL : RED_FILL;
        cell.alignment = { horizontal: 'center', vertical: 'middle' };
        cell.border = ALL_BORDER;
        if (isRS) cell.numFmt = FMT_CONTABIL;
    };
    // Percentual (bold, cor e fundo verde/vermelho, string)
    const setPct = (cell, v, g) => {
        const pos = g == null ? true : g >= 0;
        cell.value = v || '';
        cell.font = { bold: true, color: { argb: pos ? 'FF276221' : 'FF9C0006' }, size: FONT_SZ, name: FONT };
        cell.fill = pos ? GREEN_FILL : RED_FILL;
        cell.alignment = { horizontal: 'center', vertical: 'middle' };
        cell.border = ALL_BORDER;
    };

    // Helper: aplica borda fina em todas as células de uma linha (colunas 1 a 13)
    const applyRowBorders = (rowNum) => {
        const row = ws.getRow(rowNum);
        for (let c = 1; c <= 13; c++) {
            row.getCell(c).border = ALL_BORDER;
        }
    };

    // Campos cadastrais R1-R9 (altura default, mescla B:M)
    // IMPORTANTE: bordas devem ser aplicadas em todas as células ANTES de mesclar,
    // pois mergeCells preserva apenas a borda da célula superior-esquerda da mesclagem.
    const cadFields = [
        ['CNPJ', maskCNPJ(p.cnpj)],
        ['Razao Social', info ? (info.nome_fantasia || info.razao_social || p.razao) : p.razao],
        ['Situacao', info ? (info.situacao || '') : ''],
        ['Endereco', endFull],
        ['Telefone', info ? (info.telefone || '') : ''],
        ['Cidade', p.cidade + (p.uf ? ' / ' + p.uf : '')],
        ['Bairro', p.bairro || ''],
        ['Bricks', p.bricks.join(', ')],
        ['Setor(es)', p.setores.join(', ')],
    ];
    cadFields.forEach(([l, v], i) => {
        const rowNum = i + 1;
        const row = ws.getRow(rowNum);
        // Aplica bordas em todas as 13 colunas ANTES de mesclar
        for (let c = 1; c <= 13; c++) {
            row.getCell(c).border = ALL_BORDER;
        }
        setLbl(row.getCell(1), l);
        setDat(row.getCell(2), v);
        ws.mergeCells(rowNum, 2, rowNum, 13);
    });

    // R10: linha vazia de separação — aplica bordas em todas as colunas
    applyRowBorders(10);

    // Cabeçalho períodos R11 (height default)
    const r11 = ws.getRow(11);
    ['Periodo', 'Ano Anterior (' + modeLbl + ')', 'Atual (' + modeLbl + ')', 'GAP (' + modeLbl + ')', 'Crescimento %']
        .forEach((h, c) => setHdr(r11.getCell(c + 1), h));
    // Aplica bordas nas colunas F-M que ficam além dos 5 cabeçalhos de período
    for (let c = 6; c <= 13; c++) {
        r11.getCell(c).border = ALL_BORDER;
    }

    // Dados períodos R12-R14 (height default)
    [
        ['MAT', p.mat_prev, p.mat_cur, gapMAT, gMAT],
        ['YTD', p.ytd_prev, p.ytd_cur, gapYTD, gYTD],
        ['TRI', p.tri_prev, p.tri_cur, gapTRI, gTRI],
    ].forEach(([lb, ant, cur, gp, g], i) => {
        const row = ws.getRow(12 + i);
        setLbl(row.getCell(1), lb);
        setNum(row.getCell(2), ant);
        setNum(row.getCell(3), cur);
        setGap(row.getCell(4), gp);
        setPct(row.getCell(5), fmtPct2(g), g);
        // Colunas F-M além dos dados de período recebem borda vazia
        for (let c = 6; c <= 13; c++) {
            row.getCell(c).border = ALL_BORDER;
        }
    });

    // R15: linha vazia de separação — aplica bordas em todas as colunas
    applyRowBorders(15);

    // Cabeçalho produtos R16 (height default)
    const r16 = ws.getRow(16);
    ['Marca', 'MAT Ant.', 'MAT', 'GAP MAT', 'Cresc. MAT %',
        'YTD Ant.', 'YTD', 'GAP YTD', 'Cresc. YTD %',
        'TRI Ant.', 'TRI', 'GAP TRI', 'Cresc. TRI %']
        .forEach((h, c) => setHdr(r16.getCell(c + 1), h));

    // Linhas de produtos R17+ (height default)
    prodList.forEach((pr, i) => {
        const row = ws.getRow(17 + i);
        const gm = pr.mat_prev > 0 ? (pr.mat_cur - pr.mat_prev) / pr.mat_prev : null;
        const gy = pr.ytd_prev > 0 ? (pr.ytd_cur - pr.ytd_prev) / pr.ytd_prev : null;
        const gt = pr.tri_prev > 0 ? (pr.tri_cur - pr.tri_prev) / pr.tri_prev : null;
        setLbl(row.getCell(1), pr.marca);
        setNum(row.getCell(2), pr.mat_prev);
        setNum(row.getCell(3), pr.mat_cur);
        setGap(row.getCell(4), pr.mat_cur - pr.mat_prev);
        setPct(row.getCell(5), fmtPct2(gm), gm);
        setNum(row.getCell(6), pr.ytd_prev);
        setNum(row.getCell(7), pr.ytd_cur);
        setGap(row.getCell(8), pr.ytd_cur - pr.ytd_prev);
        setPct(row.getCell(9), fmtPct2(gy), gy);
        setNum(row.getCell(10), pr.tri_prev);
        setNum(row.getCell(11), pr.tri_cur);
        setGap(row.getCell(12), pr.tri_cur - pr.tri_prev);
        setPct(row.getCell(13), fmtPct2(gt), gt);
    });

    const buffer = await wb.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'PDV_' + maskCNPJ(p.cnpj).replace(/[./\-]/g, '') + '_' + new Date().toISOString().slice(0, 10) + '.xlsx';
    a.click();
    URL.revokeObjectURL(url);
    toast('Excel exportado com sucesso!');
}

function fmtBRDate(s) {
    if (!s) return '';
    // ISO yyyy-mm-dd ou dd/mm/yyyy
    if (/^\d{4}-\d{2}-\d{2}/.test(s)) {
        const [y, m, d] = s.slice(0, 10).split('-');
        return `${d}/${m}/${y}`;
    }
    return s;
}

function escapeHTML(s) {
    return String(s == null ? '' : s)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/* ----- Atalho fixo no header (busca CNPJ ou Brick) ----- */
function wireCnpjQuickSearch() {
    const inp = $('cnpjQuickInput');
    const btn = $('cnpjQuickBtn');
    if (!inp || !btn) return;

    // Máscara CNPJ apenas quando o usuário digita >=10 dígitos sem letras
    inp.addEventListener('input', () => {
        const raw = inp.value;
        const hasLetters = /[a-zA-Z]/.test(raw);
        const d = onlyDigits(raw);
        if (hasLetters || d.length < 11) return;
        const c = d.slice(0, 14);
        let out = c;
        if (c.length > 12) out = `${c.slice(0, 2)}.${c.slice(2, 5)}.${c.slice(5, 8)}/${c.slice(8, 12)}-${c.slice(12)}`;
        else if (c.length > 8) out = `${c.slice(0, 2)}.${c.slice(2, 5)}.${c.slice(5, 8)}/${c.slice(8)}`;
        else if (c.length > 5) out = `${c.slice(0, 2)}.${c.slice(2, 5)}.${c.slice(5)}`;
        else if (c.length > 2) out = `${c.slice(0, 2)}.${c.slice(2)}`;
        inp.value = out;
    });

    const fire = () => {
        const raw = (inp.value || '').trim();
        if (!raw) { toast('Digite um CNPJ ou número/nome do Brick.'); return; }
        const digits = onlyDigits(raw);
        const hasLetters = /[a-zA-Z]/.test(raw);
        // CNPJ completo (14 dígitos sem letras) → modal de farmácia
        if (digits.length === 14 && !hasLetters) { openPDVModal(digits); return; }
        // Caso contrário, busca por Brick (numérico ou nome)
        openBrickModal(raw);
    };
    btn.addEventListener('click', fire);
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); fire(); } });
}

/* ----- Modal de listagem de PDVs por Brick ----- */
function findBricks(query) {
    const mode = UI.unitMode;
    const list = PDV.pdvsByValueMode[mode] || [];
    if (!list.length) return [];
    const brickSet = new Set();
    list.forEach(p => p.bricks.forEach(b => brickSet.add(b)));
    const allBricks = [...brickSet];
    const q = String(query || '').trim();
    const qDigits = onlyDigits(q);
    const qNorm = norm(q);
    // 1) Match exato pelo código numérico (com ou sem zeros)
    const numericMatches = qDigits ? allBricks.filter(b => {
        const code = (b.split(' - ')[0] || '').trim();
        const codeDigits = onlyDigits(code);
        return codeDigits === qDigits || codeDigits.endsWith(qDigits) || codeDigits === qDigits.padStart(7, '0');
    }) : [];
    if (numericMatches.length) return numericMatches;
    // 2) Match parcial pelo nome do brick
    if (qNorm) {
        const textMatches = allBricks.filter(b => norm(b).includes(qNorm));
        if (textMatches.length) return textMatches;
    }
    // 3) Fallback: prefixo numérico (ex: 8 → bricks que começam com 0008)
    if (qDigits) {
        return allBricks.filter(b => onlyDigits(b.split(' - ')[0] || '').includes(qDigits));
    }
    return [];
}

function openBrickModal(query) {
    const modal = $('pdvModal');
    const body = $('pdvModalBody');
    const title = $('pdvModalTitle');
    if (!modal || !body) return;
    const matches = findBricks(query);
    if (!matches.length) {
        toast('Nenhum brick encontrado para "' + query + '". Carregue a planilha de PDVs ou tente outro número/nome.');
        return;
    }
    if (matches.length === 1) {
        renderBrickModal(matches[0]);
        modal.classList.add('open');
        return;
    }
    // Múltiplos matches → tela de escolha
    modal.classList.add('open');
    title.innerHTML = `Bricks encontrados <span class="pdv-title-pill">${matches.length}</span>`;
    let html = `<div class="brick-picker"><div class="brick-picker-h">Selecione o brick desejado:</div>`;
    matches.forEach(b => {
        html += `<button class="brick-picker-item" data-brick="${escapeHTML(b)}">${escapeHTML(b)}</button>`;
    });
    html += `</div>`;
    body.innerHTML = html;
    body.querySelectorAll('.brick-picker-item').forEach(btn => {
        btn.onclick = () => renderBrickModal(btn.getAttribute('data-brick'));
    });
}

function renderBrickModal(brickStr) {
    const modal = $('pdvModal');
    const body = $('pdvModalBody');
    const title = $('pdvModalTitle');
    const mode = UI.unitMode;
    const modeLbl = mode === 'RS' ? 'R$' : 'Un.';
    const list = (PDV.pdvsByValueMode[mode] || []).filter(p => p.bricks.includes(brickStr));
    const code = brickStr.split(' - ')[0] || brickStr;
    const name = brickStr.replace(code + ' - ', '');
    title.innerHTML = `Brick · <span class="pdv-title-code">${escapeHTML(code)}</span> <span class="pdv-title-sep">·</span> <span class="pdv-title-name">${escapeHTML(name)}</span>`;

    // Totais agregados do brick
    let totMat = 0, totMatPrev = 0, totYtd = 0, totTri = 0, totProds = 0;
    list.forEach(p => {
        // Soma só os produtos cujo brick == brickStr
        p.products.forEach(pr => {
            if (pr.brick === brickStr) {
                totMat += pr.mat_cur; totMatPrev += pr.mat_prev; totYtd += pr.ytd_cur; totTri += pr.tri_cur; totProds++;
            }
        });
    });
    const gMAT = totMatPrev > 0 ? (totMat - totMatPrev) / totMatPrev : null;
    const subG = gMAT == null ? '<div class="pdv-kpi-sub">—</div>' : `<div class="pdv-kpi-sub ${gMAT < 0 ? 'neg' : ''}">${fmtPct(gMAT)}</div>`;

    // Sort PDVs por MAT do brick (desc)
    const rows = list.map(p => {
        let mC = 0, mP = 0, yC = 0, tC = 0;
        p.products.forEach(pr => { if (pr.brick === brickStr) { mC += pr.mat_cur; mP += pr.mat_prev; yC += pr.ytd_cur; tC += pr.tri_cur; } });
        const g = mP > 0 ? (mC - mP) / mP : null;
        return { ...p, _mat: mC, _matPrev: mP, _ytd: yC, _tri: tC, _g: g };
    }).sort((a, b) => b._mat - a._mat);

    let kpisHTML = `<div class="pdv-kpis pdv-kpis-tight">
        <div class="pdv-kpi"><div class="pdv-kpi-lbl">PDVs</div><div class="pdv-kpi-val">${rows.length}</div><div class="pdv-kpi-sub">com venda</div></div>
        <div class="pdv-kpi"><div class="pdv-kpi-lbl">MAT (${modeLbl})</div><div class="pdv-kpi-val">${fmtValue(totMat)}</div>${subG}</div>
        <div class="pdv-kpi"><div class="pdv-kpi-lbl">YTD (${modeLbl})</div><div class="pdv-kpi-val">${fmtValue(totYtd)}</div></div>
        <div class="pdv-kpi"><div class="pdv-kpi-lbl">TRI (${modeLbl})</div><div class="pdv-kpi-val">${fmtValue(totTri)}</div></div>
    </div>`;

    let tbl = `<div class="pdv-card"><div class="pdv-card-h"><span class="pdv-card-h-ico">🏪</span> Farmácias deste brick <span class="pdv-source-badge">${rows.length} PDV(s)</span></div>
        <table class="pdv-prod-tbl pdv-brick-pdv-tbl"><thead><tr>
            <th>CNPJ</th><th>Razão Social</th><th>Cidade / Bairro</th>
            <th class="r">MAT Ano Ant.</th><th class="r">MAT</th><th class="r">YTD</th><th class="r">TRI</th><th class="r">Cresc.</th>
        </tr></thead><tbody>`;
    rows.forEach(p => {
        const gCls = p._g == null ? '' : (p._g >= 0 ? 'pdv-growth-pos' : 'pdv-growth-neg');
        tbl += `<tr class="brick-pdv-row" data-cnpj="${p.cnpj}" title="Abrir detalhes da farmácia">
            <td><code>${maskCNPJ(p.cnpj)}</code></td>
            <td><strong>${escapeHTML(p.razao)}</strong></td>
            <td><span style="color:#1f2937;">${escapeHTML(p.cidade)}${p.uf ? '/' + p.uf : ''}</span>${p.bairro ? '<br><small style="color:#6b7a99;">' + escapeHTML(p.bairro) + '</small>' : ''}</td>
            <td class="r">${fmtValue(p._matPrev)}</td>
            <td class="r"><strong>${fmtValue(p._mat)}</strong></td>
            <td class="r">${fmtValue(p._ytd)}</td>
            <td class="r">${fmtValue(p._tri)}</td>
            <td class="r ${gCls}">${p._g == null ? '—' : fmtPct(p._g)}</td>
        </tr>`;
    });
    tbl += `</tbody></table></div>`;

    body.innerHTML = kpisHTML + tbl;
    body.querySelectorAll('.brick-pdv-row').forEach(tr => {
        tr.onclick = () => openPDVModal(tr.getAttribute('data-cnpj'));
    });
}

/* ----- Fechar modal PDV ----- */
function wirePDVModalClose() {
    const modal = $('pdvModal');
    const closeBtn = $('pdvModalClose');
    if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('open'));
    if (modal) modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });
}

/* ----- BOOTSTRAP DO MÓDULO PDV ----- */
document.addEventListener('DOMContentLoaded', () => {
    loadCnpjCache();
    loadPDVData();
    wireCnpjQuickSearch();
    wirePDVModalClose();

    // Hook: re-render aba PDV quando trocar Un/R$
    const origSetUnit = window.setUnitMode;
    window.setUnitMode = function (mode) {
        origSetUnit(mode);
        if (document.querySelector('.tab[data-tab="pdv"].active')) renderPDV();
    };
});


/* ============================================================
   smartUpload — detecta o tipo de planilha e roteia
   - Planilha de PDVs (UNIDADES POR PDVS): tem coluna "PDV" no cabeçalho
   - Planilha consolidada (DDD UNIDADES / DDD REAIS): tem coluna "Mercado"/"Produto"
   Roteamento por arquivo (cada um vai para seu destino).
   ============================================================ */
async function smartUpload(filesIn, opts) {
    const files = Array.from(filesIn || []);
    if (!files.length) return;
    const consolidatedFiles = [];
    const pdvFiles = [];

    for (const f of files) {
        try {
            const kind = await detectFileKind(f);
            if (kind === 'pdv') pdvFiles.push(f);
            else if (kind === 'consolidated') consolidatedFiles.push(f);
            else {
                // ambíguo: tenta pelo nome
                const nm = (f.name || '').toLowerCase();
                if (nm.includes('pdv')) pdvFiles.push(f);
                else consolidatedFiles.push(f);
            }
        } catch (e) {
            console.error('detectFileKind falhou para', f.name, e);
            consolidatedFiles.push(f);
        }
    }

    // Processa primeiro o consolidado (porque ativa a tela do dashboard)
    if (consolidatedFiles.length) {
        await init(consolidatedFiles, opts);
    }
    if (pdvFiles.length) {
        // Garante que a tela do dashboard está visível
        const upView = $('uploadView'); const dashView = $('dashView');
        const hadConsolidated = DB.rows && DB.rows.length > 0;
        if (upView && dashView && getComputedStyle(upView).display !== 'none' && !hadConsolidated) {
            upView.style.display = 'none';
            dashView.style.display = 'block';
            const kpiStrip = $('kpiStrip'); if (kpiStrip) kpiStrip.style.display = !hadConsolidated ? 'none' : 'flex';
        }
        await handlePDVUpload(pdvFiles, opts);
        // Atualiza dropdowns globais (Setor / Mercado) com setores/marcas dos PDVs
        if (typeof rebuildSelectors === 'function') rebuildSelectors();
        // Se não havia base consolidada, ativa diretamente a aba PDV
        if (!hadConsolidated) {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            const pdvTab = document.querySelector('.tab[data-tab="pdv"]');
            if (pdvTab) pdvTab.classList.add('active');
            switchTab('pdv');
        }
        toast('Planilha de PDVs carregada! Acesse a aba "PDVs por Brick" para visualizar.');
    }
}

async function detectFileKind(file) {
    try {
        const data = await file.arrayBuffer();
        const wb = XLSX.read(data, { type: 'array' });
        const ws = wb.Sheets[wb.SheetNames[0]];
        if (!ws) return 'unknown';
        const aoa = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });
        if (!aoa.length) return 'unknown';
        // Inspeciona até as 6 primeiras linhas para achar o cabeçalho
        for (let i = 0; i < Math.min(6, aoa.length); i++) {
            const row = (aoa[i] || []).map(c => String(c || '').toLowerCase());
            const hasPdv = row.some(c => /\bpdv\b/.test(c));
            const hasBrick = row.some(c => /brick/.test(c));
            const hasMkt = row.some(c => /mercado/.test(c));
            const hasProd = row.some(c => /produto/.test(c));
            if (hasPdv && hasBrick) return 'pdv';
            if (hasMkt && (hasProd || hasBrick)) return 'consolidated';
        }
        return 'unknown';
    } catch (e) {
        return 'unknown';
    }
}



/* PROJ_MODULE_PLACEHOLDER */

/* ════════════════════════════════════════
   RESULTADO PROJETADO — MÓDULO INLINE v3
   • Qualquer planilha é opcional — o dashboard exibe o que tiver
   • Bricks adicionados como 4ª dimensão
   • Toolbar da tabela congela abaixo dos totais (sticky no CSS)
════════════════════════════════════════ */

const PROJ = {
    appData: null,
    allRows: [],
    filteredRows: [],
    currentTab: 'all',
    currentPage: 1,
    PAGE_SIZE: 50,
    STORAGE_KEY: 'proj_dashboard_v4',
    periodMode: 'range',    // 'single' | 'range'
    activeShortcut: null    // 'MES' | 'TRI' | 'YTD' | 'MAT' | null
};

/* ── helpers de período ──────────────────────────────────────────── */

// Soma os valores de uma lista de períodos para uma linha
function projSumPeriods(vals, periods) {
    return periods.reduce((s, p) => s + (vals[p] || 0), 0);
}

// Desloca um período YYYYMM em N meses
function projShiftPeriod(yyyymm, months) {
    const y = parseInt(yyyymm.slice(0, 4));
    const m = parseInt(yyyymm.slice(4, 6)) - 1 + months;
    const date = new Date(y, m, 1);
    return String(date.getFullYear()) + String(date.getMonth() + 1).padStart(2, '0');
}

// Retorna todos os períodos disponíveis entre from e to (inclusive)
function projPeriodsInRange(from, to, available) {
    return available.filter(p => p >= from && p <= to).sort();
}

// Desloca um intervalo inteiro 12 meses para trás (mesmo período ano anterior)
function projShiftRangeBack12(periods) {
    return periods.map(p => projShiftPeriod(p, -12));
}

/* ── toggle de modo ─────────────────────────────────────────────── */
function projSetMode(mode, skipRerender) {
    PROJ.periodMode = mode;
    const isRange = mode === 'range';
    const rc = document.getElementById('proj-range-controls');
    const sc = document.getElementById('proj-single-controls');
    if (rc) rc.style.display = isRange ? 'flex' : 'none';
    if (sc) sc.style.display = !isRange ? 'flex' : 'none';
    document.getElementById('proj-btnModeRange')?.classList.toggle('active', isRange);
    document.getElementById('proj-btnModeSingle')?.classList.toggle('active', !isRange);
    PROJ.currentPage = 1;
    if (!skipRerender) projRerender();
}

/* ── atalhos removidos — períodos livres via A/B ── */
function projApplyShortcut(shortcut) { /* não utilizado */ }

/* ── obtém períodos do intervalo atual ─────────────────────────── */
function projGetRangePeriods() {
    const all = PROJ.appData ? [...PROJ.appData.periods].sort() : [];
    const aFrom = (document.getElementById('proj-filterAFrom') || {}).value || '';
    const aTo = (document.getElementById('proj-filterATo') || {}).value || '';
    const bFrom = (document.getElementById('proj-filterBFrom') || {}).value || '';
    const bTo = (document.getElementById('proj-filterBTo') || {}).value || '';
    const base = projPeriodsInRange(aFrom, aTo, all);
    const comp = projPeriodsInRange(bFrom, bTo, all);
    return { comp, base };
}

/* ── label do intervalo ────────────────────────────────────────── */
function projRangeLabel(periods) {
    if (!periods.length) return '—';
    if (periods.length === 1) return projPeriodLabel(periods[0]);
    return projPeriodLabel(periods[0]) + ' – ' + projPeriodLabel(periods[periods.length - 1]);
}

/* ── abrir / fechar view ───────────────────── */
function projUpdateStickyOffsets() {
    const hdr = document.getElementById('mainHeader');
    const backBar = document.querySelector('.proj-back-bar');
    const sticky = document.getElementById('proj-stickyHeader');
    const pv = document.getElementById('projecaoView');
    const mainEl = document.getElementById('proj-main');
    if (!hdr) return;
    const hdrH = hdr.offsetHeight;
    const backH = backBar ? backBar.offsetHeight : 34;
    const stickyH = sticky ? sticky.offsetHeight : 0;
    const total = hdrH + backH + stickyH;
    if (pv) pv.style.paddingTop = total + 'px';
    if (mainEl) mainEl.style.paddingTop = '16px';
    /* v6.16 — publica a altura do bloco fixo como variável CSS para que o
       cabeçalho de colunas sticky (.proj-colhead-sticky) grude exatamente abaixo
       desse bloco quando a tabela principal entra na viewport. */
    document.documentElement.style.setProperty('--proj-sticky-top', total + 'px');
}

function openProjecaoView() {
    document.getElementById('uploadView').style.display = 'none';
    document.getElementById('dashView').style.display = 'none';
    document.getElementById('kpiStrip').style.display = 'none';
    // Ocultar botões do header que não têm função nessa tela
    ['periodGrp','unitGrp','datasetStatus','btnUpload','btnClearData',
     'btnClearHistory','historyIndicator','btnProjecao','btnEnviar'
    ].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    // Ocultar a linha inferior do header inteira e mover busca CNPJ para hdr-right
    const hdrBottom = document.querySelector('.hdr-bottom');
    const hdrRight  = document.querySelector('.hdr-right');
    const cnpjWrap  = document.querySelector('.cnpj-quick-wrap');
    if (hdrBottom) hdrBottom.style.display = 'none';
    if (cnpjWrap && hdrRight) {
        cnpjWrap.dataset.origParent = 'hdr-bottom';
        hdrRight.appendChild(cnpjWrap);
    }
    // Mostrar título central
    const ct = document.getElementById('hdrProjCenterTitle');
    if (ct) ct.style.display = 'block';
    // Compactar header (oculta hdr-bottom)
    const hdr = document.getElementById('mainHeader');
    if (hdr) {
        hdr.classList.add('proj-mode');
        // Atualiza --hdr-h para a nova altura (sem hdr-bottom ~38px)
        requestAnimationFrame(() => {
            document.documentElement.style.setProperty('--hdr-h', hdr.offsetHeight + 'px');
            if (typeof recomputeStickyOffsets === 'function') recomputeStickyOffsets();
        });
    }
    const pv = document.getElementById('projecaoView');
    pv.style.display = 'block';
    window.scrollTo(0, 0);
    try {
        const saved = localStorage.getItem(PROJ.STORAGE_KEY);
        if (saved) {
            const d = JSON.parse(saved);
            if (d && d.data && d.periods && d.periods.length) {
                PROJ.appData = d;
                projInitDash();
                return;
            }
        }
    } catch (e) { }
}

function closeProjecaoView() {
    document.getElementById('projecaoView').style.display = 'none';
    // Restaurar botões do header
    ['periodGrp','unitGrp','datasetStatus','btnUpload','btnClearData',
     'btnClearHistory','btnProjecao','btnEnviar'
    ].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = '';
    });
    // Restaurar linha inferior e devolver busca CNPJ ao hdr-bottom
    const hdrBottom2 = document.querySelector('.hdr-bottom');
    const cnpjWrap2  = document.querySelector('.cnpj-quick-wrap');
    if (hdrBottom2) hdrBottom2.style.display = '';
    if (cnpjWrap2 && cnpjWrap2.dataset.origParent === 'hdr-bottom' && hdrBottom2) {
        hdrBottom2.appendChild(cnpjWrap2);
        delete cnpjWrap2.dataset.origParent;
    }
    // Esconder título central
    const ct = document.getElementById('hdrProjCenterTitle');
    if (ct) ct.style.display = 'none';
    // Restaurar header ao tamanho original
    const hdr2 = document.getElementById('mainHeader');
    if (hdr2) {
        hdr2.classList.remove('proj-mode');
        requestAnimationFrame(() => {
            document.documentElement.style.setProperty('--hdr-h', hdr2.offsetHeight + 'px');
            if (typeof recomputeStickyOffsets === 'function') recomputeStickyOffsets();
        });
    }
    // historyIndicator só aparece se houver dados salvos — deixa o estado original
    const hi = document.getElementById('historyIndicator');
    if (hi) hi.style.display = hi.dataset.wasVisible === 'true' ? '' : 'none';
    const hasData = DB.rows && DB.rows.length > 0;
    document.getElementById('uploadView').style.display = hasData ? 'none' : 'block';
    document.getElementById('dashView').style.display = hasData ? 'block' : 'none';
    document.getElementById('kpiStrip').style.display = hasData ? 'flex' : 'none';
}

/* ── helpers ──────────────────────────── */
function projFmtBRL(n) {
    if (n == null) return '—';
    return 'R$ ' + Math.abs(n).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function projFmtPct(n) {
    if (n == null) return '—';
    return (n >= 0 ? '+' : '') + (n * 100).toFixed(2) + '%';
}
function projPeriodLabel(p) {
    if (!p) return '';
    const s = String(p);
    if (s.length === 6) {
        const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
        const m = parseInt(s.slice(4, 6), 10) - 1;
        return (months[m] || s.slice(4)) + '/' + s.slice(2, 4);
    }
    return s;
}

/* ── detector de tipo de planilha ─────── */
function projDetectType(headers) {
    const h = headers.map(x => String(x || '').toLowerCase().trim());
    const first = h[0] || '';
    if (/^pdv|farmac/.test(first)) return 'pdv';
    if (/^cidade|munic/.test(first)) return 'cidade';
    if (/^marca/.test(first)) return 'marca';
    if (/^brick/.test(first)) return 'brick';
    // fallback pelo slot ativo (passado como hint)
    return null;
}

/* ── parse XLSX → {name: {period: value}} ─ */
function projParseXLSX(file, typeHint) {
    return new Promise((res, rej) => {
        const reader = new FileReader();
        reader.onload = e => {
            try {
                const wb = XLSX.read(e.target.result, { type: 'array', cellDates: true });
                const out = {};
                let detectedType = typeHint;
                for (const sn of wb.SheetNames) {
                    const ws = wb.Sheets[sn];
                    const raw = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });
                    if (raw.length < 2) continue;
                    // detecta linha de cabeçalho
                    let hIdx = 0;
                    for (let i = 0; i < Math.min(5, raw.length); i++) {
                        const r = raw[i].map(c => String(c || '').toLowerCase());
                        if (r.some(c => c.includes('periodo') || c.includes('período') || /^\d{6}$/.test(c)) ||
                            r.some(c => ['pdv', 'farmac', 'cidade', 'marca', 'brick'].some(k => c.startsWith(k)))) {
                            hIdx = i; break;
                        }
                    }
                    const hdrs = raw[hIdx].map(c => String(c || '').trim());
                    if (!detectedType) detectedType = projDetectType(hdrs);

                    const dateObjToPeriod = d => {
                        if (!(d instanceof Date)) return '';
                        return d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0');
                    };
                    // pivotado? (colunas 2+ são períodos)
                    const pivotCols = [];
                    hdrs.forEach((h, idx) => {
                        if (idx === 0) return;
                        const cell = raw[hIdx][idx];
                        if (cell instanceof Date) { pivotCols.push({ idx, period: dateObjToPeriod(cell) }); return; }
                        const m = String(h).match(/^(\d{4})[-\/]?(\d{2})$/);
                        if (m) { pivotCols.push({ idx, period: m[1] + m[2] }); return; }
                        if (/^\d{6}$/.test(h)) pivotCols.push({ idx, period: h });
                    });
                    const colPeriod = hdrs.findIndex((h, i) => i > 0 && /periodo|período/i.test(h));
                    const colValue = hdrs.findIndex((h, i) => i > 0 && /valor|value|vendas|amount|brl|r\$/i.test(h));

                    if (pivotCols.length > 0) {
                        for (let i = hIdx + 1; i < raw.length; i++) {
                            const row = raw[i]; if (!Array.isArray(row)) continue;
                            const name = String(row[0] || '').trim();
                            if (!name || /^total|^grand/i.test(name)) continue;
                            pivotCols.forEach(({ idx, period }) => {
                                const v = row[idx]; if (v === '' || v == null) return;
                                const num = typeof v === 'number' ? v : parseFloat(String(v).replace(',', '.'));
                                if (isNaN(num)) return;
                                if (!out[name]) out[name] = {};
                                out[name][period] = (out[name][period] || 0) + num;
                            });
                        }
                    } else {
                        // formato longo: col 0 = nome, colPeriod = período, colValue = valor
                        const cp = colPeriod >= 0 ? colPeriod : 1;
                        const cv = colValue >= 0 ? colValue : 2;
                        for (let i = hIdx + 1; i < raw.length; i++) {
                            const row = raw[i]; if (!Array.isArray(row)) continue;
                            const name = String(row[0] || '').trim();
                            if (!name || /^total|^grand/i.test(name)) continue;
                            const pr = row[cp];
                            let period = pr instanceof Date ? dateObjToPeriod(pr) : String(pr).replace(/[^0-9]/g, '').slice(0, 6);
                            if (!period || period.length !== 6) continue;
                            const val = typeof row[cv] === 'number' ? row[cv] : parseFloat(String(row[cv] || '0').replace(',', '.'));
                            if (isNaN(val)) continue;
                            if (!out[name]) out[name] = {};
                            out[name][period] = (out[name][period] || 0) + val;
                        }
                    }
                }
                if (!Object.keys(out).length) { rej(new Error('Nenhum dado encontrado')); return; }
                res({ data: out, type: detectedType || typeHint });
            } catch (err) { rej(err); }
        };
        reader.onerror = rej;
        reader.readAsArrayBuffer(file);
    });
}

/* ── upload slots ─────────────────────── */
const projLoadedFiles = { pdv: null, cidade: null, marca: null, brick: null };

function projCheckCanProcess() {
    const any = Object.values(projLoadedFiles).some(v => v !== null);
    const btnProc = document.getElementById('proj-btnProcess');
    if (btnProc) btnProc.disabled = !any;
}

function projSetupSlots() {
    ['pdv', 'cidade', 'marca', 'brick'].forEach(type => {
        const slot = document.getElementById('proj-slot-' + type);
        const inp = document.getElementById('proj-file-' + type);
        if (!slot || !inp) return;
        slot.addEventListener('click', () => inp.click());
        slot.addEventListener('dragover', e => { e.preventDefault(); slot.classList.add('drag-over'); });
        slot.addEventListener('dragleave', () => slot.classList.remove('drag-over'));
        slot.addEventListener('drop', e => {
            e.preventDefault(); slot.classList.remove('drag-over');
            if (e.dataTransfer.files[0]) projDoLoad(type, e.dataTransfer.files[0]);
        });
        inp.addEventListener('change', e => { if (e.target.files[0]) projDoLoad(type, e.target.files[0]); });
    });

    const btnProc = document.getElementById('proj-btnProcess');
    if (btnProc) btnProc.addEventListener('click', projProcess);

    const btnChange = document.getElementById('proj-btnChangeFiles');
    if (btnChange) btnChange.addEventListener('click', () => {
        localStorage.removeItem(PROJ.STORAGE_KEY);
        PROJ.appData = null;
        Object.keys(projLoadedFiles).forEach(k => projLoadedFiles[k] = null);
        document.getElementById('proj-dashSection').style.display = 'none';
        document.getElementById('proj-uploadSection').style.display = '';
        window.scrollTo(0, 0);
        document.getElementById('projecaoView').scrollTop = 0;
        // reset slots
        ['pdv', 'cidade', 'marca', 'brick'].forEach(t => {
            const slot = document.getElementById('proj-slot-' + t);
            if (slot) slot.classList.remove('loaded');
            const nm = document.getElementById('proj-slot-' + t + '-name');
            if (nm) nm.textContent = 'Clique ou arraste';
            const st = document.getElementById('proj-slot-' + t + '-status');
            if (st) st.textContent = 'Opcional';
            const ck = document.getElementById('proj-slot-' + t + '-check');
            if (ck) ck.style.display = 'none';
        });
        projCheckCanProcess();
    });

    const btnCSV = document.getElementById('proj-btnExportCSV');
    if (btnCSV) btnCSV.addEventListener('click', projExportCSV);

    document.querySelectorAll('#proj-tabBtns .proj-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // v6.15 — recalcula offset após troca de aba (o bloco fixo pode mudar de altura)
            requestAnimationFrame(() => projUpdateStickyOffsets());
            PROJ.currentTab = btn.dataset.tab;
            PROJ.currentPage = 1;
            document.querySelectorAll('#proj-tabBtns .proj-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // sync filterType select
            const ft = document.getElementById('proj-filterType');
            if (ft) ft.value = btn.dataset.tab;
            projRerender();
        });
    });

    ['proj-filterType', 'proj-filterBase', 'proj-filterComp', 'proj-filterMetaType'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', () => {
            // sync tab buttons with filterType
            if (id === 'proj-filterType') {
                const v = el.value;
                PROJ.currentTab = v;
                PROJ.currentPage = 1;
                document.querySelectorAll('#proj-tabBtns .proj-tab-btn').forEach(b => {
                    b.classList.toggle('active', b.dataset.tab === v);
                });
            }
            PROJ.currentPage = 1;
            projRerender();
        });
    });
    const ft = document.getElementById('proj-filterTarget');
    if (ft) ft.addEventListener('input', () => { PROJ.currentPage = 1; projRerender(); });
    const sb = document.getElementById('proj-searchBox');
    if (sb) sb.addEventListener('input', () => { PROJ.currentPage = 1; projRerender(); });
}

async function projDoLoad(type, file) {
    const nameEl = document.getElementById('proj-slot-' + type + '-name');
    const statusEl = document.getElementById('proj-slot-' + type + '-status');
    if (nameEl) nameEl.textContent = file.name;
    if (statusEl) statusEl.textContent = 'Lendo...';
    try {
        const result = await projParseXLSX(file, type);
        projLoadedFiles[type] = result.data;
        const slot = document.getElementById('proj-slot-' + type);
        if (slot) slot.classList.add('loaded');
        if (statusEl) statusEl.textContent = Object.keys(result.data).length + ' itens';
        const ck = document.getElementById('proj-slot-' + type + '-check');
        if (ck) ck.style.display = '';
        const labels = { pdv: 'PDVs', cidade: 'Cidades', marca: 'Marcas', brick: 'Bricks' };
        toast('✓ ' + labels[type] + ': ' + Object.keys(result.data).length + ' itens');
        projCheckCanProcess();
    } catch (e) {
        if (statusEl) statusEl.textContent = 'Erro: ' + e.message;
        toast('Erro: ' + e.message);
    }
}

function projProcess() {
    const periods = new Set();
    ['pdv', 'cidade', 'marca', 'brick'].forEach(t => {
        if (!projLoadedFiles[t]) return;
        Object.values(projLoadedFiles[t]).forEach(item => Object.keys(item).forEach(k => periods.add(k)));
    });
    if (!periods.size) { toast('Nenhum dado para processar.'); return; }
    PROJ.appData = {
        periods: [...periods].sort(),
        data: {
            pdv: projLoadedFiles.pdv || {},
            cidade: projLoadedFiles.cidade || {},
            marca: projLoadedFiles.marca || {},
            brick: projLoadedFiles.brick || {}
        }
    };
    try { localStorage.setItem(PROJ.STORAGE_KEY, JSON.stringify(PROJ.appData)); } catch (e) { }
    projInitDash();
}

/* ── init dash ────────────────────────── */
function projInitDash() {
    document.getElementById('proj-uploadSection').style.display = 'none';
    document.getElementById('proj-dashSection').style.display = '';
    const btnCSV = document.getElementById('proj-btnExportCSV');
    if (btnCSV) btnCSV.disabled = false;

    // reconstrói allRows a partir dos tipos que têm dados
    PROJ.allRows = [];
    const typeMap = { pdv: 'pdv', cidade: 'cidade', marca: 'marca', brick: 'brick' };
    const typeHasData = {};
    Object.entries(typeMap).forEach(([key, type]) => {
        const src = PROJ.appData.data[key] || {};
        typeHasData[type] = Object.keys(src).length > 0;
        Object.entries(src).forEach(([name, vals]) => {
            PROJ.allRows.push({ name, type, vals });
        });
    });

    // mostra/oculta tabs conforme dados disponíveis
    ['pdv', 'cidade', 'marca', 'brick'].forEach(t => {
        const btn = document.querySelector(`#proj-tabBtns .proj-tab-btn[data-tab="${t}"]`);
        const brickSpecial = document.getElementById('proj-tab-brick-btn');
        const el = (t === 'brick') ? brickSpecial : btn;
        if (el) el.style.display = typeHasData[t] ? '' : 'none';
    });
    // também oculta/exibe opções do select filterType
    const ft = document.getElementById('proj-filterType');
    if (ft) {
        Array.from(ft.options).forEach(o => {
            if (o.value === 'all') return;
            o.style.display = typeHasData[o.value] ? '' : 'none';
        });
    }

    const periods = PROJ.appData.periods;
    const lastIdx = periods.length - 1;
    const defComp = periods[lastIdx] || '';
    const defBase = periods[Math.max(0, lastIdx - 12)] || '';

    // popula todos os selects
    ['proj-filterBase', 'proj-filterComp',
        'proj-filterAFrom', 'proj-filterATo',
        'proj-filterBFrom', 'proj-filterBTo'].forEach(id => {
            const sel = document.getElementById(id);
            if (!sel) return;
            sel.innerHTML = '';
            periods.forEach(p => { const o = document.createElement('option'); o.value = p; o.textContent = projPeriodLabel(p); sel.appendChild(o); });
        });
    // Mês a Mês: defBase vs defComp
    const fb = document.getElementById('proj-filterBase');
    const fc = document.getElementById('proj-filterComp');
    if (fb) fb.value = defBase;
    if (fc) fc.value = defComp;
    // Período A vs B: padrão Jan–último ano vs Jan–este ano
    const bFrom = defComp.slice(0, 4) + '01', bTo = defComp;
    const aFrom = projShiftPeriod(bFrom, -12), aTo = projShiftPeriod(bTo, -12);
    const setDef = (id, v) => { const el = document.getElementById(id); if (el) el.value = v; };
    setDef('proj-filterAFrom', aFrom); setDef('proj-filterATo', aTo);
    setDef('proj-filterBFrom', bFrom); setDef('proj-filterBTo', bTo);
    // persiste no estado para fallback no primeiro rerender
    PROJ._lastBasePeriods = projPeriodsInRange(aFrom, aTo, periods);
    PROJ._lastCompPeriods = projPeriodsInRange(bFrom, bTo, periods);
    // listeners
    ['proj-filterBase', 'proj-filterComp',
        'proj-filterAFrom', 'proj-filterATo',
        'proj-filterBFrom', 'proj-filterBTo'].forEach(id => {
            const el = document.getElementById(id);
            if (el && !el._projBound) {
                el._projBound = true;
                el.addEventListener('change', () => { PROJ.currentPage = 1; projRerender(); });
            }
        });

    // sincroniza DOM (sem rerender — fazemos abaixo com tudo pronto)
    projSetMode(PROJ.periodMode, true);

    // contagens nos botões de tab
    const counts = { pdv: 0, cidade: 0, marca: 0, brick: 0 };
    PROJ.allRows.forEach(r => { if (counts[r.type] !== undefined) counts[r.type]++; });
    ['pdv', 'cidade', 'marca', 'brick'].forEach(t => {
        const el = document.getElementById('proj-cnt-' + t);
        if (el) el.textContent = counts[t] ? '(' + counts[t] + ')' : '';
    });

    // seleciona o primeiro tab disponível
    const firstAvail = ['marca', 'cidade', 'brick', 'pdv'].find(t => typeHasData[t]);
    if (firstAvail) {
        PROJ.currentTab = 'all';
        document.querySelectorAll('#proj-tabBtns .proj-tab-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.tab === 'all');
        });
    }

    // rerender único e definitivo — tudo populado e sincronizado
    projRerender();
    requestAnimationFrame(() => projUpdateStickyOffsets());
    // v6.15 — garante que mudanças de viewport (resize / zoom) recalculem o offset
    if (!window._projResizeBound) {
        window._projResizeBound = true;
        window.addEventListener('resize', () => {
            if (typeof projUpdateStickyOffsets === 'function') projUpdateStickyOffsets();
        });
    }
}

/* ── rerender ─────────────────────────── */
function projRerender() {
    const typeFilter = (document.getElementById('proj-filterType') || {}).value || 'all';
    const target = parseFloat((document.getElementById('proj-filterTarget') || {}).value) || 0;
    const metaType = (document.getElementById('proj-filterMetaType') || {}).value || 'padrao';
    const search = ((document.getElementById('proj-searchBox') || {}).value || '').toLowerCase();

    let bL, cL, getBC;
    const all = PROJ.appData ? [...PROJ.appData.periods].sort() : [];

    if (PROJ.periodMode === 'single') {
        const base = (document.getElementById('proj-filterBase') || {}).value || '';
        const comp = (document.getElementById('proj-filterComp') || {}).value || '';
        bL = projPeriodLabel(base);
        cL = projPeriodLabel(comp);
        getBC = (vals) => ({ b: vals[base] || 0, c: vals[comp] || 0 });
    } else {
        // lê selects A/B
        const aFrom = (document.getElementById('proj-filterAFrom') || {}).value || '';
        const aTo = (document.getElementById('proj-filterATo') || {}).value || '';
        const bFrom = (document.getElementById('proj-filterBFrom') || {}).value || '';
        const bTo = (document.getElementById('proj-filterBTo') || {}).value || '';

        // se os selects ainda não foram populados, usa fallback do PROJ state
        const basePeriods = (aFrom && aTo)
            ? projPeriodsInRange(aFrom, aTo, all)
            : (PROJ._lastBasePeriods || []);
        const compPeriods = (bFrom && bTo)
            ? projPeriodsInRange(bFrom, bTo, all)
            : (PROJ._lastCompPeriods || []);

        // persiste para próximo fallback
        if (basePeriods.length) PROJ._lastBasePeriods = basePeriods;
        if (compPeriods.length) PROJ._lastCompPeriods = compPeriods;

        bL = projRangeLabel(basePeriods);
        cL = projRangeLabel(compPeriods);
        getBC = (vals) => ({
            b: projSumPeriods(vals, basePeriods),
            c: projSumPeriods(vals, compPeriods)
        });
    }

    const hf = document.getElementById('proj-header-file');
    if (hf && bL && cL) hf.textContent = '— ' + bL + ' → ' + cL;

    // Determina o tipo efetivo para os KPIs:
    // Prioridade: tab ativo > typeFilter > tipo prioritário (marca > cidade > pdv > brick)
    // Nunca soma múltiplas dimensões — cada dimensão representa 100% do volume
    const activeType = PROJ.currentTab !== 'all'
        ? PROJ.currentTab
        : typeFilter !== 'all'
            ? typeFilter
            : null; // vai usar o prioritário abaixo

    const computed = PROJ.allRows
        .filter(r => {
            // para os KPIs usa o tipo ativo; para o computed geral filtra igual
            if (typeFilter !== 'all') return r.type === typeFilter;
            return true; // typeFilter=all: mantém tudo para rankings/tabela
        })
        .map(r => {
            const { b, c } = getBC(r.vals);
            const varBRL = c - b;
            const varPct = b ? ((c / b) - 1) : null;

            const metaPctPadrao = target / 100;
            let metaPct = metaPctPadrao;
            let isReduzida = false;

            if (metaType === 'ajustada') {
                const emQueda = varPct !== null && varPct < 0;
                const tipoReduzido = r.type === 'pdv' || r.type === 'brick';
                if (emQueda && tipoReduzido) {
                    metaPct = metaPctPadrao * 0.5;
                    isReduzida = true;
                }
            }

            return { ...r, b, c, varBRL, varPct, metaPctPadrao, metaPct, isReduzida };
        });

    // v6.17: Lógica de Compensação (quem está bem paga a conta de quem está mal)
    if (metaType === 'ajustada') {
        let totalFolga = 0;
        let totalBasePositivos = 0;

        computed.forEach(r => {
            if (r.isReduzida) {
                // Quanto de meta "sumiu" nesta linha por causa do alívio?
                totalFolga += r.b * (r.metaPctPadrao - r.metaPct);
            } else if (r.varPct !== null && r.varPct >= 0) {
                // Somamos a base de quem está positivo para ratear a folga proporcionalmente
                totalBasePositivos += r.b;
            }
        });

        // Se houver folga para distribuir e gente positiva para pagar:
        if (totalFolga > 0 && totalBasePositivos > 0) {
            const fatorCompensacao = totalFolga / totalBasePositivos;
            computed.forEach(r => {
                if (!r.isReduzida && r.varPct !== null && r.varPct >= 0) {
                    // Aumentamos a meta dos positivos proporcionalmente à sua base
                    r.metaPct += fatorCompensacao;
                    r.isCompensada = true;
                }
            });
        }
    }

    // Finaliza cálculos de targetVal, gap e status
    const finalComputed = computed.map(r => {
        const targetVal = r.b * (1 + r.metaPct);
        const gap = r.c - targetVal;
        return { ...r, targetVal, gap, status: r.c >= targetVal ? 'acima' : 'abaixo' };
    });

    // KPI cards: sempre uma única dimensão para não duplicar o volume
    const kpiType = activeType
        || (['marca', 'cidade', 'pdv', 'brick'].find(t => finalComputed.some(r => r.type === t)) || 'marca');

    const kpiRows = finalComputed.filter(r => r.type === kpiType);

    const totB = kpiRows.reduce((s, r) => s + r.b, 0);
    const totC = kpiRows.reduce((s, r) => s + r.c, 0);
    const totVar = totC - totB;
    const totPct = totB ? (totC / totB - 1) : 0;
    const totTarget = kpiRows.reduce((s, r) => s + r.targetVal, 0);
    const totGap = totC - totTarget;

    projUpdateKPIs(totB, totC, totVar, totPct, totTarget, totGap, bL, cL, kpiType);

    projBuildRankings(finalComputed);

    const tableRows = finalComputed.filter(r => {
        if (PROJ.currentTab !== 'all' && r.type !== PROJ.currentTab) return false;
        if (search && !r.name.toLowerCase().includes(search)) return false;
        return true;
    }).sort((a, b) => b.varBRL - a.varBRL);

    PROJ.filteredRows = tableRows;
    projBuildTable(tableRows, bL, cL);
}

function projUpdateKPIs(totB, totC, totVar, totPct, totTarget, totGap, bL, cL, kpiType) {
    const typeLabels = { marca: 'Marcas', cidade: 'Cidades', pdv: 'PDVs', brick: 'Bricks' };
    const typeSuffix = (PROJ.currentTab === 'all' && kpiType)
        ? ' · ' + (typeLabels[kpiType] || '') : '';

    const setTxt = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    const setCls = (id, c) => { const el = document.getElementById(id); if (el) el.className = 'proj-card-value ' + c; };
    const setTop = (id, c) => { const el = document.getElementById(id); if (el) el.style.setProperty('--proj-card-top', c); };

    setTxt('proj-lbl-base', 'Total ' + bL); setTxt('proj-card-base', projFmtBRL(totB));
    setTxt('proj-lbl-comp', 'Total ' + cL); setTxt('proj-card-comp', projFmtBRL(totC));
    setTxt('proj-lbl-var', 'Var. BRL (' + bL + ' ➔ ' + cL + ')');
    setTxt('proj-card-var', (totVar >= 0 ? '↑ ' : '↓ ') + projFmtBRL(Math.abs(totVar)));
    setCls('proj-card-var', totVar >= 0 ? 'proj-card-value proj-val-pos' : 'proj-card-value proj-val-neg');
    setTop('proj-card-var-wrap', totVar >= 0 ? 'var(--grn,#059669)' : 'var(--red,#dc2626)');

    setTxt('proj-lbl-pct', 'Evol. % (' + bL + ' ➔ ' + cL + ')');
    setTxt('proj-card-pct', (totPct != null && totPct >= 0 ? '↑ ' : '↓ ') + projFmtPct(totPct));
    setCls('proj-card-pct', totPct != null && totPct >= 0 ? 'proj-card-value proj-val-pos' : 'proj-card-value proj-val-neg');
    setTop('proj-card-pct-wrap', totPct != null && totPct >= 0 ? 'var(--grn,#059669)' : 'var(--red,#dc2626)');

    setTxt('proj-lbl-target', 'Meta Total (' + cL + ')'); setTxt('proj-card-target', projFmtBRL(totTarget));
    setTxt('proj-lbl-gap', totGap >= 0 ? 'Acima da Meta' : 'Faltam p/ Meta');
    setTxt('proj-card-gap', (totGap >= 0 ? '↑ ' : '↓ ') + projFmtBRL(Math.abs(totGap)));
    setCls('proj-card-gap', totGap >= 0 ? 'proj-card-value proj-val-pos' : 'proj-card-value proj-val-neg');
    setTop('proj-card-gap-wrap', totGap >= 0 ? 'var(--grn,#059669)' : 'var(--red,#dc2626)');
}

/* ── rankings ─────────────────────────── */
function projBuildRankings(rows) {
    const typeLabels = { pdv: 'PDVs', cidade: 'Cidades', marca: 'Marcas', brick: 'Bricks' };
    const cats = Object.entries(typeLabels)
        .filter(([t]) => rows.some(r => r.type === t));

    const topEl = document.getElementById('proj-rankTop');
    const botEl = document.getElementById('proj-rankBot');
    if (!topEl || !botEl) return;
    topEl.innerHTML = ''; botEl.innerHTML = '';

    cats.forEach(([type, label]) => {
        const catRows = rows.filter(r => r.type === type);
        if (!catRows.length) return;
        const sorted = [...catRows].sort((a, b) => b.varBRL - a.varBRL);
        topEl.appendChild(projBuildRankCard('🟢 Top 10 ' + label, sorted.slice(0, 10), true));
        botEl.appendChild(projBuildRankCard('🔴 10 Piores ' + label, [...catRows].sort((a, b) => a.varBRL - b.varBRL).slice(0, 10), false));
    });
}

function projBuildRankCard(title, rows, isTop) {
    const card = document.createElement('div'); card.className = 'proj-rank-card';
    const head = document.createElement('div'); head.className = 'proj-rank-head';
    head.innerHTML = title + '<span class="proj-rank-toggle">▼</span>';
    const medals = ['🥇', '🥈', '🥉'];
    const body = document.createElement('div');
    const isPdvCard   = rows.length > 0 && rows[0].type === 'pdv';
    const isBrickCard = rows.length > 0 && rows[0].type === 'brick';
    const tbody = rows.map((r, i) => {
        const rank = isTop && i < 3 ? `<span>${medals[i]}</span>` : `<b>${i + 1}</b>`;
        const vc = r.varBRL >= 0 ? 'proj-val-pos' : 'proj-val-neg';
        const pc = (r.varPct != null && r.varPct >= 0) ? 'proj-val-pos' : 'proj-val-neg';
        let nameAttr = `title="${r.name}"`;
        if (isPdvCard)   nameAttr = `class="proj-rank-pdv-name"   data-fullname="${r.name}" title="Clique para copiar CNPJ e buscar" style="cursor:pointer;text-decoration:underline dotted;"`;
        if (isBrickCard) nameAttr = `class="proj-rank-brick-name" data-market="${r.name}"   title="Clique para ver no Detalhe por Brick" style="cursor:pointer;text-decoration:underline dotted;"`;
        return `<tr><td>${rank}</td><td ${nameAttr}>${r.name}</td><td class="${vc}">${projFmtBRL(r.varBRL)}</td><td class="${pc}">${projFmtPct(r.varPct)}</td></tr>`;
    }).join('');
    body.innerHTML = `<table class="proj-rank-table"><thead><tr><th>#</th><th>Nome</th><th>Var. BRL</th><th>Evol. %</th></tr></thead><tbody>${tbody}</tbody></table>`;

    // Clique no nome do PDV → extrai CNPJ, copia e abre modal de busca
    if (isPdvCard) {
        body.querySelectorAll('.proj-rank-pdv-name').forEach(td => {
            td.addEventListener('click', () => {
                const fullName = td.dataset.fullname || '';
                const match = fullName.match(/(\d{14})/);
                const cnpjDigits = match ? match[1] : onlyDigits(fullName.split('-').pop() || '');
                if (cnpjDigits && cnpjDigits.length >= 8) {
                    const masked = cnpjDigits.length === 14 ? maskCNPJ(cnpjDigits) : cnpjDigits;
                    navigator.clipboard.writeText(cnpjDigits).catch(() => {});
                    const inp = document.getElementById('cnpjQuickInput');
                    if (inp) { inp.value = masked; }
                    if (cnpjDigits.length === 14) {
                        openPDVModal(cnpjDigits);
                    } else {
                        toast(`CNPJ copiado: ${cnpjDigits}`);
                    }
                } else {
                    toast('CNPJ não identificado neste nome.');
                }
            });
        });
    }

    // Clique no nome do Brick → fecha Resultado Projetado, filtra pelo brick e abre Detalhe por Brick
    if (isBrickCard) {
        body.querySelectorAll('.proj-rank-brick-name').forEach(td => {
            td.addEventListener('click', () => {
                const brickName = td.dataset.market || '';
                if (!brickName) return;
                // Fecha a Central de Projeções
                closeProjecaoView();
                // Limpa filtro de mercado (mostra todos os mercados)
                UI.market = 'all';
                const fbMkt = document.getElementById('fbMkt');
                if (fbMkt) fbMkt.value = 'all';
                // Define o search com o nome/código do brick para filtrar a tabela
                UI.search = brickName;
                const fbSearch = document.getElementById('fbSearch');
                if (fbSearch) fbSearch.value = brickName;
                // Navega para a aba Detalhe por Brick
                switchTab('brick');
                // Marca a aba como ativa visualmente
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                const brickTabBtn = document.querySelector('.tab-btn[data-tab="brick"]');
                if (brickTabBtn) brickTabBtn.classList.add('active');
                window.scrollTo(0, 0);
            });
        });
    }

    head.addEventListener('click', () => { body.style.display = body.style.display === 'none' ? '' : 'none'; });
    card.appendChild(head); card.appendChild(body);
    return card;
}

/* ── tabela principal ──────────────────── */
/* sort state */
PROJ.sortKey = 'varBRL';
PROJ.sortDir = 'desc';

function projSortRows(rows) {
    const k = PROJ.sortKey;
    const dir = PROJ.sortDir === 'asc' ? 1 : -1;
    return [...rows].sort((a, b) => {
        let av, bv;
        switch (k) {
            case 'name': av = a.name; bv = b.name; return dir * av.localeCompare(bv, 'pt-BR');
            case 'type': av = a.type; bv = b.type; return dir * av.localeCompare(bv, 'pt-BR');
            case 'b': av = a.b; bv = b.b; break;
            case 'c': av = a.c; bv = b.c; break;
            case 'varBRL': av = a.varBRL; bv = b.varBRL; break;
            case 'varPct': av = a.varPct ?? -Infinity; bv = b.varPct ?? -Infinity; break;
            case 'target': av = a.targetVal; bv = b.targetVal; break;
            case 'gap': av = a.gap; bv = b.gap; break;
            default: av = a.varBRL; bv = b.varBRL;
        }
        return dir * (av - bv);
    });
}

function projBuildTable(rows, bL, cL) {
    const total = rows.length;
    const totalPages = Math.ceil(total / PROJ.PAGE_SIZE) || 1;
    if (PROJ.currentPage > totalPages) PROJ.currentPage = totalPages;

    const sorted = projSortRows(rows);
    PROJ.filteredRows = sorted;
    const slice = sorted.slice((PROJ.currentPage - 1) * PROJ.PAGE_SIZE, PROJ.currentPage * PROJ.PAGE_SIZE);

    const thead = document.getElementById('proj-mainThead');
    const theadHidden = document.getElementById('proj-mainTheadHidden');
    const tbody = document.getElementById('proj-mainTbody');
    const info = document.getElementById('proj-tableInfo');
    if (!tbody) return;

    const COLS = [
        { key: 'name', label: 'Nome', align: 'left', w: 240 },
        { key: 'type', label: 'Tipo', align: 'right', w: 100 },
        { key: 'b', label: bL, align: 'right', w: 110 },
        { key: 'c', label: cL, align: 'right', w: 110 },
        { key: 'varBRL', label: 'Var. BRL', align: 'right', w: 110 },
        { key: 'varPct', label: 'Evol. %', align: 'right', w: 80 },
        { key: 'target', label: 'Meta BRL', align: 'right', w: 110 },
        { key: 'gap', label: 'GAP', align: 'right', w: 110 },
        { key: 'status', label: 'Status', align: 'right', w: 80, noSort: true },
    ];

    const colgroup = COLS.map(c => `<col style="width:${c.w}px;min-width:${c.w}px">`).join('');

    const thHTML = COLS.map(c => {
        const sortCls = !c.noSort && c.key === PROJ.sortKey
            ? (PROJ.sortDir === 'asc' ? ' class="sort-asc"' : ' class="sort-desc"') : '';
        const inner = c.noSort
            ? c.label
            : `<span class="proj-th-sort">${c.label}</span>`;
        const dataKey = c.noSort ? '' : ` data-col="${c.key}"`;
        return `<th${sortCls}${dataKey} style="text-align:${c.align}">${inner}</th>`;
    }).join('');

    // thead visível (sticky fora do table-section)
    const theadTable = document.getElementById('proj-theadTable');
    if (theadTable) {
        theadTable.innerHTML = `<colgroup>${colgroup}</colgroup><thead id="proj-mainThead"><tr>${thHTML}</tr></thead>`;
        // wire sort clicks
        theadTable.querySelectorAll('th[data-col]').forEach(th => {
            th.style.cursor = 'pointer';
            th.addEventListener('click', () => {
                const col = th.getAttribute('data-col');
                if (PROJ.sortKey === col) {
                    PROJ.sortDir = PROJ.sortDir === 'asc' ? 'desc' : 'asc';
                } else {
                    PROJ.sortKey = col;
                    PROJ.sortDir = 'desc';
                }
                PROJ.currentPage = 1;
                projBuildTable(rows, bL, cL);
            });
        });
    }

    // thead invisível no body (alinhamento de colunas)
    if (theadHidden) {
        theadHidden.innerHTML = `<tr>${COLS.map(c => `<th style="visibility:hidden;padding:7px 12px;font-size:.58rem">${c.label}</th>`).join('')}</tr>`;
    }

    // colgroup no body
    const mainTable = document.getElementById('proj-mainTable');
    if (mainTable) {
        let cg = mainTable.querySelector('colgroup');
        if (!cg) { cg = document.createElement('colgroup'); mainTable.prepend(cg); }
        cg.innerHTML = colgroup;
    }

    const typeLabel = { pdv: 'PDV/Farmácia', cidade: 'Cidade', marca: 'Marca', brick: 'Brick' };
    const metaType = (document.getElementById('proj-filterMetaType') || {}).value || 'padrao';
    tbody.innerHTML = slice.map(r => {
        const vc = r.varBRL >= 0 ? 'proj-val-pos' : 'proj-val-neg';
        const pc = (r.varPct != null && r.varPct >= 0) ? 'proj-val-pos' : 'proj-val-neg';
        const gc = r.gap >= 0 ? 'proj-val-pos' : 'proj-val-neg';
        const badge = r.status === 'acima'
            ? '<span class="proj-badge-pos">Acima</span>'
            : '<span class="proj-badge-neg">Abaixo</span>';
        // indicador de meta alterada (reduzida ou compensada)
        let metaCell = `<td>${projFmtBRL(r.targetVal)}</td>`;
        if (metaType === 'ajustada') {
            if (r.isReduzida) {
                metaCell = `<td title="Meta reduzida: ${(r.metaPct * 100).toFixed(1)}% (item em queda)"><span style="color:var(--txt3,#94a3b8);font-size:.65rem">↓${(r.metaPct * 100).toFixed(1)}% </span>${projFmtBRL(r.targetVal)}</td>`;
            } else if (r.isCompensada) {
                metaCell = `<td title="Meta compensada: ${(r.metaPct * 100).toFixed(1)}% (paga a conta dos negativos)"><span style="color:var(--txt3,#94a3b8);font-size:.65rem">↑${(r.metaPct * 100).toFixed(1)}% </span>${projFmtBRL(r.targetVal)}</td>`;
            }
        }
        return `<tr>
            <td title="${r.name}">${r.name}</td>
            <td style="color:var(--txt3,#94a3b8);text-align:right">${typeLabel[r.type] || r.type}</td>
            <td>${projFmtBRL(r.b)}</td>
            <td>${projFmtBRL(r.c)}</td>
            <td class="${vc}">${projFmtBRL(r.varBRL)}</td>
            <td class="${pc}">${projFmtPct(r.varPct)}</td>
            ${metaCell}
            <td class="${gc}">${projFmtBRL(r.gap)}</td>
            <td>${badge}</td>
        </tr>`;
    }).join('');

    if (info) info.textContent = total.toLocaleString('pt-BR') + ' registros · pág ' + PROJ.currentPage + '/' + totalPages;
    projBuildPagination(totalPages, bL, cL);

    // sincroniza scroll horizontal header ↔ body
    const tblOuter = document.getElementById('proj-tblOuter');
    const theadWrap = document.getElementById('proj-theadWrap');
    if (tblOuter && theadWrap) {
        tblOuter.onscroll = () => { theadWrap.scrollLeft = tblOuter.scrollLeft; };
    }

    // recalcula offsets após render (thead agora tem altura real)
    requestAnimationFrame(() => projUpdateStickyOffsets());
}

function projBuildPagination(total, bL, cL) {
    const el = document.getElementById('proj-pagDiv');
    if (!el) return;
    if (total <= 1) { el.innerHTML = ''; return; }
    let pages = [];
    if (total <= 7) { for (let i = 1; i <= total; i++) pages.push(i); }
    else {
        pages.push(1);
        const s = Math.max(2, PROJ.currentPage - 2), e = Math.min(total - 1, PROJ.currentPage + 2);
        if (s > 2) pages.push('…');
        for (let i = s; i <= e; i++) pages.push(i);
        if (e < total - 1) pages.push('…');
        pages.push(total);
    }
    el.innerHTML = pages.map(p =>
        p === '…'
            ? `<button class="proj-pg-btn" disabled>…</button>`
            : `<button class="proj-pg-btn${p === PROJ.currentPage ? ' active' : ''}" data-p="${p}">${p}</button>`
    ).join('');
    el.querySelectorAll('.proj-pg-btn[data-p]').forEach(btn => {
        btn.addEventListener('click', () => {
            PROJ.currentPage = parseInt(btn.getAttribute('data-p'));
            projBuildTable(PROJ.filteredRows,
                projPeriodLabel((document.getElementById('proj-filterBase') || {}).value || ''),
                projPeriodLabel((document.getElementById('proj-filterComp') || {}).value || ''));
        });
    });
}

/* ── CSV export ────────────────────────── */
function projExportCSV() { projExportXLSX(); }

async function projExportXLSX() {
    if (!PROJ.filteredRows.length) return;
    toast('Gerando Excel...');

    // ── Período labels ────────────────────────────────────────────────────
    const bVal = (document.getElementById('proj-filterBase') || {}).value || '';
    const cVal = (document.getElementById('proj-filterComp') || {}).value || '';
    const bL = projPeriodLabel(bVal) || 'Base';
    const cL = projPeriodLabel(cVal) || 'Comp.';

    // ── Ordenação decrescente por Var BRL ─────────────────────────────────
    const rows = [...PROJ.filteredRows].sort((a, b) => b.varBRL - a.varBRL);
    const nData = rows.length;
    const lastDataRow = nData + 1; // linha Excel (1-indexed, cabeçalho na 1)

    // ── Formatos numéricos ────────────────────────────────────────────────
    const FMT_BRL = '_(\"R$\"* #,##0.00_);_(\"R$\"* \\(#,##0.00\\);_(\"R$\"* \"-\"??_);_(@_)';
    const FMT_PCT = '0.00%';

    // ── Estilos reutilizáveis ─────────────────────────────────────────────
    const fontHdr = { name: 'Calibri', size: 12, bold: true, color: { argb: 'FFFFFFFF' } };
    const fontBold = { name: 'Calibri', size: 12, bold: true };
    const fontBase = { name: 'Calibri', size: 12, bold: false };
    const fillHdr = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF002060' } };
    const fillGrn = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFC6EFCE' } };
    const fillRed = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFC7CE' } };
    const fontGrn = { name: 'Calibri', size: 12, bold: true, color: { argb: 'FF006100' } };
    const fontRed = { name: 'Calibri', size: 12, bold: true, color: { argb: 'FF9C0006' } };

    // ── Cria workbook ─────────────────────────────────────────────────────
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet('Resultado Projetado');

    // ── Larguras de coluna ────────────────────────────────────────────────
    ws.columns = [
        { width: 21.0 },   // A — Nome
        { width: 6.0 },   // B — Tipo
        { width: 13.08 },  // C — Base
        { width: 13.0 },   // D — Comp
        { width: 12.66 },  // E — Var BRL
        { width: 8.33 },  // F — Evol %
        { width: 13.08 },  // G — Meta BRL
        { width: 12.58 },  // H — GAP
        { width: 6.41 },  // I — Status
    ];

    // ── Cabeçalho (linha 1) ───────────────────────────────────────────────
    const hdrRow = ws.addRow(['Nome', 'Tipo', bL, cL, 'Var BRL', 'Evol %', 'Meta BRL', 'GAP', 'Status']);
    hdrRow.eachCell(cell => {
        cell.font = fontHdr;
        cell.fill = fillHdr;
        cell.alignment = { horizontal: cell.col === 1 ? 'left' : 'center', vertical: 'middle' };
    });

    // ── Linhas de dados ───────────────────────────────────────────────────
    rows.forEach((r, i) => {
        const exRow = i + 2;
        const tipo = { pdv: 'PDV', cidade: 'Cidade', marca: 'Marca', brick: 'Brick' }[r.type] || r.type;
        const status = r.status === 'acima' ? 'Acima' : 'Abaixo';
        const varBRL = r.varBRL != null ? r.varBRL : 0;
        const varPct = r.varPct != null ? r.varPct : 0;
        const isPos = varBRL >= 0;

        const dataRow = ws.addRow([
            r.name,
            tipo,
            r.b != null ? r.b : 0,
            r.c != null ? r.c : 0,
            { formula: `D${exRow}-C${exRow}`, result: varBRL },
            { formula: `D${exRow}/C${exRow}-1`, result: varPct },
            r.targetVal != null ? r.targetVal : 0,
            r.gap != null ? r.gap : 0,
            status,
        ]);

        // Nome — bold, alinhado à esquerda
        const cellA = dataRow.getCell(1);
        cellA.font = fontBold;
        cellA.alignment = { horizontal: 'left', vertical: 'middle' };

        // Tipo — normal, esquerda
        const cellB = dataRow.getCell(2);
        cellB.font = fontBase;
        cellB.alignment = { horizontal: 'left', vertical: 'middle' };

        // Base (C) e Comp (D) — BRL, normal, centralizado
        [3, 4].forEach(col => {
            const cell = dataRow.getCell(col);
            cell.numFmt = FMT_BRL;
            cell.font = fontBase;
            cell.alignment = { horizontal: 'center', vertical: 'middle' };
        });

        // Var BRL (E) — BRL, bold+cor+fill condicional, centralizado
        const cellE = dataRow.getCell(5);
        cellE.numFmt = FMT_BRL;
        cellE.font = isPos ? fontGrn : fontRed;
        cellE.fill = isPos ? fillGrn : fillRed;
        cellE.alignment = { horizontal: 'center', vertical: 'middle' };

        // Evol % (F) — PCT, bold+cor+fill condicional, centralizado
        const cellF = dataRow.getCell(6);
        cellF.numFmt = FMT_PCT;
        cellF.font = isPos ? fontGrn : fontRed;
        cellF.fill = isPos ? fillGrn : fillRed;
        cellF.alignment = { horizontal: 'center', vertical: 'middle' };

        // Meta BRL (G) e GAP (H) — BRL, normal, centralizado
        [7, 8].forEach(col => {
            const cell = dataRow.getCell(col);
            cell.numFmt = FMT_BRL;
            cell.font = fontBase;
            cell.alignment = { horizontal: 'center', vertical: 'middle' };
        });

        // Status (I) — normal, centralizado
        const cellI = dataRow.getCell(9);
        cellI.font = fontBase;
        cellI.alignment = { horizontal: 'center', vertical: 'middle' };
    });

    // ── Congela linha 1 ───────────────────────────────────────────────────
    ws.views = [{ state: 'frozen', xSplit: 0, ySplit: 1, activeCell: 'A2' }];

    // ── Gera buffer e dispara download ────────────────────────────────────
    const buffer = await wb.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const now = new Date();
    const ts = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
    a.href = url;
    a.download = `projecao_${bL}_vs_${cL}_${ts}.xlsx`;
    a.click();
    URL.revokeObjectURL(url);
    toast('Excel exportado!');
}

/* ── bootstrap ─────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    projSetupSlots();
});
