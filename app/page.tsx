// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { ArrowUpRight, Camera, ExternalLink, Instagram, Mail, Menu, X } from "lucide-react";

// const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeergwpg";

// type PortfolioItem = {
//   title: string;
//   category: string;
//   image: string;
//   href: string;
// };

// type FormData = {
//   fullName: string;
//   email: string;
//   phone: string;
//   instagram: string;
//   sessionType: string;
//   preferredDate: string;
//   location: string;
//   budget: string;
//   details: string;
// };

// const categoryImagePools: Record<string, string[]> = {
//   Portrait: [
//     "/images/portraits/portrait1.jpg",
//     "/images/portraits/portrait2.jpg",
//     "/images/portraits/portrait3.jpg",
//     "/images/portraits/portrait4.jpg",
//     "/images/portraits/portrait5.jpg",
//     "/images/portraits/portrait6.jpg",
//     "/images/portraits/portrait7.jpg",
//     "/images/portraits/portrait8.jpg",
//     "/images/portraits/portrait9.jpg",
//   ],
//   Graduation: [
//     "/images/graduations/graduation1.jpg",
//     "/images/graduations/graduation2.jpg",
//     "/images/graduations/graduation3.jpg",
//     "/images/graduations/graduation4.jpg",
//     "/images/graduations/graduation5.jpg",
//     "/images/graduations/graduation6.jpg",
//     "/images/graduations/graduation7.jpg",
//   ],
//   Events: [
//     "/images/events/event1.jpg",
//     "/images/events/event2.jpg",
//     "/images/events/event3.jpg",
//     "/images/events/event4.jpg",
//     "/images/events/event5.jpg",
//     "/images/events/event6.jpg",
//     "/images/events/event7.jpg",
//     "/images/events/event8.jpg",
//   ],
//   Lifestyle: [
//     "/images/lifestyle/lifestyle1.jpg",
//     "/images/lifestyle/lifestyle2.jpg",
//     "/images/lifestyle/lifestyle3.jpg",
//     "/images/lifestyle/lifestyle4.jpg",
//     "/images/lifestyle/lifestyle5.jpg",
//     "/images/lifestyle/lifestyle6.jpg",
//     "/images/lifestyle/lifestyle7.jpg",
//   ],
//   Branding: [
//     "/images/branding/branding1.jpg",
//     "/images/branding/branding2.jpg",
//     "/images/branding/branding3.jpg",
//   ],
// };

// const heroImagePool = [
//   "/images/hero/hero1.jpg",
//   "/images/hero/hero2.jpg",
//   "/images/hero/hero3.jpg",
//   "/images/hero/hero4.jpg",
//   "/images/hero/hero5.jpg",
//   "/images/hero/hero6.jpg",
//   "/images/hero/hero7.jpg",
// ];

// const portfolioItems: PortfolioItem[] = [
//   {
//     title: "Portrait",
//     category: "Portrait",
//     image: categoryImagePools.Portrait[0],
//     href: "#contact",
//   },
//   {
//     title: "Graduation",
//     category: "Graduation",
//     image: categoryImagePools.Graduation[0],
//     href: "#contact",
//   },
//   {
//     title: "Events",
//     category: "Events",
//     image: categoryImagePools.Events[0],
//     href: "#contact",
//   },
//   {
//     title: "Lifestyle",
//     category: "Lifestyle",
//     image: categoryImagePools.Lifestyle[0],
//     href: "https://instagram.com/hailshcreative",
//   },
//   // {
//   //   title: "Branding",
//   //   category: "Branding",
//   //   image: categoryImagePools.Branding[0],
//   //   href: "https://instagram.com/hailshcreative",
//   // },
//   // {
//   //   title: "Creative Portraits",
//   //   category: "Portrait",
//   //   image: categoryImagePools.Portrait[1],
//   //   href: "#contact",
//   // },
//   // {
//   //   title: "Campus Sessions",
//   //   category: "Graduation",
//   //   image: categoryImagePools.Graduation[1],
//   //   href: "https://instagram.com/hailshcreative",
//   // },
//   // {
//   //   title: "Coverage",
//   //   category: "Events",
//   //   image: categoryImagePools.Events[1],
//   //   href: "#contact",
//   // },
// ];

// function shuffleArray<T>(arr: T[]): T[] {
//   const copy = [...arr];
//   for (let i = copy.length - 1; i > 0; i -= 1) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [copy[i], copy[j]] = [copy[j], copy[i]];
//   }
//   return copy;
// }

// function getRandomImageFromPool(category: string, fallback: string): string {
//   const pool = categoryImagePools[category] || [];
//   if (!pool.length) return fallback;
//   return pool[Math.floor(Math.random() * pool.length)] || fallback;
// }

// function buildGalleryItems(): PortfolioItem[] {
//   return shuffleArray(
//     portfolioItems.map((item) => ({
//       ...item,
//       image: getRandomImageFromPool(item.category, item.image),
//     })),
//   );
// }

// export default function PhotographyPortfolioWebsite() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitMessage, setSubmitMessage] = useState("");
//   const [heroImages, setHeroImages] = useState<string[]>(() => shuffleArray(heroImagePool).slice(0, 2));
//   const [galleryImages, setGalleryImages] = useState<PortfolioItem[]>(() => buildGalleryItems());
//   const [formData, setFormData] = useState<FormData>({
//     fullName: "",
//     email: "",
//     phone: "",
//     instagram: "",
//     sessionType: "Portrait Session",
//     preferredDate: "",
//     location: "",
//     budget: "",
//     details: "",
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setHeroImages(shuffleArray(heroImagePool).slice(0, 2));
//       setGalleryImages(buildGalleryItems());
//     }, 10000);

//     return () => clearInterval(interval);
//   }, []);

//   const categories = useMemo(
//     () => ["All", ...new Set(portfolioItems.map((item) => item.category))],
//     [],
//   );

//   const filteredWorks = useMemo(() => {
//     const source = galleryImages.length ? galleryImages : portfolioItems;
//     if (selectedCategory === "All") return source;
//     return source.filter((item) => item.category === selectedCategory);
//   }, [galleryImages, selectedCategory]);

//   const navItems = [
//     { label: "Work", href: "#portfolio" },
//     { label: "About", href: "#about" },
//     { label: "Experience", href: "#experience" },
//     { label: "Pricing", href: "#pricing" },
//     { label: "Book", href: "#contact" },
//   ];

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleInquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setSubmitMessage("");

//     if (FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
//       setSubmitMessage("Add your Formspree endpoint to activate the form.");
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       const response = await fetch(FORMSPREE_ENDPOINT, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({
//           ...formData,
//           _subject: `New ${formData.sessionType} Inquiry - ${formData.fullName || "Hailsh Creative"}`,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Submission failed");
//       }

//       setSubmitMessage("Inquiry sent successfully.");
//       setFormData({
//         fullName: "",
//         email: "",
//         phone: "",
//         instagram: "",
//         sessionType: "Portrait Session",
//         preferredDate: "",
//         location: "",
//         budget: "",
//         details: "",
//       });
//     } catch {
//       setSubmitMessage("Something went wrong. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#0f0c05] text-white">
//       <header className="sticky top-0 z-50 border-b border-[#f3c94b]/15 bg-[#0f0c05]/90 backdrop-blur">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
//           <a href="#home" className="flex min-w-0 items-center gap-3">
//             <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f3c94b]/45 bg-[#f3c94b]/10 text-[#f3c94b]">
//               <Camera size={18} />
//             </div>
//             <div className="min-w-0">
//               <p className="truncate text-sm font-semibold uppercase tracking-[0.28em] text-[#f3c94b]">
//                 Hailsh
//               </p>
//               <p className="truncate text-xs text-white/55">Creative</p>
//             </div>
//           </a>

//           <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
//             {navItems.map((item) => (
//               <a key={item.label} href={item.href} className="transition hover:text-[#f3c94b]">
//                 {item.label}
//               </a>
//             ))}
//           </nav>

//           <div className="flex items-center gap-2">
//             <a
//               href="#contact"
//               className="hidden rounded-full bg-[#f3c94b] px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90 md:inline-flex"
//             >
//               Book
//             </a>
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="rounded-full border border-[#f3c94b]/20 p-2 text-[#f3c94b] md:hidden"
//               aria-label="Toggle menu"
//             >
//               {menuOpen ? <X size={18} /> : <Menu size={18} />}
//             </button>
//           </div>
//         </div>

//         {menuOpen && (
//           <div className="border-t border-[#f3c94b]/10 bg-[#0f0c05] md:hidden">
//             <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 text-sm text-white/75 sm:px-6">
//               {navItems.map((item) => (
//                 <a key={item.label} href={item.href} className="py-3" onClick={() => setMenuOpen(false)}>
//                   {item.label}
//                 </a>
//               ))}
//             </div>
//           </div>
//         )}
//       </header>

//       <section id="home" className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(243,201,75,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(243,201,75,0.10),transparent_24%)]" />
//         <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
//           <div className="flex flex-col justify-center">
//             <p className="text-xs uppercase tracking-[0.35em] text-[#f3c94b]">DMV Photographer</p>
//             <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
//               Haileleul Mekonnen
//             </h1>
//             <p className="mt-3 text-lg text-[#f3c94b] sm:text-xl">Hailsh Creative</p>
//             <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
//               I’m a DMV-based photographer and videographer focused on portraits, graduations, events, and visual storytelling. I want every session to feel relaxed, natural, and personal so you leave with photos and videos that feel like you.
//             </p>
//             <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//               <a
//                 href="#portfolio"
//                 className="inline-flex justify-center rounded-full bg-[#f3c94b] px-6 py-3 text-sm font-semibold text-black"
//               >
//                 View Work
//               </a>
//               <a
//                 href="#contact"
//                 className="inline-flex justify-center rounded-full border border-[#f3c94b]/30 px-6 py-3 text-sm font-semibold text-[#f3c94b]"
//               >
//                 Book Session
//               </a>
//             </div>
//             <div className="mt-8 grid grid-cols-3 gap-3">
//               <div className="rounded-3xl border border-[#f3c94b]/12 bg-white/5 p-4 text-center">
//                 <p className="text-xl font-semibold text-[#f3c94b]">5+</p>
//                 <p className="mt-1 text-xs text-white/55">Years</p>
//               </div>
//               <div className="rounded-3xl border border-[#f3c94b]/12 bg-white/5 p-4 text-center">
//                 <p className="text-xl font-semibold text-[#f3c94b]">DMV</p>
//                 <p className="mt-1 text-xs text-white/55">Based</p>
//               </div>
//               <div className="rounded-3xl border border-[#f3c94b]/12 bg-white/5 p-4 text-center">
//                 <p className="text-xl font-semibold text-[#f3c94b]">Photo + Video</p>
//                 <p className="mt-1 text-xs text-white/55">Available</p>
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//             <div className="overflow-hidden rounded-[2rem] border border-[#f3c94b]/15 bg-black/20">
//               <img
//                 src={heroImages[0] || heroImagePool[0]}
//                 alt="Featured work"
//                 className="block w-full h-auto"
//               />
//             </div>
//             <div className="grid gap-4">
//               <div className="overflow-hidden rounded-[2rem] border border-[#f3c94b]/15 bg-black/20">
//                 <img
//                   src={heroImages[1] || heroImagePool[1]}
//                   alt="Featured work"
//                   className="block w-full h-auto"
//                 />
//               </div>
//               <div className="rounded-[2rem] border border-[#f3c94b]/15 bg-[#161108] p-6">
//                 <p className="text-xs uppercase tracking-[0.28em] text-[#f3c94b]">
//                   Portraits • Graduations • Events
//                 </p>
//                 <p className="mt-3 text-3xl font-semibold">DMV Photography</p>
//                 <p className="mt-2 text-sm text-white/60">
//                   Each category can now pull from its own image set for a more consistent gallery.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="about" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
//         <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
//           <div className="overflow-hidden rounded-[2rem] border border-[#f3c94b]/12 bg-black/20">
//             <img
//               src="/images/about-me.jpg"
//               alt="Haileleul Mekonnen"
//               className="block w-full h-auto"
//             />
//           </div>
//           <div className="rounded-[2rem] border border-[#f3c94b]/12 bg-[#161108] p-6 sm:p-8 md:p-10">
//             <p className="text-sm uppercase tracking-[0.3em] text-[#f3c94b]">About</p>
//             <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">Behind the camera</h2>
//             <p className="mt-5 text-sm leading-8 text-white/70 sm:text-base">
//               I’m Haileleul Mekonnen, the photographer behind Hailsh Creative. I’ve been shooting for over 5 years, working with people across the DMV on portraits, graduations, and events.
//             </p>
//             <p className="mt-4 text-sm leading-8 text-white/70 sm:text-base">
//               I know being in front of the camera can feel awkward, so I focus on making the whole experience comfortable and easy. I’ll guide you through posing, help you find the best light, and make sure you feel confident throughout the shoot.
//             </p>
//             <p className="mt-4 text-sm leading-8 text-white/70 sm:text-base">
//               At the end, you don’t just get photos—you get images that actually feel like you, just at your best.
//             </p>
//             <div className="mt-8 grid gap-3 sm:grid-cols-3">
//               <div className="rounded-2xl border border-[#f3c94b]/12 bg-black/20 p-4">
//                 <p className="text-xs uppercase tracking-[0.22em] text-[#f3c94b]">Service</p>
//                 <p className="mt-2 text-sm text-white/75">Photo + Video</p>
//               </div>
//               <div className="rounded-2xl border border-[#f3c94b]/12 bg-black/20 p-4">
//                 <p className="text-xs uppercase tracking-[0.22em] text-[#f3c94b]">Location</p>
//                 <p className="mt-2 text-sm text-white/75">DMV Area</p>
//               </div>
//               <div className="rounded-2xl border border-[#f3c94b]/12 bg-black/20 p-4">
//                 <p className="text-xs uppercase tracking-[0.22em] text-[#f3c94b]">Turnaround</p>
//                 <p className="mt-2 text-sm text-white/75">Fast Delivery</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="experience" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
//         <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
//           <div className="rounded-[2rem] border border-[#f3c94b]/12 bg-[#161108] p-6 sm:p-8 md:p-10">
//             <p className="text-sm uppercase tracking-[0.3em] text-[#f3c94b]">What to expect</p>
//             <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">A session that feels easy</h2>
//             <div className="mt-6 space-y-4 text-sm leading-8 text-white/70 sm:text-base">
//               <p>
//                 I’ll help you with the details before the shoot, including location ideas, timing, outfit direction, and the kind of look you want.
//               </p>
//               <p>
//                 During the session, I guide you the whole way so you never feel lost in front of the camera. I pay attention to the little things—angles, posture, light, and expressions.
//               </p>
//               <p>
//                 After the shoot, I carefully edit the final images so they still feel natural while looking polished and professional.
//               </p>
//             </div>
//           </div>
//           <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
//             <div className="rounded-[2rem] border border-[#f3c94b]/12 bg-black/20 p-6">
//               <p className="text-xs uppercase tracking-[0.24em] text-[#f3c94b]">My style</p>
//               <p className="mt-3 text-2xl font-semibold">Clean, warm, and natural</p>
//               <p className="mt-3 text-sm leading-7 text-white/65">
//                 I like photos that feel real first—then refined. Strong light, natural tones, and a look that stays timeless.
//               </p>
//             </div>
//             <div className="rounded-[2rem] border border-[#f3c94b]/12 bg-black/20 p-6">
//               <p className="text-xs uppercase tracking-[0.24em] text-[#f3c94b]">Client trust</p>
//               <p className="mt-3 text-2xl font-semibold">People want to feel comfortable</p>
//               <p className="mt-3 text-sm leading-7 text-white/65">
//                 That matters to me just as much as the photos. I want the session to feel smooth, relaxed, and worth remembering.
//               </p>
//             </div>
//             <div className="rounded-[2rem] border border-[#f3c94b]/12 bg-black/20 p-6">
//               <p className="text-xs uppercase tracking-[0.24em] text-[#f3c94b]">Delivery</p>
//               <p className="mt-3 text-2xl font-semibold">Edited with care</p>
//               <p className="mt-3 text-sm leading-7 text-white/65">
//                 Your final gallery is edited with attention to detail so the images feel finished without looking overdone.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="testimonials" className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
//         <div className="grid gap-4 md:grid-cols-3">
//           <div className="rounded-[2rem] border border-[#f3c94b]/12 bg-[#161108] p-6">
//             <p className="text-sm leading-8 text-white/70">
//               “The whole shoot felt comfortable from the start. I usually don’t know how to pose, but he made it easy and the photos came out so natural.”
//             </p>
//             <p className="mt-5 text-sm font-medium text-[#f3c94b]">Portrait Client</p>
//           </div>
//           <div className="rounded-[2rem] border border-[#f3c94b]/12 bg-[#161108] p-6">
//             <p className="text-sm leading-8 text-white/70">
//               “My graduation photos came out exactly how I wanted. Clean, confident, and high quality. He really knows how to work with lighting and location.”
//             </p>
//             <p className="mt-5 text-sm font-medium text-[#f3c94b]">Graduation Client</p>
//           </div>
//           <div className="rounded-[2rem] border border-[#f3c94b]/12 bg-[#161108] p-6">
//             <p className="text-sm leading-8 text-white/70">
//               “Professional, easy to work with, and creative. The event coverage captured both the important moments and the energy of the night.”
//             </p>
//             <p className="mt-5 text-sm font-medium text-[#f3c94b]">Event Client</p>
//           </div>
//         </div>
//       </section>

//       <section id="portfolio" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
//         <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
//           <div>
//             <p className="text-sm uppercase tracking-[0.3em] text-[#f3c94b]/85">Portfolio</p>
//             <h2 className="mt-3 text-3xl font-semibold sm:text-4xl md:text-5xl">Featured</h2>
//           </div>
//           <div className="flex flex-wrap gap-2">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`rounded-full px-4 py-2 text-sm transition ${
//                   selectedCategory === category
//                     ? "bg-[#f3c94b] text-black"
//                     : "border border-[#f3c94b]/20 text-white/70 hover:border-[#f3c94b]/35 hover:text-white"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3 sm:gap-5">
//           {filteredWorks.map((item, index) => (
//             <a
//               key={`${item.title}-${index}`}
//               href={item.href}
//               className="group relative mb-4 block break-inside-avoid overflow-hidden rounded-[2rem] border border-[#f3c94b]/12 bg-black/20"
//             >
//               <img src={item.image} alt={item.title} className="block w-full h-auto transition duration-500 group-hover:scale-[1.02]" />
//               <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 sm:p-5">
//                 <div className="flex items-end justify-between gap-4">
//                   <div>
//                     <p className="text-xs uppercase tracking-[0.25em] text-[#f3c94b]">{item.category}</p>
//                     <h3 className="mt-2 text-lg font-semibold sm:text-xl">{item.title}</h3>
//                   </div>
//                   <div className="rounded-full border border-[#f3c94b]/35 bg-black/30 p-2 text-[#f3c94b]">
//                     <ArrowUpRight size={18} />
//                   </div>
//                 </div>
//               </div>
//             </a>
//           ))}
//         </div>
//       </section>

//       <section id="pricing" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
//         <div className="grid gap-4 lg:grid-cols-3">
//           {[
//             { title: "Mini", price: "$180", items: ["30 min", "10 edits", "1 location"] },
//             { title: "Signature", price: "$325", items: ["1 hour", "25 edits", "2 looks"] },
//             { title: "Events", price: "$450+", items: ["2+ hours", "Full coverage", "Gallery delivery"] },
//           ].map((item) => (
//             <div key={item.title} className="rounded-[2rem] border border-[#f3c94b]/12 bg-[#161108] p-6">
//               <p className="text-sm uppercase tracking-[0.25em] text-[#f3c94b]">{item.title}</p>
//               <p className="mt-4 text-4xl font-semibold">{item.price}</p>
//               <div className="mt-6 space-y-3 text-sm text-white/70">
//                 {item.items.map((detail) => (
//                   <div key={detail} className="rounded-xl border border-[#f3c94b]/12 px-3 py-3">
//                     {detail}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section id="links" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
//         <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
//           {[
//             {
//               label: "Instagram",
//               value: "@hailshcreative",
//               href: "https://instagram.com/hailshcreative",
//               icon: Instagram,
//             },
//             {
//               label: "Email",
//               value: "hailshbusiness@gmail.com",
//               href: "mailto:hailshbusiness@gmail.com",
//               icon: Mail,
//             },
//             { label: "Portfolio", value: "See Work", href: "#portfolio", icon: Camera },
//             { label: "Book", value: "Start Inquiry", href: "#contact", icon: ExternalLink },
//           ].map((link) => {
//             const Icon = link.icon;
//             return (
//               <a
//                 key={link.label}
//                 href={link.href}
//                 className="group rounded-[2rem] border border-[#f3c94b]/12 bg-[#161108] p-5 transition hover:border-[#f3c94b]/30"
//               >
//                 <div className="w-fit rounded-2xl border border-[#f3c94b]/15 bg-black/20 p-3 text-[#f3c94b]">
//                   <Icon size={20} />
//                 </div>
//                 <p className="mt-4 text-xs uppercase tracking-[0.25em] text-white/45">{link.label}</p>
//                 <h3 className="mt-2 text-xl font-semibold">{link.value}</h3>
//               </a>
//             );
//           })}
//         </div>
//       </section>

//       <section id="contact" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
//         <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
//           <div className="rounded-[2rem] border border-[#f3c94b]/12 bg-[#161108] p-6 sm:p-8 md:p-10">
//             <p className="text-sm uppercase tracking-[0.3em] text-[#f3c94b]">Booking</p>
//             <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">Let’s shoot.</h2>
//             <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
//               Fill the form and send your inquiry directly from the site.
//             </p>
//           </div>

//           <form
//             onSubmit={handleInquirySubmit}
//             className="rounded-[2rem] border border-[#f3c94b]/12 bg-black/20 p-6 sm:p-8 md:p-10"
//           >
//             <div className="grid gap-4 md:grid-cols-2">
//               <div>
//                 <label className="mb-2 block text-sm text-white/55">Full name</label>
//                 <input
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full rounded-2xl border border-[#f3c94b]/12 bg-[#120e07] px-4 py-3 text-sm outline-none transition focus:border-[#f3c94b]/35"
//                 />
//               </div>
//               <div>
//                 <label className="mb-2 block text-sm text-white/55">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full rounded-2xl border border-[#f3c94b]/12 bg-[#120e07] px-4 py-3 text-sm outline-none transition focus:border-[#f3c94b]/35"
//                 />
//               </div>
//               <div>
//                 <label className="mb-2 block text-sm text-white/55">Phone</label>
//                 <input
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   className="w-full rounded-2xl border border-[#f3c94b]/12 bg-[#120e07] px-4 py-3 text-sm outline-none transition focus:border-[#f3c94b]/35"
//                 />
//               </div>
//               <div>
//                 <label className="mb-2 block text-sm text-white/55">Instagram</label>
//                 <input
//                   name="instagram"
//                   value={formData.instagram}
//                   onChange={handleInputChange}
//                   placeholder="@username"
//                   className="w-full rounded-2xl border border-[#f3c94b]/12 bg-[#120e07] px-4 py-3 text-sm outline-none transition focus:border-[#f3c94b]/35"
//                 />
//               </div>
//               <div>
//                 <label className="mb-2 block text-sm text-white/55">Session</label>
//                 <select
//                   name="sessionType"
//                   value={formData.sessionType}
//                   onChange={handleInputChange}
//                   className="w-full rounded-2xl border border-[#f3c94b]/12 bg-[#120e07] px-4 py-3 text-sm outline-none transition focus:border-[#f3c94b]/35"
//                 >
//                   <option>Portrait Session</option>
//                   <option>Graduation Session</option>
//                   <option>Event Coverage</option>
//                   <option>Brand Shoot</option>
//                   <option>Other</option>
//                   <option>Video Shoot</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="mb-2 block text-sm text-white/55">Preferred date</label>
//                 <input
//                   type="date"
//                   name="preferredDate"
//                   value={formData.preferredDate}
//                   onChange={handleInputChange}
//                   className="w-full rounded-2xl border border-[#f3c94b]/12 bg-[#120e07] px-4 py-3 text-sm outline-none transition focus:border-[#f3c94b]/35"
//                 />
//               </div>
//             </div>

//             <div className="mt-4 grid gap-4">
//               <div>
//                 <label className="mb-2 block text-sm text-white/55">Location</label>
//                 <input
//                   name="location"
//                   value={formData.location}
//                   onChange={handleInputChange}
//                   className="w-full rounded-2xl border border-[#f3c94b]/12 bg-[#120e07] px-4 py-3 text-sm outline-none transition focus:border-[#f3c94b]/35"
//                 />
//               </div>
//               <div>
//                 <label className="mb-2 block text-sm text-white/55">Budget</label>
//                 <input
//                   name="budget"
//                   value={formData.budget}
//                   onChange={handleInputChange}
//                   className="w-full rounded-2xl border border-[#f3c94b]/12 bg-[#120e07] px-4 py-3 text-sm outline-none transition focus:border-[#f3c94b]/35"
//                 />
//               </div>
//               <div>
//                 <label className="mb-2 block text-sm text-white/55">Details</label>
//                 <textarea
//                   name="details"
//                   value={formData.details}
//                   onChange={handleInputChange}
//                   rows={5}
//                   className="w-full rounded-2xl border border-[#f3c94b]/12 bg-[#120e07] px-4 py-3 text-sm outline-none transition focus:border-[#f3c94b]/35"
//                 />
//               </div>
//             </div>

//             <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//               <p className="text-sm text-white/45">Replies go to hailshbusiness@gmail.com</p>
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="inline-flex justify-center rounded-full bg-[#f3c94b] px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
//               >
//                 {isSubmitting ? "Sending..." : "Send Inquiry"}
//               </button>
//             </div>

//             {submitMessage && (
//               <p className="mt-4 rounded-2xl border border-[#f3c94b]/12 bg-[#161108] px-4 py-3 text-sm text-white/75">
//                 {submitMessage}
//               </p>
//             )}
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// }


"use client";

import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import { ArrowUpRight, Camera, ExternalLink, Instagram, Mail, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeergwpg";

type PortfolioItem = {
  title: string;
  category: string;
  image: string;
  href: string;
};

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  instagram: string;
  sessionType: string;
  preferredDate: string;
  location: string;
  budget: string;
  details: string;
};

const categoryImagePools: Record<string, string[]> = {
  Portrait: [
    "/images/portraits/portrait1.jpg",
    "/images/portraits/portrait2.jpg",
    "/images/portraits/portrait3.jpg",
    "/images/portraits/portrait4.jpg",
    "/images/portraits/portrait5.jpg",
    "/images/portraits/portrait6.jpg",
    "/images/portraits/portrait7.jpg",
    "/images/portraits/portrait8.jpg",
    "/images/portraits/portrait9.jpg",
  ],
  Graduation: [
    "/images/graduations/graduation1.jpg",
    "/images/graduations/graduation2.jpg",
    "/images/graduations/graduation3.jpg",
    "/images/graduations/graduation4.jpg",
    "/images/graduations/graduation5.jpg",
    "/images/graduations/graduation6.jpg",
    "/images/graduations/graduation7.jpg",
  ],
  Events: [
    "/images/events/event1.jpg",
    "/images/events/event2.jpg",
    "/images/events/event3.jpg",
    "/images/events/event4.jpg",
    "/images/events/event5.jpg",
    "/images/events/event6.jpg",
    "/images/events/event7.jpg",
    "/images/events/event8.jpg",
  ],
  Lifestyle: [
    "/images/lifestyle/lifestyle1.jpg",
    "/images/lifestyle/lifestyle2.jpg",
    "/images/lifestyle/lifestyle3.jpg",
    "/images/lifestyle/lifestyle4.jpg",
    "/images/lifestyle/lifestyle5.jpg",
    "/images/lifestyle/lifestyle6.jpg",
    "/images/lifestyle/lifestyle7.jpg",
  ],
  Branding: [
    "/images/branding/branding1.jpg",
    "/images/branding/branding2.jpg",
    "/images/branding/branding3.jpg",
  ],
};

const heroImagePool = [
  "/images/hero/hero1.jpg",
  "/images/hero/hero3.jpg",
  "/images/hero/hero4.jpg",
  "/images/hero/hero5.jpg",
  "/images/hero/hero7.jpg",
];

// Preload critical images for faster loading
const criticalImages = [
  "/images/about-me.jpg",
  ...heroImagePool.slice(0, 3),
  ...categoryImagePools.Portrait.slice(0, 2),
  ...categoryImagePools.Graduation.slice(0, 2),
];

const basePortfolioItems: PortfolioItem[] = [
  {
    title: "Portrait",
    category: "Portrait",
    image: categoryImagePools.Portrait[0],
    href: "#contact",
  },
  {
    title: "Graduation",
    category: "Graduation",
    image: categoryImagePools.Graduation[0],
    href: "#contact",
  },
  {
    title: "Events",
    category: "Events",
    image: categoryImagePools.Events[0],
    href: "#contact",
  },
  {
    title: "Lifestyle",
    category: "Lifestyle",
    image: categoryImagePools.Lifestyle[0],
    href: "#contact",
  },
];

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getRandomImageFromPool(category: string): string {
  const pool = categoryImagePools[category] || [];
  if (!pool.length) return "";
  return pool[Math.floor(Math.random() * pool.length)];
}

// Function to generate portfolio items with random images
function generateRandomPortfolioItems(): PortfolioItem[] {
  return basePortfolioItems.map((item) => ({
    ...item,
    image: getRandomImageFromPool(item.category),
  }));
}

// Preload images function for faster loading
const preloadImages = (urls: string[]) => {
  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

// Image component with optimized loading
const OptimizedImage = ({ src, alt, className, objectFit = "cover", priority = false }: { src: string; alt: string; className?: string; objectFit?: "cover" | "contain"; priority?: boolean }) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reset loading state when src changes
    setIsLoading(true);
    setImageError(false);
  }, [src]);

  const handleError = () => {
    console.warn(`Failed to load image: ${src}`);
    setImageError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (imageError) {
    return (
      <div className={`flex items-center justify-center bg-[#161108] ${className}`}>
        <div className="text-center">
          <Camera size={32} className="mx-auto mb-2 text-[#f3c94b]/40" />
          <p className="text-xs text-white/40">Image not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#161108]">
          <div className="h-8 w-8 animate-pulse rounded-full bg-[#f3c94b]/20"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        style={{ objectFit }}
        onError={handleError}
        onLoad={handleLoad}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
};

// Split Hero Carousel Component (Right Side)
const HeroCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [images.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [images.length, isTransitioning]);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [nextSlide, isPaused]);

  // Handle image load to adjust container aspect ratio
  const handleImageLoad = (imgElement: HTMLImageElement) => {
    if (imgElement && imgElement.naturalWidth && imgElement.naturalHeight) {
      setImageDimensions({
        width: imgElement.naturalWidth,
        height: imgElement.naturalHeight,
      });
    }
  };

  return (
    <div 
      className="relative w-full overflow-hidden rounded-[2rem] border border-[#f3c94b]/15 bg-black/20"
      style={{ 
        aspectRatio: imageDimensions.width && imageDimensions.height 
          ? `${imageDimensions.width / imageDimensions.height}` 
          : "4/3"
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="h-full w-full flex-shrink-0">
            <img
              src={img}
              alt={`Hero ${idx + 1}`}
              className="h-full w-full object-cover"
              loading={idx === 0 ? "eager" : "lazy"}
              onLoad={(e) => {
                if (idx === 0) {
                  handleImageLoad(e.currentTarget);
                }
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70 hover:text-[#f3c94b] backdrop-blur-sm z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70 hover:text-[#f3c94b] backdrop-blur-sm z-20"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(idx);
                setTimeout(() => setIsTransitioning(false), 500);
              }
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === idx 
                ? 'w-6 bg-[#f3c94b]' 
                : 'w-2 bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Smooth scroll to section
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function PhotographyPortfolioWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [heroImages, setHeroImages] = useState<string[]>(() => shuffleArray(heroImagePool));
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(() => generateRandomPortfolioItems());

  // Preload critical images on mount
  useEffect(() => {
    preloadImages(criticalImages);
  }, []);

  // Rotate portfolio images every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPortfolioItems(generateRandomPortfolioItems());
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const categories = useMemo(
    () => ["All", ...new Set(basePortfolioItems.map((item) => item.category))],
    [],
  );

  const filteredWorks = useMemo(() => {
    if (selectedCategory === "All") return portfolioItems;
    return portfolioItems.filter((item) => item.category === selectedCategory);
  }, [portfolioItems, selectedCategory]);

  const navItems = [
    { label: "Work", href: "portfolio" },
    { label: "About", href: "about" },
    { label: "Experience", href: "experience" },
    { label: "Pricing", href: "pricing" },
    { label: "Book", href: "contact" },
  ];

  const handleNavClick = (sectionId: string) => {
    setMenuOpen(false);
    scrollToSection(sectionId);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    instagram: "",
    sessionType: "Portrait Session",
    preferredDate: "",
    location: "",
    budget: "",
    details: "",
  });

  const handleInquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitMessage("");

    if (FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
      setSubmitMessage("Add your Formspree endpoint to activate the form.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New ${formData.sessionType} Inquiry - ${formData.fullName || "Hailsh Creative"}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitMessage("Inquiry sent successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        instagram: "",
        sessionType: "Portrait Session",
        preferredDate: "",
        location: "",
        budget: "",
        details: "",
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(""), 5000);
    } catch {
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0c05] text-white">
      <header className="sticky top-0 z-50 border-b border-[#f3c94b]/15 bg-[#0f0c05]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => scrollToSection("home")}
            className="flex min-w-0 items-center gap-3 cursor-pointer"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f3c94b]/45 bg-[#f3c94b]/10 text-[#f3c94b]">
              <Camera size={18} />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold uppercase tracking-[0.28em] text-[#f3c94b]">
                Hailsh
              </p>
              <p className="truncate text-xs text-white/55">Creative</p>
            </div>
          </button>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="transition hover:text-[#f3c94b] cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden rounded-full bg-[#f3c94b] px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90 md:inline-flex cursor-pointer"
            >
              Book
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-full border border-[#f3c94b]/20 p-2 text-[#f3c94b] md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-[#f3c94b]/10 bg-[#0f0c05] md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 text-sm text-white/75 sm:px-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="py-3 text-left cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - Split Layout */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(243,201,75,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(243,201,75,0.10),transparent_24%)]" />
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#f3c94b]">DMV Photographer</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
              Haileleul Mekonnen
            </h1>
            <p className="mt-3 text-lg text-[#f3c94b] sm:text-xl">Hailsh Creative</p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              I'm a DMV-based photographer and videographer focused on portraits, graduations, events, and visual storytelling. I want every session to feel relaxed, natural, and personal so you leave with photos and videos that feel like you.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="inline-flex justify-center rounded-full bg-[#f3c94b] px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90 cursor-pointer"
              >
                View Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex justify-center rounded-full border border-[#f3c94b]/30 px-6 py-3 text-sm font-semibold text-[#f3c94b] transition hover:bg-[#f3c94b]/10 cursor-pointer"
              >
                Book Session
              </button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="rounded-3xl border border-[#f3c94b]/12 bg-white/5 p-4 text-center">
                <p className="text-xl font-semibold text-[#f3c94b]">5+</p>
                <p className="mt-1 text-xs text-white/55">Years</p>
              </div>
              <div className="rounded-3xl border border-[#f3c94b]/12 bg-white/5 p-4 text-center">
                <p className="text-xl font-semibold text-[#f3c94b]">DMV</p>
                <p className="mt-1 text-xs text-white/55">Based</p>
              </div>
              <div className="rounded-3xl border border-[#f3c94b]/12 bg-white/5 p-4 text-center">
                <p className="text-xl font-semibold text-[#f3c94b]">Photo + Video</p>
                <p className="mt-1 text-xs text-white/55">Available</p>
              </div>
            </div>
          </div>

          {/* Right Side - Carousel */}
          <HeroCarousel images={heroImages} />
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-[#f3c94b]/12 bg-black/20">
            <OptimizedImage
              src="/images/about-me.jpg"
              alt="Haileleul Mekonnen"
              className="block w-full h-auto"
              objectFit="cover"
              priority={true}
            />
          </div>
          <div className="rounded-[2rem] border border-[#f3c94b]/12 bg-[#161108] p-6 sm:p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#f3c94b]">About</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">Behind the camera</h2>
            <p className="mt-5 text-sm leading-8 text-white/70 sm:text-base">
              I'm Haileleul Mekonnen, the photographer behind Hailsh Creative. I've been shooting for over 5 years, working with people across the DMV on portraits, graduations, and events.
            </p>
            <p className="mt-4 text-sm leading-8 text-white/70 sm:text-base">
              I know being in front of the camera can feel awkward, so I focus on making the whole experience comfortable and easy. I'll guide you through posing, help you find the best light, and make sure you feel confident throughout the shoot.
            </p>
            <p className="mt-4 text-sm leading-8 text-white/70 sm:text-base">
              At the end, you don't just get photos—you get images that actually feel like you, just at your best.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#f3c94b]/12 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[#f3c94b]">Service</p>
                <p className="mt-2 text-sm text-white/75">Photo + Video</p>
              </div>
              <div className="rounded-2xl border border-[#f3c94b]/12 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[#f3c94b]">Location</p>
                <p className="mt-2 text-sm text-white/75">DMV Area</p>
              </div>
              <div className="rounded-2xl border border-[#f3c94b]/12 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[#f3c94b]">Turnaround</p>
                <p className="mt-2 text-sm text-white/75">Fast Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[#f3c94b]/12 bg-[#161108] p-6 sm:p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#f3c94b]">What to expect</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">A session that feels easy</h2>
            <div className="mt-6 space-y-4 text-sm leading-8 text-white/70 sm:text-base">
              <p>
                I'll help you with the details before the shoot, including location ideas, timing, outfit direction, and the kind of look you want.
              </p>
              <p>
                During the session, I guide you the whole way so you never feel lost in front of the camera. I pay attention to the little things—angles, posture, light, and expressions.
              </p>
              <p>
                After the shoot, I carefully edit the final images so they still feel natural while looking polished and professional.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-[2rem] border border-[#f3c94b]/12 bg-black/20 p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-[#f3c94b]">My style</p>
              <p className="mt-3 text-2xl font-semibold">Clean, warm, and natural</p>
              <p className="mt-3 text-sm leading-7 text-white/65">
                I like photos that feel real first—then refined. Strong light, natural tones, and a look that stays timeless.
              </p>
            </div>
            <div className="rounded-[2rem] border border-[#f3c94b]/12 bg-black/20 p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-[#f3c94b]">Client trust</p>
              <p className="mt-3 text-2xl font-semibold">People want to feel comfortable</p>
              <p className="mt-3 text-sm leading-7 text-white/65">
                That matters to me just as much as the photos. I want the session to feel smooth, relaxed, and worth remembering.
              </p>
            </div>
            <div className="rounded-[2rem] border border-[#f3c94b]/12 bg-black/20 p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-[#f3c94b]">Delivery</p>
              <p className="mt-3 text-2xl font-semibold">Edited with care</p>
              <p className="mt-3 text-sm leading-7 text-white/65">
                Your final gallery is edited with attention to detail so the images feel finished without looking overdone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-[2rem] border border-[#f3c94b]/12 bg-[#161108] p-6">
            <p className="text-sm leading-8 text-white/70">
              "The whole shoot felt comfortable from the start. I usually don't know how to pose, but he made it easy and the photos came out so natural."
            </p>
            <p className="mt-5 text-sm font-medium text-[#f3c94b]">Portrait Client</p>
          </div>
          <div className="rounded-[2rem] border border-[#f3c94b]/12 bg-[#161108] p-6">
            <p className="text-sm leading-8 text-white/70">
              "My graduation photos came out exactly how I wanted. Clean, confident, and high quality. He really knows how to work with lighting and location."
            </p>
            <p className="mt-5 text-sm font-medium text-[#f3c94b]">Graduation Client</p>
          </div>
          <div className="rounded-[2rem] border border-[#f3c94b]/12 bg-[#161108] p-6">
            <p className="text-sm leading-8 text-white/70">
              "Professional, easy to work with, and creative. The event coverage captured both the important moments and the energy of the night."
            </p>
            <p className="mt-5 text-sm font-medium text-[#f3c94b]">Event Client</p>
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#f3c94b]/85">Portfolio</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl md:text-5xl">Featured</h2>
            <p className="mt-2 text-sm text-white/50">Images refresh every 10 seconds with new photos from each category</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  selectedCategory === category
                    ? "bg-[#f3c94b] text-black"
                    : "border border-[#f3c94b]/20 text-white/70 hover:border-[#f3c94b]/35 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3 sm:gap-5">
          {filteredWorks.map((item, index) => (
            <button
              key={`${item.title}-${item.image}-${index}`}
              onClick={() => scrollToSection("contact")}
              className="group relative mb-4 block break-inside-avoid overflow-hidden rounded-[2rem] border border-[#f3c94b]/12 bg-black/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer w-full text-left"
            >
              <OptimizedImage 
                src={item.image} 
                alt={item.title} 
                className="block w-full h-auto" 
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 sm:p-5">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[#f3c94b]">{item.category}</p>
                    <h3 className="mt-2 text-lg font-semibold sm:text-xl">{item.title}</h3>
                  </div>
                  <div className="rounded-full border border-[#f3c94b]/35 bg-black/30 p-2 text-[#f3c94b]">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            { title: "Mini", price: "$180", items: ["30 min", "10 edits", "1 location"] },
            { title: "Signature", price: "$325", items: ["1 hour", "25 edits", "2 looks"] },
            { title: "Events", price: "$450+", items: ["2+ hours", "Full coverage", "Gallery delivery"] },
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-[#f3c94b]/12 bg-[#161108] p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[#f3c94b]">{item.title}</p>
              <p className="mt-4 text-4xl font-semibold">{item.price}</p>
              <div className="mt-6 space-y-3 text-sm text-white/70">
                {item.items.map((detail) => (
                  <div key={detail} className="rounded-xl border border-[#f3c94b]/12 px-3 py-3">
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="links" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              label: "Instagram",
              value: "@hailshcreative",
              href: "https://instagram.com/hailshcreative",
              icon: Instagram,
            },
            {
              label: "Email",
              value: "hailshbusiness@gmail.com",
              href: "mailto:hailshbusiness@gmail.com",
              icon: Mail,
            },
            { label: "Portfolio", value: "See Work", href: "#portfolio", icon: Camera, onClick: () => scrollToSection("portfolio") },
            { label: "Book", value: "Start Inquiry", href: "#contact", icon: ExternalLink, onClick: () => scrollToSection("contact") },
          ].map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.label}
                onClick={link.onClick || (() => window.open(link.href, "_blank"))}
                className="group rounded-[2rem] border border-[#f3c94b]/12 bg-[#161108] p-5 transition hover:border-[#f3c94b]/30 cursor-pointer w-full text-left"
              >
                <div className="w-fit rounded-2xl border border-[#f3c94b]/15 bg-black/20 p-3 text-[#f3c94b]">
                  <Icon size={20} />
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-white/45">{link.label}</p>
                <h3 className="mt-2 text-xl font-semibold">{link.value}</h3>
              </button>
            );
          })}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-[2rem] border border-[#f3c94b]/12 bg-[#161108] p-6 sm:p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#f3c94b]">Booking</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">Let's shoot.</h2>
            <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
              Fill the form and send your inquiry directly from the site.
            </p>
          </div>

          <form
            onSubmit={handleInquirySubmit}
            className="rounded-[2rem] border border-[#f3c94b]/12 bg-black/20 p-6 sm:p-8 md:p-10"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/55">Full name</label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-2xl border border-[#f3c94b]/12 bg-[#120e07] px-4 py-3 text-sm outline-none transition focus:border-[#f3c94b]/35"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/55">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-2xl border border-[#f3c94b]/12 bg-[#120e07] px-4 py-3 text-sm outline-none transition focus:border-[#f3c94b]/35"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/55">Phone</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full rounded-2xl border border-[#f3c94b]/12 bg-[#120e07] px-4 py-3 text-sm outline-none transition focus:border-[#f3c94b]/35"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/55">Instagram</label>
                <input
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleInputChange}
                  placeholder="@username"
                  className="w-full rounded-2xl border border-[#f3c94b]/12 bg-[#120e07] px-4 py-3 text-sm outline-none transition focus:border-[#f3c94b]/35"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/55">Session</label>
                <select
                  name="sessionType"
                  value={formData.sessionType}
                  onChange={handleInputChange}
                  className="w-full rounded-2xl border border-[#f3c94b]/12 bg-[#120e07] px-4 py-3 text-sm outline-none transition focus:border-[#f3c94b]/35"
                >
                  <option>Portrait Session</option>
                  <option>Graduation Session</option>
                  <option>Event Coverage</option>
                  <option>Brand Shoot</option>
                  <option>Other</option>
                  <option>Video Shoot</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/55">Preferred date</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className="w-full rounded-2xl border border-[#f3c94b]/12 bg-[#120e07] px-4 py-3 text-sm outline-none transition focus:border-[#f3c94b]/35"
                />
              </div>
            </div>

            <div className="mt-4 grid gap-4">
              <div>
                <label className="mb-2 block text-sm text-white/55">Location</label>
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full rounded-2xl border border-[#f3c94b]/12 bg-[#120e07] px-4 py-3 text-sm outline-none transition focus:border-[#f3c94b]/35"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/55">Budget</label>
                <input
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full rounded-2xl border border-[#f3c94b]/12 bg-[#120e07] px-4 py-3 text-sm outline-none transition focus:border-[#f3c94b]/35"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/55">Details</label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full rounded-2xl border border-[#f3c94b]/12 bg-[#120e07] px-4 py-3 text-sm outline-none transition focus:border-[#f3c94b]/35"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-white/45">Replies go to hailshbusiness@gmail.com</p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex justify-center rounded-full bg-[#f3c94b] px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </button>
            </div>

            {submitMessage && (
              <p className="mt-4 rounded-2xl border border-[#f3c94b]/12 bg-[#161108] px-4 py-3 text-sm text-white/75">
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}