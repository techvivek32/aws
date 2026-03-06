export function SchemaMarkup() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Arizona Women Specialists",
    "alternateName": "AZ Women Specialists",
    "description": "Expert obstetrics, gynecology, and medical weight loss services in Phoenix and Glendale, AZ.",
    "url": "https://www.arizonawomenspecialists.com",
    "telephone": "+16238467597",
    "medicalSpecialty": [
      "ObstetricsAndGynecology",
      "MedicalWeightLoss"
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "4700 N 51st Ave Suite 5",
        "addressLocality": "Phoenix",
        "addressRegion": "AZ",
        "postalCode": "85031",
        "addressCountry": "US"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "18699 N 67th Ave Suite 320",
        "addressLocality": "Glendale",
        "addressRegion": "AZ",
        "postalCode": "85308",
        "addressCountry": "US"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.facebook.com/arizonawomenspecialists",
      "https://www.instagram.com/arizonawomenspecialists"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
