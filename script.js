/* ════════════════════════════════════════
   SUPERA RX — ANÁLISE ESTRATÉGICA
   script.js v3 — share real Supera vs Concorrentes + header fixo ordenável
   ════════════════════════════════════════ */

/* ===== MAPA OFICIAL: 87 MERCADOS (Supera × Concorrentes) =====
   Gerado a partir da planilha MARCASCONCORRENTES-SUPERA-MERCADOS.
   A chave é o nome do mercado (UPPER). Cada entrada traz a lista de
   marcas Supera e concorrentes daquele mercado.                      */
const MARKETS_BRANDS_MAP = {"ALEVO":{"supera":["ALEVO (SP0)"],"concorrentes":["LEVOXIN (AS2)","LIVEPAX (A4H)","TAMIRAM (EUF)","TAVOK (EUF)"]},"ALONG-C":{"supera":["ALONG-C (SP0)"],"concorrentes":["COLFLEX CURCUMA (MF+)","CONDRES LONGBIO (EMS)","CURC (MF+)","MOTORE (A4H)"]},"ALPES XL":{"supera":["ALPES XL (SP0)"],"concorrentes":["BUP XL (EUF)","BUPIUM (EMS)","BUPIUM XL (EMS)","WELLBUTRIN XL (GSK)","ZETRON XL (LIB)"]},"AMYTRIL":{"supera":["AMYTRIL (SP0)"],"concorrentes":["ANAFRANIL (SDZ)","ANAFRANIL SR (SDZ)","CLO (B3H)","IMIPRA (CT6)","MITRIP (MYL)","PAMELOR (CLR)"]},"ANDES":{"supera":["ANDES (SP0)"],"concorrentes":["DELLER (A4H)","DESDUO (TNT)","DESVE (EUF)","ELIFORE (PFZ)","IMENSE (EMS)","PRISTIQ (PFZ)"]},"APICE":{"supera":["APICE (SP0)"],"concorrentes":["DORENE (A4H)","INSIT (AS2)","LIMIAR (EUF)","LYRICA (VI/)"]},"ASEA":{"supera":["ASEA (SP0)"],"concorrentes":["BENICAR (DCS)","OLMECOR (TNT)","OLMETEC (PFZ)"]},"ASEA HCT":{"supera":["ASEA HCT (SP0)"],"concorrentes":["BENICAR HCT (DCS)","HOLMES H (EUF)"]},"ATEROMA":{"supera":["ATEROMA (SP0)"],"concorrentes":["CITALOR (VI/)","LIPITOR (VI/)","VAST (EUF)"]},"ATESTO":{"supera":["ATESTO (SP0)"],"concorrentes":["DAEM (EUF)","DURATESTON (A3N)","HORMUS (EUF)","NEBIDO (GRT)","UND TESTOSTERON MG (EUF)"]},"ATIP":{"supera":["ATIP (SP0)"],"concorrentes":["QUET (EUF)","QUETIPIN (CT6)","QUETROS (A4H)","SEROQUEL IR (MA8)"]},"ATIP XR":{"supera":["ATIP XR (SP0)"],"concorrentes":["QUEPSIA LP (EUF)","QUET XR (EUF)","SEROQUEL XRO (MA8)"]},"AVAL":{"supera":["AVAL (SP0)"],"concorrentes":["BRASART (EMS)","BRAVAN (A4H)","DIOVAN (FQM)"]},"AZOD":{"supera":["AZOD (SP0)"],"concorrentes":["DONAREN (AS2)","LOREDON (TNT)","MOTRAZ (EUF)","SONIC (EUF)"]},"BARIAT XR":{"supera":["BARIAT XR (SP0)"],"concorrentes":["BARIATRON (A4I)","BARISTAR (CLR)","QUELATUS BARI (EUF)"]},"BARIAT XR CALCIO":{"supera":["BARIAT XR CALCIO (SP0)"],"concorrentes":["CALDE MDK (MJA)","MOBILITY OSCAL (O/P)","MOBILITY OSCAL D (O/P)","OSTEONUTRI (A3N)"]},"BENZETACIL":{"supera":["BENZETACIL (SP0)","BIOFLAC (SP0)"],"concorrentes":[]},"BIQUIZ":{"supera":["BIQUIZ (SP0)","CARLIT (SP0)"],"concorrentes":["AIPRI (MF+)","ARISTAB (A4H)","TOARIP (TNT)","CARBOLITIUM (EUF)","CARBOLITIUM CR (EUF)"]},"CIBEX":{"supera":["CIBEX (SP0)"],"concorrentes":["CELEBRA (VI/)","COQUES (EUF)","DUCOX (EUF)","FOXIS (A4H)"]},"COD":{"supera":["COD (SP0)"],"concorrentes":["CODEIN (CT6)","NOVOTRAM (MF+)","TRAMADON (CT6)","TRAMAL (GRT)","TRAMAL RETARD (GRT)"]},"COD PAR":{"supera":["COD PAR (SP0)"],"concorrentes":["ALGICOD (EUF)","PACO (EUF)","TYLEX (CLR)"]},"DBRIZ":{"supera":["DBRIZ (SP0)"],"concorrentes":["IRUXOL (ABD)","KOLLAGENASE C/CLOR (CT6)"]},"DBRIZ GINO":{"supera":["DBRIZ GINO (SP0)"],"concorrentes":["GINO KOLLAGENASE (CT6)","GYNO-IRUXOL (ABD)","KOLPOCERVIX (ZY-)"]},"DBRIZ UNO":{"supera":["DBRIZ UNO (SP0)"],"concorrentes":["IRUXOL MONO (ABD)","KOLLAGENASE (CT6)"]},"DEKSA":{"supera":["DEKSA (SP0)"],"concorrentes":["JUNEVE (TAK)","LIND (EUF)","LISDEV (EUF)","LISVENX (TNT)","LYBERDIA (EMS)","LYSDEXA (LIB)","VENVANSE (TAK)"]},"DELA COLIN":{"supera":["DELA COLIN (SP0)","DENYL (SP0)"],"concorrentes":["FEMIBION (PGH)","MEGA MATER (U.Q)","NEUTROFER FOLATO D (EMS)","OFOLATO D FER (MF+)","OFOLATO FER (MF+)","CITTA (EUF)","MAXAPRAN (A4H)","PROCIMAX (LIB)"]},"DHIVAS":{"supera":["DHIVAS (SP0)"],"concorrentes":["DAFLON 1000 (SVR)","DAFLON 1000 FLEX (SVR)","DIOSMIN (A4H)","PERIVASC (EUF)","VENAFLON (TTB)"]},"DIOLESS":{"supera":["DIOLESS (SP0)"],"concorrentes":["FEMINA (A4H)","MERCILON (ORG)","MINIAN (LIB)","PRIMERA (EUF)"]},"DIUPRESS":{"supera":["DIUPRESS (SP0)"],"concorrentes":["CLOR.AMILO+HCT MG (EMS)","CLORANA (S.A)","DIURIX (TTB)","INDAPAMIDA MG (EMS)","INDAPAMIDA MG (EUF)","INDAPAMIDA MG (GM2)","INDAPAMIDA MG (GOB)","INDAPAMIDA MG (PZ8)","INDAPAMIDA MG (TNT)","INDAPEN SR (TNT)","NATRILIX SR (SVR)"]},"DUOFLAM":{"supera":["DUOFLAM (SP0)"],"concorrentes":["BETATRINTA (EUF)","DIPROSPAN (MF+)","PERMESE (EUF)"]},"FIBRINASE 15G":{"supera":["FIBRINASE (SP0)"],"concorrentes":["IRUXOL MONO (ABD)","KOLLAGENASE C/CLOR (CT6)","IRUXOL (ABD)","KOLLAGENASE (CT6)"]},"FILINAR":{"supera":["FILINAR (SP0)"],"concorrentes":["BRONDILAT (A4H)","MELYSSE (A4H)"]},"FLUXENE":{"supera":["FLUXENE (SP0)"],"concorrentes":["DAFORIN (EMS)","PROZAC 20 (LLY)","VEROTINA (LIB)"]},"GAZIA":{"supera":["GAZIA (SP0)"],"concorrentes":["ADIPEPT (A4H)","DIVENA (A4H)","INILOK (AS2)","PRAZY (LR8)","RESTITUE (EMS)"]},"HELLEVA":{"supera":["HELLEVA (SP0)"],"concorrentes":["VIAGRA (VI/)"]},"HEZO":{"supera":["HEZO (SP0)"],"concorrentes":["EZONIA (EUF)","PRYSMA (EUF)","STILNOX CR (S.A)"]},"HIXIZINE":{"supera":["HIXIZINE (SP0)","IBANUNO (SP0)"],"concorrentes":["FENERGAN (O/P)","PERGO (EUF)","POLARAMINE (HCH)","AFRAT (CT6)","OSTEOBAN (A4H)","RISEDROSS (EMS)"]},"KETALGI":{"supera":["KETALGI (SP0)"],"concorrentes":["ETOD (CT6)","ETODOLACO MG (AH/)","ETODOLACO MG (GM2)","FLANCOX (AS2)"]},"LANICO COMP":{"supera":["LANICO (SP0)"],"concorrentes":["ATAK CLAV (EUF)","CLAVULIN BD (GSK)","NOVAMOX (A4H)","SINOT CLAV (EUF)"]},"LANICO SUSP":{"supera":["LANICO (SP0)"],"concorrentes":["ATAK CLAV (EUF)","CLAVULIN BD (GSK)","NOVAMOX (A4H)","SINOT CLAV (EUF)"]},"LONGFLEX":{"supera":["LONGFLEX (SP0)"],"concorrentes":["COLFLEX HIALU (MF+)","FORTICE (EUF)","MOTILEX HA (AS2)"]},"MINERGI":{"supera":["MINERGI (SP0)"],"concorrentes":["PISA (EUF)","QUERA LP (CT6)"]},"MULTI BI":{"supera":["MULTI-BI (SP0)"],"concorrentes":["20 BI (EUF)","BIOTTA 25BI (MJA)","PROBIATOP (FQM)","PROBID (AS2)","PROLIVE (A4H)"]},"MULTI BI FIBRAS":{"supera":["MULTI-BI FIBRAS (SP0)"],"concorrentes":["20 BI FIBRAS (EUF)","PROHN (A4H)","PROHN FIBRAS (A4H)","SIMBIOFLORA (FQM)","SIMBIOFLORA MULTI (FQM)"]},"MULTI-BI GOTAS":{"supera":["MULTI-BI (SP0)"],"concorrentes":["COLIDIS (A4H)","CULTURELLE (CLR)","FLORIPA (EUF)","KOLLIS (EMS)"]},"NAZZO":{"supera":["NAZZO (SP0)"],"concorrentes":["MARESIS FLEX (FQM)","NARIDRIN ALTO VOLU (EMS)","NASOAR (MYL)","RINOSORO (MF+)"]},"NAZZO H":{"supera":["NAZZO H (SP0)"],"concorrentes":["MAXIDRATE (LIB)","PENETRO (MLB)","SINUSEC (BS2)","SINUSTRAT (BS2)"]},"NAZZO HIALUJET":{"supera":["NAZZO HIALUJET (SP0)"],"concorrentes":["MARESIS (FQM)","RINOSORO (MF+)","SALSEP JET (LIB)","SORINE (A4H)"]},"NAZZO INF":{"supera":["NAZZO INFANTIL (SP0)"],"concorrentes":["MARESIS FLEX (FQM)","NASOAR (MYL)","RESPIR KIDS (U.Q)","RINOSORO (MF+)"]},"NAZZO NEBULIZE":{"supera":["NAZZO NEBULIZE (SP0)"],"concorrentes":["ATROVENT (B.I)","PULMICORT (FQM)"]},"NAZZO OTO":{"supera":["NAZZO OTO (SP0)"],"concorrentes":["ACERATUM (CLR)","CERUMIN (NVR)","OTODRAT (AEE)"]},"NAZZO XT":{"supera":["NAZZO XT (SP0)","NEUMOSIN (SP0)"],"concorrentes":["NASOAR (MYL)","RINOSORO (MF+)","AVALOX (BYP)","PRAIVA (EUF)"]},"NIMEGON":{"supera":["NIMEGON (SP0)"],"concorrentes":["GALVUS (FQM)","JANUVIA (MSD)","NESINA (HYQ)","SITGLU (B3H)","SUGANON (EUF)"]},"NIMEGON MET":{"supera":["NIMEGON MET (SP0)"],"concorrentes":["GALVUS MET (FQM)","JANUMET (MSD)","JANUMET XR (MSD)","NESINA MET (HYQ)","SITGLU MET (B3H)"]},"OKOTICO":{"supera":["OKOTICO (SP0)"],"concorrentes":["LEPONEX (VI/)","PINAZAN (CT6)"]},"PEN VE ORAL":{"supera":["PEN-VE-ORAL (SP0)"],"concorrentes":[]},"PERCOF":{"supera":["PERCOF (SP0)"],"concorrentes":["ANTUX (A4H)","NOTUSS TSS (A4H)","VIBRAL (ABD)"]},"PHOSFOENEMA":{"supera":["PHOSFOENEMA (SP0)"],"concorrentes":["L-ENEMA (NAU)"]},"PROMIM":{"supera":["PROMIM (SP0)"],"concorrentes":["ANTROFI (EUF)","COLPOTROFINE (TRM)","COLTRIENO (MYL)"]},"PROS":{"supera":["PROS (SP0)"],"concorrentes":["DOXAPROST (U.Q)","DUOMO (EUF)"]},"PROS HP":{"supera":["PROS HP (SP0)"],"concorrentes":["DUOMO HP (EUF)","HOMINUS (EUF)"]},"RENOVI B":{"supera":["RENOVI B (SP0)"],"concorrentes":["BETRAT (MYL)","CITOBE (EUF)","CITONEURIN 5000 (PGH)","CRONOBE COMPLEX (BS2)","NEO B (EUF)","NEVRIX (AEE)"]},"RENOVI B PLUS":{"supera":["RENOVI B PLUS (SP0)"],"concorrentes":["CRONOBE COMPLEX (BS2)","DEXA-CITONEURI NFF (PGH)","DEXADOR (AEE)"]},"RISPERIDON":{"supera":["RISPERIDON (SP0)"],"concorrentes":["RISS (EUF)","VIVERDAL (U.Q)","ZARGUS (A4H)"]},"RISPERIDON SOL":{"supera":["RISPERIDON (SP0)"],"concorrentes":["PERLID (PZ8)","RISPERDAL (CLR)","RISPERIDONA MG (EMS)","RISPERIDONA MG (GM2)","RISPERIDONA MG (NQA)","RISPERIDONA MG (PZ8)"]},"ROXETIN":{"supera":["ROXETIN (SP0)"],"concorrentes":["AROPAX (GSK)","MORATUS (A4H)","PONDERA (EUF)"]},"ROXETIN XR":{"supera":["ROXETIN XR (SP0)"],"concorrentes":["PAXIL CR (GSK)","PONDERA XR (EUF)","SINCRO XR (EUF)"]},"SENES":{"supera":["SENES (SP0)"],"concorrentes":["DON (EUF)","DONILA (A4H)","EPEZ (TNT)"]},"SIMECO PLUS":{"supera":["SIMECO PLUS (SP0)"],"concorrentes":["GASTROBION (HTZ)","GASTROGEL (MDQ)","MAGNAZIA (CM5)","MYLANTA PLUS (KVU)","PEPSOGEL (LR8)","STOMALIV STC (GOB)"]},"SOPI":{"supera":["SOPI (SP0)"],"concorrentes":["FERTISOP (MYL)","FOLIA SOP (GRO)","OFOLATO SOP (MF+)"]},"SOPI H":{"supera":["SOPI H (SP0)"],"concorrentes":["ANDRACTIV (B4I)","VITERGAN ZINCO PL (MJA)","VITERGAN ZINCO PLD (MJA)","ANSITEC (LIB)","APRAZ (MF+)","DIAZEPAM NQ (MB9)","FRISIUM (MA8)","FRONTAL (VI/)","LEXOTAN (MA8)","SOMALIUM (A4H)"]},"TAM":{"supera":["TAM (SP0)"],"concorrentes":["ANTARA (EUF)","ETIRA (A4H)","KEPPRA (UCB)"]},"TAM SOL":{"supera":["TAM (SP0)"],"concorrentes":["ANTARA (EUF)","ETIRA (A4H)","KEPPRA (UCB)","SPARK (EUF)"]},"TAM XR":{"supera":["TAM XR (SP0)"],"concorrentes":["ANTARA XR (EUF)","KEPPRA XR (UCB)","SPARK XR (EUF)"]},"TRIPLOA":{"supera":["TRIPLOA (SP0)"],"concorrentes":["ALGIE (EUF)","ARTROSIL (A4H)","BICERTO (EUF)","BI-PROFENID (S.A)"]},"TROL":{"supera":["TROL (SP0)"],"concorrentes":["GESICO RETARD (EUF)","TRAMADON (CT6)","TRAMAL RETARD (GRT)","TRAUM RETARD (A4H)"]},"TROL PAR":{"supera":["TROL PAR (SP0)"],"concorrentes":["ATRACE (EUF)","GESICO DUO (EUF)","PARATRAM (A5U)","REVANGE (A4H)"]},"TYNNA":{"supera":["TYNNA (SP0)"],"concorrentes":["ALEKTOS (HYQ)","HISBILA (EUF)","NAIRE (EUF)"]},"ULTROX":{"supera":["ULTROX (SP0)"],"concorrentes":["CETROLAC SL (U.Q)","SYMDULOR SL (A5U)","TORAGESIC (EMS)","TORMIV SL (A4H)","TOTTI SL (A4H)"]},"VAGICAND":{"supera":["VAGICAND (SP0)"],"concorrentes":[]},"VALASKI":{"supera":["VALASKI (SP0)"],"concorrentes":["DENPRYX (FQM)","HERPSTAL (UKT)","VALTREX (GSK)","VILAXY (EUF)"]},"VITA COLIN":{"supera":["VITA COLIN (SP0)"],"concorrentes":["DAYVIT KIDS (A4H)","FERROVITAN COLINA (EUF)","NEUTROFER POLI (EMS)","NEUTROFER PREV (EMS)","PURAVIT IMUNE (MYL)","ZIRVIT KIDS (AEE)","ZIRVIT KIDS MAX (AEE)"]},"VIVAMENT":{"supera":["VIVAMENT (SP0)"],"concorrentes":["COGMAX (EUF)","COGMAX FOS (EUF)","COGNI MAIS (FQM)","COGNICX (U.Q)","LOGNIS (AS2)","QUELATUS MIND (EUF)"]},"VIVOSSO":{"supera":["VIVOSSO (SP0)"],"concorrentes":["CALDE (MJA)","CALDE MAX (MJA)","CALTRATE D NF (HE4)","MOBILITY OSCAL (O/P)","MOBILITY OSCAL D (O/P)","OS-CAL D (O/P)","OSSOTRAT-D (CLR)","OSTEONUTRI (A3N)","PROSSO (EUF)"]},"VIVOSSO PRO":{"supera":["VIVOSSO PRO (SP0)"],"concorrentes":["ADDERA CAL (MF+)","CALDE K2 (MJA)","CALDE MDK (MJA)","FIXARE (EMS)","OS-CAL D (O/P)","PROSSO (EUF)","PROSSO D+KM (EUF)"]},"VORXE":{"supera":["VORXE (SP0)"],"concorrentes":["BRINTELLIX (LUN)","EVORTIA (MF+)","VOEXTOR (LIB)","VOGNUS (EMS)","VURTUOSO (LUN)"]},"ZOUP SL":{"supera":["ZOUP SL (SP0)"],"concorrentes":["LUNE SL (MF+)","PATZ SL (EMS)","RIPOSO SL (EUF)","TURNO SL (EUF)"]}};

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
};

let UI = {
    periodMode: 'MAT',
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
    const hasDot   = s.indexOf('.') >= 0;
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
async function parseFiles(files, forceUnit) {
    if (typeof XLSX === 'undefined') throw new Error('Biblioteca XLSX não carregada.');

    const rowsByMode = { UN: [], RS: [] };
    const diagnostics = [];

    for (const file of files) {
        try {
            const buf = await file.arrayBuffer();
            const wb = XLSX.read(buf, { type: 'array', raw: false });

            for (const sheetName of wb.SheetNames) {
                const ws = wb.Sheets[sheetName];
                const raw = XLSX.utils.sheet_to_json(ws, { defval: '', raw: false });
                if (!raw.length) continue;

                const sampleKeys = Object.keys(raw[0]);
                const findCol = patterns => sampleKeys.find(k => patterns.some(p => p.test(norm(k)))) || null;

                const colDistrital = findCol([/^distrital$/]);
                const colSetor = findCol([/^setor(\s*\(gd\))?$/, /^gd$/]);
                const colMercado = findCol([/^mercado$/]);
                const colProduto = findCol([/^produto$/, /^marca$/]);
                const colCidade = findCol([/^cidade$/, /^municipio$/]);
                const colBrick = findCol([/^brick$/]);

                const colMAT = findCol([/^mat$/, /^mat\s*un$/, /^mat\s*r\$?$/]);
                const colMATAnt = findCol([/^mat\s+ant/]);
                const colCrescMAT = findCol([/^cresc\.?\s*mat$/, /^crescimento\s*mat$/]);

                const colYTD = findCol([/^ytd$/]);
                const colYTDAnt = findCol([/^ytd\s+ant/]);
                const colCrescYTD = findCol([/^cresc\.?\s*ytd$/, /^crescimento\s*ytd$/]);

                const colTRI = findCol([/^tri$/]);
                const colTRIAnt = findCol([/^tri\s+ant/]);
                const colCrescTRI = findCol([/^cresc\.?\s*tri$/, /^crescimento\s*tri$/]);

                if (!colMAT && !colYTD && !colTRI) continue;

                // Descobre a unidade (nome do arquivo + aba + header da coluna MAT)
                const unitMode = detectUnitMode({
                    fileName: file.name,
                    sheetName,
                    matHeader: colMAT || colYTD || colTRI || '',
                    forceUnit
                });
                diagnostics.push({ file: file.name, sheet: sheetName, mode: unitMode, forced: !!forceUnit });

                let sheetRows = 0;
                // (v3.6) Removida a "deduplicação" que descartava linhas repetidas
                // com mesma chave Setor|Mercado|Marca|Brick|Cidade. Na planilha base
                // essas linhas NÃO são duplicatas: são PDVs distintos dentro do mesmo
                // brick. Elas precisam ser somadas (o que a agregação downstream já faz).
                for (const row of raw) {
                    const distrital = colDistrital ? String(row[colDistrital] || '').trim() : '';
                    const sector = colSetor ? String(row[colSetor] || '').trim() : 'Geral';
                    const market = colMercado ? String(row[colMercado] || '').trim() : '';
                    const product = colProduto ? String(row[colProduto] || '').trim() : '';
                    const cidade = colCidade ? String(row[colCidade] || '').trim() : '';
                    const brickName = colBrick ? String(row[colBrick] || '').trim() : '';

                    if (!market || (!brickName && !product)) continue;

                    const mat = colMAT ? parseNum(row[colMAT]) : 0;
                    const matAnt = colMATAnt ? parseNum(row[colMATAnt]) : 0;
                    const crescMat = colCrescMAT ? parseNum(row[colCrescMAT]) : null;

                    const ytd = colYTD ? parseNum(row[colYTD]) : 0;
                    const ytdAnt = colYTDAnt ? parseNum(row[colYTDAnt]) : 0;
                    const crescYtd = colCrescYTD ? parseNum(row[colCrescYTD]) : null;

                    const tri = colTRI ? parseNum(row[colTRI]) : 0;
                    const triAnt = colTRIAnt ? parseNum(row[colTRIAnt]) : 0;
                    const crescTri = colCrescTRI ? parseNum(row[colCrescTRI]) : null;

                    if (mat === 0 && ytd === 0 && tri === 0) continue;

                    rowsByMode[unitMode].push({
                        distrital, sector, market, product, cidade,
                        brickName, brickCode: brickName, unitMode,
                        role: productRole(product),
                        data: {
                            MAT: { current: mat, previous: matAnt, growth: crescMat },
                            YTD: { current: ytd, previous: ytdAnt, growth: crescYtd },
                            TRI: { current: tri, previous: triAnt, growth: crescTri }
                        }
                    });
                    sheetRows++;
                }
                console.log('[SUPERA] Aba', sheetName, '(', unitMode, ')', sheetRows, 'registros.');
            }
        } catch (e) {
            console.error('[SUPERA] Erro:', e.message);
            toast('Erro ao processar ' + file.name);
        }
    }
    return { rowsByMode, diagnostics };
}

/* ===== BUILD DATABASE ===== */
function buildDB(rowsByMode) {
    DB.rowsByValueMode = rowsByMode;
    DB.rows = rowsByMode[UI.unitMode] || [];
    DB.sectors = [...new Set(DB.rows.map(r => r.sector).filter(Boolean))].sort();
    DB.markets = [...new Set(DB.rows.map(r => r.market))].sort();
}

/* ===== RECOMENDAÇÃO POR BRICK (Supera × Mercado)
        Regra alinhada ao layout do usuário:
        - ENTRAR     → Supera = 0 no brick
        - LÍDER      → Supera é maior vendedor do brick (share ≥ qualquer concorrente)
        - CRESCER    → Supera crescendo > 20% vs período anterior
        - ACOMPANHAR → Supera caindo < -10%
        - OPORTUNIDADE → caso contrário                                ===== */
function calcRecBrick(superaCur, superaPrev, concMax, growth) {
    if (superaCur === 0) return 'ENTRAR';
    if (concMax != null && superaCur >= concMax) return 'LÍDER';
    if (growth != null) {
        const g = growth * 100;
        if (g > 20) return 'CRESCER';
        if (g < -10) return 'ACOMPANHAR';
    }
    return 'OPORTUNIDADE';
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
        b.rec = calcRecBrick(b.superaCur, b.superaPrev, concMax, b.growth);
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
            case 'market':   va = a.market; vb = b.market; break;
            case 'superaname': va = a.superaLabel || ''; vb = b.superaLabel || ''; break;
            case 'bricks':   va = a.bricksCount; vb = b.bricksCount; break;
            case 'current':  va = a.current; vb = b.current; break;
            case 'previous': va = a.previous; vb = b.previous; break;
            case 'delta':    va = a.current - a.previous; vb = b.current - b.previous; break;
            case 'growth':   va = a.growth ?? -Infinity; vb = b.growth ?? -Infinity; break;
            case 'supera':   va = a.supera; vb = b.supera; break;
            case 'share':    va = a.share; vb = b.share; break;
            case 'lider':    va = a.recs['LÍDER'].length; vb = b.recs['LÍDER'].length; break;
            case 'crescer':  va = a.recs['CRESCER'].length; vb = b.recs['CRESCER'].length; break;
            case 'oport':    va = a.recs['OPORTUNIDADE'].length; vb = b.recs['OPORTUNIDADE'].length; break;
            case 'acomp':    va = a.recs['ACOMPANHAR'].length; vb = b.recs['ACOMPANHAR'].length; break;
            case 'entrar':   va = a.recs['ENTRAR'].length; vb = b.recs['ENTRAR'].length; break;
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
                        <th class="r">${pd} ATUAL</th>
                        <th class="r">${pd} ANTERIOR</th>
                        <th class="r">EVOLUÇÃO</th>
                        <th class="r">SHARE ATUAL</th>
                    </tr></thead>
                    <tbody>
                    ${ranking.map((c, i) => {
                        const isSup = c.role === 'SUPERA';
                        const g = c.growth;
                        const gCls = g == null ? 'vnull' : (g >= 0 ? 'vpos' : 'vneg');
                        const gTxt = g == null ? '—' : ((g >= 0 ? '+' : '') + (g * 100).toFixed(1) + '%');
                        return `
                        <tr class="rank-row${isSup ? ' rank-supera' : ''}">
                            <td class="c rank-pos">${i + 1}º</td>
                            <td class="rank-name">${c.name}${isSup ? ' <span class="rank-sup-badge">SUPERA</span>' : ''}</td>
                            <td class="r">${fmtValue(c.cur)}</td>
                            <td class="r rank-prev">${fmtValue(c.prev)}</td>
                            <td class="r ${gCls}">${gTxt}</td>
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
                    <td class="r"><strong>${b.share.toFixed(1)}%</strong> <small class="${gCls}">${fmtPct(b.growth)}</small></td>
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
        <th class="r">Supera ${pd}</th>
        <th class="r">Mercado ${pd}</th>
        <th class="r">Share %</th>
        <th class="r">Evolução</th>
        <th>Líder do Brick</th>
        <th class="r">Gap p/ superar</th>
    </tr></thead><tbody>`;

    if (!bricks.length) {
        html += '<tr><td colspan="9" class="tbl-empty">Nenhum brick nessa categoria.</td></tr>';
    } else {
        bricks.forEach((b, i) => {
            const gCls = b.growth != null && b.growth >= 0 ? 'vpos' : 'vneg';
            const rk = brickRanking(b);
            // Nome do líder do brick
            const leader = rk.ranking[0];
            const leaderName = leader ? leader.name.replace(/\s*\([^)]+\)/,'') : '—';
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
                    const nextName = nextAbove.name.replace(/\s*\([^)]+\)/,'');
                    gapLabel = `+${fmtValue(gap)} p/ ${nextName}`;
                    gapCls = 'vneg';
                }
            }
            html += `<tr>
                <td class="w-hash">${i + 1}</td>
                <td class="col-brick"><code class="brick-code-mono">${b.brick}</code></td>
                <td class="col-setor">${cleanSectorName(b.sector) || '—'}</td>
                <td class="r vacc">${fmtValue(b.superaCur)}</td>
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
    html += `<table class="modal-tbl"><thead><tr>
        <th class="w-hash">#</th>
        <th>Produto</th>
        <th>Tipo</th>
        <th class="r">${UI.unitMode === 'RS' ? 'R$' : 'UN'} ${pd}</th>
        <th class="r">Share</th>
        <th class="r">Crescimento</th>
        <th class="r">Bricks</th>
    </tr></thead><tbody>`;
    prods.forEach((p, i) => {
        const isSup = p.role === 'SUPERA';
        const share = totalCur ? (p.cur / totalCur) * 100 : 0;
        const gCls = p.growth != null && p.growth >= 0 ? 'vpos' : 'vneg';
        html += `<tr class="${isSup ? 'row-supera' : ''}">
            <td class="w-hash">${i + 1}</td>
            <td>${isSup ? '⭐ ' : ''}<strong>${p.product}</strong></td>
            <td><span class="tag ${isSup ? 'tag-supera' : 'tag-conc'}">${isSup ? 'SUPERA' : 'CONCORRENTE'}</span></td>
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
        <th class="r">Supera</th>
        <th class="r">Mercado</th>
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
            <td class="r vacc">${fmtValue(b.superaCur)}</td>
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
    const ids = ['resumo', 'brick', 'oport', 'entrar', 'graficos'];
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
    // Se não há base ainda disponível nesse modo, peseita o clique e avisa
    const hasData = DB.rowsByValueMode[mode] && DB.rowsByValueMode[mode].length;
    if (!hasData && Object.values(DB.rowsByValueMode).some(a => a.length)) {
        toast('Nenhuma planilha de ' + (mode === 'RS' ? 'R$' : 'Unidades') + ' carregada ainda. Clique em "Carregar Dados" para adicionar.');
        // Mantém o botão ativo naquele modo para que o próximo upload seja forçado nessa direção
    }
    UI.unitMode = mode;
    DB.rows = DB.rowsByValueMode[mode] || [];
    DB.sectors = [...new Set(DB.rows.map(r => r.sector).filter(Boolean))].sort();
    DB.markets = [...new Set(DB.rows.map(r => r.market))].sort();
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
    const fbSec = $('fbSec'); const fbMkt = $('fbMkt'); const fbGoto = $('fbGoto');
    [fbSec, fbMkt, fbGoto].forEach(sel => { while (sel.children.length > 1) sel.removeChild(sel.lastChild); });
    DB.sectors.forEach(s => { const o = document.createElement('option'); o.value = s; o.textContent = s; fbSec.appendChild(o); });
    DB.markets.forEach(m => {
        const o = document.createElement('option'); o.value = m; o.textContent = m; fbMkt.appendChild(o);
        const o2 = o.cloneNode(true); fbGoto.appendChild(o2);
    });
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
                share: b.share,
                pos: rk.posSupera,
                leader: rk.leader ? rk.leader.name : '—',
                leaderVol: rk.leader ? rk.leader.cur : 0,
                gap1: rk.gap1,
                gap2: rk.gap2,
                gap3: rk.gap3,
                growthMkt: b.totalPrev !== 0 ? (b.totalCur / b.totalPrev - 1) : null,
                growthSup: b.superaPrev !== 0 ? (b.superaCur / b.superaPrev - 1) : null,
                rec: b.rec
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

    let html = '<div class="brick-view-wrap"><div class="tbl-wrap"><table class="main-tbl brick-detail-tbl"><thead class="tbl-head-fixed brick-head-dark"><tr>';
    html += sh('sector',     'SETOR');
    html += sh('market',     'MERCADO');
    html += sh('cidade',     'CIDADE');
    html += sh('brick',      'BRICK');
    html += sh('totalCur',   'MKT TOTAL', 'r');
    html += sh('superaLabel','MARCA SUPERA', 'c-supera');
    html += sh('superaCur',  'MAT SUPERA', 'r c-supera');
    html += sh('share',      'SHARE %', 'r');
    html += sh('pos',        'POS.', 'c');
    html += sh('leader',     'LÍDER');
    html += sh('leaderVol',  'MAT LÍDER', 'r');
    html += sh('gap1',       'GAP 1ª', 'r');
    html += sh('gap2',       'GAP 2ª', 'r');
    html += sh('gap3',       'GAP 3ª', 'r');
    html += sh('growthMkt',  'CRESC. MKT', 'r');
    html += sh('growthSup',  'CRESC. SUPERA', 'r');
    html += sh('rec',        'RECOMENDAÇÃO', 'c');
    html += '</tr></thead><tbody>';

    if (!page.length) {
        html += '<tr><td colspan="17" class="tbl-empty">Nenhum brick encontrado para os filtros selecionados.</td></tr>';
    } else {
        page.forEach(l => {
            const recCls = recPillCls(l.rec);
            const cMkt = l.growthMkt != null && l.growthMkt >= 0 ? 'vpos' : 'vneg';
            const cSup = l.growthSup != null && l.growthSup >= 0 ? 'vpos' : 'vneg';
            const posBadge = l.pos ? `<span class="pos-badge pos-${l.pos}">${l.pos}ª</span>` : '—';
            html += `<tr class="brick-detail-row row-${recCls}">
                <td>${l.sector || '—'}</td>
                <td><strong>${l.market}</strong></td>
                <td>${l.cidade || '—'}</td>
                <td><code class="brick-code-mono">${l.brick}</code></td>
                <td class="r">${fmtValue(l.totalCur)}</td>
                <td class="c-supera">${l.superaLabel}</td>
                <td class="r vacc c-supera">${fmtValue(l.superaCur)}</td>
                <td class="r"><strong>${l.share.toFixed(1)}%</strong></td>
                <td class="c">${posBadge}</td>
                <td><small>${l.leader.replace(/\s*\([^)]+\)/, '')}</small></td>
                <td class="r">${fmtValue(l.leaderVol)}</td>
                <td class="r">${l.gap1 ? fmtValue(l.gap1) : '—'}</td>
                <td class="r">${l.gap2 ? fmtValue(l.gap2) : '—'}</td>
                <td class="r">${l.gap3 ? fmtValue(l.gap3) : '—'}</td>
                <td class="r ${cMkt}">${fmtPct(l.growthMkt)}</td>
                <td class="r ${cSup}">${fmtPct(l.growthSup)}</td>
                <td class="c"><span class="rec-pill ${recCls}">${l.rec}</span></td>
            </tr>`;
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
    const host = $('sectorTabs');
    if (!host) return;
    host.innerHTML = '';
    DB.sectors.forEach(sec => {
        const label = shortSectorLabel(sec);
        const btn = document.createElement('button');
        btn.className = 'tab tab-sector';
        btn.setAttribute('data-tab', 'brick');
        btn.setAttribute('data-sector', sec);
        btn.setAttribute('title', cleanSectorName(sec) || sec);
        btn.innerHTML = '<span class="tab-sector-dot"></span>' + label;
        btn.addEventListener('click', () => {
            // Toggle: se já está ativo, remove o filtro de setor
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
    root.style.setProperty('--fb-h',  fH + 'px');
}

/* Dispara recomputação após cada render/resize. */
window.addEventListener('resize', () => recomputeStickyOffsets());

function updateDistritalHeader() {
    const el = $('hdrDistrital');
    if (!el) return;
    if (!DB.sectors.length) { el.textContent = 'Análise Estratégica'; return; }
    // Pega o primeiro setor com dígitos identificáveis
    let distCode = null;
    for (const sec of DB.sectors) {
        const mm = String(sec).match(/(\d{4,6})/);
        if (mm) { distCode = mm[1].slice(0, 4) + '00'; break; }
    }
    el.textContent = distCode ? ('Distrital ' + distCode) : 'Análise Estratégica';
}

function switchTab(tn) {
    ['resumo', 'brick', 'oport', 'entrar', 'graficos'].forEach(k => {
        const v = $('tab-' + k);
        if (v) v.style.display = (k === tn) ? 'block' : 'none';
    });
    if (tn === 'brick') renderBrick();
    if (tn === 'oport') renderOport();
    if (tn === 'entrar') renderEntrar();
    if (tn === 'graficos') renderGraficos();
    if (tn === 'resumo') renderResumo();
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
            ['Unid. ' + pd]: d.current,
            ['Unid. ' + pd + ' Anterior']: d.previous,
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
            toast('Nenhuma linha encontrada. Verifique o cabeçalho das planilhas.');
            return;
        }

        // Substitui dados do mesmo modo (não acumula uploads do mesmo tipo)
        // Isso evita duplicação quando o usuário carrega a mesma planilha mais de uma vez
        const merged = {
            UN: rowsByMode.UN.length ? rowsByMode.UN : (DB.rowsByValueMode.UN || []),
            RS: rowsByMode.RS.length ? rowsByMode.RS : (DB.rowsByValueMode.RS || [])
        };
        buildDB(merged);

        // Se a planilha que acabou de entrar trouxe R$ e o usuário estava em UN sem dados, troca para RS
        if (rowsByMode.RS.length && !rowsByMode.UN.length) {
            UI.unitMode = 'RS';
            DB.rows = DB.rowsByValueMode.RS;
        } else if (rowsByMode.UN.length && !rowsByMode.RS.length && DB.rowsByValueMode.UN.length === rowsByMode.UN.length) {
            UI.unitMode = 'UN';
            DB.rows = DB.rowsByValueMode.UN;
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
            const unOk = DB.rowsByValueMode.UN.length ? '<span class="ds-ok">Unidades</span>' : '<span class="ds-off">Unidades</span>';
            const rsOk = DB.rowsByValueMode.RS.length ? '<span class="ds-ok">R$</span>' : '<span class="ds-off">R$</span>';
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
        // Se o usuário clicou em $ R$ ou # Un. antes do upload, respeitamos
        const active = document.querySelector('.unit-btn.active');
        const forceUnit = active ? (active.id === 'btnRS' ? 'RS' : 'UN') : null;
        init(e.target.files, { forceUnit });
        e.target.value = '';
    });

    const uploadZone = $('uploadZone');
    if (uploadZone) {
        uploadZone.addEventListener('dragover', e => { e.preventDefault(); uploadZone.classList.add('drag'); });
        uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('drag'));
        uploadZone.addEventListener('drop', e => {
            e.preventDefault();
            uploadZone.classList.remove('drag');
            const active = document.querySelector('.unit-btn.active');
            const forceUnit = active ? (active.id === 'btnRS' ? 'RS' : 'UN') : null;
            if (e.dataTransfer.files.length) init(e.dataTransfer.files, { forceUnit });
        });
    }

    // Botão opcional para limpar base (se existir na UI)
    const clrBtn = $('btnClearData');
    if (clrBtn) {
        clrBtn.addEventListener('click', () => {
            DB.rowsByValueMode = { UN: [], RS: [] };
            DB.rows = [];
            $('dashView').style.display = 'none';
            $('kpiStrip').style.display = 'none';
            $('uploadView').style.display = 'flex';
            toast('Base limpa');
        });
    }

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
    html += '<table class="modal-tbl"><thead><tr><th>Mercado</th><th class="r">Mercado ' + pd + '</th><th class="r">Supera</th><th class="r">Share</th><th class="r">Crescimento</th><th class="c">Potencial</th></tr></thead><tbody>';
    if (!oport.length) html += '<tr><td colspan="6" class="tbl-empty">Sem oportunidades claras nos filtros atuais.</td></tr>';
    oport.forEach(m => {
        const gap = m.current - m.supera;
        html += `<tr>
            <td><strong>${m.market}</strong></td>
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
    html += '<table class="modal-tbl"><thead><tr><th>Mercado</th><th>Brick</th><th>Setor</th><th class="r">Mercado</th><th class="r">Maior concorrente</th></tr></thead><tbody>';
    if (!entrar.length) html += '<tr><td colspan="5" class="tbl-empty">Nenhum brick em "Entrar".</td></tr>';
    entrar.slice(0, 300).forEach(e => {
        html += `<tr>
            <td><strong>${e.market}</strong></td>
            <td><code class="brick-code-mono">${e.brick.brick}</code> <small>${e.brick.cidade || ''}</small></td>
            <td>${e.brick.sector || '—'}</td>
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