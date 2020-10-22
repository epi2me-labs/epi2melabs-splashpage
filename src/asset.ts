import { LabIcon } from '@jupyterlab/ui-components';

export const logoSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="148" height="198" viewBox="0 0 148 198">
    <defs>
      <filter id="Rectangle_1" x="0" y="0" width="148" height="68" filterUnits="userSpaceOnUse">
        <feOffset dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feFlood flood-opacity="0.098"/>
        <feComposite operator="in" in2="blur"/>
        <feComposite in="SourceGraphic"/>
      </filter>
      <filter id="Rectangle_2" x="0" y="130" width="148" height="68" filterUnits="userSpaceOnUse">
        <feOffset dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur-2"/>
        <feFlood flood-opacity="0.098"/>
        <feComposite operator="in" in2="blur-2"/>
        <feComposite in="SourceGraphic"/>
      </filter>
      <filter id="Rectangle_3" x="0" y="65" width="73" height="68" filterUnits="userSpaceOnUse">
        <feOffset dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur-3"/>
        <feFlood flood-opacity="0.098"/>
        <feComposite operator="in" in2="blur-3"/>
        <feComposite in="SourceGraphic"/>
      </filter>
    </defs>
    <g id="Component_1_2" data-name="Component 1 – 2" transform="translate(9 6)">
      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_1)">
        <rect id="Rectangle_1-2" data-name="Rectangle 1" width="130" height="50" rx="5" transform="translate(9 6)" fill="#08bbb2"/>
      </g>
      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_2)">
        <rect id="Rectangle_2-2" data-name="Rectangle 2" width="130" height="50" rx="5" transform="translate(9 136)" fill="#0179a4"/>
      </g>
      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_3)">
        <rect id="Rectangle_3-2" data-name="Rectangle 3" width="55" height="50" rx="5" transform="translate(9 71)" fill="#fccb10"/>
      </g>
    </g>
  </svg>
`;

const logoSVGSmall = `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="42" height="51" viewBox="0 0 42 51">
    <defs>
        <filter id="Rectangle_1" x="0" y="0" width="42" height="27" filterUnits="userSpaceOnUse">
        <feOffset dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feFlood flood-opacity="0.098"/>
        <feComposite operator="in" in2="blur"/>
        <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="Rectangle_2" x="0" y="24" width="42" height="27" filterUnits="userSpaceOnUse">
        <feOffset dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur-2"/>
        <feFlood flood-opacity="0.098"/>
        <feComposite operator="in" in2="blur-2"/>
        <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="Rectangle_3" x="0" y="12" width="28" height="27" filterUnits="userSpaceOnUse">
        <feOffset dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur-3"/>
        <feFlood flood-opacity="0.098"/>
        <feComposite operator="in" in2="blur-3"/>
        <feComposite in="SourceGraphic"/>
        </filter>
    </defs>
    <g id="Component_2_1" data-name="Component 2 – 1" transform="translate(9 6)">
        <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_1)">
        <rect id="Rectangle_1-2" data-name="Rectangle 1" width="24" height="9" rx="1" transform="translate(9 6)" fill="#08bbb2"/>
        </g>
        <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_2)">
        <rect id="Rectangle_2-2" data-name="Rectangle 2" width="24" height="9" rx="1" transform="translate(9 30)" fill="#0179a4"/>
        </g>
        <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_3)">
        <rect id="Rectangle_3-2" data-name="Rectangle 3" width="10" height="9" rx="1" transform="translate(9 18)" fill="#fccb10"/>
        </g>
    </g>
  </svg>
`;

export const labsLogoIcon = new LabIcon({ name: 'ui-components:labs', svgstr: logoSVGSmall });