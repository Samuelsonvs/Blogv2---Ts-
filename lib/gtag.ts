export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID
interface GA {
  action: string,
  category: string,
  label: string,
  value: string
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url:string) => {
  (window as any).gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }:GA) => {
  (window as any).gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}