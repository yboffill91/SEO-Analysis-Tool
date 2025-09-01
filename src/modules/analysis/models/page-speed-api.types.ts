// Distribución de métricas
interface Distribution {
  min: number;
  max: number;
  proportion: number;
}

// Métrica individual (ej: LCP, FCP, CLS)
interface Metric {
  percentile: number;
  distributions: Distribution[];
  category: "AVERAGE" | "FAST" | "NONE" | "SLOW";
}

// Experiencia de carga (URL o origen)
interface LoadingExperience {
  id: string;
  metrics: Record<string, Metric>;
  overall_category: "AVERAGE" | "FAST" | "NONE" | "SLOW";
  initial_url: string;
}

// Auditoría individual
interface Audit {
  id: string;
  title: string;
  description: string;
  score: number | null;
  scoreDisplayMode:
    | "SCORE_DISPLAY_MODE_UNSPECIFIED"
    | "binary"
    | "error"
    | "informative"
    | "manual"
    | "not_applicable"
    | "numeric";
  displayValue?: string;
  explanation?: string;
  errorMessage?: string;
  warnings?: any;
  details?: Record<string, any>;
}

// Referencias de auditoría dentro de categorías
interface AuditRef {
  id: string;
  weight: number;
  group?: string;
}

// Categoría (Performance, SEO, etc.)
interface Category {
  id: string;
  title: string;
  description: string;
  score: number | null;
  manualDescription?: string;
  auditRefs: AuditRef[];
}

// Grupos de categorías (ej: "Metrics", "Opportunities")
interface CategoryGroup {
  title: string;
  description: string;
}

// Error de ejecución
interface RuntimeError {
  code:
    | "ERRORED_DOCUMENT_REQUEST"
    | "FAILED_DOCUMENT_REQUEST"
    | "INSECURE_DOCUMENT_REQUEST"
    | "INVALID_SPEEDLINE"
    | "NO_DCL"
    | "NO_DOCUMENT_REQUEST"
    | "NO_ERROR"
    | "NO_FCP"
    | "NO_NAVSTART"
    | "NO_SCREENSHOTS"
    | "NO_SPEEDLINE_FRAMES"
    | "NO_TRACING_STARTED"
    | "PARSING_PROBLEM"
    | "PROTOCOL_TIMEOUT"
    | "READ_FAILED"
    | "SPEEDINDEX_OF_ZERO"
    | "TRACING_ALREADY_STARTED"
    | "UNKNOWN_ERROR";
  message: string;
}

// Configuración de Lighthouse
interface ConfigSettings {
  emulatedFormFactor: "UNKNOWN_FORM_FACTOR" | "desktop" | "mobile" | "none";
  locale: string;
  onlyCategories?: any;
}

// Entorno de ejecución
interface Environment {
  networkUserAgent: string;
  hostUserAgent: string;
  benchmarkIndex: number;
}

// Resultado completo de Lighthouse
interface LighthouseResult {
  requestedUrl: string;
  finalUrl: string;
  lighthouseVersion: string;
  userAgent: string;
  fetchTime: string;
  environment: Environment;
  runWarnings: any[];
  configSettings: ConfigSettings;
  audits: Record<string, Audit>;
  categories: Record<string, Category>;
  categoryGroups: Record<string, CategoryGroup>;
  runtimeError?: RuntimeError;
  timing: { total: number };
  i18n: {
    rendererFormattedStrings: {
      varianceDisclaimer: string;
      opportunityResourceColumnLabel: string;
      opportunitySavingsColumnLabel: string;
      errorMissingAuditInfo: string;
      errorLabel: string;
      warningHeader: string;
      auditGroupExpandTooltip: string;
      passedAuditsGroupTitle: string;
      notApplicableAuditsGroupTitle: string;
      manualAuditsGroupTitle: string;
      toplevelWarningsMessage: string;
      scorescaleLabel: string;
      crcLongestDurationLabel: string;
      crcInitialNavigation: string;
      lsPerformanceCategoryDescription: string;
      labDataTitle: string;
    };
  };
}

// Versión de PageSpeed
interface Version {
  major: number;
  minor: number;
}

// Estructura principal de la API
export interface PageSpeedResponse {
  captchaResult:
    | "CAPTCHA_BLOCKING"
    | "CAPTCHA_MATCHED"
    | "CAPTCHA_NEEDED"
    | "CAPTCHA_NOT_NEEDED"
    | "CAPTCHA_UNMATCHED";
  kind: "pagespeedonline#result";
  id: string;
  loadingExperience: LoadingExperience;
  originLoadingExperience: LoadingExperience;
  lighthouseResult: LighthouseResult;
  analysisUTCTimestamp: string;
  version: Version;
}
