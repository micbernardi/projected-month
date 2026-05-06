/* ════════════════════════════════════════
   SUPERA RX — ANÁLISE ESTRATÉGICA
   script.js v3 — share real Supera vs Concorrentes + header fixo ordenável
   ════════════════════════════════════════ */

/* ===== MAPA OFICIAL: 87 MERCADOS (Supera × Concorrentes) =====
   Gerado a partir da planilha MARCASCONCORRENTES-SUPERA-MERCADOS.
   A chave é o nome do mercado (UPPER). Cada entrada traz a lista de
   marcas Supera e concorrentes daquele mercado.                      */
const MARKETS_BRANDS_MAP = { "ALEVO": { "supera": ["ALEVO (SP0)"], "concorrentes": ["LEVOXIN (AS2)", "LIVEPAX (A4H)", "TAMIRAM (EUF)", "TAVOK (EUF)"] }, "ALONG-C": { "supera": ["ALONG-C (SP0)"], "concorrentes": ["COLFLEX CURCUMA (MF+)", "CONDRES LONGBIO (EMS)", "CURC (MF+)", "MOTORE (A4H)"] }, "ALPES XL": { "supera": ["ALPES XL (SP0)"], "concorrentes": ["BUP XL (EUF)", "BUPIUM (EMS)", "BUPIUM XL (EMS)", "WELLBUTRIN XL (GSK)", "ZETRON XL (LIB)"] }, "AMYTRIL": { "supera": ["AMYTRIL (SP0)"], "concorrentes": ["ANAFRANIL (SDZ)", "ANAFRANIL SR (SDZ)", "CLO (B3H)", "IMIPRA (CT6)", "MITRIP (MYL)", "PAMELOR (CLR)"] }, "ANDES": { "supera": ["ANDES (SP0)"], "concorrentes": ["DELLER (A4H)", "DESDUO (TNT)", "DESVE (EUF)", "ELIFORE (PFZ)", "IMENSE (EMS)", "PRISTIQ (PFZ)"] }, "APICE": { "supera": ["APICE (SP0)"], "concorrentes": ["DORENE (A4H)", "INSIT (AS2)", "LIMIAR (EUF)", "LYRICA (VI/)"] }, "ASEA": { "supera": ["ASEA (SP0)"], "concorrentes": ["BENICAR (DCS)", "OLMECOR (TNT)", "OLMETEC (PFZ)"] }, "ASEA HCT": { "supera": ["ASEA HCT (SP0)"], "concorrentes": ["BENICAR HCT (DCS)", "HOLMES H (EUF)"] }, "ATEROMA": { "supera": ["ATEROMA (SP0)"], "concorrentes": ["CITALOR (VI/)", "LIPITOR (VI/)", "VAST (EUF)"] }, "ATESTO": { "supera": ["ATESTO (SP0)"], "concorrentes": ["DAEM (EUF)", "DURATESTON (A3N)", "HORMUS (EUF)", "NEBIDO (GRT)", "UND TESTOSTERON MG (EUF)"] }, "ATIP": { "supera": ["ATIP (SP0)"], "concorrentes": ["QUET (EUF)", "QUETIPIN (CT6)", "QUETROS (A4H)", "SEROQUEL IR (MA8)"] }, "ATIP XR": { "supera": ["ATIP XR (SP0)"], "concorrentes": ["QUEPSIA LP (EUF)", "QUET XR (EUF)", "SEROQUEL XRO (MA8)"] }, "AVAL": { "supera": ["AVAL (SP0)"], "concorrentes": ["BRASART (EMS)", "BRAVAN (A4H)", "DIOVAN (FQM)"] }, "AZOD": { "supera": ["AZOD (SP0)"], "concorrentes": ["DONAREN (AS2)", "LOREDON (TNT)", "MOTRAZ (EUF)", "SONIC (EUF)"] }, "BARIAT XR": { "supera": ["BARIAT XR (SP0)"], "concorrentes": ["BARIATRON (A4I)", "BARISTAR (CLR)", "QUELATUS BARI (EUF)"] }, "BARIAT XR CALCIO": { "supera": ["BARIAT XR CALCIO (SP0)"], "concorrentes": ["CALDE MDK (MJA)", "MOBILITY OSCAL (O/P)", "MOBILITY OSCAL D (O/P)", "OSTEONUTRI (A3N)"] }, "BENZETACIL": { "supera": ["BENZETACIL (SP0)", "BIOFLAC (SP0)"], "concorrentes": [] }, "BIQUIZ": { "supera": ["BIQUIZ (SP0)", "CARLIT (SP0)"], "concorrentes": ["AIPRI (MF+)", "ARISTAB (A4H)", "TOARIP (TNT)", "CARBOLITIUM (EUF)", "CARBOLITIUM CR (EUF)"] }, "CIBEX": { "supera": ["CIBEX (SP0)"], "concorrentes": ["CELEBRA (VI/)", "COQUES (EUF)", "DUCOX (EUF)", "FOXIS (A4H)"] }, "COD": { "supera": ["COD (SP0)"], "concorrentes": ["CODEIN (CT6)", "NOVOTRAM (MF+)", "TRAMADON (CT6)", "TRAMAL (GRT)", "TRAMAL RETARD (GRT)"] }, "COD PAR": { "supera": ["COD PAR (SP0)"], "concorrentes": ["ALGICOD (EUF)", "PACO (EUF)", "TYLEX (CLR)"] }, "DBRIZ": { "supera": ["DBRIZ (SP0)"], "concorrentes": ["IRUXOL (ABD)", "KOLLAGENASE C/CLOR (CT6)"] }, "DBRIZ GINO": { "supera": ["DBRIZ GINO (SP0)"], "concorrentes": ["GINO KOLLAGENASE (CT6)", "GYNO-IRUXOL (ABD)", "KOLPOCERVIX (ZY-)"] }, "DBRIZ UNO": { "supera": ["DBRIZ UNO (SP0)"], "concorrentes": ["IRUXOL MONO (ABD)", "KOLLAGENASE (CT6)"] }, "DEKSA": { "supera": ["DEKSA (SP0)"], "concorrentes": ["JUNEVE (TAK)", "LIND (EUF)", "LISDEV (EUF)", "LISVENX (TNT)", "LYBERDIA (EMS)", "LYSDEXA (LIB)", "VENVANSE (TAK)"] }, "DELA COLIN": { "supera": ["DELA COLIN (SP0)", "DENYL (SP0)"], "concorrentes": ["FEMIBION (PGH)", "MEGA MATER (U.Q)", "NEUTROFER FOLATO D (EMS)", "OFOLATO D FER (MF+)", "OFOLATO FER (MF+)", "CITTA (EUF)", "MAXAPRAN (A4H)", "PROCIMAX (LIB)"] }, "DHIVAS": { "supera": ["DHIVAS (SP0)"], "concorrentes": ["DAFLON 1000 (SVR)", "DAFLON 1000 FLEX (SVR)", "DIOSMIN (A4H)", "PERIVASC (EUF)", "VENAFLON (TTB)"] }, "DIOLESS": { "supera": ["DIOLESS (SP0)"], "concorrentes": ["FEMINA (A4H)", "MERCILON (ORG)", "MINIAN (LIB)", "PRIMERA (EUF)"] }, "DIUPRESS": { "supera": ["DIUPRESS (SP0)"], "concorrentes": ["CLOR.AMILO+HCT MG (EMS)", "CLORANA (S.A)", "DIURIX (TTB)", "INDAPAMIDA MG (EMS)", "INDAPAMIDA MG (EUF)", "INDAPAMIDA MG (GM2)", "INDAPAMIDA MG (GOB)", "INDAPAMIDA MG (PZ8)", "INDAPAMIDA MG (TNT)", "INDAPEN SR (TNT)", "NATRILIX SR (SVR)"] }, "DUOFLAM": { "supera": ["DUOFLAM (SP0)"], "concorrentes": ["BETATRINTA (EUF)", "DIPROSPAN (MF+)", "PERMESE (EUF)"] }, "FIBRINASE 15G": { "supera": ["FIBRINASE (SP0)"], "concorrentes": ["IRUXOL MONO (ABD)", "KOLLAGENASE C/CLOR (CT6)", "IRUXOL (ABD)", "KOLLAGENASE (CT6)"] }, "FILINAR": { "supera": ["FILINAR (SP0)"], "concorrentes": ["BRONDILAT (A4H)", "MELYSSE (A4H)"] }, "FLUXENE": { "supera": ["FLUXENE (SP0)"], "concorrentes": ["DAFORIN (EMS)", "PROZAC 20 (LLY)", "VEROTINA (LIB)"] }, "GAZIA": { "supera": ["GAZIA (SP0)"], "concorrentes": ["ADIPEPT (A4H)", "DIVENA (A4H)", "INILOK (AS2)", "PRAZY (LR8)", "RESTITUE (EMS)"] }, "HELLEVA": { "supera": ["HELLEVA (SP0)"], "concorrentes": ["VIAGRA (VI/)"] }, "HEZO": { "supera": ["HEZO (SP0)"], "concorrentes": ["EZONIA (EUF)", "PRYSMA (EUF)", "STILNOX CR (S.A)"] }, "HIXIZINE": { "supera": ["HIXIZINE (SP0)", "IBANUNO (SP0)"], "concorrentes": ["FENERGAN (O/P)", "PERGO (EUF)", "POLARAMINE (HCH)", "AFRAT (CT6)", "OSTEOBAN (A4H)", "RISEDROSS (EMS)"] }, "KETALGI": { "supera": ["KETALGI (SP0)"], "concorrentes": ["ETOD (CT6)", "ETODOLACO MG (AH/)", "ETODOLACO MG (GM2)", "FLANCOX (AS2)"] }, "LANICO COMP": { "supera": ["LANICO (SP0)"], "concorrentes": ["ATAK CLAV (EUF)", "CLAVULIN BD (GSK)", "NOVAMOX (A4H)", "SINOT CLAV (EUF)"] }, "LANICO SUSP": { "supera": ["LANICO (SP0)"], "concorrentes": ["ATAK CLAV (EUF)", "CLAVULIN BD (GSK)", "NOVAMOX (A4H)", "SINOT CLAV (EUF)"] }, "LONGFLEX": { "supera": ["LONGFLEX (SP0)"], "concorrentes": ["COLFLEX HIALU (MF+)", "FORTICE (EUF)", "MOTILEX HA (AS2)"] }, "MINERGI": { "supera": ["MINERGI (SP0)"], "concorrentes": ["PISA (EUF)", "QUERA LP (CT6)"] }, "MULTI BI": { "supera": ["MULTI-BI (SP0)"], "concorrentes": ["20 BI (EUF)", "BIOTTA 25BI (MJA)", "PROBIATOP (FQM)", "PROBID (AS2)", "PROLIVE (A4H)"] }, "MULTI BI FIBRAS": { "supera": ["MULTI-BI FIBRAS (SP0)"], "concorrentes": ["20 BI FIBRAS (EUF)", "PROHN (A4H)", "PROHN FIBRAS (A4H)", "SIMBIOFLORA (FQM)", "SIMBIOFLORA MULTI (FQM)"] }, "MULTI-BI GOTAS": { "supera": ["MULTI-BI (SP0)"], "concorrentes": ["COLIDIS (A4H)", "CULTURELLE (CLR)", "FLORIPA (EUF)", "KOLLIS (EMS)"] }, "NAZZO": { "supera": ["NAZZO (SP0)"], "concorrentes": ["MARESIS FLEX (FQM)", "NARIDRIN ALTO VOLU (EMS)", "NASOAR (MYL)", "RINOSORO (MF+)"] }, "NAZZO H": { "supera": ["NAZZO H (SP0)"], "concorrentes": ["MAXIDRATE (LIB)", "PENETRO (MLB)", "SINUSEC (BS2)", "SINUSTRAT (BS2)"] }, "NAZZO HIALUJET": { "supera": ["NAZZO HIALUJET (SP0)"], "concorrentes": ["MARESIS (FQM)", "RINOSORO (MF+)", "SALSEP JET (LIB)", "SORINE (A4H)"] }, "NAZZO INF": { "supera": ["NAZZO INFANTIL (SP0)"], "concorrentes": ["MARESIS FLEX (FQM)", "NASOAR (MYL)", "RESPIR KIDS (U.Q)", "RINOSORO (MF+)"] }, "NAZZO NEBULIZE": { "supera": ["NAZZO NEBULIZE (SP0)"], "concorrentes": ["ATROVENT (B.I)", "PULMICORT (FQM)"] }, "NAZZO OTO": { "supera": ["NAZZO OTO (SP0)"], "concorrentes": ["ACERATUM (CLR)", "CERUMIN (NVR)", "OTODRAT (AEE)"] }, "NAZZO XT": { "supera": ["NAZZO XT (SP0)", "NEUMOSIN (SP0)"], "concorrentes": ["NASOAR (MYL)", "RINOSORO (MF+)", "AVALOX (BYP)", "PRAIVA (EUF)"] }, "NIMEGON": { "supera": ["NIMEGON (SP0)"], "concorrentes": ["GALVUS (FQM)", "JANUVIA (MSD)", "NESINA (HYQ)", "SITGLU (B3H)", "SUGANON (EUF)"] }, "NIMEGON MET": { "supera": ["NIMEGON MET (SP0)"], "concorrentes": ["GALVUS MET (FQM)", "JANUMET (MSD)", "JANUMET XR (MSD)", "NESINA MET (HYQ)", "SITGLU MET (B3H)"] }, "OKOTICO": { "supera": ["OKOTICO (SP0)"], "concorrentes": ["LEPONEX (VI/)", "PINAZAN (CT6)"] }, "PEN VE ORAL": { "supera": ["PEN-VE-ORAL (SP0)"], "concorrentes": [] }, "PERCOF": { "supera": ["PERCOF (SP0)"], "concorrentes": ["ANTUX (A4H)", "NOTUSS TSS (A4H)", "VIBRAL (ABD)"] }, "PHOSFOENEMA": { "supera": ["PHOSFOENEMA (SP0)"], "concorrentes": ["L-ENEMA (NAU)"] }, "PROMIM": { "supera": ["PROMIM (SP0)"], "concorrentes": ["ANTROFI (EUF)", "COLPOTROFINE (TRM)", "COLTRIENO (MYL)"] }, "PROS": { "supera": ["PROS (SP0)"], "concorrentes": ["DOXAPROST (U.Q)", "DUOMO (EUF)"] }, "PROS HP": { "supera": ["PROS HP (SP0)"], "concorrentes": ["DUOMO HP (EUF)", "HOMINUS (EUF)"] }, "RENOVI B": { "supera": ["RENOVI B (SP0)"], "concorrentes": ["BETRAT (MYL)", "CITOBE (EUF)", "CITONEURIN 5000 (PGH)", "CRONOBE COMPLEX (BS2)", "NEO B (EUF)", "NEVRIX (AEE)"] }, "RENOVI B PLUS": { "supera": ["RENOVI B PLUS (SP0)"], "concorrentes": ["CRONOBE COMPLEX (BS2)", "DEXA-CITONEURI NFF (PGH)", "DEXADOR (AEE)"] }, "RISPERIDON": { "supera": ["RISPERIDON (SP0)"], "concorrentes": ["RISS (EUF)", "VIVERDAL (U.Q)", "ZARGUS (A4H)"] }, "RISPERIDON SOL": { "supera": ["RISPERIDON (SP0)"], "concorrentes": ["PERLID (PZ8)", "RISPERDAL (CLR)", "RISPERIDONA MG (EMS)", "RISPERIDONA MG (GM2)", "RISPERIDONA MG (NQA)", "RISPERIDONA MG (PZ8)"] }, "ROXETIN": { "supera": ["ROXETIN (SP0)"], "concorrentes": ["AROPAX (GSK)", "MORATUS (A4H)", "PONDERA (EUF)"] }, "ROXETIN XR": { "supera": ["ROXETIN XR (SP0)"], "concorrentes": ["PAXIL CR (GSK)", "PONDERA XR (EUF)", "SINCRO XR (EUF)"] }, "SENES": { "supera": ["SENES (SP0)"], "concorrentes": ["DON (EUF)", "DONILA (A4H)", "EPEZ (TNT)"] }, "SIMECO PLUS": { "supera": ["SIMECO PLUS (SP0)"], "concorrentes": ["GASTROBION (HTZ)", "GASTROGEL (MDQ)", "MAGNAZIA (CM5)", "MYLANTA PLUS (KVU)", "PEPSOGEL (LR8)", "STOMALIV STC (GOB)"] }, "SOPI": { "supera": ["SOPI (SP0)"], "concorrentes": ["FERTISOP (MYL)", "FOLIA SOP (GRO)", "OFOLATO SOP (MF+)"] }, "SOPI H": { "supera": ["SOPI H (SP0)"], "concorrentes": ["ANDRACTIV (B4I)", "VITERGAN ZINCO PL (MJA)", "VITERGAN ZINCO PLD (MJA)", "ANSITEC (LIB)", "APRAZ (MF+)", "DIAZEPAM NQ (MB9)", "FRISIUM (MA8)", "FRONTAL (VI/)", "LEXOTAN (MA8)", "SOMALIUM (A4H)"] }, "TAM": { "supera": ["TAM (SP0)"], "concorrentes": ["ANTARA (EUF)", "ETIRA (A4H)", "KEPPRA (UCB)"] }, "TAM SOL": { "supera": ["TAM (SP0)"], "concorrentes": ["ANTARA (EUF)", "ETIRA (A4H)", "KEPPRA (UCB)", "SPARK (EUF)"] }, "TAM XR": { "supera": ["TAM XR (SP0)"], "concorrentes": ["ANTARA XR (EUF)", "KEPPRA XR (UCB)", "SPARK XR (EUF)"] }, "TRIPLOA": { "supera": ["TRIPLOA (SP0)"], "concorrentes": ["ALGIE (EUF)", "ARTROSIL (A4H)", "BICERTO (EUF)", "BI-PROFENID (S.A)"] }, "TROL": { "supera": ["TROL (SP0)"], "concorrentes": ["GESICO RETARD (EUF)", "TRAMADON (CT6)", "TRAMAL RETARD (GRT)", "TRAUM RETARD (A4H)"] }, "TROL PAR": { "supera": ["TROL PAR (SP0)"], "concorrentes": ["ATRACE (EUF)", "GESICO DUO (EUF)", "PARATRAM (A5U)", "REVANGE (A4H)"] }, "TYNNA": { "supera": ["TYNNA (SP0)"], "concorrentes": ["ALEKTOS (HYQ)", "HISBILA (EUF)", "NAIRE (EUF)"] }, "ULTROX": { "supera": ["ULTROX (SP0)"], "concorrentes": ["CETROLAC SL (U.Q)", "SYMDULOR SL (A5U)", "TORAGESIC (EMS)", "TORMIV SL (A4H)", "TOTTI SL (A4H)"] }, "VAGICAND": { "supera": ["VAGICAND (SP0)"], "concorrentes": [] }, "VALASKI": { "supera": ["VALASKI (SP0)"], "concorrentes": ["DENPRYX (FQM)", "HERPSTAL (UKT)", "VALTREX (GSK)", "VILAXY (EUF)"] }, "VITA COLIN": { "supera": ["VITA COLIN (SP0)"], "concorrentes": ["DAYVIT KIDS (A4H)", "FERROVITAN COLINA (EUF)", "NEUTROFER POLI (EMS)", "NEUTROFER PREV (EMS)", "PURAVIT IMUNE (MYL)", "ZIRVIT KIDS (AEE)", "ZIRVIT KIDS MAX (AEE)"] }, "VIVAMENT": { "supera": ["VIVAMENT (SP0)"], "concorrentes": ["COGMAX (EUF)", "COGMAX FOS (EUF)", "COGNI MAIS (FQM)", "COGNICX (U.Q)", "LOGNIS (AS2)", "QUELATUS MIND (EUF)"] }, "VIVOSSO": { "supera": ["VIVOSSO (SP0)"], "concorrentes": ["CALDE (MJA)", "CALDE MAX (MJA)", "CALTRATE D NF (HE4)", "MOBILITY OSCAL (O/P)", "MOBILITY OSCAL D (O/P)", "OS-CAL D (O/P)", "OSSOTRAT-D (CLR)", "OSTEONUTRI (A3N)", "PROSSO (EUF)"] }, "VIVOSSO PRO": { "supera": ["VIVOSSO PRO (SP0)"], "concorrentes": ["ADDERA CAL (MF+)", "CALDE K2 (MJA)", "CALDE MDK (MJA)", "FIXARE (EMS)", "OS-CAL D (O/P)", "PROSSO (EUF)", "PROSSO D+KM (EUF)"] }, "VORXE": { "supera": ["VORXE (SP0)"], "concorrentes": ["BRINTELLIX (LUN)", "EVORTIA (MF+)", "VOEXTOR (LIB)", "VOGNUS (EMS)", "VURTUOSO (LUN)"] }, "ZOUP SL": { "supera": ["ZOUP SL (SP0)"], "concorrentes": ["LUNE SL (MF+)", "PATZ SL (EMS)", "RIPOSO SL (EUF)", "TURNO SL (EUF)"] } };

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
    brickSortDir: 'desc'
};

/* ===== HELPERS ===== */
const $ = id => document.getElementById(id);
const norm = s => String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
const normU = s => String(s || '').toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
const fmtN = n => n == null || n === 0 ? '—' : Math.round(n).toLocaleString('pt-BR');
const fmtCurrency = n => n == null || n === 0 ? '—' : 'R$ ' + Math.round(n).toLocaleString('pt-BR');
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

function toast(msg) {
    const d = document.createElement('div');
    d.className = 'toast';
    d.textContent = msg;
    document.body.appendChild(d);
    setTimeout(() => d.remove(), 3000);
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
    if (forceUnit === 'UN' || forceUnit === 'RS') return forceUnit;
    const blob = (fileName + ' | ' + sheetName + ' | ' + (matHeader || '')).toLowerCase();
    const b = blob.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    // Não usamos \b porque nomes como DDDREAIS-CONSOLIDADO ficam colados
    if (/r\$|reais?|fatur|valor|\$/.test(b)) return 'RS';
    if (/unidades?|\bun\b|# ?un|dddunid/.test(b)) return 'UN';
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

/* ===== RECOMENDAÇÃO POR BRICK (Supera × Mercado)
        Regra alinhada ao layout do usuário:
        - ENTRAR     → Supera = 0 no brick
        - LÍDER      → Supera é maior vendedor do brick (share ≥ qualquer concorrente)
        - CRESCER    → Supera crescendo > 20% vs período anterior
        - ACOMPANHAR → Supera caindo < -10%
        - OPORTUNIDADE → caso contrário                                ===== */
/* v3.11 — classificação ESTRITAMENTE pela posição da Supera no ranking do brick.
   Regras (definidas pelo usuário):
     • Sem venda da Supera (superaCur = 0) e brick com vendas concorrentes  → ENTRAR
     • Posição 1ª                                                          → LÍDER
     • Posição 2ª                                                          → CRESCER
     • Posição 3ª ou 4ª                                                    → OPORTUNIDADE
     • Posição 5ª ou pior                                                  → ACOMPANHAR
   Mantemos a assinatura antiga (superaCur, superaPrev, concMax, growth) por compat,
   mas adicionamos `pos` como 5º parâmetro e priorizamos ele.                       */
function calcRecBrick(superaCur, superaPrev, concMax, growth, pos) {
    if (!superaCur || superaCur <= 0) return 'ENTRAR';
    if (pos === 1) return 'LÍDER';
    if (pos === 2) return 'CRESCER';
    if (pos === 3 || pos === 4) return 'OPORTUNIDADE';
    return 'ACOMPANHAR';
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
function aggBricksOfMarket(rows, pd) {
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
        b.totalCur += d.current || 0;
        b.totalPrev += d.previous || 0;
        if (r.role === 'SUPERA') {
            b.superaCur += d.current || 0;
            b.superaPrev += d.previous || 0;
        } else {
            const c = b.concorrentes.get(r.product) || { cur: 0, prev: 0 };
            c.cur += d.current || 0;
            c.prev += d.previous || 0;
            b.concorrentes.set(r.product, c);
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
        b.rec = calcRecBrick(b.superaCur, b.superaPrev, concMax, b.growth, rk.posSupera);
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
        const bricks = aggBricksOfMarket(rs, pd);
        const current = bricks.reduce((s, b) => s + b.totalCur, 0);
        const previous = bricks.reduce((s, b) => s + b.totalPrev, 0);
        const supera = bricks.reduce((s, b) => s + b.superaCur, 0);
        const recs = { 'LÍDER': [], 'CRESCER': [], 'OPORTUNIDADE': [], 'ACOMPANHAR': [], 'ENTRAR': [] };
        bricks.forEach(b => recs[b.rec].push(b));
        const growth = previous !== 0 ? ((current / previous) - 1) : null;
        const share = current ? (supera / current) * 100 : 0;
        const bricksCount = bricks.length;
        out.push({
            market, bricks, bricksCount,
            current, previous, growth,
            supera, share, recs, rows: rs
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

    const fRows = DB.rows.filter(r => {
        if (UI.sector !== 'all' && r.sector !== UI.sector) return false;
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
            case 'supera': va = a.supera; vb = b.supera; break;
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
    html += `<th class="sortable c-supera" data-key="superaname">MARCA SUPERA ${arr('superaname')}</th>`;
    html += `<th class="c sortable" data-key="bricks">BRICKS ${arr('bricks')}</th>`;
    html += `<th class="r sortable" data-key="current">MERCADO TOTAL ${arr('current')}</th>`;
    html += `<th class="r sortable c-supera" data-key="supera">TOTAL SUPERA ${arr('supera')}</th>`;
    html += `<th class="r sortable" data-key="share">SHARE % ${arr('share')}</th>`;
    html += `<th class="c sortable c-lider" data-key="lider">LÍDER ${arr('lider')}</th>`;
    html += `<th class="c sortable c-crescer" data-key="crescer">CRESCER ${arr('crescer')}</th>`;
    html += `<th class="c sortable c-oport" data-key="oport">OPORT. ${arr('oport')}</th>`;
    html += `<th class="c sortable c-acomp" data-key="acomp">ACOMP. ${arr('acomp')}</th>`;
    html += `<th class="c sortable c-entrar" data-key="entrar">ENTRAR ${arr('entrar')}</th>`;
    html += `<th class="c">AÇÃO</th>`;
    html += '</tr></thead><tbody>';

    if (!mktAgg.length) {
        html += '<tr><td colspan="13" class="tbl-empty">Nenhum mercado encontrado para os filtros selecionados.</td></tr>';
    }

    // Pré-cálculo: label da marca Supera por mercado (usado no sort)
    mktAgg.forEach(m => {
        const lst = (MARKETS_BRANDS_MAP[normU(m.market)] || {}).supera || [];
        m.superaLabel = lst.length ? lst[0].replace(/\s*\(SP0\)\s*/i, '') : m.market;
    });

    mktAgg.forEach((m, idx) => {
        const rowId = 'mkt_' + norm(m.market).replace(/\s+/g, '_');
        const isExpanded = UI.expandedRows.has(rowId);

        html += `<tr class="mkt-row" id="row_${rowId}">
            <td class="expand-cell"><button class="expand-btn" onclick="toggleExpand('${rowId}')">${isExpanded ? '−' : '+'}</button></td>
            <td><div class="mkt-name">${m.market}</div></td>
            <td><div class="mkt-supera-name">${m.superaLabel}</div></td>
            <td class="c"><span class="bricks-count">${m.bricksCount}</span></td>
            <td class="r">${fmtValue(m.current)}</td>
            <td class="r vacc">${fmtValue(m.supera)}</td>
            <td class="r">${m.share.toFixed(1)}%</td>
            ${recCell(m, 'LÍDER', 'rb-lider')}
            ${recCell(m, 'CRESCER', 'rb-crescer')}
            ${recCell(m, 'OPORTUNIDADE', 'rb-oport')}
            ${recCell(m, 'ACOMPANHAR', 'rb-acomp')}
            ${recCell(m, 'ENTRAR', 'rb-entrar')}
            <td class="c"><button class="ver-btn" onclick="showVerModal('${escStr(m.market)}')">👁 Ver</button></td>
        </tr>`;

        if (isExpanded) {
            // v3.5: ranking como TABELA VERTICIAL com evolução atual vs anterior.
            const ranking = aggMarketRanking(m.rows, pd, 30);
            const unitLabel = UI.unitMode === 'RS' ? 'R$' : 'Un.';
            html += `<tr class="concs-row"><td></td><td colspan="12" class="concs-wrap">
                <div class="concs-title">🏆 Ranking neste mercado — ${pd} · ${UI.unitMode === 'RS' ? 'R$' : 'Unidades'}</div>
                <table class="rank-tbl">
                    <thead><tr>
                        <th class="c" style="width:54px">POS.</th>
                        <th>MARCA</th>
                        <th class="r">${pd} ANTERIOR</th>
                        <th class="r">${pd} ATUAL</th>
                        <th class="r">EVOLUÇÃO</th>
                        <th class="r">SHARE ATUAL</th>
                    </tr></thead>
                    <tbody>
                    ${ranking.map((c, i) => {
                const isSup = c.role === 'SUPERA';
                const g = c.growth;
                const gCls = g == null ? 'vnull' : (g >= 0 ? 'vpos' : 'vneg');
                const gTxt = g == null ? '—' : ((g >= 0 ? '+' : '') + (g * 100).toFixed(1) + '%');
                const displayName = isSup ? c.name.replace(/\s*\(SP0\)\s*/i, '').trim() : c.name;
                return `
                        <tr class="rank-row${isSup ? ' rank-supera' : ''}">
                            <td class="c rank-pos">${i + 1}º</td>
                            <td class="rank-name">${displayName}${isSup ? ' <span class="rank-sup-badge">SUPERA</span>' : ''}</td>
                            <td class="r rank-prev">${fmtValue(c.prev)}</td>
                            <td class="r">${fmtValue(c.cur)}</td>
                            <td class="r ${gCls}"><strong>${gTxt}</strong></td>
                            <td class="r"><span class="rank-share">${c.share.toFixed(1)}%</span></td>
                        </tr>`;
            }).join('')}
                    </tbody>
                </table>
            </td></tr>`;

            // Bricks individuais: linhas estreitas com crescimento, share e recomendação
            const bricks = [...m.bricks].sort((a, b) => b.superaCur - a.superaCur);
            bricks.forEach(b => {
                const gCls = b.growth != null && b.growth >= 0 ? 'vpos' : 'vneg';
                const secClean = cleanSectorName(b.sector);
                html += `<tr class="brick-row">
                    <td></td>
                    <td class="brick-cell">
                        <span class="brick-loc">📍 ${b.cidade || '—'}</span>
                        <span class="brick-code">${b.brick}</span>
                        ${secClean ? `<span class="brick-sector">${secClean}</span>` : ''}
                    </td>
                    <td></td>
                    <td class="c"><small>1 brick</small></td>
                    <td class="r">${fmtValue(b.totalCur)}</td>
                    <td class="r vacc">${fmtValue(b.superaCur)}</td>
                    <td class="r"><strong>${b.share.toFixed(1)}%</strong></td>
                    <td class="r ${gCls}"><strong>${fmtPct(b.growth)}</strong></td>
                    <td colspan="5" class="c"><span class="rec-pill ${recPillCls(b.rec)}">${b.rec}</span></td>
                    <td></td>
                </tr>`;
            });
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

/* ===== MODAL DE BRICKS POR RECOMENDAÇÃO (print 2 do usuário) ===== */
function showBrickModal(market, rec) {
    const pd = UI.periodMode;
    // Se um setor está ativo, filtra os bricks apenas daquele setor
    let rows = DB.rows.filter(r => r.market === market);
    if (UI.sector !== 'all') {
        rows = rows.filter(r => r.sector === UI.sector);
    }
    const bricks = aggBricksOfMarket(rows, pd).filter(b => b.rec === rec);
    bricks.sort((a, b) => (b.superaCur - a.superaCur) || a.brick.localeCompare(b.brick));
    // Indica no título se está filtrado por setor
    const sectorLabel = UI.sector !== 'all' ? ` · ${cleanSectorName(UI.sector)}` : '';

    const titleMap = {
        'LÍDER': 'DEFENDER LIDERANÇA',
        'CRESCER': 'ACELERAR CRESCIMENTO',
        'OPORTUNIDADE': 'CAPTURAR OPORTUNIDADE',
        'ACOMPANHAR': 'ACOMPANHAR DE PERTO',
        'ENTRAR': 'ENTRAR NO MERCADO'
    };
    $('brickModalTitle').innerHTML = `<span class="mmodal-mkt">${market}</span>
        <span class="mmodal-sep">—</span>
        <span class="mmodal-rec ${recPillCls(rec)}">${titleMap[rec]} (${bricks.length} bricks)</span>${sectorLabel ? `<span class="mmodal-sub">${sectorLabel}</span>` : ''}`;

    let html = `<table class="modal-tbl"><thead><tr>
        <th class="w-hash">#</th>
        <th class="col-brick">Brick (Número + Nome)</th>
        <th class="col-setor">Setor</th>
        <th class="r">Supera ${pd} Ant.</th>
        <th class="r">Supera ${pd} Atual</th>
        <th class="r">Mercado ${pd} Ant.</th>
        <th class="r">Mercado ${pd} Atual</th>
        <th class="r">Share %</th>
        <th class="r">Evolução</th>
        <th>Líder do Brick</th>
        <th class="r">Gap p/ superar</th>
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
            html += `<tr>
                <td class="w-hash">${i + 1}</td>
                <td class="col-brick"><code class="brick-code-mono">${b.brick}</code></td>
                <td class="col-setor">${cleanSectorName(b.sector) || '—'}</td>
                <td class="r vacc">${fmtValue(b.superaPrev)}</td>
                <td class="r vacc">${fmtValue(b.superaCur)}</td>
                <td class="r">${fmtValue(b.totalPrev)}</td>
                <td class="r">${fmtValue(b.totalCur)}</td>
                <td class="r"><strong>${b.share.toFixed(1)}%</strong></td>
                <td class="r ${gCls}">${fmtPct(b.growth)}</td>
                <td><small>${leaderIsSupera ? '<span class="vpos">✓ SUPERA</span>' : leaderName}</small></td>
                <td class="r ${gapCls}"><small>${gapLabel}</small></td>
            </tr>`;
        });
    }
    html += '</tbody></table>';
    $('brickModalBody').innerHTML = html;
    $('brickModalFooter').textContent = bricks.length + ' bricks';
    $('brickModal').classList.add('open');
}

/* ===== MODAL DE "VER" — detalhe do mercado (print 3) ===== */
function showVerModal(market) {
    const pd = UI.periodMode;
    const rows = DB.rows.filter(r => r.market === market);
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
    /* v3.16 — base de checagem agora é o universo (allRowsByValueMode). */
    const all = DB.allRowsByValueMode || { UN: [], RS: [] };
    const hasData = all[mode] && all[mode].length;
    if (!hasData && Object.values(all).some(a => a.length)) {
        toast('Nenhuma planilha de ' + (mode === 'RS' ? 'R$' : 'Unidades') + ' carregada ainda. Clique em "Carregar Dados" para adicionar.');
    }
    /* Marca que o usuário escolheu explicitamente o modo (para o próximo upload) */
    window._unitForced = mode;
    UI.unitMode = mode;
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
            const o = document.createElement('option'); o.value = d; o.textContent = d; fbDist.appendChild(o);
        });
        fbDist.value = DB.distritais.includes(cur) ? cur : 'all';
        if (fbDist.value !== cur) UI.distrital = fbDist.value;
        const wrap = fbDist.closest('.fbar-group');
        if (wrap) wrap.style.display = (DB.distritais.length > 1) ? '' : 'none';
    }
    const fbSec = $('fbSec'); const fbMkt = $('fbMkt'); const fbGoto = $('fbGoto');
    [fbSec, fbMkt, fbGoto].forEach(sel => { while (sel.children.length > 1) sel.removeChild(sel.lastChild); });
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
        const o2 = o.cloneNode(true); fbGoto.appendChild(o2);
    });
    /* mantém seleções atuais quando ainda existirem na nova lista */
    if ($('fbSec')) $('fbSec').value = sectors.includes(UI.sector) ? UI.sector : 'all';
    if ($('fbMkt')) $('fbMkt').value = markets.includes(UI.market) ? UI.market : 'all';
    if (!sectors.includes(UI.sector)) UI.sector = 'all';
    if (!markets.includes(UI.market)) UI.market = 'all';
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

    const fRows = DB.rows.filter(r => {
        if (UI.sector !== 'all' && r.sector !== UI.sector) return false;
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
        const bricks = aggBricksOfMarket(rs, pd);
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
    const hH = hdr ? hdr.offsetHeight : 60;
    const kH = (kpi && kpi.style.display !== 'none') ? kpi.offsetHeight : 0;
    const tH = tab ? tab.offsetHeight : 38;
    const fH = fil ? fil.offsetHeight : 46;
    root.style.setProperty('--hdr-h', hH + 'px');
    root.style.setProperty('--kpi-h', kH + 'px');
    root.style.setProperty('--tab-h', tH + 'px');
    root.style.setProperty('--fb-h', fH + 'px');
}

/* Dispara recomputação após cada render/resize. */
window.addEventListener('resize', () => recomputeStickyOffsets());

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
    if (tn === 'brick') renderBrick();
    if (tn === 'oport') renderOport();
    if (tn === 'entrar') renderEntrar();
    if (tn === 'graficos') renderGraficos();
    if (tn === 'resumo') renderResumo();
    if (tn === 'pdv') renderPDV();
}

/* ===== EXPORT XLSX ===== */
function exportXLSX() {
    if (!DB.rows.length) { toast('Nenhum dado para exportar'); return; }
    const pd = UI.periodMode;
    const data = DB.rows.map(r => {
        const d = r.data[pd];
        return {
            'Setor (GD)': r.sector,
            'Mercado': r.market,
            'Produto': r.product,
            'Tipo': r.role,
            'Brick': r.brickName,
            'Cidade': r.cidade,
            ['Unid. ' + pd + ' Anterior']: d.previous,
            ['Unid. ' + pd + ' Atual']: d.current,
            'Crescimento %': d.growth != null ? (d.growth * 100).toFixed(2) + '%' : ''
        };
    });
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Dados');
    XLSX.writeFile(wb, 'supera_rx_' + pd + '_' + UI.unitMode + '.xlsx');
    toast('Arquivo exportado');
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

        if (rowsByMode.RS.length && !rowsByMode.UN.length) {
            UI.unitMode = 'RS';
            applyHierarchy();
        } else if (rowsByMode.UN.length && !rowsByMode.RS.length && (prev.UN || []).length === rowsByMode.UN.length) {
            UI.unitMode = 'UN';
            applyHierarchy();
        }
        document.querySelectorAll('.unit-btn').forEach(b => b.classList.remove('active'));
        const btn = $('btn' + UI.unitMode);
        if (btn) btn.classList.add('active');

        $('uploadView').style.display = 'none';
        $('dashView').style.display = 'block';
        $('kpiStrip').style.display = 'flex';
        rebuildSelectors();
        buildSectorTabs();
        updateDistritalHeader();
        renderResumo();
        // Recomputa alturas após primeiro render
        requestAnimationFrame(() => recomputeStickyOffsets());

        const msg = diagnostics.map(d => `${d.file}${d.forced ? ' (forçada)' : ''}: ${d.mode === 'RS' ? 'R$' : 'Unidades'}`).join(' · ');
        const statusEl = $('datasetStatus');
        if (statusEl) {
            const allMM = DB.allRowsByValueMode || { UN: [], RS: [] };
            const unOk = (allMM.UN && allMM.UN.length) ? '<span class="ds-ok">Unidades</span>' : '<span class="ds-off">Unidades</span>';
            const rsOk = (allMM.RS && allMM.RS.length) ? '<span class="ds-ok">R$</span>' : '<span class="ds-off">R$</span>';
            statusEl.innerHTML = `Planilhas: ${unOk} · ${rsOk}`;
        }
        toast(DB.markets.length + ' mercados · ' + msg);
    } catch (e) {
        console.error('[SUPERA] Erro init:', e);
        toast('Erro: ' + e.message);
    }
}

/* ===== EVENTOS ===== */
document.addEventListener('DOMContentLoaded', () => {
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
    const mkts = aggMarkets(DB.rows, pd);
    // Critério: mercados grandes com share < 50% e volume significativo
    const medianCur = median(mkts.map(m => m.current));
    const oport = mkts.filter(m => m.current >= medianCur && m.share < 50 && m.share > 5).sort((a, b) => (b.current - a.current));
    let html = '<div class="panel-block"><h3 class="panel-h3">Oportunidades Principais</h3>';
    html += '<p class="panel-sub">Mercados grandes onde a Supera ainda não é líder, com volume relevante e espaço para crescer.</p>';
    html += '<table class="modal-tbl"><thead><tr><th>Mercado</th><th class="r">Mercado ' + pd + ' Ant.</th><th class="r">Mercado ' + pd + ' Atual</th><th class="r">Supera</th><th class="r">Share</th><th class="r">Crescimento</th><th class="c">Potencial</th></tr></thead><tbody>';
    if (!oport.length) html += '<tr><td colspan="7" class="tbl-empty">Sem oportunidades claras nos filtros atuais.</td></tr>';
    oport.forEach(m => {
        const gap = m.current - m.supera;
        html += `<tr>
            <td><strong>${m.market}</strong></td>
            <td class="r">${fmtValue(m.previous)}</td>
            <td class="r">${fmtValue(m.current)}</td>
            <td class="r vacc">${fmtValue(m.supera)}</td>
            <td class="r">${m.share.toFixed(1)}%</td>
            <td class="r ${m.growth >= 0 ? 'vpos' : 'vneg'}">${fmtPct(m.growth)}</td>
            <td class="c"><span class="pot-pill">+${fmtValue(gap)}</span></td>
        </tr>`;
    });
    html += '</tbody></table></div>';
    el.innerHTML = html;
}

function renderEntrar() {
    const el = $('tab-entrar'); if (!el) return;
    const pd = UI.periodMode;
    const mkts = aggMarkets(DB.rows, pd);
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
    const mkts = aggMarkets(DB.rows, pd).sort((a, b) => b.current - a.current);
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
    const withSupera = mkts.filter(m => m.supera > 0).sort((a, b) => b.share - a.share).slice(0, 15);
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
    rowsByValueMode: { UN: [], RS: [] },  // todas as linhas brutas (uma por CNPJ × Marca × Brick)
    pdvsByValueMode: { UN: [], RS: [] },  // agregadas: 1 obj por CNPJ
    cnpjCache: {},                         // cache local de respostas BrasilAPI
    sortKey: 'mat_cur',
    sortDir: 'desc',
    filter: { brick: 'all', cidade: 'all', setor: 'all', marca: 'all', search: '' }
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
    const data = await file.arrayBuffer();
    const wb = XLSX.read(data, { type: 'array' });
    const ws = wb.Sheets[wb.SheetNames[0]];
    const aoa = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });
    if (!aoa.length) throw new Error('Planilha vazia.');

    const fname = (file.name || '').toLowerCase();
    let unitMode = forceUnit || (/(reai|r\$|rs)/i.test(fname) ? 'RS' : 'UN');

    // Localiza header
    let headerIdx = 0;
    for (let i = 0; i < Math.min(5, aoa.length); i++) {
        const row = aoa[i].map(c => String(c || '').toLowerCase());
        if (row.some(c => c.includes('pdv')) && row.some(c => c.includes('brick'))) {
            headerIdx = i; break;
        }
    }
    const header = aoa[headerIdx].map(c => String(c || '').toLowerCase().trim());

    const ix = (patterns) => header.findIndex(h => patterns.some(p => p.test(h)));
    const iSet = ix([/^setor$/, /setor/]);
    const iMrc = ix([/^marca$/, /marca/]);
    const iBrk = ix([/^brick$/, /brick/]);
    const iPdv = ix([/^pdv$/, /pdv/, /cnpj/]);
    // MAT atual = coluna "MAT" sem (p.p), MAT anterior = "MAT (p.p)"
    const iMatA = header.findIndex(h => /^mat$/i.test(h));
    const iMatP = header.findIndex(h => /^mat\s*\(p\.?p\.?\)/i.test(h));
    const iYtdA = header.findIndex(h => /^ytd$/i.test(h));
    const iYtdP = header.findIndex(h => /^ytd\s*\(p\.?p\.?\)/i.test(h));
    const iTriA = header.findIndex(h => /^tri$/i.test(h));
    const iTriP = header.findIndex(h => /^tri\s*\(p\.?p\.?\)/i.test(h));
    const iTriY = header.findIndex(h => /^tri\s*\(p\.?y\.?\)/i.test(h));

    if (iPdv < 0 || iBrk < 0) throw new Error('Cabeçalho inválido (faltam PDV/Brick).');

    const rows = [];
    for (let r = headerIdx + 1; r < aoa.length; r++) {
        const row = aoa[r];
        if (!row || !row.length) continue;
        const pdvStr = String(row[iPdv] || '').trim();
        if (!pdvStr) continue;

        // Quebra "CNPJ | RAZAO | ENDERECO"
        const parts = pdvStr.split('|').map(s => s.trim());
        const cnpjRaw = onlyDigits(parts[0] || '');
        if (cnpjRaw.length !== 14) continue;
        const razao = parts[1] || '';
        const local = parts[2] || ''; // "BAIRRO - CIDADE / UF"
        let bairro = '', cidade = '', uf = '';
        const localM = local.match(/^(.*?)\s*-\s*(.*?)\s*\/\s*([A-Z]{2})\s*$/);
        if (localM) { bairro = localM[1].trim(); cidade = localM[2].trim(); uf = localM[3].trim(); }

        const setor = String(row[iSet] || '').trim();
        const marca = String(row[iMrc] || '').trim();
        const brick = String(row[iBrk] || '').trim();

        const matA = iMatA >= 0 ? parseNum(row[iMatA]) : 0;
        const matP = iMatP >= 0 ? parseNum(row[iMatP]) : 0;
        const ytdA = iYtdA >= 0 ? parseNum(row[iYtdA]) : 0;
        const ytdP = iYtdP >= 0 ? parseNum(row[iYtdP]) : 0;
        const triA = iTriA >= 0 ? parseNum(row[iTriA]) : 0;
        const triP = iTriP >= 0 ? parseNum(row[iTriP]) : 0;
        const triY = iTriY >= 0 ? parseNum(row[iTriY]) : 0;

        if (matA + matP + ytdA + ytdP + triA + triP === 0) continue;

        // tri_prev = trimestre do ANO ANTERIOR (TRI p.y.), pois comparação é sempre ano vs ano.
        // tri_qprev = trimestre imediatamente anterior (TRI p.p.) — guardado para referência futura.
        rows.push({
            cnpj: cnpjRaw, razao, bairro, cidade, uf,
            setor, marca, brick,
            mat_cur: matA, mat_prev: matP,
            ytd_cur: ytdA, ytd_prev: ytdP,
            tri_cur: triA, tri_prev: triY, tri_qprev: triP,
            unitMode
        });
    }
    return { rows, unitMode };
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
                mat_cur: 0, mat_prev: 0, ytd_cur: 0, ytd_prev: 0,
                tri_cur: 0, tri_prev: 0, tri_qprev: 0,
                products: []
            };
            map.set(r.cnpj, p);
        }
        if (r.brick) p.bricks.add(r.brick);
        if (r.setor) p.setores.add(r.setor);
        if (r.marca) p.marcas.add(r.marca);
        p.mat_cur += r.mat_cur; p.mat_prev += r.mat_prev;
        p.ytd_cur += r.ytd_cur; p.ytd_prev += r.ytd_prev;
        p.tri_cur += r.tri_cur; p.tri_prev += r.tri_prev; p.tri_qprev += (r.tri_qprev || 0);
        p.products.push({
            marca: r.marca, brick: r.brick, setor: r.setor,
            mat_cur: r.mat_cur, mat_prev: r.mat_prev,
            ytd_cur: r.ytd_cur, ytd_prev: r.ytd_prev,
            tri_cur: r.tri_cur, tri_prev: r.tri_prev
        });
    });
    return [...map.values()].map(p => ({
        ...p,
        bricks: [...p.bricks].sort(),
        setores: [...p.setores].sort(),
        marcas: [...p.marcas].sort()
    }));
}

/* ----- Persist em localStorage ----- */
function savePDVData() {
    try {
        localStorage.setItem('SUPERA_PDV_DATA_v1', JSON.stringify({
            UN: PDV.rowsByValueMode.UN,
            RS: PDV.rowsByValueMode.RS
        }));
    } catch (e) { /* quota */ }
}

function loadPDVData() {
    try {
        const raw = localStorage.getItem('SUPERA_PDV_DATA_v1');
        if (raw) {
            const obj = JSON.parse(raw);
            PDV.rowsByValueMode.UN = obj.UN || [];
            PDV.rowsByValueMode.RS = obj.RS || [];
            PDV.pdvsByValueMode.UN = aggregatePDVs(PDV.rowsByValueMode.UN);
            PDV.pdvsByValueMode.RS = aggregatePDVs(PDV.rowsByValueMode.RS);
        }
    } catch (e) { /* ignore */ }
}

/* ----- Upload da planilha PDV ----- */
async function handlePDVUpload(files, opts) {
    const forceUnit = (opts && opts.forceUnit) || null;
    let countOk = 0, errors = [];
    for (const f of files) {
        try {
            toast('Processando ' + f.name + '...');
            const { rows, unitMode } = await parsePDVFile(f, forceUnit);
            // Substitui (não acumula) o conjunto correspondente — comportamento mais previsível.
            PDV.rowsByValueMode[unitMode] = rows;
            PDV.pdvsByValueMode[unitMode] = aggregatePDVs(rows);
            countOk++;
        } catch (e) {
            console.error('[PDV] Erro parse:', e);
            errors.push(f.name + ': ' + e.message);
        }
    }
    savePDVData();
    if (countOk) {
        const m = UI.unitMode;
        const tot = PDV.pdvsByValueMode[m].length;
        toast(`${tot} PDV(s) carregados em ${m === 'RS' ? 'R$' : 'Unidades'}.`);
    }
    if (errors.length) toast('Erros: ' + errors.join(' | '));
    renderPDV();
}

function clearPDVData() {
    PDV.rowsByValueMode = { UN: [], RS: [] };
    PDV.pdvsByValueMode = { UN: [], RS: [] };
    try { localStorage.removeItem('SUPERA_PDV_DATA_v1'); } catch (e) { }
    PDV.filter = { brick: 'all', cidade: 'all', setor: 'all', marca: 'all', search: '' };
    toast('Base de PDVs limpa.');
    renderPDV();
}

/* ----- RENDER PRINCIPAL DA ABA ----- */
function renderPDV() {
    const el = $('tab-pdv');
    if (!el) return;
    el.classList.add('pdv-view');

    const mode = UI.unitMode;
    const pdvs = PDV.pdvsByValueMode[mode] || [];
    const otherMode = mode === 'UN' ? 'RS' : 'UN';
    const hasOther = (PDV.pdvsByValueMode[otherMode] || []).length > 0;

    if (!pdvs.length) {
        el.innerHTML = `
            <div class="pdv-empty-state">
                <div class="pdv-empty-icon">🏥</div>
                <h2>Cadastro de farmácias por Brick — ${mode === 'RS' ? 'R$' : 'Unidades'}</h2>
                <p>
                    Carregue a planilha <strong>UNIDADES POR PDVS</strong> (extraída do IQVIA) para que o dashboard
                    ative a consulta de cada farmácia por CNPJ. A busca rápida no header e o pop-up com endereço,
                    telefone, razão social e vendas ficam disponíveis assim que a planilha for carregada.
                </p>
                ${hasOther ? `<p style="font-size:11.5px;color:#7a8aad;">Você já carregou a planilha em <b>${otherMode === 'RS' ? 'R$' : 'Unidades'}</b>. Para visualizar agora, clique em <b>${otherMode === 'RS' ? '$ R$' : '# Un.'}</b> no header.</p>` : ''}
                <input type="file" id="pdvFileInput" accept=".xlsx,.xls,.csv" hidden multiple>
                <button class="pdv-empty-btn" id="pdvEmptyBtn">📁 Carregar planilha de PDVs</button>
            </div>`;
        const inp = $('pdvFileInput');
        const btn = $('pdvEmptyBtn');
        if (btn && inp) {
            btn.onclick = () => inp.click();
            inp.onchange = e => { if (e.target.files.length) handlePDVUpload(e.target.files); e.target.value = ''; };
        }
        return;
    }

    // Toolbar + filtros
    const totalPdvs = pdvs.length;
    const totalUN = (PDV.pdvsByValueMode.UN || []).length;
    const totalRS = (PDV.pdvsByValueMode.RS || []).length;
    const periodLblHeader = (typeof UI !== 'undefined' && UI.periodMode) ? UI.periodMode : 'MAT';

    let html = `
        <div class="pdv-toolbar">
            <h3>🏥 PDVs por Brick <span class="pdv-period-badge">${periodLblHeader}</span></h3>
            <div class="pdv-tb-info">
                Visualizando <b>${totalPdvs}</b> farmácia(s) em <b>${mode === 'RS' ? 'R$' : 'Unidades'}</b>
                ${totalUN ? ' · Un.: <b>' + totalUN + '</b>' : ''}${totalRS ? ' · R$: <b>' + totalRS + '</b>' : ''}
                · Período destacado na tabela: <b>${periodLblHeader}</b>
            </div>
            <input type="file" id="pdvFileInput" accept=".xlsx,.xls,.csv" hidden multiple>
            <button class="pdv-upload-btn" id="pdvUploadBtn">📁 Carregar/Trocar planilha</button>
            <button class="pdv-clear-btn" id="pdvClearBtn">🗑 Limpar PDVs</button>
        </div>`;

    // Coleta opções de filtro
    const bricksSet = new Set(), citySet = new Set(), secSet = new Set(), marcaSet = new Set();
    pdvs.forEach(p => {
        p.bricks.forEach(b => bricksSet.add(b));
        if (p.cidade) citySet.add(p.cidade);
        p.setores.forEach(s => secSet.add(s));
        p.marcas.forEach(m => marcaSet.add(m));
    });
    const optList = (s, all) => {
        const arr = [...s].sort();
        return `<option value="all">${all}</option>` + arr.map(v => `<option value="${escapeHTML(v)}">${escapeHTML(v)}</option>`).join('');
    };

    html += `
        <div class="pdv-filterbar">
            <label>Brick</label>
            <select id="pdvFilterBrick">${optList(bricksSet, 'Todos os Bricks')}</select>
            <label>Cidade</label>
            <select id="pdvFilterCidade">${optList(citySet, 'Todas as Cidades')}</select>
            <label>Setor</label>
            <select id="pdvFilterSetor">${optList(secSet, 'Todos os Setores')}</select>
            <label>Marca</label>
            <select id="pdvFilterMarca">${optList(marcaSet, 'Todas as Marcas')}</select>
            <input type="text" id="pdvFilterSearch" placeholder="🔍 Buscar CNPJ, razão social, cidade, bairro..." value="${escapeHTML(PDV.filter.search)}">
            <span class="pdv-fb-spacer"></span>
            <span class="pdv-fb-count" id="pdvCount"></span>
        </div>`;

    // Aplica filtros locais + filtros globais (UI.sector / UI.market do header)
    const f = PDV.filter;
    const gSector = (typeof UI !== 'undefined' && UI.sector && UI.sector !== 'all') ? UI.sector : null;
    const gMarket = (typeof UI !== 'undefined' && UI.market && UI.market !== 'all') ? UI.market : null;
    // Helpers para casar nomes (planilha PDV usa "101101 - NOME"; consolidada pode usar só "NOME")
    const matchSector = (sectArr, target) => {
        if (!target) return true;
        const t = String(target).toUpperCase().trim();
        return sectArr.some(s => {
            const u = String(s).toUpperCase().trim();
            return u === t || u.includes(t) || t.includes(u);
        });
    };
    const matchMarket = (marcArr, target) => {
        if (!target) return true;
        const t = String(target).toUpperCase().trim();
        return marcArr.some(m => {
            const u = String(m).toUpperCase().trim();
            // marcas PDV podem vir como "ALEVO (SP0)"; consolidada pode ser "ALEVO"
            const uBase = u.replace(/\s*\(.*?\)\s*$/, '').trim();
            const tBase = t.replace(/\s*\(.*?\)\s*$/, '').trim();
            return u === t || uBase === tBase;
        });
    };
    let filtered = pdvs.filter(p => {
        if (f.brick !== 'all' && !p.bricks.includes(f.brick)) return false;
        if (f.cidade !== 'all' && p.cidade !== f.cidade) return false;
        if (f.setor !== 'all' && !p.setores.includes(f.setor)) return false;
        if (f.marca !== 'all' && !p.marcas.includes(f.marca)) return false;
        // Filtros globais
        if (gSector && !matchSector(p.setores, gSector)) return false;
        if (gMarket && !matchMarket(p.marcas, gMarket)) return false;
        if (f.search) {
            const blob = norm([p.cnpj, p.razao, p.cidade, p.bairro, p.bricks.join(' '), p.uf].join(' '));
            if (!blob.includes(norm(f.search))) return false;
        }
        return true;
    });

    // Ordenação (suporta crescimento mat_g/ytd_g/tri_g calculado on the fly)
    const dir = PDV.sortDir === 'asc' ? 1 : -1;
    const k = PDV.sortKey;
    const calcG = (p, prefix) => {
        const cur = p[prefix + '_cur'] || 0, prev = p[prefix + '_prev'] || 0;
        return prev > 0 ? (cur - prev) / prev : -Infinity;
    };
    filtered.sort((a, b) => {
        let av, bv;
        if (k === 'razao' || k === 'cidade' || k === 'cnpj') {
            return String(a[k] || '').localeCompare(String(b[k] || '')) * dir;
        }
        if (k === 'bricks') { av = a.bricks.length; bv = b.bricks.length; }
        else if (k === 'mat_g') { av = calcG(a, 'mat'); bv = calcG(b, 'mat'); }
        else if (k === 'ytd_g') { av = calcG(a, 'ytd'); bv = calcG(b, 'ytd'); }
        else if (k === 'tri_g') { av = calcG(a, 'tri'); bv = calcG(b, 'tri'); }
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

    html += `
        <div class="pdv-tbl-wrap">
            <table class="pdv-tbl">
                <thead><tr>
                    ${sh('cnpj', 'CNPJ', '', 'CNPJ da farmácia (clique para abrir detalhes)')}
                    ${sh('razao', 'Razão Social', '', 'Nome registrado na Receita Federal')}
                    ${sh('cidade', 'Cidade / Brick', '', 'Cidade e Brick atendido(s)')}
                    ${sh('bricks', '#Bricks', 'r', 'Quantidade de bricks atendidos')}
                    ${sh('mat_prev', 'MAT Ano Ant.', 'r', 'MAT do mesmo período do ano anterior (base de comparação)')}
                    ${sh('mat_cur', 'MAT', 'r', 'MAT atual (últimos 12 meses)')}
                    ${sh('mat_g', 'Cresc. MAT', 'r mark', 'Crescimento MAT vs ano anterior')}
                    ${sh('ytd_prev', 'YTD Ano Ant.', 'r', 'YTD do mesmo período do ano anterior (base de comparação)')}
                    ${sh('ytd_cur', 'YTD', 'r', 'YTD atual (acumulado do ano)')}
                    ${sh('ytd_g', 'Cresc. YTD', 'r mark', 'Crescimento YTD vs ano anterior')}
                    ${sh('tri_prev', 'TRI Ano Ant.', 'r', 'TRI do mesmo trimestre do ano anterior (base de comparação)')}
                    ${sh('tri_cur', 'TRI', 'r', 'TRI atual (último trimestre fechado)')}
                    ${sh('tri_g', 'Cresc. TRI', 'r mark', 'Crescimento TRI vs mesmo trimestre do ano anterior')}
                </tr></thead>
                <tbody>`;

    const colCount = 13;
    if (!filtered.length) {
        html += `<tr><td colspan="${colCount}" class="pdv-empty">Nenhuma farmácia encontrada com os filtros atuais.</td></tr>`;
    } else {
        filtered.forEach(p => {
            const gMAT = p.mat_prev > 0 ? (p.mat_cur - p.mat_prev) / p.mat_prev : null;
            const gYTD = p.ytd_prev > 0 ? (p.ytd_cur - p.ytd_prev) / p.ytd_prev : null;
            const gTRI = p.tri_prev > 0 ? (p.tri_cur - p.tri_prev) / p.tri_prev : null;
            const gC = (g) => g == null ? '' : (g >= 0 ? 'pdv-growth-pos' : 'pdv-growth-neg');
            const fmtG = (g) => g == null ? '—' : fmtPct(g);
            const brickShort = p.bricks.length === 1 ? p.bricks[0].split(' - ')[0] : (p.bricks.length + ' bricks');
            // Marca a coluna do período ativo (MAT/YTD/TRI) com classe especial
            const isMAT = pd === 'MAT', isYTD = pd === 'YTD', isTRI = pd === 'TRI';
            html += `<tr class="pdv-row-data">
                <td class="pdv-cnpj-cell" data-cnpj="${p.cnpj}" title="Abrir detalhes">${maskCNPJ(p.cnpj)}</td>
                <td class="pdv-razao-cell">${escapeHTML(p.razao)}</td>
                <td class="pdv-cidade-cell">${escapeHTML(p.cidade)}${p.uf ? ' / ' + p.uf : ''}<br><span class="pdv-brick-cell">${escapeHTML(brickShort)}</span></td>
                <td class="r">${p.bricks.length}</td>
                <td class="r ${isMAT ? 'period-active' : ''}">${fmtValue(p.mat_prev)}</td>
                <td class="r ${isMAT ? 'period-active' : ''}">${fmtValue(p.mat_cur)}</td>
                <td class="r mark ${gC(gMAT)} ${isMAT ? 'period-active' : ''}">${fmtG(gMAT)}</td>
                <td class="r ${isYTD ? 'period-active' : ''}">${fmtValue(p.ytd_prev)}</td>
                <td class="r ${isYTD ? 'period-active' : ''}">${fmtValue(p.ytd_cur)}</td>
                <td class="r mark ${gC(gYTD)} ${isYTD ? 'period-active' : ''}">${fmtG(gYTD)}</td>
                <td class="r ${isTRI ? 'period-active' : ''}">${fmtValue(p.tri_prev)}</td>
                <td class="r ${isTRI ? 'period-active' : ''}">${fmtValue(p.tri_cur)}</td>
                <td class="r mark ${gC(gTRI)} ${isTRI ? 'period-active' : ''}">${fmtG(gTRI)}</td>
            </tr>`;
        });
    }

    html += `</tbody></table></div>`;
    el.innerHTML = html;

    // Listeners
    const setSel = (id, key) => { const s = $(id); if (s) { s.value = PDV.filter[key]; s.onchange = () => { PDV.filter[key] = s.value; renderPDV(); }; } };
    setSel('pdvFilterBrick', 'brick');
    setSel('pdvFilterCidade', 'cidade');
    setSel('pdvFilterSetor', 'setor');
    setSel('pdvFilterMarca', 'marca');
    const sEl = $('pdvFilterSearch');
    if (sEl) {
        let t; sEl.oninput = () => { clearTimeout(t); t = setTimeout(() => { PDV.filter.search = sEl.value; renderPDV(); }, 200); };
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
        upInp.onchange = e => { if (e.target.files.length) handlePDVUpload(e.target.files); e.target.value = ''; };
    }
    if (clrBtn2) clrBtn2.onclick = () => {
        if (confirm('Tem certeza que deseja remover todas as farmácias carregadas?')) clearPDVData();
    };

    // Recalcula offsets sticky depois do render (a tab-rail pode ter rolado p/ 2 linhas)
    requestAnimationFrame(() => {
        if (typeof recomputeStickyOffsets === 'function') recomputeStickyOffsets();
    });
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

    // KPIs (vendas locais)
    let kpisHTML = '';
    if (localPdv) {
        const gMAT = localPdv.mat_prev > 0 ? (localPdv.mat_cur - localPdv.mat_prev) / localPdv.mat_prev : null;
        const gYTD = localPdv.ytd_prev > 0 ? (localPdv.ytd_cur - localPdv.ytd_prev) / localPdv.ytd_prev : null;
        const gTRI = localPdv.tri_prev > 0 ? (localPdv.tri_cur - localPdv.tri_prev) / localPdv.tri_prev : null;
        const sub = (g) => g == null ? '<div class="pdv-kpi-sub">—</div>' : `<div class="pdv-kpi-sub ${g < 0 ? 'neg' : ''}">${fmtPct(g)}</div>`;
        kpisHTML = `
            <div class="pdv-kpis">
                <div class="pdv-kpi"><div class="pdv-kpi-lbl">MAT (${modeLbl})</div><div class="pdv-kpi-val">${fmtValue(localPdv.mat_cur)}</div>${sub(gMAT)}</div>
                <div class="pdv-kpi"><div class="pdv-kpi-lbl">YTD (${modeLbl})</div><div class="pdv-kpi-val">${fmtValue(localPdv.ytd_cur)}</div>${sub(gYTD)}</div>
                <div class="pdv-kpi"><div class="pdv-kpi-lbl">TRI (${modeLbl})</div><div class="pdv-kpi-val">${fmtValue(localPdv.tri_cur)}</div>${sub(gTRI)}</div>
                <div class="pdv-kpi"><div class="pdv-kpi-lbl">Bricks</div><div class="pdv-kpi-val">${localPdv.bricks.length}</div><div class="pdv-kpi-sub">${localPdv.marcas.length} marca(s)</div></div>
            </div>`;
    } else {
        kpisHTML = `<div style="background:#fef3c7;color:#92400e;padding:10px 14px;border-radius:8px;margin-bottom:14px;font-size:12px;font-weight:600;">⚠ Esta farmácia não consta na sua planilha IQVIA carregada (sem dados de venda).</div>`;
    }

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

        // Lista produtos agrupados por marca, dentro do brick principal
        const prodMap = new Map();
        localPdv.products.forEach(p => {
            const k = p.marca + '||' + p.brick;
            const cur = prodMap.get(k) || { marca: p.marca, brick: p.brick, mat_cur: 0, mat_prev: 0, ytd_cur: 0, ytd_prev: 0, tri_cur: 0, tri_prev: 0 };
            cur.mat_cur += p.mat_cur; cur.mat_prev += p.mat_prev;
            cur.ytd_cur += p.ytd_cur; cur.ytd_prev += p.ytd_prev || 0;
            cur.tri_cur += p.tri_cur; cur.tri_prev += p.tri_prev || 0;
            prodMap.set(k, cur);
        });
        const prodList = [...prodMap.values()].sort((a, b) => b[curK] - a[curK]);

        let prodTbl = `<table class="pdv-prod-tbl"><thead><tr><th>Marca</th><th>Brick</th><th class="r">${pdLbl} Ant.</th><th class="r">${pdLbl}</th><th class="r">Cresc.</th></tr></thead><tbody>`;
        prodList.forEach(p => {
            const prev = p[prevK];
            const cur = p[curK];
            const g = prev > 0 ? (cur - prev) / prev : null;
            const gCls = g == null ? '' : (g >= 0 ? 'pdv-growth-pos' : 'pdv-growth-neg');
            const sup = isSupera(p.marca);
            prodTbl += `<tr class="${sup ? 'is-supera' : ''}"><td><strong>${escapeHTML(p.marca)}</strong></td><td><small style="color:#6b7a99;">${escapeHTML(p.brick.split(' - ')[0])}</small></td><td class="r">${fmtValue(prev)}</td><td class="r">${fmtValue(cur)}</td><td class="r ${gCls}">${g == null ? '—' : fmtPct(g)}</td></tr>`;
        });
        prodTbl += '</tbody></table>';

        venHTML = `
            <div class="pdv-card">
                <div class="pdv-card-h"><span class="pdv-card-h-ico">📊</span> Vendas IQVIA — ${modeLbl}</div>
                <div class="pdv-row"><span class="pdv-k">Bricks</span><span class="pdv-v">${localPdv.bricks.map(b => `<code>${escapeHTML(b)}</code>`).join('<br>')}</span></div>
                <div class="pdv-row"><span class="pdv-k">Setor(es)</span><span class="pdv-v"><small>${localPdv.setores.map(s => escapeHTML(s)).join('<br>') || '—'}</small></span></div>
                <div class="pdv-row"><span class="pdv-k">Marcas</span><span class="pdv-v"><small>${localPdv.marcas.length} marca(s) com venda</small></span></div>
                <div style="margin-top:10px;border-top:1px dashed #e0e7f1;padding-top:8px;">
                    <div style="font-size:10.5px;color:#6b7a99;font-weight:700;text-transform:uppercase;letter-spacing:.4px;margin-bottom:4px;">Produtos vendidos por essa farmácia</div>
                    ${prodTbl}
                </div>
            </div>`;
    }

    return kpisHTML + `<div class="pdv-modal-grid">${cadHTML}${venHTML}</div>`;
}

function wirePDVModalActions() {
    document.querySelectorAll('#pdvModalBody [data-act]').forEach(el => {
        el.onclick = () => {
            const act = el.getAttribute('data-act');
            const val = el.getAttribute('data-val');
            if (act === 'copy-tel' || act === 'copy-cnpj') {
                navigator.clipboard.writeText(val).then(() => toast('Copiado: ' + val));
            }
        };
    });
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
        p.products.forEach(pr => { if (pr.brick === brickStr) {
            totMat += pr.mat_cur; totMatPrev += pr.mat_prev; totYtd += pr.ytd_cur; totTri += pr.tri_cur; totProds++;
        }});
    });
    const gMAT = totMatPrev > 0 ? (totMat - totMatPrev) / totMatPrev : null;
    const subG = gMAT == null ? '<div class="pdv-kpi-sub">—</div>' : `<div class="pdv-kpi-sub ${gMAT < 0 ? 'neg' : ''}">${fmtPct(gMAT)}</div>`;

    // Sort PDVs por MAT do brick (desc)
    const rows = list.map(p => {
        let mC = 0, mP = 0, yC = 0, tC = 0;
        p.products.forEach(pr => { if (pr.brick === brickStr) { mC += pr.mat_cur; mP += pr.mat_prev; yC += pr.ytd_cur; tC += pr.tri_cur; }});
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
