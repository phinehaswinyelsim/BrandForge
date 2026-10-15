export function RouteNetwork() {
  return (
    <svg className="route-network" viewBox="0 0 620 430" role="img" aria-labelledby="route-title route-description">
      <title id="route-title">Nkwa Logistics concept coverage routes</title>
      <desc id="route-description">A schematic network connecting Tarkwa, Takoradi, Accra, and Kumasi. It is not a geographic map.</desc>
      <defs><pattern id="network-grid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="currentColor" strokeWidth=".5" opacity=".15" /></pattern></defs>
      <rect width="620" height="430" fill="url(#network-grid)" />
      <path className="network-route network-route--main" d="M105 286 243 249 420 138 505 274" />
      <path className="network-route network-route--secondary" d="M105 286 286 103 420 138M243 249 505 274M286 103 505 274" />
      <path className="network-route network-route--signal" d="M105 286 243 249 420 138" />
      <g className="network-node" transform="translate(105 286)"><circle r="25"/><circle r="6"/><text x="-8" y="47">TARKWA</text></g>
      <g className="network-node" transform="translate(243 249)"><circle r="21"/><circle r="5"/><text x="-28" y="44">TAKORADI</text></g>
      <g className="network-node network-node--major" transform="translate(420 138)"><circle r="27"/><circle r="7"/><text x="-22" y="52">ACCRA</text></g>
      <g className="network-node" transform="translate(505 274)"><circle r="23"/><circle r="5"/><text x="-25" y="45">KUMASI</text></g>
      <text className="network-caption" x="32" y="36">SCHEMATIC ROUTE NETWORK / NOT TO SCALE</text>
      <text className="network-metric" x="32" y="394">04</text><text className="network-metric-label" x="92" y="389">COVERAGE TOWNS</text>
      <text className="network-metric" x="383" y="394">03</text><text className="network-metric-label" x="443" y="389">SERVICE MODES</text>
    </svg>
  );
}
