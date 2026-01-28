import { siteConfig } from "@/lib/site"

export function ServiceArea() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">Service Area</h2>
        <p className="text-foreground/80 text-lg max-w-2xl mx-auto text-center mb-10">
          Proudly serving <span className="font-bold text-foreground">Glendale</span>,{" "}
          <span className="font-bold text-foreground">Burbank</span>,{" "}
          <span className="font-bold text-foreground">Pasadena</span>, and the Greater Los Angeles area.
        </p>
        
        {/* Service Area Map - Geographic Layout */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-2xl border border-primary/20 bg-card/50 overflow-hidden">
            {/* Grid background pattern */}
            <div className="absolute inset-0 opacity-5 rounded-2xl">
              <div className="h-full w-full" style={{
                backgroundImage: 'linear-gradient(rgba(243,107,33,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(243,107,33,0.3) 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }} />
            </div>
            
            {/* SVG Map with positioned cities */}
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] p-4">
              <svg
                viewBox="0 0 800 450"
                className="w-full h-full scale-[1.18] sm:scale-[1.1] md:scale-100 -translate-x-2 sm:-translate-x-1 md:translate-x-0 origin-center"
                xmlns="http://www.w3.org/2000/svg"
              >
              
                {/* Gradient definitions */}
                <defs>
                  <radialGradient id="serviceRadius" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#F36B21" stopOpacity="0.35" />
                    <stop offset="50%" stopColor="#F36B21" stopOpacity="0.18" />
                    <stop offset="80%" stopColor="#F36B21" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#F36B21" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F36B21" stopOpacity="0" />
                    <stop offset="50%" stopColor="#F36B21" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#F36B21" stopOpacity="0" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Service radius circle */}
                <circle cx="400" cy="225" r="200" fill="url(#serviceRadius)" />
                
                {/* Connection lines between primary cities */}
                <line x1="280" y1="200" x2="400" y2="220" stroke="url(#lineGradient)" strokeWidth="2" />
                <line x1="400" y1="220" x2="550" y2="180" stroke="url(#lineGradient)" strokeWidth="2" />
                <line x1="280" y1="200" x2="550" y2="180" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                
                {/* === NORTHWEST - San Fernando Valley Area === */}
                {/* Sun Valley */}
                <g>
                  <circle cx="180" cy="100" r="4" fill="#666" />
                  <text x="180" y="90" textAnchor="middle" fill="#888" fontSize="10">Sun Valley</text>
                </g>
                
                {/* North Hollywood */}
                <g>
                  <circle cx="150" cy="160" r="5" fill="#777" />
                  <text x="150" y="150" textAnchor="middle" fill="#999" fontSize="11">N. Hollywood</text>
                </g>
                
                {/* Studio City */}
                <g>
                  <circle cx="120" cy="220" r="4" fill="#666" />
                  <text x="120" y="238" textAnchor="middle" fill="#888" fontSize="10">Studio City</text>
                </g>
                
                {/* Toluca Lake */}
                <g>
                  <circle cx="190" cy="195" r="4" fill="#666" />
                  <text x="190" y="213" textAnchor="middle" fill="#888" fontSize="10">Toluca Lake</text>
                </g>
                
                {/* === NORTH - Foothills === */}
                {/* Tujunga */}
                <g>
                  <circle cx="300" cy="70" r="4" fill="#666" />
                  <text x="300" y="60" textAnchor="middle" fill="#888" fontSize="10">Tujunga</text>
                </g>
                
                {/* La Crescenta */}
                <g>
                  <circle cx="380" cy="80" r="5" fill="#777" />
                  <text x="380" y="68" textAnchor="middle" fill="#999" fontSize="11">La Crescenta</text>
                </g>
                
                {/* Montrose */}
                <g>
                  <circle cx="340" cy="110" r="4" fill="#666" />
                  <text x="340" y="128" textAnchor="middle" fill="#888" fontSize="10">Montrose</text>
                </g>
                
                {/* La Canada Flintridge */}
                <g>
                  <circle cx="460" cy="90" r="5" fill="#777" />
                  <text x="460" y="78" textAnchor="middle" fill="#999" fontSize="11">La Canada</text>
                </g>
                
                {/* Altadena */}
                <g>
                  <circle cx="580" cy="100" r="5" fill="#777" />
                  <text x="580" y="88" textAnchor="middle" fill="#999" fontSize="11">Altadena</text>
                </g>
                
                {/* === PRIMARY CITIES === */}
                {/* Burbank - Northwest of Glendale */}
                <g filter="url(#glow)">
                  <circle cx="280" cy="200" r="18" fill="#F36B21" fillOpacity="0.2" stroke="#F36B21" strokeWidth="2" />
                  <circle cx="280" cy="200" r="6" fill="#F36B21">
                    <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <text x="280" y="175" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold">Burbank</text>
                </g>
                
                {/* Glendale - Center/HQ */}
                <g filter="url(#glow)">
                  <circle cx="400" cy="220" r="28" fill="#F36B21" fillOpacity="0.25" stroke="#F36B21" strokeWidth="3" />
                  <circle cx="400" cy="220" r="10" fill="#F36B21">
                    <animate attributeName="r" values="10;14;10" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite" />
                  </circle>
                  {/* Pulse ring */}
                  <circle cx="400" cy="220" r="28" fill="none" stroke="#F36B21" strokeWidth="1" opacity="0.5">
                    <animate attributeName="r" values="28;50;28" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <text x="400" y="190" textAnchor="middle" fill="#F36B21" fontSize="18" fontWeight="bold">Glendale</text>
                </g>
                
                {/* Pasadena - East of Glendale */}
                <g filter="url(#glow)">
                  <circle cx="550" cy="180" r="18" fill="#F36B21" fillOpacity="0.2" stroke="#F36B21" strokeWidth="2" />
                  <circle cx="550" cy="180" r="6" fill="#F36B21">
                    <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <text x="550" y="155" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold">Pasadena</text>
                </g>
                
                {/* === SOUTH OF GLENDALE === */}
                {/* Atwater Village */}
                <g>
                  <circle cx="360" cy="280" r="4" fill="#777" />
                  <text x="360" y="298" textAnchor="middle" fill="#999" fontSize="10">Atwater Village</text>
                </g>
                
                {/* Glassell Park */}
                <g>
                  <circle cx="420" cy="290" r="4" fill="#666" />
                  <text x="420" y="308" textAnchor="middle" fill="#888" fontSize="10">Glassell Park</text>
                </g>
                
                {/* Eagle Rock */}
                <g>
                  <circle cx="480" cy="260" r="5" fill="#777" />
                  <text x="480" y="278" textAnchor="middle" fill="#999" fontSize="11">Eagle Rock</text>
                </g>
                
                {/* Highland Park */}
                <g>
                  <circle cx="450" cy="320" r="5" fill="#777" />
                  <text x="450" y="338" textAnchor="middle" fill="#999" fontSize="11">Highland Park</text>
                </g>
                
                {/* Mount Washington */}
                <g>
                  <circle cx="390" cy="330" r="4" fill="#666" />
                  <text x="390" y="348" textAnchor="middle" fill="#888" fontSize="10">Mt. Washington</text>
                </g>
                
                {/* === SOUTHWEST === */}
                {/* Los Feliz */}
                <g>
                  <circle cx="300" cy="290" r="5" fill="#777" />
                  <text x="300" y="308" textAnchor="middle" fill="#999" fontSize="11">Los Feliz</text>
                </g>
                
                {/* Silver Lake */}
                <g>
                  <circle cx="320" cy="340" r="5" fill="#777" />
                  <text x="320" y="358" textAnchor="middle" fill="#999" fontSize="11">Silver Lake</text>
                </g>
                
                {/* Echo Park */}
                <g>
                  <circle cx="280" cy="370" r="4" fill="#666" />
                  <text x="280" y="388" textAnchor="middle" fill="#888" fontSize="10">Echo Park</text>
                </g>
                
                {/* Hollywood */}
                <g>
                  <circle cx="200" cy="290" r="5" fill="#777" />
                  <text x="200" y="308" textAnchor="middle" fill="#999" fontSize="11">Hollywood</text>
                </g>
                
                {/* Downtown LA */}
                <g>
                  <circle cx="320" cy="400" r="5" fill="#777" />
                  <text x="320" y="418" textAnchor="middle" fill="#999" fontSize="11">Downtown LA</text>
                </g>
                
                {/* === EAST - San Gabriel Valley === */}
                {/* South Pasadena */}
                <g>
                  <circle cx="550" cy="250" r="5" fill="#777" />
                  <text x="550" y="268" textAnchor="middle" fill="#999" fontSize="11">S. Pasadena</text>
                </g>
                
                {/* San Marino */}
                <g>
                  <circle cx="620" cy="230" r="4" fill="#666" />
                  <text x="620" y="248" textAnchor="middle" fill="#888" fontSize="10">San Marino</text>
                </g>
                
                {/* Alhambra */}
                <g>
                  <circle cx="580" cy="300" r="5" fill="#777" />
                  <text x="580" y="318" textAnchor="middle" fill="#999" fontSize="11">Alhambra</text>
                </g>
                
                {/* Arcadia */}
                <g>
                  <circle cx="670" cy="180" r="5" fill="#777" />
                  <text x="670" y="168" textAnchor="middle" fill="#999" fontSize="11">Arcadia</text>
                </g>
                
                {/* Monrovia */}
                <g>
                  <circle cx="720" cy="140" r="4" fill="#666" />
                  <text x="720" y="128" textAnchor="middle" fill="#888" fontSize="10">Monrovia</text>
                </g>
                
                {/* Duarte */}
                <g>
                  <circle cx="750" cy="110" r="4" fill="#666" />
                  <text x="750" y="98" textAnchor="middle" fill="#888" fontSize="10">Duarte</text>
                </g>
              </svg>
            </div>
          </div>
          
          {/* Title below */}
          <div className="text-center mt-8">
            <h3 className="text-2xl md:text-3xl font-bold text-primary tracking-wider">
              WHERE WE SERVICE
            </h3>
            <p className="text-foreground/60 text-sm mt-2">
              Available 24/7 with fast response times throughout our service area
            </p>
            <div className="mt-6">
              <details className="group mx-auto max-w-4xl rounded-xl border border-border/60 bg-card/50 px-5 py-4 text-left">
                <summary className="cursor-pointer list-none text-sm font-semibold text-foreground/80 transition-colors group-open:text-primary">
                  View full list of service cities
                </summary>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-foreground/70 sm:grid-cols-3 md:grid-cols-4">
                  {siteConfig.areaServed.map((city) => (
                    <span key={city} className="rounded-md border border-border/40 bg-background/40 px-2 py-1">
                      {city}
                    </span>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
