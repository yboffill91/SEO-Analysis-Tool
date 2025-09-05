import { Audit, PageSpeedResponse } from "@/modules/analysis/models";
import { fetchPageSpeed } from "@/services/fetchPageSpeed";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuditMetrics {
  [metric: string]: Audit;
}

interface CategoryData {
  performance: AuditMetrics;
  seo: AuditMetrics;
  bestPractices: AuditMetrics;
  accessibility: AuditMetrics;
}

interface StrategyData {
  response: PageSpeedResponse | null;
  categories: CategoryData;
}

interface PageSpeedStore {
  data: {
    desktop: StrategyData;
    mobile: StrategyData;
  };
  loading: boolean;
  error: string | null;
  fetchedAt: number | null;
}

interface PageSpeedActions {
  fetchPageSpeedAll: (
    url: string,
    signal: AbortSignal,
    force?: boolean
  ) => Promise<void>;
}

// Extraer las categorías completas
function extractCategories(response: PageSpeedResponse): CategoryData {
  const audits = response.lighthouseResult.audits;

  return {
    performance: {
      firstContentfulPaint: audits["first-contentful-paint"],
      largestContentfulPaint: audits["largest-contentful-paint"],
      cumulativeLayoutShift: audits["cumulative-layout-shift"],
      totalBlockingTime: audits["total-blocking-time"],
      interactive: audits["interactive"],
      speedIndex: audits["speed-index"],
    },
    seo: {
      titleElement: audits["title-element"],
      metaDescription: audits["meta-description"],
      httpStatusCode: audits["http-status-code"],
      isCrawlable: audits["is-crawlable"],
      linksCrawlable: audits["links-crawlable"],
      robotsTxt: audits["robots-txt"],
      canonical: audits["canonical"],
      hreflang: audits["hreflang"],
      fontSize: audits["font-size"],
      viewport: audits["viewport"],
    },
    bestPractices: {
      isOnHttps: audits["is-on-https"],
      imageSizeResponsive: audits["image-size-responsive"],
      imageAspectRatio: audits["image-aspect-ratio"],
      usesRelPreconnect: audits["uses-rel-preconnect"],
      usesRelPreload: audits["uses-rel-preload"],
    },
    accessibility: {
      colorContrast: audits["color-contrast"],
      imageAlt: audits["image-alt"],
      headingOrder: audits["heading-order"],
      ariaAllowedAttr: audits["aria-allowed-attr"],
    },
  };
}

export const usePageSpeedStore = create<PageSpeedStore & PageSpeedActions>()(
  persist(
    (set, get) => ({
      data: {
        desktop: {
          response: null,
          categories: {
            performance: {},
            seo: {},
            bestPractices: {},
            accessibility: {},
          },
        },
        mobile: {
          response: null,
          categories: {
            performance: {},
            seo: {},
            bestPractices: {},
            accessibility: {},
          },
        },
      },
      loading: false,
      error: null,
      fetchedAt: null,
      fetchPageSpeedAll: async (
        url: string,
        signal: AbortSignal,
        force = false
      ) => {
        const now = Date.now();
        const lastFetched = get().fetchedAt;

        // refresco solo si pasaron más de 10 minutos o se fuerza
        if (!force && lastFetched && now - lastFetched < 10 * 60 * 1000) return;

        set({ loading: true, error: null });

        try {
          const [desktopResponse, mobileResponse] = await Promise.all([
            fetchPageSpeed(url, signal, "desktop"),
            fetchPageSpeed(url, signal, "mobile"),
          ]);

          set({
            data: {
              desktop: {
                response: desktopResponse,
                categories: extractCategories(desktopResponse),
              },
              mobile: {
                response: mobileResponse,
                categories: extractCategories(mobileResponse),
              },
            },
            loading: false,
            fetchedAt: Date.now(),
          });
        } catch (err: unknown) {
          if (err instanceof DOMException && err.name === "AbortError") return;
          set({
            error: err instanceof Error ? err.message : "Unknown error",
            loading: false,
          });
        }
      },
    }),
    { name: "pagespeed-store" }
  )
);
