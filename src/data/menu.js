export const categories = [
  { id: 'kopi', name: 'Kopi' },
  { id: 'non-kopi', name: 'Non-Kopi' },
  { id: 'makanan-utama', name: 'Makanan Utama' },
  { id: 'pastri-camilan', name: 'Pastri/Camilan' },
];

export const dietFilters = [
  { id: 'vegan', name: 'Vegan', icon: 'eco' },
  { id: 'gluten', name: 'Bebas Gluten', icon: 'no_meals' },
  { id: 'halal', name: 'Halal', icon: 'verified' },
];

export const menuSections = [
  {
    id: 'kopi',
    title: 'Kopi',
    featuredCards: [
      {
        id: 'latte-sindoro',
        title: 'Latte Khas Sindoro',
        price: 'Rp 45.000',
        description:
          'Espresso racikan kami dengan susu kukus yang lembut, dipadukan dengan sedikit gula aren lokal dan sentuhan garam laut.',
        image:
          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAlTirWRiYGO4RNaVJVjArYLV-iCNkpxCWVr8B-rOgk8PMB8ZHC1HDYdxIwmlOy0-mfQMiva6-VHnOlHWo2sFQIdppgGdbxxdrUBt6woi1HOnyblM-wPcMjnnNGIqwc6G81t31qz5D5quQlJZdRWYHpBy4o6Fo9x0pWIWR80HyZjN1TIgDQKlqYKGDxmxezR9-pQqv6RGsDrjobr7q01Cx2hm03bTEY04-NGxB_jTYaWYwfTaQCNUPI')",
        alt:
          'A beautifully crafted latte art in a ceramic mug, sitting on a rustic wooden table by a window with natural morning sunlight illuminating the rising steam. The aesthetic is serene, warm, and inviting, reflecting a slow-living coffee culture. Soft focus background with subtle green plant leaves.',
        badge: { text: 'Paling Laris', type: 'primary-container' },
        tags: ['Halal'],
        size: 'wide',
      },
      {
        id: 'cold-brew',
        title: 'Cold Brew Arabika',
        price: 'Rp 40.000',
        description:
          'Diseduh perlahan selama 18 jam menghasilkan profil yang lembut, keasaman rendah dengan sentuhan cokelat hitam dan buah beri.',
        image:
          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNKS2BxNXyefWdzMkEYvPoL8k5c1N8NlMAedbtnLCjZh-XCBQC1fO2ObhTWbZ5Q76wOWEFw-Gjs6c9--B_RYshx1tSbOqnHkE5cZIrNpA7c4GiPPYo8KXNbtUBDvEyDh0uGIYVfX0_fDxHa7xooafSrveZnGDBAGvkOnRMJG-CNL1EVKTK595ojxTMRxySVGB8Le0C-hXBpVyy3m-1FyYLePkDrKW6DKvY0Q8MfObw_SCmHiHv9Awe')",
        alt:
          'A cold brew coffee served in a tall glass filled with large ice cubes, condensation forming on the outside. Placed on a minimalist stone coaster against a light warm sand-colored background. Crisp, refreshing lighting with deep amber tones in the coffee.',
        badge: { text: 'Baru', type: 'tertiary-container' },
        tags: ['Vegan'],
        size: 'narrow',
      },
    ],
    menuItems: [
      {
        name: 'Espresso',
        price: 'Rp 25.000',
        description: 'Biji kopi lokal single origin. Sentuhan karamel dan jeruk.',
      },
      {
        name: 'Americano',
        price: 'Rp 30.000',
        description: 'Panas atau es. Bersih dan seimbang.',
      },
      {
        name: 'Cappuccino',
        price: 'Rp 40.000',
        description: 'Espresso pekat dengan lapisan busa susu tebal.',
      },
    ],
  },
];
