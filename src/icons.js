// src/icons.js
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Solid icons
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Brand icons
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

// Add icons to the library
library.add(faPhone, faEnvelope, faInstagram);

export { FontAwesomeIcon };